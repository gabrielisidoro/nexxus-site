import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { allPosts, relatedPosts, formatDate } from './src/data/posts'
import type { Post, PostBlock } from './src/data/posts'
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
  /** Conteúdo estático do corpo, para quem lê a página sem executar JavaScript. */
  corpo: string
}

/* ── Corpo estático ─────────────────────────────────────────────────────────
 * O Googlebot enfileira a renderização de JavaScript e, em site de baixa
 * autoridade, essa fila demora. Enquanto isso ele indexa o HTML cru. Até
 * 17/09/2026 esse HTML era só `<div id="root"></div>`: nenhum texto e, pior,
 * nenhum <a href>, então a rede de links internos das matérias não existia
 * para o rastreador e os posts ficavam em "Descoberta, mas não indexada".
 *
 * Estas funções escrevem o mesmo conteúdo que o React monta, a partir da mesma
 * fonte (`allPosts`), direto dentro de `#root`. Não é cloaking: o texto é
 * idêntico ao que o usuário vê. O `createRoot` limpa os filhos do container ao
 * montar, então o React continua dono da página no navegador.
 * ------------------------------------------------------------------------ */

const NAV: { path: string; label: string }[] = [
  { path: '/', label: 'Terceirização comercial B2B com a Nexxus' },
  { path: '/servicos', label: 'Serviços de terceirização e estruturação comercial' },
  { path: '/blog', label: 'Blog de vendas B2B' },
  { path: '/sobre', label: 'Sobre a Nexxus' },
  { path: '/contato', label: 'Diagnóstico comercial gratuito' },
]

/** Converte `[âncora](/destino)` em <a> de verdade e escapa todo o resto. */
function textoComLinks(texto: string): string {
  return texto
    .split(/(\[[^\]]+\]\([^)]+\))/g)
    .map((parte) => {
      const achou = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(parte)
      if (!achou) return escapar(parte)
      const [, ancora, destino] = achou
      const externo = /^https?:/.test(destino)
      const extra = externo ? ' target="_blank" rel="noopener noreferrer"' : ''
      return `<a href="${escapar(destino)}"${extra}>${escapar(ancora)}</a>`
    })
    .join('')
}

function blocoHtml(bloco: PostBlock): string {
  switch (bloco.type) {
    case 'h2':
      return `<h2>${escapar(bloco.text)}</h2>`
    case 'p':
      return `<p>${textoComLinks(bloco.text)}</p>`
    case 'ul':
      return `<ul>${bloco.items.map((item) => `<li>${textoComLinks(item)}</li>`).join('')}</ul>`
    case 'quote':
      return `<blockquote><p>${escapar(bloco.text)}</p></blockquote>`
    case 'table': {
      const cabecalho = bloco.headers.map((h) => `<th scope="col">${escapar(h)}</th>`).join('')
      const linhas = bloco.rows
        .map((row) => `<tr>${row.map((cell) => `<td>${escapar(cell)}</td>`).join('')}</tr>`)
        .join('')
      const legenda = bloco.caption ? `<caption>${escapar(bloco.caption)}</caption>` : ''
      return `<table>${legenda}<thead><tr>${cabecalho}</tr></thead><tbody>${linhas}</tbody></table>`
    }
    default:
      return ''
  }
}

/** Links de rodapé, para o rastreador alcançar as outras rotas de qualquer página. */
function navHtml(atual: string): string {
  const itens = NAV.filter((n) => n.path !== atual)
    .map((n) => `<li><a href="${n.path}">${escapar(n.label)}</a></li>`)
    .join('')
  return `<nav aria-label="Navegação do site"><ul>${itens}</ul></nav>`
}

function corpoDoPost(post: Post): string {
  const capa = post.cover
    ? `<img src="${post.cover}" width="1500" height="1000" alt="${escapar(post.title)}" />`
    : ''
  const faq = post.faq?.length
    ? `<section><h2>Perguntas frequentes</h2><dl>${post.faq
        .map(
          (item) =>
            `<dt>${escapar(item.pergunta)}</dt><dd>${textoComLinks(item.resposta)}</dd>`,
        )
        .join('')}</dl></section>`
    : ''
  const relacionados = relatedPosts(post.slug, 2)
  const continueLendo = relacionados.length
    ? `<section><h2>Continue lendo</h2><ul>${relacionados
        .map((p) => `<li><a href="/blog/${p.slug}">${escapar(p.title)}</a></li>`)
        .join('')}</ul></section>`
    : ''

  return [
    '<div class="nx-pre">',
    '<a href="/blog">Voltar para o blog</a>',
    '<article>',
    `<p>${escapar(post.category)} &middot; <time datetime="${post.date}">${escapar(
      formatDate(post.date),
    )}</time> &middot; ${post.readingMinutes} min de leitura</p>`,
    `<h1>${escapar(post.title)}</h1>`,
    `<p>${escapar(post.excerpt)}</p>`,
    capa,
    post.content.map(blocoHtml).join(''),
    faq,
    '</article>',
    continueLendo,
    navHtml(`/blog/${post.slug}`),
    '</div>',
  ].join('')
}

