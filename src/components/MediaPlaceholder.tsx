import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

type Ratio = 'video' | 'portrait' | 'square' | 'wide' | 'tall'

const ratioClass: Record<Ratio, string> = {
  video: 'aspect-video', // 16:9
  wide: 'aspect-[3/2]',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  tall: 'aspect-[3/4]',
}

interface MediaPlaceholderProps {
  /** descrição curta do que vai aqui, ex.: "foto do escritório" */
  label?: string
  /** quando você tiver a imagem, passe o caminho aqui e o placeholder some */
  src?: string | null
  alt?: string
  ratio?: Ratio
  className?: string
  rounded?: string
}

/**
 * Mostra a imagem real (com lazy loading) quando `src` é passado, recortada na
 * proporção escolhida. Sem `src`, mostra um bloco de marca marcado para troca.
 */
export function MediaPlaceholder({
  label = 'imagem',
  src,
  alt,
  ratio = 'video',
  className,
  rounded = 'rounded-3xl',
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn('relative overflow-hidden', ratioClass[ratio], rounded, className)}
      role={src ? undefined : 'img'}
      aria-label={src ? undefined : `Espaço reservado para ${label}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? label}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100/60">
          <div className="absolute inset-0 bg-grid-ink opacity-60 [background-size:22px_22px]" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/40 blur-2xl" />
          <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-card">
              <ImageIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Substituir
            </span>
            <p className="max-w-[18rem] text-sm font-medium text-ink-500">{label}</p>
          </div>
        </div>
      )}
    </div>
  )
}
