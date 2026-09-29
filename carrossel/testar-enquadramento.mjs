// Folha de enquadramentos de uma foto do banco, para escolher o
// background-position da capa (.cover, 3/2) e do cartao social (.og, 1200x630)
// antes de mexer no slides-blog-covers.html.
//
// Uso: node testar-enquadramento.mjs img/global/equipe-janela.webp [10,20,...]
// Saida: out/enquadramento-<foto>.jpg, cada recorte rotulado com o y% que o
// gerou, na mesma conta do CSS: background-size:cover com
// background-position:center <y>% corta a faixa que comeca em
// (altura da foto - altura da faixa) * y.
import sharp from '../node_modules/sharp/lib/index.js'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const foto = process.argv[2]
if (!foto) throw new Error('uso: node testar-enquadramento.mjs <foto> [posicoes em %, separadas por virgula]')
const posicoes = (process.argv[3] || '0,10,20,30,40,50,60,70,80,90,100').split(',').map(Number)

const FORMATOS = [
  { nome: 'capa 3/2', w: 1500, h: 1000, mostra: [420, 280] },
  { nome: 'og 1200x630', w: 1200, h: 630, mostra: [420, 220] },
]

const meta = await sharp(foto).metadata()
const blocos = []
let topo = 0
const largura = 4 * (420 + 12) + 12

const rotulo = (texto, w) =>
  Buffer.from(`<svg width="${w}" height="26"><rect width="100%" height="100%" fill="#111"/>` +
    `<text x="6" y="19" font-size="17" font-family="sans-serif" fill="#fff">${texto}</text></svg>`)

for (const formato of FORMATOS) {
  const escala = Math.max(formato.w / meta.width, formato.h / meta.height)
  const cw = Math.round(formato.w / escala)
  const ch = Math.round(formato.h / escala)
  const [mw, mh] = formato.mostra
  blocos.push({ input: rotulo(formato.nome + ' | ' + path.basename(foto), largura), top: topo, left: 0 })
  topo += 30
  for (let i = 0; i < posicoes.length; i++) {
    const y = posicoes[i]
    const left = Math.round((meta.width - cw) / 2)
    const top = Math.round((meta.height - ch) * (y / 100))
    const recorte = await sharp(foto).extract({ left, top, width: cw, height: ch }).resize(mw, mh).toBuffer()
    const col = i % 4
    const lin = Math.floor(i / 4)
    const x = 12 + col * (mw + 12)
    const yy = topo + lin * (mh + 34)
    blocos.push({ input: rotulo('center ' + y + '%', mw), top: yy, left: x })
    blocos.push({ input: recorte, top: yy + 26, left: x })
  }
  topo += Math.ceil(posicoes.length / 4) * (mh + 34) + 16
}

const saida = path.join(dir, 'out', 'enquadramento-' + path.parse(foto).name + '.jpg')
await sharp({ create: { width: largura, height: topo, channels: 3, background: '#1b1b1b' } })
  .composite(blocos)
  .jpeg({ quality: 82 })
  .toFile(saida)
console.log('ok', path.relative(dir, saida))
