import puppeteer from 'puppeteer-core'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const dir = path.dirname(fileURLToPath(import.meta.url))
const [url, prefixo, seletor, desloc] = [process.argv[2], process.argv[3], process.argv[4], Number(process.argv[5] || 120)]
const browser = await puppeteer.launch({
  executablePath: '/opt/pw-browsers/chromium',
  headless: 'new', protocolTimeout: 180000,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
})
for (const v of [{ n: 'desktop', w: 1440, h: 1400 }, { n: 'mobile', w: 390, h: 900 }]) {
  const page = await browser.newPage()
  await page.setViewport({ width: v.w, height: v.h, deviceScaleFactor: 1 })
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluate(() => document.fonts.ready)
  const achou = await page.evaluate((sel, d) => {
    const el = document.querySelector(sel)
    if (!el) return false
    window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - d)
    return true
  }, seletor, desloc)
  if (!achou) { console.log('ALVO NAO ENCONTRADO:', seletor, v.n); await page.close(); continue }
  await new Promise((r) => setTimeout(r, 3000))
  const quebradas = await page.evaluate(() =>
    Array.from(document.images).filter((i) => {
      const r = i.getBoundingClientRect()
      return r.bottom > 0 && r.top < innerHeight && (!i.complete || i.naturalWidth === 0)
    }).map((i) => i.currentSrc || i.src))
  const rolaH = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  await page.screenshot({ path: path.join(dir, 'out', `${prefixo}-${v.n}.png`) })
  console.log('ok', `${prefixo}-${v.n}.png`, '| img quebradas:', quebradas.length, '| rolagem horizontal da pagina:', rolaH)
  await page.close()
}
await browser.close()
