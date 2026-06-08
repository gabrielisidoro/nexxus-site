import { Helmet } from 'react-helmet-async'
import { site } from '@/data/site'

const OG_IMAGE = `${site.url}/og-image.jpg`

interface SEOProps {
  title: string
  description?: string
  keywords?: string
  /** caminho da página, ex.: '/servicos' */
  path?: string
  /** tipo Open Graph */
  type?: 'website' | 'article'
  /** imagem social absoluta (opcional, usa og-image.jpg por padrão) */
  image?: string
  noindex?: boolean
  /** JSON-LD schema(s) — passe um objeto ou array de objetos */
  schema?: object | object[]
}

export function SEO({
  title,
  description = site.description,
  keywords,
  path = '/',
  type = 'website',
  image,
  noindex,
  schema,
}: SEOProps) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`
  const url      = `${site.url}${path}`
  const ogImage  = image ?? OG_IMAGE

  // Serializa schema(s) para JSON-LD
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Helmet>
      {/* ── Básico ────────────────────────────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description"          content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author"               content="Nexxus Agência Comercial" />
      <meta name="robots"               content={noindex ? 'noindex,nofollow' : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} />
      <link rel="canonical"             href={url} />

      {/* ── Geo / localização ─────────────────────────────────────────────── */}
      <meta name="geo.region"           content="BR-SP" />
      <meta name="geo.placename"        content="São Paulo" />
      <meta name="language"             content="pt-BR" />

      {/* ── Open Graph ────────────────────────────────────────────────────── */}
      <meta property="og:locale"        content="pt_BR" />
      <meta property="og:type"          content={type} />
      <meta property="og:site_name"     content={site.name} />
      <meta property="og:title"         content={fullTitle} />
      <meta property="og:description"   content={description} />
      <meta property="og:url"           content={url} />
      <meta property="og:image"         content={ogImage} />
      <meta property="og:image:width"   content="1200" />
      <meta property="og:image:height"  content="630" />
      <meta property="og:image:alt"     content={`${site.name} — ${site.tagline}`} />

      {/* ── Twitter Card ──────────────────────────────────────────────────── */}
      <meta name="twitter:card"         content="summary_large_image" />
      <meta name="twitter:title"        content={fullTitle} />
      <meta name="twitter:description"  content={description} />
      <meta name="twitter:image"        content={ogImage} />

      {/* ── JSON-LD Structured Data ───────────────────────────────────────── */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
