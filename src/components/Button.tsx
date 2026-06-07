import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'outline' | 'ghost' | 'white'
type Size = 'md' | 'lg'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-500 text-white shadow-glow hover:bg-brand-600 hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border border-ink-200 bg-white text-ink-800 hover:border-brand-300 hover:text-brand-600 hover:-translate-y-0.5',
  ghost: 'text-ink-700 hover:bg-ink-50 hover:text-brand-600',
  white:
    'bg-white text-ink-900 shadow-soft hover:bg-brand-50 hover:text-brand-700 hover:-translate-y-0.5',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps &
  (
    | { to: string; href?: never; onClick?: never; type?: never }
    | { href: string; to?: never; onClick?: never; type?: never }
    | { onClick?: () => void; type?: 'button' | 'submit'; to?: never; href?: never }
  )

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const external = /^https?:|^mailto:|^tel:/.test(props.href)
    return (
      <a
        href={props.href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={'type' in props && props.type ? props.type : 'button'}
      onClick={'onClick' in props ? props.onClick : undefined}
      className={classes}
    >
      {children}
    </button>
  )
}
