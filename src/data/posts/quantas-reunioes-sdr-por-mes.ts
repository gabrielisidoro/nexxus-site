import type { Post } from './types'

export const post: Post = {
  slug: 'quantas-reunioes-sdr-por-mes',
  title: 'Quantas reuniões um SDR deve agendar por mês',
  excerpt:
    'Quantas reuniões um SDR deve agendar por mês? O benchmark fica entre 12 e 20. Veja como chegar ao seu número pela meta de receita, no-show e teto do closer.',
  date: '2026-08-25',
  readingMinutes: 10,
  category: 'Métricas e Metas',
  cover: '/blog/cover-quantas-reunioes-sdr.jpg',
  ogImage: '/blog/og-quantas-reunioes-sdr.jpg',
  keywords: [
    'quantas reuniões um SDR deve agendar por mês',
    'meta de reuniões por SDR',
    'benchmark de pré-vendas no Brasil',
    'taxa de no-show em reuniões comerciais',
    'como calcular a meta de pré-vendas',
    'produtividade de SDR',
  ],
  content: [
    {
      type: 'p',
      text: 'Quantas reuniões um SDR deve agendar por mês? Os números públicos do mercado brasileiro ficam entre 12 e 20: a [Meetime publica a faixa de 15 a 20 reuniões mensais por SDR](https://meetime.com.br/blog/prospeccao/metas-para-sdrs/), variando conforme o segmento, e o [Gestor Faixa Preta trabalha com um piso de 12 a 15 em operações outbound](https://gestorfaixapreta.com.br/metricas-sdr-medir-e-escalar-resultados/). Copiar qualquer um desses números para dentro da sua operação é a forma mais rápida de montar uma meta que ninguém bate.',
    },
    {
      type: 'p',
      text: 'O motivo é que a faixa publicada responde a uma pergunta diferente da sua. Ela diz quanto um SDR médio entrega, não quanto a sua operação precisa nem quanto ela consegue absorver. Três variáveis mudam o número: a receita que a meta precisa sustentar, a fatia da agenda que evapora em no-show antes da reunião acontecer, e o teto de agenda do closer que vai receber tudo isso. Este texto monta a conta com as três na mesa, com um exemplo numérico fechado, e termina no ponto em que aumentar a meta passa a derrubar a receita.',
    },

    {
      type: 'h2',
      text: 'Quantas reuniões um SDR agenda por mês segundo os números públicos',
    },
    {
      type: 'p',
      text: 'As referências brasileiras convergem para uma faixa estreita, mas medem coisas diferentes. Duas delas falam de resultado do SDR, uma fala de esforço e uma fala da capacidade de quem recebe a reunião do outro lado.',
    },
    {
      type: 'table',
      headers: ['Referência pública', 'Número publicado', 'O que o número mede'],
      rows: [
        ['Meetime, metas para SDRs', '15 a 20 por mês', 'Reuniões agendadas por SDR, variando por segmento'],
        ['Gestor Faixa Preta', '12 a 15 por mês', 'Piso mensal em operação outbound'],
        ['Benchmark de pré-venda da Meetime', '30 atividades por dia', 'Esforço de prospecção por SDR, não resultado'],
        ['Sales Drive', '5 a 10 por semana', 'Reuniões qualificadas que um closer absorve'],
      ],
      caption:
        'Faixas publicadas por cada fonte, citadas ao longo do texto com o link para o material original. Repare que a última linha não é uma meta de SDR: é o limite de quem recebe as reuniões, e é ela que costuma faltar na conta.',
    },
    {
      type: 'p',
      text: 'O [benchmark de pré-venda no Brasil compilado a partir dos dados da Meetime](https://botaihub.com.br/vendas/benchmark-pre-venda-brasil-meetime-custo-por-reuniao/) aponta 30 atividades de prospecção por dia por SDR, conversão de lead em oportunidade de 23% no inbound e 17% no outbound. Esse dado é útil para saber se o seu time está trabalhando, não se a meta está certa. Volume de atividade sem conversão é só barulho no CRM.',
    },

    { type: 'h2', text: 'Sua meta está em reunião agendada ou em reunião realizada?' },
    {
      type: 'p',
      text: 'Na maioria das operações, está em agendada, e é aí que a conta quebra. Entre a reunião marcada e a reunião que acontece some perto de um quinto da agenda, então uma meta cravada em agendamento superestima a entrega real em cerca de 20% todo mês.',
    },
    {
      type: 'p',
      text: 'O levantamento da Meetime sobre [no-show em reuniões online no Brasil](https://meetime.com.br/blog/labs/no-show-em-reunioes-online/) aponta média de 19%, com variação relevante por horário: fica em 17% nas reuniões até as 14h, sobe para 20% às 9h e às 17h, e chega a 25% ao meio-dia e 24% às 18h. Trish Bertuzzi, do The Bridge Group, usa 15% a 20% como faixa saudável, e trata qualquer coisa acima de 20% como sinal de problema, não como fatalidade.',
    },
    {
      type: 'p',
      text: 'A consequência prática é aritmética. Se o closer precisa de 20 reuniões acontecendo no mês, a meta do SDR não é 20: com 19% de no-show, é 25 agendamentos. Definir a meta em agendada e cobrar o resultado em realizada é a forma mais comum de o time bater a meta e a receita não vir.',
    },
    {
      type: 'quote',
      text: 'Meta em reunião agendada mede o esforço do SDR. Meta em reunião realizada mede o que chega no funil. Só a segunda paga a folha.',
    },

    { type: 'h2', text: 'Quantas reuniões o seu closer consegue absorver?' },
    {
      type: 'p',
      text: 'Entre 20 e 40 por mês, e esse é o teto que define a meta do SDR. A [Sales Drive trabalha com 5 a 10 reuniões qualificadas por semana por closer](https://www.salesdrive.com.br/pt/blog/o-que-e-sdr-em-vendas-b2b-funcao-metricas-e-como-estruturar-o-time), porque o closer não passa o dia em reunião: ele prepara, negocia, faz proposta e faz follow-up de quem já está no pipeline.',
    },
    {
      type: 'p',
      text: 'Faça a conta na sua operação. Um SDR entregando 16 reuniões realizadas por mês já ocupa de 40% a 80% da agenda de um único closer, dependendo de onde ele esteja nessa faixa. Dois SDRs entregam 32 e passam do limite de um closer no piso da faixa. A mesma referência aponta a proporção de mercado de 1 SDR para cada 2 a 3 closers, o que vai na direção contrária do que a maioria das empresas pequenas monta: um SDR prospectando para um dono que também entrega, também cobra e também vende.',
    },
    {
      type: 'p',
      text: 'Quando a meta do SDR passa do teto do closer, o efeito não é mais receita. É fila. A reunião marcada para 12 dias depois do primeiro contato chega fria, o lead já falou com dois concorrentes, e o no-show sobe justamente porque o intervalo entre agendar e acontecer aumentou. A operação parece mais produtiva no relatório do SDR e converte menos no fim do mês.',
    },

    { type: 'h2', text: 'Como calcular a sua meta de reuniões de trás para frente' },
    {
      type: 'p',
      text: 'A meta certa não sai de benchmark: sai da meta de receita, andando para trás pelo funil. São seis passos, e o exemplo abaixo usa uma operação B2B de ticket médio, com premissas explícitas para você trocar pelas suas.',
    },
    {
      type: 'table',
      headers: ['Passo', 'Conta', 'Resultado no exemplo'],
      rows: [
        ['1. Receita nova no mês', 'Meta definida pela diretoria', 'R$ 120.000'],
        ['2. Vendas necessárias', 'Meta dividida pelo ticket médio de R$ 8.000', '15 vendas'],
        ['3. Reuniões realizadas', 'Vendas divididas pela taxa de fechamento de 20%', '75 reuniões'],
        ['4. Reuniões agendadas', 'Realizadas divididas por 0,81, o complemento do no-show de 19%', '93 reuniões'],
        ['5. SDRs necessários', 'Agendadas divididas por 18 por SDR', '5,2, ou seja 6 pessoas'],
        ['6. Closers necessários', 'Realizadas divididas por 30 por closer', '2,5, ou seja 3 pessoas'],
      ],
      caption:
        'Cenário ilustrativo. Ticket médio, taxa de fechamento de 20% e meta de 18 agendamentos por SDR são premissas do exemplo: substitua pelas suas, tiradas do CRM. Os 19% de no-show vêm do levantamento da Meetime e as 30 reuniões por closer da faixa da Sales Drive. Trocar qualquer premissa muda toda a coluna da direita.',
    },
    {
      type: 'p',
      text: 'Duas leituras saem dessa tabela e nenhuma delas é a meta em si. A primeira: o passo 3 é o mais frágil, porque quase ninguém tem a taxa de fechamento sobre reunião realizada medida de verdade, e um erro de 5 pontos ali muda o número de SDRs em uma pessoa inteira. A segunda: o passo 6 é o que trava a operação. Se você tem 6 SDRs e 1 closer, o gargalo não é prospecção, e contratar o sétimo SDR piora o resultado.',
    },

    { type: 'h2', text: 'Quanto custa cada reunião que o seu SDR agenda' },
    {
      type: 'p',
      text: 'Divida o custo total do SDR pelas reuniões realizadas e você tem o número que decide se a meta faz sentido. A [pesquisa de salários de SDR para 2026 da SDRMAX](https://sdrmax.com.br/blog/quanto-ganha-um-sdr) aponta remuneração total, somando fixo e comissão, de R$ 3.600 a R$ 4.700 no júnior, R$ 5.300 a R$ 7.000 no pleno e R$ 7.500 a R$ 10.500 no sênior.',
    },
    {
      type: 'p',
      text: 'Sobre esse valor incidem os encargos, que dependem do seu regime tributário: no Simples Nacional o custo total fica em torno de 1,3 a 1,4 vez o salário bruto, e no Lucro Presumido entre 1,65 e 1,85 vez, conforme detalhamos no artigo sobre [quanto custa terceirizar o time de vendas](/blog/quanto-custa-terceirizar-time-de-vendas). Um SDR pleno de R$ 5.300 no Lucro Presumido custa, na prática, algo perto de R$ 9.300 por mês.',
    },
    {
      type: 'p',
      text: 'Aplicando a meta de 18 agendamentos com 19% de no-show, sobram cerca de 15 reuniões realizadas, o que coloca o custo em torno de R$ 620 por reunião, antes de ferramentas e de gestão. O método de [dividir o custo mensal total pelas reuniões geradas](https://wesow.com.br/custo-por-reuniao-outbound-b2b/) é o mesmo que qualquer fornecedor de prospecção usa para precificar. A pergunta que ele responde é direta: com ticket médio de R$ 8.000 e fechamento de 20%, cada reunião realizada vale R$ 1.600 de receita esperada contra R$ 620 de custo. Se o seu ticket for R$ 1.500, essa conta inverte de sinal e o problema não é a meta do SDR, é o desenho do canal.',
    },

    { type: 'h2', text: 'A meta do primeiro mês não é a meta' },
    {
      type: 'p',
      text: 'Um SDR novo não entrega a faixa cheia, e cobrar isso no mês 1 custa a contratação. O [tempo de ramp up em vendas fica entre 2 e 4 meses](https://meetime.com.br/blog/gestao-equipe/ramp-up-em-vendas/) na média do mercado brasileiro, contados a partir do momento em que a pessoa senta, não do fim do treinamento.',
    },
    {
      type: 'p',
      text: 'A prática comum é escalonar. Uma régua usada com frequência, descrita entre outros pela [Atendare no material sobre rampagem de vendedores](https://atendare.com/br/blog/rampagem/), é 40% da meta no primeiro mês, 70% no terceiro e 100% até o sexto. Sem escalonamento acontecem duas coisas previsíveis: o SDR enche a agenda com reunião de baixa qualificação para bater número, e o gestor conclui que a contratação foi ruim quando o problema era a régua.',
    },

    { type: 'h2', text: 'Quatro sinais de que a meta subiu demais' },
    {
      type: 'ul',
      items: [
        'A taxa de reunião para oportunidade caiu. O SDR continua batendo a meta, mas o closer passa a recusar mais reuniões. É qualificação sendo sacrificada por volume, e o custo aparece na agenda de quem fecha.',
        'O no-show passou de 20%. Acima dessa marca, a referência do The Bridge Group trata como problema de processo. Costuma ser intervalo grande demais entre o agendamento e a reunião, ou lead que aceitou a reunião só para encerrar a ligação.',
        'A fila do closer cresceu. Se a reunião marcada hoje só acontece na semana que vem, o gargalo mudou de lugar e mais prospecção não resolve.',
        'A base está queimando. O mesmo contato sendo abordado a cada 45 dias por causa da meta destrói a lista que sustentaria os próximos trimestres.',
      ],
    },
    {
      type: 'p',
      text: 'Nenhum desses quatro sinais aparece no relatório de reuniões agendadas, que é justamente o relatório que a maioria das operações olha. Todos aparecem cruzando reunião agendada com reunião aceita pelo closer, que é o cruzamento mais barato de montar em qualquer CRM.',
    },

    { type: 'h2', text: 'Como a Nexxus define a meta de reuniões' },
    {
      type: 'p',
      text: 'Na operação que assumimos, a meta de reuniões é a última coisa que definimos, não a primeira. Antes dela entram duas regras que costumam gerar discussão na reunião de contrato. A primeira: não colocamos número em contrato antes do critério escrito de reunião qualificada, porque meta sem critério é meta de agenda cheia. A segunda: travamos a meta do SDR no teto de agenda do closer do cliente, mesmo quando o cliente pede mais volume, porque a reunião que entra na fila não vira receita e ainda derruba a taxa de comparecimento.',
    },
    {
      type: 'p',
      text: 'Números reais de operação, faixa de investimento e metas contratadas variam por cliente e por ciclo de venda, e não são benchmark de mercado: por isso não os publicamos aqui. O que dá para fixar em texto é o método, e ele começa antes da prospecção, no desenho da arquitetura comercial. Se essa parte ainda não existe na sua empresa, a decisão anterior à meta é outra, e está no artigo sobre [terceirizar ou estruturar o comercial interno](/blog/terceirizar-ou-estruturar-comercial-interno). Se ela já existe e o que falta é execução, a [terceirização da operação comercial](/servicos) resolve exatamente esse pedaço. Vale também olhar como [o mercado comercial B2B mudou a forma de vender](/blog/tendencias-mercado-comercial-b2b), porque parte da queda de conversão que se atribui à meta vem de comportamento de compra, não de esforço do time.',
    },
  ],
  faq: [
    {
      pergunta: 'Quantas reuniões um SDR deve agendar por mês?',
      resposta:
        'As referências públicas brasileiras ficam entre 12 e 20 reuniões por SDR ao mês: a Meetime publica a faixa de 15 a 20 conforme o segmento e o Gestor Faixa Preta trabalha com um piso de 12 a 15 em outbound. Esse número é ponto de partida, não meta. A meta da sua operação sai da receita alvo dividida pelo ticket médio, pela taxa de fechamento e pelo complemento do no-show, e depois é limitada pela agenda disponível do closer que vai receber as reuniões.',
    },
    {
      pergunta: 'Qual é uma taxa de no-show aceitável em reuniões comerciais?',
      resposta:
        'A média brasileira medida pela Meetime é de 19%, com variação por horário: 17% nas reuniões até as 14h, 20% às 9h e às 17h, 25% ao meio-dia e 24% às 18h. A referência do The Bridge Group trata de 15% a 20% como faixa saudável e acima de 20% como sinal de problema de processo, geralmente intervalo longo demais entre o agendamento e a reunião ou qualificação frouxa na hora de marcar.',
    },
    {
      pergunta: 'Quantas reuniões um closer consegue atender por mês?',
      resposta:
        'A faixa de mercado citada pela Sales Drive é de 5 a 10 reuniões qualificadas por semana, o que dá de 20 a 40 por mês. O closer não passa o dia em reunião: ele prepara, negocia, envia proposta e faz follow-up do pipeline aberto. Esse teto é o que define quantos SDRs a operação comporta, e a proporção usual é de 1 SDR para cada 2 a 3 closers.',
    },
    {
      pergunta: 'Quanto tempo leva até um SDR novo bater a meta cheia?',
      resposta:
        'Entre 2 e 4 meses na média do mercado brasileiro, segundo o material da Meetime sobre ramp up em vendas, contados desde a entrada da pessoa. O caminho usual é escalonar a meta, com réguas como 40% no primeiro mês, 70% no terceiro e 100% até o sexto. Cobrar meta cheia no primeiro mês costuma produzir agenda cheia de reunião mal qualificada e uma demissão que o gestor atribui à pessoa quando o problema era a régua.',
    },
    {
      pergunta: 'Devo pagar comissão do SDR por reunião agendada ou realizada?',
      resposta:
        'Por reunião realizada e aceita pelo closer, sempre que o CRM permitir esse registro. Comissão por agendamento paga o esforço e cria incentivo para marcar com quem não vai comparecer, o que aparece direto na taxa de no-show. Comissão por reunião aceita alinha o SDR ao critério de qualificação escrito, que precisa existir antes de qualquer número de meta.',
    },
    {
      pergunta: 'Como calcular quantos SDRs a minha operação precisa?',
      resposta:
        'Divida a meta de receita nova pelo ticket médio para achar as vendas necessárias, divida as vendas pela sua taxa de fechamento sobre reunião realizada para achar as reuniões, divida esse total por 0,81 para compensar um no-show de 19% e chegue às reuniões agendadas. Só então divida pelo número de agendamentos por SDR que você adota. Confira o resultado contra a capacidade dos seus closers: se o número de reuniões passar de 30 a 40 por closer no mês, o gargalo é fechamento e não prospecção.',
    },
  ],
}
