/* ============================================================================
 *  CONFIG CENTRAL DO SITE  —  edite estes dados sem mexer nos componentes.
 *  (telefone, WhatsApp, e-mail, endereço e redes sociais)
 * ========================================================================== */

export const site = {
  name: 'Nexxus',
  legalName: 'Nexxus',
  tagline: 'Estruturação Comercial Completa',
  description:
    'A Nexxus estrutura e opera o comercial da sua empresa com método, dados e um time pronto — terceirização comercial, mentoria e estruturação de vendas.',
  url: 'https://www.nexxus.com.br', // [INSERIR] domínio final quando publicar

  // ----- Contato (dado real já preenchido; demais são placeholders) ----------
  email: 'nexxus.nxmarketing@gmail.com',
  phoneDisplay: '[INSERIR TELEFONE]', // ex.: (11) 99999-9999
  responseTime: 'Resposta garantida em até 12 horas',

  // WhatsApp: use o número no formato internacional, só dígitos (55 + DDD + número)
  whatsapp: {
    number: '5511999999999', // [INSERIR] número real do WhatsApp
    defaultMessage:
      'Olá! Vim pelo site da Nexxus e quero solicitar um diagnóstico comercial gratuito.',
  },

  // ----- Endereço (extraído da apresentação) ---------------------------------
  address: {
    building: 'Edifício Capital Corporate Office',
    reference: 'Ao lado do Shopping Morumbi',
    city: 'São Paulo',
    state: 'SP',
    full: 'Edifício Capital Corporate Office — ao lado do Shopping Morumbi, São Paulo/SP',
  },

  // ----- Redes sociais (preencha as URLs reais) ------------------------------
  social: {
    instagram: 'https://instagram.com/', // [INSERIR] @nexxus
    linkedin: 'https://linkedin.com/company/', // [INSERIR]
    youtube: '', // opcional
  },
} as const

// URL pronta do WhatsApp (com mensagem padrão)
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsapp.defaultMessage)
  return `https://wa.me/${site.whatsapp.number}?text=${text}`
}

export const mailtoLink = `mailto:${site.email}`

// ----- Navegação principal ---------------------------------------------------
export const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contato', to: '/contato' },
] as const
