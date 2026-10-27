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
  workflow e ler o run que o proprio loop disparou. Enquanto o secret nao
  existir isso nao muda nada, porque a etapa pula de qualquer jeito.
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
---

## 7. Estado atual (27/10/2026)

- **Nono ciclo seguido sem artigo novo, e o gargalo nao mudou: egresso de rede.**
  Conferido antes de qualquer outra coisa, como a secao 7 anterior mandou.
  Respondem so os hosts do GitHub: `api.github.com` 200 e
  `raw.githubusercontent.com` 301. Negados no CONNECT com 403, cada um
  registrado pelo proprio proxy como `connect_rejected` com "gateway answered
  403 to CONNECT (policy denial or upstream failure)": `www.google.com`,
  `agendor.com.br`, `rdstation.com.br`, `meetime.com.br`, `sebrae.com.br` e
  `ibge.gov.br`. A aritmetica da rubrica nao mudou: sem abrir fonte o criterio
  de 20 pontos reprova por definicao, sem abrir os 3 primeiros organicos o de 12
  nao se mede. Soma 32 de 100, teto de 68 contra corte de 85. **O loop de
  conteudo nao foi rodado**, como a secao 7 anterior determinou. As tres vias de
  leitura seguem fechadas e nenhuma foi reaberta.

- **Achado deste ciclo, e e o unico com valor de metodo: o atraso do agendador
  torna a secao 4b inalcancavel por cron, e nao so por falta de secret.** O
  `pos-deploy.yml` roda em `cron: '17 9 * * 2,4'`, e o comentario do proprio
  arquivo declara a intencao: "o relatorio fica pronto antes do loop das 07:00,
  que le o estado de indexacao daqui". Nao fica. As quatro ultimas execucoes
  agendadas sairam de 4h55 a 7h41 depois da hora marcada: run 16 em 13/10 as
  16:58 UTC, run 19 em 15/10 as 14:12, run 20 em 20/10 as 14:20 e run 21 em
  22/10 as 14:32, todas contra 09:17 UTC. O loop roda as 10:00 UTC, entao o
  relatorio chega de quatro a cinco horas **depois** de quem deveria le-lo, e a
  execucao desta terca ainda nao havia aparecido as 10:08 UTC, mesmo padrao. O
  atraso em si ja estava registrado como episodio em 06/10; o que este ciclo
  fecha e que ele e **o comportamento normal em quatro execucoes seguidas**, e
  portanto nao se corrige adiantando o cron por um valor fixo, porque o atraso
  e variavel. **A correcao certa e de metodo, nao de horario:** o workflow ja
  declara `workflow_dispatch`, e o loop tem ferramenta para disparar execucao e
  ler aquela execucao. No ciclo em que o `GSC_SERVICE_ACCOUNT_JSON` existir, o
  passe 3 deve **disparar o workflow e ler o run que ele mesmo disparou**, em
  vez de abrir a execucao agendada mais recente, que sera sempre a da rodada
  anterior. Nada foi alterado no workflow: enquanto os secrets nao existirem a
  mudanca nao tem efeito nenhum, e com os secrets a decisao de horario pode ser
  do Gabriel.

- **A cor da etapa do Actions oscilou pela setima leitura, e os tres secrets
  seguem vazios.** O run 21 (`schedule`, 22/10 14:32 UTC) traz "Esperar o GitHub
  Pages publicar", "Purgar cache do Cloudflare" e "Reenviar sitemap no Search
  Console" como **skipped** e "Relatorio de indexacao" como `success`, o mesmo
  arranjo do run 16. Lido o texto do log, como a secao 6 manda: "- Relatorio de
  indexacao: **pulado**, falta o secret `GSC_SERVICE_ACCOUNT_JSON`", e o bloco
  `env` de toda etapa imprime `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ZONE_ID` e
  `GSC_SERVICE_ACCOUNT_JSON` vazios. **A secao 4b continua nao valendo e os
  itens a) e b) da checklist do Gabriel continuam manuais.**

- **A sonda de indexacao deu zero pela quinta vez, serie 2, 0, 0, 0, 0 e 0, e
  agora o proprio controle de terceiro degradou.** A sonda de titulo exato mais
  "Nexxus" segue em zero e segue caindo em outras marcas (Nexxus Mobile
  Intelligence, Nexxera). A novidade esta no controle: em 06/10 e em 15/10,
  `site:agendor.com.br/blog/terceirizacao-de-vendas` devolvia aquela pagina e
  **so resultados do proprio dominio**; nesta execucao devolveu a pagina certa
  mas vazou tres dominios de terceiros (`gazetadopovo.com.br`,
  `empresaqui.com.br`, `repositorio.itl.org.br`), e o resumo do proprio
  instrumento afirmou que a URL exata "nao apareceu" quando ela era o primeiro
  resultado. Ou seja, **o controle que servia para provar que o operador estava
  funcionando naquela execucao tambem perdeu precisao**, e com ele a ultima
  checagem de sanidade da sonda. Isso reforca a conclusao em vigor em vez de
  mudar: amostra reduzida de proposito a duas consultas, porque com a serie
  fechada em cinco zeros e o controle degradado nenhuma consulta adicional muda
  decisao. **Nao e deindexacao**, e o site segue tecnicamente limpo no
  `gh-pages`: `robots.txt` com `Allow: /` bloqueando so `/obrigado` e `/lp`, os
  9 posts com `index,follow` e canonical correta apontando para o proprio slug,
  sitemap com 14 URLs batendo com os slugs reais, HTML cru de 11.095 a 25.948
  bytes com 12 a 25 links. A condicao de escalar 4 **nao** esta acionada.
  Indexacao com valor probatorio so vem do Search Console.

