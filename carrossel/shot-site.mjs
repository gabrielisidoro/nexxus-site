import puppeteer from 'puppeteer-core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const url = process.argv[2] || 'http://localhost:5173/'
const prefixo = process.argv[3] || 'site'
const fullPage = process.argv[4] === 'full'

const viewports = [
  { nome: 'desktop', width: 1440, height: 900 },
  { nome: 'mobile', width: 390, height: 844 },
]

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  args: ['--hide-scrollbars'],
})

for (const vp of viewports) {
  const page = await browser.newPage()
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 })
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluate(() => document.fonts.ready)
  await new Promise((r) => setTimeout(r, 1800))
  const out = path.join(dir, 'out', `${prefixo}-${vp.nome}.png`)
  await page.screenshot({ path: out, fullPage })
  console.log('ok', `${prefixo}-${vp.nome}.png`)
  await page.close()
}

await browser.close()
