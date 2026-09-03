/* ============================================================================
 *  ÍNDICE DO BLOG
 *  Para adicionar uma matéria nova:
 *    1. crie um arquivo em /src/data/posts (copie um existente como base)
 *    2. importe aqui e adicione ao array `allPosts`
 *  O resto (listagem, ordenação, página do post) acontece automaticamente.
 * ========================================================================== */

import type { Post } from './types'
import { post as p1 } from './por-que-terceirizar-operacao-comercial'
import { post as p2 } from './terceirizar-ou-estruturar-comercial-interno'
import { post as p3 } from './tendencias-mercado-comercial-b2b'
import { post as p4 } from './quanto-custa-terceirizar-time-de-vendas'
import { post as p5 } from './quantas-reunioes-sdr-por-mes'
import { post as p6 } from './quanto-tempo-terceirizacao-comercial-da-resultado'
import { post as p7 } from './o-que-conta-como-reuniao-qualificada'

export type { Post, PostBlock, PostFaq } from './types'

const registered: Post[] = [p1, p2, p3, p4, p5, p6, p7]

/** Todos os posts, ordenados do mais recente para o mais antigo */
export const allPosts: Post[] = [...registered].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)

export function getPost(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug)
}

/** Posts recentes (para a prévia na home) */
export function recentPosts(limit = 3): Post[] {
  return allPosts.slice(0, limit)
}

/** Sugestões de leitura (exclui o post atual) */
export function relatedPosts(currentSlug: string, limit = 2): Post[] {
  return allPosts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}

/** Formata a data ISO para exibição em pt-BR */
export function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
