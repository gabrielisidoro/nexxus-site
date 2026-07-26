import puppeteer from 'puppeteer-core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// Fatia um artboard panoramico (.board) em N janelas de 1080x1350, render 2x.
const dir = path.dirname(fileURLToPath(import.meta.url))
const htmlFile = process.argv[2] || 'slides.html'
const prefix = process.argv[3] || ''
const slides = parseInt(process.argv[4] || '7', 10)

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  args: ['--hide-scrollbars'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1080 * slides, height: 1350, deviceScaleFactor: 2 })
await page.goto('file:///' + path.join(dir, htmlFile).replace(/\\/g, '/'), {
  waitUntil: 'networkidle0',
  timeout: 60000,
})
await page.evaluate(() => document.fonts.ready)
await new Promise((r) => setTimeout(r, 800))

const board = await page.$('.board')
const box = await board.boundingBox()
for (let i = 0; i < slides; i++) {
  const name = prefix + String(i + 1).padStart(2, '0') + '.png'
  await page.screenshot({
    path: path.join(dir, 'out', name),
    clip: { x: box.x + i * 1080, y: box.y, width: 1080, height: 1350 },
  })
  console.log('ok', name)
}

await browser.close()
