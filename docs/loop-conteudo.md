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

## 5. Condição de escalar

Parar e perguntar ao Gabriel, sem decidir sozinho:

1. **Publicar qualquer número da Nexxus.** Preço, faixa de investimento,
   comissão, faturamento, número real de reuniões por SDR, taxa de no-show,
   nome de cliente. Publicar preço é decisão de posicionamento com efeito
   competitivo, e vira ativo permanente na SERP. *Esta condição já foi
   acionada: o artigo de custo pede a faixa de investimento aberta, que é a
   maior lacuna da SERP do nicho, e ficou de fora aguardando decisão.*
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
- **Capa cortada no card.** O card usa `aspect-[3/2]` com `object-cover`.
  Imagem 16/9 perde as laterais e come o texto gravado. Capa do site sempre em
  3/2 e sempre sem texto.
- **Sitemap divergindo dos slugs reais.** Já aconteceu: as 3 matérias ficaram
  meses entregando 404 e redirecionamento ao Google. Hoje o sitemap é gerado no
  build a partir de `allPosts`, então não pode mais divergir. Não editar
  `public/sitemap.xml` na mão.
- **Meta tags duplicadas.** O `index.html` traz tags estáticas que vêm antes
  das do react-helmet. Por isso o build pré-renderiza o `<head>` por rota.
- **PowerShell corrompendo acento.** `Get-Content` sem `-Encoding UTF8` lê como
  ANSI e destrói os acentos ao regravar. Editar arquivo de código sempre com a
  ferramenta de edição, nunca reescrevendo o arquivo por script.
- **Here-string do PowerShell quebra com aspas na mensagem de commit.** Usar
  `git commit -F arquivo.txt`.

---

## 7. Estado atual (26/07/2026)

- Indexadas no Google: 1 página. Não indexadas: 8. A causa principal (sitemap
  com slug errado) foi corrigida neste ciclo.
- Sitemap: 9 URLs, lido pelo Google em 26/07/2026.
- Próxima pauta pronta: "Quantas reuniões um SDR deve agendar por mês?",
  informacional, para a quinta-feira.