- **As 4 paginas de outra marca seguem no ar e seguem indexaveis, sem mudanca.**
  Reconferido o `<meta name="robots">`: `/academy` (80.780 B) por declaracao
  explicita `index, follow`, e `/precificacao` (20.885 B), `/usual` (55.953 B) e
  `/en` (49.801 B) **por omissao**. As internas da Nexxus que nao devem indexar
  seguem corretas: `/calculadora` e `/diagnostico` com `noindex`. Continua
  pendencia do Gabriel.

- **Deploy conferido pelo hash do bundle, nao pela data, como a secao 6 manda.**
  O `dist/assets/index-DkF33cln.js` gerado localmente e o mesmo arquivo que o
  `gh-pages` referencia no `index.html`. O site publicado e o build atual.

- **Windsor.ai reconferido pelo nono ciclo: so `facebook` e `instagram`.**
  Nenhum conector de Search Console. Com o `GSC_SERVICE_ACCOUNT_JSON` tambem
  ausente, a faixa de 8 a 30 da secao 3b segue inauditavel, e nao por falta de
  tentativa: nao ha caminho.

- **Banco de fotos nao e gargalo.** `node carrossel/checar-fotos.mjs` roda sem
  erro e nenhuma foto passou do limite. Sobram 4 livres e duas delas ja tem
  recorte aprovado em `proximos_posts`: `equipe-banner.webp` a 44% e
  `sala-reuniao-tijolo.webp` a 38%. O ambiente "sala da equipe (banner e neon)"
  segue sem capa.

- **A pauta de 29/09, reescrever `tendencias-mercado-comercial-b2b`, segue de pe
  e intocada.** Nono ciclo. Medido de novo, ele segue o ativo mais fraco do
  blog: 11.095 bytes de HTML cru contra 19.740 a 25.948 dos outros oito, e 12
  links contra 17 a 25. Nao foi queimada de proposito: meia reescrita sem fonte
  reprovaria na rubrica igual e produziria o falso sinal da condicao de escalar
  6.

- Build integro: `npm ci` e `npm run build` sem erro, 14 rotas da Nexxus
  pre-renderizadas com `canonical`, sitemap com 14 URLs batendo com os slugs
  reais.

- **Nada foi publicado e nada foi meio publicado.** A proibicao da secao 6 de
  adicionar link interno para mover indexacao foi respeitada de novo: a rede
  segue saturada entre 12 e 25 links por post e nenhum link foi adicionado,
  ainda que o prompt agendado peca. Passe 4 nao se aplica, porque nao houve
  mudanca de conteudo nem capa nova para capturar. A sessao comecou limpa no
  branch (`## main...origin/main`, com `HEAD`, `main` e `origin/main` todos em
  99351d9), entao o remedio de detached HEAD da secao 6 nao foi aplicado.

- **Condicao de escalar 7 acionada pelo segundo ciclo seguido, e agora com a
  recomendacao anterior sem resposta.** O ciclo de 15/10 recomendou pausar o
  agendamento de terca e quinta ate a liberacao do Network access. O agendamento
  nao foi pausado, nenhum dos dois blocos de configuracao mudou, e nao houve
  commit do Gabriel no periodo: o ultimo commit do repositorio e o proprio
  commit de documentacao daquele ciclo. Nove ciclos agendados consumiram
  execucao completa para produzir, cada um, um commit de documentacao e nenhum
  artigo. Este ciclo ao menos devolveu um achado de metodo, o do agendador
  acima, mas isso nao se repete: os dois blocos seguem fora do alcance do loop.
  **A recomendacao continua a mesma e segue sendo decisao do Gabriel: pausar o
  agendamento ate liberar o Network access, e religar junto com a liberacao.**
  Nada foi pausado, porque mexer no agendamento sem ordem dele seria decidir por
  ele.

**Proximo ciclo:** o gargalo nao e pauta, nao e foto, nao e metodo e nao se
resolve dentro do loop. Sao duas mudancas de configuracao, as duas do Gabriel,
em ordem de impacto:

1. **Network access, no menu do ambiente, em Edit.** Sem egresso a rubrica tem
   teto de 68 contra corte de 85 e nenhum artigo passa, por aritmetica. Os
   passos estao em https://code.claude.com/docs/en/cloud-environments#network-access
   e bastam os dominios das fontes e dos tres concorrentes sob "Allowed
   domains", com a caixa de gerenciadores de pacote marcada. Com egresso aberto,
   a pauta ja esta escolhida e a capa ja esta recortada: a reescrita de
   `tendencias-mercado-comercial-b2b`.
