import type { Post } from './types'

export const post: Post = {
  slug: 'terceirizacao-comercial-nao-deu-resultado',
  title: 'Terceirização comercial não deu resultado: como diagnosticar',
  excerpt:
    'Terceirização comercial não deu resultado? Antes de trocar de fornecedor, veja o prazo mínimo para julgar e os quatro números que apontam o culpado.',
  date: '2026-09-08',
  readingMinutes: 9,
  category: 'Diagnóstico',
  cover: '/blog/cover-nao-deu-resultado.jpg',
  ogImage: '/blog/og-nao-deu-resultado.jpg',
  keywords: [
    'terceirização comercial não deu resultado',
    'terceirização comercial não funcionou',
    'trocar de empresa de terceirização comercial',
    'como avaliar terceirização de prospecção',
    'cancelar contrato de terceirização comercial',
    'terceirização de vendas sem resultado',
  ],
  content: [
    {
      type: 'p',
      text: 'Mês quatro. O relatório do fornecedor mostra 38 reuniões realizadas no trimestre, o CRM mostra duas propostas em aberto e nenhum contrato assinado. A conclusão que quase todo dono tira nesse ponto é que a terceirização comercial não deu resultado e que o caminho é trocar de fornecedor. Às vezes é isso mesmo. Com frequência, o número que explica o problema não está no relatório do fornecedor: está no funil do lado de dentro, na etapa que ninguém mediu.',
    },
    {
      type: 'p',
      text: 'O que vem abaixo é o roteiro de diagnóstico que deveria rodar antes da decisão de cancelar. Três coisas, nesta ordem: se a operação já teve tempo de ser julgada, quais quatro números separam a responsabilidade do fornecedor da responsabilidade da sua empresa, e o que precisa estar resolvido no contrato antes de trocar. Ele serve para ser usado contra a Nexxus também. Vale a ressalva de que a ordem dos passes vem da nossa própria experiência em diagnóstico, não de um benchmark de mercado: nos casos que chegam pedindo segunda opinião, a etapa que trava com frequência não é a que o fornecedor controla.',
    },

    { type: 'h2', text: 'A operação já teve tempo suficiente para ser julgada?' },
    {
      type: 'p',
      text: 'Na maioria das vezes, não. O prazo mínimo honesto é a soma de dois blocos que quase nunca são somados: o tempo de rampagem da equipe e um ciclo de vendas inteiro do seu produto, contado a partir da primeira reunião realizada, não a partir da assinatura do contrato.',
    },
    {
      type: 'p',
      text: 'Os dois blocos têm referência pública. Segundo o levantamento de ramp up da [Meetime](https://meetime.com.br/blog/gestao-equipe/ramp-up-em-vendas/), o tempo médio de rampagem nas operações brasileiras é de 3,9 meses, e em vendas com ticket acima de R$ 5.000 por mês, 60% das empresas levam mais de 4 meses. O ciclo de vendas vem por cima disso. O [Anuário do Vendedor B2B Brasileiro 2026, do Sirius CRM](https://siriuscrm.com.br/anuario), aponta ciclo médio de 23 dias considerando todos os setores, com variação de 8 dias em distribuição a 45 dias em energia solar.',
    },
    {
      type: 'p',
      text: 'Ticket mais alto alonga tudo. O Inside Sales Benchmark Brasil de 2020, da Meetime, já mostrava ciclo médio de 48 dias para ticket mensal entre R$ 1.000 e R$ 5.000, 91 dias entre R$ 5.000 e R$ 25.000 e 119 dias acima disso. O dado tem mais de cinco anos e serve para ordem de grandeza, não para precisão. Na mesma linha, o [RD Station](https://www.rdstation.com/blog/vendas/ciclo-vendas/) registra que 14% das empresas fecham entre 2 e 3 meses e 8% levam de 4 a 6 meses.',
    },
    {
      type: 'p',
      text: 'Faça a conta com os seus próprios números antes de continuar a leitura. Se a sua operação tem ticket de R$ 8.000 e ciclo de 90 dias, julgar o resultado no mês quatro significa julgar antes de a primeira safra de reuniões ter tido chance de virar contrato. A linha do tempo mês a mês, com o que deve estar pronto em cada uma, está em [em quanto tempo a terceirização comercial dá resultado](/blog/quanto-tempo-terceirizacao-comercial-da-resultado).',
    },
    {
      type: 'quote',
      text: 'Cancelar no mês quatro um contrato cujo ciclo de vendas é de 90 dias não é uma decisão sobre o fornecedor. É uma decisão tomada antes de o primeiro dado útil existir.',
    },

    { type: 'h2', text: 'Onde exatamente o funil está travando?' },
    {
      type: 'p',
      text: 'O diagnóstico começa localizando a etapa, porque cada etapa tem um dono diferente. A tabela abaixo é o mapa que usamos para separar sintoma de causa antes de qualquer conversa sobre rescisão.',
    },
    {
      type: 'table',
      headers: ['Sintoma que você observa', 'Etapa que está travando', 'De quem é a responsabilidade'],
      rows: [
        ['Poucas reuniões agendadas', 'Volume e qualidade da prospecção', 'Fornecedor, se a lista e o ICP foram aprovados por você'],
        ['Muitas reuniões, quase todas fora do perfil', 'Definição de ICP e critério de aceite', 'Compartilhada: ICP é seu, filtro é dele'],
        ['Reuniões marcadas e não realizadas', 'No-show e confirmação', 'Fornecedor, com ressalva se o horário é da sua agenda'],
        ['Reuniões boas, nenhuma proposta enviada', 'Passagem de bastão e closer', 'Sua empresa'],
        ['Propostas enviadas, nenhuma resposta', 'Preço, oferta e follow-up', 'Sua empresa'],
        ['Fecha, mas o cliente cancela em 60 dias', 'Promessa de venda contra entrega', 'Sua empresa'],
      ],
      caption:
        'Mapa de sintoma para etapa. A coluna da direita indica onde procurar primeiro, não um veredito. Duas etapas podem falhar ao mesmo tempo, e é comum.',
    },
    {
      type: 'p',
      text: 'Repare que quatro das seis linhas apontam para dentro de casa. Não é retórica de fornecedor: é consequência de onde o serviço termina. A terceirização de prospecção entrega reunião com o perfil combinado. O que acontece depois que o decisor entra na sala é do seu time, e é exatamente o trecho que raramente aparece medido no relatório mensal.',
    },

    { type: 'h2', text: 'Quais são os quatro números que fecham o diagnóstico?' },
    {
      type: 'p',
      text: 'São quatro taxas, medidas no seu CRM e não no relatório do fornecedor. Cada uma tem um valor de corte abaixo do qual a conversa muda de lado.',
    },
    {
      type: 'table',
      headers: ['Número', 'Como calcular', 'Sinal de alerta', 'Para onde aponta'],
      rows: [
        ['Taxa de no-show', 'Reuniões não realizadas dividido por reuniões agendadas', 'Acima de 20%', 'Fornecedor: confirmação e cadência de lembrete'],
        ['Aderência ao ICP', 'Reuniões dentro do perfil dividido por reuniões realizadas', 'Abaixo de 70%', 'ICP mal escrito ou filtro fraco'],
        ['Reunião para proposta', 'Propostas enviadas dividido por reuniões dentro do perfil', 'Abaixo de 40%', 'Sua empresa: closer, oferta ou discurso'],
        ['Tempo até o retorno', 'Horas entre a reunião e o próximo contato do seu time', 'Acima de 48 horas', 'Sua empresa: capacidade do time comercial'],
      ],
      caption:
        'Cortes de referência para operação B2B com ticket médio. Ajuste ao seu segmento antes de usar como veredito, e meça pelo menos dois meses seguidos antes de concluir.',
    },
    {
      type: 'p',
      text: 'O corte de no-show vem de dado público: compilações do Inside Sales Benchmark Brasil, da Meetime, situam o no-show médio em torno de 19%, com as operações melhores abaixo de 15%. O [benchmark de pré-venda consolidado pelo AI Hub Brasil](https://botaihub.com.br/vendas/benchmark-pre-venda-brasil-meetime-custo-por-reuniao/) traz os números por etapa. Se o seu no-show está em 22%, você não tem uma catástrofe, tem um ajuste de confirmação a cobrar. Se está em 45%, existe problema real de qualificação na origem.',
    },
    {
      type: 'p',
      text: 'O quarto número é o mais ignorado e o mais caro. O estudo da Harvard Business Review de 2011, [The Short Life of Online Sales Leads](https://hbr.org/2011/03/the-short-life-of-online-sales-leads), auditou 2.241 empresas e mostrou que responder em até 5 minutos aumenta em até 21 vezes a chance de qualificar o contato em relação a responder em 30 minutos, e que 23% das empresas simplesmente nunca responderam. O estudo é antigo e trata de lead inbound, mas o mecanismo vale para o retorno pós-reunião: interesse tem prazo de validade. Um time que demora três dias para mandar a proposta destrói dentro de casa o que foi pago para construir fora.',
    },

    { type: 'h2', text: 'O que é responsabilidade sua e quase nenhum fornecedor vai dizer na cara' },
    {
      type: 'p',
      text: 'Existe uma lista de pré-requisitos que fica do lado do cliente e que nenhuma operação terceirizada compensa. Vale checar item por item antes de atribuir o resultado a quem executa.',
    },
    {
      type: 'ul',
      items: [
        'Agenda de closer disponível. Se quem fecha tem quatro horas por semana livres, a operação está limitada por essa agenda, não pela prospecção. A meta de reuniões precisa caber nela, e a conta de quanto cabe está em [quantas reuniões um SDR deve agendar por mês](/blog/quantas-reunioes-sdr-por-mes).',
        'Critério de aceite escrito. Sem definição contratual do que conta como reunião qualificada, você e o fornecedor vão contar números diferentes e os dois vão estar certos. Os seis itens que essa cláusula precisa ter estão em [o que conta como reunião qualificada](/blog/o-que-conta-como-reuniao-qualificada).',
        'Feedback reunião a reunião. O fornecedor calibra com o que recebe de volta. Se ninguém do seu lado marca a reunião como fora do perfil e diz por quê, o filtro nunca melhora.',
        'Oferta testada. Se o fundador nunca fechou vendas na mão, não existe discurso validado para transferir. Nesse cenário o problema aparece como reunião ruim e na verdade é oferta indefinida.',
        'Preço e entrega em pé. Volume no topo do funil não conserta churn alto nem prazo de entrega estourado. Acelera o problema e queima a base de uma vez.',
      ],
    },
    {
      type: 'p',
      text: 'Se três ou mais desses itens estão abertos, trocar de fornecedor reinicia a rampagem e reproduz o mesmo resultado três meses depois, com o custo do recomeço no meio.',
    },

    { type: 'h2', text: 'Quando o problema é mesmo o fornecedor' },
    {
      type: 'p',
      text: 'Há sinais que não admitem interpretação generosa. Nenhum deles é sobre resultado ruim em um mês: são sobre ausência de processo para corrigir.',
    },
    {
      type: 'ul',
      items: [
        'Reincidência depois de comunicação formal. O mesmo desvio volta a acontecer depois de registrado por escrito. Falta processo de correção, não boa vontade.',
        'Relatório que você não consegue auditar. Se os números do fornecedor não batem com o CRM ao qual você tem acesso direto, o problema deixou de ser performance.',
        'Acesso ficando mais difícil. Reunião de cadência adiada, gravação indisponível, base de leads que ninguém exporta. Deterioração de relacionamento costuma aparecer primeiro como fricção de acesso.',
        'Ninguém nomeado do lado de lá. Quando não existe um responsável com nome, a conta é atendida por quem sobra na semana.',
        'Meta de reunião cumprida com qualidade em queda. Encher a agenda é fácil quando o pagamento é por reunião realizada. Cruze volume com aderência ao ICP antes de comemorar o número cheio.',
      ],
    },
    {
      type: 'p',
      text: 'Referências públicas de metas ajudam a calibrar a expectativa antes da cobrança. O material da [Meetime sobre metas para SDRs](https://meetime.com.br/blog/prospeccao/metas-para-sdrs/) trabalha com 15 a 20 reuniões por SDR por mês conforme o segmento. Cobrar 40 de uma operação desenhada para 18 não é rigor, é erro de contrato.',
    },

    { type: 'h2', text: 'O que checar no contrato antes de trocar' },
    {
      type: 'p',
      text: 'Decidida a troca, a ordem importa. Sair mal custa mais que ficar mais um trimestre, porque a operação nova começa sem histórico e sem base.',
    },
    {
      type: 'ul',
      items: [
        'Propriedade dos dados. Base de leads, gravações de call e histórico do CRM precisam sair com você. Se isso não está escrito, negocie antes de comunicar a saída, nunca depois.',
        'Prazo de aviso prévio e multa. Verifique a data limite de aviso do ciclo vigente. Perder a janela por uma semana costuma custar um mês inteiro de fee.',
        'Sobreposição de transição. Encerrar o contrato antigo antes de o novo estar rampado deixa o funil vazio justamente no intervalo em que você mais precisa de receita.',
        'Playbook e cadências. Script, matriz de objeções e sequências são ativos. Peça a exportação enquanto o relacionamento ainda funciona.',
        'Contatos em andamento. Defina quem assume as conversas abertas e como elas são transferidas, com data. Lead em negociação é o que mais se perde na troca.',
      ],
    },
    {
      type: 'p',
      text: 'Antes de assinar com o próximo, compare escopo e não preço de fachada: a lista do que precisa estar incluso e as sete perguntas para fazer antes de assinar estão em [quanto custa terceirizar o time de vendas](/blog/quanto-custa-terceirizar-time-de-vendas).',
    },

    { type: 'h2', text: 'A conversa de correção de rota, em 30 dias' },
    {
      type: 'p',
      text: 'Antes da rescisão, existe um passo intermediário que a maioria pula e que costuma resolver. Leve os quatro números medidos, não a impressão, e proponha um ciclo curto com critério de saída definido.',
    },
    {
      type: 'ul',
      items: [
        'Semana 1: apresentar as quatro taxas com o período medido e acordar qual etapa é o gargalo principal. Uma só, não três.',
        'Semana 1: cada lado assume dois compromissos verificáveis, com data. Do seu lado costuma ser agenda de closer e retorno em 24 horas.',
        'Semanas 2 a 4: medir só o gargalo escolhido, semanalmente, no mesmo relatório.',
        'Dia 30: comparar. Se a taxa acordada não se moveu e os compromissos do fornecedor foram cumpridos, o gargalo estava do outro lado do que se imaginava.',
      ],
    },
    {
      type: 'p',
      text: 'Esse ciclo tem um efeito secundário útil: ele revela rapidamente se existe processo do outro lado. Fornecedor com método aceita o critério de saída sem negociar a régua. Quem se recusa a fixar um número está dizendo o que você precisa saber.',
    },

    {
      type: 'h2',
      text: 'Terceirização comercial não deu resultado: quando parar em vez de trocar',
    },
    {
      type: 'p',
      text: 'Em alguns casos o diagnóstico não aponta para outro fornecedor, aponta para outro modelo. Ticket médio baixo com ciclo curto raramente sustenta prospecção ativa humana, porque o número de vendas necessário só para cobrir o custo da operação fica alto demais. Produto sem venda validada precisa do fundador em campo antes de qualquer squad. Operação que depende de relacionamento pessoal do dono para fechar não transfere por contrato.',
    },
    {
      type: 'p',
      text: 'A comparação entre assumir em casa e contratar fora, com os critérios de corte de cada cenário, está em [terceirizar ou montar time de vendas interno](/blog/terceirizar-ou-estruturar-comercial-interno).',
    },

    { type: 'h2', text: 'Como a Nexxus entra nessa conversa' },
    {
      type: 'p',
      text: 'Na Nexxus, a [terceirização comercial](/servicos) começa pelo desenho da arquitetura antes de qualquer pessoa entrar em campo: ICP, oferta, canal e funil documentados, com critério de aceite de reunião escrito e indicadores acordados desde o primeiro mês. É isso que permite, no mês quatro, olhar quatro números e saber de quem é a etapa que travou.',
    },
    {
      type: 'p',
      text: 'No diagnóstico inicial, a resposta pode ser que terceirizar não é o próximo passo do seu caso. Quando o gargalo está em oferta, preço ou entrega, colocar volume no topo do funil piora o quadro, e dizer isso antes do contrato é mais barato para os dois lados do que descobrir no mês seis.',
    },
  ],
  faq: [
    {
      pergunta: 'Em quanto tempo dá para saber se a terceirização comercial não deu resultado?',
      resposta:
        'Some o tempo de rampagem e um ciclo de vendas completo, contado da primeira reunião realizada. A Meetime aponta rampagem média de 3,9 meses nas operações brasileiras, e o ciclo médio B2B no Brasil varia de 8 a 45 dias conforme o setor, segundo o Anuário do Vendedor B2B Brasileiro 2026 do Sirius CRM, subindo bastante em ticket alto. Julgar antes dessa soma é julgar antes de existir dado útil. O que dá para avaliar cedo é processo: relatório auditável, cadência semanal acontecendo e critério de aceite sendo aplicado.',
    },
    {
      pergunta: 'Como saber se o problema é o fornecedor ou a minha empresa?',
      resposta:
        'Meça quatro taxas no seu CRM: no-show, aderência ao ICP, conversão de reunião para proposta e tempo até o retorno do seu time. As duas primeiras apontam para a prospecção, as duas últimas apontam para dentro de casa. Se as reuniões estão dentro do perfil e não viram proposta, o gargalo é o closer, a oferta ou o preço, e trocar de fornecedor não muda esse número.',
    },
    {
      pergunta: 'Qual taxa de no-show é aceitável em reuniões agendadas por SDR?',
      resposta:
        'Compilações do Inside Sales Benchmark Brasil, da Meetime, situam o no-show médio em torno de 19%, com as operações melhores abaixo de 15%. Acima de 20% já é sinal de ajuste na confirmação e na cadência de lembrete. Acima de 40% costuma indicar problema de qualificação na origem, não de agenda, e nesse caso o que precisa ser revisto é o critério de aceite, não a régua de lembretes.',
    },
    {
      pergunta: 'Posso cancelar o contrato de terceirização comercial a qualquer momento?',
      resposta:
        'Depende do que foi assinado, e é a primeira coisa a verificar antes de comunicar qualquer decisão. Cheque o prazo de aviso prévio do ciclo vigente, a multa por rescisão antecipada e, principalmente, a cláusula de propriedade dos dados: base de leads, gravações e histórico do CRM precisam sair com você. Negocie a saída dos ativos enquanto o relacionamento ainda funciona, nunca depois de anunciar o encerramento.',
    },
    {
      pergunta: 'Trocar de fornecedor resolve, ou o resultado vai se repetir?',
      resposta:
        'Se os pré-requisitos do lado do cliente continuam abertos, o resultado se repete com o custo de uma rampagem a mais no meio. Antes de trocar, verifique se existe agenda de closer disponível, critério de aceite escrito, feedback reunião a reunião e oferta já validada em vendas feitas pelo fundador. Com três ou mais desses itens em aberto, o fornecedor novo enfrenta exatamente o mesmo cenário.',
    },
    {
      pergunta: 'O que pedir ao fornecedor antes de decidir pela rescisão?',
      resposta:
        'Proponha um ciclo de 30 dias com um único gargalo escolhido, dois compromissos verificáveis de cada lado e uma taxa acordada como critério de saída. No dia 30, compare o número. Fornecedor com processo aceita fixar a régua sem negociar; recusa em definir um número mensurável já é a resposta que você procurava.',
    },
  ],
}
