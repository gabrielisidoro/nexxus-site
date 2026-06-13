import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import logo from '@/assets/logo-nexxus.png'
import { site } from '@/data/site'

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

export default function Obrigado() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'lead_convertido' })
  }, [])

  return (
    <div style={{ fontFamily: 'Inter,system-ui,sans-serif', overflowX: 'hidden' }}>

      {/* ═══ SEÇÃO 1 — Confirmação ═══ */}
      <section style={{
        background: '#080d1a', color: '#fff',
        minHeight: '65vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(3rem,8vw,6rem) 1.5rem',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <motion.div animate={{ opacity:[.4,.75,.4], scale:[1,1.12,1] }} transition={{ duration:6, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse 70% 55% at 50% 45%, rgba(${BR},${BG},${BB},.11), transparent 70%)`, pointerEvents:'none' }}/>

        <motion.div initial="hidden" animate="show" variants={stagger(0.11)} style={{ position:'relative', maxWidth:580 }}>

          <motion.img variants={fadeUp} src={logo} alt="Nexxus"
            style={{ height:30, marginBottom:'2.5rem', filter:'brightness(0) invert(1)' }}/>

          <motion.div variants={fadeUp} style={{
            display:'inline-flex', alignItems:'center', gap:7,
            background:`rgba(${BR},${BG},${BB},.12)`, border:`1px solid rgba(${BR},${BG},${BB},.35)`,
            borderRadius:999, padding:'.35rem 1rem', fontSize:'.7rem',
            fontWeight:700, letterSpacing:'.15em', color:BLUE, marginBottom:'1.6rem',
          }}>
            <CheckCircle2 size={12}/> FORMULÁRIO RECEBIDO COM SUCESSO
          </motion.div>

          <motion.h1 variants={fadeUp} style={{
            fontFamily:'Poppins,sans-serif', fontWeight:900,
            fontSize:'clamp(2.2rem,5.5vw,3.4rem)', lineHeight:1.08, marginBottom:'1.2rem',
          }}>
            Recebemos o seu<br/>
            <span style={{ background:`linear-gradient(135deg,${BLUE},rgba(${BR},${BG},${BB},.6))`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              contato!
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{
            color:'rgba(255,255,255,.6)', fontSize:'clamp(1rem,2.2vw,1.12rem)',
            lineHeight:1.72, marginBottom:'2rem', maxWidth:480, margin:'0 auto 2rem',
          }}>
            Nossa equipe vai analisar a sua operação e entrar em contato em até{' '}
            <strong style={{color:'#fff'}}>12 horas</strong> com um diagnóstico
            personalizado. Fique de olho no <strong style={{color:'#fff'}}>e-mail</strong> e <strong style={{color:'#fff'}}>WhatsApp</strong>.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:7, color:'rgba(255,255,255,.35)', fontSize:'.8rem', marginBottom:'2.8rem' }}>
            <Clock size={14}/> Resposta garantida em até 12 horas
          </motion.div>

          <motion.div variants={fadeUp} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
            <p style={{ fontSize:'.82rem', color:'rgba(255,255,255,.4)', letterSpacing:'.04em', marginBottom:4 }}>
              Enquanto aguarda, nos acompanhe no Instagram:
            </p>
            <motion.a
              href={site.social.instagram} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.05, boxShadow:'0 0 40px rgba(131,58,180,.45)' }}
              whileTap={{ scale:.97 }}
              style={{
                display:'inline-flex', alignItems:'center', gap:10,
                background:'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
                color:'#fff', textDecoration:'none', borderRadius:999,
                padding:'.9rem 2.2rem', fontSize:'1rem', fontWeight:800,
                boxShadow:'0 6px 28px rgba(131,58,180,.35)',
              }}>
              <Instagram size={20}/>
              @nexxus.inc
              <ArrowRight size={16}/>
            </motion.a>
            <p style={{ fontSize:'.75rem', color:'rgba(255,255,255,.28)' }}>
              Conteúdo diário sobre estruturação e vendas B2B
            </p>
          </motion.div>

        </motion.div>
      </section>

      {/* ═══ SEÇÃO 2 — Social proof ═══ */}
      <section style={{
        background:'#f4f7ff', color:'#0f172a',
        padding:'clamp(3rem,6vw,5rem) 1.5rem', textAlign:'center',
      }}>
        <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.3}} variants={stagger(.12)}
          style={{ maxWidth:720, margin:'0 auto' }}>

          <motion.p variants={fadeUp} style={{ fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, marginBottom:'.7rem' }}>
            VOCÊ ESTÁ EM BOAS MÃOS
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'clamp(1.4rem,3vw,2rem)', marginBottom:'3rem', lineHeight:1.2 }}>
            Empresas que nos avaliam, <span style={{color:BLUE}}>recomendam.</span>
          </motion.h2>

          <motion.div variants={stagger(.14)} style={{ display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap', alignItems:'stretch' }}>

            {/* NPS Card */}
            <motion.div variants={fadeUp}
              whileHover={{ y:-5, boxShadow:'0 16px 40px rgba(23,94,255,.15)' }}
              style={{ background:'#fff', borderRadius:22, padding:'2.2rem 2.8rem', boxShadow:'0 4px 20px rgba(0,0,0,.07)', border:'1px solid rgba(0,0,0,.06)', minWidth:160, flex:'1 1 160px', maxWidth:220 }}>
              <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'3.4rem', color:BLUE, lineHeight:1 }}>90%</div>
              <div style={{ fontWeight:800, fontSize:'.95rem', color:'#0f172a', marginTop:8 }}>NPS</div>
              <div style={{ fontSize:'.78rem', color:'#64748b', marginTop:4, lineHeight:1.4 }}>Índice de satisfação<br/>dos nossos clientes</div>
            </motion.div>

            {/* RA1000 / Reclame Aqui Card */}
            <motion.div variants={fadeUp}
              whileHover={{ y:-5, boxShadow:'0 16px 40px rgba(45,122,34,.15)' }}
              style={{ background:'#fff', borderRadius:22, padding:'2.2rem 2.4rem', boxShadow:'0 4px 20px rgba(0,0,0,.07)', border:'1px solid rgba(0,0,0,.06)', flex:'1 1 200px', maxWidth:260 }}>

              {/* RA1000 badge */}
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:'1.2rem' }}>
                <div style={{
                  width:56, height:56, borderRadius:'50%', flexShrink:0,
                  background:'linear-gradient(135deg, #1e7e1e, #4caf50)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  boxShadow:'0 4px 16px rgba(76,175,80,.35)',
                  border:'3px solid #d4edda',
                }}>
                  <span style={{ color:'#fff', fontSize:'1.5rem', lineHeight:1 }}>✓</span>
                </div>
                <div style={{ textAlign:'left' }}>
                  <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'1.4rem', color:'#1e7e1e', lineHeight:1 }}>RA1000</div>
                  <div style={{ fontSize:'.68rem', color:'#64748b', fontWeight:600, letterSpacing:'.05em' }}>CERTIFICADO</div>
                </div>
              </div>

              {/* Reclame Aqui wordmark */}
              <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'1.15rem', letterSpacing:'-.01em', marginBottom:8 }}>
                <span style={{ color:'#8dc63f' }}>Reclame</span><span style={{ color:'#2d7a22' }}>AQUI</span>
              </div>

              <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:999, padding:'.25rem .8rem' }}>
                <span style={{ width:7, height:7, borderRadius:'50%', background:'#22c55e', display:'inline-block' }}/>
                <span style={{ fontSize:'.72rem', fontWeight:700, color:'#15803d' }}>Zero reclamações</span>
              </div>
            </motion.div>

          </motion.div>

          <motion.p variants={fadeUp} style={{ marginTop:'2.5rem', fontSize:'.85rem', color:'#94a3b8' }}>
            Empresas sérias. Resultados reais. Sem reclamação.
          </motion.p>

        </motion.div>
      </section>

    </div>
  )
}
