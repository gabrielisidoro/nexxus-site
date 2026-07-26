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
  /** Tabela comparativa. Rola na horizontal no celular. */
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }

/** Pergunta e resposta do bloco de dúvidas frequentes, vira FAQPage no JSON-LD. */
export interface PostFaq {
  pergunta: string
  resposta: string
}

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
  /**
   * Capa exibida no site, proporção 3/2, a mesma do componente PostCover.
   * Deve ser só foto: o card já mostra título e categoria, e texto gravado na
   * imagem quebra em qualquer recorte. Use null para o placeholder de marca.
   */
  cover: string | null
  /**
   * Cartão social 1200x630 com o título gravado, usado em og:image. Aqui o
   * texto na imagem faz sentido, porque no WhatsApp e no LinkedIn não existe
   * card com texto ao lado. Sem isto, cai para `cover`.
   */
  ogImage?: string
  /** palavras-chave alvo do post, usadas em meta keywords e no JSON-LD */
  keywords?: string[]
  content: PostBlock[]
  /** Dúvidas frequentes: renderizadas no fim do post e enviadas como FAQPage. */
  faq?: PostFaq[]
}
