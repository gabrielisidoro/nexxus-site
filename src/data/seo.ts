/* ============================================================================
 *  SEO DATA  —  JSON-LD schemas, keywords e metadados ricos por página.
 *  Estruturado para ranquear nas dores reais que a Nexxus resolve.
 * ========================================================================== */

const BASE_URL = 'https://nexxusagencia.com.br'
const OG_IMAGE  = `${BASE_URL}/og-image.jpg`

// ─── Schema: Organization ────────────────────────────────────────────────────
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Nexxus',
  legalName: 'Nexxus Agência Comercial',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/favicon.svg`,
    width: 512,
    height: 512,
  },
  image: OG_IMAGE,
  description:
    'A Nexxus estrutura e opera o comercial de empresas B2B com método, dados e time dedicado — terceirização comercial, estruturação de vendas e mentoria.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Edifício Capital Corporate Office',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'gabriel.isidoro@nexxusagencia.com.br',
    availableLanguage: 'Portuguese',
    areaServed: 'BR',
  },
  sameAs: [
    'https://www.instagram.com/nexxus.inc/',
  ],
  foundingDate: '2022',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
  knowsAbout: [
    'Terceirização Comercial',
    'BPO de Vendas',
    'Estruturação Comercial',
    'SDR Hunter Closer',
    'Prospecção Outbound B2B',
    'CRM Kommo',
    'SPIN Selling',
    'Playbook de Vendas',
  ],
}

// ─── Schema: LocalBusiness ───────────────────────────────────────────────────
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#local`,
  name: 'Nexxus — Terceirização e Estruturação Comercial',
  image: OG_IMAGE,
  url: BASE_URL,
  telephone: '',
  email: 'gabriel.isidoro@nexxusagencia.com.br',
  priceRange: '$$$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Transferência bancária, PIX',
  openingHours: 'Mo-Fr 09:00-18:00',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Edifício Capital Corporate Office',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '04703-010',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.624,
    longitude: -46.699,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  hasMap: 'https://maps.google.com/?q=Edifício+Capital+Corporate+Office+São+Paulo',
}

// ─── Schema: WebSite (sitelinks searchbox) ───────────────────────────────────
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Nexxus',
  url: BASE_URL,
  description: 'Terceirização comercial, estruturação de vendas e mentoria B2B.',
  inLanguage: 'pt-BR',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

// ─── Schema: FAQ — Home ──────────────────────────────────────────────────────
// Responde às dores e dúvidas mais buscadas no Google
export const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Devo contratar um vendedor CLT, PJ ou terceirizar o comercial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contratar um vendedor CLT ou PJ expõe a empresa ao risco de turnover, alto custo de onboarding e meses sem resultado. A terceirização comercial entrega uma squad completa (SDR, Hunter e Closer) operando em até 20 dias, com método já validado, sem você precisar selecionar, treinar ou gerenciar o time.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é terceirização comercial (BPO de vendas)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Terceirização comercial, também chamada de BPO de vendas ou outsourcing comercial, é quando uma empresa especializada assume a operação de vendas de outra empresa: prospectando, qualificando e fechando negócios com método, dados e governança. A Nexxus oferece esse serviço com equipe dedicada e operação no ar em 20 dias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como estruturar uma equipe de vendas B2B do zero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Estruturar uma equipe de vendas B2B exige: 1) Definir o ICP (Perfil de Cliente Ideal), 2) Desenhar o funil e o CRM, 3) Criar o playbook com cadência D1-D12, 4) Contratar os papéis certos (SDR, Hunter, Closer), 5) Implantar gestão por dados. A Nexxus faz essa estruturação completa em até 20 dias.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que faz um SDR, Hunter e Closer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SDR (Sales Development Representative) qualifica leads inbound e agenda reuniões. Hunter prospecta ativamente o ICP com social selling e listas segmentadas. Closer conduz a reunião, quebra objeções com SPIN Selling e fecha o negócio. A Nexxus monta e opera os três perfis de forma integrada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Em quanto tempo vejo resultado com a Nexxus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A operação sai do zero e está no ar em 20 dias: diagnóstico e arquitetura (dias 1 a 7), montagem e treinamento do time (dias 8 a 14) e operação ativa gerando leads qualificados (dias 15 a 20). Os primeiros resultados mensuráveis aparecem já no primeiro mês.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é o investimento para terceirização comercial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O investimento varia conforme o escopo: tamanho da squad, canais de prospecção e complexidade do ciclo de venda. A Nexxus faz um diagnóstico gratuito para apresentar a proposta personalizada. Entre em contato para agendar.',
      },
    },
  ],
}

