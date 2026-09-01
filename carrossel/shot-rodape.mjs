/*
 * Screenshot do rodapé inteiro, desktop e mobile, e conferência dos links de
 * blog que ele publica. O rodapé aparece em toda página do site, então é por
 * ele que cada matéria recebe link interno de página já rastreada: quando um
 * post entra ou sai, vale conferir aqui.
 * Uso: CHROME_PATH=... node shot-rodape.mjs <url>
 */
import puppeteer from 'puppeteer-core'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const dir = path.dirname(fileURLToPath(import.meta.url))
const url = process.argv[2]
const b = await puppeteer.launch({executablePath:process.env.CHROME_PATH, headless:'new', args:['--no-sandbox','--disable-dev-shm-usage','--hide-scrollbars']})
for (const [nome,w,h] of [['desktop',1440,900],['mobile',390,900]]) {
  const p = await b.newPage()
  await p.setViewport({width:w,height:h})
  await p.goto(url,{waitUntil:'networkidle0'})
  await new Promise(r=>setTimeout(r,1200))
  const el = await p.$('footer')
  await el.evaluate(e=>e.scrollIntoView())
  await new Promise(r=>setTimeout(r,600))
  const info = await p.evaluate(()=>({
    overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    linksBlog: Array.from(document.querySelectorAll('footer a[href*="/blog/"]')).map(a=>a.getAttribute('href')),
  }))
  console.log(nome, JSON.stringify(info))
  await el.screenshot({path: path.join(dir,'out',`rodape2-${nome}.png`)})
  await p.close()
}
await b.close()
