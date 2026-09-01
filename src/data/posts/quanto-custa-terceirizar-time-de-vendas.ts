import type { Post } from './types'

export const post: Post = {
  slug: 'quanto-custa-terceirizar-time-de-vendas',
  title: 'Quanto custa terceirizar o time de vendas em 2026',
  excerpt:
    'Ninguém no setor publica número. Aqui está a conta aberta dos dois lados: o custo real de um time comercial CLT em 2026, o que muda conforme o regime tributário, os três modelos de cobrança da terceirização e os cenários em que terceirizar não compensa.',
  date: '2026-07-26',
  updated: '2026-08-25',
  readingMinutes: 9,
  category: 'Custos e Investimento',
  cover: '/blog/cover-quanto-custa-terceirizar.jpg',
  ogImage: '/blog/og-quanto-custa-terceirizar.jpg',
  keywords: [
    'quanto custa terceirizar o time de vendas',
    'terceirização comercial preço',
    'quanto custa um SDR terceirizado',
    'custo de montar um time comercial interno',
    'quanto custa um funcionário CLT vendedor',
    'modelos de cobrança terceirização comercial',
  ],
  content: [
    {
      type: 'p',
      text: 'Pesquise "quanto custa terceirizar o time de vendas" e leia os primeiros resultados. Você vai encontrar a mesma estrutura repetida: uma explicação do que é terceirização comercial, uma lista de benefícios, três parágrafos sobre modelos de cobrança e, no lugar do número, a frase "os valores dependem do volume, do ICP e dos canais, fale com um consultor".',
    },
    {
      type: 'p',
      text: 'É uma resposta conveniente para quem vende e inútil para quem compra. Este texto faz o contrário: abre a conta dos dois lados, com as premissas na mesa, e termina dizendo em que situações terceirizar é a escolha errada. Se você está com a planilha aberta decidindo entre contratar mais um vendedor ou mudar de modelo, é para você.',
    },

    { type: 'h2', text: 'A conta que ninguém publica: quanto custa de verdade um vendedor CLT' },
    {
      type: 'p',
      text: 'O primeiro erro de quase toda planilha comercial é usar o salário como custo. O salário é a menor parte. Levantamentos de calculadoras trabalhistas brasileiras atualizadas para 2026, como as da [Contaja](https://contaja.com.br/blog/quanto-custa-um-funcionario-para-empresa/), da [CalculaBrasil](https://calculabrasil.com/blog/custo-funcionario-clt-2026) e do [Cálculo Jurídico](https://calculojuridico.com.br/calculadora-custo-funcionario-clt/), convergem no mesmo intervalo: um funcionário CLT custa para a empresa entre 1,65 e 1,85 vez o salário bruto. Um vendedor com salário de R$ 3.000 custa, na prática, de R$ 4.950 a R$ 5.550 por mês.',
    },
    {
      type: 'p',
      text: 'Esse multiplicador se decompõe assim: FGTS de 8%, provisão de férias de 11,11%, provisão de 13º de 8,33% e provisão de multa rescisória de 4%. Sobre isso, empresas no Lucro Presumido e no Lucro Real ainda pagam INSS patronal de 20% sobre a folha, RAT em torno de 2% e Sistema S de aproximadamente 5,8%.',
    },
    {
      type: 'h2',
      text: 'O detalhe que muda tudo e quase ninguém menciona: o seu regime tributário',
    },
    {
      type: 'p',
      text: 'Aqui está a informação que falta na maioria dos artigos sobre o tema. O multiplicador de 1,65 a 1,85 vale para Lucro Presumido e Lucro Real. Empresas no Simples Nacional são desoneradas do INSS patronal de 20% e do Sistema S, o que derruba os encargos para a casa de 1,3 a 1,4 vez o salário bruto.',
    },
    {
      type: 'p',
      text: 'Na prática, isso significa que a mesma decisão tem contas diferentes em duas empresas com o mesmo faturamento. Se você está no Simples, o time interno é significativamente mais barato do que a média que se lê por aí, e o argumento de custo puro a favor da terceirização perde força. Se você está no Lucro Presumido, ele pesa muito mais. Antes de comparar qualquer proposta, descubra em qual dos dois cenários você está.',
    },
    {
      type: 'quote',
      text: 'Quem compara terceirização com salário está comparando a coisa errada. A comparação honesta é com o custo total da folha, mais ferramentas, mais recrutamento, mais o tempo de quem gerencia.',
    },

    { type: 'h2', text: 'Os três modelos de cobrança e o que cada um esconde' },
    {
      type: 'p',
      text: 'O mercado brasileiro de terceirização comercial trabalha basicamente com três formatos. Cada um tem um incentivo embutido, e entender esse incentivo é mais importante do que comparar o valor de fachada.',
    },
    {
      type: 'ul',
      items: [
        'Fee mensal fixo: você paga um valor por mês pela operação, independentemente do resultado. É o mais previsível para o seu fluxo de caixa e o mais comum em contratos de squad completa. O risco a observar: sem indicadores contratualizados, nada obriga o fornecedor a melhorar.',
        'Pagamento por reunião realizada: você paga por reunião agendada e cumprida. Parece seguro, mas cria um incentivo perverso, o de encher a agenda com reunião de baixa qualificação. Só funciona com critério de qualificação escrito em contrato e regra clara de no-show.',
        'Fixo mais variável por resultado: um fee menor que sustenta a operação, somado a uma comissão por venda fechada ou por meta atingida. É o modelo que mais alinha os dois lados, e o que exige a maior maturidade de ambos, porque depende de atribuição confiável no CRM.',
      ],
    },
    {
      type: 'p',
      text: 'Um alerta prático: valor por reunião parece o mais barato na primeira planilha e costuma ser o mais caro no fim do trimestre, porque o custo real não é a reunião, é a hora do seu closer sentado com quem nunca ia comprar.',
    },

    { type: 'h2', text: 'Time interno de 3 pessoas contra squad terceirizada: a comparação linha a linha' },
    {
      type: 'p',
      text: 'Vamos montar um cenário concreto. Uma operação comercial mínima que funcione precisa de três funções: alguém que prospecta (SDR), alguém que fecha (Closer) e alguém que gerencia, cobra meta e olha indicador. As premissas abaixo usam salários de mercado para uma operação B2B de ticket médio, sem comissão, e empresa no Lucro Presumido.',
    },
    {
      type: 'table',
      headers: ['Linha de custo', 'Simples Nacional', 'Lucro Presumido'],
      rows: [
        ['SDR (salário bruto R$ 3.000)', 'R$ 4.050', 'R$ 5.250'],
        ['Closer (salário bruto R$ 4.500)', 'R$ 6.075', 'R$ 7.875'],
        ['Coordenação comercial (bruto R$ 7.000)', 'R$ 9.450', 'R$ 12.250'],
        ['CRM, discadora e prospecção (3 licenças)', 'R$ 1.200', 'R$ 1.200'],
        ['Recrutamento amortizado em 12 meses', 'R$ 1.000', 'R$ 1.000'],
        ['Total mensal, sem comissão', 'R$ 21.775', 'R$ 27.575'],
      ],
      caption:
        'Cenário ilustrativo com multiplicador de 1,35 no Simples e 1,75 no Lucro Presumido, conforme as faixas publicadas por Contaja e CalculaBrasil para 2026. Não inclui comissão, benefícios acima do obrigatório, espaço físico nem o custo do tempo do dono. Substitua pelos seus salários reais antes de decidir.',
    },
    {
      type: 'p',
      text: 'Repare em dois pontos. Primeiro: a diferença entre os dois regimes é de quase R$ 6.000 por mês na mesma operação, o que confirma por que a pergunta sobre regime tributário vem antes da pergunta sobre preço. Segundo: a maior linha isolada não é o vendedor, é a coordenação. É exatamente a função que a maioria das empresas pequenas tenta economizar deixando o dono acumular, e é aí que a operação quebra.',
    },

    { type: 'h2', text: 'Os custos que não entram na planilha' },
    {
      type: 'p',
      text: 'Os números acima são os visíveis. Há três que raramente aparecem e que costumam decidir a conta.',
    },
    {
      type: 'ul',
      items: [
        'Rampagem: um vendedor novo não produz no primeiro mês. Entre seleção, treinamento e maturação, leva de 2 a 4 meses até a produtividade plena. Esses meses são pagos integralmente e rendem uma fração do esperado.',
        'Turnover: quando alguém sai, vai embora com o conhecimento do produto, o relacionamento com os leads e o investimento de rampagem. E o ciclo recomeça do zero, incluindo o custo de recrutamento outra vez.',
        'O tempo do dono: se você gasta 8 horas por semana cobrando follow-up, revisando pipeline e recrutando, isso tem um preço. Calcule quanto vale a sua hora e multiplique por 32 horas por mês. Para a maioria dos donos, essa linha sozinha é maior que o salário do SDR.',
      ],
    },
    {
      type: 'p',
      text: 'Esses três itens são o assunto de um texto inteiro à parte, se você quiser se aprofundar: [os custos ocultos de montar a estrutura comercial própria](/blog/por-que-terceirizar-operacao-comercial).',
    },

    { type: 'h2', text: 'A partir de que ponto a conta fecha' },
    {
      type: 'p',
      text: 'Terceirização comercial não é para todo mundo, e vale dizer isso com todas as letras. As referências recorrentes do setor apontam que o modelo funciona principalmente para empresas B2B com ticket médio acima de R$ 5.000, vendendo para média ou alta gestão, com ciclo de venda que comporta uma cadência de vários contatos.',
    },
    {
      type: 'p',
      text: 'A razão é aritmética. Se o seu ticket médio é R$ 800 e a operação terceirizada custa R$ 15.000 por mês, você precisa de quase 19 vendas novas por mês só para empatar, antes de qualquer margem. Com ticket de R$ 8.000, bastam 2. Ticket baixo e volume alto pedem outro desenho, geralmente inbound, autoatendimento ou canal, não squad de prospecção ativa. Vale entender antes o que mudou no comportamento de compra, porque parte dessa escolha de canal vem das [tendências do mercado comercial B2B](/blog/tendencias-mercado-comercial-b2b), não do seu orçamento.',
    },
    {
      type: 'p',
      text: 'Se a dúvida não é preço e sim modelo, a comparação entre montar em casa e contratar fora está detalhada em [terceirizar ou estruturar o comercial interno](/blog/terceirizar-ou-estruturar-comercial-interno).',
    },
    {
      type: 'p',
      text: 'Falta um dado que o preço mensal sozinho não mostra: por quantos meses você paga antes da primeira receita entrar. O custo do contrato começa no dia 1, a primeira reunião cai entre a semana 3 e a 6, e a primeira venda só aparece depois de somar o seu ciclo de vendas a essa data. A linha do tempo completa, com o critério de corte de cada mês, está em [em quanto tempo a terceirização comercial dá resultado](/blog/quanto-tempo-terceirizacao-comercial-da-resultado).',
    },

    { type: 'h2', text: 'Quatro cenários em que terceirizar não compensa' },
    {
      type: 'ul',
      items: [
        'Você ainda não vendeu para ninguém. Se o produto nunca foi vendido, não existe processo para terceirizar. Antes de contratar qualquer squad, o fundador precisa fechar as primeiras vendas na mão para descobrir a objeção real e o discurso que funciona.',
        'Ticket médio baixo com ciclo curto. A conta acima não fecha. Nesse cenário, investir em aquisição digital e em automação costuma render mais que prospecção humana.',
        'Você quer terceirizar para não ter que olhar. Operação terceirizada bem feita reduz o seu trabalho operacional, não elimina a sua participação. Se ninguém do seu lado entra na reunião semanal e olha indicador, o resultado cai, independentemente de quem executa.',
        'O gargalo não é comercial. Se a empresa não entrega no prazo, se o produto tem churn alto ou se a precificação está errada, colocar mais volume no topo do funil só acelera o problema. Vender mais em cima de uma entrega ruim destrói reputação mais rápido do que constrói receita.',
      ],
    },

    { type: 'h2', text: 'O que precisa estar dentro do valor, seja qual for o fornecedor' },
    {
      type: 'p',
      text: 'Comparar propostas só faz sentido quando o escopo é o mesmo. Uma proposta de R$ 8.000 e outra de R$ 15.000 podem ser a mesma coisa ou coisas completamente diferentes. Antes de olhar o número, verifique se estão inclusos:',
    },
    {
      type: 'ul',
      items: [
        'Desenho da arquitetura comercial antes da execução: ICP, oferta, canal e funil documentados, não improvisados na primeira semana.',
        'CRM configurado, com funil, campos obrigatórios e automações, e a definição de quem paga a licença.',
        'Playbook escrito, com script, matriz de objeções e critério de qualificação. Sem isso, você não tem processo, tem pessoas.',
        'Gestão inclusa: reunião de cadência semanal, relatório de indicadores e um responsável nomeado do lado do fornecedor.',
        'Política de reposição: o que acontece, em quanto tempo e a que custo, se alguém do time sair.',
        'Propriedade dos dados: a base de leads, as gravações e o histórico do CRM ficam com você ao fim do contrato.',
      ],
    },

    { type: 'h2', text: 'Sete perguntas para fazer antes de assinar' },
    {
      type: 'ul',
      items: [
        'Qual é o critério escrito de reunião qualificada, e o que acontece quando uma reunião não atende a esse critério? Antes de aceitar qualquer meta, compare com o que o mercado entrega em [quantas reuniões um SDR deve agendar por mês](/blog/quantas-reunioes-sdr-por-mes).',
        'Quem exatamente vai trabalhar na minha conta, e essa pessoa atende quantos clientes ao mesmo tempo?',
        'Em quanto tempo a operação está no ar, e o que precisa de mim para esse prazo valer?',
        'Quais indicadores eu recebo, com que frequência, e eu tenho acesso direto ao CRM?',
        'Se em 90 dias o resultado não vier, o que muda no plano? Existe algo contratualizado nesse sentido?',
        'A licença das ferramentas está inclusa ou é cobrada à parte?',
        'Ao fim do contrato, o que fica comigo: a base, as gravações, o playbook?',
      ],
    },
    {
      type: 'p',
      text: 'Um bom fornecedor responde às sete sem hesitar e por escrito. Se alguma resposta for evasiva, o problema não é o preço.',
    },

    { type: 'h2', text: 'Como a Nexxus trabalha' },
    {
      type: 'p',
      text: 'Na Nexxus, [terceirização comercial](/servicos) significa assumir a operação com método, dados e governança, não alugar um vendedor. Antes de qualquer pessoa entrar em campo, desenhamos a arquitetura comercial do seu negócio: ICP, oferta, canal e funil. Depois montamos a squad com os papéis certos, configuramos as ferramentas e colocamos a cadência para rodar, com reunião semanal e acompanhamento contínuo.',
    },
    {
      type: 'p',
      text: 'O investimento varia conforme o escopo, o tamanho da squad e a complexidade do ciclo de venda, e é isso que o diagnóstico serve para dimensionar. A diferença é que, no diagnóstico, você sai com a conta feita mesmo que a resposta seja não terceirizar. Se depois de ler este texto você concluiu que o seu caso está em um dos quatro cenários em que não compensa, esse já foi o resultado útil.',
    },
  ],
  faq: [
    {
      pergunta: 'Quanto custa terceirizar o time de vendas por mês?',
      resposta:
        'O valor depende do tamanho da squad, dos canais de prospecção e da complexidade do ciclo de venda, e o mercado brasileiro trabalha com três modelos: fee mensal fixo, pagamento por reunião realizada e fixo mais variável por resultado. A comparação útil não é entre propostas, é entre a proposta e o custo total do time interno equivalente, que em 2026 fica entre 1,3 e 1,4 vez o salário bruto no Simples Nacional e entre 1,65 e 1,85 vez no Lucro Presumido, somando ferramentas, recrutamento e o tempo de gestão.',
    },
    {
      pergunta: 'É mais barato terceirizar ou contratar um vendedor CLT?',
      resposta:
        'Depende do regime tributário e do ticket médio. Empresas no Simples Nacional têm encargos bem menores, o que reduz a vantagem de custo da terceirização. Empresas no Lucro Presumido pagam INSS patronal de 20% e Sistema S sobre a folha, o que amplia a diferença. Além do custo direto, é preciso somar rampagem de 2 a 4 meses, risco de turnover e o tempo do dono na gestão, que costumam ser maiores que a folha do SDR.',
    },
    {
      pergunta: 'A partir de que faturamento vale a pena terceirizar o comercial?',
      resposta:
        'O corte mais confiável não é faturamento, é ticket médio. As referências do setor apontam que o modelo funciona melhor em vendas B2B com ticket acima de R$ 5.000 para média ou alta gestão. Com ticket baixo e ciclo curto, a conta raramente fecha, porque o número de vendas necessário só para cobrir o custo da operação fica alto demais.',
    },
    {
      pergunta: 'Quantas reuniões um SDR entrega por mês?',
      resposta:
        'As referências públicas brasileiras ficam entre 12 e 20 reuniões qualificadas por SDR por mês, variando conforme canal, ICP e maturidade do processo. Esse número isolado diz pouco, porque a meta útil sai da meta de receita e é limitada pela agenda do closer que recebe as reuniões. A conta completa, com no-show e custo por reunião, está em [quantas reuniões um SDR deve agendar por mês](/blog/quantas-reunioes-sdr-por-mes).',
    },
    {
      pergunta: 'Terceirizar o comercial significa perder o controle da operação?',
      resposta:
        'Não, desde que o contrato preveja acesso direto ao CRM, relatório de indicadores e reunião de cadência semanal. Na prática, operações terceirizadas bem estruturadas dão mais visibilidade do que a maioria dos times internos, porque a medição é parte do serviço. O que muda é o seu papel: você sai do operacional e passa a decidir com dados na mão.',
    },
  ],
}
