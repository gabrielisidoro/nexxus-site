# Loop semanal de conteúdo da Nexxus

Documento operacional do ciclo que publica 2 artigos por semana no blog e os
entrega ao Google. Escrito para ser executado por um agente, com pontos de
parada explícitos onde a decisão é humana.

Site: https://nexxusagencia.com.br
Search Console: propriedade de domínio `sc-domain:nexxusagencia.com.br`

---

## 1. Gatilho

**Terça e quinta, 7h00 (horário de Brasília).**

Dois dias, não três, e nunca terça com quarta. A meia-vida de um post de
LinkedIn é de aproximadamente 24 horas e cerca de metade das impressões cai
nas primeiras 48 horas: publicar em dias consecutivos faz o segundo artigo
competir com a cauda de distribuição do primeiro. Terça e quinta respeitam
esse ciclo e são, nas três maiores bases públicas (Sprout Social, Metricool e
Buffer), os dois dias mais fortes para público B2B.

O horário de publicação não move ranking. O Google não liga para o dia da
semana em que o artigo sobe. As 7h00 servem para outra coisa: garantir que o
artigo esteja revisado, no sitemap e submetido ao Search Console antes da
primeira janela de distribuição do dia.

**Janela de distribuição** (separada da publicação):
- LinkedIn: terça e quinta às 11h30, com quem publicou disponível de 30 a 60
  minutos depois respondendo comentário por comentário. O alcance é decidido
  nos primeiros 90 minutos.
- Instagram: carrossel derivado do artigo entre 11h e 15h; Reels entre 18h e
  21h. Usar o mesmo horário para os dois joga fora um dos picos.
- Redistribuição obrigatória: o mesmo artigo volta ao LinkedIn 48 a 72 horas
  depois com ângulo diferente. O post morre em cerca de 24 horas, o artigo
  vive anos.
- Sexta aceita reaproveitamento leve, nunca lançamento. Sábado e domingo, nada.

**Teste pendente:** rodar 6 a 8 semanas alternando janela A (11h30) e janela B
(16h às 18h) antes de fixar. Sprout e Buffer discordam sobre o pico do
LinkedIn e as duas medem coisas diferentes, então não dá para resolver no
papel.

---

## 2. Fonte de pauta

Ordem de prioridade. A pauta sai da primeira fonte que produzir um tema com
lacuna real de SERP.

1. **Lacuna de SERP com intenção comercial.** Buscar no Google os termos do
   nicho e procurar perguntas cuja resposta não existe na primeira página. A
   pauta de maior valor é aquela em que todo concorrente escreve "fale com um
   consultor" no lugar da informação. Foi assim que saiu o primeiro artigo
   deste ciclo, sobre custo de terceirização.
2. **Search Console, relatório de Desempenho.** Consultas em que o site já
   recebe impressão mas está em posição 8 a 30. É demanda comprovada com
   entrega fraca, o alvo mais barato que existe.
3. **Perguntas reais de reunião comercial.** Objeção ouvida em call vira
   artigo. É a única fonte que produz informação que nenhum concorrente tem.
4. **Sazonalidade do calendário do cliente.** Fechamento de semestre, virada
   de ano e planejamento orçamentário mudam o que o dono está decidindo.
5. **Tendência do Instagram revertida ao contexto.** Formato ou gancho em alta
   adaptado ao tema comercial, nunca o tema em si. Serve para distribuição, não
   define a pauta do blog.

**Regras de pauta**
- Os dois artigos da semana precisam ter intenção de busca diferente entre si:
  um comercial (fecha venda) e um informacional (abre diagnóstico).
- Nunca repetir termo já coberto por um artigo publicado. Se o tema evoluiu,
  atualizar o artigo existente e mexer no campo `updated`, em vez de criar
  um novo que canibaliza.
- Priorizar cauda longa. O site tem pouca autoridade: guias amplos disputam com
  RD Station, Agendor e Meetime e não têm chance no curto prazo.

---

## 3. Verificador com rubrica

Roda antes de publicar. Nota final é a média ponderada. **Corte: 85 pontos.**
Abaixo disso o artigo volta para reescrita, não vai ao ar.

| Peso | Critério | Como medir | Reprova se |
|---|---|---|---|
| 20 | Densidade factual com fonte | Contar afirmações numéricas e conferir se cada uma tem fonte nomeada. Dado com mais de 2 anos declara a idade na própria frase. Dado interno vem rotulado como dado próprio, nunca como benchmark de mercado. | Qualquer número sem fonte. Sem negociação. |
| 15 | Cobertura do termo e da intenção | Termo principal no title, H1, primeiro parágrafo, ao menos um H2 e na meta description. Quem buscou sai com a resposta ou precisa buscar de novo? | A pergunta implícita do termo não é respondida antes do terceiro H2. |
| 12 | Superação verificada da SERP | Abrir os 3 primeiros orgânicos do termo e listar o que cobrem. | Menos de 2 blocos de conteúdo que nenhum dos três tem. Ou o artigo é uma lista genérica de vantagens e desvantagens. |
| 12 | Formato diferenciado | Presença de tabela comparativa, FAQ com 5 ou mais perguntas e um elemento de decisão (checklist, cálculo passo a passo ou critério de corte). | Falta tabela ou falta FAQ. |
| 10 | Ausência de marcas de texto de IA | Busca literal por travessão e pela lista de clichês. Ler os 3 primeiros parágrafos em voz alta. | Um travessão que seja. Ou um parágrafo puramente introdutório entre um H2 e o conteúdo dele. |
| 10 | Ativos técnicos | Slug em kebab-case sem acento, title até 60 caracteres, excerpt de 140 a 160, `date` e `updated` em ISO, 5 a 7 keywords, capa existente em 16x9, `readingMinutes` coerente. Rich Results Test por URL ao vivo. | Rich Results Test com erro em BlogPosting ou FAQPage. |
| 8 | Prova própria | Teste do apagamento: trocar "Nexxus" por qualquer concorrente. | O texto continua inteiramente válido. Significa que qualquer um poderia ter escrito. |
| 8 | Rede de links | Contar links internos com âncora descritiva (nunca "leia mais") e externos para as fontes. | Menos de 3 links internos, sendo ao menos 1 para página de serviço e 1 para outro post. |
| 5 | Escaneabilidade | Parágrafo com no máximo 4 linhas, nenhum bloco corrido acima de 250 palavras sem subtítulo, alt text descritivo na capa. | Bloco de texto corrido longo demais. |

**Extensão alvo:** 1.500 a 2.200 palavras. O padrão que ranqueia no nicho fica
entre 1.200 e 1.500, então o alvo é superar com folga sem encher linguiça.

---

## 3b. Os cinco passes obrigatórios

A rubrica sozinha não pega tudo. Em 26/07/2026 um artigo passou pela rubrica e
foi ao ar com a capa cortada em todos os cards, porque a rubrica avaliava o
texto e os campos, nunca o resultado renderizado. Cada passe abaixo tem um
mandato próprio e **poder de veto**: qualquer um deles reprovando, o post não
publica. Rodam nesta ordem.

### Passe 1: editor-chefe de blog

Responde por uma pergunta só: **este artigo merece existir?**

- A pauta resolve um problema real de quem decide comprar, ou é conteúdo de
  preencher calendário?
- A promessa do título é cumprida no corpo? Se o título diz "quanto custa" e o
  texto não dá número, o artigo mentiu.
- O ângulo é diferente do que já existe na primeira página, ou é a mesma lista
  de vantagens e desvantagens com outras palavras?
- Tem prova própria? Aplicar o teste do apagamento: trocar "Nexxus" por
  qualquer concorrente. Se o texto continuar válido, qualquer um poderia ter
  escrito, e não vale publicar.
- A profundidade é de quem opera ou de quem pesquisou na véspera? Um dono lê
  três parágrafos e sabe dizer a diferença.
- Corta o que sobra. Parágrafo que não entrega informação sai.

### Passe 2: especialista de SEO

Responde por: **este artigo tem chance real de ranquear?**

- Palavra-chave principal com intenção clara e concorrência compatível com um
  site de baixa autoridade. Guia amplo disputando com RD Station, Agendor e
  Meetime não tem chance no curto prazo; cauda longa tem.
- Abrir os 3 primeiros orgânicos do termo e listar o que cobrem. O artigo
  precisa de no mínimo 2 blocos de informação que nenhum deles tem.
- On-page: termo no title (primeiros 60 caracteres), no H1, no primeiro
  parágrafo, em ao menos um H2 e na meta description. Secundárias distribuídas
  de forma natural.
- H2 em forma de pergunta respondido nas duas primeiras frases seguintes. É o
  que ganha featured snippet.
- Dados estruturados: BlogPosting, BreadcrumbList, FAQPage e Organization na
  mesma página (o publisher do BlogPosting referencia a Organization por `@id`,
  e `@id` só resolve dentro do grafo da própria página).
- **Rede de links.** Mínimo de 3 internos com âncora descritiva, sendo ao menos
  1 para página de serviço e 1 para outro post, e 3 externos para as fontes
  citadas. Sintaxe suportada no corpo, na lista e no FAQ:
  `[âncora descritiva](/destino)`. Nunca usar "leia mais" ou "clique aqui".
  Todo post novo precisa receber ao menos 1 link vindo de página já indexada,
  senão vira órfão e cai em "Descoberta, mas não indexada".
- Canibalização: nenhum post existente disputa o mesmo termo. Se disputa,
  atualizar o antigo em vez de criar um novo.
- Peso da página: capa em WebP ou JPG otimizado, `width` e `height` explícitos,
  imagem do topo sem `loading=lazy`.

### Passe 3: especialista de Google Search e indexação

Responde por: **este artigo vai entrar no índice, e os anteriores estão
melhorando?** Este passe roda **antes** de escrever o artigo novo, porque
manutenção rende mais que volume num site de baixa autoridade.

Rotina de manutenção, toda execução, no Search Console:

0. **O rastreador está recebendo conteúdo?** Antes de qualquer diagnóstico de
   link, `curl -s <url no gh-pages> | wc -c` num post. Menos de 5 KB significa
   que o corpo não está no HTML e nenhum link interno vai resolver nada. Ver a
   armadilha correspondente na seção 6.
1. **Indexação dos posts anteriores.** Inspecionar a URL de cada post publicado
   nas últimas 4 semanas. Estados e ação:
   - *Indexada*: nada a fazer, seguir para o desempenho.
   - *Descoberta, atualmente não indexada*: link interno fraco. Adicionar links
     de páginas já indexadas apontando para ela e solicitar indexação de novo.
   - *Rastreada, atualmente não indexada*: o Google achou o conteúdo fraco ou
     redundante. Reescrever com informação que não existe na SERP, atualizar o
     campo `updated` e ressubmeter.
   - *Página com redirecionamento* ou *404*: erro técnico. Escalar.
2. **Consultas em posição 8 a 30** no relatório de Desempenho. É demanda
   comprovada com entrega fraca, o alvo mais barato que existe. Melhorar o
   artigo que já ranqueia vale mais que publicar um novo. Se houver uma
   consulta nessa faixa, **ela vira a pauta da semana** em vez de tema novo.
3. **Consultas com impressão e zero clique.** Title e meta description não
   estão vendendo o clique. Reescrever os dois e registrar a data.
4. **Cobertura do sitemap.** Páginas descobertas no Search Console tem que bater
   com o número de URLs do sitemap. Divergiu, investigar.

Depois de publicar: reenviar o sitemap, solicitar indexação da URL nova, e
**voltar a inspecionar em 3 a 5 dias** para confirmar o estado. Só aí o ciclo
fecha.

Expectativa realista, para não perseguir promessa falsa: uma página nova
raramente chega ao topo em semanas. O trabalho é acumulativo e o que move o
ponteiro é consistência, links internos e melhorar o que já tem impressão.
Prometer primeiro lugar é o que o mercado faz; medir posição e agir é o que
funciona.

### Passe 4: design (QA visual)

### Passe de design (QA visual)

Roda **sempre**, com screenshot de verdade, nunca por leitura de código.
Ferramenta: `carrossel/check-post.mjs <url> <prefixo> <scrollY>`, que já captura
desktop (1440) e mobile (390).

Capturar e olhar, no mínimo:
1. Card do post em `/blog`, desktop e mobile
2. Topo do artigo com a capa, desktop e mobile
3. Cada tabela do artigo, desktop e mobile
4. Home, se o post aparecer na prévia de recentes

