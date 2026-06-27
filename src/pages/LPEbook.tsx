import { useEffect, useState, type FormEvent, type CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MessageCircle, CheckCircle2, ArrowRight, ShieldCheck, Clock,
  FileText, AlertTriangle, Users, Database, Briefcase, Rocket,
} from 'lucide-react'
import logo from '@/assets/logo-nexxus.png'
import { submitLead, validateLead, applyCountryCode } from '@/lib/submitLead'

declare global {
  interface Window { dataLayer: Record<string, unknown>[] }
}

// ─── Brand ───────────────────────────────────────────────────────────────────
const BR = 23, BG = 94, BB = 255
const BLUE = `rgb(${BR},${BG},${BB})`
const INK = '#080d1a'
const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}
const stagger = (d = 0.1) => ({ hidden: {}, show: { transition: { staggerChildren: d } } })

const FAIXAS = [
  'R$ 0 a R$ 50 mil/mês',
  'R$ 51 mil a R$ 100 mil/mês',
  'R$ 101 mil a R$ 200 mil/mês',
  'R$ 201 mil a R$ 300 mil/mês',
  'R$ 301 mil a R$ 500 mil/mês',
  'R$ 501 mil a R$ 1 milhão/mês',
  'R$ 1 milhão a R$ 2 milhões/mês',
  'R$ 2 milhões a R$ 3 milhões/mês',
  'Mais de R$ 3 milhões/mês',
]

const HERO_BULLETS = [
  'Por que contratar mais um vendedor não resolve',
  'O custo real e o risco trabalhista de CLT e PJ',
  'Como estruturar vendas com CRM, método e cadência',
]

const CONTENTS = [
  { icon: AlertTriangle, t: 'O problema nunca foi o vendedor', d: 'Por que trocar de gente não conserta um comercial sem estrutura.' },
  { icon: ShieldCheck,   t: 'A armadilha: CLT ou PJ?',         d: 'O custo real de cada um e o risco trabalhista que ninguém te conta.' },
  { icon: Users,         t: 'O que estrutura um comercial previsível', d: 'ICP, papéis especializados, cadência e o método na conversa.' },
  { icon: Database,      t: 'CRM: o coração da operação',      d: 'Como sair das vendas na cabeça do dono e enxergar o funil de verdade.' },
  { icon: Briefcase,     t: 'Como contratar certo',            d: 'O processo que separa quem fala de quem vende, sem turnover.' },
  { icon: Rocket,        t: 'O caminho mais rápido',           d: 'Operação comercial rodando em 20 dias, sem você virar especialista em RH.' },
]

