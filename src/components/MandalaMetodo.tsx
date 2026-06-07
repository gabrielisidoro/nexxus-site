import { useState } from 'react'
import { pillars } from '@/data/metodo'
import { iconMap } from './iconMap'
import { cn } from '@/lib/cn'

/**
 * "Mandala" do Método Nexxus — 6 pilares interligados.
 * Desktop: roda circular interativa + lista. Mobile: lista interativa.
 */
export function MandalaMetodo() {
  const [active, setActive] = useState(0)
  const current = pillars[active]
  const ActiveIcon = iconMap[current.icon]

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Roda circular — somente desktop */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[460px] lg:block">
        <div className="absolute inset-0 rounded-full border border-dashed border-brand-200" />
        <div className="absolute inset-[15%] rounded-full border border-brand-100" />

        {/* Hub central */}
        <div className="absolute left-1/2 top-1/2 flex aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-500 p-6 text-center text-white shadow-glow">
          <ActiveIcon className="h-8 w-8" aria-hidden="true" />
          <span className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            Pilar {current.n}
          </span>
          <span className="mt-1 font-display text-lg font-bold leading-tight">
            {current.title}
          </span>
        </div>

        {/* Nós ao redor */}
        {pillars.map((p, i) => {
          const angle = ((-90 + i * 60) * Math.PI) / 180
          const r = 41
          const x = 50 + r * Math.cos(angle)
          const y = 50 + r * Math.sin(angle)
          const Icon = iconMap[p.icon]
          const isActive = i === active
          return (
            <button
              key={p.n}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-label={p.title}
              className={cn(
                'absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border bg-white transition-all duration-300',
                isActive
                  ? 'scale-110 border-brand-500 text-brand-600 shadow-glow'
                  : 'border-ink-100 text-ink-400 shadow-card hover:-translate-y-1 hover:text-brand-500',
              )}
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          )
        })}
      </div>

      {/* Lista interativa — todos os tamanhos */}
      <div className="flex flex-col gap-3">
        {pillars.map((p, i) => {
          const Icon = iconMap[p.icon]
          const isActive = i === active
          return (
            <button
              key={p.n}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={cn(
                'group flex items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300',
                isActive
                  ? 'border-brand-200 bg-brand-50/70 shadow-card'
                  : 'border-ink-100 bg-white hover:border-brand-100',
              )}
            >
              <span
                className={cn(
                  'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300',
                  isActive ? 'bg-brand-500 text-white' : 'bg-ink-50 text-ink-500',
                )}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="flex items-center gap-2">
                  <span className="text-xs font-bold text-brand-500">{p.n}</span>
                  <span className="font-display font-bold text-ink-900">{p.title}</span>
                </span>
                <span className="mt-0.5 text-sm leading-relaxed text-ink-500">
                  {p.description}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
