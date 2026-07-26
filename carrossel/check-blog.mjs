import puppeteer from 'puppeteer-core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const base = process.argv[2] || 'http://localhost:5173'

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  args: ['--hide-scrollbars'],
})

const alvos = [
  { url: `${base}/blog`, nome: 'blog' },
  { url: `${base}/blog/por-que-terceirizar-operacao-comercial`, nome: 'post' },
]

for (const alvo of alvos) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 1300, deviceScaleFactor: 1 })
  await page.goto(alvo.url, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluate(() => document.fonts.ready)
  await new Promise((r) => setTimeout(r, 1500))
  await page.screenshot({ path: path.join(dir, 'out', `check-${alvo.nome}.png`) })

  const meta = await page.evaluate(() => {
    const pick = (sel, attr) => document.querySelector(sel)?.getAttribute(attr) ?? null
    const ld = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map((s) => {
      try {
        return JSON.parse(s.textContent)['@type']
      } catch {
        return 'INVALIDO'
      }
    })
    return {
      titulo: document.title,
      canonical: pick('link[rel=canonical]', 'href'),
      robots: pick('meta[name=robots]', 'content'),
      ogImage: pick('meta[property="og:image"]', 'content'),
      ogType: pick('meta[property="og:type"]', 'content'),
      publicado: pick('meta[property="article:published_time"]', 'content'),
      jsonLd: ld,
    }
  })
  console.log(`\n=== ${alvo.nome} ===`)
  for (const [k, v] of Object.entries(meta)) console.log(`  ${k}: ${JSON.stringify(v)}`)
  await page.close()
}

await browser.close()