// ═══════════════════════════════════════════════════════════════════════════════
export default function LPEbook() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', whatsapp: '', faturamento: '', mensagem: '' })
  const [formError, setFormError] = useState<string | null>(null)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'view_lp_ebook' })
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError(null)
    const data = { ...form, origem: 'lp-ebook' as const }
    if (validateLead(data) || !data.faturamento.trim()) {
      setFormError('Por favor, preencha todos os campos obrigatórios para receber o ebook.')
      return
    }
    setSending(true)
    try {
      await submitLead(data)
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'ebook_lead' })
      navigate('/ebook-obrigado')
    } catch {
      setSending(false)
      setFormError('Algo deu errado. Tente novamente em instantes.')
    }
  }

  const scrollToForm = () => document.getElementById('form-ebook')?.scrollIntoView({ behavior: 'smooth' })

  const inputStyle: CSSProperties = {
    width: '100%', background: '#f6f8fc', border: '1.5px solid #e4e8f1',
    borderRadius: 12, padding: '.85rem 1rem', fontSize: '.95rem', color: INK,
    outline: 'none', boxSizing: 'border-box', transition: 'border-color .2s', fontFamily: 'inherit',
  }
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = BLUE)
  const onBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = '#e4e8f1')

  return (
    <div style={{ fontFamily: 'Inter,system-ui,sans-serif', overflowX: 'hidden', background: '#fff', color: INK }}>

      {/* ═══════════ SEÇÃO 1 — HERO + FORMULÁRIO ═══════════ */}
      <section style={{ background: INK, color: '#fff', position: 'relative', overflow: 'hidden', padding: 'clamp(1.5rem,4vw,2.5rem) 1.5rem clamp(3rem,7vw,5rem)' }}>
        <motion.div animate={{ opacity: [.35, .65, .35] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 50% at 30% 20%, rgba(${BR},${BG},${BB},.16), transparent 70%)`, pointerEvents: 'none' }} />

        {/* top bar */}
        <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingBottom: 'clamp(1.5rem,4vw,2.5rem)' }}>
          <img src={logo} alt="Nexxus" style={{ height: 30, filter: 'brightness(0) invert(1)' }} />
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `rgba(${BR},${BG},${BB},.14)`, border: `1px solid rgba(${BR},${BG},${BB},.4)`, borderRadius: 999, padding: '.35rem 1rem', fontSize: '.66rem', fontWeight: 800, letterSpacing: '.14em', color: '#fff' }}>
            <FileText size={12} style={{ color: BLUE }} /> E-BOOK GRATUITO · +R$200 MIL/MÊS
          </div>
        </div>

        {/* hero grid */}
        <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 'clamp(2rem,5vw,4rem)', alignItems: 'center' }}>

          {/* left: copy */}
          <motion.div initial="hidden" animate="show" variants={stagger(.12)}>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,4.6vw,3.2rem)', lineHeight: 1.07, letterSpacing: '-.02em' }}>
              Pare de contratar vendedor<br />
              <span style={{ color: BLUE }}>e torcer pra dar certo.</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{ color: 'rgba(255,255,255,.66)', fontSize: 'clamp(1rem,2.2vw,1.15rem)', lineHeight: 1.65, margin: '1.4rem 0 1.8rem', maxWidth: 520 }}>
              Baixe grátis o guia que mostra por que <strong style={{ color: '#fff' }}>CLT e PJ não resolvem</strong> o seu comercial, e como montar uma operação de vendas previsível, com método e CRM.
            </motion.p>

            <motion.ul variants={stagger(.08)} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
              {HERO_BULLETS.map((b) => (
                <motion.li key={b} variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '1rem', color: 'rgba(255,255,255,.82)' }}>
                  <CheckCircle2 size={20} style={{ color: BLUE, flexShrink: 0, marginTop: 2 }} /> {b}
                </motion.li>
              ))}
            </motion.ul>

            {/* cover mockup */}
            <motion.div variants={fadeUp} style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <img src="/ebook-mockup.png" alt="Capa do ebook Nexxus" style={{ width: 200, display: 'block', marginLeft: '-10px', filter: 'drop-shadow(0 22px 38px rgba(0,0,0,.45))' }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>Guia prático Nexxus</div>
                <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.5)', marginTop: 4, lineHeight: 1.5 }}>22 páginas, direto ao ponto,<br />com gráficos e exemplos reais.</div>
              </div>
            </motion.div>
          </motion.div>

          {/* right: form */}
          <motion.div id="form-ebook" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: EASE, delay: .15 }}
            style={{ background: '#fff', borderRadius: 24, padding: 'clamp(1.6rem,3vw,2.2rem)', boxShadow: '0 30px 70px rgba(0,0,0,.4)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#e9f9f0', color: '#1aa57a', borderRadius: 999, padding: '.3rem .8rem', fontSize: '.72rem', fontWeight: 800, marginBottom: '1rem' }}>
              <MessageCircle size={14} /> Você recebe no WhatsApp
            </div>
            <h2 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 'clamp(1.3rem,3vw,1.65rem)', lineHeight: 1.15, color: INK }}>
              Receba o ebook agora, <span style={{ color: BLUE }}>de graça</span>
            </h2>
            <p style={{ fontSize: '.9rem', color: '#5b606b', margin: '.6rem 0 1.4rem', lineHeight: 1.5 }}>
              Preencha os dados e enviamos o guia direto no seu WhatsApp.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
              <input style={inputStyle} required placeholder="Seu nome*" value={form.nome}
                onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} onFocus={onFocus} onBlur={onBlur} />
              <input style={inputStyle} required placeholder="Nome da empresa*" value={form.empresa}
                onChange={e => setForm(f => ({ ...f, empresa: e.target.value }))} onFocus={onFocus} onBlur={onBlur} />
              <input style={inputStyle} required type="email" placeholder="Seu melhor e-mail*" value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))} onFocus={onFocus} onBlur={onBlur} />
              <input style={inputStyle} required placeholder="WhatsApp com DDD*" value={form.whatsapp}
                onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))} onFocus={onFocus}
                onBlur={e => { onBlur(e); setForm(f => ({ ...f, whatsapp: applyCountryCode(e.target.value) })) }} />
              <select required value={form.faturamento} onChange={e => setForm(f => ({ ...f, faturamento: e.target.value }))}
                onFocus={onFocus} onBlur={onBlur}
                style={{ ...inputStyle, cursor: 'pointer', color: form.faturamento ? INK : '#9aa0ab' }}>
                <option value="" disabled>Faturamento mensal*</option>
                {FAIXAS.map(f => <option key={f} value={f} style={{ color: INK }}>{f}</option>)}
              </select>
              <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 64 }} placeholder="Mensagem (opcional)" value={form.mensagem}
                onChange={e => setForm(f => ({ ...f, mensagem: e.target.value }))} onFocus={onFocus} onBlur={onBlur} />

              {formError && <p style={{ color: '#e0564b', fontSize: '.82rem', margin: 0 }}>{formError}</p>}

              <motion.button type="submit" disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.02 }} whileTap={{ scale: sending ? 1 : .98 }}
                style={{ background: BLUE, color: '#fff', border: 'none', borderRadius: 14, padding: '1rem', fontSize: '1.02rem', fontWeight: 800, cursor: sending ? 'wait' : 'pointer', letterSpacing: '.01em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, boxShadow: `0 12px 30px rgba(${BR},${BG},${BB},.32)`, opacity: sending ? .75 : 1 }}>
                {sending ? 'Enviando...' : 'QUERO O EBOOK GRÁTIS'} {!sending && <ArrowRight size={18} />}
              </motion.button>

              <p style={{ fontSize: '.72rem', color: '#9aa0ab', textAlign: 'center', margin: '.2rem 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <ShieldCheck size={13} /> Seus dados estão seguros. Sem spam.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SEÇÃO 2 — O QUE VOCÊ VAI DESCOBRIR ═══════════ */}
      <section style={{ background: '#f4f7ff', padding: 'clamp(3.5rem,7vw,6rem) 1.5rem' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }} variants={stagger(.1)} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <motion.p variants={fadeUp} style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.16em', color: BLUE, marginBottom: '.8rem' }}>O QUE VOCÊ VAI DESCOBRIR</motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,3.6vw,2.4rem)', lineHeight: 1.15, color: INK }}>
              O caminho para um comercial<br />que vende <span style={{ color: BLUE }}>sem depender de você</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={stagger(.08)}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.2rem' }}>
            {CONTENTS.map(({ icon: Icon, t, d }) => (
              <motion.div key={t} variants={fadeUp} whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(23,94,255,.12)' }}
                style={{ background: '#fff', borderRadius: 18, padding: '1.6rem', border: '1px solid #e4e8f1', transition: 'box-shadow .25s' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: '#eaf0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Icon size={22} style={{ color: BLUE }} />
                </div>
                <h3 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: '1.05rem', color: INK, marginBottom: '.4rem' }}>{t}</h3>
                <p style={{ fontSize: '.9rem', color: '#5b606b', lineHeight: 1.55, margin: 0 }}>{d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SEÇÃO 3 — CTA FINAL ═══════════ */}
      <section style={{ background: INK, color: '#fff', position: 'relative', overflow: 'hidden', padding: 'clamp(3.5rem,7vw,6rem) 1.5rem', textAlign: 'center' }}>
        <motion.div animate={{ opacity: [.3, .6, .3] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 60% at 50% 50%, rgba(${BR},${BG},${BB},.16), transparent 70%)`, pointerEvents: 'none' }} />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .4 }} variants={stagger(.12)} style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem,4.2vw,2.8rem)', lineHeight: 1.1 }}>
            Seu comercial pode parar<br />de <span style={{ color: BLUE }}>depender de você.</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ color: 'rgba(255,255,255,.6)', fontSize: '1.05rem', lineHeight: 1.6, margin: '1.2rem auto 2rem', maxWidth: 480 }}>
            Comece pelo guia gratuito. Em poucos minutos de leitura, você enxerga onde está o gargalo do seu comercial.
          </motion.p>
          <motion.button variants={fadeUp} onClick={scrollToForm}
            whileHover={{ scale: 1.04, boxShadow: `0 0 40px rgba(${BR},${BG},${BB},.5)` }} whileTap={{ scale: .97 }}
            style={{ background: BLUE, color: '#fff', border: 'none', borderRadius: 999, padding: '1.1rem 2.6rem', fontSize: '1.05rem', fontWeight: 800, cursor: 'pointer', letterSpacing: '.01em', display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: `0 12px 34px rgba(${BR},${BG},${BB},.4)` }}>
            BAIXAR O GUIA GRÁTIS <ArrowRight size={18} />
          </motion.button>
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: '2.2rem', flexWrap: 'wrap', color: 'rgba(255,255,255,.4)', fontSize: '.82rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><ShieldCheck size={15} /> Método aplicado em +600 operações</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><Clock size={15} /> Download imediato no WhatsApp</span>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
