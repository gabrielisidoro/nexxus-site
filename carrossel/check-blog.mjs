import puppeteer from 'puppeteer-core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const base = process.argv[2] || 'http://localhost:5173'

// Mesmo contrato do check-post.mjs: no Windows do Gabriel é o Chrome instalado;
// no container do loop, aponte CHROME_PATH para o binário disponível.
const chrome = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
// Container roda como root e o Chrome recusa sandbox nesse caso.
const semSandbox = process.env.CHROME_NO_SANDBOX ? ['--no-sandbox', '--disable-dev-shm-usage'] : []
const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: 'new',
  args: ['--hide-scrollbars', ...semSandbox],
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