Reprova se encontrar qualquer um destes:
- **Imagem cortada.** A capa do site é 3/2 e o componente `PostCover` usa
  `aspect-[3/2]`. Se a proporção da imagem gerada não for exatamente essa, o
  `object-cover` corta as laterais.
- **Texto gravado na capa do site.** A capa do card é só foto. Título e
  categoria já são desenhados pelo card. Texto na imagem duplica a informação e
  quebra em qualquer recorte. Texto gravado só no `ogImage`, que é 1200x630 e
  serve ao WhatsApp e ao LinkedIn, onde não existe card com texto ao lado.
- **Elemento duplicado.** Chip de categoria aparecendo duas vezes, logo
  aparecendo duas vezes.
- Texto estourando o container, tabela forçando rolagem horizontal da página
  inteira (a tabela rola dentro do próprio bloco, a página não), contraste
  insuficiente sobre foto, faixa branca sobrando abaixo de alguma seção.

### Passe 5: copy

Ler o artigo inteiro do começo ao fim, como leitor, não como autor. Reprova se:
- Existir travessão. Regra de marca, sem exceção.
- Existir clichê da lista da rubrica ("no mundo de hoje", "não é apenas",
  "mergulhe", "em suma", "é importante ressaltar", "vamos explorar").
- Existir parágrafo que só anuncia o que vem depois em vez de entregar.
- O primeiro parágrafo puder abrir o artigo de qualquer concorrente.
- A promessa do título não for cumprida no corpo. Se o título diz "quanto
  custa" e o texto não dá número, reprova.
- O excerpt não fizer sentido sozinho, fora de contexto, no card e no Google.
- Houver adjetivo no lugar de dado. Trocar "muito caro" por o número.

---

## 4. Definição de pronto

O artigo só conta como entregue quando **todos** os itens abaixo estiverem
verificados, nesta ordem:

1. Nota do verificador maior ou igual a 85.
2. Os cinco passes da seção 3b aprovados: editor-chefe, SEO, Google Search,
   design e copy. Cada um tem poder de veto. O passe de design sem screenshot
   real não conta como aprovado.
3. Arquivo do post criado e registrado em `src/data/posts/index.ts`.
4. Duas imagens geradas com foto real do escritório, nunca banco nem IA:
   `cover` em 3/2 sem texto e `ogImage` em 1200x630 com o título gravado.
4. `npm run build` sem erro. O build regenera o sitemap e pré-renderiza o
   `<head>` de cada rota automaticamente.
5. Commit e push na `main`. O GitHub Actions publica na `gh-pages`.
6. Deploy confirmado lendo o branch `gh-pages` cru, **não** o domínio. O
   domínio mente por até 1 hora por causa do cache.
7. **Purge do cache do Cloudflare.** Sem isso o Google e você continuam vendo
   a versão antiga. A zona ignora query string, então cache-buster não resolve.
   Dashboard > Caching > Configuração > Limpar tudo.
8. Verificação no domínio: status 200, `og:type=article` e `og:image` apontando
   para a capa do post.
9. Sitemap reenviado no Search Console (URL completa, não caminho relativo).
10. Indexação solicitada para a URL do post na Inspeção de URLs.

Depois do passo 10 não há mais nada a fazer: a URL entra na fila de rastreio
prioritário do Google e a indexação leva de dias a semanas. Voltar a inspecionar
a URL em 3 a 5 dias para confirmar o estado, e só então considerar o ciclo
encerrado.

**Limite diário do Search Console:** a solicitação de indexação tem cota. Em
uma execução que precise ressubmeter vários posts antigos, priorizar nesta
ordem: post novo, depois os que estão em "Descoberta, atualmente não indexada",
depois os reescritos. O resto fica para a execução seguinte.

---

## 4b. Pós-deploy automático (desde 29/09/2026)

O workflow `.github/workflows/pos-deploy.yml` roda depois de cada deploy e faz,
pelo runner do GitHub, os passos 7 e 9 da definição de pronto: espera o Pages
publicar, purga o cache do Cloudflare e reenvia o sitemap. Também inspeciona
cada URL do sitemap no Search Console e escreve o estado de indexação no
Summary da execução. Roda sozinho terça e quinta às 06:17, antes do loop.
Setup e limites em `docs/pos-deploy.md`.

Como o loop usa isso, a cada ciclo:

- **Antes do passe 3**, abrir a execução mais recente do workflow
  "Pos-deploy (cache e Search Console)" pelas ferramentas do GitHub (lista de
  execuções do workflow `pos-deploy.yml` e log do job). Se a etapa "Relatorio
  de indexacao" rodou de verdade (não "pulado"), **ela substitui a busca
  `site:`** como fonte do estado de cada URL, e traz o estado exato ("Descoberta,
  atualmente não indexada" contra "Rastreada, atualmente não indexada"), que a
  busca `site:` não distingue e que decide a ação da seção 3b.
- **Depois do push**, conferir a execução disparada pelo deploy. Se as etapas
  de purge e sitemap aparecem como feitas, **tirar os itens a) e b) da checklist
  do Gabriel**. Se aparecem como puladas, os secrets ainda não foram
  cadastrados e os itens continuam na checklist. Se falharam, reportar o erro
  do log.
- **Solicitar indexação continua manual.** Não existe API para página comum.
  Listar na checklist as URLs que o relatório marcou como não indexadas, na
  ordem de prioridade acima.
- Consultas, impressões e cliques **não** saem no relatório do Actions, porque
  o repositório é público e o Summary também. Desempenho vem pelo conector de
  Search Console do Windsor.ai, quando estiver conectado.

---

## 4c. Fotos e capas sem repetir (desde 29/09/2026)

O blog chegou a 9 posts com só 6 fotos, e três delas saíram em duas capas cada
(equipe-operacao, estudio e sala-reuniao). No `/blog` isso aparece como o mesmo
card duas vezes. O Gabriel mandou 4 fotos novas em 29/09. Regras a partir daqui:

- **Toda foto do banco está cadastrada em `carrossel/img/global/fotos.json`,
  com o ambiente dela.** Foto nova entra no cadastro antes de ir para capa.
- **Antes de escolher a foto, rodar `node carrossel/checar-fotos.mjs`.** Ele
  lista as fotos livres e as capas por ambiente. Duas fotos do mesmo ambiente
  ainda leem como repetição no card, então vale o ambiente com menos capas.
- **A ordem dos próximos posts já está decidida em `fotos.json`, chave
  `proximos_posts`:** primeiro `equipe-banner.webp` a 44% (og da
  `equipe-janela.webp` a 66%), depois `sala-reuniao-tijolo.webp` a 38% (og da
  mesma a 40%). Os dois recortes foram escolhidos olhando uma grade simulada do
  `/blog` contra as 9 capas. `equipe-janela` não serve de capa (o banner lê
  "rexxus" pela dobra do tecido, ou o logo NIKE de uma mochila fica no centro)
  e `estudio-mesa` também não (lê como mais uma sala vazia com mesa e TV).
- **Do terceiro post novo em diante, não há capa sem foto nova.** Nenhum outro
  recorte da sala de reunião nem do estúdio passa. Se faltar foto, pedir ao
  Gabriel antes de repetir: é condição de escalar, não decisão do loop.
- **Foto nova sem recorte aprovado:** rodar
  `node carrossel/testar-enquadramento.mjs img/global/<foto>.webp`, que gera a
  folha com todas as faixas 3/2 e og rotuladas pelo y% do `background-position`,
  olhar a folha, escolher, e registrar em `fotos.json`.
- **O passe 4 inclui `node carrossel/checar-fotos.mjs` sem erro.** Ele reprova
  capa que repita foto além do limite ou use foto fora do cadastro.
- **Gerar as imagens sempre com `node carrossel/montar-capas.mjs` antes do
  `shot-covers.mjs`.** As fontes do cartão social agora ficam em
  `carrossel/fontes/`, e o montar embute fontes e logo no `.build.html`. Nunca
  voltar a puxar Google Fonts: o container não alcança, e o título sai com fonte
  de sistema sem erro nenhum.

Pedido de fotos para o Gabriel, quando chegar a hora: **na horizontal, e
enviadas como arquivo, não como foto do WhatsApp.** A capa é 3/2 e aproveita só
37% da altura de uma foto vertical, e o WhatsApp reduz tudo para 900x1600.
Ambientes que ainda não aparecem em capa nenhuma: recepção, fachada, copa,
alguém em ligação de fone, quadro com o funil.

---

## 5. Condição de escalar

Parar e perguntar ao Gabriel, sem decidir sozinho:

1. **Publicar qualquer número da Nexxus.** Preço, faixa de investimento,
   comissão, faturamento, número real de reuniões por SDR, taxa de no-show,
   nome de cliente. Publicar preço é decisão de posicionamento com efeito
   competitivo, e vira ativo permanente na SERP. *Esta condição já foi
   acionada: o artigo de custo pede a faixa de investimento aberta, que é a
   maior lacuna da SERP do nicho, e ficou de fora aguardando decisão.*
   *Assimetria registrada em 29/09/2026 e ainda aberta, movida para cá porque é
   decisão permanente e não estado de ciclo: o site já publica número próprio
   da Nexxus enquanto o loop está proibido de usar qualquer um deles. Em
   `/servicos`, via `roles` em `src/data/metodo.ts`, SDR de 15 a 25 reuniões por
   mês e conversão de agendamento de 10 a 25%, Hunter de 50 a 150 abordagens por
   dia e conversão de 5 a 12,5%, Closer de 3 a 4 reuniões por dia e conversão de
   venda de 15 a 30%; na home, via `resultStats`, mais de 600 empresas
   estruturadas e 60% de aumento médio em vendas. Esta condição nomeia
   justamente "número real de reuniões por SDR". Ou esses números já estão
   autorizados, e aí a trava que segura a faixa de investimento merece ser
   revista, ou escaparam, e aí o certo é retirá-los. O que não se sustenta é a
   assimetria: a maior lacuna da SERP do nicho segue fechada por uma regra que a
   própria home não cumpre. Nada foi alterado, é decisão de posicionamento.*
2. **Mudança de posicionamento ou de oferta.** Qualquer pauta que redefina o
   que a Nexxus vende, para quem, ou que crie uma promessa nova.
3. **Tema sensível ou com risco jurídico.** Pejotização, legislação
   trabalhista aplicada a caso concreto, comparação nominal com concorrente.
4. **Queda de desempenho sem causa clara.** Perda maior que 30% de impressões
   ou cliques semana contra semana, ou página que sai do índice.
5. **Ação manual ou aviso de segurança no Search Console.** Nunca tratar sozinho.
6. **Rubrica reprovando duas vezes seguidas na mesma pauta.** Sinal de que o
   tema não tem sustentação, e a decisão de matar a pauta é do dono.
7. **Custo de execução fora do combinado.** Se um ciclo exigir muito além do
   previsto, avisar antes de seguir.

Fora dessas sete situações, o loop decide e executa sozinho.

---

## 6. Armadilhas conhecidas desta stack

Registradas porque já custaram tempo:

- **Cache do Cloudflare com TTL de 1 hora e a zona ignorando query string.**
  Verificar deploy sempre pelo `raw.githubusercontent.com` no branch
  `gh-pages`, nunca pelo domínio.
- **Pagina branca depois de publicar (incidente de 27/08/2026).** Cada build
  troca o hash dos bundles. O deploy usava `force_orphan`, que apagava os
  antigos, e o Cloudflare segura HTML por ate dias alem do TTL declarado: o
  HTML velho pedia um bundle que ja nao existia e o site abria em branco.
  Corrigido com `keep_files: true` no workflow (assets antigos continuam
  publicados; limpar acumulo 1x por ano). Se acontecer de novo: rebuildar o
  commit da geracao quebrada num worktree (o hash reproduz identico) e copiar
  os assets para o branch gh-pages.
- **Capa cortada no card.** O card usa `aspect-[3/2]` com `object-cover`.
  Imagem 16/9 perde as laterais e come o texto gravado. Capa do site sempre em
  3/2 e sempre sem texto.