2. **Secret `GSC_SERVICE_ACCOUNT_JSON` no Actions** (e os dois do Cloudflare).
   E o unico caminho para medir indexacao e a faixa de 8 a 30. No ciclo em que
   ele existir, o passe 3 deve disparar o `pos-deploy.yml` por
   `workflow_dispatch` e ler o run que disparou, nunca a execucao agendada mais
   recente, pelo atraso de 4 a 7 horas registrado acima.

E, antes das duas, a decisao de **pausar ou nao o agendamento** enquanto nenhuma
delas acontecer, pela condicao de escalar 7 acima, agora no segundo ciclo
seguido.

Nos dois casos, nunca medir indexacao por `site:` sozinho, nunca pela sonda de
titulo sozinha, e nunca por cor de etapa do Actions: so pelo texto do log e pelo
Search Console.

## 7b. Estado anterior (15/10/2026)

- **Oitavo ciclo seguido sem artigo novo, e o gargalo nao mudou: egresso de
  rede.** Conferido antes de qualquer outra coisa, como a secao 7 anterior
  mandou. Respondem so os hosts do GitHub: `api.github.com` 200 e
  `raw.githubusercontent.com` 301. Negados no CONNECT com 403, cada um
  registrado pelo proprio proxy como `connect_rejected` com "gateway answered
  403 to CONNECT (policy denial or upstream failure)": `www.google.com`,
  `agendor.com.br`, `rdstation.com.br`, `meetime.com.br`, `pt.wikipedia.org`,
  `sebrae.com.br`, `blog.hubspot.com` e `ibge.gov.br`. A sonda de 23 hosts de
  06/10 ja fechou a questao da fonte alternativa, entao este ciclo so
  reconfirmou o padrao numa amostra, incluindo de novo um orgao oficial de
  estatistica. A aritmetica da rubrica nao mudou: sem abrir fonte o criterio de
  20 pontos reprova por definicao, sem abrir os 3 primeiros organicos o de 12
  nao se mede. Teto de 68 contra corte de 85. **O loop de conteudo nao foi
  rodado**, como a secao 7 anterior determinou.
- **Nada novo a testar, e isso agora e resultado e nao lacuna.** As tres vias de
  leitura de pagina seguem fechadas e testadas (`curl` 403 no CONNECT,
  `WebFetch` ENOTFOUND, `WebSearch` so resumo parafraseado), e o ciclo anterior
  ja registrou que nao resta hipotese tecnica. Este ciclo nao gastou tempo
  reabrindo nenhuma delas, como aquela secao determinou. O unico achado tecnico
  foi sobre o git, abaixo.
- **A sessao comecou limpa no branch, e isso corrige a leitura do ciclo
  anterior.** `git status -sb` imprimiu `## main...origin/main`, com `HEAD`,
  `main` e `origin/main` todos em 55f8b6c. Ou seja, o detached HEAD de 13/10
  **nao e como a sessao sempre comeca**, e sim intermitente. Registrado na
  secao 6 junto do remedio, com a instrucao de ler `git status -sb` antes de
  aplicar o `git checkout -B main <sha>`: aplicar as cegas nao quebra nada, mas
  esconde qual dos dois estados a sessao recebeu.
- **A cor da etapa do Actions oscilou pela sexta leitura, e os secrets seguem
  ausentes.** O run 16 (`schedule`, 13/10 16:58 UTC) traz "Esperar o GitHub
  Pages publicar", "Purgar cache do Cloudflare" e "Reenviar sitemap no Search
  Console" como **skipped** e "Relatorio de indexacao" como `success`. Lido o
  texto do log, como a secao 6 manda: "- Relatorio de indexacao: **pulado**,
  falta o secret `GSC_SERVICE_ACCOUNT_JSON`", e o bloco `env` de toda etapa
  imprime `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ZONE_ID` e
  `GSC_SERVICE_ACCOUNT_JSON` vazios. A serie de cores e agora run 6 com duas
  skipped, run 7 com quatro success, run 9 com tres skipped, run 10 com quatro
  success, run 13 com tres skipped e run 16 com tres skipped, sempre com a mesma
  configuracao e sempre sem purgar nem reenviar nada. **A secao 4b continua nao
  valendo e os itens a) e b) da checklist do Gabriel continuam manuais.**
- **E o run 17, disparado pelo push deste ciclo, fecha o assunto da cor de uma
  vez: as quatro etapas de conteudo vieram `success`**, contra as tres skipped
  do run 16. Mesmo dia, mesma configuracao, mesmos secrets ausentes, e as quatro
  terminando em 3 segundos, que e a assinatura do pulo. O texto do log diz as
  tres linhas: "- Cloudflare: **pulado**, faltam os secrets
  `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ZONE_ID`", "- Sitemap: **pulado**, falta
  o secret `GSC_SERVICE_ACCOUNT_JSON`" e "- Relatorio de indexacao: **pulado**,
  falta o secret `GSC_SERVICE_ACCOUNT_JSON`", com os tres secrets vazios no
  bloco `env`. Ate aqui a oscilacao da cor estava documentada **entre** ciclos,
  o que ainda deixava a desculpa de alguma mudanca no meio; agora ela esta
  documentada **dentro do mesmo ciclo**, em duas execucoes a uma hora de
  distancia, sem um unico commit alterando o workflow ou os secrets entre elas.
  A serie completa de cores e run 6 duas skipped, run 7 quatro success, run 9
  tres skipped, run 10 quatro success, run 13 tres skipped, run 16 tres skipped
  e run 17 quatro success. **A cor nao carrega informacao nenhuma, e o par
  16/17 e a prova mais curta disso.**
