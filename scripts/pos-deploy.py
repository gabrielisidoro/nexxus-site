"""
Pos-deploy do site, executado pelo GitHub Actions (.github/workflows/pos-deploy.yml).

Faz pelo runner o que o loop de conteudo nao consegue fazer do container dele,
que so enxerga o GitHub: purgar o cache do Cloudflare, reenviar o sitemap e ler
o estado de indexacao no Search Console. Setup dos secrets em docs/pos-deploy.md.

Modos:
  aguardar-pages  espera o GitHub Pages terminar de publicar o commit atual do
                  gh-pages. Purgar antes disso faz o Cloudflare recachear a
                  versao velha, entao os modos seguintes so rodam depois dele.
  purgar          limpa o cache inteiro da zona no Cloudflare.
  sitemap         reenvia o sitemap no Search Console.
  relatorio       estado de indexacao de cada URL do sitemap.

O relatorio nao traz consultas, impressoes nem cliques: o repositorio e publico,
e log e Summary do Actions de repositorio publico ficam visiveis para qualquer
um. Desempenho e dado proprio da Nexxus e sai pelo conector do Windsor.ai.

Um modo cuja credencial nao existe avisa e sai com 0: o workflow nao fica
vermelho enquanto os secrets nao forem cadastrados.
"""

import datetime
import json
import os
import re
import sys
import time
from urllib.parse import quote

import requests

PROPRIEDADE = 'sc-domain:nexxusagencia.com.br'
SITEMAP = 'https://nexxusagencia.com.br/sitemap.xml'
ESCOPO_GSC = 'https://www.googleapis.com/auth/webmasters'
WEBMASTERS = 'https://www.googleapis.com/webmasters/v3/sites/' + quote(PROPRIEDADE, safe='')
INSPECAO = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect'

ESPERA_MAXIMA_PAGES = 15 * 60
INTERVALO_PAGES = 15
COMMIT_JA_PUBLICADO = 60 * 60
TIMEOUT_HTTP = 30


def log(texto=''):
    print(texto, flush=True)


def resumo(texto):
    """Escreve no resumo do job (aba Summary da execucao) e no log."""
    log(texto)
    caminho = os.environ.get('GITHUB_STEP_SUMMARY')
    if caminho:
        with open(caminho, 'a', encoding='utf-8') as f:
            f.write(texto + '\n')


# ---------------------------------------------------------------- GitHub Pages


def _github(caminho):
    resp = requests.get(
        'https://api.github.com/repos/' + os.environ['GITHUB_REPOSITORY'] + caminho,
        headers={
            'Authorization': 'Bearer ' + os.environ['GITHUB_TOKEN'],
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
        },
        timeout=TIMEOUT_HTTP,
    )
    resp.raise_for_status()
    return resp.json()


def _run_do_pages(sha):
    """A execucao de 'pages build and deployment' do commit, ou None."""
    runs = _github('/actions/runs?head_sha=' + sha + '&per_page=20')['workflow_runs']
    for run in runs:
        if run.get('path', '').startswith('dynamic/pages/'):
            return run
    return None


def _ref_gh_pages():
    return _github('/git/ref/heads/gh-pages')['object']['sha']


def _commit_antigo(sha, agora_utc):
    """True se o commit do gh-pages tem mais de 1 hora: o Pages ja o publicou faz tempo."""
    data = _github('/git/commits/' + sha)['committer']['date']
    quando = datetime.datetime.fromisoformat(data.replace('Z', '+00:00'))
    return (agora_utc - quando).total_seconds() > COMMIT_JA_PUBLICADO


