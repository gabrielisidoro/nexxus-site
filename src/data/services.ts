/* ============================================================================
 *  SERVIÇOS DA NEXXUS  —  conteúdo editável das 3 frentes de atuação.
 *  Os ícones usam nomes da biblioteca lucide-react (mapeados em iconMap.tsx).
 * ========================================================================== */

export type ServiceIcon =
  | 'Rocket'
  | 'GraduationCap'
  | 'Workflow'
  | 'Users'
  | 'Target'
  | 'LineChart'

export interface Service {
  slug: string
  icon: ServiceIcon
  name: string
  /** Frase curta para cards e prévias */
  short: string
  tagline: string
  /** Parágrafo de abertura (2–3 linhas) */
  summary: string
  forWhom: string[]
  deliverables: { title: string; description: string }[]
  howItWorks: { step: string; title: string; description: string }[]
  outcome: string
}

export const services: Service[] = [
  {
    slug: 'terceirizacao-comercial',
    icon: 'Rocket',
    name: 'Terceirização Comercial',
    short: 'Sua operação de vendas inteira, pronta para rodar.',
    tagline: 'A operação comercial completa, do seu lado, sem você montar nada.',
    summary:
      'Assumimos a operação de vendas da sua empresa com uma squad de especialistas dedicada, método validado, ferramentas configuradas e gestão data-driven. Você foca no seu negócio; nós entregamos previsibilidade e escala.',
    forWhom: [
      'Empresas que querem vender mais sem montar e manter um time do zero',
      'Donos presos no operacional, apagando incêndio e cobrando follow-up',
      'Negócios que precisam de previsibilidade e de escalar rápido com método',
      'Quem cansou de depender de indicação, sorte ou esforço individual',
    ],
    deliverables: [
      {
        title: 'Squad multidisciplinar dedicada',
        description:
          'SDR, Hunter, Closer e Social Seller atuando cada um no papel certo, com Head Comercial e Sales Ops na gestão.',
      },
      {
        title: 'CRM e cadência configurados',
        description:
          'Funil estruturado, automações e a cadência D1-D12 rodando. 80% das vendas acontecem entre o 5º e o 12º contato.',
      },
      {
        title: 'Playbook comercial sob medida',
        description:
          'Processo, qualificação, matriz de objeções e metas documentados para padronizar o atendimento de alta conversão.',
      },
      {
        title: 'Gestão por dados e acompanhamento',
        description:
          'KPIs, dashboards e reuniões de cadência, com reunião operacional semanal e relatório estratégico.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Diagnóstico e arquitetura',
        description:
          'Análise profunda do funil, mercado e produto. Desenhamos a arquitetura comercial (ICP, oferta, canal) antes das pessoas.',
      },
      {
        step: '02',
        title: 'Setup em até 20 dias',
        description:
          'Seleção e imersão do time, configuração de ferramentas e planejamento. Em 20 dias a operação está rodando.',
      },
      {
        step: '03',
        title: 'Operação ativa e gestão',
        description:
          'Time em campo gerando reuniões e fechamentos, com gestão semanal e otimização contínua da máquina.',
      },
    ],
    outcome:
      'Uma operação comercial previsível, com time pronto, processo claro e o dono livre do operacional do dia a dia.',
  },
  {
    slug: 'mentoria-comercial',
    icon: 'GraduationCap',
    name: 'Mentoria Comercial',
    short: 'Seu time vendendo com método, com a gente do seu lado.',
    tagline: 'Profissionalize seu time interno com quem vive vendas todo dia.',
    summary:
      'Para quem quer manter o time dentro de casa, mas com método de verdade. Treinamos, implantamos processo e acompanhamos de perto até a sua equipe vender com consistência, sem depender de improviso.',
    forWhom: [
      'Empresas que já têm (ou querem manter) um time comercial interno',
      'Líderes que precisam de método, cadência e gestão para destravar o time',
      'Equipes que vendem por talento individual, sem processo replicável',
      'Quem quer reduzir turnover e a dependência de “vendedores estrela”',
    ],
    deliverables: [
      {
        title: 'Diagnóstico e plano de 90 dias',
        description:
          'Análise SWOT da operação, metas, estratégia comercial e cronograma exato para atingir os resultados.',
      },
      {
        title: 'Treinamento prático de vendas',
        description:
          'SPIN Selling, ancoragem de valor, armas de fechamento e a cadência de prospecção, aplicados ao seu produto.',
      },
      {
        title: 'Implantação de CRM e rituais',
        description:
          'Funil, indicadores e rotina de gestão para o time operar com clareza e o líder enxergar onde está o gargalo.',
      },
      {
        title: 'Acompanhamento de perto',
        description:
          'Reuniões de cadência, revisão de pipeline e ajuste de rota até o método virar cultura no time.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Diagnóstico',
        description:
          'Entendemos seu time, seu funil e seus números atuais para desenhar o plano de evolução.',
      },
      {
        step: '02',
        title: 'Estruturação e treinamento',
        description:
          'Construímos playbook, cadência e processo, e treinamos o time na prática.',
      },
      {
        step: '03',
        title: 'Mentoria contínua',
        description:
          'Acompanhamos a execução, medimos resultados e ajustamos a estratégia ciclo a ciclo.',
      },
    ],
    outcome:
      'Um time interno mais forte, com processo replicável, previsibilidade e gestão orientada a dados.',
  },
  {
    slug: 'estruturacao-comercial-interna',
    icon: 'Workflow',
    name: 'Estruturação Comercial Interna',
    short: 'Montamos a máquina; seu time opera.',
    tagline: 'A arquitetura comercial completa para você escalar com método.',
    summary:
      'Desenhamos e implantamos toda a engenharia da sua operação de vendas: ICP, oferta, funil, ferramentas, papéis e indicadores, para sua empresa parar de vender no improviso e passar a vender com método.',
    forWhom: [
      'Empresas que querem profissionalizar o próprio comercial de ponta a ponta',
      'Negócios sem ICP claro, sem funil padronizado e com CRM bagunçado',
      'Quem vai contratar e quer a estrutura pronta antes de colocar gente',
      'Operações que cresceram “na raça” e precisam de processo para escalar',
    ],
    deliverables: [
      {
        title: 'Arquitetura comercial',
        description:
          'Definição de ICP, oferta, canal e posicionamento: a base que sustenta toda a operação, antes das pessoas.',
      },
      {
        title: 'Funil, CRM e cadência',
        description:
          'Etapas, indicadores, automações e a cadência D1-D12 implantadas para previsibilidade real do funil.',
      },
      {
        title: 'Playbook e papéis definidos',
        description:
          'Processo comercial, matriz de objeções, metas e os papéis de SDR, Hunter e Closer bem desenhados.',
      },
      {
        title: 'KPIs e gestão data-driven',
        description:
          'Dashboards e métricas claras para decisões baseadas em dados reais, não em achismo.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Mapeamento',
        description:
          'Workshop de posicionamento, definição de ICP e diagnóstico do funil atual.',
      },
      {
        step: '02',
        title: 'Montagem da estrutura',
        description:
          'Construímos playbook, cadência, CRM e processos plug-and-play já configurados.',
      },
      {
        step: '03',
        title: 'Treinamento e entrega',
        description:
          'Treinamos seu time, validamos os indicadores e entregamos a máquina pronta para operar.',
      },
    ],
    outcome:
      'Uma estrutura comercial profissional, com processo, ferramentas e indicadores prontos para o seu time escalar.',
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
