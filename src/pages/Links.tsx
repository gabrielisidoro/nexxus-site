import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Globe, Rocket, Instagram, Linkedin, BookOpen, ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import logo from '@/assets/logo-nexxus.png'
import { office } from '@/assets/escritorio'

// ── Brand ─────────────────────────────────────────────────────────────────────
const BLUE = '#175eff'
const BG   = '#0a0a0a'
const EASE = [0.22, 1, 0.36, 1] as const

// ── Types ─────────────────────────────────────────────────────────────────────
type LinkDef = {
  id:          string
  label:       string
  subtitle:    string
  href:        string | null
  Icon:        LucideIcon
  bg:          string
  external?:   boolean
  comingSoon?: boolean
}

// ── Links data ────────────────────────────────────────────────────────────────
const LINKS: LinkDef[] = [
  {
    id:       'site',
    label:    'Site Institucional',
    subtitle: 'Estruturação Comercial Completa',
    href:     'https://nexxusagencia.com.br',
    Icon:     Globe,
    bg:       office.varandaSkyline,
    external: true,
  },
  {
    id:       'lp',
    label:    'Landing Page',
    subtitle: 'Diagnóstico Gratuito — Comece Agora',
    href:     '/lp',
    Icon:     Rocket,
    bg:       office.salaReuniao,
  },
  {
    id:       'instagram',
    label:    'Instagram',
    subtitle: '@nexxus.inc',
    href:     'https://www.instagram.com/nexxus.inc/',
    Icon:     Instagram,
    bg:       office.estudio,
    external: true,
  },
  {
    id:          'linkedin',
    label:       'LinkedIn',
    subtitle:    'Link em breve',
    href:        null,
    Icon:        Linkedin,
    bg:          office.corredor,
    comingSoon:  true,
  },
  {
    id:       'blog',
    label:    'Blog',
    subtitle: 'Conteúdo sobre Vendas e Crescimento',
    href:     'https://nexxusagencia.com.br/blog',
    Icon:     BookOpen,
    bg:       office.varandaSofa,
    external: true,
  },
]

// ── Shared framer variants ─────────────────────────────────────────────────────
const hoverCard  = { idle: {}, hovered: {} }
const hoverBgSm  = { idle: { scale: 1 }, hovered: { scale: 1.06 } }
const hoverGlow  = { idle: { opacity: 0 }, hovered: { opacity: 1 } }

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{ background: `linear-gradient(to bottom, ${BG}f8 0%, transparent 100%)` }}
    >
      <img src={logo} alt="Nexxus" className="h-8 w-auto" />
      <a
        href="https://nexxusagencia.com.br"
        target="_blank"
        rel="noreferrer"
        className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-600 hover:text-gray-300 transition-colors duration-200"
      >
        nexxusagencia.com.br
      </a>
    </motion.nav>
  )
}

// ── Featured hero card ─────────────────────────────────────────────────────────
function Featured({ link }: { link: LinkDef }) {
  return (
    <motion.a
      href={link.href!}
      target={link.external ? '_blank' : '_self'}
      rel={link.external ? 'noreferrer' : undefined}
      className="relative flex w-full overflow-hidden"
      style={{ height: 'clamp(330px, 54vh, 580px)', display: 'block' }}
      initial="idle"
      whileHover="hovered"
      variants={hoverCard}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${link.bg})` }}
        variants={{ idle: { scale: 1 }, hovered: { scale: 1.04 } }}
        transition={{ duration: 0.7, ease: EASE }}
      />

      {/* Cinematic gradient — left + bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right,  rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.55) 52%, rgba(10,10,10,0.12) 100%),' +
            'linear-gradient(to top,    rgba(10,10,10,0.90) 0%, transparent 38%)',
        }}
      />

      {/* Blue border glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 2px ${BLUE}` }}
        variants={hoverGlow}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 pt-16 pb-10">
        {/* Badge */}
        <motion.div
          className="flex items-center gap-2 mb-5"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
        >
          <div className="w-[3px] h-5 rounded-full" style={{ background: BLUE }} />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: BLUE }}>
            Destaque
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-black leading-none mb-3 text-white font-display"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
        >
          {link.label}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-gray-300 mb-9 max-w-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.42 }}
        >
          {link.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white rounded-[3px]"
            style={{ background: BLUE }}
            variants={{ idle: { x: 0 }, hovered: { x: 5 } }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            Acessar site <ChevronRight className="w-4 h-4" />
          </motion.span>
        </motion.div>

        {/* Watermark icon */}
        <motion.div
          className="absolute bottom-10 right-12 md:right-20 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.07 }}
          transition={{ delay: 0.7 }}
        >
          <link.Icon className="w-32 h-32 text-white" />
        </motion.div>
      </div>
    </motion.a>
  )
}

