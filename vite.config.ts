import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { writeFileSync } from 'node:fs'
import { allPosts } from './src/data/posts'

const BASE = 'https://nexxusagencia.com.br'

// Data da última revisão das páginas institucionais. Atualize ao mexer no conteúdo delas.
const INSTITUCIONAL_LASTMOD = '2026-07-26'

interface Rota {
  path: string
  lastmod: string
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: string
}

/**
 * Gera o sitemap a partir das rotas reais + do índice de posts.
 * Evita o problema de slug divergente entre o sitemap e o blog.
 */
function sitemapPlugin(): Plugin {
  return {
    name: 'nexxus-sitemap',
    buildStart() {
      const maisRecente = allPosts[0]?.date ?? INSTITUCIONAL_LASTMOD

      const rotas: Rota[] = [
        { path: '/',         lastmod: maisRecente,            changefreq: 'weekly',  priority: '1.0' },
        { path: '/servicos', lastmod: INSTITUCIONAL_LASTMOD,  changefreq: 'monthly', priority: '0.9' },
        { path: '/blog',     lastmod: maisRecente,            changefreq: 'weekly',  priority: '0.8' },
        { path: '/contato',  lastmod: INSTITUCIONAL_LASTMOD,  changefreq: 'monthly', priority: '0.8' },
        { path: '/sobre',    lastmod: INSTITUCIONAL_LASTMOD,  changefreq: 'monthly', priority: '0.7' },
        ...allPosts.map((post): Rota => ({
          path: `/blog/${post.slug}`,
          lastmod: post.date,
          changefreq: 'monthly',
          priority: '0.7',
        })),
      ]

      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...rotas.map((r) =>
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

      writeFileSync(fileURLToPath(new URL('./public/sitemap.xml', import.meta.url)), xml, 'utf8')
      console.log(`[sitemap] ${rotas.length} URLs (${allPosts.length} posts do blog)`)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), sitemapPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
