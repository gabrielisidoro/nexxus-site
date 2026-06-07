import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { Post } from '@/data/posts'
import { formatDate } from '@/data/posts'
import { PostCover } from './PostCover'
import { cn } from '@/lib/cn'

interface BlogCardProps {
  post: Post
  className?: string
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={cn('card card-hover group flex flex-col overflow-hidden', className)}
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-[1.04]">
          <PostCover post={post} ratio="wide" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-600 shadow-sm backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-ink-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingMinutes} min
          </span>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-brand-600">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 line-clamp-3">
          {post.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          Ler matéria
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
