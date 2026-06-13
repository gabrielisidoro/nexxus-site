import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  Globe, Rocket, Instagram, Linkedin, BookOpen,
  ChevronRight, Bot, Play, Info,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import logo from '@/assets/logo-nexxus.png'

// ── Brand ─────────────────────────────────────────────────────────────────────
const BLUE  = '#175eff'
const NF_BG = '#141414'
const EASE  = [0.22, 1, 0.36, 1] as const

// ── Types ─────────────────────────────────────────────────────────────────────
type CardDef = {
  id:        string
  label:     string
  subtitle:  string
  tag?:      string        // small always-visible tag (e.g. "@nexxus.inc")
  href:      string
  img:       string
  Icon:      LucideIcon
  badge?:    string        // top-right chip
  external?: boolean
  overlay?:  string        // extra CSS overlay (brand color / gradient)
}

// ── Data ──────────────────────────────────────────────────────────────────────
const LINKS: CardDef[] = [
  {
    id:       'site',
    label:    'Site Institucional',
    subtitle: 'Estruturação e terceirização comercial para empresas B2B que querem crescer com método, dados e um time pronto em 20 dias.',
    href:     'https://nexxusagencia.com.br',
    img:      '/linktree/predio.jpg',
    Icon:     Globe,
    external: true,
  },
  {
    id:       'lp',
    label:    'Landing Page',
    subtitle: 'Solicite seu diagnóstico gratuito e descubra como montar um comercial que vende enquanto você lidera.',
    href:     '/lp',
    img:      '/linktree/lp.jpg',
    Icon:     Rocket,
  },
  {
    id:       'lp-ia',
    label:    'LP com IA',
    subtitle: 'Experimente nosso agente de vendas com inteligência artificial e veja a Nexxus em ação.',
    href:     '/lp-ia',
    img:      '/linktree/lp-ia.jpg',
    Icon:     Bot,
    badge:    'NOVO',
  },
  {
    id:       'instagram',
    label:    'Instagram',
    subtitle: 'Conteúdo diário sobre vendas, liderança e crescimento comercial.',
    tag:      '@nexxus.inc',
    href:     'https://www.instagram.com/nexxus.inc/',
    img:      '/linktree/instagram.jpg',
    Icon:     Instagram,
    external: true,
    overlay:  'linear-gradient(135deg,rgba(131,58,180,0.72) 0%,rgba(193,53,132,0.5) 35%,rgba(253,29,29,0.36) 65%,rgba(252,175,69,0.26) 100%)',
  },
  {
    id:       'linkedin',
    label:    'LinkedIn',
    subtitle: 'Cases, insights e novidades da Nexxus no LinkedIn.',
    tag:      'Nexxus Agência',
    href:     'https://www.linkedin.com/company/nexxus-ag%C3%AAncia/?viewAsMember=true',
    img:      '/linktree/linkedin.jpg',
    Icon:     Linkedin,
    external: true,
    overlay:  'rgba(0,119,181,0.48)',
  },
  {
    id:       'blog',
    label:    'Blog Nexxus',
    subtitle: 'Artigos, frameworks e análises de mercado para líderes comerciais B2B.',
    href:     'https://nexxusagencia.com.br/blog',
    img:      '/linktree/blog.jpg',
    Icon:     BookOpen,
    external: true,
  },
]

// ── Nav (transparent → solid on scroll) ──────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      animate={{ backgroundColor: scrolled ? '#141414' : 'rgba(0,0,0,0)' }}
      transition={{ duration: 0.35 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 4%',
        backgroundImage: scrolled ? 'none' : 'linear-gradient(to bottom,rgba(0,0,0,0.65) 0%,transparent 100%)',
      }}
    >
      <img src={logo} alt="Nexxus" style={{ height: 26, filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
      <a
        href="https://nexxusagencia.com.br"
        target="_blank"
        rel="noreferrer"
        style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.48)', textDecoration: 'none', textTransform: 'uppercase' }}
      >
        nexxusagencia.com.br
      </a>
    </motion.nav>
  )
}

