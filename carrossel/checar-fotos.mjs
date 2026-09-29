// Trava contra capa repetida no blog. Le as capas (.cover) do
// slides-blog-covers.html e o cadastro img/global/fotos.json, e mostra quantas
// capas usam cada foto e cada ambiente do escritorio.
//
// Falha (exit 1) se uma foto for usada por mais capas do que o cadastro
// permite: 1 para foto nova, ou a contagem registrada em
// "repeticoes_conhecidas" para as que ja estavam repetidas antes da trava.
// Tambem falha se uma capa usar foto que nao esta no cadastro.
//
// Uso: node checar-fotos.mjs
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const html = readFileSync(path.join(dir, 'slides-blog-covers.html'), 'utf8')
const cadastro = JSON.parse(readFileSync(path.join(dir, 'img', 'global', 'fotos.json'), 'utf8'))

const capas = []
const bloco = /<div class="cover" data-slug="([^"]+)">\s*<div class="photo" style="background-image:url\('img\/global\/([^']+)'\);\s*background-position:center (\d+)%;/g
for (const m of html.matchAll(bloco)) capas.push({ slug: m[1], foto: m[2], y: Number(m[3]) })

const totalCovers = (html.match(/<div class="cover"/g) || []).length
const erros = []
if (capas.length !== totalCovers) {
  erros.push(`${totalCovers} blocos .cover, mas so ${capas.length} no formato esperado (foto de img/global/ e background-position:center <y>%).`)
}

const usoFoto = {}
const usoAmbiente = {}
for (const c of capas) {
  const info = cadastro.fotos[c.foto]
  if (!info) {
    erros.push(`capa "${c.slug}" usa ${c.foto}, que nao esta em img/global/fotos.json`)
    continue
  }
  ;(usoFoto[c.foto] ||= []).push(`${c.slug} (${c.y}%)`)
  ;(usoAmbiente[info.ambiente] ||= []).push(c.slug)
}

console.log('Capas por foto:')
for (const [foto, info] of Object.entries(cadastro.fotos)) {
  const usos = usoFoto[foto] || []
  const limite = cadastro.repeticoes_conhecidas[foto] || 1
  const marca = usos.length === 0 ? 'LIVRE' : usos.length > limite ? 'ERRO ' : '     '
  console.log(`  ${marca} ${foto.padEnd(26)} ${String(usos.length)} [${info.ambiente}] ${usos.join(', ')}`)
  if (usos.length > limite) {
    erros.push(`${foto} esta em ${usos.length} capas e o limite dela e ${limite}: ${usos.join(', ')}`)
  }
}

console.log('\nCapas por ambiente (o mesmo ambiente em duas fotos ainda le como repeticao no /blog):')
for (const [ambiente, slugs] of Object.entries(usoAmbiente).sort((a, b) => a[1].length - b[1].length)) {
  console.log(`  ${String(slugs.length)} ${ambiente}: ${slugs.join(', ')}`)
}
const livres = Object.keys(cadastro.fotos).filter((f) => !usoFoto[f])
const semUso = [...new Set(livres.map((f) => cadastro.fotos[f].ambiente))].filter((a) => !usoAmbiente[a])
console.log(`\nFotos livres: ${livres.join(', ') || 'nenhuma'}`)
console.log(`Ambientes ainda sem capa: ${semUso.join(', ') || 'nenhum'}`)

if (erros.length) {
  console.log('\nREPROVADO:')
  for (const e of erros) console.log('  - ' + e)
  process.exit(1)
}
console.log('\nOK: nenhuma foto acima do limite.')