- **HTML cru sem corpo, a SPA invisível para o rastreador (achado de
  17/09/2026).** Por semanas o loop tratou "8 de 9 posts não indexados" como
  link interno fraco e foi adicionando link a cada ciclo. Não era isso. O
  `prerenderHeadPlugin` montava só o `<head>`: o HTML servido tinha 4,3 KB e o
  corpo era `<div id="root"></div>`. O Googlebot enfileira renderização de
  JavaScript, e em site de baixa autoridade essa fila demora, então ele indexava
  uma página sem texto e, pior, sem um único `<a href>`. A rede de links
  internos só existia depois da hidratação, ou seja, não existia para o rastreio.
  Corrigido: o plugin passou a escrever o corpo estático dentro de `#root`, a
  partir de `allPosts`, e o `createRoot` limpa os filhos ao montar, então o React
  segue dono da página. **Antes de culpar link interno, cheque o HTML cru:**
  `curl -s <url no gh-pages> | wc -c`. Menos de 5 KB num post significa que o
  rastreador não está recebendo conteúdo nenhum.
- **A home fora do laço de pré-renderização (achado de 22/09/2026).** O
  `prerenderHeadPlugin` montava as outras 13 rotas num laço e tratava a home
  num bloco separado no fim, que injetava só o corpo estático. Resultado: a
  home era a única página do domínio sem `canonical`, sem `og:title`,
  `og:description`, `og:url` e sem as tags do Twitter, e servia a description
  velha do `index.html` em vez da de `paginasSeo` (com travessão e com "e
  torcendo" no lugar de "e torcer"). É a página com mais chance de ser
  rastreada e a que distribui autoridade para o resto. Corrigido colocando `/`
  na mesma lista das demais, com o destino apontando para `dist/index.html` em
  vez de `dist/index/index.html`, que criaria URL duplicada. **Ao mexer no
  plugin, confira que as 14 rotas têm canonical:** `grep -rl 'rel="canonical"'
  dist --include=index.html | wc -l`.
- **Rede de links internos não é mais a explicação para não indexar.** Em
  22/09/2026 a contagem de links internos recebidos por post, lida do HTML cru
  do `gh-pages`, ficou entre 4 e 10 para os 9 posts. A rede está saturada.
  Adicionar mais link não move indexação e já custou semanas ao loop. Antes de
  culpar link, rode a contagem e olhe o que está pendente com o Gabriel.
- **Sitemap divergindo dos slugs reais.** Já aconteceu: as 3 matérias ficaram
  meses entregando 404 e redirecionamento ao Google. Hoje o sitemap é gerado no
  build a partir de `allPosts`, então não pode mais divergir. Não editar
  `public/sitemap.xml` na mão.
- **Meta tags duplicadas.** O `index.html` traz tags estáticas que vêm antes
  das do react-helmet. Por isso o build pré-renderiza o `<head>` por rota.
- **PowerShell corrompendo acento.** `Get-Content` sem `-Encoding UTF8` lê como
  ANSI e destrói os acentos ao regravar. Editar arquivo de código sempre com a
  ferramenta de edição, nunca reescrevendo o arquivo por script.
- **Verificar head num `serve -s dist` local dá falso negativo (achado de
  29/09/2026).** O `-s` liga o fallback de SPA: qualquer `/blog/<slug>` recebe o
  `dist/index.html` da home, não o `dist/blog/<slug>/index.html` que o build
  pré-renderizou. Como o `index.html` traz tags estáticas antes das do
  react-helmet, o `querySelector` lê a canonical e o `og:image` da home e o
  `og:type` como `website`, e parece que o post está errado. Não está: conferido
  no arquivo gerado e no `gh-pages`, a canonical é a do post e o `og:type` é
  `article`. Screenshot desse servidor vale, leitura de head não. Para head,
  ler o arquivo em `dist/blog/<slug>/index.html` ou o `gh-pages` cru.
- **Chromium no container do loop.** Não existe o Chrome do Windows aqui.
  Exportar `CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome` e
  `CHROME_NO_SANDBOX=1`, servir com `npx serve -s dist -l 4173` e apontar as
  capturas para `http://localhost:4173`.
- **Here-string do PowerShell quebra com aspas na mensagem de commit.** Usar
  `git commit -F arquivo.txt`.
- **A busca `site:` dá falso negativo neste domínio (achado de 01/10/2026).**
  `site:nexxusagencia.com.br` devolve zero resultado do domínio e cai em outras
  marcas "Nexxus", o que lê como "saiu do índice" e aciona a condição de escalar
  4 sem motivo. A ferramenta de busca do loop é um índice americano, não o
  `google.com.br`. O operador em si funciona: o controle
  `site:agendor.com.br/blog/terceirizacao-de-vendas` devolve aquela página exata e
  só o próprio domínio. **A sonda confiável é o título exato entre aspas mais
  "Nexxus"**, e com ela as páginas indexadas aparecem normalmente. Antes de
  declarar qualquer página fora do índice, repetir pela sonda de título e rodar o
  controle num domínio de terceiro para provar que o operador está funcionando
  naquela execução. Posição de SERP não se mede com esta ferramenta de jeito
  nenhum: ela devolve cerca de 9 resultados e de outro país, então a faixa de 8 a
  30 da seção 3b só sai do Search Console.
- **A sonda de titulo exato tambem oscila, e indexacao e inauditavel sem Search
  Console (achado de 06/10/2026).** A secao 6 ja registrava que `site:` da falso
  negativo neste dominio e indicava a sonda de titulo exato como alternativa
  confiavel. Ela nao e. Em 01/10 a sonda devolvia a home e
  `quanto-custa-terceirizar-time-de-vendas`; em 06/10, com o site **sem um unico
  commit de conteudo no meio**, devolveu zero para as 9 consultas e para a home,
  com o controle de terceiro funcionando na mesma execucao e sem nenhuma causa
  tecnica no `gh-pages` (`robots.txt` liberado, `index,follow`, canonical certa,
  sitemap com os 14 slugs reais, HTML cru de 11 a 26 KB). Ou seja: **2 e 0 saem
  do mesmo instrumento, na mesma semana, para o mesmo site.** Nao tratar queda
  da sonda como deindexacao nem acionar a condicao de escalar 4 por ela: antes,
  conferir `robots.txt`, `meta robots`, canonical e sitemap no `gh-pages`, e se
  estiverem limpos, a conclusao e que a medicao nao vale, nao que a pagina caiu.
  Indexacao com valor probatorio so vem do Search Console. **Confirmado em
  08/10/2026, e agora a serie e 2, 0 e 0 em oito dias sem um commit de conteudo
  no meio**, com o site tecnicamente limpo nas tres medicoes e o controle de
  terceiro funcionando nas tres. Dois zeros seguidos nao sao deindexacao
  progressiva: sao a leitura estavel de um instrumento quebrado. Nao usar o "2"
  de 01/10 como linha de base de nada.
- **A conclusao da etapa do Actions mente; so o texto do log conta (achado de
  06/10/2026).** No run 6 do `pos-deploy.yml` a etapa "Relatorio de indexacao"
  aparece com `conclusion: success` na API, e o ciclo quase registrou que o
  secret do Search Console finalmente existia. O log da mesma etapa diz
  "Relatorio de indexacao: **pulado**, falta o secret
  `GSC_SERVICE_ACCOUNT_JSON`", e o bloco `env` imprime os tres secrets vazios. O
  script sai com codigo 0 depois de avisar que pulou, e o GitHub chama isso de
  sucesso. **E pior no run 7, do mesmo dia: as quatro etapas de conteudo
  ("Esperar o Pages", "Purgar cache do Cloudflare", "Reenviar sitemap" e
  "Relatorio de indexacao") aparecem TODAS como `success`**, onde no run 6 duas
  delas ainda apareciam como "skipped". A execucao le verde de ponta a ponta sem
  ter purgado nada nem reenviado nada, e as quatro terminam no mesmo segundo,
  que e a assinatura do pulo. **Sempre ler o texto do log**, e conferir o bloco
  `env` para saber se o secret existe. Nunca concluir que a secao 4b passou a
  valer por causa da cor da execucao. **E a cor nao e nem estavel entre
  execucoes (achado de 08/10/2026):** no run 9, com a mesma configuracao e os
  mesmos secrets ausentes do run 7, tres das quatro etapas de conteudo voltaram
  a aparecer como "skipped" e so "Relatorio de indexacao" ficou `success`. Ou
  seja, a mesma condicao produziu run 6 com duas skipped, run 7 com quatro
  success e run 9 com tres skipped. A cor varia sozinha e nao carrega
  informacao: o texto do log e o bloco `env` sao a unica leitura.
  **E a oscilacao acontece dentro do mesmo dia, nao so entre ciclos (achado de
  15/10/2026):** o run 16 (agendado) trouxe tres etapas de conteudo skipped e o
  run 17 (disparado pelo push do mesmo ciclo, cerca de uma hora depois) trouxe
  as quatro `success`, sem nenhum commit tocando o workflow nem os secrets entre
  os dois, e com o log dos dois dizendo "pulado" e o `env` dos dois imprimindo
  os tres secrets vazios. Esse par e o contraexemplo mais curto possivel: nao
  sobra leitura em que a cor signifique algo. Quem for conferir a secao 4b num
  ciclo futuro deve ir direto ao texto do log e nem abrir a lista de etapas.
- **A execucao agendada do `pos-deploy.yml` atrasa horas, e por isso o passe 3
  nunca deve ler a execucao agendada mais recente (achado de 27/10/2026).** O
  workflow roda em `cron: '17 9 * * 2,4'` e o comentario do arquivo declara que
  "o relatorio fica pronto antes do loop das 07:00". Nao fica, e nao e episodio
  isolado: as quatro ultimas execucoes agendadas sairam de 4h55 a 7h41 depois da
  hora marcada (run 16 em 13/10 as 16:58 UTC, run 19 em 15/10 as 14:12, run 20
  em 20/10 as 14:20 e run 21 em 22/10 as 14:32, todas contra 09:17 UTC). Como o
  loop roda as 10:00 UTC, a execucao agendada do dia ainda nao existe quando o
  passe 3 procura por ela, e a mais recente disponivel e sempre a da rodada
  anterior. Adiantar o cron por um valor fixo nao resolve, porque o atraso e
  variavel. **A correcao e de metodo:** o workflow declara `workflow_dispatch`,
  entao no ciclo em que o `GSC_SERVICE_ACCOUNT_JSON` existir, disparar o
  workflow e ler o run que o proprio loop disparou.
  **E o `workflow_dispatch` ja vale agora, sem o secret: a frase anterior desta
  armadilha dizia que "enquanto o secret nao existir isso nao muda nada, porque
  a etapa pula de qualquer jeito", e isso esta errado (corrigido em
  03/11/2026).** Nao muda o *comportamento* do workflow, que pula igual, mas
  muda a *qualidade da evidencia*, que e o que o passe 3 precisa. Lendo a
  execucao agendada mais recente, o loop so consegue afirmar que o secret nao
  existia na rodada anterior, de 5 dias atras; disparando, afirma que o secret
  nao existe **hoje**, e de passagem contorna o atraso variavel do agendador sem
  depender de horario. Neste ciclo o run 26 foi disparado pelo proprio loop as
  10:08 UTC e deu a leitura do dia. Custa uma chamada. **Disparar o workflow e
  ler o run disparado passa a ser etapa fixa do passe 3**, nao algo reservado
  para o ciclo em que o secret aparecer.
- **O `gh-pages` nao recebe commit novo quando o commit nao muda o `dist`, e a
  data velha dele nao e deploy quebrado (achado de 08/10/2026).** O head do
  `gh-pages` esta em "deploy: 10a437b..." datado de 22/09/2026, cinco commits de
  `main` atras, enquanto os deploys 104 a 107 todos deram success. Nao e defeito
  e nao e deploy perdido: desde 10a437b nenhum commit tocou `src/`, `public/` ou
  `index.html`, so `carrossel/`, `docs/`, `scripts/`, `.gitignore` e
  `.github/workflows`. O `dist` sai byte a byte igual e a action nao tem o que
  commitar. **A prova e o hash do bundle, nao a data:** o `dist/assets/index-*.js`
  gerado localmente e o que o `gh-pages` serve no `index.html` precisam ser o
  mesmo arquivo (conferido em 08/10: `index-DkF33cln.js` nos dois). Confirmar
  deploy pela data do `gh-pages` depois de um ciclo que so mexeu em documentacao
  leva a concluir que o site parou de publicar, e nao parou.