function corpoDaListagem(): string {
  const itens = allPosts
    .map(
      (post) =>
        `<li><h2><a href="/blog/${post.slug}">${escapar(post.title)}</a></h2>` +
        `<p>${escapar(post.category)} &middot; <time datetime="${post.date}">${escapar(
          formatDate(post.date),
        )}</time></p>` +
        `<p>${escapar(post.excerpt)}</p></li>`,
    )
    .join('')
  return [
    '<div class="nx-pre">',
    `<h1>${escapar(paginasSeo['/blog'].title.replace(' | Nexxus', ''))}</h1>`,
    `<p>${escapar(paginasSeo['/blog'].description)}</p>`,
    `<ul>${itens}</ul>`,
    navHtml('/blog'),
    '</div>',
  ].join('')
}

function corpoInstitucional(path: string, title: string, description: string): string {
  // A home também lista as matérias recentes: é de lá que sai boa parte do
  // rastreio para o blog.
  const recentes =
    path === '/'
      ? `<section><h2>Últimas do blog</h2><ul>${allPosts
          .slice(0, 3)
          .map((p) => `<li><a href="/blog/${p.slug}">${escapar(p.title)}</a></li>`)
          .join('')}</ul></section>`
      : ''
  return [
    '<div class="nx-pre">',
    `<h1>${escapar(title.replace(/ \| Nexxus$/, ''))}</h1>`,
    `<p>${escapar(description)}</p>`,
    recentes,
    navHtml(path),
    '</div>',
  ].join('')
}

/** Folha mínima para o conteúdo estático ficar legível no instante antes do React montar. */
const ESTILO_PRE = [
  '<style>',
  '#root .nx-pre{max-width:46rem;margin:0 auto;padding:2.5rem 1.25rem;',
  'font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;line-height:1.7;color:#27303f}',
  '#root .nx-pre img{max-width:100%;height:auto}',
  '#root .nx-pre table{width:100%;border-collapse:collapse;font-size:.9rem;margin:1.5rem 0}',
  '#root .nx-pre th,#root .nx-pre td{border-bottom:1px solid #e5e7eb;padding:.5rem .75rem;text-align:left}',
  '#root .nx-pre ul{padding-left:1.25rem}',
  '</style>',
].join('')

function metaDeCadaRota(): MetaRota[] {
  // A home entra na mesma lista que as outras rotas. Ficou de fora até
  // 22/09/2026 e era a única página do domínio sem canonical, sem og:title e
  // com a description velha do index.html em vez da de `paginasSeo`.
  const estaticas: MetaRota[] = Object.entries(paginasSeo)
    .map(([path, dados]) => ({
      path,
      title: dados.title,
      description: dados.description,
      image: OG_PADRAO,
      type: 'website' as const,
      corpo:
        path === '/blog'
          ? corpoDaListagem()
          : corpoInstitucional(path, dados.title, dados.description),
    }))
    // A home primeiro: é a página com mais chance de ser rastreada.
    .sort((a, b) => (a.path === '/' ? -1 : b.path === '/' ? 1 : 0))

  const posts: MetaRota[] = allPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Nexxus`,
    description: post.excerpt,
    image: (post.ogImage ?? post.cover) ? `${BASE}${post.ogImage ?? post.cover}` : OG_PADRAO,
    type: 'article' as const,
    publicado: post.date,
    atualizado: post.updated ?? post.date,
    secao: post.category,
    corpo: corpoDoPost(post),
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

        html = html.replace('</head>', `    ${extras}\n    ${ESTILO_PRE}\n  </head>`)
        html = html.replace('<div id="root"></div>', `<div id="root">${rota.corpo}</div>`)

        // A home é o próprio index.html: não gera `.html` nem subpasta, senão
        // viraria /index/index.html e uma URL duplicada para o Google.
        const destinos =
          rota.path === '/'
            ? [indexPath]
            : [
                join(dist, `${rota.path.replace(/^\//, '')}.html`),
                join(dist, rota.path.replace(/^\//, ''), 'index.html'),
              ]

        for (const destino of destinos) {
          mkdirSync(dirname(destino), { recursive: true })
          writeFileSync(destino, html, 'utf8')
        }
      }

      // O GitHub Pages precisa disto para não processar o build com Jekyll.
      writeFileSync(join(dist, '.nojekyll'), '', 'utf8')
      console.log(`[prerender] <head> + corpo estático de ${lista.length} rotas`)
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
