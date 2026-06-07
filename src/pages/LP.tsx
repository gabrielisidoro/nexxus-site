import {
  useEffect, useRef, useState, type FormEvent,
} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue,
} from 'framer-motion'
import { CheckCircle2, Send, ArrowDown, ChevronRight, Bot, X, CornerDownLeft } from 'lucide-react'
import logo from '@/assets/logo-nexxus.png'
import { office } from '@/assets/escritorio'

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
  const [txt, setTxt] = useState('')
  useEffect(() => {
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

// ─── Particle canvas ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const cvs = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  useEffect(() => {
    const canvas = cvs.current!; const ctx = canvas.getContext('2d')!
    let cw = 0, ch = 0, raf = 0
    interface D { x:number; y:number; vx:number; vy:number; r:number; ph:number }
    let dots: D[] = []
    const resize = () => {
      const dpr = devicePixelRatio||1
      cw = canvas.offsetWidth; ch = canvas.offsetHeight
      canvas.width = cw*dpr; canvas.height = ch*dpr
      ctx.setTransform(dpr,0,0,dpr,0,0)
      const n = Math.max(45, Math.floor((cw*ch)/15000))
      dots = Array.from({length:n},()=>({ x:Math.random()*cw, y:Math.random()*ch, vx:(Math.random()-.5)*.32, vy:(Math.random()-.5)*.32, r:Math.random()*1.3+.4, ph:Math.random()*Math.PI*2 }))
    }
    resize(); window.addEventListener('resize',resize)
    let t = 0
    const frame = () => {
      t+=.006; ctx.clearRect(0,0,cw,ch)
      const mx=mouse.current.x, my=mouse.current.y, hm=mx>-500
      if(hm){const g=ctx.createRadialGradient(mx,my,0,mx,my,300); g.addColorStop(0,`rgba(${BR},${BG},${BB},.13)`); g.addColorStop(1,`rgba(${BR},${BG},${BB},0)`); ctx.fillStyle=g; ctx.fillRect(0,0,cw,ch)}
      for(const d of dots){
        d.x+=d.vx; d.y+=d.vy
        if(d.x<=0||d.x>=cw){d.vx*=-1; d.x=Math.max(0,Math.min(cw,d.x))}
        if(d.y<=0||d.y>=ch){d.vy*=-1; d.y=Math.max(0,Math.min(ch,d.y))}
        if(hm){const dx=mx-d.x,dy=my-d.y,d2=dx*dx+dy*dy; if(d2<160*160){const f=(1-Math.sqrt(d2)/160)*.016; d.x+=dx*f; d.y+=dy*f}}
      }
      for(let i=0;i<dots.length;i++) for(let j=i+1;j<dots.length;j++){
        const dx=dots[i].x-dots[j].x,dy=dots[i].y-dots[j].y,d2=dx*dx+dy*dy
        if(d2>120*120)continue
        const t01=1-Math.sqrt(d2)/120
        ctx.beginPath(); ctx.moveTo(dots[i].x,dots[i].y); ctx.lineTo(dots[j].x,dots[j].y)
        ctx.strokeStyle=`rgba(${BR},${BG},${BB},${t01*.18})`; ctx.lineWidth=t01*.9; ctx.stroke()
      }
      for(const d of dots){
        ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2)
        ctx.fillStyle=`rgba(${BR},${BG},${BB},${.22+Math.sin(t+d.ph)*.08})`; ctx.fill()
      }
      raf=requestAnimationFrame(frame)
    }
    frame()
    const mv=(e:MouseEvent)=>{const r=canvas.getBoundingClientRect(); mouse.current={x:e.clientX-r.left,y:e.clientY-r.top}}
    const lv=()=>{mouse.current={x:-9999,y:-9999}}
    canvas.addEventListener('mousemove',mv); canvas.addEventListener('mouseleave',lv)
    return()=>{cancelAnimationFrame(raf); window.removeEventListener('resize',resize); canvas.removeEventListener('mousemove',mv); canvas.removeEventListener('mouseleave',lv)}
  },[])
  return <canvas ref={cvs} style={{position:'absolute',inset:0,width:'100%',height:'100%',display:'block'}}/>
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
  const [angle, setAngle] = useState(0)
  const [statOn, setStatOn] = useState(false)
  const [activePhoto, setActivePhoto] = useState(0)

  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, { damping: 30, stiffness: 200 })
  const { scrollY } = useScroll()
  const heroGlowY = useTransform(scrollY, [0, 600], [0, -80])
  const svcGlowY  = useTransform(scrollY, [400, 1200], [0, -40])

  const line1 = useScramble('PARE DE VENDER', 300)
  const line2 = useScramble('NO IMPROVISO.', 900)

  useEffect(() => {
    let raf = 0
    const tick = () => { setAngle(a => (a + 0.5) % 360); raf = requestAnimationFrame(tick) }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('LP lead:', form)
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
        <ParticleCanvas />
        <motion.div style={{ y:heroGlowY, position:'absolute', inset:0, background:`radial-gradient(ellipse 70% 60% at 60% 50%, rgba(${BR},${BG},${BB},.13), transparent 70%)`, pointerEvents:'none' }}/>
        <motion.div animate={{ opacity:[.4,.7,.4], scale:[1,1.1,1] }} transition={{ duration:6, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', top:'30%', left:'55%', width:'40vw', height:'40vw', borderRadius:'50%', background:`radial-gradient(circle, rgba(${BR},${BG},${BB},.08), transparent 65%)`, pointerEvents:'none', transform:'translate(-50%,-50%)' }}/>

        <motion.nav initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6, ease:EASE }}
          style={{position:'relative', zIndex:10, padding:'1.5rem 2rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <img src={logo} alt="Nexxus" style={{height:30, width:'auto', filter:'brightness(0) invert(1)'}}/>
          <motion.button onClick={scrollToForm}
            whileHover={{ scale:1.05, boxShadow:`0 0 30px rgba(${BR},${BG},${BB},.6)` }} whileTap={{ scale:.97 }}
            style={{ background:BLUE, color:'#fff', border:'none', borderRadius:999, padding:'.6rem 1.5rem', fontSize:'.85rem', fontWeight:700, cursor:'pointer', letterSpacing:'.04em', boxShadow:`0 0 20px rgba(${BR},${BG},${BB},.35)` }}>
            DIAGNÓSTICO GRÁTIS
          </motion.button>
        </motion.nav>

        <div style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'2rem 1.5rem', position:'relative', zIndex:10}}>
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:.2, duration:.6, ease:EASE }}
            style={{ display:'inline-flex', alignItems:'center', gap:8, borderRadius:999, border:`1px solid rgba(${BR},${BG},${BB},.35)`, padding:'.35rem 1rem', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, marginBottom:'2rem', background:`rgba(${BR},${BG},${BB},.08)` }}>
            ESTRUTURAÇÃO COMERCIAL COMPLETA
          </motion.div>

          <motion.h1 initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.35, duration:.5 }}
            style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, lineHeight:1.05, letterSpacing:'-.02em', fontSize:'clamp(2.4rem,7vw,5.5rem)', marginBottom:'.2em' }}>
            <span style={{display:'block', color:'#fff'}}>{line1}</span>
            <span style={{ display:'block', background:`linear-gradient(135deg,${BLUE},rgba(${BR},${BG},${BB},.65))`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{line2}</span>
            <span style={{display:'block', color:'#fff'}}>ESCALE COM MÉTODO.</span>
          </motion.h1>

          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.7, duration:.7, ease:EASE }}
            style={{ maxWidth:560, fontSize:'clamp(1rem,2.5vw,1.2rem)', color:'rgba(255,255,255,.62)', lineHeight:1.65, marginTop:'1.8rem', marginBottom:'2.8rem' }}>
            A Nexxus monta e opera o comercial da sua empresa com squad SDR, Hunter e Closer,
            com método, dados e governança. <strong style={{color:'rgba(255,255,255,.9)'}}>Operação no ar em 20 dias.</strong>
          </motion.p>

          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.9, duration:.6, ease:EASE }}
            style={{display:'flex', gap:16, flexWrap:'wrap', justifyContent:'center'}}>
            <motion.button onClick={scrollToForm}
              whileHover={{ scale:1.04, boxShadow:`0 0 40px rgba(${BR},${BG},${BB},.65), 0 8px 32px rgba(0,0,0,.4)` }} whileTap={{ scale:.97 }}
              animate={{ boxShadow:[`0 0 20px rgba(${BR},${BG},${BB},.3)`,`0 0 36px rgba(${BR},${BG},${BB},.55)`,`0 0 20px rgba(${BR},${BG},${BB},.3)`] }}
              transition={{ boxShadow:{ duration:2.5, repeat:Infinity, ease:'easeInOut' } }}
              style={{ display:'flex', alignItems:'center', gap:8, background:BLUE, color:'#fff', border:'none', borderRadius:999, padding:'1rem 2.2rem', fontSize:'1rem', fontWeight:700, cursor:'pointer' }}>
              Solicitar diagnóstico gratuito <ChevronRight size={18}/>
            </motion.button>
            <motion.button onClick={scrollToForm}
              whileHover={{ scale:1.03, background:'rgba(255,255,255,.1)' }} whileTap={{ scale:.97 }}
              style={{ display:'flex', alignItems:'center', gap:8, background:'rgba(255,255,255,.06)', color:'#fff', border:'1px solid rgba(255,255,255,.15)', borderRadius:999, padding:'1rem 2rem', fontSize:'1rem', fontWeight:600, cursor:'pointer', backdropFilter:'blur(8px)' }}>
              Ver como funciona
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.1, duration:.8 }}
            style={{display:'flex', gap:24, marginTop:'3rem', flexWrap:'wrap', justifyContent:'center'}}>
            {['✓ Operação em 20 dias','✓ Diagnóstico gratuito','✓ Sem compromisso'].map(t=>(
              <span key={t} style={{fontSize:'.78rem', color:'rgba(255,255,255,.42)', letterSpacing:'.04em'}}>{t}</span>
            ))}
          </motion.div>
        </div>

        <motion.div animate={{ y:[0, 9, 0] }} transition={{ duration:2.2, repeat:Infinity, ease:'easeInOut' }}
          style={{position:'relative', zIndex:10, display:'flex', justifyContent:'center', paddingBottom:'2.5rem'}}>
          <ArrowDown size={22} style={{color:`rgba(${BR},${BG},${BB},.6)`}}/>
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
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div key="success"
                    initial={{opacity:0, y:24}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-24}} transition={{duration:.5, ease:EASE}}
                    style={{textAlign:'center', padding:'3rem 1rem'}}>
                    <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring', damping:14, stiffness:200, delay:.15}}
                      style={{display:'flex', justifyContent:'center', marginBottom:'1.5rem'}}>
                      <div style={{width:72, height:72, borderRadius:'50%', background:`rgba(${BR},${BG},${BB},.15)`, border:`2px solid ${BLUE}`, display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <CheckCircle2 size={36} style={{color:BLUE}}/>
                      </div>
                    </motion.div>
                    <motion.h3 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}}
                      style={{fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'1.6rem', marginBottom:'.8rem'}}>
                      Lead recebido!
                    </motion.h3>
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4}}
                      style={{color:'rgba(255,255,255,.6)', fontSize:'1rem', lineHeight:1.6, maxWidth:380, margin:'0 auto'}}>
                      Nossa equipe vai analisar sua operação e retornar em até 12 horas com um diagnóstico personalizado.
                    </motion.p>
                    <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}
                      onClick={() => setSent(false)}
                      style={{marginTop:'2rem', background:'transparent', border:'1px solid rgba(255,255,255,.2)', color:'rgba(255,255,255,.7)', borderRadius:999, padding:'.6rem 1.6rem', fontSize:'.85rem', cursor:'pointer'}}>
                      Enviar outra mensagem
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, y:16}} transition={{duration:.4}}
                    onSubmit={handleSubmit}
                    style={{display:'grid', gap:'1.1rem', gridTemplateColumns:'repeat(2,1fr)'}}>

                    <div style={{gridColumn:'1/2'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>NOME <span style={{color:BLUE}}>*</span></label>
                      <input required type="text" autoComplete="name" placeholder="Seu nome completo"
                        value={form.nome} onChange={e=>setForm(f=>({...f,nome:e.target.value}))}
                        style={inputStyle} onFocus={onFocus} onBlur={onBlur}/>
                    </div>

                    <div style={{gridColumn:'2/3'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>EMPRESA</label>
                      <input type="text" autoComplete="organization" placeholder="Nome da empresa"
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
                        style={inputStyle} onFocus={onFocus} onBlur={onBlur}/>
                    </div>

                    <div style={{gridColumn:'1/-1'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>FATURAMENTO MENSAL</label>
                      <select value={form.faturamento} onChange={e=>setForm(f=>({...f,faturamento:e.target.value}))}
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
                      <motion.button type="submit"
                        whileHover={{ scale:1.03, boxShadow:`0 0 40px rgba(${BR},${BG},${BB},.65), 0 8px 32px rgba(0,0,0,.4)` }} whileTap={{ scale:.97 }}
                        style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, width:'100%', background:BLUE, color:'#fff', border:'none', borderRadius:999, padding:'1.1rem 2rem', fontSize:'1rem', fontWeight:700, cursor:'pointer', letterSpacing:'.04em', boxShadow:`0 0 28px rgba(${BR},${BG},${BB},.45)` }}>
                        Solicitar diagnóstico gratuito
                        <Send size={17}/>
                      </motion.button>
                      <p style={{marginTop:'.8rem', textAlign:'center', fontSize:'.75rem', color:'rgba(255,255,255,.28)'}}>
                        Ao enviar, você concorda em ser contatado pela Nexxus. Resposta em até 12h.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
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
          style={{fontSize:'.75rem', color:'rgba(255,255,255,.28)', textDecoration:'none'}}>@nexxus.inc</a>
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