- **O host de log do Actions nao passa pelo egresso (achado de 06/10/2026).** O
  `logs_url` que a API devolve aponta para
  `productionresultssa15.blob.core.windows.net`, que a politica de rede nega
  como qualquer outro host fora do GitHub, entao `curl` naquela URL falha. Ler
  log de job pela propria ferramenta do GitHub, pedindo o conteudo, nunca por
  download da URL assinada.

- **O `WebFetch` nao e fetch pelo servidor, ele resolve DNS no container
  (achado de 13/10/2026).** Parecia a saida obvia para o bloqueio de egresso, e
  por seis ciclos ninguem testou: se o `WebFetch` buscasse a pagina pela
  infraestrutura da Anthropic em vez do container, devolveria o texto da pagina
  e resolveria de uma vez os criterios de 20 e de 12 pontos, que sao os dois que
  a falta de egresso reprova. Nao e assim. `WebFetch` numa URL de concorrente
  falha com `getaddrinfo ENOTFOUND <host>`, erro de resolucao de nome dentro do
  container, no mesmo egresso que nega o `curl`. **As tres vias de leitura estao
  testadas e fechadas:** `curl` da 403 no CONNECT, `WebFetch` da ENOTFOUND e o
  `WebSearch` responde mas so com resumo parafraseado por um modelo, que o
  criterio de 20 pontos proibe como fonte. Nao gastar ciclo testando isso de
  novo: so a mudanca de Network access abre.
- **A sessao do loop comeca em detached HEAD, e o push rejeitado nao e divergencia
  (achado de 13/10/2026).** O container clona o repo e deixa o HEAD solto no
  commit clonado, enquanto o branch local `main` fica parado num commit antigo
  (neste ciclo, cinco atras). Commitar funciona normalmente, mas
  `git push -u origin main` empurra o **branch local**, nao o HEAD, entao o
  GitHub responde "non-fast-forward: pushed branch tip is behind its remote
  counterpart" e parece que o remoto andou e o ciclo precisa de `git pull`. Nao
  precisa: o remoto estava exatamente no pai do commit novo. A leitura certa e
  `git status -sb`, que imprime `## HEAD (no branch)`, e a correcao e apontar o
  branch para o commit antes de empurrar: conferir com
  `git merge-base --is-ancestor main HEAD` e entao `git checkout -B main <sha>`.
  Nunca resolver isso com `git pull` as cegas nem com force-push.
  **O detached HEAD e intermitente, nao e como a sessao sempre comeca (achado de
  15/10/2026).** Neste ciclo `git status -sb` imprimiu `## main...origin/main` e
  `HEAD`, `main` e `origin/main` estavam todos no mesmo commit, ou seja, a
  sessao comecou limpa no branch e o push nao precisou de correcao nenhuma.
  Entao o `git checkout -B main <sha>` acima e remedio para quando o sintoma
  aparece, nao etapa fixa do ciclo: **ler `git status -sb` primeiro** e so
  corrigir se a saida disser `## HEAD (no branch)`. Aplicar o remedio as cegas
  num ciclo que comecou no branch nao quebra nada, mas mascara qual dos dois
  estados a sessao recebeu, e e justamente isso que se quer medir.

- **Medir indexacao nao depende do secret do Actions: o conector
  `searchconsole` do Windsor.ai e um caminho de um clique (achado de
  29/10/2026).** Por nove ciclos o `GSC_SERVICE_ACCOUNT_JSON` foi tratado como
  caminho unico para o Search Console, e a secao 4b depende dele. Mas o
  `searchconsole` esta no catalogo do Windsor.ai, que ja e um MCP conectado a
  sessao do loop, e `get_connector_connect_info` com `searchconsole` devolve uma
  URL de OAuth pronta para o Gabriel autorizar: `auth_type: oauth`, sem campo de
  credencial e sem service account para criar. **A URL carrega token de conta e
  o repositorio e publico, entao ela nunca entra neste arquivo nem em Summary de
  Actions:** gerar na hora com a ferramenta e entregar no relatorio do ciclo. Na
  autorizacao, logar na conta Windsor.ai a que o assistente esta conectado,
  escolher a conta Google com acesso a propriedade, marcar a permissao de Search
  Console e selecionar o site antes de concluir. Depois, confirmar com
  `get_connectors`: se nao aparecer conta em `searchconsole`, a conexao nao
  terminou. Isso destrava **medicao** (a faixa de 8 a 30 e o estado de indexacao
  com valor probatorio) e **nao** destrava o egresso: a rubrica segue com teto de
  68 sem o Network access. Sao problemas separados, e confundir os dois foi o que
  manteve a medicao parada esperando o secret.
- **A degradacao do controle de terceiro da sonda e progressiva, nao episodica
  (achado de 29/10/2026).** O controle `site:` num dominio de terceiro servia
  para provar que o operador estava funcionando na execucao. Ele piorou
  monotonicamente em tres leituras: em 06/10 e 15/10 devolvia a pagina certa e
  so resultados do proprio dominio, em 27/10 vazou tres dominios de terceiros, e
  em 29/10 vazou cerca de dez, ainda com a pagina certa em primeiro lugar. Ou
  seja, a ultima checagem de sanidade da sonda nao esta apenas ruidosa, esta
  piorando a cada leitura, e nao vale mais como prova de nada. Nao gastar ciclo
  refinando a sonda: a medicao com valor probatorio e o Search Console, e o
  caminho para ele esta na armadilha acima.

- **O ambiente do loop e legivel e editavel de dentro da propria sessao, e onze
  ciclos pediram em prosa o que cabia num pedido de aprovacao (achado de
  05/11/2026).** Todas as secoes 7 anteriores escreveram o item 1 da lista de
  impacto como "Network access, no menu do ambiente, em Edit", ou seja, uma
  tarefa que o Gabriel teria de executar navegando sozinho num menu, com o loop
  limitado a descrever o caminho. Isso esta errado desde o comeco: a sessao tem
  `get_environment`, que neste ciclo devolveu o ambiente `Default` com
  `network.type: limited`, `allowed_hosts: []` e, o que importa,
  **`editable_by_you: true`**; e tem `update_environment`, que nao altera nada
  por conta propria e cuja chamada **e** o pedido de permissao: o Gabriel recebe
  um prompt de aprovacao com a lista exata de hosts ja preenchida e decide com
  um toque. O pedido deixa de ser "abra o menu do ambiente e digite onze
  dominios" e passa a ser "aprove ou recuse". Mesma classe de erro do achado de
  03/11 sobre o `workflow_dispatch`: uma alavanca a uma chamada de distancia que
  ficou onze ciclos sem ser testada porque o documento a descrevia como externa
  ao loop. **Propor a liberacao por `update_environment` passa a ser etapa do
  ciclo enquanto o egresso estiver fechado**, uma vez por execucao e sempre no
  fim, depois do commit e da notificacao, porque o prompt fica pendente numa
  sessao sem ninguem olhando e nao se deve arriscar travar o resto da execucao
  nele. Duas leituras importantes: o ambiente do loop e o `Default`, entao e
  nele que a liberacao precisa entrar para valer nas execucoes agendadas
  seguintes (criar um ambiente novo daria rede a esta sessao e deixaria a
  proxima terca de volta no bloqueio); e **recusa automatica em sessao sem
  humano nao e decisao do Gabriel**, e nao deve ser registrada como tal.
- **O pedido de aprovacao e canal sincrono e nao alcanca execucao desacompanhada,
  entao `update_environment` nao substitui a prosa do relatorio (achado de
  10/11/2026).** O ciclo 12 registrou como achado que o ambiente era editavel de
  dentro da sessao e concluiu que o pedido deixava de ser "abra o menu e digite
  onze dominios" e passava a ser "aprove ou recuse". A chamada foi feita naquele
  ciclo. Cinco dias depois, `get_environment` devolve o mesmo `Default` com
  `network.type: limited` e `allowed_hosts: []`: a liberacao nao entrou. A leitura
  certa nao e que o Gabriel recusou, e sim que **ninguem foi perguntado**. Um
  prompt de permissao existe enquanto a sessao existe e precisa de alguem dentro
  dela no instante em que dispara; este loop roda sozinho as 10:00 UTC e a sessao
  termina. O prompt nao deixa rastro que o Gabriel possa responder depois. Ja a
  mensagem de commit, o relatorio e a notificacao por push sao assincronos e
  persistem. Ou seja, a conclusao do ciclo 12 estava invertida: para execucao
  desacompanhada o `update_environment` e canal **pior** que a prosa, nao melhor,
  porque custa uma chamada e nao produz nada que o Gabriel veja. Mantido como
  etapa final do ciclo por uma razao so, somar leituras, e nunca mais descrito
  como "o pedido chegando ao Gabriel". Vale para qualquer prompt de aprovacao,
  `request_credential` incluido. **E a recusa trouxe o remedio, que nenhum ciclo
  tinha:** a propria mensagem de refusa diz que a chamada foi recusada porque
  ninguem estava presente e que um humano pode autorizar **iniciando esta rotina
  por "Run now" e respondendo o pedido dentro daquela execucao**, ou mudando a
  configuracao no menu do ambiente. Existe portanto um caminho em que o prompt
  alcanca o Gabriel, e nao e a execucao agendada: e uma execucao que ele mesmo
  dispara e acompanha. Entra na lista de impacto como alternativa ao menu, e e a
  unica forma de a liberacao chegar sem ele navegar em Settings.
- **A busca por alavancas dentro do loop esta encerrada, e o resto da lista de
  impacto e externo por natureza (achado de 10/11/2026).** A secao 7 do ciclo 12
  mandou perguntar que outras linhas da lista de impacto estavam escritas como
  tarefa do Gabriel sem nunca terem sido testadas de dentro. Enumerado, o saldo e
  zero. O item 2, autorizar o `searchconsole` do Windsor.ai, exige consentimento
  OAuth em navegador logado: de dentro, `get_connector_connect_info` so produz a
  URL, e produzir a URL ja era o que o loop fazia. O item 3, os tres secrets do
  Actions, exige o **valor** de credenciais que nao existem no container e que o
  loop nao pode fabricar, entao escrever o secret nao e a parte que falta.
  `request_credential` para `api.cloudflare.com` seria a alavanca adjacente, e cai
  na armadilha acima por ser o mesmo canal sincrono, alem de ser purga de cache,
  que o prompt agendado proibe explicitamente de tentar. E a linha nao numerada,
  espacar o agendamento, e a unica inteiramente ao alcance do loop
  (`update_trigger` existe e funciona) e segue deliberadamente intocada, porque
  mexer no agendamento sem ordem do Gabriel seria decidir por ele. Dois ciclos
  acharam alavanca real a uma chamada de distancia, o `workflow_dispatch` em
  03/11 e o `update_environment` em 05/11; este enumerou o que sobrou e nao achou
  nenhuma. Nao reabrir essa busca em ciclo futuro.
---

## 7. Estado atual (10/11/2026)

- **Decimo terceiro ciclo seguido sem artigo novo, e o gargalo nao mudou:
  egresso de rede.** Conferido antes de qualquer outra coisa, como a secao 7
  anterior mandou. Respondem so os hosts do GitHub: `api.github.com` 200 e
  `raw.githubusercontent.com` 301. Os sete demais caem todos com codigo 000 no
  `curl`: `www.google.com`, `agendor.com.br`, `www.agendor.com.br`,
  `rdstation.com.br`, `meetime.com.br`, `sebrae.com.br` e `ibge.gov.br`, e o
  proprio proxy registra cada um como `connect_rejected`, com o detalhe "gateway
  answered 403 to CONNECT (policy denial or other refusal)". O status segue com
  `selective: false` e nenhuma lista de dominios liberados. A aritmetica da
  rubrica nao mudou: sem abrir fonte o criterio de 20 pontos reprova por
  definicao, sem abrir os 3 primeiros organicos o de 12 nao se mede. Soma 32 de
  100, teto de 68 contra corte de 85. **O loop de conteudo nao foi rodado**, como
  as secoes 7 anteriores determinaram. As tres vias de leitura seguem fechadas e
  nenhuma foi reaberta.

