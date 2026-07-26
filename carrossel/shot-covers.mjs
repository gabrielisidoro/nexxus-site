import puppeteer from 'puppeteer-core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const htmlFile = process.argv[2] || 'slides-blog-covers.build.html'

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  args: ['--force-device-scale-factor=1', '--hide-scrollbars'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1 })
await page.goto('file:///' + path.join(dir, htmlFile).replace(/\\/g, '/'), {
  waitUntil: 'networkidle0',
  timeout: 60000,
})
await page.evaluate(() => document.fonts.ready)
await new Promise((r) => setTimeout(r, 600))

// Cada .cover (capa do site, 3/2) e cada .og (cartão social, 1200x630) precisa
// do atributo data-slug: ele vira o nome do arquivo.
const covers = await page.$$('.cover, .og')
for (const cover of covers) {
  const slug = await cover.evaluate((el) => el.dataset.slug)
  const box = await cover.boundingBox()
  const out = path.join(dir, 'out', `cover-${slug}.png`)
  await page.screenshot({ path: out, clip: box })
  console.log('ok', `cover-${slug}.png`)
}

await browser.close()