// ── Small card ─────────────────────────────────────────────────────────────────
function Card({ link, index }: { link: LinkDef; index: number }) {
  const disabled = link.href === null

  const cardInner = (
    <>
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${link.bg})` }}
        variants={disabled ? undefined : hoverBgSm}
        transition={{ duration: 0.5, ease: EASE }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: disabled
            ? 'rgba(10,10,10,0.86)'
            : 'linear-gradient(145deg, rgba(10,10,10,0.84) 0%, rgba(10,10,10,0.42) 100%)',
        }}
      />

      {/* Blue border glow */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: `inset 0 0 0 2px ${BLUE}` }}
          variants={hoverGlow}
          transition={{ duration: 0.25 }}
        />
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <div className="flex items-start justify-between">
          <link.Icon
            className="w-5 h-5 md:w-6 md:h-6"
            style={{ color: disabled ? '#2e2e30' : BLUE }}
          />
          {link.comingSoon && (
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-1 border border-gray-800 text-gray-700 rounded-sm">
              Em Breve
            </span>
          )}
        </div>
        <div>
          <h3
            className="text-lg md:text-xl font-black mb-0.5 font-display"
            style={{ color: disabled ? '#272729' : 'white' }}
          >
            {link.label}
          </h3>
          <p
            className="text-xs md:text-sm"
            style={{ color: disabled ? '#1e1e20' : '#9ca3af' }}
          >
            {link.subtitle}
          </p>
        </div>
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE, delay: 0.18 + index * 0.08 }}
      style={{ height: 'clamp(148px, 21vh, 210px)', borderRadius: 3 }}
      className="overflow-hidden"
    >
      {disabled ? (
        <div
          className="relative h-full overflow-hidden"
          style={{ cursor: 'not-allowed', borderRadius: 3 }}
        >
          {cardInner}
        </div>
      ) : (
        <motion.a
          href={link.href ?? undefined}
          target={link.external ? '_blank' : '_self'}
          rel={link.external ? 'noreferrer' : undefined}
          className="relative block h-full overflow-hidden"
          style={{ borderRadius: 3 }}
          initial="idle"
          whileHover="hovered"
          variants={hoverCard}
        >
          {cardInner}
        </motion.a>
      )}
    </motion.div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function Links() {
  const [featured, ...rest] = LINKS

  return (
    <>
      <Helmet>
        <title>Links | Nexxus</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div
        className="font-sans"
        style={{ background: BG, minHeight: '100vh', color: 'white' }}
      >
        <Nav />

        {/* ── Featured hero ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <Featured link={featured} />
        </motion.div>

        {/* ── Fade bridge + grid section ── */}
        <div
          style={{
            marginTop: -48,
            paddingTop: 64,
            background: `linear-gradient(to bottom, transparent 0%, ${BG} 72px)`,
          }}
        >
          <div className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              className="flex items-center gap-4 mb-5"
            >
              <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-white whitespace-nowrap">
                Nossa Presença Digital
              </span>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(to right, ${BLUE}50, transparent)`,
                }}
              />
            </motion.div>

            {/* Cards grid — 2 cols on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {rest.map((link, i) => (
                <Card key={link.id} link={link} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center pb-8"
        >
          <p className="text-[10px] text-gray-800 uppercase tracking-widest">
            © {new Date().getFullYear()} Nexxus — Todos os direitos reservados
          </p>
        </motion.footer>
      </div>
    </>
  )
}
