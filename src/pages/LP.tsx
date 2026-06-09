import {
  useEffect, useRef, useState, type FormEvent,
} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue,
} from 'framer-motion'
import { Send, ArrowDown, ChevronRight, Bot, X, CornerDownLeft, Rocket } from 'lucide-react'
import logo from '@/assets/logo-nexxus.png'
import { office } from '@/assets/escritorio'
import { submitLead, validateLead, applyCountryCode } from '@/lib/submitLead'
import { pillars, inferno, ceu } from '@/data/metodo'
import { iconMap } from '@/components/iconMap'

// ─── Brand ───────────────────────────────────────────────────────────────────
const BR = 23, BG = 94, BB = 255
const BLUE = `rgb(${BR},${BG},${BB})`

// ─── Animation variants ───────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.55, ease: EASE } },
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.91 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
}
const slideLeft = {
  hidden: { opacity: 0, x: -36 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
}
const stagger = (delay = 0.08) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay } },
})

// ─── Data ────────────────────────────────────────────────────────────────────
const FAIXAS = [
  'Até R$ 50 mil/mês','R$ 51 mil a R$ 99 mil/mês',
  'R$ 100 mil a R$ 199 mil/mês','R$ 200 mil a R$ 299 mil/mês',
  'R$ 300 mil a R$ 500 mil/mês','R$ 500 mil a R$ 1 milhão/mês',
  'Mais de R$ 1 milhão/mês','Mais de R$ 5 milhões/mês',
]

const PAINS = [
  { emoji:'⚡', text:'Vende no improviso, sem processo repetível' },
  { emoji:'❌', text:'Já fechou com várias agências e empresas e ninguém nunca te deu resultado.' },
  { emoji:'📉', text:'Resultado varia com o humor do vendedor' },
  { emoji:'🔄', text:'Leads somem. Falta follow-up e cadência.' },
  { emoji:'🧠', text:'Só você sabe vender. Time trava quando você sai' },
  { emoji:'🎲', text:'Previsibilidade zero: mês bom, mês ruim, sem controle' },
]

const SERVICES = [
  { num:'01', title:'Terceirização Comercial', body:'Squad SDR, Hunter e Closer operando em 20 dias. Método, dados e governança prontos desde o primeiro dia.', badge:'Operação ativa em 20 dias' },
  { num:'02', title:'Estruturação Comercial',  body:'ICP, oferta, canal, funil e playbook desenhados sob medida. O mapa completo para crescer com previsibilidade.', badge:'Arquitetura completa' },
  { num:'03', title:'Mentoria Comercial',      body:'Transformamos o time interno em uma máquina de resultados com método e governança.', badge:'Time próprio escalado' },
]

const STEPS = [
  { day:'Dia 1 a 3',   title:'Diagnóstico Profundo',  body:'Mapeamos operação atual, gargalos e oportunidades reais.' },
  { day:'Dia 4 a 7',   title:'Arquitetura Comercial', body:'Desenhamos ICP, oferta, canal, funil e playbook.' },
  { day:'Dia 8 a 14',  title:'Montagem da Squad',     body:'Selecionamos e treinamos SDR, Hunter e Closer com seu contexto.' },
  { day:'Dia 15 a 20', title:'Operação No Ar',        body:'Cadência ativa. Primeiros leads qualificados sendo gerados.' },
]

const STATS = [
  { value:20, sfx:'', label:'dias para operação no ar' },
  { value:80, sfx:'%', label:'das vendas entre o 5º e 12º contato' },
  { value:12, sfx:'h', label:'tempo máximo de resposta garantido' },
  { value:3,  sfx:'x', label:'aumento médio na geração de leads' },
]

// ─── AI Chat responses ────────────────────────────────────────────────────────
function getBotReply(q: string): string {
  const l = q.toLowerCase()
  if (/(preço|valor|quanto|custo|investimento|plano|pacote)/.test(l))
    return 'Para investimento, nossa equipe faz uma avaliação personalizada baseada no seu negócio. Preencha o formulário e retornamos em até 12h com uma proposta sob medida. 👇'
  if (/terceiriz/.test(l))
    return 'Na Terceirização Comercial, montamos uma squad completa (SDR, Hunter e Closer) que opera como o time de vendas da sua empresa — tudo pronto em 20 dias com método e governança.'
  if (/(estrutura|playbook|icp|funil)/.test(l))
    return 'Na Estruturação Comercial, desenhamos toda a arquitetura: ICP, oferta, canal, funil e playbook. Você recebe o mapa completo para crescer com previsibilidade.'
  if (/(mentor|time interno|meu time)/.test(l))
    return 'Na Mentoria Comercial trabalhamos com o seu time já existente, aplicando método e governança para transformá-lo numa máquina de resultados.'
  if (/(prazo|tempo|dias|rápido|quando)/.test(l))
    return 'A operação sai do zero e está no ar em 20 dias: Diagnóstico (dias 1 a 3), Arquitetura (dias 4 a 7), Squad (dias 8 a 14) e Operação no Ar (dias 15 a 20).'
  if (/(sdr|hunter|closer|vendedor)/.test(l))
    return 'SDR faz prospecção ativa, Hunter qualifica e abre oportunidades, Closer fecha negócios. Montamos e gerenciamos os três perfis para você.'
  if (/(falar|humano|pessoa|whatsapp|contato|formulário)/.test(l))
    return 'Preencha o formulário aqui na página! Nossa equipe retorna em até 12h com um diagnóstico gratuito da sua operação. 🎯'
  if (/(oi|olá|bom dia|boa tarde|boa noite|tudo)/.test(l))
    return 'Olá! Estou aqui para tirar suas dúvidas sobre estruturação comercial. O que você gostaria de saber?'
  return 'Boa pergunta! Para uma resposta personalizada ao seu caso específico, recomendo preencher o formulário de diagnóstico gratuito. Nossa equipe analisa e retorna em até 12h. Posso ajudar com mais alguma dúvida?'
}

// ─── AI Chat component ────────────────────────────────────────────────────────
const QUICK_REPLIES = [
  'O que é terceirização comercial?',
  'Como funciona em 20 dias?',
  'Quero fazer um diagnóstico',
]

interface ChatMsg { role: 'bot' | 'user'; text: string }

