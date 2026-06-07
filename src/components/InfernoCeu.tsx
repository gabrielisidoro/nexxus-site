import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Sparkles, Check, X } from 'lucide-react'
import { inferno, ceu } from '@/data/metodo'
import { cn } from '@/lib/cn'

type Mode = 'inferno' | 'ceu'

/** Toggle interativo: a operação no improviso (inferno) × estruturada (céu). */
export function InfernoCeu() {
  const [mode, setMode] = useState<Mode>('ceu')
  const isCeu = mode === 'ceu'
  const items = isCeu ? ceu : inferno

  return (
    <div className="mx-auto max-w-3xl">
      {/* Toggle */}
      <div className="mx-auto mb-8 flex w-full max-w-md items-center rounded-full border border-ink-100 bg-white p-1.5 shadow-card">
        <button
          type="button"
          onClick={() => setMode('inferno')}
          aria-pressed={!isCeu}
          className={cn(
            'flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300',
            !isCeu ? 'bg-red-500 text-white shadow' : 'text-ink-500 hover:text-ink-700',
          )}
        >
          <Flame className="h-4 w-4" aria-hidden="true" />
          No improviso
        </button>
        <button
          type="button"
          onClick={() => setMode('ceu')}
          aria-pressed={isCeu}
          className={cn(
            'flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300',
            isCeu ? 'bg-brand-500 text-white shadow' : 'text-ink-500 hover:text-ink-700',
          )}
        >
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Com a Nexxus
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cn(
            'rounded-3xl border p-6 sm:p-8',
            isCeu ? 'border-brand-100 bg-brand-50/50' : 'border-red-100 bg-red-50/50',
          )}
        >
          <div className="mb-6 flex items-center gap-3">
            <span
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-2xl text-white',
                isCeu ? 'bg-brand-500' : 'bg-red-500',
              )}
            >
              {isCeu ? (
                <Sparkles className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Flame className="h-6 w-6" aria-hidden="true" />
              )}
            </span>
            <div>
              <p
                className={cn(
                  'text-xs font-semibold uppercase tracking-wider',
                  isCeu ? 'text-brand-600' : 'text-red-500',
                )}
              >
                {isCeu ? 'Operação estruturada' : 'Comercial no improviso'}
              </p>
              <p className="font-display text-xl font-bold text-ink-900">
                {isCeu ? 'Vender com método, dados e escala' : 'Vender sem previsibilidade nem controle'}
              </p>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={cn(
                    'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white',
                    isCeu ? 'bg-brand-500' : 'bg-red-500',
                  )}
                >
                  {isCeu ? (
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </span>
                <span className="text-sm leading-relaxed text-ink-600">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