- **O achado do ciclo 12 foi testado por um intervalo inteiro e nao funcionou, e
  a razao e o que importa.** O ciclo anterior enviou o pedido de liberacao por
  `update_environment` com os onze hosts preenchidos e registrou que o pedido
  passava a ser "aprove ou recuse". Hoje `get_environment` devolve o mesmo
  ambiente `Default`, com `network.type: limited`, `allowed_hosts: []` e
  `editable_by_you: true`: nada entrou. Isso **nao** se lê como recusa do
  Gabriel, e a propria secao 6 proibe registrar como tal. Lê-se como ninguem ter
  sido perguntado: prompt de permissao e canal sincrono, existe enquanto a sessao
  existe, e esta sessao roda sozinha as 10:00 UTC e termina. A conclusao do ciclo
  12 estava invertida, portanto: para execucao desacompanhada o
  `update_environment` e canal pior que a prosa, porque a mensagem de commit, o
  relatorio e a notificacao por push persistem e o prompt nao. Registrado na
  secao 6. A chamada continua sendo feita no fim do ciclo, para somar leituras, e
  foi feita de novo hoje. O retorno de hoje fecha a questao e entrega o remedio: a
  chamada foi **recusada automaticamente por nao haver pessoa presente**, e a
  mensagem de refusa diz como contornar, iniciando a rotina por "Run now" e
  respondendo o pedido dentro daquela execucao. Ou seja a liberacao pode entrar
  por prompt, desde que a execucao seja disparada e acompanhada pelo Gabriel, e
  nunca pela execucao agendada das 10:00 UTC.

- **A pergunta que a secao 7 anterior mandou fazer foi respondida, e o saldo e
  zero.** A pergunta era que outras linhas da lista de impacto estavam escritas
  como tarefa do Gabriel sem nunca terem sido testadas de dentro. Enumeradas: o
  item 2 exige consentimento OAuth em navegador logado e de dentro so se produz a
  URL, que o loop ja produzia; o item 3 exige o valor de credenciais que nao
  existem no container e que o loop nao pode fabricar, entao escrever o secret nao
  e a parte que falta; e a linha nao numerada, espacar o agendamento, e a unica
  inteiramente ao alcance do loop e segue intocada de proposito. Dois ciclos
  acharam alavanca real a uma chamada de distancia, o `workflow_dispatch` e o
  `update_environment`; este enumerou o resto e nao achou nenhuma. A busca esta
  encerrada e foi registrada como encerrada na secao 6, para que o ciclo 14 nao a
  reabra.

- **Os tres secrets seguem vazios, por leitura do proprio dia.** O
  `workflow_dispatch` foi disparado pelo proprio loop as 10:08 UTC (run 32) e o
  bloco `env` de toda etapa imprime `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ZONE_ID`
  e `GSC_SERVICE_ACCOUNT_JSON` vazios, com o texto do log dizendo as tres linhas:
  "- Cloudflare: **pulado**, faltam os secrets", "- Sitemap: **pulado**, falta o
  secret `GSC_SERVICE_ACCOUNT_JSON`" e "- Relatorio de indexacao: **pulado**,
  falta o secret `GSC_SERVICE_ACCOUNT_JSON`". **A secao 4b continua nao valendo e
  os itens a) e b) da checklist do Gabriel continuam manuais.** A cor oscilou pela
  decima primeira leitura: as quatro etapas de conteudo vieram `success` e as
  quatro terminaram no mesmo segundo (10:08:46), que e a assinatura do pulo. O
  atraso do agendador se confirma de novo e por novo recorde: a execucao agendada
  de 05/11 (run 31) saiu as 17:26 UTC, 8h09 depois do `cron` de 09:17, acima dos
  7h49 do recorde anterior, e a agendada de hoje ainda nao existia as 10:08.
  Disparar e ler o run proprio segue sendo a unica leitura do dia.

- **O conector `searchconsole` do Windsor.ai nao foi autorizado.**
  `get_connectors` devolve so `facebook` (tres contas) e `instagram` (duas), pelo
  decimo terceiro ciclo, nenhuma conta de Search Console. Segue sendo o item mais
  barato dos tres, um clique, e o quarto ciclo pendente. O link de OAuth e gerado
  na hora com `get_connector_connect_info` e entregue no relatorio e na
  notificacao: **nao entra neste arquivo porque o repositorio e publico e a URL
  carrega token de conta**.

- **A sonda de indexacao deu zero pela nona vez, serie 2 e nove zeros.** Amostra
  de duas consultas, como os ciclos anteriores fixaram. As duas em zero, e a
  sonda segue caindo em outra marca (Nexxus Mobile Intelligence na consulta de
  custo). **O controle de terceiro nao foi rodado, de proposito:** a secao 6
  registrou que degradou monotonicamente em tres leituras e nao vale mais como
  prova de nada. Nao e deindexacao, e o site segue tecnicamente limpo no
  `gh-pages`, reconferido neste ciclo: `robots.txt` com `Allow: /` bloqueando so
  `/obrigado` e `/lp`, os 9 posts com `index,follow` e canonical correta apontando
  para o proprio slug, sitemap com 14 URLs batendo com os slugs reais e HTML cru
  de 11.095 a 25.948 bytes com 12 a 25 links. A condicao de escalar 4 **nao** esta
  acionada. Indexacao com valor probatorio so vem do Search Console. Posicao de
  SERP nao se mede com esta ferramenta, entao o passo 3 do passe 3 do prompt
  agendado, achar consulta entre a 8a e a 30a posicao, continua sem instrumento e
  nao pode trocar a pauta.

- **As 4 paginas de outra marca seguem no ar e seguem indexaveis, sem mudanca.**
  Reconferido o `<meta name="robots">`: `/academy` (80.780 B) por declaracao
  explicita `index, follow`, e `/precificacao` (20.885 B), `/usual` (55.953 B) e
  `/en` (49.801 B) **por omissao**. As internas da Nexxus que nao devem indexar
  seguem corretas: `/calculadora` (16.080 B) e `/diagnostico` (32.050 B) com
  `noindex`. Continua pendencia do Gabriel.

- **Deploy conferido pelo hash do bundle, nao pela data, como a secao 6 manda.**
  O `dist/assets/index-DkF33cln.js` gerado localmente e o mesmo arquivo que o
  `gh-pages` referencia no `index.html`. O site publicado e o build atual. O run
  32 reporta o `gh-pages` em 9f837fc e o Pages publicado.

- **Banco de fotos nao e gargalo.** `node carrossel/checar-fotos.mjs` roda sem
  erro e nenhuma foto passou do limite. Sobram 4 livres e duas delas ja tem
  recorte aprovado em `proximos_posts`: `equipe-banner.webp` a 44% e
  `sala-reuniao-tijolo.webp` a 38%. O ambiente "sala da equipe (banner e neon)"
  segue sem capa.

- **A pauta de 29/09, reescrever `tendencias-mercado-comercial-b2b`, segue de pe
  e intocada.** Decimo terceiro ciclo. Medido de novo, ele segue o ativo mais
  fraco do blog: 11.095 bytes de HTML cru contra 19.740 a 25.948 dos outros oito,
  e 12 links contra 17 a 25. Nao foi queimada de proposito: meia reescrita sem
  fonte reprovaria na rubrica igual e produziria o falso sinal da condicao de
  escalar 6.

- Build integro: `npm ci` e `npm run build` sem erro, 14 rotas da Nexxus
  pre-renderizadas com `canonical` e sitemap com 14 URLs batendo com os slugs
  reais.

- **Nada foi publicado e nada foi meio publicado.** A proibicao da secao 6 de
  adicionar link interno para mover indexacao foi respeitada de novo: a rede
  segue saturada entre 12 e 25 links por post e nenhum link foi adicionado, ainda
  que o prompt agendado peca no passo 2 do passe 3. Passe 4 nao se aplica, porque
  nao houve mudanca de conteudo nem capa nova para capturar. **A sessao comecou em
  detached HEAD** (`## HEAD (no branch)`, com `main` e `origin/main` em ce5ca05 e
  o HEAD em 2a34f45), entao o remedio da secao 6 foi aplicado: conferido
  `git merge-base --is-ancestor main HEAD` e feito `git checkout -B main <sha>`
  antes do push. Com 13/10, 05/11 e hoje em detached e 15/10 e 03/11 limpos, a
  intermitencia esta confirmada em cinco leituras, tres contra duas, e a ordem de
  ler `git status -sb` primeiro se justifica. O "ahead" enganoso tambem se repetiu
  e o `git fetch origin main` resolveu, exatamente como 05/11 registrou.

- **Condicao de escalar 7 acionada pelo sexto ciclo seguido, e a recomendacao de
  espacar segue de pe, sem resposta.** O agendamento continua ativo e nao pausado:
  `cron` em `0 10 * * 2,4`, `enabled: true`, proxima execucao em 12/11/2026, e o
  `updated_at` do agendamento segue em 26/07/2026, ou seja nenhum bloco de
  configuracao foi tocado desde a criacao. Nao houve commit do Gabriel no
  periodo: o ultimo commit do repositorio e o proprio commit de documentacao do
  ciclo 12. A recomendacao segue a mesma que o ciclo anterior fixou, **espacar
  para quinzenal**, porque um ciclo quinzenal de manutencao ainda tem valor (mede
  indexacao, confere deploy pelo hash, reconfere o `gh-pages` e dispara o
  `pos-deploy`) e duas execucoes semanais sem egresso nao tem: treze ciclos
  consumiram execucao completa para produzir, cada um, um commit de documentacao
  e nenhum artigo. Nada foi alterado no agendamento, porque mexer nele sem ordem
  do Gabriel seria decidir por ele.

**Proximo ciclo:** o gargalo de publicacao nao e pauta, nao e foto, nao e metodo
e nao se resolve dentro do loop, e a partir deste ciclo isso esta provado por
enumeracao, nao por suposicao. Sao mudancas de configuracao, todas do Gabriel, em
ordem de impacto:

1. **Network access no ambiente `Default`.** Sem egresso a rubrica tem teto de 68
   contra corte de 85 e nenhum artigo passa, por aritmetica. E o unico item que
   destrava **publicar**. O caminho e
   https://code.claude.com/docs/en/cloud-environments#network-access, no ambiente
   `Default`, que e onde as execucoes agendadas rodam. Os onze hosts minimos que a
   rubrica exige: `www.google.com`, `agendor.com.br`, `www.agendor.com.br`,
   `rdstation.com.br`, `www.rdstation.com.br`, `meetime.com.br`,
   `www.meetime.com.br`, `sebrae.com.br`, `www.sebrae.com.br`, `ibge.gov.br` e
   `www.ibge.gov.br`, com apex e `www` nos dois casos porque curinga nao e aceito
   e o conteudo dos concorrentes vive no `www`. O pedido por
   `update_environment` continua sendo enviado no fim de cada ciclo, mas a secao
   6 agora registra que ele nao alcanca uma execucao desacompanhada, porque e
   recusado automaticamente por falta de pessoa presente. **Sao dois os caminhos
   que funcionam:** mudar pelo menu do ambiente, fora da sessao; ou iniciar esta
   rotina por "Run now" e aprovar o pedido dentro dessa execucao, que e a opcao
   sem navegar em Settings. Com egresso aberto, a pauta
   ja esta escolhida e a capa ja esta recortada: a reescrita de
   `tendencias-mercado-comercial-b2b`.
2. **Autorizar o conector `searchconsole` do Windsor.ai**, pelo link de OAuth
   entregue no relatorio e na notificacao de cada ciclo. Destrava **medir**: a
   faixa de 8 a 30 e o estado de indexacao com valor probatorio, que hoje saem de
   um instrumento com serie 2 e nove zeros e com o controle morto. E o item mais
   barato da lista, um clique, e nao depende do item 1 nem do 3. Quarto ciclo
   pendente.
3. **Secret `GSC_SERVICE_ACCOUNT_JSON` no Actions** (e os dois do Cloudflare).
   Continua sendo o que faz a secao 4b valer e o que tira os itens a) e b) da
   checklist do Gabriel. Com o item 2 feito, deixa de ser o unico caminho para
   medir indexacao e passa a ser so automacao de purge e sitemap.

E, antes das tres, a decisao de **espacar o agendamento para quinzenal** enquanto
nenhuma delas acontecer, pela condicao de escalar 7 acima, agora no sexto ciclo
seguido.

Nos tres casos, nunca medir indexacao por `site:` sozinho, nunca pela sonda de
titulo sozinha, e nunca por cor de etapa do Actions: so pelo texto do log e pelo
Search Console. E, no passe 3, disparar o `pos-deploy.yml` por
`workflow_dispatch` e ler o run disparado, que agora e etapa fixa.

