/* ============================================================================
 *  CONFIG CENTRAL DO SITE  ·  edite estes dados sem mexer nos componentes.
 *  (telefone, e-mail, endereço e redes sociais)
 * ========================================================================== */

export const site = {
  name: 'Nexxus',
  legalName: 'Nexxus',
  tagline: 'Estruturação Comercial Completa',
  description:
    'A Nexxus estrutura e opera o comercial da sua empresa com método, dados e um time pronto: terceirização comercial, mentoria e estruturação de vendas.',
  url: 'https://nexxusagencia.com.br',

  // ----- Contato (dado real já preenchido; demais são placeholders) ----------
  email: 'nexxus.nxmarketing@gmail.com',
  phoneDisplay: '[INSERIR TELEFONE]', // ex.: (11) 99999-9999
  responseTime: 'Resposta garantida em até 12 horas',

  // ----- Endereço (extraído da apresentação) ---------------------------------
  address: {
    building: 'Edifício Capital Corporate Office',
    reference: 'Ao lado do Shopping Morumbi',
    city: 'São Paulo',
    state: 'SP',
    full: 'Edifício Capital Corporate Office, ao lado do Shopping Morumbi, São Paulo/SP',
  },

  // ----- Redes sociais (preencha as URLs reais) ------------------------------
  social: {
    instagram: 'https://www.instagram.com/nexxus.inc/',
    linkedin: 'https://linkedin.com/company/', // [INSERIR]
    youtube: '', // opcional
  },
} as const

export const mailtoLink = `mailto:${site.email}`

// ----- Navegação principal ---------------------------------------------------
export const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contato', to: '/contato' },
] as const