- **A sonda de indexacao deu zero pela quarta vez seguida, e a serie e 2, 0, 0,
  0 e 0 em catorze dias.** O controle de terceiro funcionou nesta execucao:
  `site:agendor.com.br/blog/terceirizacao-de-vendas` devolve aquela pagina exata
  e so resultados do proprio dominio. Amostra de 4 dos 9 posts pela sonda de
  titulo exato mais "Nexxus", todas zero, e a sonda segue caindo em outras
  marcas (Nexxus Mobile Intelligence, SalesNexus). O site segue tecnicamente
  limpo no `gh-pages`: `robots.txt` com `Allow: /` bloqueando so `/obrigado` e
  `/lp`, os 9 posts com `index,follow` e canonical correta apontando para o
  proprio slug, sitemap com 14 URLs batendo com os slugs reais, HTML cru de
  11.095 a 25.948 bytes com 12 a 25 links. **Quatro zeros seguidos num site
  limpo e inalterado continuam sendo a leitura estavel de um instrumento
  quebrado, nao deindexacao.** A condicao de escalar 4 **nao** esta acionada.
  Indexacao com valor probatorio so vem do Search Console. A amostra foi de 4 e
  nao de 9 de proposito: com a serie fechada em quatro leituras e o instrumento
  sem valor probatorio, as outras cinco consultas nao mudariam decisao nenhuma.
- **As 4 paginas de outra marca seguem no ar e seguem indexaveis, sem mudanca.**
  Reconferido o `<meta name="robots">` das quatro: `/academy` (80.780 B) por
  declaracao explicita `index, follow`, e `/precificacao` (20.885 B), `/usual`
  (55.953 B) e `/en` (49.801 B) **por omissao**, porque nenhuma traz meta robots
  nenhum e o padrao e indexavel. Nenhuma esta no sitemap e nenhuma esta no
  `Disallow`. Para contraste, as internas da Nexxus que nao devem indexar
  seguem corretas: `/calculadora` e `/diagnostico` com `noindex`,
  `/usual/membros`, `/usual/comunidade` e `/en/members` com `noindex, nofollow`.
  Continua pendencia do Gabriel.
- **Deploy conferido pelo hash do bundle, nao pela data, como a secao 6 manda.**
  O `dist/assets/index-DkF33cln.js` gerado localmente e o mesmo arquivo que o
  `gh-pages` referencia no `index.html`. O site publicado e o build atual.
- **Windsor.ai reconferido pelo oitavo ciclo: so `facebook` e `instagram`.**
  Nenhum conector de Search Console. Com o secret `GSC_SERVICE_ACCOUNT_JSON`
  tambem ausente, a faixa de 8 a 30 da secao 3b segue inauditavel, e nao por
  falta de tentativa: nao ha caminho.
- **Banco de fotos nao e gargalo.** `node carrossel/checar-fotos.mjs` roda sem
  erro e nenhuma foto passou do limite. Sobram 4 livres e duas delas ja tem
  recorte aprovado em `proximos_posts`: `equipe-banner.webp` a 44% e
  `sala-reuniao-tijolo.webp` a 38%. Os dois proximos posts tem capa pronta sem
  pedir foto nova. O ambiente "sala da equipe (banner e neon)" segue sem capa.
- **A pauta de 29/09, reescrever `tendencias-mercado-comercial-b2b`, segue de pe
  e intocada.** Oitavo ciclo. Medido de novo, ele segue o ativo mais fraco do
  blog: 11.095 bytes de HTML cru contra 19.740 a 25.948 dos outros oito, e 12
  links contra 17 a 25. Nao foi queimada de proposito: meia reescrita sem fonte
  reprovaria na rubrica igual e produziria o falso sinal da condicao de escalar
  6, que trata rubrica reprovando duas vezes na mesma pauta como sinal de matar
  a pauta.
- Build integro: `npm ci` e `npm run build` sem erro, 14 rotas da Nexxus
  pre-renderizadas com `canonical`, sitemap com 14 URLs batendo com os slugs
  reais.
- **Nada foi publicado e nada foi meio publicado.** A proibicao da secao 6 de
  adicionar link interno para mover indexacao foi respeitada de novo: a rede
  segue saturada entre 12 e 25 links por post e nenhum link foi adicionado,
  ainda que o prompt agendado peca. Passe 4 nao se aplica, porque nao houve
  mudanca de conteudo nem capa nova para capturar.
