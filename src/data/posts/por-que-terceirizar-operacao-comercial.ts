import type { Post } from './types'

export const post: Post = {
  slug: 'por-que-terceirizar-operacao-comercial',
  title: 'Por que terceirizar a operação comercial (e quando não)',
  excerpt:
    'Terceirizar a operação comercial resolve encargo e rampa, não resolve ticket baixo nem mercado pequeno. Os critérios que desqualificam antes de assinar.',
  date: '2026-05-12',
  updated: '2026-09-15',
  readingMinutes: 10,
  category: 'Terceirização',
  cover: '/blog/cover-terceirizacao.jpg',
  ogImage: '/blog/og-terceirizacao.jpg',
  keywords: [
    'por que terceirizar a operação comercial',
    'quando não terceirizar o comercial',
    'terceirização comercial vale a pena',
    'critérios para terceirizar vendas',
    'custo de SDR interno 2026',
    'ticket mínimo para outbound B2B',
  ],
  content: [
    {
      type: 'p',
      text: 'Um SDR contratado em regime CLT custa à empresa entre 1,65 e 1,85 vez o salário bruto fora do Simples Nacional, e leva de 2 a 4 meses até produzir no ritmo esperado. Esses dois números são a razão pela qual terceirizar a operação comercial entra na pauta do dono. Eles também não bastam para justificar a decisão.',
    },
    {
      type: 'p',
      text: 'A conta do custo interno é pública e qualquer calculadora trabalhista reproduz. A que quase ninguém publica é a inversa: quanto de receita a operação terceirizada precisa gerar para se pagar, e a partir de que ticket médio ela deixa de fechar.',
    },
    { type: 'h2', text: 'Quanto custa manter um SDR interno em 2026?' },
    {
      type: 'p',
      text: 'Entre 1,65 e 1,85 vez o salário bruto para empresas no Lucro Presumido ou no Lucro Real, e entre 1,3 e 1,4 vez no Simples Nacional. A diferença está nos encargos patronais, que fora do Simples somam de 26,8% a 28,8% sobre a folha: 20% de INSS patronal, de 1% a 3% de RAT e cerca de 5,8% de contribuições a terceiros, segundo a [calculadora de custo de funcionário CLT da CalculaBrasil](https://calculabrasil.com/blog/custo-funcionario-clt-2026).',
    },
    {
      type: 'p',
      text: 'No Simples Nacional o INSS patronal já está embutido na alíquota única do regime, o que derruba o multiplicador. O piso vale para todo mundo: nenhum contrato CLT custa menos que o salário mais 27,44%, sendo 8% de FGTS e 19,44% de provisão de 13º, férias e terço constitucional. Um SDR com salário de R$ 3.000 e R$ 500 de benefícios sai, na prática, por algo entre R$ 4.323 e R$ 5.127 por mês, antes de qualquer ferramenta.',
    },
    {
      type: 'p',
      text: 'Depois vem a stack. CRM, ferramenta de cadência, base de dados e telefonia são custo fixo por assento, e o tempo de quem gerencia o time é custo que não aparece em folha nenhuma. A conta completa, linha a linha, com a comparação contra uma squad contratada, está em [quanto custa terceirizar o time de vendas](/blog/quanto-custa-terceirizar-time-de-vendas).',
    },
    { type: 'h2', text: 'Quanto tempo até o time interno produzir?' },
    {
      type: 'p',
      text: 'De 2 a 4 meses para um SDR chegar à produtividade plena, com a média das operações brasileiras em 3,9 meses e 83% das empresas levando até 6 meses, segundo o [levantamento de ramp up em vendas da Meetime](https://meetime.com.br/blog/gestao-equipe/ramp-up-em-vendas/). A curva típica entrega produtividade básica entre 30 e 45 dias e produtividade média entre 60 e 90 dias.',
    },
    {
      type: 'p',
      text: 'Esse prazo não é fixo, é consequência. Sem ICP definido e sem cadência documentada, ele dobra. Com base de empresas pronta no primeiro dia e playbook escrito, cai para 2 a 3 meses. O que encurta rampa não é contratar melhor, é ter processo pronto antes de a pessoa entrar.',
    },
    {
      type: 'p',
      text: 'E a rampa se paga uma vez só se a pessoa ficar. O varejo brasileiro girava cerca de 36% ao ano em estudo de 2023 da Sociedade Brasileira de Varejo e Consumo com a CNDL, contra os 5% a 10% que especialistas tratam como saudável, e repor um profissional custa de 50% a 200% do salário anual dele, conforme o [índice de turnover no Brasil compilado pela Woba](https://blog.woba.com.br/indice-de-turnover-no-brasil/). Cada saída reinicia a contagem de meses.',
    },
    {
      type: 'table',
      headers: ['O que você compra', 'Time interno (CLT)', 'Operação terceirizada'],
      rows: [
        [
          'Custo sobre o salário',
          '1,3 a 1,4x no Simples; 1,65 a 1,85x fora dele',
          'Fee contratado, sem encargo trabalhista',
        ],
        [
          'Tempo até produzir',
          '2 a 4 meses de rampa, média de 3,9 meses',
          'Time já treinado; na Nexxus, setup de até 20 dias',
        ],
        [
          'Risco de saída',
          'A rampa recomeça do zero a cada desligamento',
          'Reposição é obrigação do fornecedor',
        ],
        [
          'Processo e playbook',
          'Precisa existir antes da contratação, ou a rampa dobra',
          'Chega pronto e é adaptado ao seu produto',
        ],
        [
          'Onde o custo se esconde',
          'Gestão, recrutamento e stack não entram na folha',
          'Entram no fee, e é por isso que ele parece alto',
        ],
      ],
      caption:
        'Multiplicadores de encargo conforme a CalculaBrasil (2026) e prazos de rampa conforme a Meetime. O setup de até 20 dias é o prazo publicado pela Nexxus na página de serviços.',
    },
    { type: 'h2', text: 'Quando não terceirizar a operação comercial' },
    {
      type: 'p',
      text: 'Três condições derrubam a conta antes de qualquer discussão de fornecedor. Elas são aritméticas, não são questão de execução, e nenhum fornecedor competente muda isso.',
    },
    {
      type: 'p',
      text: 'A primeira é ticket médio. O outbound B2B ganha tração quando o ticket passa de R$ 5.000 e o ciclo fica entre 30 e 180 dias, e o custo de aquisição por outbound no Brasil costuma cair entre R$ 800 e R$ 4.000, segundo o [guia de outbound B2B da Growth Labs](https://growthlabs.com.br/marketing-digital/outbound-marketing-b2b/). Com ticket de R$ 600, a operação precisa de um volume de vendas que a agenda de um closer não comporta.',
    },
    {
      type: 'p',
      text: 'A régua para conferir é o LTV sobre o CAC. Abaixo de 3 para 1 a aquisição consome o contrato, e as [métricas de vendas B2B compiladas pela Winning Sales](https://winningsales.com.br/blog/metricas-de-vendas-b2b/) tratam 3 para 1 como piso, não como meta. Se o seu LTV não chega lá com um CAC de outbound, o problema é de modelo de receita e prospecção nenhuma resolve.',
    },
    {
      type: 'p',
      text: 'A segunda é o tamanho do mercado endereçável. Prospecção ativa consome lista. Se o seu mercado real é de duzentas contas nominais, uma squad em cadência queima essa base em poucos meses e depois passa a recontatar quem já disse não. Em mercado desse tamanho, a resposta costuma ser trabalho conta a conta com quem já vende, não uma máquina de volume.',
    },
    {
      type: 'p',
      text: 'A terceira é ICP indefinido. Terceirizar prospecção quando a empresa ainda não sabe quem compra transfere para fora uma pergunta que só quem vende consegue responder, e o fornecedor vai testar hipóteses no seu orçamento. Quando o diagnóstico é esse, a comparação honesta está em [terceirizar ou montar time de vendas interno](/blog/terceirizar-ou-estruturar-comercial-interno), onde existe uma terceira saída: nenhum dos dois por enquanto.',
    },
    {
      type: 'table',
      headers: ['Condição', 'Onde está o corte', 'Se você está abaixo do corte'],
      rows: [
        [
          'Ticket médio',
          'A partir de R$ 5.000 por contrato',
          'Rever preço ou canal antes de contratar prospecção',
        ],
        [
          'LTV sobre CAC',
          '3 para 1, no mínimo',
          'O gargalo é margem, não volume de reunião',
        ],
        [
          'Ciclo de venda',
          'Entre 30 e 180 dias',
          'Ciclo curtíssimo pede autoatendimento, não SDR',
        ],
        [
          'Mercado endereçável',
          'Contas suficientes para 12 meses de cadência',
          'Trabalhar conta a conta, sem máquina de volume',
        ],
        [
          'ICP definido',
          'Você sabe quem comprou nas últimas 10 vendas',
          'Definir o ICP primeiro, terceirizar depois',
        ],
      ],
      caption:
        'Faixas de ticket, ciclo e CAC conforme Growth Labs e Winning Sales. As duas últimas linhas são critério de diagnóstico, não benchmark de mercado.',
    },
    { type: 'h2', text: 'Como calcular se a conta fecha no seu caso?' },
    {
      type: 'p',
      text: 'A conta tem cinco passos e roda em uma planilha. O destino é o número de reuniões qualificadas que a operação precisa entregar por mês para se pagar, comparado com o que a sua agenda consegue absorver.',
    },
    {
      type: 'ul',
      items: [
        'Some o fee mensal proposto ao custo interno que continua existindo, como o tempo do closer que vai atender as reuniões.',
        'Divida esse total pela sua margem de contribuição por venda, não pelo ticket. O resultado é quantas vendas por mês o contrato precisa gerar só para empatar.',
        'Divida o número de vendas pela sua taxa de conversão de reunião em venda. Agora você tem quantas reuniões qualificadas precisa receber por mês.',
        'Corrija pelo no-show. A [régua de métricas de prospecção da Meetime](https://meetime.com.br/blog/sales-engagement/metricas-de-prospreccao/) aponta conversão de lead em oportunidade de 17% no outbound e no-show perto de 19%, então o volume agendado precisa ser maior que o volume necessário.',
        'Compare o número final com a capacidade real de agenda de quem vai conduzir as reuniões. Reunião que ninguém tem hora para atender não vira receita, um erro detalhado em [quem fecha a venda quando a prospecção é terceirizada](/blog/quem-fecha-a-venda-prospeccao-terceirizada).',
      ],
    },
    {
      type: 'p',
      text: 'Se o número de reuniões necessário for maior do que a sua agenda comporta, terceirizar não resolve. Vai gerar demanda que morre esperando atendimento, e o contrato será cancelado no terceiro mês por um motivo que não tinha nada a ver com o fornecedor.',
    },
    {
      type: 'quote',
      text: 'Terceirização não cria margem. Ela compra tempo e processo. Onde não há margem, ela apenas acelera a descoberta.',
    },
    { type: 'h2', text: 'O que exigir no contrato antes de assinar' },
    {
      type: 'p',
      text: 'A cláusula que mais decide resultado não é o preço, é a definição de entrega. Contrato que promete reunião agendada sem dizer o que conta como reunião permite encher a agenda com quem não decide e ainda assim bater meta.',
    },
    {
      type: 'ul',
      items: [
        'Critério de aceite escrito: cargo, porte, dor identificada e confirmação de presença. O detalhamento do que torna uma reunião aceitável está em [o que conta como reunião qualificada](/blog/o-que-conta-como-reuniao-qualificada).',
        'Direito de recusa: quantas reuniões o time interno pode devolver por mês, com qual justificativa e em que prazo.',
        'Propriedade do dado: o CRM, as listas e o histórico de contato são seus e saem com você. Sem essa cláusula, trocar de fornecedor significa recomeçar do zero.',
        'Marco de avaliação intermediário, não apenas o prazo final do contrato. O que medir em cada etapa está no [prazo da terceirização comercial, etapa por etapa](/blog/quanto-tempo-terceirizacao-comercial-da-resultado).',
        'Modelo de remuneração declarado. Pagamento por reunião realizada cria incentivo para volume; fee fixo cria incentivo para acomodação. Saber qual distorção você está comprando vale mais do que negociar 10% no preço.',
      ],
    },
    { type: 'h2', text: 'Como a Nexxus trata essa decisão' },
    {
      type: 'p',
      text: 'A ordem do método diz onde está o peso: a arquitetura comercial vem antes das pessoas. O [serviço de terceirização comercial](/servicos) abre com diagnóstico e desenho de ICP, oferta e canal, e só depois monta a squad, configura o CRM e liga a cadência D1 a D12. O setup publicado é de até 20 dias, e a squad inclui Head Comercial e Sales Ops na gestão, não apenas SDR e closer em campo.',
    },
    {
      type: 'p',
      text: 'A consequência é desconfortável e responde ao título: a etapa de arquitetura existe justamente para descobrir, antes de a squad entrar em campo, se ticket e mercado sustentam a operação. Sai mais barato para os dois lados descobrir isso ali do que no terceiro mês. Se a sua terceirização atual já passou desse ponto sem resultado, o roteiro de diagnóstico está em [terceirização comercial não deu resultado](/blog/terceirizacao-comercial-nao-deu-resultado).',
    },
  ],
  faq: [
    {
      pergunta: 'Terceirizar a operação comercial sai mais barato que contratar CLT?',
      resposta:
        'Depende do regime tributário e do que entra na comparação. Um SDR interno custa de 1,3 a 1,4 vez o salário bruto no Simples Nacional e de 1,65 a 1,85 vez fora dele, antes de ferramentas e do tempo de gestão. O fee terceirizado parece maior porque já embute gestão, stack e reposição. A comparação linha a linha está em [quanto custa terceirizar o time de vendas](/blog/quanto-custa-terceirizar-time-de-vendas).',
    },
    {
      pergunta: 'A partir de que ticket médio a terceirização comercial se paga?',
      resposta:
        'O outbound B2B ganha tração a partir de R$ 5.000 de ticket, com ciclo entre 30 e 180 dias, faixa indicada pelo guia de outbound da Growth Labs. Abaixo disso o número de vendas necessário para cobrir o custo costuma exceder a capacidade de agenda do time que atende as reuniões.',
    },
    {
      pergunta: 'Quanto tempo demora até a operação terceirizada dar resultado?',
      resposta:
        'A squad contratada elimina a rampa de contratação, que no time interno leva de 2 a 4 meses segundo a Meetime, mas não elimina o ciclo de venda do seu produto. O prazo realista está aberto em [quanto tempo a terceirização comercial leva para dar resultado](/blog/quanto-tempo-terceirizacao-comercial-da-resultado).',
    },
    {
      pergunta: 'Terceirizar significa perder o controle da operação?',
      resposta:
        'Só se o contrato deixar. Controle aqui é contratual: critério de aceite escrito, propriedade do CRM e das listas, direito de recusa de reunião e marco de avaliação intermediário. Com essas quatro cláusulas você enxerga mais da operação do que a maioria dos gestores enxerga do próprio time interno.',
    },
    {
      pergunta: 'Dá para terceirizar só a prospecção e manter o fechamento dentro de casa?',
      resposta:
        'Sim, e é o desenho mais comum. O ponto de atenção é capacidade de agenda: a prospecção entrega volume de reunião que o closer interno precisa conseguir atender. A divisão de responsabilidade está em [quem fecha a venda quando a prospecção é terceirizada](/blog/quem-fecha-a-venda-prospeccao-terceirizada).',
    },
    {
      pergunta: 'Qual a diferença entre terceirizar o comercial e contratar uma consultoria?',
      resposta:
        'A consultoria desenha o processo e treina, e quem executa continua sendo o seu time. A terceirização coloca gente em campo executando com método próprio. Quando o time já existe e o que falta é processo, a mentoria costuma resolver mais barato; quando não há time, a squad resolve mais rápido.',
    },
  ],
}
