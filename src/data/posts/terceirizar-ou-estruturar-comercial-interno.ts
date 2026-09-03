import type { Post } from './types'

export const post: Post = {
  slug: 'terceirizar-ou-estruturar-comercial-interno',
  title: 'Terceirizar ou montar time de vendas interno: como decidir',
  excerpt:
    'Terceirizar ou montar time de vendas interno: um diagnóstico com nota de corte, o custo da janela de rampa e a cláusula de saída que quase ninguém exige.',
  date: '2026-05-26',
  updated: '2026-09-03',
  readingMinutes: 8,
  category: 'Estratégia',
  cover: '/blog/cover-terceirizar-ou-estruturar.jpg',
  ogImage: '/blog/og-terceirizar-ou-estruturar.jpg',
  keywords: [
    'terceirizar ou montar time de vendas interno',
    'time de vendas interno ou terceirizado',
    'terceirizar ou contratar vendedor',
    'quando terceirizar o comercial',
    'plano de saída terceirização comercial',
    'internalizar time de vendas',
  ],
  content: [
    {
      type: 'p',
      text: 'Terceirizar ou montar time de vendas interno é uma decisão que a maioria das empresas toma no mês em que o caixa aperta, ou no mês em que sobra. Nos dois casos o critério foi o humor do trimestre, não o momento do negócio. O custo do erro não aparece na assinatura: aparece de seis a nove meses depois, quando o caminho escolhido não entregou e voltar atrás significa jogar fora tudo que já foi investido.',
    },
    {
      type: 'p',
      text: 'Os textos que respondem a essa pergunta param na lista de prós e contras e terminam em "depende". Depende de quê, exatamente, ninguém escreve. Depende de três coisas mensuráveis: quanto tempo cada caminho consome antes de produzir, quanto método já existe escrito dentro da sua empresa, e se o contrato prevê como a terceirização termina.',
    },

    { type: 'h2', text: 'Terceirizar ou montar time de vendas interno: qual dos dois escolher?' },
    {
      type: 'p',
      text: 'Terceirize quando o gargalo é tempo e você precisa de processo rodando em semanas. Monte o time interno quando vender é o motor do negócio e você já tem método escrito, gestor dedicado e caixa para sustentar de quatro a seis meses de rampa sem cobrar meta.',
    },
    {
      type: 'p',
      text: 'Quando os dois conjuntos de condições aparecem ao mesmo tempo, e é o caso mais comum, a resposta não é escolher: é sequenciar. Terceiriza primeiro, com data de saída escrita no contrato, e internaliza depois, com o processo já documentado.',
    },

    { type: 'h2', text: 'O que você compra em cada caminho não é preço, é tempo' },
    {
      type: 'p',
      text: 'A comparação quase sempre começa pelo custo mensal, e é aí que ela erra. Os dois caminhos entregam a mesma coisa no fim, um pipeline previsível. O que muda é quanto tempo passa até a primeira entrega, e quem paga a conta desse intervalo.',
    },
    {
      type: 'p',
      text: 'Rampa é o nome desse intervalo, e é a linha que quase nenhuma planilha inclui. Pela pesquisa Inside Sales Benchmark Brasil, compilada pela [Meetime em sua análise de ramp up em vendas](https://meetime.com.br/blog/gestao-equipe/ramp-up-em-vendas/), o tempo médio de rampa de um vendedor no Brasil é de 3,9 meses, contra 5,3 meses nos Estados Unidos. Na edição de 2022 da mesma pesquisa, que já tem quatro anos e segue sendo a referência pública mais citada do mercado brasileiro, 83% das empresas declararam levar até seis meses para rampar um vendedor.',
    },
    {
      type: 'p',
      text: 'Rampa não é treinamento. É o período em que a empresa paga a folha inteira e recebe uma fração da produtividade. Para um SDR o intervalo costuma ficar entre 60 e 90 dias. Para quem fecha, chega a seis a nove meses. Multiplique esses meses pelo custo mensal do time e você tem a linha que falta na comparação.',
    },
    {
      type: 'table',
      headers: ['Etapa até produzir', 'Time interno', 'Squad terceirizada'],
      rows: [
        ['Recrutamento e seleção', '30 a 60 dias, com o seu tempo dentro', 'Time já contratado'],
        ['Treinamento e onboarding', '2 a 4 semanas com a folha correndo', 'Incluso no fee'],
        ['Até produtividade plena', '3,9 meses na média brasileira', '2 a 6 semanas de ajuste de ICP e discurso'],
        ['Quem paga a janela de rampa', 'Você, integralmente', 'O fornecedor, diluído no contrato'],
        ['Se a pessoa sai no meio', 'Recomeça do zero, por sua conta', 'Do fornecedor, se houver política de reposição'],
        ['Onde fica o conhecimento gerado', 'Na sua empresa', 'No fornecedor, salvo cláusula em contrário'],
      ],
      caption:
        'Prazos de rampa conforme o Inside Sales Benchmark Brasil compilado pela Meetime, somados às faixas usuais de recrutamento em vendas B2B. Os prazos da squad terceirizada variam por fornecedor e por complexidade do ciclo: exija o número por escrito antes de assinar.',
    },

    { type: 'h2', text: 'Em quanto tempo cada caminho entrega a primeira reunião qualificada?' },
    {
      type: 'p',
      text: 'Um time interno montado do zero costuma levar de três a cinco meses até produzir reunião qualificada com consistência, somando seleção, onboarding e rampa. Uma squad terceirizada entrega as primeiras reuniões entre a segunda e a sexta semana, porque o que precisa de ajuste é o ICP e o discurso, não a pessoa.',
    },
    {
      type: 'p',
      text: 'A diferença não é de qualidade, é de ponto de partida. E ela só pesa se o seu negócio não puder esperar um trimestre. Se puder, o argumento de velocidade perde força e o de construir ativo próprio cresce na mesma proporção.',
    },

    { type: 'h2', text: 'O diagnóstico: oito perguntas, uma pontuação, uma nota de corte' },
    {
      type: 'p',
      text: 'Antes da pontuação, um corte binário. Se todas as suas vendas até hoje vieram da rede de indicação ou da mão do fundador, o que existe é relacionamento, não processo, e nenhum dos dois caminhos é a resposta agora. Nesse cenário quem precisa fechar as próximas vendas é o fundador, para descobrir a objeção real e o discurso que funciona.',
    },
    {
      type: 'p',
      text: 'Passando desse corte, responda as oito linhas abaixo com a coluna que descreve a sua empresa hoje, não a que você pretende ser no ano que vem. Não existe resposta neutra de propósito: a decisão também não é neutra.',
    },
    {
      type: 'table',
      headers: ['Critério', '0 ponto', '2 pontos'],
      rows: [
        ['Prazo para o comercial produzir', 'Posso esperar de 4 a 6 meses', 'Preciso de pipeline neste trimestre'],
        ['Método comercial documentado', 'ICP, script e critério de qualificação escritos', 'Está na cabeça do dono ou do melhor vendedor'],
        ['Gestor comercial dedicado', 'Alguém cobra meta e olha indicador toda semana', 'O dono acumula essa função'],
        ['Histórico de contratação em vendas', 'As últimas contratações deram certo', 'Já contratei errado mais de uma vez'],
        ['Caixa para sustentar a rampa', 'Aguento de 4 a 6 meses sem meta batida', 'Preciso que se pague em até 3 meses'],
        ['Papel de vendas no modelo', 'Vender é o motor da empresa', 'O motor é o produto ou a entrega'],
        ['Tempo do dono no comercial', 'Tenho 6 horas por semana para gerir', 'Não tenho e não vou ter'],
        ['Situação do canal', 'O canal principal já funciona, quero escalar', 'Preciso testar um canal ou vertical novo'],
      ],
      caption:
        'A soma orienta a conversa, não substitui o exame do funil real: caixa e método pesam mais do que a média sugere, e um zero em qualquer um dos dois derruba a recomendação de montar interno. Some sempre com os números de hoje, não com os do plano.',
    },
    {
      type: 'p',
      text: 'Some os oito. De 0 a 4 pontos, monte o time interno: você tem prazo, método e gestor, e terceirizar aqui adiciona um intermediário sem resolver nada. De 6 a 10, o caminho é híbrido com data marcada, e é a faixa mais comum em empresas que já vendem mas ainda não industrializaram o processo. De 12 a 16, terceirize: montar interno agora significa contratar sem método, sem gestor e sem caixa para a rampa, que é a descrição exata da contratação que dá errado.',
    },
    {
      type: 'quote',
      text: 'Contratar vendedor sem método não cria uma operação comercial. Cria um custo fixo com esperança embutida.',
    },

    { type: 'h2', text: 'O erro que ninguém escreve: terceirizar sem plano de saída' },
    {
      type: 'p',
      text: 'Esta é a maior lacuna da discussão. Praticamente todo material sobre o tema trata a terceirização como estado permanente ou como fracasso temporário. Ela não é nem uma coisa nem outra quando o contrato diz como termina.',
    },
    {
      type: 'p',
      text: 'Uma empresa que terceiriza por 24 meses sem cláusula de transferência não forma líder comercial, não documenta processo e não acumula base de conhecimento sobre os próprios clientes. No fim do contrato ela está no mesmo ponto do primeiro dia, com dois anos a menos de caixa e com o aprendizado guardado na casa do fornecedor. Nada obriga o contrato a ser assim. Estes seis itens mudam isso:',
    },
    {
      type: 'ul',
      items: [
        'Data ou marco de saída escrito. Pode ser prazo, 18 meses por exemplo, ou gatilho, como o pipeline sustentar dois closers internos. O que não pode é não existir.',
        'Propriedade dos dados. Base de leads, gravações de call e histórico do CRM ficam com você, em formato exportável e sem cobrança adicional na saída.',
        'Playbook como entregável, não como cortesia. Script, matriz de objeções e critério de qualificação documentados em arquivo, atualizados ao longo do contrato.',
        'CRM na sua conta, não na do fornecedor. Se a licença é dele, o histórico sai junto com ele no dia da rescisão.',
        'Transferência assistida. De 30 a 60 dias com o time do fornecedor rodando ao lado de quem você contratou, e não um repasse por e-mail na última semana.',
        'Cláusula de não aliciamento nos dois sentidos, com prazo e valor definidos, para que essa conversa não aconteça no pior momento possível.',
      ],
    },
    {
      type: 'p',
      text: 'Peça os seis na proposta, antes de discutir valor. Um fornecedor que trabalha para se tornar indispensável vai relutar em pelo menos três deles. Essa reação, sozinha, já responde boa parte da sua pergunta.',
    },

    { type: 'h2', text: 'O caminho híbrido, quando ele significa alguma coisa' },
    {
      type: 'p',
      text: 'Híbrido virou palavra de escape: quando não se sabe responder, diz-se que o melhor é um pouco dos dois. Híbrido só significa alguma coisa quando tem ordem e data.',
    },
    {
      type: 'p',
      text: 'Na primeira fase a squad externa assume a prospecção e o dono recupera as horas que gastava cobrando follow-up. Na segunda, a empresa contrata o gestor comercial, não o vendedor, e esse gestor acompanha a operação externa por dentro, com acesso direto ao CRM. Na terceira entram os vendedores internos, que rampam ao lado de um processo que já funciona em vez de rampar no escuro.',
    },
    {
      type: 'p',
      text: 'A inversão está na segunda fase. A maioria contrata o vendedor primeiro e o gestor depois, quando o vendedor já não bateu meta duas vezes. Contratar gestor antes de vendedor é o que muda a taxa de acerto da internalização, porque alguém precisa saber o que cobrar antes de existir de quem cobrar. A conta financeira dos dois lados, com encargos, ferramentas e o efeito do regime tributário, está aberta em [quanto custa terceirizar o time de vendas](/blog/quanto-custa-terceirizar-time-de-vendas). A régua para cobrar o time depois de montado, interno ou externo, está em [quantas reuniões um SDR deve agendar por mês](/blog/quantas-reunioes-sdr-por-mes), e o calendário até a primeira venda, em [em quanto tempo a terceirização comercial dá resultado](/blog/quanto-tempo-terceirizacao-comercial-da-resultado).',
    },

    { type: 'h2', text: 'Turnover: o risco que troca de dono conforme o caminho' },
    {
      type: 'p',
      text: 'Existe um item que a comparação trata como detalhe e que no Brasil é estrutural. Pesquisa da Robert Half divulgada em 2023, portanto com três anos, colocou o Brasil na liderança mundial de rotatividade, com 56%, à frente de França, Bélgica e Reino Unido, conforme [reportagem da Exame sobre a alta rotatividade no mercado de trabalho](https://exame.com/bussola/o-que-pode-estar-por-tras-da-alta-rotatividade-no-mercado-de-trabalho/). Em levantamento mais recente da mesma consultoria, [61% dos profissionais declararam querer trocar de emprego em 2026](https://www.roberthalf.com/br/pt/sobre-robert-half/imprensa/novoemprego26).',
    },
    {
      type: 'p',
      text: 'Vendas piora essa média. A Harvard Business Review estima a rotatividade em times comerciais em cerca de 27% acima da força de trabalho em geral, número compilado pela [Meetime em sua análise de turnover em vendas](https://meetime.com.br/blog/gestao-equipe/turnover/). Quando alguém sai de um time interno, sai levando o relacionamento com os leads, o conhecimento do produto e a rampa que você acabou de pagar. O ciclo recomeça do zero, recrutamento incluído.',
    },
    {
      type: 'p',
      text: 'Na squad terceirizada esse risco é do fornecedor, mas só na prática se o contrato disser em quantos dias e a que custo ele repõe a pessoa. Sem cláusula de reposição com prazo, o risco continua sendo seu, agora com um intermediário no meio do caminho.',
    },

    { type: 'h2', text: 'Quando a resposta certa não é nenhum dos dois' },
    {
      type: 'ul',
      items: [
        'A oferta ainda muda toda semana. Se preço, público e proposta mudam a cada ciclo, nem time interno nem squad externa conseguem fixar discurso, porque não há o que fixar. Estabilize a oferta antes de escolher quem executa.',
        'O gargalo está na entrega, não no topo do funil. Colocar mais volume sobre uma entrega que atrasa acelera o churn e queima reputação mais rápido do que constrói receita.',
        'O ticket não sustenta prospecção ativa, seja ela interna ou externa. Nesse caso o desenho costuma ser inbound, autoatendimento ou canal, e essa escolha vem das [tendências do mercado comercial B2B](/blog/tendencias-mercado-comercial-b2b), não do orçamento. Os outros cenários em que a conta não fecha estão detalhados no [texto sobre o custo da terceirização](/blog/quanto-custa-terceirizar-time-de-vendas).',
      ],
    },

    { type: 'h2', text: 'Como a Nexxus conduz essa decisão' },
    {
      type: 'p',
      text: 'A Nexxus opera as duas pontas, e é por isso que o diagnóstico daqui consegue terminar em "não terceirize". [As frentes da operação comercial](/servicos) são três: assumir a operação, montar a arquitetura para o seu time executar, ou treinar e acompanhar o time que já existe. Quando o fornecedor vende apenas uma delas, o diagnóstico dele tem uma resposta só, e ela é sempre a mesma.',
    },
    {
      type: 'p',
      text: 'Isso muda o que sai do diagnóstico. Quando a pontuação fica na faixa baixa, a recomendação é montar interno, e o que cabe propor é arquitetura comercial, não squad. Vale para nós e vale para qualquer fornecedor que você chamar: peça a ele os seis itens da cláusula de saída antes de discutir valor, e repare em quantos ele concede. Os sintomas que costumam levar uma operação até essa mesa estão descritos em [por que terceirizar a operação comercial](/blog/por-que-terceirizar-operacao-comercial).',
    },
  ],
  faq: [
    {
      pergunta: 'Terceirizar ou montar time de vendas interno: qual sai mais barato?',
      resposta:
        'Não existe resposta única, porque o custo do time interno depende do regime tributário da empresa: no Simples Nacional os encargos ficam bem abaixo da média que se lê por aí e o argumento de custo a favor da terceirização perde força, enquanto no Lucro Presumido a diferença cresce. Além da folha, a comparação honesta soma ferramentas, recrutamento, a janela de rampa e o tempo de quem gerencia. A conta aberta dos dois lados está em [quanto custa terceirizar o time de vendas](/blog/quanto-custa-terceirizar-time-de-vendas).',
    },
    {
      pergunta: 'Quanto tempo leva até um time de vendas interno começar a produzir?',
      resposta:
        'Contando seleção, onboarding e rampa, de três a cinco meses até haver reunião qualificada com consistência. O tempo médio de rampa de um vendedor no Brasil é de 3,9 meses segundo o Inside Sales Benchmark Brasil compilado pela Meetime. Para SDR o intervalo é mais curto, de 60 a 90 dias. Para quem fecha, vai de seis a nove meses. Esse período é pago integralmente pela empresa e rende uma fração da produtividade esperada.',
    },
    {
      pergunta: 'Dá para terceirizar agora e internalizar o time depois?',
      resposta:
        'Sim, e é o caminho mais comum para quem precisa de pipeline no curto prazo sem abrir mão de construir time próprio. Duas condições fazem a diferença: data ou marco de saída escrito no contrato desde a assinatura, e a ordem de contratação invertida em relação ao hábito, ou seja, o gestor comercial entra antes dos vendedores. Sem essas duas, a internalização costuma ser adiada indefinidamente.',
    },
    {
      pergunta: 'O que precisa estar no contrato para eu não ficar dependente do fornecedor?',
      resposta:
        'Seis itens: data ou gatilho de saída, propriedade dos dados com exportação sem custo, playbook entregue em arquivo, CRM na sua conta e não na do fornecedor, transferência assistida de 30 a 60 dias e cláusula de não aliciamento nos dois sentidos. Peça os seis na proposta antes de discutir valor. A relutância em concedê-los diz mais sobre o fornecedor do que qualquer apresentação.',
    },
    {
      pergunta: 'Terceirizar o comercial significa perder o controle da operação?',
      resposta:
        'Não, desde que o CRM esteja na sua conta, você tenha acesso direto aos dados e exista reunião de cadência semanal com indicadores. Operações terceirizadas bem estruturadas costumam dar mais visibilidade do que times internos improvisados, porque a medição faz parte do serviço contratado. O que muda é o seu papel: você sai da execução e passa a decidir com número na mão.',
    },
    {
      pergunta: 'Minha empresa é pequena. Faz sentido terceirizar o comercial?',
      resposta:
        'O corte não é o tamanho da empresa: é se a oferta já foi validada fora da rede de indicação e se o ticket médio sustenta prospecção ativa. Empresa pequena com oferta validada tem mais a ganhar com terceirização do que empresa média sem processo, porque a primeira compra velocidade e a segunda só terceiriza a própria desorganização.',
    },
  ],
}