- **Condicao de escalar 7 acionada neste ciclo, e e a novidade de decisao.**
  "Custo de execucao fora do combinado." Oito ciclos agendados consumiram
  execucao completa para produzir, cada um, um commit de documentacao e nenhum
  artigo, porque o bloqueio e de configuracao e esta fora do alcance do loop. O
  valor marginal de um nono ciclo identico e proximo de zero: o diagnostico nao
  muda, as armadilhas estao todas registradas e nao ha hipotese a testar.
  **Recomendacao ao Gabriel, que e decisao dele e nao do loop: pausar o
  agendamento de terca e quinta ate liberar o Network access**, e religar junto
  com a liberacao. O trabalho de manutencao que o loop faria sem egresso
  (conferir build, deploy pelo hash, robots, canonical, sitemap, banco de fotos)
  nao justifica dois ciclos por semana enquanto o teto da rubrica for 68. Nada
  foi pausado: mexer no agendamento sem ordem do Gabriel seria decidir por ele.

**Proximo ciclo:** o gargalo nao e pauta, nao e foto, nao e metodo e nao se
resolve dentro do loop. Com `curl`, `WebFetch` e `WebSearch` todos testados e
fechados, nao resta nenhuma hipotese tecnica para um proximo ciclo investigar.
Sao duas mudancas de configuracao, as duas do Gabriel, em ordem de impacto:

1. **Network access, no menu do ambiente, em Edit.** Sem egresso a rubrica tem
   teto de 68 contra corte de 85 e nenhum artigo passa, por aritmetica. Os
   passos estao em https://code.claude.com/docs/en/cloud-environments#network-access
   e bastam os dominios das fontes e dos tres concorrentes sob "Allowed
   domains", com a caixa de gerenciadores de pacote marcada. Com egresso aberto,
   a pauta ja esta escolhida e a capa ja esta recortada: a reescrita de
   `tendencias-mercado-comercial-b2b`.
2. **Secret `GSC_SERVICE_ACCOUNT_JSON` no Actions** (e os dois do Cloudflare).
   E o unico caminho para medir indexacao e a faixa de 8 a 30. Enquanto nao
   existir, o passe 3 mede com instrumento que deu 2, 0, 0, 0 e 0 em catorze
   dias sem o site mudar, e a secao 4b e letra morta.

E, antes das duas, a decisao de **pausar ou nao o agendamento** enquanto nenhuma
delas acontecer, pela condicao de escalar 7 acima.

Nos dois casos, nunca medir indexacao por `site:` sozinho, nunca pela sonda de
titulo sozinha, e nunca por cor de etapa do Actions: so pelo texto do log e pelo
Search Console.

## 7c. Estado anterior (13/10/2026)

- **Setimo ciclo seguido sem artigo novo, e o gargalo nao mudou: egresso de
  rede.** Conferido antes de qualquer outra coisa, como a secao 7 anterior
  mandou. Respondem so os hosts do GitHub: `api.github.com` 200 e
  `raw.githubusercontent.com` 301. Negados no CONNECT com 403, "policy denial"
  registrado pelo proprio proxy: `www.google.com`, `rdstation.com.br`,
  `agendor.com.br`, `meetime.com.br`, `pt.wikipedia.org`, `sebrae.com.br`,
  `duckduckgo.com` e `blog.hubspot.com`. A sonda de 23 hosts do ciclo anterior
  ja fechou a questao da fonte alternativa; este ciclo so reconfirmou o padrao
  numa amostra. A aritmetica da rubrica nao mudou: sem abrir fonte o criterio de
  20 pontos reprova por definicao, sem abrir os 3 primeiros organicos o de 12
  nao se mede. Teto de 68 contra corte de 85. **O loop de conteudo nao foi
  rodado**, como a secao 7 anterior determinou.
- **Achado deste ciclo, e fecha o ultimo buraco que faltava testar: o
  `WebFetch` tambem nao alcanca nada.** Era a saida aparente que nenhum ciclo
  anterior tinha testado, porque parecia plausivel que ele buscasse a pagina
  pelo servidor da Anthropic em vez do container, e nesse caso devolveria o
  texto da pagina, que e exatamente o que o `WebSearch` nao devolve. Nao e o
  caso: `WebFetch` em `https://www.agendor.com.br/blog/terceirizacao-de-vendas/`
  falha com `getaddrinfo ENOTFOUND www.agendor.com.br`, ou seja, ele resolve DNS
  **dentro do container** e morre no mesmo egresso que o `curl`. O erro e de
  resolucao de nome, nao 403 de politica, mas o efeito e identico. Com isso as
  tres unicas vias de leitura de pagina estao testadas e fechadas: `curl` (403
  no CONNECT), `WebFetch` (ENOTFOUND) e `WebSearch` (responde, mas so resumo
  parafraseado, que o criterio de 20 pontos proibe como fonte). **Nao ha mais
  nada a testar dentro do loop**, e nenhum ciclo futuro precisa gastar tempo
  nisso de novo.