## 7b. Estado anterior (05/11/2026)

- **Decimo segundo ciclo seguido sem artigo novo, e o gargalo nao mudou:
  egresso de rede.** Conferido antes de qualquer outra coisa, como a secao 7
  anterior mandou. Respondem so os hosts do GitHub: `api.github.com` 200 e
  `raw.githubusercontent.com` 301. Os seis demais caem todos com codigo 000 no
  `curl`, negados no CONNECT: `www.google.com`, `agendor.com.br`,
  `rdstation.com.br`, `meetime.com.br`, `sebrae.com.br` e `ibge.gov.br`. O
  status do proxy segue com `selective: false` e `allowed_hosts` vazio, ou seja
  nenhuma lista de dominios liberados foi configurada. A aritmetica da rubrica
  nao mudou: sem abrir fonte o criterio de 20 pontos reprova por definicao, sem
  abrir os 3 primeiros organicos o de 12 nao se mede. Soma 32 de 100, teto de 68
  contra corte de 85. **O loop de conteudo nao foi rodado**, como a secao 7
  anterior determinou. As tres vias de leitura seguem fechadas e nenhuma foi
  reaberta.

- **Achado deste ciclo, e e o unico com valor de acao: o ambiente e editavel de
  dentro da sessao, e onze ciclos pediram em prosa o que cabia num pedido de
  aprovacao.** Onze secoes 7 escreveram o item 1 da lista de impacto como
  "Network access, no menu do ambiente, em Edit", tratando a liberacao como algo
  que so o Gabriel poderia fazer navegando num menu, com o loop limitado a
  descrever o caminho e a esperar. `get_environment` desmente isso: o ambiente
  do loop e o `Default`, com `network.type: limited`, `allowed_hosts: []` e
  `editable_by_you: true`. E `update_environment` nao altera nada sozinho, a
  chamada **e** o pedido: o Gabriel recebe um prompt com os onze hosts ja
  preenchidos e responde com um toque. Registrado na secao 6, com a ressalva de
  ordem (sempre no fim do ciclo, depois do commit e da notificacao, porque o
  prompt fica pendente numa sessao sem ninguem olhando) e a de leitura (recusa
  automatica em sessao desacompanhada nao e decisao do Gabriel). E a mesma
  classe de erro do achado de 03/11 sobre o `workflow_dispatch`, dois ciclos
  seguidos encontrando alavanca a uma chamada de distancia que o proprio
  documento havia classificado como externa ao loop. Vale perguntar, no proximo
  ciclo, que outras linhas da lista de impacto estao escritas como tarefa do
  Gabriel sem nunca terem sido testadas de dentro.

- **Pedido de liberacao enviado por `update_environment` nesta execucao.** Onze
  hosts, o minimo que a rubrica exige: `www.google.com`, os tres concorrentes
  (`agendor.com.br` e `www.agendor.com.br`, `rdstation.com.br` e
  `www.rdstation.com.br`, `meetime.com.br` e `www.meetime.com.br`) e as duas
  fontes (`sebrae.com.br` e `www.sebrae.com.br`, `ibge.gov.br` e
  `www.ibge.gov.br`), com apex e `www` nos dois casos porque curinga nao e
  aceito e o conteudo dos concorrentes vive no `www`. Gerenciadores de pacote e
  hosts de MCP ficam como estao, ligados. O resultado da chamada esta no
  relatorio da sessao deste ciclo.

- **Os tres secrets seguem vazios, por leitura do proprio dia.** O
  `workflow_dispatch` foi disparado pelo proprio loop as 10:08 UTC (run 29) e o
  bloco `env` de toda etapa imprime `CLOUDFLARE_API_TOKEN`,
  `CLOUDFLARE_ZONE_ID` e `GSC_SERVICE_ACCOUNT_JSON` vazios, com o texto do log
  dizendo as tres linhas: "- Cloudflare: **pulado**, faltam os secrets", "-
  Sitemap: **pulado**, falta o secret `GSC_SERVICE_ACCOUNT_JSON`" e "- Relatorio
  de indexacao: **pulado**, falta o secret `GSC_SERVICE_ACCOUNT_JSON`". **A
  secao 4b continua nao valendo e os itens a) e b) da checklist do Gabriel
  continuam manuais.** A cor oscilou pela decima leitura: as quatro etapas de
  conteudo vieram `success` e as quatro terminaram no mesmo segundo (10:09:02),
  que e a assinatura do pulo. O atraso do agendador tambem se confirma de novo,
  e pelo maior valor ja registrado: a execucao agendada de 03/11 (run 28) saiu
  as 17:06 UTC, 7h49 depois do `cron` de 09:17, e a agendada de hoje ainda nao
  existia as 10:08. Disparar e ler o run proprio segue sendo a unica leitura do
  dia.

- **O conector `searchconsole` do Windsor.ai nao foi autorizado.**
  `get_connectors` devolve so `facebook` (tres contas) e `instagram` (duas),
  pelo decimo segundo ciclo, nenhuma conta de Search Console. Segue sendo o item
  mais barato dos tres, um clique, e o terceiro ciclo pendente. O link de OAuth
  foi gerado de novo e entregue no relatorio e na notificacao deste ciclo: **nao
  entra neste arquivo porque o repositorio e publico e a URL carrega token de
  conta**; para gerar outro, chamar `get_connector_connect_info` com
  `searchconsole`.

- **A sonda de indexacao deu zero pela oitava vez, serie 2, 0, 0, 0, 0, 0, 0, 0
  e 0.** Amostra de duas consultas, como os ciclos anteriores fixaram. As duas
  em zero, e a sonda segue caindo em outra marca (Nexxus Mobile Intelligence na
  consulta de custo). **O controle de terceiro nao foi rodado, de proposito:** a
  secao 6 registrou que degradou monotonicamente em tres leituras e nao vale
  mais como prova de nada. Nao e deindexacao, e o site segue tecnicamente limpo
  no `gh-pages`, reconferido neste ciclo: `robots.txt` com `Allow: /` bloqueando
  so `/obrigado` e `/lp`, os 9 posts com `index,follow` e canonical correta
  apontando para o proprio slug, sitemap com 14 URLs batendo com os slugs reais
  e HTML cru de 11.095 a 25.948 bytes com 12 a 25 links. A condicao de escalar 4
  **nao** esta acionada. Indexacao com valor probatorio so vem do Search
  Console.

- **As 4 paginas de outra marca seguem no ar e seguem indexaveis, sem mudanca.**
  Reconferido o `<meta name="robots">`: `/academy` (80.780 B) por declaracao
  explicita `index, follow`, e `/precificacao` (20.885 B), `/usual` (55.953 B) e
  `/en` (49.801 B) **por omissao**. As internas da Nexxus que nao devem indexar
  seguem corretas: `/calculadora` (16.080 B) e `/diagnostico` (32.050 B) com
  `noindex`. Continua pendencia do Gabriel.

- **Deploy conferido pelo hash do bundle, nao pela data, como a secao 6 manda.**
  O `dist/assets/index-DkF33cln.js` gerado localmente e o mesmo arquivo que o
  `gh-pages` referencia no `index.html`. O site publicado e o build atual. O run
  29 reporta o `gh-pages` em 9f837fc e o Pages publicado.

- **Banco de fotos nao e gargalo.** `node carrossel/checar-fotos.mjs` roda sem
  erro e nenhuma foto passou do limite. Sobram 4 livres e duas delas ja tem
  recorte aprovado em `proximos_posts`: `equipe-banner.webp` a 44% e
  `sala-reuniao-tijolo.webp` a 38%. O ambiente "sala da equipe (banner e neon)"
  segue sem capa.

- **A pauta de 29/09, reescrever `tendencias-mercado-comercial-b2b`, segue de pe
  e intocada.** Decimo segundo ciclo. Medido de novo, ele segue o ativo mais
  fraco do blog: 11.095 bytes de HTML cru contra 19.740 a 25.948 dos outros
  oito, e 12 links contra 17 a 25. Nao foi queimada de proposito: meia reescrita
  sem fonte reprovaria na rubrica igual e produziria o falso sinal da condicao
  de escalar 6.

- Build integro: `npm ci` e `npm run build` sem erro, 14 rotas da Nexxus
  pre-renderizadas com `canonical` e sitemap com 14 URLs batendo com os slugs
  reais.

- **Nada foi publicado e nada foi meio publicado.** A proibicao da secao 6 de
  adicionar link interno para mover indexacao foi respeitada de novo: a rede
  segue saturada entre 12 e 25 links por post e nenhum link foi adicionado,
  ainda que o prompt agendado peca no passo 2 do passe 3. Passe 4 nao se aplica,
  porque nao houve mudanca de conteudo nem capa nova para capturar. **A sessao
  comecou em detached HEAD** (`## HEAD (no branch)`, com `main` e `origin/main`
  em ce5ca05 e o HEAD em 8a6ee0b), entao o remedio da secao 6 foi aplicado:
  conferido `git merge-base --is-ancestor main HEAD` e feito
  `git checkout -B main <sha>` antes do push. Com 13/10 e hoje em detached e
  15/10 e 03/11 limpos, a intermitencia registrada na secao 6 esta confirmada em
  quatro leituras e a ordem de ler `git status -sb` primeiro se justifica.
  **Detalhe novo que evita um susto:** logo depois do remedio o `git status -sb`
  imprimiu `## main...origin/main [ahead 1]`, o que parece commit local nao
  empurrado. Nao era: o `origin/main` local estava velho, parado em ce5ca05, e
  um `git fetch origin main` bastou para mostrar HEAD e `origin/main` no mesmo
  8a6ee0b. Em detached HEAD a referencia do remoto tambem vem desatualizada,
  entao conferir com fetch antes de interpretar qualquer "ahead".

- **Condicao de escalar 7 acionada pelo quinto ciclo seguido, e a recomendacao
  muda de pausar para espacar, pela regra que a propria secao 7 anterior
  fixou.** O agendamento continua ativo e nao pausado: `cron` em `0 10 * * 2,4`,
  `enabled: true`, proxima execucao em 10/11/2026. Nenhum bloco de configuracao
  mudou e nao houve commit do Gabriel no periodo: os tres ultimos commits do
  repositorio sao os proprios commits de documentacao dos ciclos 10, 11 e 12. O
  ciclo anterior levantou a hipotese de que o silencio fosse de canal, nao de
  decisao, porque a recomendacao so havia sido entregue na mensagem de commit e
  no relatorio da sessao, e por isso mandou tambem notificacao por push. **A
  notificacao foi entregue e a configuracao segue intocada, entao o canal deixa
  de explicar o silencio e a leitura passa a ser decisao de nao mexer, que e
  legitima.** Pela regra pre-combinada, a recomendacao deixa de ser pausar e
  passa a ser **espacar o agendamento para quinzenal**, porque um ciclo
  quinzenal de manutencao ainda tem valor (mede indexacao, confere deploy pelo
  hash, reconfere o `gh-pages` e dispara o `pos-deploy`) e duas execucoes
  semanais sem egresso nao tem: doze ciclos consumiram execucao completa para
  produzir, cada um, um commit de documentacao e nenhum artigo. Nada foi
  alterado no agendamento, porque mexer nele sem ordem do Gabriel seria decidir
  por ele.

**Proximo ciclo:** o gargalo de publicacao nao e pauta, nao e foto, nao e metodo
e nao se resolve dentro do loop. Sao mudancas de configuracao, todas do Gabriel,
em ordem de impacto:

1. **Network access, agora por prompt de aprovacao, nao por menu.** Sem egresso
   a rubrica tem teto de 68 contra corte de 85 e nenhum artigo passa, por
   aritmetica. E o unico item que destrava **publicar**. A partir deste ciclo o
   pedido chega como aprovacao de `update_environment`, com os onze hosts ja
   preenchidos, e basta aprovar; o caminho manual em
   https://code.claude.com/docs/en/cloud-environments#network-access continua
   valendo como alternativa. Com egresso aberto, a pauta ja esta escolhida e a
   capa ja esta recortada: a reescrita de `tendencias-mercado-comercial-b2b`.
