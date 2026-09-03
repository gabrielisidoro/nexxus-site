import type { Post } from './types'

export const post: Post = {
  slug: 'o-que-conta-como-reuniao-qualificada',
  title: 'O que conta como reunião qualificada em prospecção B2B',
  excerpt:
    'O que conta como reunião qualificada em prospecção B2B? Sem critério de aceite escrito, você e o fornecedor contam números diferentes. Veja os seis critérios.',
  date: '2026-09-03',
  readingMinutes: 9,
  category: 'Contrato e SLA',
  cover: '/blog/cover-reuniao-qualificada.jpg',
  ogImage: '/blog/og-reuniao-qualificada.jpg',
  keywords: [
    'o que conta como reunião qualificada',
    'reunião qualificada em prospecção B2B',
    'critério de aceite de reunião',
    'SLA entre pré-vendas e vendas',
    'motivo de recusa de reunião',
    'pagamento por reunião agendada',
  ],
  content: [
    {
      type: 'p',
      text: 'O que conta como reunião qualificada em prospecção B2B é a reunião que aconteceu com a pessoa certa e que quem fecha aceitou como oportunidade real, com o registro no CRM para provar. Fora dessa definição existem três contagens diferentes rodando ao mesmo tempo: a agenda que o fornecedor marcou, a agenda que efetivamente aconteceu e a agenda que virou pipeline. Cada uma dá um número, e a distância entre a primeira e a última costuma ser de mais da metade.',
    },
    {
      type: 'p',
      text: 'É por isso que a reunião de resultado do mês 2 vira discussão de planilha. O relatório do fornecedor mostra 18 reuniões, o closer diz que teve 7 conversas que valeram a hora, e nenhum dos dois está mentindo: eles estão contando coisas diferentes porque o contrato não disse qual conta. Este texto entrega o critério de aceite escrito, com os seis itens que cabem em cláusula, a lista fechada de motivos de recusa e a conta que mostra quanto da agenda evapora antes de virar oportunidade.',
    },

    { type: 'h2', text: 'O que conta como reunião qualificada em prospecção B2B?' },
    {
      type: 'p',
      text: 'Conta a reunião realizada com uma empresa dentro do perfil combinado, com alguém que decide ou que tem acesso direto a quem decide, com o problema confirmado durante a conversa e com registro no CRM no mesmo dia. Reunião marcada não conta, reunião com quem só coleta orçamento não conta, e reunião recusada por quem fecha, com motivo previsto no contrato, também não conta.',
    },
    {
      type: 'p',
      text: 'A definição parece óbvia até o momento em que alguém precisa aplicá-la sobre um caso concreto. O gerente de compras aceitou a conversa e pediu proposta: conta? A empresa está no setor certo mas tem um terço do porte combinado: conta? A reunião durou onze minutos porque o contato entrou de carro: conta? Sem uma régua escrita, cada um desses casos vira negociação, e quem paga por reunião entregue está negociando o próprio custo unitário toda semana.',
    },
    {
      type: 'quote',
      text: 'Critério de aceite não existe para punir o fornecedor. Existe para que os dois lados olhem o mesmo número na reunião de resultado e discutam o que fazer, não quanto foi entregue.',
    },

    { type: 'h2', text: 'Por que a sua contagem e a do fornecedor nunca batem' },
    {
      type: 'p',
      text: 'Porque existem três eventos distintos e o setor usa a mesma palavra para os três. Separá-los resolve boa parte do atrito, e a escolha de qual deles vira a unidade de cobrança é a decisão mais cara do contrato.',
    },
    {
      type: 'table',
      headers: [
        'O que está sendo contado',
        'Quem registra',
        'O que some antes do próximo estágio',
        'Quem prefere esse número',
      ],
      rows: [
        [
          'Reunião agendada',
          'O SDR, no momento em que o contato aceita o convite',
          'O no-show, que fica em torno de 19% em reuniões online no Brasil',
          'O fornecedor, porque depende só do trabalho dele',
        ],
        [
          'Reunião realizada',
          'A agenda, com confirmação de que os dois lados entraram',
          'A recusa de quem fecha, que costuma tirar perto de metade das reuniões',
          'Ninguém, e é justamente o número que mais aparece em relatório',
        ],
        [
          'Reunião aceita como oportunidade',
          'O closer, dentro do CRM, com motivo registrado',
          'Nada. É o último estágio antes de virar pipeline com valor',
          'O cliente, porque é o único que prevê receita',
        ],
      ],
      caption:
        'A taxa de no-show usada aqui é a média de 19% medida pela Meetime em reuniões online no Brasil. A ordem de grandeza da recusa pelo closer vem dos benchmarks de sales development compilados pela Gradient Works, que apontam mediana de 47% de reuniões convertidas em oportunidade aceita e tratam 50% como alvo saudável.',
    },
    {
      type: 'p',
      text: 'A confusão tem um efeito prático que passa despercebido: contrato que paga por reunião agendada transfere o custo do no-show inteiro para o cliente, e contrato que paga por oportunidade aceita transfere para o fornecedor um risco que ele não controla, porque a aceitação depende do critério e da disciplina de quem fecha. Os três modelos de cobrança e o que cada um faz com esse risco estão detalhados no artigo sobre [quanto custa terceirizar o time de vendas](/blog/quanto-custa-terceirizar-time-de-vendas). A escolha correta na maioria dos contratos é cobrar por reunião realizada com critério de aceite, que é o meio termo em que cada lado responde pelo que controla.',
    },

    { type: 'h2', text: 'Quantas reuniões sobram no fim da régua' },
    {
      type: 'p',
      text: 'A conta abaixo parte de 20 reuniões agendadas no mês e aplica as duas perdas na ordem em que elas acontecem. As premissas estão nomeadas na legenda para você trocar pelas suas, e o exercício vale mesmo com números diferentes: o que importa é que existem duas perdas, não uma.',
    },
    {
      type: 'table',
      headers: ['Etapa', 'Conta', 'Resultado', 'O que a perda indica'],
      rows: [
        [
          'Agendadas no mês',
          'Ponto de partida do relatório do fornecedor',
          '20 reuniões',
          'Mede volume de prospecção, não qualidade',
        ],
        [
          'Menos no-show',
          '20 menos 19%',
          '16 reuniões realizadas',
          'No-show alto indica intervalo longo entre marcar e acontecer, ou confirmação fraca',
        ],
        [
          'Menos recusa de quem fecha',
          '16 vezes 47% de aceite',
          '8 oportunidades aceitas',
          'Recusa alta indica perfil de cliente ideal errado, não SDR ruim',
        ],
        [
          'Custo por oportunidade real',
          'Valor do contrato dividido por 8, não por 20',
          '2,5 vezes o custo aparente',
          'É o número que decide se o canal fecha a conta',
        ],
      ],
      caption:
        'Cenário ilustrativo, não promessa. Premissas: no-show de 19% conforme a Meetime e aceite de 47% conforme a mediana dos benchmarks de sales development da Gradient Works. Troque os dois pelos seus assim que tiver três meses de histórico no CRM.',
    },
    {
      type: 'p',
      text: 'A linha de baixo é a que muda decisão. Quem divide o valor do contrato por 20 acha que está pagando um preço e está pagando duas vezes e meia esse valor por oportunidade que de fato entra no funil. Isso não significa que o contrato está ruim: significa que a comparação com o custo de fazer a mesma coisa internamente precisa usar o mesmo denominador, e essa comparação está montada no artigo sobre [terceirizar ou montar time de vendas interno](/blog/terceirizar-ou-estruturar-comercial-interno). O caminho inverso, sair da meta de receita e chegar ao volume de reuniões necessário, está no artigo sobre [quantas reuniões um SDR deve agendar por mês](/blog/quantas-reunioes-sdr-por-mes).',
    },

    { type: 'h2', text: 'Os seis critérios que cabem em contrato' },
    {
      type: 'p',
      text: 'A régua precisa ser verificável por um terceiro que não estava na conversa. Critério que depende de percepção vira discussão, e discussão semanal sobre o que já aconteceu consome mais tempo da liderança do que a operação inteira.',
    },
    {
      type: 'table',
      headers: ['Critério', 'Como verificar', 'Onde fica a prova'],
      rows: [
        [
          '1. Empresa dentro do perfil',
          'Setor, porte e região conferidos contra a lista de corte acordada no setup',
          'Campos preenchidos no cadastro da conta',
        ],
        [
          '2. Interlocutor com poder',
          'Cargo com autoridade de decisão ou acesso declarado a quem decide',
          'Cargo registrado no contato, não no corpo da nota',
        ],
        [
          '3. Problema confirmado',
          'O contato reconheceu, na conversa, uma dor que o seu produto resolve',
          'Nota de qualificação com a frase do próprio contato',
        ],
        [
          '4. Reunião de fato realizada',
          'Os dois lados entraram e a conversa passou do tempo mínimo combinado',
          'Registro da sala ou da agenda com horário de início e fim',
        ],
        [
          '5. Registro no mesmo dia',
          'Reunião lançada no CRM até o fim do dia útil, com as notas de qualificação',
          'Data de criação do registro, que não se reescreve',
        ],
        [
          '6. Aceite ou recusa em 48 horas',
          'Quem fecha marca aceito ou recusado, e a recusa exige motivo da lista fechada',
          'Campo de aceite com carimbo de data e motivo estruturado',
        ],
      ],
      caption:
        'Os critérios 1 a 3 são de qualificação e dependem do fornecedor. O 4 e o 5 são de evidência. O 6 é do cliente, e é o único que trava a operação inteira quando ninguém cumpre.',
    },
    {
      type: 'p',
      text: 'O critério 2 é o que mais gera disputa, e vale explicitar por que ele não pode ser lido como "só conta se falar com o dono". A [pesquisa da Gartner sobre a jornada de compra B2B](https://www.gartner.com/en/sales/insights/b2b-buying-journey) mostra grupos de compra que vão de cinco a dezesseis pessoas em decisões complexas, e aponta que o comprador passa cerca de 17% do tempo total da compra em reuniões com fornecedores. Numa compra decidida por comitê, exigir o decisor final na primeira conversa elimina reuniões legítimas com quem monta a recomendação interna. Por isso o critério aceita autoridade ou acesso direto declarado, e não apenas autoridade.',
    },

    { type: 'h2', text: 'Motivo de recusa: a lista fechada que evita a briga' },
    {
      type: 'p',
      text: 'Recusa sem motivo estruturado destrói o dado que resolveria o problema no mês seguinte. Com lista fechada, três meses de recusas mostram exatamente onde a operação está falhando, e o motivo mais frequente aponta para o responsável pelo ajuste.',
    },
    {
      type: 'ul',
      items: [
        'Fora do perfil: a empresa não bate setor, porte ou região. O ajuste é na lista, e a reunião é reposta pelo fornecedor.',
        'Sem autoridade nem acesso: o contato não decide e não conduz a decisão. O ajuste é no roteiro de qualificação, e a reunião é reposta.',
        'Sem problema: o contato aceitou a conversa por educação ou curiosidade. Não conta, e quando o motivo se repete a causa costuma estar na abordagem, não na lista.',
        'Timing declarado: existe fit e existe problema, mas a decisão está travada por orçamento ou por projeto em andamento. Essa reunião conta e volta para a cadência com data.',
        'Duplicidade: a conta já estava em negociação ativa ou já veio por outro canal. Não conta, e o ajuste é na higienização da base contra o CRM.',
        'No-show: o contato não apareceu. Não conta como realizada, e a regra de reagendamento precisa estar escrita antes do primeiro caso.',
      ],
    },
    {
      type: 'p',
      text: 'Repare que só um dos seis motivos mantém a reunião contada, o timing declarado, porque nele o fornecedor entregou exatamente o que foi contratado e a decisão travou do lado do comprador. Essa separação é o coração da cláusula, e é ela que impede a recusa de virar instrumento de renegociação de preço no fim do mês. A estrutura de aceite e recusa vem do vocabulário de pré-vendas que já existe no mercado: o [conceito de Sales Accepted Lead explicado pela Ploomes](https://blog.ploomes.com/sal/) descreve exatamente esse passo em que vendas aceita ou devolve o que a pré-venda entregou, e a [definição de MQL e SQL da RD Station](https://www.rdstation.com/blog/vendas/mql/) organiza os estágios anteriores. Aplicar isso a um contrato com fornecedor externo é a parte que quase ninguém escreve.',
    },

    { type: 'h2', text: 'Como escrever a cláusula sem criar burocracia' },
    {
      type: 'p',
      text: 'Uma cláusula de aceite que exige formulário de dez campos morre no segundo mês. Quatro regras dão sustentação sem criar trabalho novo, e cabem em meia página de contrato.',
    },
    {
      type: 'ul',
      items: [
        'Prazo com aceite tácito. Quem fecha tem 48 horas para recusar; passou disso, a reunião conta. Sem isso, a recusa vira arma de fim de mês e o fornecedor não consegue prever nada.',
        'Reposição, não desconto. Reunião recusada por motivo válido é reposta no ciclo seguinte, em vez de virar abatimento na fatura. Desconto transforma qualidade em desconto de preço e tira o incentivo de corrigir a causa.',
        'Teto de recusa que aciona revisão. Se a recusa passar de um limite acordado por dois meses seguidos, a revisão do perfil de cliente ideal é obrigatória e conjunta. Recusa alta e persistente quase nunca é preguiça do SDR: é lista errada, e a lista foi aprovada pelos dois.',
        'Perfil de cliente ideal versionado e datado. O critério de aceite aponta para a versão vigente do perfil, não para a memória da reunião de kickoff. Perfil que muda sem versão nova é o caminho mais curto para uma discussão sem saída.',
      ],
    },
    {
      type: 'p',
      text: 'O prazo de 48 horas é o item que mais protege as duas partes e o mais ignorado. Reunião julgada três semanas depois é julgada por resultado, não por qualidade: se o negócio não avançou, o closer lembra da conversa como fraca, mesmo que ela tenha cumprido os seis critérios no dia. A régua serve para separar prospecção de conversão, que são dois problemas com donos diferentes.',
    },

    { type: 'h2', text: 'Os erros que fazem a régua trabalhar contra você' },
    {
      type: 'p',
      text: 'Critério mal escrito é pior que critério nenhum, porque dá aparência de objetividade a uma discussão que continua subjetiva. Estes são os cinco que mais aparecem.',
    },
    {
      type: 'ul',
      items: [
        'Critério com adjetivo. "Lead engajado", "conversa produtiva" e "real interesse" não são verificáveis por quem não estava na sala. Troque cada adjetivo por um campo do CRM.',
        'Aceite sem prazo. Sem janela definida, a taxa de aceite do mês só fecha quando alguém precisa de argumento, e o número deixa de servir para gestão.',
        'Penalidade financeira por recusa. Transforma a conversa de qualidade em negociação de fatura, e o fornecedor passa a defender cada reunião em vez de corrigir a lista.',
        'Perfil de cliente ideal escrito como setor. "Indústria de médio porte em São Paulo" descreve dezenas de milhares de empresas. Sem critério de corte, a taxa de recusa sobe e a culpa cai no lugar errado.',
        'Régua aplicada antes da operação estabilizar. Nas primeiras semanas a lista e o roteiro ainda estão em ajuste, e o volume só fica previsível depois que a cadência roda inteira, como está detalhado no artigo sobre [em quanto tempo a terceirização comercial dá resultado](/blog/quanto-tempo-terceirizacao-comercial-da-resultado).',
      ],
    },
    {
      type: 'p',
      text: 'Vale um contraponto ao próprio critério: régua apertada demais derruba o volume e esconde oportunidade legítima. Quando o mercado é pequeno e o ticket é alto, o custo de recusar uma conversa que poderia ter virado negócio é maior que o custo de aceitar algumas conversas fracas. A régua é uma ferramenta de calibragem, não um filtro moral, e o parâmetro certo depende do tamanho do mercado endereçável e da agenda de quem fecha.',
    },

    { type: 'h2', text: 'Como a Nexxus escreve o critério de aceite' },
    {
      type: 'p',
      text: 'Escrevemos os seis critérios no contrato antes do primeiro toque, com o perfil de cliente ideal anexado e versionado, porque a única forma de discutir entrega no mês 2 é ter combinado a régua no mês 0. O campo de aceite fica no CRM do cliente, não em planilha nossa: relatório de fornecedor que mede a própria entrega é o que produz a discussão que a régua deveria evitar.',
    },
    {
      type: 'p',
      text: 'A segunda regra é que recusa fora da lista fechada não é aceita por nenhum dos dois lados, incluindo nós. Se o motivo não estiver na lista, ele vira pauta da revisão mensal e a lista muda por escrito, com data. Números de operação por cliente, metas contratadas e faixa de investimento variam caso a caso e não são benchmark de mercado, então não publicamos aqui. O desenho da operação que assumimos, com os papéis de SDR, hunter e closer separados, está descrito na [página de serviços de estruturação e terceirização comercial](/servicos).',
    },
    {
      type: 'p',
      text: 'A referência externa que usamos para calibrar o alvo de aceite é a base pública de sales development: o [relatório de métricas de SDR do The Bridge Group](https://www.bridgegroupinc.com/research/2025-sdr-models-metrics-report-the-bridge-group), construído sobre mais de 350 empresas B2B, trata a conversão de reunião em oportunidade aceita como o indicador que prevê pipeline, acima de qualquer métrica de atividade. Os dados brasileiros de conversão de funil, com 17% de lead para oportunidade em outbound e 31% em inbound, vêm do [Inside Sales Benchmark Brasil da Meetime](https://meetime.com.br/blog/podcast/destaques-do-inside-sales-benchmark-brasil-2022/), cuja edição citada é de 2022 e serve como ordem de grandeza, não como precisão. O dado de no-show de 19% vem do [levantamento da Meetime sobre reuniões online](https://meetime.com.br/blog/labs/no-show-em-reunioes-online/), e a mediana de aceite está nos [benchmarks de sales development da Gradient Works](https://www.gradient.works/blog/benchmarks-for-metrics-that-matter-to-sales-development).',
    },
  ],
  faq: [
    {
      pergunta: 'O que conta como reunião qualificada em prospecção B2B?',
      resposta:
        'Conta a reunião realizada com uma empresa dentro do perfil de cliente ideal acordado, com alguém que decide ou que tem acesso direto a quem decide, com o problema confirmado durante a conversa e registrada no CRM no mesmo dia. Reunião apenas agendada não conta, porque o no-show fica em torno de 19% no Brasil segundo a Meetime, e reunião recusada por quem fecha com motivo previsto na lista do contrato também não conta.',
    },
    {
      pergunta: 'Qual a diferença entre reunião agendada, realizada e aceita?',
      resposta:
        'São três eventos com três números diferentes. Agendada é o convite aceito pelo contato e depende só do fornecedor. Realizada é a que de fato aconteceu, depois de descontado o no-show. Aceita é a que quem fecha reconheceu como oportunidade e lançou no funil. Partindo de 20 agendadas, com no-show de 19% e aceite de 47%, sobram cerca de 8 oportunidades reais, o que muda o custo por oportunidade em duas vezes e meia.',
    },
    {
      pergunta: 'Quem decide se a reunião foi qualificada, o fornecedor ou o cliente?',
      resposta:
        'Quem fecha decide, dentro de um prazo curto e usando uma lista fechada de motivos de recusa definida em contrato pelos dois lados. Sem prazo, a recusa vira instrumento de renegociação no fim do mês. Sem lista fechada, a recusa não gera dado e o mesmo erro se repete no mês seguinte. O padrão que funciona é aceite tácito em 48 horas: passou o prazo sem recusa registrada, a reunião conta.',
    },
    {
      pergunta: 'Qual taxa de recusa é aceitável em uma operação terceirizada?',
      resposta:
        'Os benchmarks públicos de sales development apontam mediana de 47% de reuniões convertidas em oportunidade aceita, com 50% tratado como alvo saudável, o que significa que recusar perto de metade das reuniões é o normal do mercado, não sinal de fornecedor ruim. O que exige ação é a tendência: recusa subindo por dois meses seguidos indica perfil de cliente ideal desatualizado ou lista mal segmentada, e a revisão é conjunta.',
    },
    {
      pergunta: 'Vale a pena pagar por reunião agendada?',
      resposta:
        'Pagar por reunião agendada joga o custo integral do no-show para o cliente e cria incentivo para encher a agenda com quem aceita conversar, e não com quem compra. Pagar só por oportunidade aceita joga para o fornecedor um risco que ele não controla, porque a aceitação depende da disciplina de quem fecha. O meio termo que sustenta contrato longo é pagar por reunião realizada com critério de aceite escrito e reposição das recusadas.',
    },
    {
      pergunta: 'Como escrever o critério de aceite sem travar a operação?',
      resposta:
        'Use quatro regras curtas: prazo de 48 horas com aceite tácito, reposição no ciclo seguinte em vez de desconto na fatura, teto de recusa que obriga revisão conjunta do perfil quando ultrapassado por dois meses, e perfil de cliente ideal anexado ao contrato com versão e data. Todo critério precisa apontar para um campo verificável do CRM. Critério com adjetivo, do tipo lead engajado, não sobrevive à primeira discussão.',
    },
  ],
}