- **A cor da etapa do Actions oscilou pela quinta leitura, e os secrets seguem
  ausentes.** O run 13 (`schedule`, 08/10 16:32 UTC) traz "Esperar o Pages",
  "Purgar cache do Cloudflare" e "Reenviar sitemap" como **skipped** e
  "Relatorio de indexacao" como `success`. O texto do log diz "- Relatorio de
  indexacao: **pulado**, falta o secret `GSC_SERVICE_ACCOUNT_JSON`" e o bloco
  `env` imprime `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ZONE_ID` e
  `GSC_SERVICE_ACCOUNT_JSON` vazios. A serie de cores e agora run 6 com duas
  skipped, run 7 com quatro success, run 9 com tres skipped, run 10 com quatro
  success e run 13 com tres skipped, sempre com a mesma configuracao e sempre
  sem purgar nem reenviar nada. **A secao 4b continua nao valendo e os itens a)
  e b) da checklist do Gabriel continuam manuais.**
- **A sonda de indexacao deu zero pela terceira vez seguida, e a serie e 2, 0, 0
  e 0 em doze dias.** O controle de terceiro funcionou nesta execucao:
  `site:agendor.com.br/blog/terceirizacao-de-vendas` devolve aquela pagina
  exata. A sonda de titulo exato mais "Nexxus" segue caindo em outras marcas
  Nexxus (Nexxus Mobile Intelligence, Nexxera). O site segue tecnicamente limpo
  no `gh-pages`: `robots.txt` com `Allow: /` bloqueando so `/obrigado` e `/lp`,
  os 9 posts com `index,follow` e canonical correta, sitemap com 14 URLs batendo
  com os slugs reais, HTML cru de 11.096 a 25.949 bytes com 12 a 25 links.
  **Tres zeros seguidos num site limpo e inalterado continuam sendo a leitura
  estavel de um instrumento quebrado, nao deindexacao.** A condicao de escalar 4
  **nao** esta acionada. Indexacao com valor probatorio so vem do Search
  Console.
- **As 4 paginas de outra marca seguem no ar, e o detalhe esta pior do que o
  ciclo anterior registrou.** O ciclo de 08/10 anotou que `/academy` traz
  `index, follow` explicito. Conferido agora o `<meta name="robots">` das
  quatro, **as quatro estao indexaveis**: `/academy` (80.781 B) por declaracao
  explicita, e `/precificacao` (20.886 B), `/en` (49.802 B) e `/usual`
  (55.954 B) **por omissao**, porque nenhuma delas traz meta robots nenhum e o
  padrao e indexavel. Nenhuma esta no sitemap e nenhuma esta no `Disallow`.
  Para contraste, as paginas internas da Nexxus que nao devem indexar estao
  corretas: `/calculadora` e `/diagnostico` com `noindex`, `/usual/membros`,
  `/usual/comunidade` e `/en/members` com `noindex, nofollow`. Ou seja, o
  projeto sabe marcar noindex onde quer, e essas quatro ficaram de fora.
  Continua pendencia do Gabriel.
- **Deploy conferido pelo hash do bundle, nao pela data, como a secao 6 manda.**
  O `dist/assets/index-DkF33cln.js` gerado localmente e o mesmo arquivo que o
  `gh-pages` referencia no `index.html`. O site publicado e o build atual.
- **Windsor.ai reconferido pelo setimo ciclo: so `facebook` e `instagram`.**
  Nenhum conector de Search Console. Com o secret `GSC_SERVICE_ACCOUNT_JSON`
  tambem ausente, a faixa de 8 a 30 da secao 3b segue inauditavel, e nao por
  falta de tentativa: nao ha caminho.
- **A pauta de 29/09, reescrever `tendencias-mercado-comercial-b2b`, segue de pe
  e intocada.** Setimo ciclo. Medido de novo, ele segue o ativo mais fraco do
  blog: 11.096 bytes de HTML cru contra 19.741 a 25.949 dos outros oito, e 12
  links contra 17 a 25. Nao foi queimada de proposito: meia reescrita sem fonte
  reprovaria na rubrica igual e produziria o falso sinal da condicao de escalar
  6, que trata rubrica reprovando duas vezes na mesma pauta como sinal de matar
  a pauta.
- Build integro: `npm ci` e `npm run build` sem erro, 14 rotas da Nexxus
  pre-renderizadas com `canonical`, sitemap com 14 URLs batendo com os slugs
  reais. As 14 paginas sem canonical no `dist` sao as de outra marca e as
  `noindex` listadas acima, nao regressao.
- **Nada foi publicado e nada foi meio publicado.** A proibicao da secao 6 de
  adicionar link interno para mover indexacao foi respeitada de novo: a rede
  segue saturada entre 12 e 25 links por post e nenhum link foi adicionado,
  ainda que o prompt agendado peca. Passe 4 nao se aplica, porque nao houve
  mudanca de conteudo nem capa nova para capturar.

**Proximo ciclo:** o gargalo nao e pauta, nao e foto, nao e metodo e nao se
resolve dentro do loop. Com `curl`, `WebFetch` e `WebSearch` todos testados e
fechados, nao resta nenhuma hipotese tecnica para um proximo ciclo investigar.
Sao duas mudancas de configuracao, as duas do Gabriel, em ordem de impacto:

1. **Network access, no menu do ambiente, em Edit.** Sem egresso a rubrica tem
   teto de 68 contra corte de 85 e nenhum artigo passa, por aritmetica. Com
   egresso aberto, a pauta ja esta escolhida e a capa ja esta recortada: a
   reescrita de `tendencias-mercado-comercial-b2b`.
2. **Secret `GSC_SERVICE_ACCOUNT_JSON` no Actions** (e os dois do Cloudflare).
   E o unico caminho para medir indexacao e a faixa de 8 a 30. Enquanto nao
   existir, o passe 3 mede com instrumento que deu 2, 0, 0 e 0 em doze dias sem
   o site mudar, e a secao 4b e letra morta.

Nos dois casos, nunca medir indexacao por `site:` sozinho, nunca pela sonda de
titulo sozinha, e nunca por cor de etapa do Actions: so pelo texto do log e pelo
Search Console.

## 7d. Estado anterior (08/10/2026)

- **Sexto ciclo seguido sem artigo novo, e o gargalo nao mudou: egresso de
  rede.** Conferido antes de qualquer outra coisa, como a secao 7 anterior
  mandou. Respondem so os hosts do GitHub: `api.github.com` 200,
  `raw.githubusercontent.com` 301, `github.com` 400, `codeload.github.com` 400,
  `objects.githubusercontent.com` 404. **Este ciclo ampliou a sonda de 9 para 23
  hosts**, de proposito em categorias que poderiam servir de fonte alternativa, e
  todos os 23 falharam no CONNECT: buscadores alternativos (`duckduckgo.com`,
  `www.bing.com`), estatistica oficial brasileira (`ibge.gov.br`, `www.gov.br`,
  `dados.gov.br`), referencia (`en.wikipedia.org`, `statista.com`), imprensa de
  negocios (`exame.com`, `valor.globo.com`), institucional
  (`sebrae.com.br`, `abstartups.com.br`), consultoria (`hbr.org`,
  `www.gartner.com`), concorrentes (`rdstation.com.br`, `meetime.com.br`,
  `agendor.com.br`, `blog.hubspot.com`) e `linkedin.com`. **Isso fecha a questao
  da fonte alternativa: nao existe nenhuma, nem orgao oficial de estatistica.**
  A aritmetica da rubrica nao mudou: sem abrir fonte o critetio de 20 pontos
  reprova por definicao, sem abrir os 3 primeiros organicos o de 12 nao se mede.
  Teto de 68 contra corte de 85. **O loop de conteudo nao foi rodado**, como a
  secao 7 anterior determinou.
- **A busca web funciona e nao substitui o egresso, e vale registrar por que.**
  O `WebSearch` responde normalmente e devolve titulo, URL e um resumo. O resumo
  chega a citar numero com fonte nomeada (por exemplo o Bridge Group, SDR
  Metrics 2024, em 12 a 15 reunioes por mes, citado de segunda mao por um blog
  de fornecedor). **Isso nao serve para publicar.** O resumo e parafrase de um
  modelo sobre um trecho, nao a pagina: nao da para conferir se o numero esta
  ali, em que contexto, nem de que ano. Publicar numero assim e exatamente o que
  o critetio de 20 pontos proibe. E para o critetio de 12, o resumo nao lista o
  que os 3 primeiros organicos cobrem de forma exaustiva, entao superacao de
  SERP continua nao se medindo. Buscar sem poder abrir a pagina nao e fonte.
- **A pauta de 29/09, reescrever `tendencias-mercado-comercial-b2b`, segue de pe
  e intocada.** Sexto ciclo. Medido de novo, ele segue o ativo mais fraco do
  blog: 11.095 bytes de HTML cru contra 19.740 a 25.948 dos outros oito, e 12
  links contra 17 a 25. Nao foi queimada de proposito: meia reescrita sem fonte
  reprovaria na rubrica igual e produziria o falso sinal da condicao de escalar
  6, que trata rubrica reprovando duas vezes na mesma pauta como sinal de matar
  a pauta.
- **A cor da etapa do Actions nao e nem estavel entre execucoes, o que encerra o
  assunto.** O run 9 (`schedule`, 06/10 15:58 UTC) traz as etapas "Esperar o
  Pages", "Purgar cache do Cloudflare" e "Reenviar sitemap" como **skipped** e
  "Relatorio de indexacao" como **success**, onde o run 7 trazia as quatro como
  `success`. Mesma configuracao, mesmos secrets ausentes, cores diferentes. O
  texto do log do run 9 diz "Relatorio de indexacao: **pulado**, falta o secret
  `GSC_SERVICE_ACCOUNT_JSON`" e o bloco `env` imprime `CLOUDFLARE_API_TOKEN`,
  `CLOUDFLARE_ZONE_ID` e `GSC_SERVICE_ACCOUNT_JSON` vazios. **A secao 4b
  continua nao valendo e os itens a) e b) da checklist do Gabriel continuam
  manuais.** A execucao agendada de hoje (quinta, cron 06:17 UTC) ainda nao
  havia aparecido as 10:10 UTC, o mesmo atraso de agendador ja registrado, e
  enquanto os secrets nao existirem isso nao muda nada na pratica.
  **Conferido tambem o run 10, disparado pelo push deste ciclo, como a secao 4b
  manda: a cor voltou a ser verde nas quatro etapas de conteudo**, tres delas
  terminando no mesmo segundo (10:14:14), e o log diz "Sitemap: **pulado**" e
  "Relatorio de indexacao: **pulado**" com os tres secrets vazios. A serie de
  cores e agora run 6 com duas skipped, run 7 com quatro success, run 9 com tres
  skipped e run 10 com quatro success, sempre com a mesma configuracao e sempre
  sem purgar nem reenviar nada. Os itens a) e b) da checklist seguem manuais.
