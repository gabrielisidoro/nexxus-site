import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle2, Download, Instagram, ArrowRight } from 'lucide-react'
import logo from '@/assets/logo-nexxus.png'
import { site } from '@/data/site'
import { loadMetaPixel, metaTrack } from '@/lib/metaPixel'

declare global {
  interface Window { dataLayer: Record<string, unknown>[] }
}

const BR = 23, BG = 94, BB = 255
const BLUE = `rgb(${BR},${BG},${BB})`
const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}
const stagger = (d = 0.1) => ({ hidden: {}, show: { transition: { staggerChildren: d } } })

export default function EbookObrigado() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'lead_convertido' })
    window.dataLayer.push({ event: 'ebook_lead_obrigado' })

    // Meta Pixel: dispara ao acessar a página de obrigado (conversão).
    const w = window as unknown as { __nxEbookLead?: boolean }
    loadMetaPixel()
    metaTrack('PageView')
    if (!w.__nxEbookLead) {
      metaTrack('Lead')
      w.__nxEbookLead = true
    }
  }, [])

  return (
    <div style={{ fontFamily: 'Inter,system-ui,sans-serif', overflowX: 'hidden' }}>
      <section style={{
        background: '#080d1a', color: '#fff', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(3rem,8vw,6rem) 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <motion.div animate={{ opacity: [.4, .75, .4], scale: [1, 1.12, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 70% 55% at 50% 40%, rgba(${BR},${BG},${BB},.13), transparent 70%)`, pointerEvents: 'none' }} />

        <motion.div initial="hidden" animate="show" variants={stagger(.11)} style={{ position: 'relative', maxWidth: 600 }}>
          <motion.img variants={fadeUp} src={logo} alt="Nexxus" style={{ height: 30, marginBottom: '2.5rem', filter: 'brightness(0) invert(1)' }} />

          <motion.div variants={fadeUp} style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: `rgba(${BR},${BG},${BB},.12)`, border: `1px solid rgba(${BR},${BG},${BB},.35)`,
            borderRadius: 999, padding: '.35rem 1rem', fontSize: '.7rem', fontWeight: 700, letterSpacing: '.15em', color: BLUE, marginBottom: '1.6rem',
          }}>
            <CheckCircle2 size={12} /> CADASTRO CONFIRMADO
          </motion.div>

          <motion.h1 variants={fadeUp} style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 'clamp(2.1rem,5.2vw,3.2rem)', lineHeight: 1.08, marginBottom: '1.2rem' }}>
            Seu ebook está<br />
            <span style={{ background: `linear-gradient(135deg,${BLUE},rgba(${BR},${BG},${BB},.6))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              a caminho!
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ color: 'rgba(255,255,255,.62)', fontSize: 'clamp(1rem,2.2vw,1.12rem)', lineHeight: 1.7, marginBottom: '2.2rem', maxWidth: 460, margin: '0 auto 2.2rem' }}>
            Acabamos de enviar o guia no seu <strong style={{ color: '#fff' }}>WhatsApp</strong>. Fique de olho nas mensagens. Se preferir, baixe agora mesmo aqui embaixo.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <motion.a
              href="/ebook-nexxus-comercial.pdf" download
              whileHover={{ scale: 1.04, boxShadow: `0 0 40px rgba(${BR},${BG},${BB},.5)` }} whileTap={{ scale: .97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: BLUE, color: '#fff', textDecoration: 'none', borderRadius: 999, padding: '1rem 2.4rem', fontSize: '1.02rem', fontWeight: 800, boxShadow: `0 12px 30px rgba(${BR},${BG},${BB},.4)` }}>
              <Download size={19} /> Baixar o ebook agora
            </motion.a>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,.4)', fontSize: '.82rem' }}>
              <MessageCircle size={14} /> Também enviamos o link no seu WhatsApp
            </span>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: '3rem', paddingTop: '2.2rem', borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.4)', letterSpacing: '.03em', margin: 0 }}>
              Enquanto lê, nos acompanhe no Instagram:
            </p>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,#833ab4 0%,#fd1d1d 50%,#fcb045 100%)', color: '#fff', textDecoration: 'none', borderRadius: 999, padding: '.8rem 1.9rem', fontSize: '.95rem', fontWeight: 800, boxShadow: '0 6px 28px rgba(131,58,180,.35)' }}>
              <Instagram size={19} /> @nexxus.inc <ArrowRight size={15} />
            </a>
            <p style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.28)', margin: 0 }}>Conteúdo diário sobre estruturação e vendas B2B</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
