/* ============================================================================
 *  TIPOS DO BLOG  —  estrutura de cada matéria.
 *  Para criar um post novo: copie um arquivo em /src/data/posts, ajuste o
 *  conteúdo e importe no index.ts. As datas usam o formato ISO (AAAA-MM-DD).
 * ========================================================================== */

export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }

export interface Post {
  /** vira a URL: /blog/<slug> */
  slug: string
  title: string
  excerpt: string
  /** data de publicação, formato AAAA-MM-DD */
  date: string
  /** data da última revisão, formato AAAA-MM-DD (opcional) */
  updated?: string
  readingMinutes: number
  category: string
  /** caminho da imagem de capa ou null para usar o placeholder de marca */
  cover: string | null
  /** palavras-chave alvo do post, usadas em meta keywords e no JSON-LD */
  keywords?: string[]
  content: PostBlock[]
}