- **A sonda de indexacao deu zero pela segunda vez seguida, e isso endurece a
  conclusao de 06/10 em vez de mudar a leitura.** As 9 consultas de titulo exato
  mais "Nexxus" deram zero, e `site:nexxusagencia.com.br` caiu em outras marcas
  Nexxus (cosmetico, private equity, Nexx Brasil, Nexxera), exatamente como a
  armadilha preve. O controle de terceiro funcionou nesta execucao:
  `site:agendor.com.br/blog/terceirizacao-de-vendas` devolve aquela pagina
  exata. A serie agora e **2 em 01/10, 0 em 06/10, 0 em 08/10, sem um unico
  commit de conteudo no meio**. Conferido item por item no `gh-pages` e nao
  existe causa tecnica: `robots.txt` com `Allow: /` bloqueando so `/obrigado` e
  `/lp`; os 9 posts com `index,follow` e canonical correta; home com canonical e
  `index,follow`; sitemap com 14 URLs batendo com os slugs reais; HTML cru de
  11.095 a 25.948 bytes com 12 a 25 links. **Dois zeros seguidos num site limpo
  e inalterado nao sao deindexacao progressiva, sao a leitura estavel de um
  instrumento quebrado**, e tiram o que restava de tentacao de usar o "2" de
  01/10 como linha de base. A condicao de escalar 4 **nao** esta acionada.
  Indexacao com valor probatorio so vem do Search Console.
- **Banco de fotos nao e gargalo, e vale dizer porque economiza um pedido.**
  `node carrossel/checar-fotos.mjs` roda sem erro e nenhuma foto passou do
  limite. Sobram 4 livres, e duas delas ja tem recorte aprovado em
  `proximos_posts`: `equipe-banner.webp` a 44% e `sala-reuniao-tijolo.webp` a
  38%. Ou seja, **os dois proximos posts tem capa pronta sem pedir foto nova**.
  O ambiente "sala da equipe (banner e neon)" segue sem capa nenhuma. A regra de
  4c continua valendo a partir do terceiro post novo.
- **As 4 paginas de outra marca seguem no ar, e uma delas pede indexacao.**
  `/precificacao` (20.886 B), `/usual` (55.954 B), `/academy` (80.781 B) e `/en`
  (49.802 B) respondem 200 no `gh-pages`. Nenhuma esta no sitemap e nenhuma esta
  no `Disallow` do `robots.txt`, e **`/academy` traz
  `<meta name="robots" content="index, follow">` explicito**. Continua pendencia
  do Gabriel, agora com o detalhe de que uma delas se oferece ao indice no
  dominio da Nexxus.
- Build integro: `npm ci` e `npm run build` sem erro, 14 rotas pre-renderizadas,
  14 com `canonical`, sitemap com 14 URLs batendo com os slugs reais. Arvore de
  trabalho limpa depois do build. Passe 4 nao se aplica, porque nao houve
  mudanca de conteudo nem capa nova para capturar.
- **Nada foi publicado e nada foi meio publicado.** A proibicao da secao 6 de
  adicionar link interno para mover indexacao foi respeitada de novo: a rede
  segue saturada entre 12 e 25 links por post e nenhum link foi adicionado,
  ainda que o prompt agendado peca.

**Proximo ciclo:** o gargalo nao e pauta, nao e foto e nao se resolve dentro do
loop. Sao duas mudancas de configuracao, as duas do Gabriel, em ordem de
impacto:

1. **Network access, no menu do ambiente, em Edit.** Sem egresso a rubrica tem
   teto de 68 contra corte de 85 e nenhum artigo passa, por aritmetica. Com 23
   hosts negados em 6 categorias, incluindo orgao oficial de estatistica, esta
   descartado que exista fonte alternativa a testar dentro do loop. Com egresso
   aberto, a pauta ja esta escolhida e a capa ja esta recortada: a reescrita de
   `tendencias-mercado-comercial-b2b`.
2. **Secret `GSC_SERVICE_ACCOUNT_JSON` no Actions** (e os dois do Cloudflare).
   E o unico caminho para medir indexacao e a faixa de 8 a 30. Enquanto nao
   existir, o passe 3 mede com instrumento que deu 2, 0 e 0 em oito dias sem o
   site mudar, e a secao 4b e letra morta.

Nos dois casos, nunca medir indexacao por `site:` sozinho, nunca pela sonda de
titulo sozinha, e nunca por cor de etapa do Actions: so pelo texto do log e pelo
Search Console.
