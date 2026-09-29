# Pós-deploy automático: cache e Search Console

O loop de conteúdo roda num container que só enxerga o GitHub. Ele não consegue
purgar o Cloudflare nem falar com o Search Console. O runner do GitHub Actions
consegue, então o workflow `.github/workflows/pos-deploy.yml` faz isso sozinho
depois de cada deploy:

1. **Espera o GitHub Pages terminar de publicar.** Purgar antes disso faz o
   Cloudflare recachear a versão velha por mais uma hora, que é a regra "depois
   que o gh-pages publicar, nunca antes".
2. **Purga o cache inteiro da zona no Cloudflare.**
3. **Reenvia `https://nexxusagencia.com.br/sitemap.xml` no Search Console.**
4. **Inspeciona cada URL do sitemap** e escreve o estado de indexação na aba
   Summary da execução: veredito, estado de cobertura ("Descoberta,
   atualmente não indexada", "Rastreada, atualmente não indexada" etc.), último
   rastreio e canonical escolhida pelo Google.

Além do deploy, ele roda sozinho terça e quinta às 06:17 de Brasília, só com a
etapa 4, para o loop das 07:00 ler o estado fresco. E pode ser disparado à mão
em Actions > "Pos-deploy (cache e Search Console)" > Run workflow.

**Cada etapa pula sem erro enquanto o secret dela não existir.** Dá para
cadastrar só o Cloudflare hoje e o Google depois.

## O que continua manual

**Solicitar indexação** na Inspeção de URLs. O Google não expõe esse botão em
API nenhuma para página comum. A Indexing API existe, mas só é suportada para
vaga de emprego e transmissão ao vivo, e usá-la para blog é justamente o tipo de
atalho que o Google trata como abuso. O relatório da etapa 4 diz quais URLs
precisam do clique, em ordem.

## Setup, uma vez só

Os secrets ficam em **GitHub > repositório nexxus-site > Settings > Secrets and
variables > Actions > New repository secret**. Nunca cole nenhum deles em chat,
issue ou commit.

### Cloudflare (5 minutos)

1. Cloudflare > ícone do perfil > **My Profile > API Tokens > Create Token >
   Create Custom Token**.
2. Permissions: **Zone | Cache Purge | Purge**. Só essa.
3. Zone Resources: **Include | Specific zone | nexxusagencia.com.br**.
4. Create Token, copie o token (ele só aparece uma vez).
5. Na página da zona `nexxusagencia.com.br`, aba **Overview**, coluna da
   direita, seção API: copie o **Zone ID**.
6. Crie os secrets `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ZONE_ID`.

### Google Search Console (15 minutos)

1. [console.cloud.google.com](https://console.cloud.google.com): crie um projeto,
   por exemplo `nexxus-site`.
2. **APIs e serviços > Biblioteca > Google Search Console API > Ativar.**
3. **IAM e administrador > Contas de serviço > Criar conta de serviço.** Nome
   `pos-deploy`. Não precisa de papel nenhum no projeto.
4. Abra a conta criada > **Chaves > Adicionar chave > Criar nova chave > JSON.**
   O arquivo baixa sozinho.
5. Search Console > propriedade `nexxusagencia.com.br` > **Configurações >
   Usuários e permissões > Adicionar usuário**: o e-mail da conta de serviço
   (termina em `iam.gserviceaccount.com`), permissão **Completa**. É o menor
   privilégio que a API de sitemap aceita pela documentação dela. Se o sitemap
   falhar com HTTP 403 mesmo assim, promova a conta a proprietário delegado:
   três pontos ao lado do seu próprio usuário > **Gerenciar proprietários da
   propriedade > Adicionar proprietário**. A ajuda do Google exige proprietário
   para a tela de Sitemaps, e os relatos sobre a API divergem.
6. Crie o secret `GSC_SERVICE_ACCOUNT_JSON` colando o conteúdo inteiro do
   arquivo JSON. Depois apague o arquivo do seu computador.

**Se o passo 4 der "a criação de chaves de conta de serviço está desativada":**
é a política padrão de organizações Google Workspace criadas desde 2024. Quem é
administrador do Workspace desliga só para esse projeto em **IAM e
administrador > Políticas da organização > "Disable service account key
creation" (iam.disableServiceAccountKeyCreation) > Gerenciar política >
Substituir a política do pai > Desativada**, só no projeto `nexxus-site`.

### Testar

Actions > **Pos-deploy (cache e Search Console)** > Run workflow. Na execução,
a aba Summary mostra cada etapa como feita, pulada ou falha, e a tabela de
indexação. Se o sitemap falhar com HTTP 403, veja o fim do passo 5, ou a API
não foi ativada (passo 2).

## Por que o relatório não traz consultas e cliques

O repositório é público, e log e Summary de execução do Actions de repositório
público são visíveis para qualquer um. Estado de indexação por URL não é
segredo: qualquer pessoa infere com uma busca `site:`. Consultas, impressões e
cliques são dado próprio da Nexxus e ficam fora daqui. Para o loop ler
desempenho, o canal é o conector de Search Console do Windsor.ai, que é privado.
