/* ============================================================================
 *  MÉTODO NEXXUS  —  conteúdo do método, narrativa, papéis, cadência e números.
 * ========================================================================== */

import type { ServiceIcon } from './services'

export type MetodoIcon =
  | 'Compass'
  | 'GitBranch'
  | 'Repeat'
  | 'Users'
  | 'Swords'
  | 'BarChart3'

/** Os 6 pilares da "Mandala" — o ecossistema comercial Nexxus */
export const pillars: {
  n: string
  icon: MetodoIcon
  title: string
  description: string
}[] = [
  {
    n: '01',
    icon: 'Compass',
    title: 'Arquitetura Comercial',
    description: 'ICP, oferta, canal e posicionamento, definidos antes das pessoas.',
  },
  {
    n: '02',
    icon: 'GitBranch',
    title: 'Funil & CRM',
    description: 'Etapas, indicadores, automações e BI para visibilidade total do funil.',
  },
  {
    n: '03',
    icon: 'Repeat',
    title: 'Cadência D1-D12',
    description: 'Follow-up estruturado: 80% das vendas acontecem entre o 5º e o 12º contato.',
  },
  {
    n: '04',
    icon: 'Users',
    title: 'Time Especializado',
    description: 'SDR, Hunter, Closer e Social Seller, cada um no papel certo.',
  },
  {
    n: '05',
    icon: 'Swords',
    title: 'Método de Vendas',
    description: 'SPIN Selling, ancoragem de valor e armas de fechamento.',
  },
  {
    n: '06',
    icon: 'BarChart3',
    title: 'Gestão Data-Driven',
    description: 'KPIs claros, dashboards e decisões baseadas em dados reais.',
  },
]

/** Narrativa de virada: Improviso (Inferno) → Estruturado (Céu) */
export const inferno: string[] = [
  'Leads entrando, mas sem cadência clara de atendimento',
  'Vendedores e closers perdendo tempo com tarefas erradas',
  'CRM desorganizado e pouca visibilidade do funil',
  'Dono preso na operação, cobrando follow-up e apagando incêndio',
  'Contratações lentas, caras e com risco de turnover',
  'Crescimento dependendo de indicação, sorte ou esforço individual',
]

export const ceu: string[] = [
  'ICP definido e abordagem direcionada ao cliente certo',
  'SDR, Hunter ou Closer atuando no papel correto',
  'Leads qualificados, reuniões melhores e menos desperdício',
  'CRM organizado com cadência, etapas e indicadores claros',
  'Dono com visão estratégica, sem depender do operacional diário',
  'Crescimento com previsibilidade, processo e gestão contínua',
]

/** Os 3 papéis da operação comercial */
export const roles: {
  name: string
  role: string
  mission: string
  metrics: { value: string; label: string }[]
}[] = [
  {
    name: 'SDR',
    role: 'Inbound + Outbound B2B',
    mission:
      'Atende leads inbound e executa prospecção ativa outbound, gerando reuniões qualificadas para o time.',
    metrics: [
      { value: '15–25', label: 'Reuniões/mês' },
      { value: '10–25%', label: 'Conv. agendamento' },
    ],
  },
  {
    name: 'Hunter',
    role: 'Prospecção Outbound',
    mission:
      'Prospecta ativamente o Perfil de Cliente Ideal com social selling, listas segmentadas e abordagem consultiva.',
    metrics: [
      { value: '50–150', label: 'Abordagens/dia' },
      { value: '5–12,5%', label: 'Conv. agendamento' },
    ],
  },
  {
    name: 'Closer',
    role: 'Consultor de Vendas',
    mission:
      'Conduz a reunião, gera valor, quebra objeções com SPIN Selling e fecha o negócio na própria call.',
    metrics: [
      { value: '3–4', label: 'Reuniões/dia' },
      { value: '15–30%', label: 'Conv. venda' },
    ],
  },
]

/** Cadência de prospecção Nexxus */
export const cadence: { day: string; channel: string }[] = [
  { day: 'D1', channel: 'Mensagem' },
  { day: 'D2', channel: 'Ligação' },
  { day: 'D3', channel: 'E-mail' },
  { day: 'D5', channel: 'Mensagem dupla' },
  { day: 'D9', channel: 'Áudio' },
  { day: 'D12', channel: 'Break-up' },
]

/** Onboarding — da assinatura ao go-live em 20 dias */
export const onboarding: { week: string; items: string[] }[] = [
  {
    week: 'Semana 01',
    items: ['Kickoff do projeto', 'Abertura da vaga do time', 'Início do planejamento'],
  },
  {
    week: 'Semana 02',
    items: ['Finalização estratégica', 'Seleção do time', 'Setup de ferramentas'],
  },
  {
    week: 'Semana 03',
    items: ['Imersão do time', 'Treinamento do público', 'Operação ativa (dia 20)'],
  },
]

/** Ferramentas e parceiros */
export const tools: { name: string; role: string }[] = [
  { name: 'Kommo CRM', role: 'CRM com IA' },
  { name: 'Sonax', role: 'Telefonia em nuvem' },
  { name: 'Full Sales System', role: 'Metodologia de vendas' },
  { name: 'G4 Educação', role: 'Educação executiva' },
  { name: 'Receita Previsível', role: 'Framework de prospecção' },
  { name: 'SPIN Selling', role: 'Método de qualificação' },
]

/** Diferenciais — por que Nexxus */
export const differentials: { icon: ServiceIcon; title: string; description: string }[] = [
  {
    icon: 'Target',
    title: 'Arquitetura antes de pessoas',
    description:
      'Não alocamos um SDR e torcemos. Primeiro desenhamos toda a engenharia comercial, depois colocamos o time certo.',
  },
  {
    icon: 'LineChart',
    title: 'Operação 100% data-driven',
    description:
      'CRM, KPIs e dashboards desde o dia um. Você enxerga exatamente onde está cada lead e cada gargalo.',
  },
  {
    icon: 'Rocket',
    title: 'Go-live em 20 dias',
    description:
      'Time selecionado, treinado e em campo em até 20 dias. Setup rápido, sem você montar nada do zero.',
  },
  {
    icon: 'Users',
    title: 'Estrutura física e estúdio em SP',
    description:
      'Operação ativa no Edifício Capital Corporate Office, com salas de mentoria e estúdio de gravação para clientes.',
  },
]

/* ----------------------------------------------------------------------------
 *  NÚMEROS / RESULTADOS  —  os com [INSERIR] devem ser preenchidos com seus
 *  dados reais (empresas atendidas, % de aumento em vendas etc.).
 * -------------------------------------------------------------------------- */
export const resultStats: { value: number; suffix?: string; prefix?: string; label: string; placeholder?: boolean }[] =
  [
    { value: 30, prefix: '+', label: 'Empresas estruturadas', placeholder: true }, // [INSERIR NÚMERO]
    { value: 40, suffix: '%', label: 'Aumento médio em vendas', placeholder: true }, // [INSERIR NÚMERO]
    { value: 20, label: 'Dias para colocar a operação no ar' },
    { value: 12, suffix: 'h', label: 'Para responder o seu contato' },
  ]