2. **Autorizar o conector `searchconsole` do Windsor.ai**, pelo link de OAuth
   entregue no relatorio e na notificacao deste ciclo. Destrava **medir**: a
   faixa de 8 a 30 e o estado de indexacao com valor probatorio, que hoje saem
   de um instrumento com serie 2, 0, 0, 0, 0, 0, 0, 0 e 0 e com o controle
   morto. E o item mais barato da lista, um clique, e nao depende do item 1 nem
   do 3. Terceiro ciclo pendente.
3. **Secret `GSC_SERVICE_ACCOUNT_JSON` no Actions** (e os dois do Cloudflare).
   Continua sendo o que faz a secao 4b valer e o que tira os itens a) e b) da
   checklist do Gabriel. Com o item 2 feito, deixa de ser o unico caminho para
   medir indexacao e passa a ser so automacao de purge e sitemap.

E, antes das tres, a decisao de **espacar o agendamento para quinzenal**
enquanto nenhuma delas acontecer, pela condicao de escalar 7 acima, agora no
quinto ciclo seguido e com a hipotese de canal descartada.

Nos tres casos, nunca medir indexacao por `site:` sozinho, nunca pela sonda de
titulo sozinha, e nunca por cor de etapa do Actions: so pelo texto do log e pelo
Search Console. E, no passe 3, disparar o `pos-deploy.yml` por
`workflow_dispatch` e ler o run disparado, que agora e etapa fixa.

## 7c. Estado anterior (03/11/2026)

- **Decimo primeiro ciclo seguido sem artigo novo, e o gargalo nao mudou:
  egresso de rede.** Conferido antes de qualquer outra coisa, como a secao 7
  anterior mandou. Respondem so os hosts do GitHub: `api.github.com` 200 e
  `raw.githubusercontent.com` 301. Negados no CONNECT com 403, cada um
  registrado pelo proprio proxy como `connect_rejected` com "gateway answered
  403 to CONNECT (policy denial or upstream failure)": `www.google.com`,
  `agendor.com.br`, `rdstation.com.br`, `meetime.com.br`, `sebrae.com.br` e
  `ibge.gov.br`. O status do proxy traz `selective: false`, ou seja nenhuma
  lista de dominios liberados foi configurada. A aritmetica da rubrica nao
  mudou: sem abrir fonte o criterio de 20 pontos reprova por definicao, sem
  abrir os 3 primeiros organicos o de 12 nao se mede. Soma 32 de 100, teto de 68
  contra corte de 85. **O loop de conteudo nao foi rodado**, como a secao 7
  anterior determinou. As tres vias de leitura seguem fechadas e nenhuma foi
  reaberta.

- **Achado deste ciclo, e corrige uma afirmacao errada da secao 6: o
  `workflow_dispatch` ja vale agora, sem o secret.** A armadilha do agendador,
  escrita em 27/10, terminava dizendo que disparar o workflow "enquanto o secret
  nao existir nao muda nada, porque a etapa pula de qualquer jeito". Isso
  confunde comportamento com evidencia. O comportamento e identico, a etapa pula
  igual; o que muda e a **data da leitura**, e e exatamente isso que o passe 3
  precisa. Lendo a execucao agendada mais recente, o loop so pode afirmar que os
  secrets nao existiam na rodada anterior: neste ciclo a mais recente era o run
  25, de 29/10, cinco dias atras, porque a execucao agendada de hoje ainda nao
  existia as 10:08 UTC pelo mesmo atraso de sempre. Disparado o run 26 pelo
  proprio loop as 10:08 UTC, a leitura passou a ser do dia, e de passagem o
  atraso variavel do agendador deixou de importar, sem mexer em `cron` e sem
  depender de decisao de horario do Gabriel. Custou uma chamada. Registrado na
  secao 6, e **disparar o workflow e ler o run disparado passa a ser etapa fixa
  do passe 3**, nao algo reservado para o ciclo em que o secret aparecer. Dez
  ciclos leram evidencia velha quando a evidencia do dia estava a uma chamada de
  distancia.

- **Os tres secrets seguem vazios, agora por leitura do proprio dia.** O run 26
  (`workflow_dispatch`, 03/11 as 10:08 UTC) imprime no bloco `env` de toda etapa
  `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ZONE_ID` e `GSC_SERVICE_ACCOUNT_JSON`
  vazios, e o texto do log diz as tres linhas: "- Cloudflare: **pulado**, faltam
  os secrets `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ZONE_ID`", "- Sitemap:
  **pulado**, falta o secret `GSC_SERVICE_ACCOUNT_JSON`" e "- Relatorio de
  indexacao: **pulado**, falta o secret `GSC_SERVICE_ACCOUNT_JSON`". **A secao
  4b continua nao valendo e os itens a) e b) da checklist do Gabriel continuam
  manuais.** A cor oscilou pela nona leitura: as quatro etapas de conteudo vieram
  `success` e as quatro terminaram no mesmo segundo (10:08:43), que e a
  assinatura do pulo ja registrada na secao 6. Nona leitura e nenhuma em que a
  cor carregue informacao.

- **O conector `searchconsole` do Windsor.ai nao foi autorizado.**
  `get_connectors` devolve so `facebook` (tres contas) e `instagram` (duas), pelo
  decimo primeiro ciclo, nenhuma conta de Search Console. Era o item 2 da lista
  de impacto do ciclo anterior e o mais barato dos tres, um clique, e segue
  pendente. O link de OAuth foi gerado de novo e entregue no relatorio deste
  ciclo: **nao entra neste arquivo porque o repositorio e publico e a URL carrega
  token de conta**; para gerar outro, chamar `get_connector_connect_info` com
  `searchconsole`.

- **A sonda de indexacao deu zero pela setima vez, serie 2, 0, 0, 0, 0, 0, 0 e
  0.** Amostra de duas consultas, como os dois ciclos anteriores fixaram. As
  duas em zero, e a sonda segue caindo em outra marca (Nexxus Mobile
  Intelligence na consulta de custo). **O controle de terceiro nao foi rodado
  nesta execucao, de proposito:** a secao 6 registrou que ele degradou
  monotonicamente em tres leituras e nao vale mais como prova de nada, e a mesma
  secao manda nao gastar ciclo refinando a sonda. Nao e deindexacao, e o site
  segue tecnicamente limpo no `gh-pages`, reconferido neste ciclo: `robots.txt`
  com `Allow: /` bloqueando so `/obrigado` e `/lp`, os 9 posts com
  `index,follow` e canonical correta apontando para o proprio slug, sitemap com
  14 URLs batendo com os slugs reais e HTML cru de 11.095 a 25.948 bytes com 14
  a 20 links. A condicao de escalar 4 **nao** esta acionada. Indexacao com valor
  probatorio so vem do Search Console.

- **As 4 paginas de outra marca seguem no ar e seguem indexaveis, sem mudanca.**
  Reconferido o `<meta name="robots">`: `/academy` (80.780 B) por declaracao
  explicita `index, follow`, e `/precificacao` (20.885 B), `/usual` (55.953 B) e
  `/en` (49.801 B) **por omissao**. As internas da Nexxus que nao devem indexar
  seguem corretas: `/calculadora` (16.080 B) e `/diagnostico` (32.050 B) com
  `noindex`. Continua pendencia do Gabriel.

- **Deploy conferido pelo hash do bundle, nao pela data, como a secao 6 manda.**
  O `dist/assets/index-DkF33cln.js` gerado localmente e o mesmo arquivo que o
  `gh-pages` referencia no `index.html`. O site publicado e o build atual. O run
  26 reporta o `gh-pages` em 9f837fc e o Pages publicado.

- **Banco de fotos nao e gargalo.** `node carrossel/checar-fotos.mjs` roda sem
  erro e nenhuma foto passou do limite. Sobram 4 livres e duas delas ja tem
  recorte aprovado em `proximos_posts`: `equipe-banner.webp` a 44% e
  `sala-reuniao-tijolo.webp` a 38%. O ambiente "sala da equipe (banner e neon)"
  segue sem capa.

- **A pauta de 29/09, reescrever `tendencias-mercado-comercial-b2b`, segue de pe
  e intocada.** Decimo primeiro ciclo. Medido de novo, ele segue o ativo mais
  fraco do blog: 11.095 bytes de HTML cru contra 19.740 a 25.948 dos outros
  oito, e 14 links contra 15 a 20. Nao foi queimada de proposito: meia reescrita
  sem fonte reprovaria na rubrica igual e produziria o falso sinal da condicao
  de escalar 6.

- Build integro: `npm ci` e `npm run build` sem erro, 14 rotas da Nexxus
  pre-renderizadas com `canonical` e sitemap com 14 URLs batendo com os slugs
  reais.

- **Nada foi publicado e nada foi meio publicado.** A proibicao da secao 6 de
  adicionar link interno para mover indexacao foi respeitada de novo: a rede
  segue saturada entre 14 e 20 links por post e nenhum link foi adicionado,
  ainda que o prompt agendado peca no passo 2 do passe 3. Passe 4 nao se aplica,
  porque nao houve mudanca de conteudo nem capa nova para capturar. A sessao
  comecou limpa no branch (`## main...origin/main`, com `HEAD`, `main` e
  `origin/main` todos em ce5ca05), entao o remedio de detached HEAD da secao 6
  nao foi aplicado.

- **Condicao de escalar 7 acionada pelo quarto ciclo seguido, e a recomendacao
  segue sem resposta pela terceira vez.** O agendamento continua ativo e nao
  pausado: `cron` em `0 10 * * 2,4`, `enabled: true`, proxima execucao em
  05/11/2026 as 10:05 UTC. Nenhum dos tres blocos de configuracao mudou e nao
  houve commit do Gabriel no periodo: o ultimo commit do repositorio e o proprio
  commit de documentacao do ciclo anterior. Onze ciclos agendados consumiram
  execucao completa para produzir, cada um, um commit de documentacao e nenhum
  artigo. **A recomendacao continua a mesma e segue sendo decisao do Gabriel:
  pausar o agendamento ate liberar o Network access**, e religar junto com a
  liberacao. Nada foi pausado, porque mexer no agendamento sem ordem dele seria
  decidir por ele.

- **Hipotese sobre por que tres recomendacoes seguidas ficaram sem resposta, e e
  acionavel.** Os dez ciclos anteriores entregaram a recomendacao em dois
  lugares: a mensagem de commit e o relatorio final da sessao. Os dois sao lidos
  por quem abre o repositorio ou a sessao, e este loop roda sozinho as 7h00 BRT,
  sem ninguem acompanhando. Ou seja, pode nao ser silencio de decisao, pode ser
  que a recomendacao nunca tenha chegado. **Este ciclo mandou tambem uma
  notificacao** (a ferramenta de push do agendamento, que cai no telefone e no
  e-mail do Gabriel), com o pedido reduzido a uma linha acionavel. Se a proxima
  execucao encontrar a configuracao ainda intocada, o canal deixa de ser
  explicacao plausivel e a leitura passa a ser decisao de nao mexer, que e
  legitima e muda a recomendacao: nesse caso, o loop deve propor um intervalo
  maior em vez de pausa, porque ciclo quinzenal de manutencao ainda tem valor e
  duas execucoes semanais sem egresso nao tem.

**Proximo ciclo:** o gargalo de publicacao nao e pauta, nao e foto, nao e metodo
e nao se resolve dentro do loop. Sao mudancas de configuracao, todas do Gabriel,
em ordem de impacto:

1. **Network access, no menu do ambiente, em Edit.** Sem egresso a rubrica tem
   teto de 68 contra corte de 85 e nenhum artigo passa, por aritmetica. E o
   unico item que destrava **publicar**. Os passos estao em
   https://code.claude.com/docs/en/cloud-environments#network-access e bastam os
   dominios das fontes e dos tres concorrentes sob "Allowed domains", com a
   caixa de gerenciadores de pacote marcada. Com egresso aberto, a pauta ja esta
   escolhida e a capa ja esta recortada: a reescrita de
   `tendencias-mercado-comercial-b2b`.
2. **Autorizar o conector `searchconsole` do Windsor.ai**, pelo link de OAuth
   entregue no relatorio deste ciclo. Destrava **medir**: a faixa de 8 a 30 e o
   estado de indexacao com valor probatorio, que hoje saem de um instrumento com
   serie 2, 0, 0, 0, 0, 0, 0 e 0 e com o controle morto. E o item mais barato da
   lista, um clique, e nao depende do item 1 nem do 3. Segundo ciclo pendente.