function AIChat() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<ChatMsg[]>([
    { role:'bot', text:'Olá! Sou a IA da Nexxus. Posso tirar suas dúvidas sobre nossos serviços de estruturação comercial. Como posso ajudar?' },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:'smooth' })
  }, [msgs, typing])

  function send(text?: string) {
    const msg = (text ?? input).trim()
    if (!msg) return
    setInput('')
    setMsgs(m => [...m, { role:'user', text: msg }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs(m => [...m, { role:'bot', text: getBotReply(msg) }])
    }, 900)
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={{ boxShadow: open
          ? `0 0 0 3px rgba(${BR},${BG},${BB},0.4), 0 8px 32px rgba(0,0,0,0.5)`
          : [`0 0 20px rgba(${BR},${BG},${BB},0.4)`, `0 0 36px rgba(${BR},${BG},${BB},0.65)`, `0 0 20px rgba(${BR},${BG},${BB},0.4)`],
        }}
        transition={{ boxShadow:{ duration:2.5, repeat: open ? 0 : Infinity, ease:'easeInOut' } }}
        style={{ position:'fixed', bottom:28, right:28, zIndex:200, width:60, height:60, borderRadius:'50%', background:BLUE, border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff' }}>
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}} transition={{duration:.2}}><X size={22}/></motion.span>
            : <motion.span key="bot" initial={{rotate:90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}} transition={{duration:.2}}><Bot size={24}/></motion.span>
          }
        </AnimatePresence>
      </motion.button>

      {/* Label */}
      <AnimatePresence>
        {!open && (
          <motion.div initial={{opacity:0,x:10}} animate={{opacity:1,x:0}} exit={{opacity:0,x:10}}
            style={{ position:'fixed', bottom:38, right:98, zIndex:200, background:'rgba(8,13,26,0.92)', border:`1px solid rgba(${BR},${BG},${BB},0.3)`, borderRadius:999, padding:'0.35rem 0.9rem', fontSize:'0.75rem', fontWeight:700, color:'#fff', backdropFilter:'blur(12px)', pointerEvents:'none', whiteSpace:'nowrap' }}>
            IA Nexxus
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:20, scale:0.94 }} animate={{ opacity:1, y:0, scale:1 }} exit={{ opacity:0, y:20, scale:0.94 }}
            transition={{ duration:0.3, ease:EASE }}
            style={{ position:'fixed', bottom:100, right:28, zIndex:200, width:'min(340px, calc(100vw - 40px))', background:'#0c1220', border:`1px solid rgba(${BR},${BG},${BB},0.25)`, borderRadius:20, overflow:'hidden', boxShadow:`0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(${BR},${BG},${BB},0.1)`, fontFamily:'Inter,system-ui,sans-serif' }}>

            {/* Header */}
            <div style={{ background:`linear-gradient(135deg, rgba(${BR},${BG},${BB},0.15), rgba(${BR},${BG},${BB},0.05))`, borderBottom:`1px solid rgba(${BR},${BG},${BB},0.15)`, padding:'0.9rem 1.1rem', display:'flex', alignItems:'center', gap:10 }}>
              <motion.div animate={{ scale:[1,1.1,1] }} transition={{ duration:2, repeat:Infinity }}
                style={{ width:32, height:32, borderRadius:'50%', background:`rgba(${BR},${BG},${BB},0.2)`, border:`1px solid rgba(${BR},${BG},${BB},0.4)`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Bot size={16} style={{ color: BLUE }}/>
              </motion.div>
              <div>
                <div style={{ fontWeight:700, fontSize:'0.88rem', color:'#fff' }}>IA Nexxus</div>
                <div style={{ fontSize:'0.7rem', color:'rgba(255,255,255,0.45)' }}>Resposta instantânea</div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ height:280, overflowY:'auto', padding:'1rem', display:'flex', flexDirection:'column', gap:'0.65rem' }}>
              {msgs.map((m, i) => (
                <motion.div key={i} initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.25 }}
                  style={{ display:'flex', justifyContent: m.role==='bot' ? 'flex-start' : 'flex-end' }}>
                  <div style={{
                    maxWidth:'82%', borderRadius: m.role==='bot' ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                    padding:'0.6rem 0.85rem', fontSize:'0.82rem', lineHeight:1.5,
                    background: m.role==='bot' ? 'rgba(255,255,255,0.07)' : BLUE,
                    color: '#fff',
                  }}>{m.text}</div>
                </motion.div>
              ))}
              {typing && (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{ display:'flex', gap:4, padding:'0.6rem 0.85rem', background:'rgba(255,255,255,0.07)', borderRadius:'4px 16px 16px 16px', width:'fit-content' }}>
                  {[0,1,2].map(i => (
                    <motion.div key={i} animate={{ y:[0,-4,0] }} transition={{ duration:0.6, repeat:Infinity, delay:i*0.12 }}
                      style={{ width:6, height:6, borderRadius:'50%', background:`rgba(${BR},${BG},${BB},0.8)` }}/>
                  ))}
                </motion.div>
              )}
              <div ref={bottomRef}/>
            </div>

            {/* Quick replies */}
            {msgs.length <= 2 && (
              <div style={{ padding:'0 1rem 0.5rem', display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                {QUICK_REPLIES.map(q => (
                  <button key={q} onClick={() => send(q)}
                    style={{ background:'rgba(255,255,255,0.05)', border:`1px solid rgba(${BR},${BG},${BB},0.2)`, borderRadius:8, padding:'0.45rem 0.7rem', fontSize:'0.75rem', color:'rgba(255,255,255,0.7)', cursor:'pointer', textAlign:'left', transition:'all .2s' }}
                    onMouseEnter={e=>(e.currentTarget.style.borderColor=BLUE)}
                    onMouseLeave={e=>(e.currentTarget.style.borderColor=`rgba(${BR},${BG},${BB},0.2)`)}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div style={{ padding:'0.6rem 1rem 0.9rem', display:'flex', gap:8, borderTop:`1px solid rgba(255,255,255,0.06)` }}>
              <input
                value={input} onChange={e=>setInput(e.target.value)}
                onKeyDown={e=>e.key==='Enter'&&send()}
                placeholder="Digite sua dúvida..."
                style={{ flex:1, background:'rgba(255,255,255,0.06)', border:`1px solid rgba(${BR},${BG},${BB},0.2)`, borderRadius:10, padding:'0.5rem 0.75rem', fontSize:'0.82rem', color:'#fff', outline:'none', fontFamily:'inherit' }}
                onFocus={e=>e.target.style.borderColor=BLUE}
                onBlur={e=>e.target.style.borderColor=`rgba(${BR},${BG},${BB},0.2)`}
              />
              <button onClick={() => send()}
                style={{ width:36, height:36, borderRadius:10, background:BLUE, border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <CornerDownLeft size={15} style={{color:'#fff'}}/>
              </button>
            </div>

            {/* Disclaimer */}
            <div style={{ padding:'0 1rem 0.75rem', fontSize:'0.67rem', color:'rgba(255,255,255,0.25)', textAlign:'center' }}>
              IA para informações gerais. Preços sob consulta com nossa equipe.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Scramble hook ────────────────────────────────────────────────────────────
const SC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&'
function useScramble(target: string, delay = 500) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const [txt, setTxt] = useState(isMobile ? target : '')
  useEffect(() => {
    if (isMobile) { setTxt(target); return }
    let iter = 0; const max = target.length * 4
    const tid = setTimeout(() => {
      const iid = setInterval(() => {
        setTxt(target.split('').map((ch, i) => {
          if (ch === ' ') return ' '
          return i < Math.floor(iter / 4) ? ch : SC[Math.floor(Math.random() * SC.length)]
        }).join(''))
        iter++
        if (iter >= max) { clearInterval(iid); setTxt(target) }
      }, 28)
    }, delay)
    return () => clearTimeout(tid)
  }, [target, delay])
  return txt
}

// ─── Counter hook ─────────────────────────────────────────────────────────────
function useCounter(target: number, on: boolean) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!on) return
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / 1800, 1)
      setN(Math.round((1 - (1 - p) ** 3) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, on])
  return n
}


// ─── Spring cursor orb ────────────────────────────────────────────────────────
function CursorOrb() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const sx = useSpring(mx, { damping: 22, stiffness: 140, mass: 0.6 })
  const sy = useSpring(my, { damping: 22, stiffness: 140, mass: 0.6 })
  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX - 16); my.set(e.clientY - 16) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])
  return (
    <motion.div
      style={{ x:sx, y:sy, position:'fixed', top:0, left:0, zIndex:9999, width:32, height:32, borderRadius:'50%', background:`radial-gradient(circle, rgba(${BR},${BG},${BB},.55), transparent 70%)`, filter:'blur(6px)', pointerEvents:'none' }}
      className="hidden md:block"
    />
  )
}

// ─── Stat block ───────────────────────────────────────────────────────────────
function StatBlock({ value, sfx, label, on }: { value:number; sfx:string; label:string; on:boolean }) {
  const n = useCounter(value, on)
  return (
    <div style={{textAlign:'center'}}>
      <div style={{fontFamily:'Poppins,sans-serif', fontSize:'clamp(2.4rem,5vw,4rem)', fontWeight:800, lineHeight:1, color:'#fff'}}>
        <span style={{color:BLUE}}>{n}</span>
        <span style={{fontSize:'.55em', color:BLUE}}>{sfx}</span>
      </div>
      <p style={{marginTop:10, fontSize:'.85rem', color:'rgba(255,255,255,.55)', lineHeight:1.4}}>{label}</p>
    </div>
  )
}

// ─── Scroll to form ───────────────────────────────────────────────────────────
const scrollToForm = () => document.getElementById('form')?.scrollIntoView({ behavior:'smooth' })

// ─── Colors ───────────────────────────────────────────────────────────────────
const BG_HERO  = '#080d1a'
const BG_DARK  = '#060a16'
const BG_PANEL = '#0c1220'

// ═══════════════════════════════════════════════════════════════════════════════
export default function LP() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ nome:'', empresa:'', email:'', whatsapp:'', faturamento:'', mensagem:'' })
  const [formError, setFormError] = useState<string | null>(null)
  const [angle, setAngle] = useState(0)
  const [statOn, setStatOn] = useState(false)
  const [activePhoto, setActivePhoto] = useState(0)
  const [infernoMode, setInfernoMode] = useState<'inferno'|'ceu'>('ceu')
  const [activeMandalaPillar, setActiveMandalaPillar] = useState(0)

  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, { damping: 30, stiffness: 200 })
  const { scrollY } = useScroll()
  const heroGlowY = useTransform(scrollY, [0, 600], [0, -80])
  const svcGlowY  = useTransform(scrollY, [400, 1200], [0, -40])

  const line1 = useScramble('CHEGA DE CONTRATAR', 300)
  const line2 = useScramble('VENDEDOR E TORCER.', 900)

  useEffect(() => {
    let raf = 0
    const tick = () => { setAngle(a => (a + 0.5) % 360); raf = requestAnimationFrame(tick) }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError(null)
    const data = { ...form, origem: 'lp' as const }
    const emptyField = validateLead(data)
    if (emptyField) {
      setFormError('Por favor, preencha todos os campos obrigatórios corretamente.')
      return
    }
    await submitLead(data)
    navigate('/obrigado')
  }

  const inputStyle: React.CSSProperties = {
    width:'100%', background:'rgba(255,255,255,.06)',
    border:'1px solid rgba(255,255,255,.1)', borderRadius:12,
    padding:'.8rem 1rem', fontSize:'.9rem', color:'#fff',
    outline:'none', boxSizing:'border-box', transition:'border-color .2s', fontFamily:'inherit',
  }
  const onFocus = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => (e.target.style.borderColor = BLUE)
  const onBlur  = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => (e.target.style.borderColor = 'rgba(255,255,255,.1)')

  return (
    <div style={{background:BG_HERO, minHeight:'100vh', fontFamily:'Inter,system-ui,sans-serif', color:'#fff', overflowX:'hidden'}}>

      <CursorOrb />
      <AIChat />

      {/* Progress bar */}
      <motion.div style={{ scaleX:progressScaleX, transformOrigin:'left', position:'fixed', top:0, left:0, right:0, zIndex:50, height:3, background:`linear-gradient(90deg,${BLUE},rgba(${BR},${BG},${BB},.5))`, boxShadow:`0 0 8px ${BLUE}` }}/>

      {/* ════ HERO ════ */}
      <section style={{position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column', background:BG_HERO, overflow:'hidden'}}>
        {/* Vídeo de fundo */}
        <video autoPlay muted loop playsInline src={office.heroBg}
          style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
        {/* Overlay escuro para legibilidade do texto */}
        <div style={{position:'absolute', inset:0, background:'rgba(6,10,22,0.72)', pointerEvents:'none'}}/>
        <motion.div style={{ y:heroGlowY, position:'absolute', inset:0, background:`radial-gradient(ellipse 70% 60% at 50% 55%, rgba(${BR},${BG},${BB},.18), transparent 70%)`, pointerEvents:'none' }}/>
        <motion.div animate={{ opacity:[.4,.75,.4], scale:[1,1.1,1] }} transition={{ duration:6, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', top:'30%', left:'50%', width:'50vw', height:'50vw', borderRadius:'50%', background:`radial-gradient(circle, rgba(${BR},${BG},${BB},.1), transparent 65%)`, pointerEvents:'none', transform:'translate(-50%,-50%)' }}/>

        {/* Barra qualificadora — topo */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:.8 }}
          style={{ position:'relative', zIndex:10, borderBottom:`1px solid rgba(${BR},${BG},${BB},.1)`, padding:'.45rem 1rem', textAlign:'center', background:'rgba(6,10,22,.45)', backdropFilter:'blur(8px)' }}>
          <span style={{ fontSize:'.66rem', fontWeight:700, letterSpacing:'.15em', color:'rgba(255,255,255,.38)', textTransform:'uppercase' }}>
            EXCLUSIVO PARA EMPRESAS B2B · DIAGNÓSTICO{' '}<span style={{ color:BLUE }}>100% GRATUITO</span>{' '}SEM COMPROMISSO
          </span>
        </motion.div>

        <motion.nav initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6, ease:EASE }}
          style={{position:'relative', zIndex:10, padding:'1.2rem 2rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <img src={logo} alt="Nexxus" style={{height:30, width:'auto', filter:'brightness(0) invert(1)'}}/>
          <motion.button onClick={scrollToForm}
            whileHover={{ scale:1.05, boxShadow:`0 0 30px rgba(${BR},${BG},${BB},.6)` }} whileTap={{ scale:.97 }}
            style={{ background:BLUE, color:'#fff', border:'none', borderRadius:999, padding:'.6rem 1.5rem', fontSize:'.85rem', fontWeight:700, cursor:'pointer', letterSpacing:'.04em', boxShadow:`0 0 20px rgba(${BR},${BG},${BB},.35)` }}>
            DIAGNÓSTICO GRÁTIS
          </motion.button>
        </motion.nav>

        {/* ── Conteúdo central do Hero ── */}
        <div style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'2rem 1.5rem 1rem', position:'relative', zIndex:10}}>

          {/* Qualificador de público-alvo */}
          <motion.p initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }} transition={{ delay:.12, duration:.5, ease:EASE }}
            style={{ fontSize:'.68rem', fontWeight:700, letterSpacing:'.16em', color:'rgba(255,255,255,.62)', marginBottom:'1.4rem', textTransform:'uppercase', textShadow:'0 1px 8px rgba(0,0,0,.8)' }}>
            Para empresas B2B com faturamento acima de R$ 100 mil/mês
          </motion.p>

          {/* Badge pulsante */}
          <motion.div initial={{ opacity:0, scale:.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:.2, duration:.5, ease:EASE }}
            style={{ display:'inline-flex', alignItems:'center', gap:8, borderRadius:999, border:`1px solid rgba(${BR},${BG},${BB},.35)`, padding:'.38rem 1.1rem', fontSize:'.7rem', fontWeight:700, letterSpacing:'.14em', color:BLUE, marginBottom:'1.8rem', background:`rgba(${BR},${BG},${BB},.08)`, backdropFilter:'blur(8px)' }}>
            <motion.span animate={{ opacity:[1,0.2,1] }} transition={{ duration:1.4, repeat:Infinity }} style={{ width:7, height:7, borderRadius:'50%', background:BLUE, display:'inline-block', boxShadow:`0 0 8px ${BLUE}` }}/>
            DIAGNÓSTICO GRATUITO DISPONÍVEL
          </motion.div>

          {/* Headline 3 linhas */}
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:.3, duration:.7, ease:EASE }}
            style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, lineHeight:1.05, letterSpacing:'-.025em', fontSize:'clamp(2.2rem,6.5vw,5rem)', marginBottom:0 }}>
            <span style={{ display:'block', color:'#fff' }}>{line1}</span>
            <span style={{ display:'block', background:`linear-gradient(135deg,${BLUE} 30%,rgba(${BR},${BG},${BB},.55))`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{line2}</span>
            <span style={{ display:'block', color:'rgba(255,255,255,.92)', fontSize:'.55em', fontWeight:600, letterSpacing:'-.01em', marginTop:'.45em', lineHeight:1.3 }}>
              Monte um comercial que funciona enquanto você lidera.
            </span>
          </motion.h1>

          {/* Subtexto */}
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.62, duration:.7, ease:EASE }}
            style={{ maxWidth:560, fontSize:'clamp(.95rem,2.2vw,1.1rem)', color:'rgba(255,255,255,.78)', lineHeight:1.75, marginTop:'1.8rem', marginBottom:'2rem', textShadow:'0 2px 14px rgba(0,0,0,.9)' }}>
            Cansado de contratar vendedor CLT ou PJ que some nos primeiros meses? A Nexxus monta e opera sua equipe completa: SDR, Hunter e Closer, com método, dados e governança.{' '}
            <strong style={{ color:'rgba(255,255,255,.85)' }}>Operação no ar em 20 dias.</strong>
          </motion.p>

          {/* Prova social — logos de clientes */}
          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:.78, duration:.6, ease:EASE }}
            style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12, marginBottom:'2.2rem' }}>
            {/* Logo tiles */}
            <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', justifyContent:'center' }}>
              {[
                { src:'/logos/v4.webp', alt:'V4 Company' },
                { src:'/logos/berry.png', alt:'Berry Consultoria' },
                { src:'/logos/loovi.png', alt:'LOOVI' },
                { src:'/logos/vitta.jpg', alt:'Vitta Residencial' },
              ].map(({ src, alt }) => (
                <div key={alt} style={{ height:40, width:72, borderRadius:10, background:'rgba(255,255,255,.92)', display:'flex', alignItems:'center', justifyContent:'center', padding:'6px 10px', overflow:'hidden', backdropFilter:'blur(4px)' }}>
                  <img src={src} alt={alt} style={{ maxHeight:'100%', maxWidth:'100%', objectFit:'contain', display:'block' }}/>
                </div>
              ))}
            </div>
            {/* Contador */}
            <div style={{ display:'flex', alignItems:'center', gap:7 }}>
              <motion.span animate={{ opacity:[1,.3,1] }} transition={{ duration:1.8, repeat:Infinity }}
                style={{ width:7, height:7, borderRadius:'50%', background:'#22c55e', display:'inline-block', boxShadow:'0 0 8px rgba(34,197,94,.8)', flexShrink:0 }}/>
              <span style={{ fontSize:'.82rem', fontWeight:700, color:'rgba(255,255,255,.92)', textShadow:'0 1px 8px rgba(0,0,0,.7)' }}>
                mais de 600 empresas confiaram na Nexxus
              </span>
            </div>
          </motion.div>

          {/* CTA principal + link secundário */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.9, duration:.6, ease:EASE }}
            style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
            <motion.button onClick={scrollToForm}
              whileHover={{ scale:1.04, boxShadow:`0 0 50px rgba(${BR},${BG},${BB},.7), 0 12px 40px rgba(0,0,0,.5)` }}
              whileTap={{ scale:.97 }}
              animate={{ boxShadow:[`0 0 20px rgba(${BR},${BG},${BB},.35)`, `0 0 40px rgba(${BR},${BG},${BB},.6)`, `0 0 20px rgba(${BR},${BG},${BB},.35)`] }}
              transition={{ boxShadow:{ duration:2.5, repeat:Infinity, ease:'easeInOut' } }}
              style={{ display:'flex', alignItems:'center', gap:10, background:BLUE, color:'#fff', border:'none', borderRadius:999, padding:'1.1rem 2.8rem', fontSize:'1.05rem', fontWeight:800, cursor:'pointer', letterSpacing:'.025em' }}>
              → QUERO MEU DIAGNÓSTICO GRATUITO
            </motion.button>
            <motion.button onClick={scrollToForm}
              whileHover={{ color:'rgba(255,255,255,.7)' }}
              whileTap={{ scale:.97 }}
              style={{ display:'flex', alignItems:'center', gap:6, background:'none', border:'none', color:'rgba(255,255,255,.52)', cursor:'pointer', fontSize:'.83rem', fontWeight:500, fontFamily:'inherit' }}>
              Ver como funciona <ArrowDown size={13}/>
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.1, duration:.8 }}
            style={{ display:'flex', gap:24, marginTop:'2.2rem', flexWrap:'wrap', justifyContent:'center' }}>
            {['✓ Sem fidelidade','✓ Diagnóstico gratuito','✓ Operação em 20 dias'].map(t=>(
              <span key={t} style={{ fontSize:'.75rem', color:'rgba(255,255,255,.52)', letterSpacing:'.05em' }}>{t}</span>
            ))}
          </motion.div>
        </div>

        {/* Seta de scroll */}
        <motion.div animate={{ y:[0, 9, 0] }} transition={{ duration:2.2, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'relative', zIndex:10, display:'flex', justifyContent:'center', paddingBottom:'2.5rem' }}>
          <ArrowDown size={22} style={{ color:`rgba(${BR},${BG},${BB},.6)` }}/>
        </motion.div>
      </section>

      {/* ════ SOCIAL PROOF BAR ════ */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.5 }} variants={stagger(.1)}
        style={{ background:`rgba(${BR},${BG},${BB},.1)`, borderTop:`1px solid rgba(${BR},${BG},${BB},.18)`, borderBottom:`1px solid rgba(${BR},${BG},${BB},.18)`, padding:'1.4rem 2rem' }}>
        <div style={{maxWidth:900, margin:'0 auto', display:'flex', gap:'2rem', justifyContent:'space-around', flexWrap:'wrap', alignItems:'center'}}>
          {[{v:'20 dias',l:'Para operação no ar'},{v:'SDR + Hunter + Closer',l:'Squad completo dedicada'},{v:'80%',l:'das vendas no 5º ao 12º contato'},{v:'São Paulo/SP',l:'Estrutura física no Morumbi'}].map(({v,l})=>(
            <motion.div key={v} variants={fadeUp} style={{textAlign:'center', minWidth:140}}>
              <div style={{fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'1.1rem', color:'#fff'}}>{v}</div>
              <div style={{fontSize:'.72rem', color:'rgba(255,255,255,.45)', marginTop:3}}>{l}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════ PAIN ════ */}
      <section style={{background:'#f4f7ff', color:'#0f172a', padding:'clamp(4rem,8vw,7rem) 1.5rem'}}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.3}} variants={fadeUp}
            style={{textAlign:'center', marginBottom:'3.5rem'}}>
            <div style={{display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:'#ef4444', border:'1px solid rgba(239,68,68,.3)', borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:'rgba(239,68,68,.07)'}}>
              IDENTIFIQUE O PROBLEMA
            </div>
            <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1}}>
              Você ainda opera <span style={{color:'#ef4444'}}>assim</span>?
            </h2>
            <p style={{marginTop:'1rem', color:'#64748b', fontSize:'1.05rem', maxWidth:500, margin:'1rem auto 0'}}>
              Se identificar com 2 ou mais cenários abaixo, o diagnóstico da Nexxus é pra você.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.15}} variants={stagger(.07)}
            style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.2rem'}}>
            {PAINS.map(p=>(
              <motion.div key={p.text} variants={scaleIn}
                whileHover={{ scale:1.03, borderColor:'rgba(239,68,68,.4)', boxShadow:'0 0 20px rgba(239,68,68,.1), 0 8px 24px rgba(0,0,0,.1)', background:'#fff5f5' }}
                whileTap={{ scale:.98 }}
                style={{ background:'#fff', border:'1px solid rgba(239,68,68,.15)', borderRadius:20, padding:'1.5rem 1.8rem', display:'flex', alignItems:'center', gap:16, cursor:'default', transition:'background .2s', boxShadow:'0 2px 12px rgba(0,0,0,.06)' }}>
                <motion.span whileHover={{ scale:1.2, rotate:[-5,5,0] }} transition={{ duration:.3 }}
                  style={{fontSize:'2rem', flexShrink:0}}>{p.emoji}</motion.span>
                <span style={{fontSize:'.95rem', color:'#334155', lineHeight:1.45}}>{p.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.5}} variants={fadeUp}
            style={{textAlign:'center', marginTop:'3rem'}}>
            <p style={{color:'#475569', fontSize:'1rem', marginBottom:'1.4rem'}}>
              A Nexxus elimina <strong style={{color:'#0f172a'}}>todos</strong> esses problemas. Com método, não com sorte.
            </p>
            <motion.button onClick={scrollToForm}
              whileHover={{ scale:1.05, boxShadow:`0 0 24px rgba(${BR},${BG},${BB},.35)` }} whileTap={{ scale:.97 }}
              style={{ background:'transparent', border:`1px solid rgba(${BR},${BG},${BB},.5)`, color:BLUE, borderRadius:999, padding:'.75rem 2rem', fontSize:'.9rem', fontWeight:700, cursor:'pointer', letterSpacing:'.04em' }}>
              Quero resolver isso →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ════ SERVICES ════ */}
      <section style={{background:BG_HERO, padding:'clamp(4rem,8vw,7rem) 1.5rem', position:'relative', overflow:'hidden'}}>
        <motion.div style={{ y:svcGlowY, position:'absolute', inset:0, background:`radial-gradient(ellipse 80% 60% at 50% 50%, rgba(${BR},${BG},${BB},.07), transparent 70%)`, pointerEvents:'none' }}/>
        <div style={{maxWidth:1100, margin:'0 auto', position:'relative'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.3}} variants={fadeUp}
            style={{textAlign:'center', marginBottom:'3.5rem'}}>
            <div style={{display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, border:`1px solid rgba(${BR},${BG},${BB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${BR},${BG},${BB},.08)`}}>
              O QUE FAZEMOS
            </div>
            <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1}}>
              Três formas de <span style={{color:BLUE}}>destravar</span> o seu comercial
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.15}} variants={stagger(.12)}
            style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.5rem'}}>
            {SERVICES.map(s=>(
              <motion.div key={s.num} variants={fadeUp}
                whileHover={{ scale:1.03, borderColor:`rgba(${BR},${BG},${BB},.4)`, boxShadow:`0 0 40px rgba(${BR},${BG},${BB},.12), 0 16px 48px rgba(0,0,0,.4)`, y:-4 }} whileTap={{ scale:.98 }}
                style={{ background:BG_PANEL, borderRadius:24, padding:'2rem', border:`1px solid rgba(${BR},${BG},${BB},.15)`, position:'relative', overflow:'hidden', cursor:'default' }}>
                <div style={{position:'absolute', top:16, right:24, fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'4rem', color:`rgba(${BR},${BG},${BB},.08)`, lineHeight:1}}>{s.num}</div>
                <div style={{display:'inline-block', fontSize:'.68rem', fontWeight:700, letterSpacing:'.12em', color:BLUE, border:`1px solid rgba(${BR},${BG},${BB},.3)`, borderRadius:999, padding:'.25rem .8rem', marginBottom:'1.2rem', background:`rgba(${BR},${BG},${BB},.08)`}}>{s.badge}</div>
                <h3 style={{fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'1.25rem', marginBottom:'.8rem'}}>{s.title}</h3>
                <p style={{color:'rgba(255,255,255,.6)', fontSize:'.92rem', lineHeight:1.65}}>{s.body}</p>
                <motion.div animate={{ x:['20%','60%','20%'] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
                  style={{position:'absolute', bottom:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,rgba(${BR},${BG},${BB},.5),transparent)`, backgroundSize:'60% 100%', backgroundRepeat:'no-repeat'}}/>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════ GALERIA DO ESCRITÓRIO ════ */}
      {(() => {
        const PHOTOS = [
          { src: office.corredor,      label: 'Corredor' },
          { src: office.salaReuniao,   label: 'Sala de reunião' },
          { src: office.estudio,       label: 'Estúdio' },
          { src: office.varandaSkyline,label: 'Varanda' },
        ]
        return (
          <section style={{background:'#eef2ff', color:'#0f172a', padding:'clamp(3rem,6vw,5rem) 1.5rem'}}>
            <div style={{maxWidth:820, margin:'0 auto'}}>
              <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.3}} variants={fadeUp}
                style={{textAlign:'center', marginBottom:'2rem'}}>
                <div style={{display:'inline-block', fontSize:'.68rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, border:`1px solid rgba(${BR},${BG},${BB},.3)`, borderRadius:999, padding:'.3rem .9rem', marginBottom:'1rem', background:`rgba(${BR},${BG},${BB},.07)`}}>
                  ESTRUTURA REAL
                </div>
                <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'clamp(1.5rem,3.5vw,2.2rem)', lineHeight:1.15}}>
                  Nosso escritório em <span style={{color:BLUE}}>São Paulo</span>
                </h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.2}} variants={scaleIn}>
                {/* Main image */}
                <div style={{borderRadius:16, overflow:'hidden', position:'relative', aspectRatio:'16/9', background:'#cbd5e1'}}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activePhoto}
                      src={PHOTOS[activePhoto].src}
                      alt={PHOTOS[activePhoto].label}
                      initial={{opacity:0, scale:1.04}}
                      animate={{opacity:1, scale:1}}
                      exit={{opacity:0, scale:0.97}}
                      transition={{duration:.4, ease:EASE}}
                      style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}
                    />
                  </AnimatePresence>
                  {/* Label overlay */}
                  <div style={{position:'absolute', bottom:12, left:14, fontSize:'.72rem', fontWeight:600, color:'rgba(255,255,255,.7)', background:'rgba(6,10,22,.55)', backdropFilter:'blur(8px)', borderRadius:6, padding:'.25rem .6rem', letterSpacing:'.06em'}}>
                    {PHOTOS[activePhoto].label}
                  </div>
                </div>

                {/* Thumbnails */}
                <div style={{display:'flex', gap:'0.6rem', marginTop:'0.7rem', justifyContent:'center'}}>
                  {PHOTOS.map((p, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setActivePhoto(i)}
                      whileHover={{scale:1.06}}
                      whileTap={{scale:.96}}
                      style={{
                        width:'calc(25% - .5rem)', aspectRatio:'4/3', borderRadius:10, overflow:'hidden', padding:0,
                        border: i === activePhoto ? `2px solid ${BLUE}` : '2px solid transparent',
                        cursor:'pointer', flexShrink:0, position:'relative',
                        boxShadow: i === activePhoto ? `0 0 12px rgba(${BR},${BG},${BB},.4)` : 'none',
                        transition:'border-color .2s, box-shadow .2s',
                      }}>
                      <img src={p.src} alt={p.label} style={{width:'100%', height:'100%', objectFit:'cover', display:'block', opacity: i === activePhoto ? 1 : 0.55, transition:'opacity .2s'}}/>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )
      })()}

      {/* ════ VÍDEO DA FACHADA ════ */}
      <section style={{background:BG_HERO, padding:'clamp(2.5rem,5vw,4rem) 1.5rem', borderTop:`1px solid rgba(255,255,255,.04)`}}>
        <div style={{maxWidth:820, margin:'0 auto'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.3}} variants={stagger(.1)}
            style={{display:'flex', alignItems:'center', gap:'clamp(1.5rem,4vw,3rem)', flexWrap:'wrap'}}>

            {/* Text — left */}
            <motion.div variants={fadeUp} style={{flex:'1 1 260px', minWidth:220}}>
              <div style={{fontSize:'.68rem', fontWeight:700, letterSpacing:'.14em', color:BLUE, marginBottom:'0.9rem'}}>
                NOSSA SEDE
              </div>
              <h3 style={{fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'clamp(1.2rem,2.5vw,1.7rem)', lineHeight:1.2, marginBottom:'0.8rem'}}>
                Edifício Capital<br/>Corporate Office
              </h3>
              <p style={{fontSize:'.88rem', color:'rgba(255,255,255,.5)', lineHeight:1.65, margin:0}}>
                Localizado ao lado do Shopping Morumbi, em São Paulo.
                Infraestrutura de alto padrão para uma operação comercial de alto desempenho.
              </p>
            </motion.div>

            {/* Video — right, compact */}
            <motion.div variants={scaleIn} style={{flex:'0 0 auto', width:'clamp(220px,38%,320px)'}}>
              <div style={{borderRadius:12, overflow:'hidden', border:`1px solid rgba(${BR},${BG},${BB},.14)`, boxShadow:`0 6px 24px rgba(0,0,0,.45)`}}>
                <video src={office.fachadaVideo} autoPlay muted loop playsInline
                  style={{width:'100%', display:'block'}}/>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ════ STEPS ════ */}
      <section style={{background:'#f4f7ff', color:'#0f172a', padding:'clamp(4rem,8vw,7rem) 1.5rem'}}>
        <div style={{maxWidth:900, margin:'0 auto'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.3}} variants={fadeUp}
            style={{textAlign:'center', marginBottom:'3.5rem'}}>
            <div style={{display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, border:`1px solid rgba(${BR},${BG},${BB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${BR},${BG},${BB},.08)`}}>
              COMO FUNCIONA
            </div>
            <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1}}>
              Do zero à operação<br/><span style={{color:BLUE}}>em 20 dias</span>
            </h2>
          </motion.div>

          <div style={{position:'relative'}}>
            <motion.div initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true, amount:.2}} transition={{duration:1.2, ease:EASE}}
              style={{position:'absolute', left:27, top:40, bottom:40, width:2, background:`linear-gradient(to bottom,${BLUE},rgba(${BR},${BG},${BB},.1))`, transformOrigin:'top'}}/>
            <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.1}} variants={stagger(.14)}
              style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
              {STEPS.map((s,i)=>(
                <motion.div key={s.day} variants={slideLeft} style={{display:'flex', gap:'1.5rem', alignItems:'flex-start'}}>
                  <motion.div whileHover={{ scale:1.15, boxShadow:`0 0 24px rgba(${BR},${BG},${BB},.6)` }}
                    style={{ flexShrink:0, width:56, height:56, borderRadius:'50%', background:BG_PANEL, border:`2px solid ${BLUE}`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'1.1rem', color:BLUE, boxShadow:`0 0 16px rgba(${BR},${BG},${BB},.3)`, position:'relative', zIndex:1 }}>
                    {i+1}
                  </motion.div>
                  <motion.div whileHover={{ scale:1.01, borderColor:`rgba(${BR},${BG},${BB},.3)`, boxShadow:`0 4px 20px rgba(0,0,0,.1)` }}
                    style={{ background:'#fff', border:`1px solid rgba(${BR},${BG},${BB},.12)`, borderRadius:18, padding:'1.2rem 1.5rem', flex:1, boxShadow:'0 2px 12px rgba(0,0,0,.06)' }}>
                    <span style={{fontSize:'.72rem', fontWeight:700, letterSpacing:'.12em', color:BLUE}}>{s.day}</span>
                    <h3 style={{fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'1.1rem', margin:'.3rem 0 .5rem', color:'#0f172a'}}>{s.title}</h3>
                    <p style={{color:'#64748b', fontSize:'.9rem', lineHeight:1.55, margin:0}}>{s.body}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.5}} variants={fadeUp}
            style={{textAlign:'center', marginTop:'3rem'}}>
            <motion.button onClick={scrollToForm}
              whileHover={{ scale:1.05, boxShadow:`0 0 32px rgba(${BR},${BG},${BB},.6)` }} whileTap={{ scale:.97 }}
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:BLUE, color:'#fff', border:'none', borderRadius:999, padding:'1rem 2.2rem', fontSize:'1rem', fontWeight:700, cursor:'pointer', boxShadow:`0 0 24px rgba(${BR},${BG},${BB},.4)` }}>
              Iniciar meu diagnóstico <ChevronRight size={18}/>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ════ ONDE ESTÁ SUA OPERAÇÃO HOJE ════ */}
      <section style={{background:BG_DARK, padding:'clamp(4rem,8vw,6rem) 1.5rem', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(${BR},${BG},${BB},.04) 1px,transparent 1px),linear-gradient(90deg,rgba(${BR},${BG},${BB},.04) 1px,transparent 1px)`, backgroundSize:'60px 60px', pointerEvents:'none'}}/>
        <div style={{maxWidth:760, margin:'0 auto', position:'relative'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.25}} variants={stagger(.1)}>
            <motion.div variants={fadeUp} style={{textAlign:'center', marginBottom:'2.5rem'}}>
              <div style={{display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, border:`1px solid rgba(${BR},${BG},${BB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${BR},${BG},${BB},.08)`}}>
                O ANTES E O DEPOIS
              </div>
              <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4vw,2.8rem)', lineHeight:1.08, marginBottom:'.8rem'}}>
                Onde está a sua operação <span style={{color:BLUE}}>hoje?</span>
              </h2>
              <p style={{color:'rgba(255,255,255,.5)', fontSize:'1rem', lineHeight:1.6, maxWidth:460, margin:'0 auto'}}>
                A diferença entre crescer no susto e crescer com método. Compare os dois cenários.
              </p>
            </motion.div>

            {/* Toggle */}
            <motion.div variants={fadeUp} style={{display:'flex', justifyContent:'center', marginBottom:'2rem'}}>
              <div style={{display:'inline-flex', background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)', borderRadius:999, padding:5}}>
                <button type="button" onClick={()=>setInfernoMode('inferno')}
                  style={{display:'flex', alignItems:'center', gap:7, padding:'.7rem 1.5rem', borderRadius:999, border:'none', cursor:'pointer', fontSize:'.9rem', fontWeight:700, fontFamily:'inherit', transition:'all .25s',
                    background: infernoMode==='inferno' ? '#ef4444' : 'transparent',
                    color: infernoMode==='inferno' ? '#fff' : 'rgba(255,255,255,.5)'}}>
                  🔥 No improviso
                </button>
                <button type="button" onClick={()=>setInfernoMode('ceu')}
                  style={{display:'flex', alignItems:'center', gap:7, padding:'.7rem 1.5rem', borderRadius:999, border:'none', cursor:'pointer', fontSize:'.9rem', fontWeight:700, fontFamily:'inherit', transition:'all .25s',
                    background: infernoMode==='ceu' ? BLUE : 'transparent',
                    color: infernoMode==='ceu' ? '#fff' : 'rgba(255,255,255,.5)'}}>
                  ✨ Com a Nexxus
                </button>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div key={infernoMode}
                initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}
                transition={{duration:.3, ease:'easeOut'}}
                style={{borderRadius:24, padding:'clamp(1.5rem,4vw,2.5rem)',
                  border: infernoMode==='ceu' ? `1px solid rgba(${BR},${BG},${BB},.25)` : '1px solid rgba(239,68,68,.25)',
                  background: infernoMode==='ceu' ? `rgba(${BR},${BG},${BB},.07)` : 'rgba(239,68,68,.06)',
                }}>
                <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:'1.5rem'}}>
                  <div style={{width:44, height:44, borderRadius:12, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.25rem',
                    background: infernoMode==='ceu' ? BLUE : '#ef4444'}}>
                    {infernoMode==='ceu' ? '✨' : '🔥'}
                  </div>
                  <div>
                    <p style={{fontSize:'.68rem', fontWeight:700, letterSpacing:'.14em', margin:0,
                      color: infernoMode==='ceu' ? BLUE : '#f87171'}}>
                      {infernoMode==='ceu' ? 'OPERAÇÃO ESTRUTURADA' : 'COMERCIAL NO IMPROVISO'}
                    </p>
                    <p style={{fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'1rem', color:'#fff', margin:'3px 0 0', lineHeight:1.3}}>
                      {infernoMode==='ceu' ? 'Vender com método, dados e escala' : 'Vender sem previsibilidade nem controle'}
                    </p>
                  </div>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:'.75rem'}}>
                  {(infernoMode==='ceu' ? ceu : inferno).map((text,i)=>(
                    <div key={i} style={{display:'flex', alignItems:'flex-start', gap:10}}>
                      <span style={{marginTop:3, width:19, height:19, borderRadius:'50%', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.65rem', fontWeight:900, color:'#fff',
                        background: infernoMode==='ceu' ? BLUE : '#ef4444'}}>
                        {infernoMode==='ceu' ? '✓' : '✕'}
                      </span>
                      <span style={{fontSize:'.875rem', color:'rgba(255,255,255,.68)', lineHeight:1.55}}>{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ════ A MANDALA DOS 6 PILARES ════ */}
      <section style={{background:'#f4f7ff', color:'#0f172a', padding:'clamp(4rem,8vw,6rem) 1.5rem'}}>
        <div style={{maxWidth:1020, margin:'0 auto'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.25}} variants={fadeUp}
            style={{textAlign:'center', marginBottom:'3rem'}}>
            <div style={{display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, border:`1px solid rgba(${BR},${BG},${BB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${BR},${BG},${BB},.08)`}}>
              METODOLOGIA
            </div>
            <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4vw,2.8rem)', lineHeight:1.08}}>
              A Mandala dos <span style={{color:BLUE}}>6 pilares</span>
            </h2>
            <p style={{color:'#64748b', fontSize:'1rem', lineHeight:1.6, maxWidth:500, margin:'.8rem auto 0'}}>
              O ecossistema interligado que sustenta operações comerciais de alto desempenho. Passe o mouse ou toque em cada pilar.
            </p>
          </motion.div>

          <div style={{display:'flex', gap:'3rem', alignItems:'center', flexWrap:'wrap', justifyContent:'center'}}>
            {/* Circular mandala */}
            <motion.div initial={{opacity:0,scale:.88}} whileInView={{opacity:1,scale:1}} viewport={{once:true, amount:.3}} transition={{duration:.7, ease:EASE}}
              style={{position:'relative', width:360, height:360, flexShrink:0}}>
              <div style={{position:'absolute', inset:0, borderRadius:'50%', border:`1px dashed rgba(${BR},${BG},${BB},.22)`}}/>
              <div style={{position:'absolute', inset:'15%', borderRadius:'50%', border:`1px solid rgba(${BR},${BG},${BB},.1)`}}/>
              {/* Hub */}
              {(()=>{
                const cur = pillars[activeMandalaPillar]
                const HubIcon = iconMap[cur.icon]
                return (
                  <div style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', width:'46%', aspectRatio:'1/1', borderRadius:'50%', background:`linear-gradient(135deg,${BLUE},rgba(${BR},${BG},${BB},.7))`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'1rem', boxShadow:`0 0 40px rgba(${BR},${BG},${BB},.35)`}}>
                    {HubIcon && <HubIcon style={{color:'#fff', width:28, height:28}}/>}
                    <span style={{display:'block', fontSize:'.52rem', fontWeight:700, letterSpacing:'.18em', color:'rgba(255,255,255,.65)', marginTop:5}}>PILAR {cur.n}</span>
                    <span style={{display:'block', fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'.8rem', color:'#fff', lineHeight:1.2, marginTop:2}}>{cur.title}</span>
                  </div>
                )
              })()}
              {/* Nodes */}
              {pillars.map((p,i)=>{
                const ang = ((-90+i*60)*Math.PI)/180
                const r = 41
                const x = 50 + r*Math.cos(ang)
                const y = 50 + r*Math.sin(ang)
                const NodeIcon = iconMap[p.icon]
                const isActive = i===activeMandalaPillar
                return (
                  <motion.button key={p.n} type="button"
                    onMouseEnter={()=>setActiveMandalaPillar(i)}
                    onClick={()=>setActiveMandalaPillar(i)}
                    animate={{scale: isActive ? 1.12 : 1}}
                    transition={{duration:.25}}
                    style={{position:'absolute', left:`calc(${x}% - 30px)`, top:`calc(${y}% - 30px)`, width:60, height:60, borderRadius:14, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff',
                      border: isActive ? `2px solid ${BLUE}` : '2px solid rgba(0,0,0,.08)',
                      color: isActive ? BLUE : '#94a3b8',
                      boxShadow: isActive ? `0 0 24px rgba(${BR},${BG},${BB},.35)` : '0 2px 12px rgba(0,0,0,.07)',
                    }}>
                    {NodeIcon && <NodeIcon style={{width:22, height:22}}/>}
                  </motion.button>
                )
              })}
            </motion.div>

            {/* Interactive list */}
            <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.2}} variants={stagger(.08)}
              style={{flex:'1 1 300px', display:'flex', flexDirection:'column', gap:'.7rem', minWidth:280}}>
              {pillars.map((p,i)=>{
                const ListIcon = iconMap[p.icon]
                const isActive = i===activeMandalaPillar
                return (
                  <motion.button key={p.n} type="button" variants={fadeUp}
                    onClick={()=>setActiveMandalaPillar(i)}
                    onMouseEnter={()=>setActiveMandalaPillar(i)}
                    style={{display:'flex', alignItems:'flex-start', gap:14, borderRadius:18, padding:'1rem 1.2rem', cursor:'pointer', textAlign:'left', fontFamily:'inherit', transition:'all .25s',
                      background: isActive ? `rgba(${BR},${BG},${BB},.06)` : '#fff',
                      border: isActive ? `1.5px solid rgba(${BR},${BG},${BB},.3)` : '1.5px solid rgba(0,0,0,.07)',
                      boxShadow: isActive ? '0 4px 20px rgba(0,0,0,.08)' : '0 2px 8px rgba(0,0,0,.04)',
                    }}>
                    <span style={{width:40, height:40, borderRadius:10, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', transition:'all .25s',
                      background: isActive ? BLUE : '#f1f5f9',
                      color: isActive ? '#fff' : '#64748b',
                    }}>
                      {ListIcon && <ListIcon style={{width:18, height:18}}/>}
                    </span>
                    <span style={{display:'flex', flexDirection:'column'}}>
                      <span style={{display:'flex', alignItems:'center', gap:8}}>
                        <span style={{fontSize:'.7rem', fontWeight:800, color:BLUE}}>{p.n}</span>
                        <span style={{fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'.92rem', color:'#0f172a'}}>{p.title}</span>
                      </span>
                      <span style={{fontSize:'.82rem', color:'#64748b', lineHeight:1.5, marginTop:2}}>{p.description}</span>
                    </span>
                  </motion.button>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ TERCEIRIZAÇÃO COMERCIAL ════ */}
      <section style={{background:BG_HERO, color:'#fff', padding:'clamp(4rem,8vw,6rem) 1.5rem', position:'relative', overflow:'hidden'}}>
        <motion.div animate={{opacity:[.4,.7,.4], scale:[1,1.1,1]}} transition={{duration:7, repeat:Infinity, ease:'easeInOut'}}
          style={{position:'absolute', top:'-20%', right:'-10%', width:'50%', paddingTop:'50%', borderRadius:'50%', background:`radial-gradient(circle,rgba(${BR},${BG},${BB},.07),transparent 70%)`, pointerEvents:'none'}}/>
        <div style={{maxWidth:1100, margin:'0 auto', position:'relative'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.15}} variants={stagger(.1)}
            style={{display:'flex', gap:'clamp(2rem,5vw,4rem)', flexWrap:'wrap', alignItems:'flex-start'}}>

            {/* Coluna esquerda */}
            <motion.div variants={slideLeft} style={{flex:'1 1 280px', minWidth:260, maxWidth:420}}>
              <div style={{width:52, height:52, borderRadius:14, background:BLUE, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 0 24px rgba(${BR},${BG},${BB},.4)`, marginBottom:'1.2rem'}}>
                <Rocket style={{width:26, height:26, color:'#fff'}}/>
              </div>
              <div style={{fontSize:'.68rem', fontWeight:700, letterSpacing:'.14em', color:BLUE, marginBottom:'.6rem'}}>
                SERVIÇO MAIS PROCURADO
              </div>
              <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.7rem,3.5vw,2.4rem)', lineHeight:1.1, marginBottom:'.7rem'}}>
                Terceirização<br/>Comercial
              </h2>
              <p style={{color:BLUE, fontWeight:700, fontSize:'1rem', lineHeight:1.4, marginBottom:'1rem'}}>
                A operação comercial completa, do seu lado, sem você montar nada.
              </p>
              <p style={{color:'rgba(255,255,255,.55)', fontSize:'.9rem', lineHeight:1.65, marginBottom:'1.6rem'}}>
                Assumimos a operação de vendas da sua empresa com uma squad de especialistas dedicada, método validado, ferramentas configuradas e gestão data-driven. Você foca no seu negócio; nós entregamos previsibilidade e escala.
              </p>

              {/* Para quem é */}
              <div style={{background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)', borderRadius:16, padding:'1.2rem 1.4rem', marginBottom:'1.6rem'}}>
                <p style={{fontSize:'.78rem', fontWeight:700, color:'rgba(255,255,255,.45)', letterSpacing:'.08em', marginBottom:'.9rem', margin:'0 0 .9rem'}}>
                  👥 PARA QUEM É
                </p>
                <ul style={{listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'.65rem'}}>
                  {['Empresas que querem vender mais sem montar time do zero','Donos presos no operacional, apagando incêndio e cobrando follow-up','Negócios que precisam de previsibilidade e escalar rápido com método','Quem cansou de depender de indicação, sorte ou esforço individual'].map((item,i)=>(
                    <li key={i} style={{display:'flex', alignItems:'flex-start', gap:10}}>
                      <span style={{width:18, height:18, borderRadius:'50%', background:BLUE, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2, fontSize:'.6rem', fontWeight:900, color:'#fff'}}>✓</span>
                      <span style={{fontSize:'.85rem', color:'rgba(255,255,255,.65)', lineHeight:1.5}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button onClick={scrollToForm}
                whileHover={{scale:1.04, boxShadow:`0 0 32px rgba(${BR},${BG},${BB},.6)`}} whileTap={{scale:.97}}
                style={{display:'inline-flex', alignItems:'center', gap:8, background:BLUE, color:'#fff', border:'none', borderRadius:999, padding:'.95rem 2rem', fontSize:'1rem', fontWeight:700, cursor:'pointer', fontFamily:'inherit', boxShadow:`0 0 24px rgba(${BR},${BG},${BB},.35)`}}>
                Quero esse serviço <ChevronRight size={18}/>
              </motion.button>
            </motion.div>

            {/* Coluna direita */}
            <motion.div variants={fadeUp} style={{flex:'1 1 320px', minWidth:280}}>
              <p style={{fontSize:'.72rem', fontWeight:700, letterSpacing:'.14em', color:'rgba(255,255,255,.4)', marginBottom:'1rem'}}>O QUE ENTREGAMOS</p>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:'.8rem', marginBottom:'2rem'}}>
                {[
                  {title:'Squad multidisciplinar dedicada', body:'SDR, Hunter, Closer e Social Seller atuando cada um no papel certo, com Head Comercial e Sales Ops na gestão.'},
                  {title:'CRM e cadência configurados', body:'Funil estruturado, automações e a cadência D1-D12 rodando. 80% das vendas acontecem entre o 5º e o 12º contato.'},
                  {title:'Playbook comercial sob medida', body:'Processo, qualificação, matriz de objeções e metas documentados para padronizar o atendimento de alta conversão.'},
                  {title:'Gestão por dados e acompanhamento', body:'KPIs, dashboards e reuniões de cadência, com reunião operacional semanal e relatório estratégico.'},
                ].map((d,i)=>(
                  <motion.div key={i} whileHover={{borderColor:`rgba(${BR},${BG},${BB},.35)`, y:-2}}
                    style={{background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.08)', borderRadius:16, padding:'1.1rem 1.2rem', transition:'border-color .25s'}}>
                    <p style={{fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'.88rem', color:'#fff', marginBottom:'.4rem', margin:'0 0 .4rem'}}>{d.title}</p>
                    <p style={{fontSize:'.8rem', color:'rgba(255,255,255,.5)', lineHeight:1.55, margin:0}}>{d.body}</p>
                  </motion.div>
                ))}
              </div>

              <p style={{fontSize:'.72rem', fontWeight:700, letterSpacing:'.14em', color:'rgba(255,255,255,.4)', marginBottom:'1rem'}}>COMO FUNCIONA</p>
              <div style={{display:'flex', flexDirection:'column', gap:'.8rem', marginBottom:'1.5rem'}}>
                {[
                  {n:'01', title:'Diagnóstico e arquitetura', body:'Análise profunda do funil, mercado e produto. Desenhamos a arquitetura comercial (ICP, oferta, canal) antes das pessoas.'},
                  {n:'02', title:'Setup em até 20 dias', body:'Seleção e imersão do time, configuração de ferramentas e planejamento. Em 20 dias a operação está rodando.'},
                  {n:'03', title:'Operação ativa e gestão', body:'Time em campo gerando reuniões e fechamentos, com gestão semanal e otimização contínua da máquina.'},
                ].map((s,i)=>(
                  <div key={i} style={{display:'flex', gap:14, alignItems:'flex-start'}}>
                    <div style={{width:34, height:34, borderRadius:'50%', background:`rgba(${BR},${BG},${BB},.15)`, border:`1.5px solid rgba(${BR},${BG},${BB},.4)`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'.75rem', color:BLUE}}>{s.n}</div>
                    <div>
                      <p style={{fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'.88rem', color:'#fff', margin:'4px 0 3px'}}>{s.title}</p>
                      <p style={{fontSize:'.8rem', color:'rgba(255,255,255,.5)', lineHeight:1.55, margin:0}}>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{padding:'1rem 1.3rem', background:`rgba(${BR},${BG},${BB},.1)`, border:`1px solid rgba(${BR},${BG},${BB},.25)`, borderRadius:14}}>
                <span style={{fontWeight:700, color:BLUE, fontSize:'.85rem'}}>Resultado: </span>
                <span style={{fontSize:'.85rem', color:'rgba(255,255,255,.65)', lineHeight:1.55}}>
                  Uma operação comercial previsível, com time pronto, processo claro e o dono livre do operacional do dia a dia.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════ STATS ════ */}
      <motion.section onViewportEnter={() => setStatOn(true)} viewport={{ once:true, amount:.3 }}
        style={{background:BG_DARK, padding:'clamp(4rem,8vw,6rem) 1.5rem', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(${BR},${BG},${BB},.04) 1px, transparent 1px),linear-gradient(90deg,rgba(${BR},${BG},${BB},.04) 1px,transparent 1px)`, backgroundSize:'60px 60px', pointerEvents:'none'}}/>
        <motion.div animate={{ scale:[1,1.15,1], opacity:[.3,.55,.3] }} transition={{ duration:6, repeat:Infinity, ease:'easeInOut' }}
          style={{position:'absolute', inset:0, background:`radial-gradient(ellipse 100% 80% at 50% 50%, rgba(${BR},${BG},${BB},.06), transparent 70%)`, pointerEvents:'none'}}/>
        <div style={{maxWidth:900, margin:'0 auto', position:'relative'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.3}} variants={stagger(.12)}
            style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'2.5rem'}}>
            {STATS.map(s=>(
              <motion.div key={s.label} variants={fadeUp}>
                <StatBlock value={s.value} sfx={s.sfx} label={s.label} on={statOn}/>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ════ FORM ════ */}
      <section id="form" style={{background:BG_HERO, padding:'clamp(5rem,10vw,8rem) 1.5rem', position:'relative', overflow:'hidden'}}>
        <motion.div animate={{ opacity:[.6,1,.6] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
          style={{position:'absolute', inset:0, background:`radial-gradient(ellipse 80% 70% at 50% 0%, rgba(${BR},${BG},${BB},.1), transparent 60%)`, pointerEvents:'none'}}/>
        <motion.div animate={{ y:[0,-20,0], x:[0,10,0] }} transition={{ duration:7, repeat:Infinity, ease:'easeInOut' }}
          style={{position:'absolute', top:'10%', left:'5%', width:200, height:200, borderRadius:'50%', background:`radial-gradient(circle, rgba(${BR},${BG},${BB},.05), transparent 70%)`, pointerEvents:'none'}}/>
        <motion.div animate={{ y:[0,20,0], x:[0,-10,0] }} transition={{ duration:9, repeat:Infinity, ease:'easeInOut', delay:2 }}
          style={{position:'absolute', bottom:'10%', right:'5%', width:240, height:240, borderRadius:'50%', background:`radial-gradient(circle, rgba(${BR},${BG},${BB},.05), transparent 70%)`, pointerEvents:'none'}}/>

        <div style={{maxWidth:680, margin:'0 auto', position:'relative'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.3}} variants={stagger(.1)}
            style={{textAlign:'center', marginBottom:'3rem'}}>
            <motion.div variants={fadeUp}
              style={{display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, border:`1px solid rgba(${BR},${BG},${BB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.4rem', background:`rgba(${BR},${BG},${BB},.08)`}}>
              DIAGNÓSTICO GRATUITO
            </motion.div>
            <motion.h2 variants={fadeUp}
              style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3rem)', lineHeight:1.1, marginBottom:'1rem'}}>
              Chega de deixar<br/><span style={{color:BLUE}}>dinheiro na mesa.</span>
            </motion.h2>
            <motion.p variants={fadeUp}
              style={{color:'rgba(255,255,255,.55)', fontSize:'1rem', lineHeight:1.6, maxWidth:480, margin:'0 auto'}}>
              Preencha abaixo. Em até <strong style={{color:'#fff'}}>12 horas</strong> nossa equipe entra em contato com um diagnóstico real da sua operação.{' '}
              <strong style={{color:'#fff'}}>Sem custo, sem compromisso.</strong>
            </motion.p>
          </motion.div>

          {/* Form card — rotating border */}
          <motion.div initial={{opacity:0, scale:.94}} whileInView={{opacity:1, scale:1}} viewport={{once:true, amount:.2}} transition={{duration:.7, ease:EASE}}
            style={{ position:'relative', borderRadius:28, padding:3, background:`conic-gradient(from ${angle}deg, rgba(${BR},${BG},${BB},.85), rgba(${BR},${BG},${BB},.1), rgba(${BR},${BG},${BB},.85))` }}>
            <div style={{background:BG_PANEL, borderRadius:26, padding:'clamp(2rem,5vw,2.8rem)'}}>
              <motion.form initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.4}}
                    onSubmit={handleSubmit}
                    style={{display:'grid', gap:'1.1rem', gridTemplateColumns:'repeat(2,1fr)'}}>

                    <div style={{gridColumn:'1/2'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>NOME <span style={{color:BLUE}}>*</span></label>
                      <input required type="text" autoComplete="name" placeholder="Seu nome completo"
                        value={form.nome} onChange={e=>setForm(f=>({...f,nome:e.target.value}))}
                        style={inputStyle} onFocus={onFocus} onBlur={onBlur}/>
                    </div>

                    <div style={{gridColumn:'2/3'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>EMPRESA <span style={{color:BLUE}}>*</span></label>
                      <input required type="text" autoComplete="organization" placeholder="Nome da empresa"
                        value={form.empresa} onChange={e=>setForm(f=>({...f,empresa:e.target.value}))}
                        style={inputStyle} onFocus={onFocus} onBlur={onBlur}/>
                    </div>

                    <div style={{gridColumn:'1/2'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>E-MAIL <span style={{color:BLUE}}>*</span></label>
                      <input required type="email" autoComplete="email" placeholder="voce@empresa.com"
                        value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}
                        style={inputStyle} onFocus={onFocus} onBlur={onBlur}/>
                    </div>

                    <div style={{gridColumn:'2/3'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>
                        WHATSAPP <span style={{color:BLUE}}>*</span>
                      </label>
                      <input required type="tel" autoComplete="tel" placeholder="(11) 99999-9999"
                        value={form.whatsapp} onChange={e=>setForm(f=>({...f,whatsapp:e.target.value}))}
                        style={inputStyle} onFocus={onFocus}
                        onBlur={e=>{ onBlur(e); setForm(f=>({...f,whatsapp:applyCountryCode(e.target.value)})) }}/>
                    </div>

                    <div style={{gridColumn:'1/-1'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>FATURAMENTO MENSAL <span style={{color:BLUE}}>*</span></label>
                      <select required value={form.faturamento} onChange={e=>setForm(f=>({...f,faturamento:e.target.value}))}
                        style={{...inputStyle, cursor:'pointer', appearance:'none', background:'#0c1220', color:form.faturamento?'#fff':'rgba(255,255,255,.35)'}}
                        onFocus={onFocus} onBlur={onBlur}>
                        <option value="" disabled>Selecione uma faixa</option>
                        {FAIXAS.map(f=><option key={f} value={f} style={{background:'#0c1220',color:'#fff'}}>{f}</option>)}
                      </select>
                    </div>

                    <div style={{gridColumn:'1/-1'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>CONTE SOBRE SUA OPERAÇÃO <span style={{color:BLUE}}>*</span></label>
                      <textarea required rows={4} placeholder="Qual o seu principal desafio comercial hoje?"
                        value={form.mensagem} onChange={e=>setForm(f=>({...f,mensagem:e.target.value}))}
                        style={{...inputStyle, resize:'none'}}
                        onFocus={onFocus} onBlur={onBlur}/>
                    </div>

                    <div style={{gridColumn:'1/-1'}}>
                      {formError && (
                        <div style={{ marginBottom:'.8rem', background:'rgba(239,68,68,.12)', border:'1px solid rgba(239,68,68,.4)', borderRadius:10, padding:'.65rem 1rem', fontSize:'.82rem', color:'#fca5a5', textAlign:'center' }}>
                          ⚠️ {formError}
                        </div>
                      )}
                      <motion.button type="submit"
                        whileHover={{ scale:1.03, boxShadow:`0 0 40px rgba(${BR},${BG},${BB},.65), 0 8px 32px rgba(0,0,0,.4)` }} whileTap={{ scale:.97 }}
                        style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, width:'100%', background:BLUE, color:'#fff', border:'none', borderRadius:999, padding:'1.1rem 2rem', fontSize:'1rem', fontWeight:700, cursor:'pointer', letterSpacing:'.04em', boxShadow:`0 0 28px rgba(${BR},${BG},${BB},.45)` }}>
                        Solicitar diagnóstico gratuito
                        <Send size={17}/>
                      </motion.button>
                      <p style={{marginTop:'.8rem', textAlign:'center', fontSize:'.75rem', color:'rgba(255,255,255,.52)'}}>
                        Ao enviar, você concorda em ser contatado pela Nexxus. Resposta em até 12h.
                      </p>
                    </div>
                  </motion.form>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.5}} variants={stagger(.12)}
            style={{marginTop:'2.5rem', display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap'}}>
            {[{i:'🔒',t:'Dados 100% seguros'},{i:'⚡',t:'Resposta em até 12h'},{i:'🎯',t:'Sem compromisso'}].map(({i,t})=>(
              <motion.div key={t} variants={fadeIn} style={{display:'flex', alignItems:'center', gap:6, fontSize:'.8rem', color:'rgba(255,255,255,.38)'}}>
                <span>{i}</span>{t}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════ FOOTER ════ */}
      <footer style={{background:'#040810', borderTop:'1px solid rgba(255,255,255,.06)', padding:'2rem 1.5rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'.8rem'}}>
        <img src={logo} alt="Nexxus" style={{height:24, width:'auto', filter:'brightness(0) invert(1)', opacity:.5}}/>
        <p style={{fontSize:'.75rem', color:'rgba(255,255,255,.22)', textAlign:'center'}}>
          © {new Date().getFullYear()} Nexxus. Estruturação Comercial. São Paulo/SP — Edifício Capital Corporate Office, ao lado do Shopping Morumbi.
        </p>
        <a href="https://www.instagram.com/nexxus.inc/" target="_blank" rel="noopener noreferrer"
          style={{fontSize:'.75rem', color:'rgba(255,255,255,.52)', textDecoration:'none'}}>@nexxus.inc</a>
      </footer>

      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,.28); }
        select option { background: #0c1220; color: #fff; }
        @media (max-width: 680px) {
          .office-grid > div { grid-column: 1/-1 !important; grid-row: unset !important; }
        }
      `}</style>
    </div>
  )
}
