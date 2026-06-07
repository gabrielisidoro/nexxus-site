import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  className?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      id={id}
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <span className={cn('eyebrow', align === 'center' && 'mx-auto')}>{eyebrow}</span>
      )}
      <h2 className="heading text-balance text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-balance text-lg leading-relaxed text-ink-500">{subtitle}</p>
      )}
    </div>
  )
}
