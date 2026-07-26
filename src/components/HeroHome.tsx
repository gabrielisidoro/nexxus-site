import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { office } from '@/assets/escritorio'

/* ============================================================================
 *  HERO DA HOME
 *  Direção: editorial impresso, não SaaS. Fundo papel, grade de fios visível,
 *  tipografia como protagonista, foto real em retângulo reto sangrando na
 *  borda e uma faixa de números fechando a seção. Sem glow, sem gradiente de
 *  fundo, sem cartão de vidro flutuando: são esses os vícios que dão ao site
 *  aparência de template gerado por IA.
 * ========================================================================== */

const EASE = [0.22, 1, 0.36, 1] as const

/** Revela a linha por máscara, como um título sendo impresso. */
function Linha({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: '106%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

const numeros = [
  { valor: '20', unidade: 'dias', label: 'para a operação no ar' },
  { valor: '80', unidade: '%', label: 'das vendas do 5º ao 12º contato' },
  { valor: '3', unidade: 'papéis', label: 'SDR, Hunter e Closer' },
  { valor: 'SP', unidade: '', label: 'estrutura física no Morumbi' },
]

const FOTO_ALT = 'Equipe da Nexxus operando o comercial no escritório em São Paulo'
const FOTO_CLASSE = 'h-full w-full object-cover object-[38%_center] saturate-[.72] contrast-[1.06]'

export function HeroHome() {
  return (
    <section className="relative isolate bg-paper text-ink-900">
      {/* Área de conteúdo. A margem negativa sobe por trás do cabeçalho
          transparente, para o papel e a foto encostarem no topo da página. */}
      <div className="relative -mt-16 overflow-hidden pt-16 lg:-mt-20 lg:pt-20">
        {/* Fios verticais da grade editorial */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-content -translate-x-1/2 px-5 sm:px-6 lg:block lg:px-8"
        >
          <div className="grid h-full grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-ink-900/[0.06]" />
            ))}
          </div>
        </div>

        {/* Foto: coluna à direita, canto reto, sangrando na borda */}
        <motion.div
          className="absolute inset-y-0 right-0 hidden w-[38%] lg:block"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <img src={office.equipeOperacao} alt={FOTO_ALT} className={FOTO_CLASSE} />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
          <div className="absolute inset-0 bg-brand-950/[0.12]" />
        </motion.div>

        <div className="relative container-nx">
          <div className="lg:grid lg:grid-cols-12">
            <div className="py-14 sm:py-20 lg:col-span-7 lg:py-28 xl:py-32">
              {/* Kicker numerado */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <span className="font-display text-xs font-bold tabular-nums text-brand-600">01</span>
                <span className="h-px w-10 bg-ink-900/25" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Estruturação comercial completa
                </span>
              </motion.div>

              {/* Manchete */}
              <h1 className="mt-7 font-display text-[2.5rem] font-black leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-[4.2rem] xl:text-[4.9rem]">
                <Linha delay={0.1}>Pare de vender</Linha>
                <Linha delay={0.2}>no improviso.</Linha>
                <Linha delay={0.3}>
                  <span className="text-brand-600">Escale com método.</span>
                </Linha>
              </h1>

              <motion.p
                className="mt-7 max-w-lg text-lg leading-[1.65] text-ink-600 sm:text-xl"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              >
                A Nexxus assume a operação comercial da sua empresa com time dedicado, processo
                documentado e gestão por dados. Você acompanha os números, não apaga incêndio.
              </motion.p>

              {/* Ações */}
              <motion.div
                className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.68, ease: EASE }}
              >
                <Link
                  to="/contato"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink-900 px-7 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-brand-600 sm:px-8"
                >
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/servicos"
                  className="group inline-flex items-center gap-2 border-b border-ink-900/25 pb-0.5 text-base font-semibold text-ink-700 transition-colors duration-300 hover:border-brand-600 hover:text-brand-600"
                >
                  Ver os serviços
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Foto no mobile: banda cheia, canto reto */}
        <div className="relative h-64 sm:h-80 lg:hidden">
          <img src={office.equipeOperacao} alt={FOTO_ALT} className={FOTO_CLASSE} />
          <div className="absolute inset-0 bg-brand-950/[0.12]" />
        </div>
      </div>

      {/* Faixa de números, separada por fios */}
      <motion.div
        className="relative border-t border-ink-900/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="container-nx">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {numeros.map((n, i) => (
              <div
                key={n.label}
                className={[
                  'py-6 sm:py-7',
                  // mobile: fio à esquerda na coluna 2 e fio no topo da linha 2
                  i % 2 === 1 ? 'border-l border-ink-900/10 pl-5 sm:pl-6' : 'pr-5 sm:pr-6',
                  i >= 2 ? 'border-t border-ink-900/10 lg:border-t-0' : '',
                  // desktop: fio à esquerda em todas menos a primeira
                  'lg:pl-6 lg:pr-6 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-ink-900/10 lg:first:pl-0',
                ].join(' ')}
              >
                <dt className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-[1.75rem]">
                  {n.valor}
                  {n.unidade && (
                    <span className="ml-1 text-base font-bold text-brand-600">{n.unidade}</span>
                  )}
                </dt>
                <dd className="mt-1 text-[0.82rem] leading-snug text-ink-500">{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  )
}
