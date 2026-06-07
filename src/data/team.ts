/* ============================================================================
 *  EQUIPE NEXXUS  —  adicione/edite os integrantes aqui.
 *  `photo: null` mostra um placeholder elegante até você enviar a foto real.
 * ========================================================================== */

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string | null // caminho da imagem em /src/assets ou null p/ placeholder
}

export const team: TeamMember[] = [
  {
    name: 'Gabriel Isidoro',
    role: 'Hunter na Nexxus',
    bio: '6 anos em marketing e vendas como Closer e Hunter. Passagem pela V4 Company e atuação com Conquer e G4 Educação.',
    photo: null, // [INSERIR FOTO] — ex.: import e use '/src/assets/time/gabriel.jpg'
  },
  {
    name: '[INSERIR NOME]',
    role: 'Head Comercial',
    bio: 'Responsável pela estratégia e gestão das operações comerciais dos clientes.',
    photo: null,
  },
  {
    name: '[INSERIR NOME]',
    role: 'Closer',
    bio: 'Especialista em condução de reuniões, geração de valor e fechamento de negócios.',
    photo: null,
  },
  {
    name: '[INSERIR NOME]',
    role: 'Sales Ops',
    bio: 'Cuida de processos, ferramentas e inteligência de dados da operação.',
    photo: null,
  },
]

/** Valores / princípios da Nexxus */
export const values: { title: string; description: string }[] = [
  {
    title: 'Método antes de improviso',
    description:
      'Tudo começa pela arquitetura comercial. Estrutura vence talento solto — sempre.',
  },
  {
    title: 'Dados acima de achismo',
    description:
      'Cada decisão é guiada por KPIs, funil e indicadores reais, não por opinião.',
  },
  {
    title: 'Donos no lugar de fornecedores',
    description:
      'Atuamos como sócios do resultado: assumimos a operação como se fosse nossa.',
  },
  {
    title: 'Previsibilidade e escala',
    description:
      'Construímos máquinas comerciais que crescem com processo, não com sorte.',
  },
]