// ── Featured billboard ────────────────────────────────────────────────────────
function Billboard({ link }: { link: CardDef }) {
  return (
    <div style={{ position: 'relative', height: 'clamp(420px, 62vh, 680px)', overflow: 'hidden' }}>
      {/* Background */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${link.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Netflix-style gradients */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: [
            'linear-gradient(to right,  rgba(20,20,20,0.92) 0%, rgba(20,20,20,0.44) 52%, transparent 100%)',
            'linear-gradient(to top,    rgba(20,20,20,0.90) 0%, transparent 28%)',
            'linear-gradient(to bottom, rgba(20,20,20,0.28) 0%, transparent 18%)',
          ].join(','),
        }}
      />

      {/* Content */}
      <div style={{ position: 'absolute', bottom: '12%', left: '4%', maxWidth: 'min(500px, 55%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
        >
          {/* Category label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: '1rem',
            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.52)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: BLUE, display: 'inline-block' }} />
            Acesso Principal
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 900,
            fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
            color: '#fff', lineHeight: 1, marginBottom: '0.9rem',
            letterSpacing: '-0.025em', textShadow: '0 2px 24px rgba(0,0,0,0.55)',
          }}>
            {link.label}
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(0.84rem, 1.4vw, 1rem)', color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.68, marginBottom: '1.6rem', maxWidth: 420,
          }}>
            {link.subtitle}
          </p>

          {/* Netflix-style buttons */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            <a
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noreferrer' : undefined}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: '#fff', color: '#141414',
                padding: '0.62rem 1.7rem', borderRadius: 4,
                fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <Play style={{ width: 18, height: 18, fill: '#141414', flexShrink: 0 }} />
              Acessar
            </a>
            <a
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noreferrer' : undefined}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: 'rgba(109,109,110,0.68)', color: '#fff',
                padding: '0.62rem 1.4rem', borderRadius: 4,
                fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none',
                backdropFilter: 'blur(6px)', whiteSpace: 'nowrap',
              }}
            >
              <Info style={{ width: 18, height: 18 }} />
              Mais info
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ── Card (thumbnail hover) ────────────────────────────────────────────────────
function Card({ link, index, wide = false }: { link: CardDef; index: number; wide?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const h = wide ? 'clamp(170px, 25vh, 250px)' : 'clamp(195px, 31vh, 310px)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.07 }}
      style={{ height: h, position: 'relative', zIndex: hovered ? 10 : 1 }}
    >
      <motion.a
        href={link.href}
        target={link.external ? '_blank' : '_self'}
        rel={link.external ? 'noreferrer' : undefined}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{
          display: 'block', width: '100%', height: '100%',
          borderRadius: 4, overflow: 'hidden',
          position: 'relative', textDecoration: 'none',
          boxShadow: hovered ? '0 20px 48px rgba(0,0,0,0.7)' : 'none',
        }}
      >
        {/* Background image */}
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${link.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.55, ease: EASE }}
        />

        {/* Brand overlay */}
        {link.overlay && (
          <div style={{ position: 'absolute', inset: 0, background: link.overlay }} />
        )}

        {/* Bottom gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(20,20,20,0.97) 0%, rgba(20,20,20,0.5) 42%, transparent 80%)',
        }} />

        {/* Top-right badge */}
        {link.badge && (
          <div style={{
            position: 'absolute', top: 10, right: 10,
            background: BLUE, color: '#fff',
            fontSize: '0.57rem', fontWeight: 800, letterSpacing: '0.14em',
            padding: '0.18rem 0.55rem', borderRadius: 3, textTransform: 'uppercase',
          }}>
            {link.badge}
          </div>
        )}

        {/* Social brand icon — top-left */}
        {(link.id === 'instagram' || link.id === 'linkedin') && (
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <link.Icon style={{ width: 22, height: 22, color: '#fff', filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.7))' }} />
          </div>
        )}

        {/* Bottom content */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: wide ? '0.9rem 1.25rem' : '0.85rem 1rem',
          display: 'flex',
          flexDirection: wide ? 'row' : 'column',
          alignItems: wide ? 'flex-end' : 'flex-start',
          justifyContent: wide ? 'space-between' : 'flex-start',
        }}>
          <div style={{ flex: 1 }}>
            {/* Hover-reveal description */}
            <AnimatePresence>
              {hovered && !wide && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.62)', marginBottom: '0.4rem', lineHeight: 1.4 }}
                >
                  {link.subtitle}
                </motion.p>
              )}
            </AnimatePresence>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <h3 style={{
                fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800,
                fontSize: wide ? 'clamp(1.05rem,2.4vw,1.35rem)' : '1.02rem',
                color: '#fff', margin: 0, lineHeight: 1.2,
                textShadow: '0 1px 8px rgba(0,0,0,0.6)',
              }}>
                {link.label}
              </h3>
              {link.tag && (
                <span style={{
                  fontSize: '0.62rem', fontWeight: 600, color: 'rgba(255,255,255,0.55)',
                  background: 'rgba(255,255,255,0.1)', padding: '0.15rem 0.5rem',
                  borderRadius: 3, whiteSpace: 'nowrap',
                }}>
                  {link.tag}
                </span>
              )}
            </div>

            {wide && (
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: 4, lineHeight: 1.45 }}>
                {link.subtitle}
              </p>
            )}
          </div>

          {/* Hover arrow */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: '#fff', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  marginLeft: wide ? '1rem' : 0,
                  marginTop: wide ? 0 : '0.5rem',
                }}
              >
                <ChevronRight style={{ width: 16, height: 16, color: '#141414' }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.a>
    </motion.div>
  )
}

// ── Section row ───────────────────────────────────────────────────────────────
function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.6rem' }}>
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{
          fontFamily: 'Poppins, system-ui, sans-serif',
          fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: '#e5e5e5', marginBottom: '0.6rem',
        }}
      >
        {title}
      </motion.h2>
      {children}
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function Links() {
  const featured = LINKS[0]
  const platform = LINKS.slice(1, 3)
  const social   = LINKS.slice(3, 5)
  const blog     = LINKS[5]

  return (
    <>
      <Helmet>
        <title>Links | Nexxus</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div style={{ background: NF_BG, minHeight: '100vh', color: '#fff', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <Nav />

        {/* ── Featured billboard ── */}
        <Billboard link={featured} />

        {/* ── Content rows ── */}
        <div style={{ padding: '0.8rem 4% 4rem' }}>
          <Row title="Nossa Plataforma">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.35rem' }}>
              {platform.map((link, i) => <Card key={link.id} link={link} index={i} />)}
            </div>
          </Row>

          <Row title="Redes Sociais">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.35rem' }}>
              {social.map((link, i) => <Card key={link.id} link={link} index={i} />)}
            </div>
          </Row>

          <Row title="Conteúdo">
            <Card link={blog} index={0} wide />
          </Row>
        </div>

        {/* ── Footer ── */}
        <footer style={{
          padding: '1.5rem 4% 2.5rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem',
        }}>
          <img src={logo} alt="Nexxus" style={{ height: 18, filter: 'brightness(0) invert(1)', opacity: 0.28 }} />
          <p style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} Nexxus — Todos os direitos reservados
          </p>
        </footer>
      </div>
    </>
  )
}
