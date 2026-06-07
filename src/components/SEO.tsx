import { Helmet } from 'react-helmet-async'
import { site } from '@/data/site'

interface SEOProps {
  title: string
  description?: string
  /** caminho da página, ex.: '/servicos' */
  path?: string
  /** tipo Open Graph */
  type?: 'website' | 'article'
  /** imagem social absoluta (opcional) */
  image?: string
  noindex?: boolean
}

export function SEO({
  title,
  description = site.description,
  path = '/',
  type = 'website',
  image,
  noindex,
}: SEOProps) {
  const fullTitle = title.includes(site.name) ? title : `${title} · ${site.name}`
  const url = `${site.url}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}
