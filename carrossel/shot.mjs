import puppeteer from 'puppeteer-core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const htmlFile = process.argv[2] || 'slides.html'
const prefix = process.argv[3] || ''

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  args: ['--force-device-scale-factor=1', '--hide-scrollbars'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 })
await page.goto('file:///' + path.join(dir, htmlFile).replace(/\\/g, '/'), {
  waitUntil: 'networkidle0',
  timeout: 60000,
})
await page.evaluate(() => document.fonts.ready)
await new Promise((r) => setTimeout(r, 500))

const slides = await page.$$('.slide')
for (let i = 0; i < slides.length; i++) {
  const box = await slides[i].boundingBox()
  const name = prefix + String(i + 1).padStart(2, '0') + '.png'
  await page.screenshot({ path: path.join(dir, 'out', name), clip: box })
  console.log('ok', name)
}

await browser.close()
