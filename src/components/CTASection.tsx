import { ArrowRight } from 'lucide-react'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { site } from '@/data/site'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

/** Faixa de chamada para ação (fundo escuro de marca) reutilizável. */
export function CTASection({
  title = 'Pronto para parar de vender no improviso?',
  subtitle = 'Comece por um diagnóstico comercial gratuito. Em uma conversa, mostramos onde está o gargalo e o potencial real de escala da sua operação.',
}: CTASectionProps) {
  return (
    <section className="container-nx py-16 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-900 via-ink-900 to-brand-900 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-20">
          {/* brilhos decorativos */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-[0.07] [background-size:26px_26px]" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="heading text-balance text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-white/70">{subtitle}</p>

            <div className="mt-9 flex justify-center">
              <Button to="/contato" variant="white" size="lg">
                Solicitar diagnóstico gratuito
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/50">{site.responseTime}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
