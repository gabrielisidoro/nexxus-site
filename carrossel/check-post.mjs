import puppeteer from 'puppeteer-core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const url = process.argv[2]
const prefixo = process.argv[3] || 'post'
const scrollY = Number(process.argv[4] || 2100)

// No Windows do Gabriel é o Chrome instalado; em qualquer outro ambiente
// (container do loop, CI) aponte CHROME_PATH para o binário disponível.
const chrome = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
// Container roda como root e o Chrome recusa sandbox nesse caso.
const semSandbox = process.env.CHROME_NO_SANDBOX ? ['--no-sandbox', '--disable-dev-shm-usage'] : []

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: 'new',
  args: ['--hide-scrollbars', ...semSandbox],
})

const vistas = [
  { nome: 'desktop', width: 1440, height: 1400, y: scrollY },
  { nome: 'mobile', width: 390, height: 900, y: Math.round(scrollY * 1.3) },
]

let ld = []
for (const v of vistas) {
  const page = await browser.newPage()
  await page.setViewport({ width: v.width, height: v.height, deviceScaleFactor: 1 })
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluate(() => document.fonts.ready)
  await new Promise((r) => setTimeout(r, 1400))
  await page.evaluate((y) => window.scrollTo(0, y), v.y)
  await new Promise((r) => setTimeout(r, 900))
  await page.screenshot({ path: path.join(dir, 'out', `${prefixo}-${v.nome}.png`) })
  if (v.nome === 'desktop') {
    ld = await page.evaluate(() =>
      Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(
        (s) => JSON.parse(s.textContent)['@type'],
      ),
    )
  }
  console.log('ok', `${prefixo}-${v.nome}.png`)
  await page.close()
}
console.log('JSON-LD:', JSON.stringify(ld))

await browser.close()
