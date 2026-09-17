import puppeteer from 'puppeteer-core'
const url = process.argv[2]
const out = process.argv[3]
const browser = await puppeteer.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  headless: 'new',
  args: ['--hide-scrollbars', '--no-sandbox', '--disable-dev-shm-usage'],
})
for (const v of [{ n: 'desktop', w: 1440, h: 1100 }, { n: 'mobile', w: 390, h: 800 }]) {
  const page = await browser.newPage()
  await page.setViewport({ width: v.w, height: v.h })
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  await new Promise((r) => setTimeout(r, 1200))
  const n = await page.evaluate(() => document.querySelectorAll('table').length)
  const overflow = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
  }))
  console.log(`${v.n}: ${n} tabelas | scrollWidth=${overflow.scrollW} clientWidth=${overflow.clientW} -> ${overflow.scrollW > overflow.clientW ? 'ESTOUROU A PAGINA' : 'ok, pagina nao rola na horizontal'}`)
  for (let i = 0; i < n; i++) {
    await page.evaluate((i) => {
      const t = document.querySelectorAll('table')[i]
      t.scrollIntoView({ block: 'center' })
    }, i)
    await new Promise((r) => setTimeout(r, 600))
    await page.screenshot({ path: `/home/user/nexxus-site/carrossel/out/${out}-tab${i + 1}-${v.n}.png` })
    console.log(`  ok ${out}-tab${i + 1}-${v.n}.png`)
  }
  await page.close()
}
await browser.close()
