import { User } from 'lucide-react'
import { cn } from '@/lib/cn'

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return ''
  const first = parts[0][0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

interface TeamAvatarProps {
  name: string
  photo: string | null
  className?: string
}

/**
 * Avatar do integrante: foto se houver; senão, iniciais (nome real) ou um
 * ícone (vaga a definir). Evita placeholders "vazios" quando não há foto.
 */
export function TeamAvatar({ name, photo, className }: TeamAvatarProps) {
  const isPlaceholder = name.trim().startsWith('[')

  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        decoding="async"
        className={cn('h-full w-full object-cover', className)}
      />
    )
  }

  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 text-white',
        className,
      )}
      aria-hidden="true"
    >
      {isPlaceholder ? (
        <User className="h-8 w-8 opacity-90" />
      ) : (
        <span className="font-display text-xl font-extrabold tracking-wide">
          {getInitials(name)}
        </span>
      )}
    </div>
  )
}