// ─── Schema: Service — Terceirização Comercial ───────────────────────────────
export const terceirizacaoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/servicos#terceirizacao-comercial`,
  name: 'Terceirização Comercial',
  alternateName: ['BPO de Vendas', 'Outsourcing Comercial', 'BPO Comercial'],
  description:
    'Squad completa de SDR, Hunter e Closer operando como time de vendas dedicado da sua empresa. ICP, funil, CRM, playbook e gestão — tudo pronto em 20 dias.',
  url: `${BASE_URL}/servicos`,
  provider: { '@id': `${BASE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'Brasil' },
  serviceType: 'Terceirização Comercial B2B',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/contato`,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'O que entregamos',
    itemListElement: [
      { '@type': 'Offer', name: 'Squad multidisciplinar dedicada (SDR, Hunter, Closer, Social Seller)' },
      { '@type': 'Offer', name: 'CRM e cadência D1-D12 configurados' },
      { '@type': 'Offer', name: 'Playbook comercial sob medida' },
      { '@type': 'Offer', name: 'Gestão por dados e reuniões de cadência' },
    ],
  },
}

// ─── Schema: Service — Estruturação Comercial ────────────────────────────────
export const estruturacaoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/servicos#estruturacao-comercial`,
  name: 'Estruturação Comercial',
  description:
    'ICP, oferta, canal, funil, CRM e playbook desenhados sob medida. A arquitetura completa para o time interno vender com método e previsibilidade.',
  url: `${BASE_URL}/servicos`,
  provider: { '@id': `${BASE_URL}/#organization` },
  serviceType: 'Consultoria de Vendas B2B',
  areaServed: { '@type': 'Country', name: 'Brasil' },
}

// ─── Schema: Service — Mentoria Comercial ────────────────────────────────────
export const mentoriaServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/servicos#mentoria-comercial`,
  name: 'Mentoria Comercial',
  description:
    'Transformamos o time comercial interno em uma máquina de resultados com SPIN Selling, CRM, cadência e gestão por dados. Sem precisar contratar ninguém.',
  url: `${BASE_URL}/servicos`,
  provider: { '@id': `${BASE_URL}/#organization` },
  serviceType: 'Mentoria de Vendas B2B',
  areaServed: { '@type': 'Country', name: 'Brasil' },
}

// ─── Schema: BreadcrumbList ──────────────────────────────────────────────────
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// ─── Keywords por página ─────────────────────────────────────────────────────
export const pageKeywords = {
  home: [
    'terceirização comercial',
    'BPO comercial',
    'outsourcing de vendas',
    'estruturação comercial',
    'contratar vendedor CLT ou PJ',
    'montar time de vendas',
    'equipe comercial terceirizada',
    'prospecção outbound B2B',
    'SDR hunter closer',
    'previsibilidade em vendas',
    'escalar vendas B2B',
    'consultoria comercial São Paulo',
  ].join(', '),

  servicos: [
    'terceirização comercial B2B',
    'BPO de vendas São Paulo',
    'outsourcing comercial',
    'estruturação de equipe de vendas',
    'mentoria comercial',
    'playbook de vendas',
    'SDR hunter closer squad',
    'contratar equipe de vendas terceirizada',
    'como estruturar time de vendas',
  ].join(', '),

  sobre: [
    'empresa de terceirização comercial',
    'consultoria de vendas B2B São Paulo',
    'Nexxus agência comercial',
    'BPO comercial São Paulo',
  ].join(', '),

  blog: [
    'blog vendas B2B',
    'como estruturar equipe comercial',
    'terceirização comercial artigos',
    'dicas de prospecção outbound',
    'SDR hunter closer diferença',
  ].join(', '),

  contato: [
    'diagnóstico comercial gratuito',
    'contratar consultoria de vendas',
    'terceirizar time comercial',
    'falar com especialista em vendas B2B',
  ].join(', '),
}
