import { Rocket, Target, LineChart, Newspaper, type LucideIcon } from 'lucide-react'
import type { Post } from '@/data/posts'
import { cn } from '@/lib/cn'

const ratioClass = {
  wide: 'aspect-[3/2]',
  video: 'aspect-video',
} as const

const categoryIcon: Record<string, LucideIcon> = {
  Terceirização: Rocket,
  Estratégia: Target,
  'Mercado B2B': LineChart,
}

interface PostCoverProps {
  post: Post
  ratio?: keyof typeof ratioClass
  rounded?: string
  className?: string
}

/**
 * Capa da matéria: usa a imagem real (`post.cover`) quando existir; senão,
 * gera uma capa de marca (gradiente + ícone da categoria + marca Nexxus).
 */
export function PostCover({ post, ratio = 'wide', rounded = 'rounded-none', className }: PostCoverProps) {
  if (post.cover) {
    return (
      <div className={cn('relative overflow-hidden', ratioClass[ratio], rounded, className)}>
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    )
  }

  const Icon = categoryIcon[post.category] ?? Newspaper

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-ink-950',
        ratioClass[ratio],
        rounded,
        className,
      )}
      role="img"
      aria-label={post.category}
    >
      <div className="absolute inset-0 bg-grid-ink opacity-[0.12] [background-size:24px_24px]" />
      <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-brand-400/30 blur-2xl" />

      {/* marca "nx" grande, esmaecida */}
      <svg
        className="absolute -bottom-5 -right-3 h-36 w-36 text-white/10"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 45 V31 a7 7 0 0 1 14 0 V38" />
        <path d="M32 27 L45 45" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur">
          <Icon className="h-8 w-8" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}
