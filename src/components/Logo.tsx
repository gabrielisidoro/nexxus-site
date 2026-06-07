import logo from '@/assets/logo-nexxus.png'
import { cn } from '@/lib/cn'

interface LogoProps {
  /** 'color' = logo original (fundo claro) · 'white' = versão branca (fundo escuro) */
  variant?: 'color' | 'white'
  className?: string
}

/**
 * Logo oficial da Nexxus.
 * - variant="color": usa a imagem original em cores (header, fundos claros).
 * - variant="white": renderiza a mesma arte em branco sólido via máscara CSS,
 *   herdando a cor do texto (currentColor) — ideal para o footer escuro.
 *
 * Para trocar pelo arquivo definitivo, basta substituir /src/assets/logo-nexxus.png.
 */
export function Logo({ variant = 'color', className }: LogoProps) {
  if (variant === 'white') {
    return (
      <span
        role="img"
        aria-label="Nexxus"
        className={cn('inline-block w-auto text-white', className)}
        style={{
          aspectRatio: '2048 / 482',
          backgroundColor: 'currentColor',
          WebkitMaskImage: `url(${logo})`,
          maskImage: `url(${logo})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      />
    )
  }

  return (
    <img
      src={logo}
      alt="Nexxus"
      className={cn('w-auto select-none', className)}
      style={{ aspectRatio: '2048 / 482' }}
      draggable={false}
    />
  )
}
