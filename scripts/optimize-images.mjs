/**
 * Otimiza as imagens do escritório: converte .jpg/.png em .webp (redimensionado
 * e comprimido) e remove o arquivo original. Rode com: npm run optimize:images
 *
 * Para otimizar novas imagens, basta colocá-las em src/assets/escritorio/ e
 * rodar o script novamente.
 */
import sharp from 'sharp'
import { readdir, stat, unlink } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = fileURLToPath(new URL('../src/assets/escritorio', import.meta.url))
const MAX_WIDTH = 1600
const QUALITY = 80
const EXTS = ['.jpg', '.jpeg', '.png']

const files = await readdir(dir)
let total = 0
let saved = 0

for (const file of files) {
  const ext = extname(file).toLowerCase()
  if (!EXTS.includes(ext)) continue

  const input = join(dir, file)
  const output = join(dir, basename(file, ext) + '.webp')

  const meta = await sharp(input).metadata()
  const before = (await stat(input)).size

  await sharp(input)
    .rotate() // respeita a orientação EXIF (fotos de celular)
    .resize({ width: Math.min(MAX_WIDTH, meta.width ?? MAX_WIDTH), withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output)

  const after = (await stat(output)).size
  total += before
  saved += before - after

  console.log(
    `${file}  →  ${basename(output)}   ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB   (${meta.width}×${meta.height})`,
  )

  await unlink(input)
}

console.log(
  `\nConcluído. Economia total: ${(saved / 1024).toFixed(0)}KB de ${(total / 1024).toFixed(0)}KB.`,
)