3. **Secret `GSC_SERVICE_ACCOUNT_JSON` no Actions** (e os dois do Cloudflare).
   Continua sendo o que faz a secao 4b valer e o que tira os itens a) e b) da
   checklist do Gabriel. Com o item 2 feito, deixa de ser o unico caminho para
   medir indexacao e passa a ser so automacao de purge e sitemap.

E, antes das tres, a decisao de **pausar ou nao o agendamento** enquanto nenhuma
delas acontecer, pela condicao de escalar 7 acima, agora no quarto ciclo
seguido. Se este ciclo tambem ficar sem resposta, a recomendacao muda de pausar
para espacar, pelo motivo registrado acima.

Nos tres casos, nunca medir indexacao por `site:` sozinho, nunca pela sonda de
titulo sozinha, e nunca por cor de etapa do Actions: so pelo texto do log e pelo
Search Console. E, no passe 3, disparar o `pos-deploy.yml` por
`workflow_dispatch` e ler o run disparado, que agora e etapa fixa.

## 7d. Estado anterior (29/10/2026)

- **Decimo ciclo seguido sem artigo novo, e o gargalo nao mudou: egresso de
  rede.** Conferido antes de qualquer outra coisa, como a secao 7 anterior
  mandou. Respondem so os hosts do GitHub: `api.github.com` 200 e
  `raw.githubusercontent.com` 301. Negados no CONNECT com 403, cada um
  registrado pelo proprio proxy como `connect_rejected` com "gateway answered
  403 to CONNECT (policy denial or upstream failure)": `www.google.com`,
  `agendor.com.br`, `rdstation.com.br`, `meetime.com.br`, `sebrae.com.br` e
  `ibge.gov.br`. A aritmetica da rubrica nao mudou: sem abrir fonte o criterio
  de 20 pontos reprova por definicao, sem abrir os 3 primeiros organicos o de 12
  nao se mede. Soma 32 de 100, teto de 68 contra corte de 85. **O loop de
  conteudo nao foi rodado**, como a secao 7 anterior determinou. As tres vias de
  leitura seguem fechadas e nenhuma foi reaberta, como aquela secao mandou.

- **Achado deste ciclo, e e o unico com valor de acao: existe um terceiro
  caminho para medir a faixa de 8 a 30, mais barato que o secret, e ele e um
  clique.** Nove ciclos trataram o `GSC_SERVICE_ACCOUNT_JSON` como caminho unico
  para o Search Console, e a secao 4b depende dele. Mas o `searchconsole` esta
  no catalogo de conectores do Windsor.ai, que ja e um MCP conectado a esta
  sessao, e a propria secao 4b sempre previu essa via ("Desempenho vem pelo
  conector de Search Console do Windsor.ai, quando estiver conectado"). O que
  faltava nao era a via, era o link: `get_connector_connect_info` devolve uma
  URL de OAuth pronta para o Gabriel autorizar, `auth_type: oauth`, sem campo de
  credencial para preencher e sem service account para criar. **A URL nao entra
  neste arquivo porque o repositorio e publico e ela carrega token de conta**,
  entao ela foi entregue no relatorio do ciclo; para gerar de novo, chamar
  `get_connector_connect_info` com `searchconsole`. Dois cuidados que o proprio
  conector avisa: logar na conta Windsor.ai a que o assistente esta conectado, e
  escolher na tela do Google a conta que tem acesso a propriedade, marcando a
  permissao de Search Console e selecionando o site antes de concluir. Isso
  destrava **medicao**, ou seja, a faixa de 8 a 30 e o estado de indexacao com
  valor probatorio, e nao destrava o egresso: a rubrica continua com teto de 68
  sem o Network access. Sao problemas separados e a ordem de impacto nao muda.

- **A sonda de indexacao deu zero pela sexta vez, serie 2, 0, 0, 0, 0, 0 e 0, e
  o controle de terceiro degradou mais, agora de forma progressiva.** Amostra de
  duas consultas de proposito, como o ciclo anterior fixou. As duas em zero, e a
  sonda segue caindo em outra marca (Nexxus Mobile Intelligence nas duas). A
  novidade esta no controle: em 06/10 e 15/10 ele devolvia a pagina certa e **so
  resultados do proprio dominio**; em 27/10 vazou tres dominios de terceiros; e
  nesta execucao devolveu a pagina certa em primeiro lugar mas vazou **cerca de
  dez** (`gazetadopovo.com.br`, `repositorio.itl.org.br`, `academiaassai.com.br`,
  `acionista.com.br`, `empresaqui.com.br`, `b2bstack.com.br`, `startupi.com.br`,
  `bemparana.com.br`, `pordentrodeminas.com.br`, `meioemensagem.com.br`). Ou
  seja, a degradacao do controle nao foi episodio de uma execucao: ela piorou
  monotonicamente nas tres ultimas leituras. Isso **reforca** a conclusao em
  vigor em vez de mudar: nao e deindexacao, e o site segue tecnicamente limpo no
  `gh-pages`, reconferido neste ciclo com `robots.txt` em `Allow: /` bloqueando
  so `/obrigado` e `/lp`, os 9 posts com `index,follow` e canonical correta
  apontando para o proprio slug, sitemap com 14 URLs batendo com os slugs reais
  e HTML cru de 11.095 a 25.948 bytes com 12 a 25 links. A condicao de escalar 4
  **nao** esta acionada. Indexacao com valor probatorio so vem do Search
  Console, e agora ha um caminho de um clique para ele.

- **O atraso do agendador se confirma pela quinta execucao seguida.** O run 23
  (`schedule`) saiu em 27/10 as 15:23 UTC contra o `cron` de 09:17, ou seja
  6h06 depois, e a execucao agendada de hoje ainda nao existia as 10:08 UTC,
  mesmo padrao das anteriores. A serie de atrasos e agora run 16 com 7h41, run
  19 com 4h55, run 20 com 5h03, run 21 com 5h15 e run 23 com 6h06. Nada a
  corrigir por horario, pelo motivo ja registrado na secao 6: o atraso e
  variavel, e a correcao e disparar o workflow por `workflow_dispatch` e ler o
  run que o proprio loop disparou, no ciclo em que o secret existir.

- **A cor da etapa do Actions oscilou pela oitava leitura, e os tres secrets
  seguem vazios.** O run 23 traz "Esperar o GitHub Pages publicar", "Purgar
  cache do Cloudflare" e "Reenviar sitemap no Search Console" como **skipped** e
  "Relatorio de indexacao" como `success`, o mesmo arranjo dos runs 16 e 21.
  Lido o texto do log, como a secao 6 manda: "- Relatorio de indexacao:
  **pulado**, falta o secret `GSC_SERVICE_ACCOUNT_JSON`", e o bloco `env`
  imprime `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ZONE_ID` e
  `GSC_SERVICE_ACCOUNT_JSON` vazios. **A secao 4b continua nao valendo e os
  itens a) e b) da checklist do Gabriel continuam manuais.**

- **As 4 paginas de outra marca seguem no ar e seguem indexaveis, sem mudanca.**
  Reconferido o `<meta name="robots">`: `/academy` (80.780 B) por declaracao
  explicita `index, follow`, e `/precificacao` (20.885 B), `/usual` (55.953 B) e
  `/en` (49.801 B) **por omissao**. As internas da Nexxus que nao devem indexar
  seguem corretas: `/calculadora` e `/diagnostico` com `noindex`. Continua
  pendencia do Gabriel.

- **Deploy conferido pelo hash do bundle, nao pela data, como a secao 6 manda.**
  O `dist/assets/index-DkF33cln.js` gerado localmente e o mesmo arquivo que o
  `gh-pages` referencia no `index.html`. O site publicado e o build atual.

- **Windsor.ai reconferido pelo decimo ciclo: as contas conectadas seguem so
  `facebook` e `instagram`.** Nenhuma conta de Search Console conectada, e e
  isso que o achado de acao acima ataca: o conector existe e o link de
  autorizacao existe, falta o Gabriel autorizar.

- **Banco de fotos nao e gargalo.** `node carrossel/checar-fotos.mjs` roda sem
  erro e nenhuma foto passou do limite. Sobram 4 livres e duas delas ja tem
  recorte aprovado em `proximos_posts`: `equipe-banner.webp` a 44% e
  `sala-reuniao-tijolo.webp` a 38%. O ambiente "sala da equipe (banner e neon)"
  segue sem capa.

- **A pauta de 29/09, reescrever `tendencias-mercado-comercial-b2b`, segue de pe
  e intocada.** Decimo ciclo. Medido de novo, ele segue o ativo mais fraco do
  blog: 11.095 bytes de HTML cru contra 19.740 a 25.948 dos outros oito, e 12
  links contra 17 a 25. Nao foi queimada de proposito: meia reescrita sem fonte
  reprovaria na rubrica igual e produziria o falso sinal da condicao de escalar
  6.

- Build integro: `npm ci` e `npm run build` sem erro, 14 rotas da Nexxus
  pre-renderizadas com `canonical` e sitemap com 14 URLs batendo com os slugs
  reais.

- **Nada foi publicado e nada foi meio publicado.** A proibicao da secao 6 de
  adicionar link interno para mover indexacao foi respeitada de novo: a rede
  segue saturada entre 12 e 25 links por post e nenhum link foi adicionado,
  ainda que o prompt agendado peca no passo 2 do passe 3. Passe 4 nao se aplica,
  porque nao houve mudanca de conteudo nem capa nova para capturar. A sessao
  comecou limpa no branch (`## main...origin/main`, com `HEAD`, `main` e
  `origin/main` todos em 8886c04), entao o remedio de detached HEAD da secao 6
  nao foi aplicado.

- **Condicao de escalar 7 acionada pelo terceiro ciclo seguido, e a
  recomendacao segue sem resposta pela segunda vez.** O agendamento continua
  ativo e nao pausado: `cron` em `0 10 * * 2,4`, `enabled: true`, proxima
  execucao em 03/11/2026 as 10:05 UTC. Nenhum dos dois blocos de configuracao
  mudou e nao houve commit do Gabriel no periodo: o ultimo commit do
  repositorio e o proprio commit de documentacao do ciclo anterior. Dez ciclos
  agendados consumiram execucao completa para produzir, cada um, um commit de
  documentacao e nenhum artigo. **A recomendacao continua a mesma e segue sendo
  decisao do Gabriel: pausar o agendamento ate liberar o Network access**, e
  religar junto com a liberacao. Nada foi pausado, porque mexer no agendamento
  sem ordem dele seria decidir por ele.

**Proximo ciclo:** o gargalo de publicacao nao e pauta, nao e foto, nao e metodo
e nao se resolve dentro do loop. Sao mudancas de configuracao, todas do Gabriel,
em ordem de impacto:

1. **Network access, no menu do ambiente, em Edit.** Sem egresso a rubrica tem
   teto de 68 contra corte de 85 e nenhum artigo passa, por aritmetica. E o
   unico item que destrava **publicar**. Os passos estao em
   https://code.claude.com/docs/en/cloud-environments#network-access e bastam os
   dominios das fontes e dos tres concorrentes sob "Allowed domains", com a
   caixa de gerenciadores de pacote marcada. Com egresso aberto, a pauta ja esta
   escolhida e a capa ja esta recortada: a reescrita de
   `tendencias-mercado-comercial-b2b`.
2. **Autorizar o conector `searchconsole` do Windsor.ai**, pelo link de OAuth
   entregue no relatorio deste ciclo. Destrava **medir**: a faixa de 8 a 30 e o
   estado de indexacao com valor probatorio, que hoje saem de um instrumento com
   serie 2, 0, 0, 0, 0, 0 e 0 e com o controle degradando. E o item mais barato
   da lista, um clique, e nao depende do item 1 nem do 3.
3. **Secret `GSC_SERVICE_ACCOUNT_JSON` no Actions** (e os dois do Cloudflare).
   Continua sendo o que faz a secao 4b valer e o que tira os itens a) e b) da
   checklist do Gabriel. Com o item 2 feito, deixa de ser o unico caminho para
   medir indexacao e passa a ser so automacao de purge e sitemap.

E, antes das tres, a decisao de **pausar ou nao o agendamento** enquanto nenhuma
delas acontecer, pela condicao de escalar 7 acima, agora no terceiro ciclo
seguido.

Nos tres casos, nunca medir indexacao por `site:` sozinho, nunca pela sonda de
titulo sozinha, e nunca por cor de etapa do Actions: so pelo texto do log e pelo
Search Console.

