import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { allPosts } from './src/data/posts'
import { paginasSeo } from './src/data/seo'

const BASE = 'https://nexxusagencia.com.br'
const OG_PADRAO = `${BASE}/og-image.jpg`

// Data da última revisão das páginas institucionais. Atualize ao mexer nelas.
const INSTITUCIONAL_LASTMOD = '2026-07-26'

const raiz = (p: string) => fileURLToPath(new URL(p, import.meta.url))

interface Rota {
  path: string
  lastmod: string
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: string
}

function rotas(): Rota[] {
  const maisRecente = allPosts[0]?.date ?? INSTITUCIONAL_LASTMOD
  return [
    { path: '/',         lastmod: maisRecente,           changefreq: 'weekly',  priority: '1.0' },
    { path: '/servicos', lastmod: INSTITUCIONAL_LASTMOD, changefreq: 'monthly', priority: '0.9' },
    { path: '/blog',     lastmod: maisRecente,           changefreq: 'weekly',  priority: '0.8' },
    { path: '/contato',  lastmod: INSTITUCIONAL_LASTMOD, changefreq: 'monthly', priority: '0.8' },
    { path: '/sobre',    lastmod: INSTITUCIONAL_LASTMOD, changefreq: 'monthly', priority: '0.7' },
    ...allPosts.map((post): Rota => ({
      path: `/blog/${post.slug}`,
      lastmod: post.updated ?? post.date,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ]
}

/**
 * Gera o sitemap a partir das rotas reais e do índice de posts, para o slug e
 * a data nunca divergirem do que o site realmente serve.
 */
function sitemapPlugin(): Plugin {
  return {
    name: 'nexxus-sitemap',
    buildStart() {
      const lista = rotas()
      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...lista.map((r) =>
          [
            '  <url>',
            `    <loc>${BASE}${r.path}</loc>`,
            `    <lastmod>${r.lastmod}</lastmod>`,
            `    <changefreq>${r.changefreq}</changefreq>`,
            `    <priority>${r.priority}</priority>`,
            '  </url>',
          ].join('\n'),
        ),
        '</urlset>',
        '',
      ].join('\n')
      writeFileSync(raiz('./public/sitemap.xml'), xml, 'utf8')
      console.log(`[sitemap] ${lista.length} URLs (${allPosts.length} posts)`)
    },
  }
}

const escapar = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

interface MetaRota {
  path: string
  title: string
  description: string
  image: string
  type: 'website' | 'article'
  publicado?: string
  atualizado?: string
  secao?: string
}

function metaDeCadaRota(): MetaRota[] {
  const estaticas: MetaRota[] = Object.entries(paginasSeo)
    .filter(([p]) => p !== '/')
    .map(([path, dados]) => ({
      path,
      title: dados.title,
      description: dados.description,
      image: OG_PADRAO,
      type: 'website' as const,
    }))

  const posts: MetaRota[] = allPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Nexxus`,
    description: post.excerpt,
    image: post.cover ? `${BASE}${post.cover}` : OG_PADRAO,
    type: 'article' as const,
    publicado: post.date,
    atualizado: post.updated ?? post.date,
    secao: post.category,
  }))

  return [...estaticas, ...posts]
}

/**
 * Pré-renderiza o <head> de cada rota em um HTML estático próprio.
 *
 * Resolve dois problemas reais desta SPA:
 *  1. As tags do index.html duplicavam e vinham antes das do react-helmet, então
 *     og:image e og:type do post nunca valiam. Agora cada rota já nasce com as
 *     suas.
 *  2. Sem arquivo próprio, /blog/<slug> caía no 404.html e virava redirecionamento
 *     aos olhos do Google. Com o arquivo, a resposta é 200 direto.
 *
 * Escreve nos dois formatos que o GitHub Pages procura (<rota>.html e
 * <rota>/index.html) para servir sem redirecionar em qualquer um dos casos.
 */
function prerenderHeadPlugin(): Plugin {
  return {
    name: 'nexxus-prerender-head',
    apply: 'build',
    closeBundle() {
      const dist = raiz('./dist')
      const indexPath = join(dist, 'index.html')
      if (!existsSync(indexPath)) return

      const template = readFileSync(indexPath, 'utf8')
      const lista = metaDeCadaRota()

      for (const rota of lista) {
        const url = `${BASE}${rota.path}`
        let html = template

        html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapar(rota.title)}</title>`)
        html = html.replace(
          /<meta name="description"[^>]*>/,
          `<meta name="description" content="${escapar(rota.description)}" />`,
        )
        html = html.replace(
          /<meta property="og:type"[^>]*>/,
          `<meta property="og:type" content="${rota.type}" />`,
        )
        html = html.replace(
          /<meta property="og:image"[^>]*>/,
          `<meta property="og:image" content="${rota.image}" />`,
        )

        const extras = [
          `<link rel="canonical" href="${url}" />`,
          `<meta property="og:title" content="${escapar(rota.title)}" />`,
          `<meta property="og:description" content="${escapar(rota.description)}" />`,
          `<meta property="og:url" content="${url}" />`,
          `<meta name="twitter:title" content="${escapar(rota.title)}" />`,
          `<meta name="twitter:description" content="${escapar(rota.description)}" />`,
          `<meta name="twitter:image" content="${rota.image}" />`,
          rota.publicado
            ? `<meta property="article:published_time" content="${rota.publicado}T09:00:00-03:00" />`
            : '',
          rota.atualizado
            ? `<meta property="article:modified_time" content="${rota.atualizado}T09:00:00-03:00" />`
            : '',
          rota.secao ? `<meta property="article:section" content="${escapar(rota.secao)}" />` : '',
        ]
          .filter(Boolean)
          .join('\n    ')

        html = html.replace('</head>', `    ${extras}\n  </head>`)

        const semBarra = rota.path.replace(/^\//, '')
        for (const destino of [join(dist, `${semBarra}.html`), join(dist, semBarra, 'index.html')]) {
          mkdirSync(dirname(destino), { recursive: true })
          writeFileSync(destino, html, 'utf8')
        }
      }

      // O GitHub Pages precisa disto para não processar o build com Jekyll.
      writeFileSync(join(dist, '.nojekyll'), '', 'utf8')
      console.log(`[prerender] <head> estático de ${lista.length} rotas`)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), sitemapPlugin(), prerenderHeadPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