def aguardar_pages(agora=time.monotonic, dormir=time.sleep,
                   agora_utc=lambda: datetime.datetime.now(datetime.timezone.utc)):
    """
    Espera o 'pages build and deployment' do commit atual do gh-pages terminar.

    Rele o gh-pages a cada volta: se um push mais novo substituir o build que
    estava sendo esperado, passa a esperar o novo. Erro passageiro da API do
    GitHub nao derruba a espera. Nenhum caminho devolve 0 sem publicacao.
    """
    limite = agora() + ESPERA_MAXIMA_PAGES
    sha = None
    antigo = {}
    while True:
        try:
            atual = _ref_gh_pages()
            if atual != sha:
                sha = atual
                log('gh-pages em ' + sha[:7] + ', esperando o GitHub Pages publicar esse commit')
            run = _run_do_pages(sha)
            if run is None:
                # Deploy sem mudanca no site nao cria commit no gh-pages, e o run
                # do commit antigo some com a retencao do Actions. Commit com
                # mais de 1 hora ja foi publicado: um build atrasado apareceria
                # aqui como run em fila.
                if sha not in antigo:
                    antigo[sha] = _commit_antigo(sha, agora_utc())
                if antigo[sha]:
                    log('gh-pages sem commit novo (' + sha[:7] + ' tem mais de 1 hora): '
                        'a versao servida ja e esta.')
                    return 0
            elif run.get('status') == 'completed':
                if run.get('conclusion') == 'success':
                    log('Pages publicado: ' + run.get('html_url', ''))
                    return 0
                if _ref_gh_pages() == sha:
                    log('O build do Pages terminou como "' + str(run.get('conclusion')) + '". '
                        'Sem publicacao nova, nao purgo o cache: ' + run.get('html_url', ''))
                    return 1
                log('O build de ' + sha[:7] + ' foi substituido por um push mais novo no gh-pages.')
        except requests.RequestException as erro:
            log('Erro passageiro na API do GitHub, tento de novo: ' + str(erro)[:200])
        if agora() >= limite:
            log('O Pages nao publicou ' + (sha or '?')[:7] + ' em ' + str(ESPERA_MAXIMA_PAGES // 60)
                + ' minutos. Nao purgo antes da publicacao, porque o Cloudflare recachearia a '
                'versao velha. Rode este workflow de novo pela aba Actions quando o Pages terminar.')
            return 1
        dormir(INTERVALO_PAGES)


# ------------------------------------------------------------------ Cloudflare


def purgar():
    token = os.environ.get('CLOUDFLARE_API_TOKEN', '').strip()
    zona = os.environ.get('CLOUDFLARE_ZONE_ID', '').strip()
    if not token or not zona:
        resumo('- Cloudflare: **pulado**, faltam os secrets `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ZONE_ID`.')
        return 0
    resp = requests.post(
        'https://api.cloudflare.com/client/v4/zones/' + zona + '/purge_cache',
        headers={'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'},
        json={'purge_everything': True},
        timeout=TIMEOUT_HTTP,
    )
    try:
        corpo = resp.json()
    except ValueError:
        corpo = {}
    if resp.ok and corpo.get('success'):
        resumo('- Cloudflare: cache da zona **purgado**.')
        return 0
    erros = '; '.join(e.get('message', '') for e in corpo.get('errors', [])) or resp.text[:300]
    resumo('- Cloudflare: **falhou** (HTTP ' + str(resp.status_code) + '): ' + erros)
    return 1


# -------------------------------------------------------------- Search Console


def _token_gsc():
    """Access token do Search Console, ou None se o secret nao existe."""
    bruto = os.environ.get('GSC_SERVICE_ACCOUNT_JSON', '').strip()
    if not bruto:
        return None
    from google.auth.transport.requests import Request
    from google.oauth2 import service_account

    credenciais = service_account.Credentials.from_service_account_info(
        json.loads(bruto), scopes=[ESCOPO_GSC]
    )
    credenciais.refresh(Request())
    return credenciais.token


def _cabecalho(token):
    return {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}


def _explicar_403(resp):
    if resp.status_code == 403:
        return (' Confira se a Google Search Console API esta ativada no projeto do Google '
                'Cloud e se a conta de servico e usuaria Completa da propriedade ' + PROPRIEDADE
                + '. Se ja for, promova-a a proprietaria delegada. Ver docs/pos-deploy.md, passo 5.')
    return ''


def sitemap():
    token = _token_gsc()
    if not token:
        resumo('- Sitemap: **pulado**, falta o secret `GSC_SERVICE_ACCOUNT_JSON`.')
        return 0
    url = WEBMASTERS + '/sitemaps/' + quote(SITEMAP, safe='')
    resp = requests.put(url, headers=_cabecalho(token), timeout=TIMEOUT_HTTP)
    if not resp.ok:
        resumo('- Sitemap: **falhou** (HTTP ' + str(resp.status_code) + '): '
               + resp.text[:300] + _explicar_403(resp))
        return 1
    resumo('- Sitemap: `' + SITEMAP + '` **reenviado** ao Search Console.')
    return 0


def _urls_do_sitemap():
    """Le o sitemap do gh-pages cru, que nao passa pelo cache do Cloudflare."""
    cru = ('https://raw.githubusercontent.com/' + os.environ['GITHUB_REPOSITORY']
           + '/gh-pages/sitemap.xml')
    resp = requests.get(cru, timeout=TIMEOUT_HTTP)
    resp.raise_for_status()
    return re.findall(r'<loc>\s*([^<\s]+)\s*</loc>', resp.text)


def _inspecionar(token, url):
    resp = requests.post(
        INSPECAO,
        headers=_cabecalho(token),
        json={'inspectionUrl': url, 'siteUrl': PROPRIEDADE, 'languageCode': 'pt-BR'},
        timeout=TIMEOUT_HTTP,
    )
    if not resp.ok:
        return {'erro': 'HTTP ' + str(resp.status_code) + _explicar_403(resp)}
    return resp.json().get('inspectionResult', {}).get('indexStatusResult', {})


def _celula(valor):
    return str(valor).replace('|', '/').replace('\n', ' ')


def relatorio(hoje=None):
    token = _token_gsc()
    if not token:
        resumo('- Relatorio de indexacao: **pulado**, falta o secret `GSC_SERVICE_ACCOUNT_JSON`.')
        return 0
    hoje = hoje or datetime.date.today()
    falhas = 0

    urls = _urls_do_sitemap()
    resumo('')
    resumo('## Indexacao por URL (' + str(len(urls)) + ' no sitemap, ' + hoje.isoformat() + ')')
    resumo('')
    resumo('| URL | Veredito | Estado | Ultimo rastreio | Canonical do Google |')
    resumo('|---|---|---|---|---|')
    indexadas = 0
    for url in urls:
        r = _inspecionar(token, url)
        if 'erro' in r:
            falhas += 1
            resumo('| ' + url + ' | erro | ' + _celula(r['erro']) + ' | | |')
            continue
        if r.get('verdict') == 'PASS':
            indexadas += 1
        canonical = r.get('googleCanonical', '')
        if canonical == url:
            canonical = 'a propria'
        resumo('| ' + url + ' | ' + _celula(r.get('verdict', '')) + ' | '
               + _celula(r.get('coverageState', '')) + ' | '
               + _celula(r.get('lastCrawlTime', 'nunca')) + ' | ' + _celula(canonical) + ' |')
    resumo('')
    resumo('**' + str(indexadas) + ' de ' + str(len(urls)) + ' URLs com veredito PASS.**')

    return 1 if falhas else 0


MODOS = {
    'aguardar-pages': aguardar_pages,
    'purgar': purgar,
    'sitemap': sitemap,
    'relatorio': relatorio,
}

if __name__ == '__main__':
    if len(sys.argv) != 2 or sys.argv[1] not in MODOS:
        sys.exit('uso: python scripts/pos-deploy.py ' + '|'.join(MODOS))
    sys.exit(MODOS[sys.argv[1]]())
