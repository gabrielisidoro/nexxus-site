// Monta slides-blog-covers.build.html a partir de slides-blog-covers.html:
// embute o logo e as fontes de fontes/ como data URI. O Chrome bloqueia fonte
// carregada de file://, e o shot-covers.mjs abre o arquivo por file://.
// Sem isto, o titulo do cartao social sai com fonte de sistema.
//
// Uso: node montar-capas.mjs && node shot-covers.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const fonte = path.join(dir, 'slides-blog-covers.html')
const destino = path.join(dir, 'slides-blog-covers.build.html')

const dataUri = (arquivo, tipo) =>
  `data:${tipo};base64,${readFileSync(path.join(dir, arquivo)).toString('base64')}`

let html = readFileSync(fonte, 'utf8')
if (!html.includes('__LOGO_URI__')) throw new Error('slides-blog-covers.html sem o marcador __LOGO_URI__')
html = html.replaceAll('__LOGO_URI__', dataUri('logo-nexxus.png', 'image/png'))

let fontes = 0
html = html.replace(/url\('(fontes\/[^']+\.woff2)'\)/g, (_, arquivo) => {
  fontes += 1
  return `url('${dataUri(arquivo, 'font/woff2')}')`
})
if (fontes === 0) throw new Error('nenhuma fonte de fontes/ encontrada no slides-blog-covers.html')

writeFileSync(destino, html)
console.log(`ok slides-blog-covers.build.html (${fontes} fontes e o logo embutidos)`)
