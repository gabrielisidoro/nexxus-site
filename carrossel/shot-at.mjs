/*
 * Screenshot em posição de rolagem exata, uma por viewport.
 * Uso: CHROME_PATH=... node shot-at.mjs <url> <prefixo> <yDesktop> <yMobile>
 * Existe porque o check-post.mjs deriva o scroll do mobile multiplicando o do
 * desktop por 1,3, e isso erra o alvo quando o bloco a conferir é uma tabela:
 * a altura do texto no celular não escala junto. Aqui cada viewport recebe a
 * sua própria coordenada, medida antes no DOM.
 */
import puppeteer from 'puppeteer-core'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const dir = path.dirname(fileURLToPath(import.meta.url))
const [url, prefixo, yDesk, yMob] = process.argv.slice(2)
const b = await puppeteer.launch({executablePath:process.env.CHROME_PATH, headless:'new', args:['--no-sandbox','--disable-dev-shm-usage','--hide-scrollbars']})
for (const [nome,w,h,y] of [['desktop',1440,1250,Number(yDesk)],['mobile',390,900,Number(yMob)]]) {
  const p = await b.newPage()
  await p.setViewport({width:w,height:h})
  await p.goto(url,{waitUntil:'networkidle0'})
  await new Promise(r=>setTimeout(r,1200))
  await p.evaluate(y=>window.scrollTo(0,y), y)
  await new Promise(r=>setTimeout(r,800))
  await p.screenshot({path: path.join(dir,'out',`${prefixo}-${nome}.png`)})
  console.log('ok', `${prefixo}-${nome}.png`)
  await p.close()
}
await b.close()
