import type { Post } from './types'

export const post: Post = {
  slug: 'quem-fecha-a-venda-prospeccao-terceirizada',
  title: 'Quem fecha a venda quando a prospecção é terceirizada',
  excerpt:
    'Quem fecha a venda quando a prospecção é terceirizada é quase sempre alguém do seu time. Veja a conta de quantas reuniões o seu lado absorve por mês.',
  date: '2026-09-10',
  readingMinutes: 10,
  category: 'Estrutura do time',
  cover: '/blog/cover-quem-fecha-a-venda.jpg',
  ogImage: '/blog/og-quem-fecha-a-venda.jpg',
  keywords: [
    'quem fecha a venda quando a prospecção é terceirizada',
    'prospecção terceirizada precisa de closer interno',
    'SDR terceirizado e closer interno',
    'capacidade de agenda do closer',
    'handoff entre pré-vendas e vendas',
    'terceirizar o fechamento da venda',
  ],
  content: [
    {
      type: 'p',
      text: 'Quem fecha a venda quando a prospecção é terceirizada é, na maioria dos contratos do mercado brasileiro, alguém da sua empresa. O fornecedor entrega reunião na agenda e para ali: o que acontece dentro da reunião, a proposta, a negociação e a assinatura continuam do seu lado. Isso inverte a pergunta que costuma guiar a decisão de contratar, porque o número que limita o resultado raramente é quantas reuniões o fornecedor consegue gerar.',
    },
    {
      type: 'p',
      text: 'O limite real é quantas reuniões o seu lado consegue absorver e converter no mês. É um número finito, dá para calcular antes de assinar, e quase nenhuma proposta comercial do setor calcula. Este texto monta essa conta com premissas explícitas, mostra o que quebra na passagem do fornecedor para quem fecha e compara os três desenhos de operação com a falha típica de cada um.',
    },

    { type: 'h2', text: 'Quem fecha a venda quando a prospecção é terceirizada?' },
    {
      type: 'p',
      text: 'Fecha a venda o time comercial do contratante, no arranjo mais comum, em que o fornecedor assume apenas a prospecção e a qualificação. Existe um segundo arranjo em que o fornecedor também fecha, e ele muda o preço, o risco e o que você precisa ter em casa.',
    },
    {
      type: 'p',
      text: 'Os três arranjos que aparecem em contrato têm consequências diferentes para a sua estrutura, e confundir um com o outro é o que produz a briga do mês 2.',
    },
    {
      type: 'ul',
      items: [
        'Prospecção terceirizada com fechamento interno. O fornecedor entrega reunião qualificada e a venda é conduzida por quem já está na sua folha. É o desenho que exige menos do fornecedor e mais de você.',
        'Squad completo terceirizado. O fornecedor prospecta, conduz a reunião e negocia até a proposta. Você continua decidindo preço, condição comercial e assinatura, porque essas três raramente saem da empresa.',
        'Híbrido por porte de conta. O fornecedor fecha o que é padronizado e as contas maiores sobem para o seu time. Funciona quando o critério de corte está escrito, e vira confusão quando não está.',
      ],
    },

    { type: 'h2', text: 'Por que o gargalo quase nunca é o número de reuniões' },
    {
      type: 'p',
      text: 'Porque reunião parada na agenda não vira receita sozinha. Uma compilação de benchmarks do funil B2B brasileiro publicada pela [Spot Marketing, que reúne números do Inside Sales Benchmark Brasil da Meetime](https://spotmkt.com.br/blog/funil-de-vendas-b2b-benchmarks-brasil), coloca a conversão de reunião realizada em cliente entre 31% e 39%.',
    },
    {
      type: 'p',
      text: 'Leia essa faixa junto com a sua estrutura e o problema aparece. Se a cada dez reuniões realizadas três viram cliente, dobrar o volume contratado só produz receita se quem fecha tiver agenda para receber o dobro com a mesma qualidade de condução. Quando não tem, a taxa cai antes do volume subir, e o resultado do contrato piora justamente no mês em que o fornecedor entregou mais.',
    },
    {
      type: 'quote',
      text: 'Comprar mais reunião do que o seu time consegue conduzir não acelera a receita. Acelera o desgaste da base, que é o ativo mais caro de recuperar.',
    },

    { type: 'h2', text: 'A conta de quantas reuniões o seu lado absorve por mês' },
    {
      type: 'p',
      text: 'A conta parte da agenda de quem fecha, não da meta de receita. Some as horas comerciais disponíveis, desconte o tempo que já está comprometido com oportunidades abertas e rotina interna, divida pelo custo de agenda de uma oportunidade nova e corrija pelo [no-show de 19% que a Meetime mediu em reuniões online no Brasil](https://meetime.com.br/blog/labs/no-show-em-reunioes-online/). As premissas abaixo são de um closer em operação B2B de ticket médio e estão nomeadas para você trocar pelas suas.',
    },
    {
      type: 'table',
      headers: ['Etapa da conta', 'Premissa usada', 'Resultado'],
      rows: [
        [
          'Agenda comercial disponível',
          '6 horas por dia útil, 21 dias úteis no mês',
          '126 horas por mês',
        ],
        [
          'Parcela livre para reunião nova',
          'Metade do tempo já está com negociação em aberto, rotina interna e cliente atual',
          '63 horas por mês',
        ],
        [
          'Custo de agenda de uma oportunidade',
          '1 hora de reunião, 30 minutos de preparo, 1 hora de proposta, 1 hora de follow up',
          '3,5 horas',
        ],
        [
          'Reuniões novas que cabem por mês',
          '63 horas divididas por 3,5 horas',
          '18 realizadas',
        ],
        [
          'Reuniões que precisam ser agendadas',
          '18 realizadas corrigidas pelo no-show de 19% medido pela Meetime',
          '22 agendadas',
        ],
      ],
      caption:
        'Cenário ilustrativo para um closer, não promessa contratual. As premissas de agenda e de tempo por oportunidade são hipóteses para você substituir pelas suas; o único número externo é o no-show de 19% medido pela Meetime. Trocar a linha 2 de 50% para 70% muda o resultado final de 22 para 31 reuniões agendadas.',
    },
    {
      type: 'p',
      text: 'Duas leituras saem daí. A primeira: um closer sozinho sustenta algo perto de 22 reuniões agendadas por mês, então contratar prospecção que entregue 40 sem contratar a segunda pessoa é comprar 18 reuniões que ninguém vai conduzir direito. A segunda: a linha que mais move o resultado é a segunda, e ela não depende do fornecedor, depende de quanto da agenda do seu time já está ocupada.',
    },
    {
      type: 'p',
      text: 'O número de saída dessa conta é o que deve entrar na negociação com o fornecedor, e ele conversa direto com o volume que uma pessoa de pré-vendas produz, detalhado no artigo sobre [quantas reuniões um SDR deve agendar por mês](/blog/quantas-reunioes-sdr-por-mes). Se a conta de absorção der 22 e um SDR entrega perto disso, você está contratando uma pessoa, não um time, e a proposta precisa refletir isso. A relação entre as duas pontas aparece também nos [benchmarks de sales development do The Bridge Group](https://blog.bridgegroupinc.com/sales-development-metrics), que apontam algo próximo de um profissional de pré-vendas para cada 2,3 vendedores no mercado americano.',
    },

    { type: 'h2', text: 'O que acontece quando o volume passa da capacidade' },
    {
      type: 'p',
      text: 'A operação não trava de uma vez, ela degrada por partes, e cada parte tem um sintoma que aparece no CRM antes de aparecer na receita.',
    },
    {
      type: 'ul',
      items: [
        'O intervalo entre marcar e realizar cresce. Quando a agenda de quem fecha só abre daqui a três semanas, a reunião esfria e o no-show sobe, o que derruba a taxa de comparecimento que a conta acima assume.',
        'A preparação some primeiro. É a etapa mais fácil de cortar e a que mais afeta a conversão, porque reunião sem pesquisa prévia vira apresentação genérica de produto.',
        'A proposta atrasa. O tempo entre reunião e proposta enviada é onde o ciclo de vendas cresce sem que ninguém perceba, e o atraso costuma ser cobrado do fornecedor de prospecção, que não tem controle sobre ele.',
        'O critério de aceite afrouxa. Com agenda sobrando o closer recusa reunião fora do perfil; com agenda lotada ele para de recusar e passa a não comparecer, o que destrói o dado que serviria para corrigir a lista.',
        'A base queima. Conta abordada, atendida sem preparo e nunca retomada não volta a atender em seis meses, e o custo disso não aparece em nenhuma linha do contrato.',
      ],
    },
    {
      type: 'p',
      text: 'Quando esses sintomas aparecem juntos, a leitura mais comum é que o fornecedor entregou reunião ruim. Às vezes é isso mesmo, e a forma de separar uma coisa da outra está no artigo sobre [terceirização comercial que não deu resultado](/blog/terceirizacao-comercial-nao-deu-resultado), que percorre os sintomas na ordem em que eles distinguem falha de execução de falha de desenho.',
    },

    { type: 'h2', text: 'O que precisa passar do fornecedor para quem fecha' },
    {
      type: 'p',
      text: 'A passagem de bastão é onde a maior parte da conversão se perde, e ela se perde por falta de registro, não por falta de talento. Quem recebe a reunião precisa chegar sabendo cinco coisas, e todas elas cabem em campos de CRM.',
    },
    {
      type: 'ul',
      items: [
        'Por que essa conta entrou na lista. O critério de segmentação que fez a empresa ser abordada, porque ele é a primeira hipótese de valor da conversa.',
        'O que a pessoa disse que dói. A frase do prospect, registrada como ele falou, não traduzida para o vocabulário do seu material de vendas.',
        'Quem é quem na decisão. Cargo de quem aceitou a reunião, se ele decide ou influencia, e quem mais precisa estar na segunda conversa.',
        'O que já foi prometido. Toda expectativa criada na abordagem, inclusive a que o fornecedor criou por conta própria e que você vai precisar sustentar.',
        'O motivo de recusa, quando houver. Reunião recusada sem motivo registrado é dado perdido, e é o único insumo que corrige a lista do mês seguinte.',
      ],
    },
    {
      type: 'p',
      text: 'Esses cinco campos só funcionam se existir um critério escrito do que a sua empresa aceita como reunião válida, com consequência contratual quando o critério não é atendido. O desenho desse critério, com os motivos de recusa e o que fazer com a reunião recusada, está no artigo sobre [o que conta como reunião qualificada](/blog/o-que-conta-como-reuniao-qualificada).',
    },

    { type: 'h2', text: 'Três desenhos de operação e quem responde por cada etapa' },
    {
      type: 'p',
      text: 'A escolha entre os desenhos não é sobre qual é melhor, é sobre qual falha você prefere administrar. Cada linha da tabela tem uma exigência que costuma ser descoberta depois da assinatura.',
    },
    {
      type: 'table',
      headers: [
        'Desenho',
        'Quem prospecta',
        'Quem fecha',
        'O que você precisa ter',
        'Falha típica',
      ],
      rows: [
        [
          'Prospecção terceirizada, fechamento interno',
          'Fornecedor',
          'Seu time',
          'Pelo menos uma pessoa com agenda livre e autonomia para negociar',
          'Agenda lotada, reunião esfria e o no-show sobe',
        ],
        [
          'Squad completo terceirizado',
          'Fornecedor',
          'Fornecedor até a proposta',
          'Alguém seu decidindo preço e condição comercial em 48 horas',
          'Falta de profundidade no produto trava a segunda conversa',
        ],
        [
          'Híbrido por porte de conta',
          'Fornecedor',
          'Fornecedor no padrão, seu time nas contas grandes',
          'Critério de corte escrito por porte, receita ou complexidade',
          'Critério vago manda a conta grande para o fluxo errado',
        ],
        [
          'Tudo interno',
          'Seu time',
          'Seu time',
          'Tempo de recrutar e treinar antes de existir a primeira reunião',
          'Closer prospectando, que é a hora mais cara da empresa na tarefa mais barata',
        ],
      ],
      caption:
        'A coluna que decide na prática é a quarta. Nenhum dos três primeiros desenhos funciona sem o item dela, e é ele que costuma faltar quando a operação é avaliada no mês 3.',
    },
    {
      type: 'p',
      text: 'A última linha existe na tabela por um motivo específico: ela é a referência de custo das outras três. A comparação completa entre montar a estrutura em casa e contratar pronta, com o que cada caminho cobra em tempo e em dinheiro, está no artigo sobre [terceirizar ou estruturar o comercial interno](/blog/terceirizar-ou-estruturar-comercial-interno).',
    },

    { type: 'h2', text: 'Quando vale terceirizar também o fechamento' },
    {
      type: 'p',
      text: 'Vale quando o produto é explicável em uma conversa e o preço cabe em tabela. Não vale quando a venda depende de diagnóstico técnico, customização ou de uma relação que só quem é da casa sustenta.',
    },
    {
      type: 'ul',
      items: [
        'Ticket e complexidade. Oferta padronizada com escopo fechado sai da mão de um closer treinado; projeto que muda de escopo a cada conversa não sai.',
        'Autonomia de preço. Se cada desconto sobe para aprovação interna, terceirizar o fechamento adiciona um elo à cadeia e alonga o ciclo em vez de encurtar.',
        'Volume por segmento. Faz sentido no segmento com muitas contas parecidas, e deixa de fazer na conta grande, que costuma ser onde está a margem.',
        'Continuidade. Quem fechou some quando o contrato acaba, então o histórico da negociação precisa estar no seu CRM desde o primeiro dia, não no do fornecedor.',
      ],
    },
    {
      type: 'p',
      text: 'O quarto item é o que mais aparece tarde. Terceirizar o fechamento sem exigir registro no seu próprio CRM significa que o encerramento do contrato leva junto o motivo pelo qual cada negociação foi perdida, que é exatamente o dado necessário para o contrato seguinte funcionar melhor.',
    },

    { type: 'h2', text: 'Como a Nexxus trata essa divisão antes de assinar' },
    {
      type: 'p',
      text: 'Rodamos a conta de absorção com o cliente antes de propor volume, usando a agenda real de quem vai receber as reuniões e não a meta de receita do ano. Quando a conta mostra que o time absorve menos do que a meta exige, a conversa deixa de ser sobre contratar mais prospecção e passa a ser sobre a segunda pessoa no fechamento, mesmo quando isso reduz o tamanho do contrato que estamos vendendo.',
    },
    {
      type: 'p',
      text: 'A segunda regra é que o registro da passagem de bastão fica no CRM do cliente desde a primeira reunião, com os cinco campos listados acima. Números de operação, faixa de investimento e metas contratadas variam por cliente e não são benchmark de mercado, então não os publicamos aqui. O desenho da operação que assumimos, com as funções que entram em cada formato, está na [página de serviços de estruturação e terceirização comercial](/servicos), e o cronograma até a primeira reunião está no artigo sobre [em quanto tempo a terceirização comercial dá resultado](/blog/quanto-tempo-terceirizacao-comercial-da-resultado).',
    },
  ],
  faq: [
    {
      pergunta: 'Quem fecha a venda quando a prospecção é terceirizada?',
      resposta:
        'No arranjo mais comum do mercado brasileiro, quem fecha é o time comercial do contratante: o fornecedor entrega a reunião qualificada na agenda e a condução, a proposta e a negociação seguem internas. Existe o formato de squad completo, em que o fornecedor também conduz a reunião e negocia até a proposta, mas preço, condição comercial e assinatura quase sempre continuam sendo decisão da empresa contratante.',
    },
    {
      pergunta: 'Preciso ter um vendedor interno para terceirizar a prospecção?',
      resposta:
        'Precisa ter alguém com agenda livre e autonomia para negociar, seja um vendedor dedicado, seja o próprio dono nas operações menores. O que não funciona é contratar prospecção sem ninguém do outro lado com horário disponível, porque a reunião entregue e não conduzida esfria, aumenta o no-show e queima a conta, que é o ativo mais caro de recuperar.',
    },
    {
      pergunta: 'Quantas reuniões um closer consegue absorver por mês?',
      resposta:
        'Depende de quanto da agenda dele já está comprometida. Com a premissa de 6 horas comerciais por dia, 21 dias úteis, metade do tempo ocupado com negociações em aberto e rotina interna, e 3,5 horas de agenda por oportunidade nova entre reunião, preparo, proposta e follow up, cabem cerca de 18 reuniões realizadas por mês. Corrigindo pelo no-show de 19% medido pela Meetime, isso equivale a cerca de 22 reuniões agendadas.',
    },
    {
      pergunta: 'O que devo exigir que o fornecedor registre em cada reunião entregue?',
      resposta:
        'Cinco itens, todos em campo de CRM: o critério de segmentação que colocou a conta na lista, a dor descrita com as palavras do prospect, o cargo e o papel de quem aceitou a reunião, tudo o que foi prometido na abordagem e o motivo de recusa quando a reunião não é aceita. Sem o quinto item não existe forma de corrigir a lista do mês seguinte, e a discussão sobre qualidade vira opinião contra opinião.',
    },
    {
      pergunta: 'Vale a pena terceirizar o fechamento junto com a prospecção?',
      resposta:
        'Vale quando a oferta é padronizada, o escopo é fechado e o preço cabe em tabela, porque nesse caso um closer treinado conduz a conversa inteira. Não vale quando a venda depende de diagnóstico técnico, de customização a cada proposta ou quando todo desconto precisa de aprovação interna, já que aí terceirizar o fechamento adiciona um elo à cadeia de decisão e alonga o ciclo em vez de encurtar.',
    },
    {
      pergunta: 'Como saber se o problema é a reunião entregue ou o meu fechamento?',
      resposta:
        'Olhe onde a reunião para. Se a maioria é recusada por quem fecha antes de acontecer, o problema está no perfil de cliente ideal e na lista. Se as reuniões acontecem e poucas avançam para proposta, o problema costuma estar na condução ou na proposta de valor, não na prospecção. E se as reuniões acontecem mas a proposta demora semanas para sair, o gargalo é de agenda do seu lado, que é exatamente o que a conta de absorção antecipa antes de assinar.',
    },
  ],
}
