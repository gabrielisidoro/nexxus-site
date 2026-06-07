import { Play } from 'lucide-react'
import { cn } from '@/lib/cn'

interface VideoPlaceholderProps {
  label?: string
  /** quando tiver o vídeo, passe o caminho do .mp4 aqui */
  src?: string | null
  /** imagem de capa enquanto o vídeo não carrega (opcional) */
  poster?: string
  className?: string
  rounded?: string
  /** proporção do bloco (padrão: vertical de celular) */
  ratioClass?: string
}

/**
 * Mostra o vídeo real quando `src` (.mp4) é passado. Sem `src`, mostra um
 * bloco escuro de marca marcado para troca.
 */
export function VideoPlaceholder({
  label = 'vídeo da fachada do escritório',
  src,
  poster,
  className,
  rounded = 'rounded-3xl',
  ratioClass = 'aspect-[9/16]',
}: VideoPlaceholderProps) {
  return (
    <div className={cn('relative overflow-hidden', ratioClass, rounded, className)}>
      {src ? (
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center border border-ink-800/60 bg-gradient-to-br from-ink-900 via-ink-950 to-black">
          <div className="absolute inset-0 bg-grid-ink opacity-[0.15] [background-size:22px_22px]" />
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white shadow-glow">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
              <Play className="relative ml-0.5 h-7 w-7 fill-white" aria-hidden="true" />
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/20">
              Substituir vídeo
            </span>
            <p className="max-w-[16rem] text-sm font-medium text-white/70">{label}</p>
          </div>
        </div>
      )}
    </div>
  )
}
