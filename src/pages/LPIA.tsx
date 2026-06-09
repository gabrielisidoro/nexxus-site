import {
  useEffect, useRef, useState, type FormEvent,
} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  motion, AnimatePresence, useScroll, useTransform, useSpring,
  useMotionValue, useInView,
} from 'framer-motion'
import {
  Send, ArrowDown, ChevronRight, Bot, X, CornerDownLeft,
  Zap, Search, MessageSquare, RotateCcw, TrendingUp, Mic, Volume2,
  Instagram, Mail, Phone,
} from 'lucide-react'
import logo from '@/assets/logo-nexxus.png'
import { submitLead, applyCountryCode } from '@/lib/submitLead'

// ─── Brand ───────────────────────────────────────────────────────────────────
const OR = 255, OG = 96, OB = 0
const ORANGE = `rgb(${OR},${OG},${OB})`           // #FF6000
const BG_HERO  = '#0a0a0a'
const BG_DARK  = '#111111'
const BG_PANEL = '#1a1a1a'
const EASE = [0.22, 1, 0.36, 1] as const

// ─── Variants ────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.55 } },
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.91 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
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

const AI_AGENTS = [
  { icon: Search,        color: '#FF6000', label: 'SDR IA',          desc: 'Qualifica leads automaticamente e identifica oportunidades reais com perguntas estratégicas.' },
  { icon: Zap,           color: '#f59e0b', label: 'Hunter IA',        desc: 'Prospecção ativa, abordagem inicial e abertura de conversas com ICP e perfil de decisão.' },
  { icon: TrendingUp,    color: '#10b981', label: 'Closer IA',        desc: 'Conduz o lead para proposta, quebra objeções e avança para reunião ou fechamento.' },
  { icon: MessageSquare, color: '#3b82f6', label: 'Atendimento IA',   desc: 'Responde dúvidas, apresenta serviços e mantém o lead engajado no momento certo.' },
  { icon: RotateCcw,     color: '#8b5cf6', label: 'Recuperação IA',   desc: 'Reativa leads antigos, propostas sem resposta e oportunidades perdidas no CRM.' },
]

const PAINS = [
  { e:'⚡', t:'Lead chega e demora para ser respondido' },
  { e:'❌', t:'SDR não dá conta de todos os contatos' },
  { e:'📉', t:'Vendedor esquece o follow-up' },
  { e:'🔄', t:'Lead esfria antes de receber proposta' },
  { e:'🧠', t:'CRM sempre desatualizado' },
  { e:'🎲', t:'Curiosos consomem tempo de quem poderia fechar' },
]

const BEFORES = [
  'Lead chega. Alguém demora para responder.',
  'Atendimento manual sem padrão.',
  'Vendedor se perde no follow-up.',
  'CRM incompleto, gestor às cegas.',
  'Oportunidade esfria e some.',
]

const AFTERS = [
  'Lead chega. IA responde em segundos.',
  'Qualifica, identifica interesse real.',
  'Agenda reunião ou direciona para o vendedor.',
  'Registra tudo. Faz follow-up automático.',
  'Recupera contatos parados. Funil em movimento.',
]

const HOW_STEPS = [
  { n:'01', title:'Diagnóstico comercial',      body:'Mapeamos seu funil, oferta, público, canais de entrada, objeções e processo atual.' },
  { n:'02', title:'Construção do agente',       body:'Criamos a IA com playbook, tom de voz, perguntas comerciais e critérios de qualificação.' },
  { n:'03', title:'Integração com seus canais', body:'Conectamos ao WhatsApp, landing page, CRM ou formulários da sua operação.' },
  { n:'04', title:'Treinamento e validação',    body:'Ajustamos respostas, fluxos e objeções para garantir alinhamento com sua operação.' },
  { n:'05', title:'Operação e otimização',      body:'Acompanhamos resultados, analisamos gargalos e melhoramos continuamente o agente.' },
]

const FAQ_ITEMS = [
  { q:'A IA substitui meu vendedor?',         a:'Não. Ela retira do vendedor tarefas repetitivas e operacionais, permitindo que ele foque nos leads com maior chance de fechamento.' },
  { q:'Preciso ter equipe comercial?',         a:'Não necessariamente. A Nexxus pode ajudar tanto empresas que já têm time quanto quem precisa estruturar o comercial do zero.' },
  { q:'A IA consegue qualificar leads?',       a:'Sim. Ela faz perguntas, identifica perfil, entende necessidade, coleta dados e encaminha o lead conforme critérios definidos.' },
  { q:'Funciona para qualquer segmento?',      a:'Funciona melhor quando existe uma oferta clara, um público definido e um processo comercial estruturável. Por isso começamos com diagnóstico.' },
  { q:'A IA fala como minha empresa?',         a:'Sim. O agente é treinado com tom de voz, oferta, diferenciais, objeções e forma de atendimento da sua operação.' },
]

const NAV_LINKS = [
  { label: 'Agentes IA',    href: '#agentes' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'FAQ',           href: '#faq' },
]

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
  }, [target, delay, isMobile])
  return txt
}

// ─── Cursor orb ──────────────────────────────────────────────────────────────
function CursorOrb() {
  const mx = useMotionValue(-100); const my = useMotionValue(-100)
  const sx = useSpring(mx, { damping:22, stiffness:140, mass:.6 })
  const sy = useSpring(my, { damping:22, stiffness:140, mass:.6 })
  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX-16); my.set(e.clientY-16) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])
  return (
    <motion.div style={{ x:sx, y:sy, position:'fixed', top:0, left:0, zIndex:9999, width:32, height:32, borderRadius:'50%', background:`radial-gradient(circle,rgba(${OR},${OG},${OB},.55),transparent 70%)`, filter:'blur(6px)', pointerEvents:'none' }} className="hidden md:block"/>
  )
}

// ─── Sticky Nav ──────────────────────────────────────────────────────────────
function StickyNav({ onCta }: { onCta: () => void }) {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const unsub = scrollY.on('change', v => setVisible(v > 420))
    return unsub
  }, [scrollY])
  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: .35, ease: EASE }}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            background: 'rgba(10,10,10,.92)', backdropFilter: 'blur(18px)',
            borderBottom: `1px solid rgba(${OR},${OG},${OB},.18)`,
            padding: '.7rem 2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            boxShadow: `0 4px 32px rgba(0,0,0,.6)`,
          }}>
          <img src={logo} alt="Nexxus" style={{ height: 26, filter: 'brightness(0) invert(1)' }}/>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(.8rem,2.5vw,2.2rem)' }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href}
                style={{ fontSize: '.82rem', fontWeight: 600, color: 'rgba(255,255,255,.62)', textDecoration: 'none', letterSpacing: '.03em', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.62)')}>
                {l.label}
              </a>
            ))}
            <motion.button onClick={onCta}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}
              style={{ background: ORANGE, color: '#fff', border: 'none', borderRadius: 999, padding: '.5rem 1.2rem', fontSize: '.82rem', fontWeight: 800, cursor: 'pointer', letterSpacing: '.03em', boxShadow: `0 0 18px rgba(${OR},${OG},${OB},.4)` }}>
              Quero Implementar IA
            </motion.button>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

// ─── Partner Logos ────────────────────────────────────────────────────────────
function GooglePartnerLogo() {
  return <img src="/logo-google.jpg" alt="Google Partner" style={{ height: 40, width: 'auto', display: 'block', objectFit: 'contain' }}/>
}

function MetaLogo() {
  return <img src="/logo-meta.jpeg" alt="Meta Conversions API" style={{ height: 40, width: 'auto', display: 'block', objectFit: 'contain' }}/>
}

function OpenAILogo() {
  return <img src="/logo-openai.png" alt="OpenAI" style={{ height: 40, width: 'auto', display: 'block', objectFit: 'contain' }}/>
}

// ─── Waveform ─────────────────────────────────────────────────────────────────
function Waveform({ color, playing }: { color: string; playing: boolean }) {
  const bars = [3,6,9,7,4,8,11,6,4,9,7,5,10,8,3]
  return (
    <div style={{ display:'flex', alignItems:'center', gap:3, height:36 }}>
      {bars.map((h,i) => (
        <motion.div key={i}
          animate={playing ? { scaleY:[1,h/6,1], opacity:[.6,1,.6] } : { scaleY:.4, opacity:.3 }}
          transition={{ duration:.6+i*.04, repeat:playing ? Infinity : 0, delay:i*.05, ease:'easeInOut' }}
          style={{ width:3, height:h*3, borderRadius:999, background:color, transformOrigin:'center' }}/>
      ))}
    </div>
  )
}

// ─── Voice Clone Section ──────────────────────────────────────────────────────
function VoiceCloneSection() {
  const [playing, setPlaying] = useState(false)
  const [timer, setTimer] = useState(0)
  const ref = useRef<ReturnType<typeof setInterval>>()
  useEffect(() => {
    ref.current = setInterval(() => setTimer(t => t+1), 1000)
    setPlaying(true)
    return () => clearInterval(ref.current)
  }, [])
  const fmt = (s: number) => `${String(Math.floor(s/60)).padStart(2,'0')} : ${String(s%60).padStart(2,'0')} : 00`
  return (
    <section style={{ background:'#fff', color:'#0f172a', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
      <div style={{ maxWidth:1000, margin:'0 auto' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={stagger(.1)}
          style={{ textAlign:'center', marginBottom:'3rem' }}>
          <motion.div variants={fadeUp}
            style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:ORANGE, border:`1px solid rgba(${OR},${OG},${OB},.3)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${OR},${OG},${OB},.07)` }}>
            <Mic size={13}/> VOZ CLONADA
          </motion.div>
          <motion.h2 variants={fadeUp}
            style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.8rem,4vw,3rem)', lineHeight:1.1 }}>
            Use sua voz como voz<br/>do <span style={{ color:ORANGE }}>atendimento</span>
          </motion.h2>
          <motion.p variants={fadeUp}
            style={{ marginTop:'1rem', color:'#64748b', fontSize:'1rem', maxWidth:520, margin:'1rem auto 0', lineHeight:1.65 }}>
            Clone sua própria voz para que a Nexxus IA envie áudios no WhatsApp com a <strong>sua voz</strong>, sempre que um cliente responder em áudio, humanizando o atendimento.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.2 }} variants={stagger(.15)}
          style={{ display:'flex', gap:'clamp(1rem,3vw,2.5rem)', alignItems:'center', justifyContent:'center', flexWrap:'wrap' }}>

          {/* Sua voz */}
          <motion.div variants={scaleIn}
            style={{ flex:'0 1 290px', background:'#f8fafc', borderRadius:24, padding:'1.8rem', boxShadow:'0 8px 40px rgba(0,0,0,.08)', border:'1px solid #e2e8f0' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginBottom:'1.2rem' }}>
              <div style={{ width:36, height:36, borderRadius:'50%', background:`linear-gradient(135deg,${ORANGE},rgba(${OR},${OG},${OB},.6))`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <span style={{ fontSize:'.65rem', color:'#fff', fontWeight:800 }}>VC</span>
              </div>
              <div style={{ display:'flex', alignItems:'center', background:'#fff', border:'1px solid #e2e8f0', borderRadius:999, padding:'.3rem .8rem', fontSize:'.78rem', fontWeight:700, color:'#334155' }}>Sua voz</div>
            </div>
            <div style={{ textAlign:'center', marginBottom:'.8rem' }}>
              <span style={{ fontFamily:'monospace', fontWeight:700, fontSize:'1.3rem', color:ORANGE }}>{fmt(timer)}</span>
              <div style={{ fontSize:'.72rem', color:'#94a3b8', marginTop:2 }}>Gravando áudio...</div>
            </div>
            <div style={{ display:'flex', justifyContent:'center', marginBottom:'1rem' }}>
              <Waveform color={ORANGE} playing={playing}/>
            </div>
            <div style={{ display:'flex', justifyContent:'center' }}>
              <motion.div animate={{ scale:[1,1.12,1], opacity:[.85,1,.85] }} transition={{ duration:1.2, repeat:Infinity }}
                style={{ width:48, height:48, borderRadius:'50%', background:'#ef4444', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 0 8px rgba(239,68,68,.15)' }}>
                <div style={{ width:16, height:16, borderRadius:3, background:'#fff' }}/>
              </motion.div>
            </div>
          </motion.div>

          {/* Center */}
          <motion.div variants={scaleIn} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
            <motion.div animate={{ rotate:360 }} transition={{ duration:8, repeat:Infinity, ease:'linear' }}
              style={{ width:72, height:72, borderRadius:18, background:`linear-gradient(135deg,${ORANGE},#b45309)`, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 0 40px rgba(${OR},${OG},${OB},.35)`, flexShrink:0 }}>
              <img src={logo} alt="Nexxus" style={{ height:28, filter:'brightness(0) invert(1)' }}/>
            </motion.div>
            <div style={{ fontSize:'.65rem', color:'#94a3b8', fontWeight:600, letterSpacing:'.08em', textAlign:'center' }}>Clonando<br/>sua voz...</div>
          </motion.div>

          {/* Voz clonada */}
          <motion.div variants={scaleIn}
            style={{ flex:'0 1 290px', background:'#f8fafc', borderRadius:24, padding:'1.8rem', boxShadow:'0 8px 40px rgba(0,0,0,.08)', border:'1px solid #e2e8f0' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginBottom:'1.2rem' }}>
              <div style={{ width:36, height:36, borderRadius:'50%', background:'linear-gradient(135deg,#8b5cf6,#6d28d9)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Volume2 size={16} style={{ color:'#fff' }}/>
              </div>
              <div style={{ background:'#fff', border:'1px solid #e9d5ff', borderRadius:999, padding:'.3rem .8rem', fontSize:'.78rem', fontWeight:700, color:'#7c3aed' }}>Voz Clonada</div>
            </div>
            <div style={{ textAlign:'center', marginBottom:'.8rem' }}>
              <span style={{ fontFamily:'monospace', fontWeight:700, fontSize:'1.3rem', color:'#7c3aed' }}>{fmt(timer)}</span>
              <div style={{ fontSize:'.72rem', color:'#94a3b8', marginTop:2 }}>Reproduzindo áudio...</div>
            </div>
            <div style={{ display:'flex', justifyContent:'center', marginBottom:'1rem' }}>
              <Waveform color="#8b5cf6" playing={playing}/>
            </div>
            <div style={{ display:'flex', justifyContent:'center' }}>
              <motion.button onClick={() => setPlaying(p => !p)}
                whileHover={{ scale:1.08 }} whileTap={{ scale:.94 }}
                style={{ width:48, height:48, borderRadius:'50%', background:'#f1f5f9', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 12px rgba(0,0,0,.1)' }}>
                {playing
                  ? <div style={{ display:'flex', gap:4 }}><div style={{ width:4, height:16, borderRadius:2, background:'#334155' }}/><div style={{ width:4, height:16, borderRadius:2, background:'#334155' }}/></div>
                  : <div style={{ width:0, height:0, borderTop:'8px solid transparent', borderBottom:'8px solid transparent', borderLeft:'14px solid #334155', marginLeft:3 }}/>}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Agent Node ───────────────────────────────────────────────────────────────
function AgentNode({ agent, index }: { agent: typeof AI_AGENTS[number]; index: number }) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(nodeRef, { once:true, margin:'-60px' })
  const AgentIcon = agent.icon
  return (
    <motion.div ref={nodeRef}
      initial={{ opacity:0, x:-28 }} animate={isInView ? { opacity:1, x:0 } : {}}
      transition={{ duration:.6, delay:index*.08, ease:EASE }}
      style={{ display:'flex', alignItems:'flex-start', gap:'1.4rem', position:'relative' }}>
      <motion.div whileHover={{ scale:1.15, boxShadow:`0 0 28px ${agent.color}66` }}
        style={{ flexShrink:0, width:56, height:56, borderRadius:'50%', background:`${agent.color}18`, border:`2px solid ${agent.color}`, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 0 16px ${agent.color}33`, zIndex:1 }}>
        <AgentIcon size={20} style={{ color:agent.color }}/>
      </motion.div>
      <motion.div whileHover={{ borderColor:agent.color, y:-2, boxShadow:`0 8px 32px ${agent.color}22` }}
        style={{ background:BG_PANEL, borderRadius:18, padding:'1.2rem 1.4rem', flex:1, border:`1px solid rgba(255,255,255,.08)`, transition:'all .25s' }}>
        <span style={{ fontSize:'.65rem', fontWeight:800, letterSpacing:'.14em', color:agent.color }}>{agent.label}</span>
        <p style={{ fontSize:'.88rem', color:'rgba(255,255,255,.6)', lineHeight:1.6, margin:'.3rem 0 0' }}>{agent.desc}</p>
      </motion.div>
    </motion.div>
  )
}

// ─── Pipeline ─────────────────────────────────────────────────────────────────
function AIPipeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target:containerRef, offset:['start 0.85','end 0.2'] })
  const lineScale = useSpring(useTransform(scrollYProgress,[0,.9],[0,1]), { damping:25, stiffness:120 })
  return (
    <div ref={containerRef} style={{ position:'relative', display:'flex', flexDirection:'column', gap:'1.6rem' }}>
      <div style={{ position:'absolute', left:27, top:28, bottom:80, width:2, background:'rgba(255,255,255,.08)' }}>
        <motion.div style={{ scaleY:lineScale, transformOrigin:'top', height:'100%', background:`linear-gradient(to bottom,${ORANGE},rgba(${OR},${OG},${OB},.3))`, borderRadius:999 }}/>
      </div>
      {AI_AGENTS.map((agent,i) => <AgentNode key={agent.label} agent={agent} index={i}/>)}
      <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.5 }} transition={{ duration:.6, ease:EASE }}
        style={{ background:`linear-gradient(135deg,${ORANGE},#b45309)`, borderRadius:18, padding:'1.2rem 1.4rem', display:'flex', alignItems:'center', gap:12, marginLeft:72 }}>
        <TrendingUp size={22} style={{ color:'#fff', flexShrink:0 }}/>
        <div>
          <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'.95rem', color:'#fff' }}>Funil sempre em movimento</div>
          <div style={{ fontSize:'.8rem', color:'rgba(255,255,255,.75)', marginTop:2 }}>Leads qualificados. CRM atualizado. Vendedor focado no que importa.</div>
        </div>
      </motion.div>
    </div>
  )
}

// ─── AI Chat ──────────────────────────────────────────────────────────────────
const IA_QUICK = ['O que é SDR IA?','Como funciona a clonagem de voz?','Quero implementar IA no meu comercial']

function getBotReply(q: string): string {
  const l = q.toLowerCase()
  if (/(preço|valor|quanto|custo|investimento)/.test(l)) return 'Para investimento, nossa equipe faz uma avaliação personalizada. Preencha o formulário e retornamos em até 12h. 👇'
  if (/(sdr|qualif)/.test(l)) return 'O SDR IA qualifica leads automaticamente com perguntas estratégicas. Só oportunidades com perfil chegam ao seu time.'
  if (/(hunter|prospect)/.test(l)) return 'O Hunter IA faz prospecção ativa e abertura de conversas com base no seu ICP, sem depender do seu time para isso.'
  if (/(closer|fechar|venda)/.test(l)) return 'O Closer IA apoia a condução comercial com quebra de objeções e avanço do lead para proposta ou reunião.'
  if (/(recupera|reativa|antigo)/.test(l)) return 'O Agente de Recuperação reativa leads antigos, propostas sem resposta e oportunidades esquecidas no CRM.'
  if (/(voz|audio|áudio|clone)/.test(l)) return 'Clonamos a voz do responsável pelo atendimento. Quando um cliente responde em áudio no WhatsApp, a IA responde com a voz clonada.'
  if (/(oi|olá|bom dia|boa tarde|tudo)/.test(l)) return 'Olá! Sou a IA da Nexxus. Posso tirar suas dúvidas sobre agentes de IA comercial. Como posso ajudar?'
  return 'Boa pergunta! Para uma resposta personalizada ao seu caso, recomendo preencher o formulário de diagnóstico. Nossa equipe retorna em até 12h.'
}

interface ChatMsg { role:'bot'|'user'; text:string }

function AIChat() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<ChatMsg[]>([{ role:'bot', text:'Olá! Tire suas dúvidas sobre agentes de IA para o seu comercial. Como posso ajudar?' }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:'smooth' }) }, [msgs, typing])
  function send(text?: string) {
    const msg = (text ?? input).trim(); if (!msg) return
    setInput(''); setMsgs(m=>[...m,{role:'user',text:msg}]); setTyping(true)
    setTimeout(() => { setTyping(false); setMsgs(m=>[...m,{role:'bot',text:getBotReply(msg)}]) }, 900)
  }
  return (
    <>
      <motion.button onClick={() => setOpen(o=>!o)}
        whileHover={{ scale:1.08 }} whileTap={{ scale:.94 }}
        animate={{ boxShadow: open ? `0 0 0 3px rgba(${OR},${OG},${OB},.4),0 8px 32px rgba(0,0,0,.5)` : [`0 0 20px rgba(${OR},${OG},${OB},.4)`,`0 0 36px rgba(${OR},${OG},${OB},.65)`,`0 0 20px rgba(${OR},${OG},${OB},.4)`] }}
        transition={{ boxShadow:{ duration:2.5, repeat:open?0:Infinity, ease:'easeInOut' } }}
        style={{ position:'fixed', bottom:28, right:28, zIndex:200, width:60, height:60, borderRadius:'50%', background:ORANGE, border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff' }}>
        <AnimatePresence mode="wait">
          {open ? <motion.span key="x" initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}} transition={{duration:.2}}><X size={22}/></motion.span>
                : <motion.span key="bot" initial={{rotate:90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}} transition={{duration:.2}}><Bot size={24}/></motion.span>}
        </AnimatePresence>
      </motion.button>
      <AnimatePresence>
        {!open && <motion.div initial={{opacity:0,x:10}} animate={{opacity:1,x:0}} exit={{opacity:0,x:10}} style={{ position:'fixed', bottom:38, right:98, zIndex:200, background:'rgba(10,10,10,.92)', border:`1px solid rgba(${OR},${OG},${OB},.3)`, borderRadius:999, padding:'.35rem .9rem', fontSize:'.75rem', fontWeight:700, color:'#fff', backdropFilter:'blur(12px)', pointerEvents:'none', whiteSpace:'nowrap' }}>IA Nexxus</motion.div>}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:20,scale:.94}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20,scale:.94}} transition={{duration:.3,ease:EASE}}
            style={{ position:'fixed', bottom:100, right:28, zIndex:200, width:'min(340px,calc(100vw - 40px))', background:'#1a1a1a', border:`1px solid rgba(${OR},${OG},${OB},.25)`, borderRadius:20, overflow:'hidden', boxShadow:`0 24px 64px rgba(0,0,0,.7)`, fontFamily:'Inter,system-ui,sans-serif' }}>
            <div style={{ background:`linear-gradient(135deg,rgba(${OR},${OG},${OB},.15),rgba(${OR},${OG},${OB},.05))`, borderBottom:`1px solid rgba(${OR},${OG},${OB},.15)`, padding:'.9rem 1.1rem', display:'flex', alignItems:'center', gap:10 }}>
              <motion.div animate={{scale:[1,1.1,1]}} transition={{duration:2,repeat:Infinity}} style={{ width:32, height:32, borderRadius:'50%', background:`rgba(${OR},${OG},${OB},.2)`, border:`1px solid rgba(${OR},${OG},${OB},.4)`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Bot size={16} style={{color:ORANGE}}/>
              </motion.div>
              <div><div style={{fontWeight:700,fontSize:'.88rem',color:'#fff'}}>IA Nexxus</div><div style={{fontSize:'.7rem',color:'rgba(255,255,255,.45)'}}>Resposta instantânea</div></div>
            </div>
            <div style={{height:280,overflowY:'auto',padding:'1rem',display:'flex',flexDirection:'column',gap:'.65rem'}}>
              {msgs.map((m,i)=>(
                <motion.div key={i} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.25}} style={{display:'flex',justifyContent:m.role==='bot'?'flex-start':'flex-end'}}>
                  <div style={{maxWidth:'82%',borderRadius:m.role==='bot'?'4px 16px 16px 16px':'16px 4px 16px 16px',padding:'.6rem .85rem',fontSize:'.82rem',lineHeight:1.5,background:m.role==='bot'?'rgba(255,255,255,.07)':ORANGE,color:'#fff'}}>{m.text}</div>
                </motion.div>
              ))}
              {typing && <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{display:'flex',gap:4,padding:'.6rem .85rem',background:'rgba(255,255,255,.07)',borderRadius:'4px 16px 16px 16px',width:'fit-content'}}>
                {[0,1,2].map(i=><motion.div key={i} animate={{y:[0,-4,0]}} transition={{duration:.6,repeat:Infinity,delay:i*.12}} style={{width:6,height:6,borderRadius:'50%',background:`rgba(${OR},${OG},${OB},.8)`}}/>)}
              </motion.div>}
              <div ref={bottomRef}/>
            </div>
            {msgs.length<=2 && <div style={{padding:'0 1rem .5rem',display:'flex',flexDirection:'column',gap:'.4rem'}}>
              {IA_QUICK.map(q=><button key={q} onClick={()=>send(q)} style={{background:'rgba(255,255,255,.05)',border:`1px solid rgba(${OR},${OG},${OB},.2)`,borderRadius:8,padding:'.45rem .7rem',fontSize:'.75rem',color:'rgba(255,255,255,.7)',cursor:'pointer',textAlign:'left'}}
                onMouseEnter={e=>(e.currentTarget.style.borderColor=ORANGE)} onMouseLeave={e=>(e.currentTarget.style.borderColor=`rgba(${OR},${OG},${OB},.2)`)}>{q}</button>)}
            </div>}
            <div style={{padding:'.6rem 1rem .9rem',display:'flex',gap:8,borderTop:`1px solid rgba(255,255,255,.06)`}}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Digite sua dúvida..."
                style={{flex:1,background:'rgba(255,255,255,.06)',border:`1px solid rgba(${OR},${OG},${OB},.2)`,borderRadius:10,padding:'.5rem .75rem',fontSize:'.82rem',color:'#fff',outline:'none',fontFamily:'inherit'}}
                onFocus={e=>(e.target.style.borderColor=ORANGE)} onBlur={e=>(e.target.style.borderColor=`rgba(${OR},${OG},${OB},.2)`)}/>
              <button onClick={()=>send()} style={{width:36,height:36,borderRadius:10,background:ORANGE,border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <CornerDownLeft size={15} style={{color:'#fff'}}/>
              </button>
            </div>
            <div style={{padding:'0 1rem .75rem',fontSize:'.67rem',color:'rgba(255,255,255,.25)',textAlign:'center'}}>IA para informações gerais. Diagnóstico gratuito com nossa equipe.</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Scroll to form ───────────────────────────────────────────────────────────
const scrollToForm = () => document.getElementById('form-ia')?.scrollIntoView({ behavior:'smooth' })

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background:'#080808', borderTop:`1px solid rgba(${OR},${OG},${OB},.12)`, padding:'clamp(3rem,6vw,5rem) 1.5rem 0' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'clamp(2rem,4vw,4rem)', paddingBottom:'3rem' }}>

          {/* Col 1 — Brand */}
          <div>
            <img src={logo} alt="Nexxus" style={{ height:30, filter:'brightness(0) invert(1)', marginBottom:'1rem' }}/>
            <p style={{ fontSize:'.88rem', color:'rgba(255,255,255,.45)', lineHeight:1.7, marginBottom:'1.2rem', maxWidth:260 }}>
              Estruturação comercial e IA para empresas B2B. Operação previsível e escalável, sem depender de improviso.
            </p>
            <div style={{ display:'flex', gap:'.8rem' }}>
              <a href="https://www.instagram.com/nexxus.inc/" target="_blank" rel="noopener noreferrer"
                style={{ width:38, height:38, borderRadius:'50%', background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.1)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,.55)', textDecoration:'none', transition:'all .2s' }}
                onMouseEnter={e=>(e.currentTarget.style.borderColor=ORANGE, e.currentTarget.style.color=ORANGE)}
                onMouseLeave={e=>(e.currentTarget.style.borderColor='rgba(255,255,255,.1)', e.currentTarget.style.color='rgba(255,255,255,.55)')}>
                <Instagram size={16}/>
              </a>
              <a href="mailto:contato@nexxusagencia.com.br"
                style={{ width:38, height:38, borderRadius:'50%', background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.1)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,.55)', textDecoration:'none', transition:'all .2s' }}
                onMouseEnter={e=>(e.currentTarget.style.borderColor=ORANGE, e.currentTarget.style.color=ORANGE)}
                onMouseLeave={e=>(e.currentTarget.style.borderColor='rgba(255,255,255,.1)', e.currentTarget.style.color='rgba(255,255,255,.55)')}>
                <Mail size={16}/>
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <div style={{ fontSize:'.68rem', fontWeight:800, letterSpacing:'.16em', color:'rgba(255,255,255,.3)', marginBottom:'1.2rem', textTransform:'uppercase' }}>Navegação</div>
            <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'.7rem' }}>
              {['Agentes IA','Como Funciona','Voz Clonada','Antes e Depois','FAQ'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g,'-')}`}
                    style={{ fontSize:'.88rem', color:'rgba(255,255,255,.5)', textDecoration:'none', transition:'color .2s' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='#fff')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,.5)')}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Serviços */}
          <div>
            <div style={{ fontSize:'.68rem', fontWeight:800, letterSpacing:'.16em', color:'rgba(255,255,255,.3)', marginBottom:'1.2rem', textTransform:'uppercase' }}>Serviços IA</div>
            <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'.7rem' }}>
              {['SDR IA','Hunter IA','Closer IA','Atendimento IA','Recuperação IA','Voz Clonada'].map(item => (
                <li key={item} style={{ display:'flex', alignItems:'center', gap:7 }}>
                  <span style={{ width:5, height:5, borderRadius:'50%', background:ORANGE, display:'inline-block', flexShrink:0 }}/>
                  <span style={{ fontSize:'.88rem', color:'rgba(255,255,255,.5)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <div style={{ fontSize:'.68rem', fontWeight:800, letterSpacing:'.16em', color:'rgba(255,255,255,.3)', marginBottom:'1.2rem', textTransform:'uppercase' }}>Contato</div>
            <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'.9rem' }}>
              <li style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                <Mail size={15} style={{ color:ORANGE, marginTop:2, flexShrink:0 }}/>
                <div>
                  <div style={{ fontSize:'.72rem', color:'rgba(255,255,255,.3)', marginBottom:2 }}>E-mail</div>
                  <a href="mailto:contato@nexxusagencia.com.br" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.65)', textDecoration:'none' }}>contato@nexxusagencia.com.br</a>
                </div>
              </li>
              <li style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                <Instagram size={15} style={{ color:ORANGE, marginTop:2, flexShrink:0 }}/>
                <div>
                  <div style={{ fontSize:'.72rem', color:'rgba(255,255,255,.3)', marginBottom:2 }}>Instagram</div>
                  <a href="https://www.instagram.com/nexxus.inc/" target="_blank" rel="noopener noreferrer" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.65)', textDecoration:'none' }}>@nexxus.inc</a>
                </div>
              </li>
              <li style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                <Phone size={15} style={{ color:ORANGE, marginTop:2, flexShrink:0 }}/>
                <div>
                  <div style={{ fontSize:'.72rem', color:'rgba(255,255,255,.3)', marginBottom:2 }}>Localização</div>
                  <span style={{ fontSize:'.85rem', color:'rgba(255,255,255,.65)' }}>Edifício Capital Corporate<br/>São Paulo, SP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:`1px solid rgba(255,255,255,.06)`, padding:'1.2rem 0', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'.8rem' }}>
          <p style={{ fontSize:'.75rem', color:'rgba(255,255,255,.22)', margin:0 }}>
            © {new Date().getFullYear()} Nexxus. Todos os direitos reservados. São Paulo, SP.
          </p>
          <motion.button onClick={scrollToForm}
            whileHover={{ scale:1.04 }} whileTap={{ scale:.97 }}
            style={{ display:'flex', alignItems:'center', gap:8, background:`rgba(${OR},${OG},${OB},.12)`, border:`1px solid rgba(${OR},${OG},${OB},.3)`, borderRadius:999, padding:'.45rem 1.1rem', fontSize:'.75rem', fontWeight:700, color:ORANGE, cursor:'pointer', letterSpacing:'.04em' }}>
            ⚡ Quero implementar IA no meu comercial
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function LPIA() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ nome:'', empresa:'', email:'', whatsapp:'', faturamento:'', mensagem:'' })
  const [angle, setAngle] = useState(0)
  const [activeFaq, setActiveFaq] = useState<number|null>(null)

  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, { damping:30, stiffness:200 })

  const line1 = useScramble('SUA IA COMERCIAL', 300)
  const line2 = useScramble('JÁ ESTÁ PRONTA.', 800)

  useEffect(() => {
    let raf = 0
    const tick = () => { setAngle(a=>(a+.5)%360); raf = requestAnimationFrame(tick) }
    tick(); return () => cancelAnimationFrame(raf)
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await submitLead({ ...form, origem:'lp-ia' })
    navigate('/obrigado')
  }

  const inputStyle: React.CSSProperties = {
    width:'100%', background:'rgba(255,255,255,.06)',
    border:'1px solid rgba(255,255,255,.1)', borderRadius:12,
    padding:'.8rem 1rem', fontSize:'.9rem', color:'#fff',
    outline:'none', boxSizing:'border-box', transition:'border-color .2s', fontFamily:'inherit',
  }
  const onFocus = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => (e.target.style.borderColor=ORANGE)
  const onBlur  = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => (e.target.style.borderColor='rgba(255,255,255,.1)')

  return (
    <div style={{ background:BG_HERO, minHeight:'100vh', fontFamily:'Inter,system-ui,sans-serif', color:'#fff', overflowX:'hidden' }}>
      <CursorOrb/>
      <AIChat/>
      <StickyNav onCta={scrollToForm}/>

      {/* Progress bar */}
      <motion.div style={{ scaleX:progressScaleX, transformOrigin:'left', position:'fixed', top:0, left:0, right:0, zIndex:50, height:3, background:`linear-gradient(90deg,${ORANGE},rgba(${OR},${OG},${OB},.4))`, boxShadow:`0 0 8px ${ORANGE}` }}/>

      {/* ════ HERO ════ */}
      <section style={{ position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column', background:BG_HERO, overflow:'hidden' }}>
        {/* Hero background video */}
        <div style={{ position:'absolute', inset:0, zIndex:0, overflow:'hidden' }}>
          <video
            autoPlay muted loop playsInline
            style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }}>
            <source src="/hero-ia.mp4" type="video/mp4"/>
          </video>
          {/* Dark gradient overlay — keeps left side dark for text, lets right side breathe */}
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(105deg, rgba(10,10,10,.95) 0%, rgba(10,10,10,.85) 38%, rgba(10,10,10,.5) 65%, rgba(10,10,10,.28) 100%)' }}/>
          {/* Subtle orange glow */}
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 70% at 68% 50%, rgba(255,96,0,.08), transparent 60%)' }}/>
        </div>
        <motion.div animate={{ opacity:[.25,.5,.25], scale:[1,1.06,1] }} transition={{ duration:6, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', top:'35%', left:'25%', transform:'translate(-50%,-50%)', width:'40vw', height:'40vw', borderRadius:'50%', background:`radial-gradient(circle,rgba(${OR},${OG},${OB},.06),transparent 65%)`, pointerEvents:'none', zIndex:1 }}/>

        {/* Top bar */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:.8 }}
          style={{ position:'relative', zIndex:10, borderBottom:`1px solid rgba(${OR},${OG},${OB},.18)`, padding:'.45rem 1rem', textAlign:'center', background:'rgba(10,10,10,.65)', backdropFilter:'blur(12px)' }}>
          <span style={{ fontSize:'.66rem', fontWeight:700, letterSpacing:'.15em', color:'rgba(255,255,255,.38)', textTransform:'uppercase' }}>
            IMPLEMENTAÇÃO DE IA COMERCIAL · DIAGNÓSTICO{' '}<span style={{ color:ORANGE }}>100% GRATUITO</span>
          </span>
        </motion.div>

        {/* Nav */}
        <motion.nav initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6, ease:EASE }}
          style={{ position:'relative', zIndex:10, padding:'1.2rem 2rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <img src={logo} alt="Nexxus" style={{ height:30, filter:'brightness(0) invert(1)' }}/>
          <motion.button onClick={scrollToForm}
            whileHover={{ scale:1.05, boxShadow:`0 0 30px rgba(${OR},${OG},${OB},.6)` }} whileTap={{ scale:.97 }}
            style={{ background:ORANGE, color:'#fff', border:'none', borderRadius:999, padding:'.6rem 1.5rem', fontSize:'.85rem', fontWeight:700, cursor:'pointer', letterSpacing:'.04em', boxShadow:`0 0 20px rgba(${OR},${OG},${OB},.35)` }}>
            QUERO IMPLEMENTAR IA
          </motion.button>
        </motion.nav>

        {/* Content */}
        <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'2rem 1.5rem 1rem', position:'relative', zIndex:10 }}>

          <motion.div initial={{ opacity:0, scale:.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:.15, duration:.5, ease:EASE }}
            style={{ display:'inline-flex', alignItems:'center', gap:8, borderRadius:999, border:`1px solid rgba(${OR},${OG},${OB},.35)`, padding:'.38rem 1.1rem', fontSize:'.7rem', fontWeight:700, letterSpacing:'.14em', color:ORANGE, marginBottom:'1.8rem', background:`rgba(${OR},${OG},${OB},.1)`, backdropFilter:'blur(8px)' }}>
            <motion.span animate={{ opacity:[1,.2,1] }} transition={{ duration:1.4, repeat:Infinity }} style={{ width:7, height:7, borderRadius:'50%', background:ORANGE, display:'inline-block', boxShadow:`0 0 8px ${ORANGE}` }}/>
            IA COMERCIAL · NEXXUS
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:.25, duration:.7, ease:EASE }}
            style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, lineHeight:1.05, letterSpacing:'-.025em', fontSize:'clamp(2.2rem,6.5vw,5.2rem)', marginBottom:0 }}>
            <span style={{ display:'block', color:'#fff' }}>{line1}</span>
            <span style={{ display:'block', background:`linear-gradient(135deg,${ORANGE} 20%,#f59e0b 80%)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{line2}</span>
            <span style={{ display:'block', color:'rgba(255,255,255,.85)', fontSize:'.52em', fontWeight:600, letterSpacing:'-.01em', marginTop:'.45em', lineHeight:1.3 }}>Ela só precisa ser ativada.</span>
          </motion.h1>

          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.55, duration:.7, ease:EASE }}
            style={{ maxWidth:580, fontSize:'clamp(.95rem,2.2vw,1.12rem)', color:'rgba(255,255,255,.68)', lineHeight:1.75, marginTop:'1.8rem', marginBottom:'1.6rem' }}>
            A Nexxus implementa agentes de IA que prospectam, qualificam, atendem, recuperam e conduzem leads até a próxima etapa comercial.{' '}
            <strong style={{ color:'#fff' }}>Sem depender de resposta manual, follow-up esquecido ou vendedor sobrecarregado.</strong>
          </motion.p>

          {/* Partner badges */}
          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:.7, duration:.6, ease:EASE }}
            style={{ display:'flex', alignItems:'center', gap:'clamp(.8rem,2vw,2rem)', marginBottom:'2rem', flexWrap:'wrap', justifyContent:'center' }}>
            <span style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.12em', color:'rgba(255,255,255,.3)', textTransform:'uppercase', whiteSpace:'nowrap' }}>Tecnologia parceira</span>
            <div style={{ background:'#fff', borderRadius:10, padding:'.5rem .8rem', boxShadow:'0 2px 12px rgba(0,0,0,.3)', display:'flex', alignItems:'center' }}><GooglePartnerLogo/></div>
            <div style={{ background:'#fff', borderRadius:10, padding:'.5rem .8rem', boxShadow:'0 2px 12px rgba(0,0,0,.3)', display:'flex', alignItems:'center' }}><MetaLogo/></div>
            <div style={{ background:'#fff', borderRadius:10, padding:'.5rem .8rem', boxShadow:'0 2px 12px rgba(0,0,0,.3)', display:'flex', alignItems:'center' }}><OpenAILogo/></div>
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.82, duration:.6, ease:EASE }}
            style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14 }}>
            <motion.button onClick={scrollToForm}
              whileHover={{ scale:1.04, boxShadow:`0 0 50px rgba(${OR},${OG},${OB},.7),0 12px 40px rgba(0,0,0,.5)` }} whileTap={{ scale:.97 }}
              animate={{ boxShadow:[`0 0 20px rgba(${OR},${OG},${OB},.35)`,`0 0 40px rgba(${OR},${OG},${OB},.6)`,`0 0 20px rgba(${OR},${OG},${OB},.35)`] }}
              transition={{ boxShadow:{ duration:2.5, repeat:Infinity, ease:'easeInOut' } }}
              style={{ display:'flex', alignItems:'center', gap:10, background:ORANGE, color:'#fff', border:'none', borderRadius:999, padding:'1.1rem 2.8rem', fontSize:'1.05rem', fontWeight:800, cursor:'pointer', letterSpacing:'.025em' }}>
              QUERO IMPLEMENTAR IA NO MEU COMERCIAL
            </motion.button>
            <motion.button onClick={scrollToForm} whileHover={{ color:'rgba(255,255,255,.7)' }} whileTap={{ scale:.97 }}
              style={{ display:'flex', alignItems:'center', gap:6, background:'none', border:'none', color:'rgba(255,255,255,.4)', cursor:'pointer', fontSize:'.83rem', fontWeight:500, fontFamily:'inherit' }}>
              Ver como funciona <ArrowDown size={13}/>
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.05, duration:.8 }}
            style={{ display:'flex', gap:24, marginTop:'2rem', flexWrap:'wrap', justifyContent:'center' }}>
            {['✓ Diagnóstico gratuito','✓ Sem contrato de fidelidade','✓ IA treinada com seu processo'].map(t => (
              <span key={t} style={{ fontSize:'.75rem', color:'rgba(255,255,255,.4)', letterSpacing:'.05em' }}>{t}</span>
            ))}
          </motion.div>
        </div>

        <motion.div animate={{ y:[0,9,0] }} transition={{ duration:2.2, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'relative', zIndex:10, display:'flex', justifyContent:'center', paddingBottom:'2.5rem' }}>
          <ArrowDown size={22} style={{ color:`rgba(${OR},${OG},${OB},.6)` }}/>
        </motion.div>
      </section>

      {/* ════ PARTNER STRIP ════ */}
      <section style={{ background:BG_DARK, borderTop:`1px solid rgba(${OR},${OG},${OB},.12)`, borderBottom:`1px solid rgba(${OR},${OG},${OB},.12)`, padding:'2rem 1.5rem' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'flex', flexDirection:'column', alignItems:'center', gap:'1.2rem' }}>
          <span style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.18em', color:'rgba(255,255,255,.28)', textTransform:'uppercase' }}>Tecnologia que suporta nossa IA</span>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'clamp(1rem,4vw,4rem)', flexWrap:'wrap' }}>
            {[<GooglePartnerLogo/>, <MetaLogo/>, <OpenAILogo/>].map((Badge, i) => (
              <motion.div key={i} whileHover={{ scale:1.06, y:-2 }} style={{ background:'#fff', borderRadius:14, padding:'.6rem 1.1rem', boxShadow:'0 4px 20px rgba(0,0,0,.35)', cursor:'default', display:'flex', alignItems:'center', justifyContent:'center' }}>
                {Badge}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PAIN ════ */}
      <section style={{ background:'#fff', color:'#0f172a', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={stagger(.1)}
            style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <motion.div variants={fadeUp}
              style={{ display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:'#ef4444', border:'1px solid rgba(239,68,68,.3)', borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:'rgba(239,68,68,.07)' }}>
              O PROBLEMA
            </motion.div>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.8rem,4.5vw,3.2rem)', lineHeight:1.1 }}>
              Seu comercial não perde venda<br/>por falta de lead.
            </motion.h2>
            <motion.h3 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'clamp(1.1rem,2.5vw,1.6rem)', color:'#ef4444', lineHeight:1.2, marginTop:'.4rem' }}>
              Perde por falta de velocidade, processo e constância.
            </motion.h3>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.15 }} variants={stagger(.07)}
            style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.1rem' }}>
            {PAINS.map(p => (
              <motion.div key={p.t} variants={scaleIn}
                whileHover={{ scale:1.03, borderColor:'rgba(239,68,68,.4)', background:'#fff5f5' }}
                style={{ background:'#fff', border:'1px solid rgba(239,68,68,.15)', borderRadius:20, padding:'1.4rem 1.7rem', display:'flex', alignItems:'center', gap:14, boxShadow:'0 2px 12px rgba(0,0,0,.06)', transition:'all .2s' }}>
                <span style={{ fontSize:'1.8rem', flexShrink:0 }}>{p.e}</span>
                <span style={{ fontSize:'.92rem', color:'#334155', lineHeight:1.45 }}>{p.t}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.5 }} variants={fadeUp}
            style={{ textAlign:'center', marginTop:'3rem' }}>
            <p style={{ color:'#475569', fontSize:'1.05rem', marginBottom:'1.4rem', fontWeight:600 }}>
              A verdade é simples: <strong style={{ color:'#0f172a' }}>o cliente que recebe resposta mais rápido é o que mais avança.</strong>
            </p>
            <motion.button onClick={scrollToForm}
              whileHover={{ scale:1.05 }} whileTap={{ scale:.97 }}
              style={{ background:ORANGE, color:'#fff', border:'none', borderRadius:999, padding:'.75rem 2rem', fontSize:'.9rem', fontWeight:700, cursor:'pointer', boxShadow:`0 0 24px rgba(${OR},${OG},${OB},.3)` }}>
              Quero velocidade comercial →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ════ VIRADA ════ */}
      <section style={{ background:BG_DARK, padding:'clamp(4rem,8vw,7rem) 1.5rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(${OR},${OG},${OB},.03) 1px,transparent 1px),linear-gradient(90deg,rgba(${OR},${OG},${OB},.03) 1px,transparent 1px)`, backgroundSize:'60px 60px', pointerEvents:'none' }}/>
        <div style={{ maxWidth:800, margin:'0 auto', position:'relative', textAlign:'center' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={stagger(.1)}>
            <motion.div variants={fadeUp}
              style={{ display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:ORANGE, border:`1px solid rgba(${OR},${OG},${OB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.4rem', background:`rgba(${OR},${OG},${OB},.1)` }}>
              A VIRADA
            </motion.div>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1 }}>
              IA não é sobre substituir<br/>seu comercial.
            </motion.h2>
            <motion.h3 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'clamp(1.1rem,2.5vw,1.6rem)', color:ORANGE, marginTop:'.6rem', lineHeight:1.25 }}>
              É sobre fazer seu comercial parar de<br/>desperdiçar oportunidade.
            </motion.h3>
            <motion.p variants={fadeUp}
              style={{ marginTop:'1.5rem', color:'rgba(255,255,255,.58)', fontSize:'1rem', lineHeight:1.7, maxWidth:600, margin:'1.5rem auto 0' }}>
              A Nexxus une estratégia de vendas e agentes de IA para criar uma operação mais rápida, previsível e escalável. Não entregamos apenas um robô respondendo mensagens.{' '}
              <strong style={{ color:'#fff' }}>Entregamos uma estrutura comercial com IA treinada com lógica de vendas real.</strong>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════ AI AGENTS ════ */}
      <section id="agentes" style={{ background:BG_HERO, padding:'clamp(4rem,8vw,7rem) 1.5rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(${OR},${OG},${OB},.025) 1px,transparent 1px),linear-gradient(90deg,rgba(${OR},${OG},${OB},.025) 1px,transparent 1px)`, backgroundSize:'60px 60px', pointerEvents:'none' }}/>
        <div style={{ maxWidth:900, margin:'0 auto', position:'relative' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={stagger(.1)}
            style={{ textAlign:'center', marginBottom:'4rem' }}>
            <motion.div variants={fadeUp}
              style={{ display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:ORANGE, border:`1px solid rgba(${OR},${OG},${OB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${OR},${OG},${OB},.1)` }}>
              AGENTES DE IA
            </motion.div>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1 }}>
              Um agente para <span style={{ color:ORANGE }}>cada etapa</span><br/>do seu funil
            </motion.h2>
            <motion.p variants={fadeUp}
              style={{ marginTop:'1rem', color:'rgba(255,255,255,.45)', fontSize:'1rem', maxWidth:480, margin:'1rem auto 0', lineHeight:1.65 }}>
              Role para baixo e veja o funil se construindo — cada agente conectado ao próximo.
            </motion.p>
          </motion.div>
          <AIPipeline/>
        </div>
      </section>

      {/* ════ WHATSAPP DEMO ════ */}
      <section style={{ background:BG_DARK, padding:'clamp(4rem,8vw,7rem) 1.5rem', position:'relative', overflow:'hidden' }}>
        <div style={{ maxWidth:1000, margin:'0 auto', position:'relative' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.25 }} variants={stagger(.1)}
            style={{ display:'flex', gap:'clamp(2rem,5vw,5rem)', alignItems:'center', flexWrap:'wrap' }}>

            <motion.div variants={fadeUp} style={{ flex:'1 1 280px', minWidth:240 }}>
              <div style={{ fontSize:'.68rem', fontWeight:700, letterSpacing:'.14em', color:ORANGE, marginBottom:'.9rem' }}>DEMO AO VIVO</div>
              <h2 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.6rem,3.5vw,2.6rem)', lineHeight:1.15, marginBottom:'1rem' }}>
                Veja a IA<br/><span style={{ color:ORANGE }}>em ação</span><br/>no WhatsApp
              </h2>
              <p style={{ fontSize:'.9rem', color:'rgba(255,255,255,.5)', lineHeight:1.65, marginBottom:'1.5rem' }}>
                A IA responde em segundos, faz as perguntas certas, qualifica o lead e encaminha para o vendedor. Tudo no WhatsApp, de forma natural e humanizada.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'.7rem' }}>
                {['Resposta em menos de 5 segundos','Qualificação automática com BANT','Encaminha só leads com perfil para o vendedor','Agenda reuniões diretamente no chat'].map((item, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <span style={{ width:20, height:20, borderRadius:'50%', background:ORANGE, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.6rem', fontWeight:900, color:'#fff', flexShrink:0 }}>✓</span>
                    <span style={{ fontSize:'.87rem', color:'rgba(255,255,255,.6)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={scaleIn} style={{ flex:'0 0 auto', width:'clamp(240px,42%,360px)' }}>
              <motion.div whileHover={{ scale:1.02 }}
                style={{ borderRadius:24, overflow:'hidden', border:`1px solid rgba(${OR},${OG},${OB},.2)`, boxShadow:`0 12px 48px rgba(0,0,0,.55)` }}>
                <div style={{ background:'#075e54', padding:'.65rem 1rem', display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:32, height:32, borderRadius:'50%', background:'rgba(255,255,255,.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.65rem', fontWeight:700, color:'#fff' }}>IA</div>
                  <div>
                    <div style={{ fontSize:'.8rem', fontWeight:700, color:'#fff' }}>IA Nexxus</div>
                    <div style={{ fontSize:'.65rem', color:'rgba(255,255,255,.6)' }}>online agora</div>
                  </div>
                </div>
                <video src="/ia-whatsapp-demo.mp4" autoPlay muted loop playsInline style={{ width:'100%', display:'block', aspectRatio:'9/16', objectFit:'cover' }}/>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════ VOICE CLONE ════ */}
      <VoiceCloneSection/>

      {/* ════ BEFORE / AFTER ════ */}
      <section style={{ background:BG_DARK, padding:'clamp(4rem,8vw,7rem) 1.5rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(${OR},${OG},${OB},.03) 1px,transparent 1px),linear-gradient(90deg,rgba(${OR},${OG},${OB},.03) 1px,transparent 1px)`, backgroundSize:'60px 60px', pointerEvents:'none' }}/>
        <div style={{ maxWidth:1000, margin:'0 auto', position:'relative' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={stagger(.1)}
            style={{ textAlign:'center', marginBottom:'3rem' }}>
            <motion.div variants={fadeUp}
              style={{ display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:ORANGE, border:`1px solid rgba(${OR},${OG},${OB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${OR},${OG},${OB},.1)` }}>
              ANTES E DEPOIS
            </motion.div>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1 }}>
              Com e sem <span style={{ color:ORANGE }}>Nexxus IA</span>
            </motion.h2>
          </motion.div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.5rem' }}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.2 }} variants={fadeUp}
              style={{ background:'rgba(239,68,68,.06)', border:'1px solid rgba(239,68,68,.2)', borderRadius:24, padding:'2rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:'1.5rem' }}>
                <div style={{ width:40, height:40, borderRadius:10, background:'#ef4444', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem', flexShrink:0 }}>❌</div>
                <div>
                  <div style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.12em', color:'#f87171' }}>SEM IA</div>
                  <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'1rem', color:'#fff', lineHeight:1.2 }}>Operação manual e lenta</div>
                </div>
              </div>
              {BEFORES.map((item,i) => (
                <motion.div key={i} initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*.1, duration:.5 }}
                  style={{ display:'flex', alignItems:'flex-start', gap:10, marginBottom:'.75rem' }}>
                  <span style={{ width:18, height:18, borderRadius:'50%', background:'#ef4444', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2, fontSize:'.6rem', fontWeight:900, color:'#fff' }}>✕</span>
                  <span style={{ fontSize:'.88rem', color:'rgba(255,255,255,.55)', lineHeight:1.5 }}>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.2 }} variants={fadeUp}
              style={{ background:`rgba(${OR},${OG},${OB},.07)`, border:`1px solid rgba(${OR},${OG},${OB},.25)`, borderRadius:24, padding:'2rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:'1.5rem' }}>
                <div style={{ width:40, height:40, borderRadius:10, background:ORANGE, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem', flexShrink:0 }}>✨</div>
                <div>
                  <div style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.12em', color:ORANGE }}>COM NEXXUS IA</div>
                  <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'1rem', color:'#fff', lineHeight:1.2 }}>Funil sempre em movimento</div>
                </div>
              </div>
              {AFTERS.map((item,i) => (
                <motion.div key={i} initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*.1, duration:.5 }}
                  style={{ display:'flex', alignItems:'flex-start', gap:10, marginBottom:'.75rem' }}>
                  <span style={{ width:18, height:18, borderRadius:'50%', background:ORANGE, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2, fontSize:'.6rem', fontWeight:900, color:'#fff' }}>✓</span>
                  <span style={{ fontSize:'.88rem', color:'rgba(255,255,255,.55)', lineHeight:1.5 }}>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ HOW IT WORKS ════ */}
      <section id="como-funciona" style={{ background:'#f8f8f8', color:'#0f172a', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div style={{ maxWidth:860, margin:'0 auto' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={stagger(.1)}
            style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <motion.div variants={fadeUp}
              style={{ display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:ORANGE, border:`1px solid rgba(${OR},${OG},${OB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${OR},${OG},${OB},.1)` }}>
              COMO FUNCIONA
            </motion.div>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1 }}>
              Do diagnóstico à IA<br/><span style={{ color:ORANGE }}>operando no seu comercial</span>
            </motion.h2>
          </motion.div>

          <div style={{ position:'relative' }}>
            <motion.div initial={{ scaleY:0 }} whileInView={{ scaleY:1 }} viewport={{ once:true, amount:.2 }} transition={{ duration:1.4, ease:EASE }}
              style={{ position:'absolute', left:27, top:40, bottom:40, width:2, background:`linear-gradient(to bottom,${ORANGE},rgba(${OR},${OG},${OB},.1))`, transformOrigin:'top' }}/>
            <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.1 }} variants={stagger(.14)}
              style={{ display:'flex', flexDirection:'column', gap:'1.8rem' }}>
              {HOW_STEPS.map((s,i) => (
                <motion.div key={s.n} variants={{ hidden:{ opacity:0, x:-36 }, show:{ opacity:1, x:0, transition:{ duration:.6, ease:EASE } } }}
                  style={{ display:'flex', gap:'1.5rem', alignItems:'flex-start' }}>
                  <motion.div whileHover={{ scale:1.15, boxShadow:`0 0 24px rgba(${OR},${OG},${OB},.5)` }}
                    style={{ flexShrink:0, width:56, height:56, borderRadius:'50%', background:BG_PANEL, border:`2px solid ${ORANGE}`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'1rem', color:ORANGE, boxShadow:`0 0 16px rgba(${OR},${OG},${OB},.2)`, position:'relative', zIndex:1 }}>
                    {i+1}
                  </motion.div>
                  <motion.div whileHover={{ borderColor:`rgba(${OR},${OG},${OB},.3)`, y:-2 }}
                    style={{ background:'#fff', border:`1px solid rgba(${OR},${OG},${OB},.12)`, borderRadius:18, padding:'1.2rem 1.5rem', flex:1, boxShadow:'0 2px 12px rgba(0,0,0,.05)', transition:'all .25s' }}>
                    <span style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.12em', color:ORANGE }}>{s.n}</span>
                    <h3 style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'1.05rem', margin:'.3rem 0 .5rem', color:'#0f172a' }}>{s.title}</h3>
                    <p style={{ color:'#64748b', fontSize:'.88rem', lineHeight:1.55, margin:0 }}>{s.body}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.5 }} variants={fadeUp}
            style={{ textAlign:'center', marginTop:'3rem' }}>
            <motion.button onClick={scrollToForm}
              whileHover={{ scale:1.05 }} whileTap={{ scale:.97 }}
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:ORANGE, color:'#fff', border:'none', borderRadius:999, padding:'1rem 2.2rem', fontSize:'1rem', fontWeight:700, cursor:'pointer', boxShadow:`0 0 24px rgba(${OR},${OG},${OB},.35)` }}>
              Iniciar diagnóstico gratuito <ChevronRight size={18}/>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ════ FOR WHOM ════ */}
      <section style={{ background:BG_HERO, padding:'clamp(4rem,8vw,7rem) 1.5rem', position:'relative', overflow:'hidden' }}>
        <div style={{ maxWidth:900, margin:'0 auto', position:'relative' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={stagger(.1)}
            style={{ textAlign:'center', marginBottom:'3rem' }}>
            <motion.div variants={fadeUp}
              style={{ display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:ORANGE, border:`1px solid rgba(${OR},${OG},${OB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${OR},${OG},${OB},.1)` }}>
              PARA QUEM É
            </motion.div>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1 }}>
              Sua empresa <span style={{ color:ORANGE }}>se encaixa</span> aqui?
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.15 }} variants={stagger(.06)}
            style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'.9rem' }}>
            {['Recebe leads, mas demora para atender','Equipe comercial sobrecarregada','Quer vender mais sem aumentar o time na mesma proporção','Usa WhatsApp como canal de vendas','Quer recuperar leads antigos da base','Precisa organizar e atualizar o CRM','Quer escalar prospecção ativa','Precisa de mais velocidade e constância no follow-up'].map((item,i) => (
              <motion.div key={i} variants={scaleIn}
                whileHover={{ scale:1.03, borderColor:`rgba(${OR},${OG},${OB},.35)`, y:-2 }}
                style={{ background:BG_PANEL, border:`1px solid rgba(255,255,255,.07)`, borderRadius:16, padding:'1rem 1.2rem', display:'flex', alignItems:'center', gap:12, transition:'all .2s' }}>
                <span style={{ width:22, height:22, borderRadius:'50%', background:`rgba(${OR},${OG},${OB},.15)`, border:`1px solid rgba(${OR},${OG},${OB},.4)`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:'.6rem', fontWeight:900, color:ORANGE }}>✓</span>
                <span style={{ fontSize:'.88rem', color:'rgba(255,255,255,.6)', lineHeight:1.4 }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════ AUTHORITY ════ */}
      <section style={{ background:'#fff', color:'#0f172a', padding:'clamp(3rem,6vw,5rem) 1.5rem' }}>
        <div style={{ maxWidth:800, margin:'0 auto', textAlign:'center' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={stagger(.1)}>
            <motion.div variants={fadeUp}
              style={{ display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:ORANGE, border:`1px solid rgba(${OR},${OG},${OB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.4rem', background:`rgba(${OR},${OG},${OB},.1)` }}>
              POR QUE A NEXXUS
            </motion.div>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.8rem,4vw,2.8rem)', lineHeight:1.1, marginBottom:'1rem' }}>
              IA sem estratégia vira<br/>atendimento automático.
            </motion.h2>
            <motion.h3 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'clamp(1.1rem,2.2vw,1.5rem)', color:ORANGE, lineHeight:1.3, marginBottom:'1.5rem' }}>
              IA com processo vira máquina comercial.
            </motion.h3>
            <motion.p variants={fadeUp}
              style={{ color:'#64748b', fontSize:'1rem', lineHeight:1.7, maxWidth:600, margin:'0 auto 2rem' }}>
              A Nexxus já atua com terceirização comercial, SDRs, closers, hunters, CRM, funil, cadência, BANT, scripts e gestão de performance. Nossos agentes de IA são construídos com lógica comercial real, não são bots genéricos.
            </motion.p>
            <motion.div variants={fadeUp}
              style={{ display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap' }}>
              {[{ v:'600+',l:'empresas atendidas' },{ v:'20 dias',l:'para IA operacional' },{ v:'3x',l:'aumento médio em leads qualificados' }].map(({ v,l }) => (
                <div key={v} style={{ textAlign:'center', minWidth:120 }}>
                  <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'1.6rem', color:ORANGE }}>{v}</div>
                  <div style={{ fontSize:'.78rem', color:'#64748b', marginTop:3 }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section id="faq" style={{ background:BG_DARK, padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={fadeUp}
            style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div style={{ display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:ORANGE, border:`1px solid rgba(${OR},${OG},${OB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${OR},${OG},${OB},.1)` }}>
              PERGUNTAS FREQUENTES
            </div>
            <h2 style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.8rem,4vw,2.8rem)', lineHeight:1.1 }}>
              Dúvidas <span style={{ color:ORANGE }}>frequentes</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.1 }} variants={stagger(.08)}
            style={{ display:'flex', flexDirection:'column', gap:'.8rem' }}>
            {FAQ_ITEMS.map((item,i) => (
              <motion.div key={i} variants={fadeUp}
                style={{ background:BG_PANEL, border:`1px solid rgba(255,255,255,.07)`, borderRadius:16, overflow:'hidden', cursor:'pointer' }}
                onClick={() => setActiveFaq(activeFaq===i ? null : i)}>
                <div style={{ padding:'1.1rem 1.4rem', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12 }}>
                  <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'.95rem', color:'#fff', lineHeight:1.4 }}>{item.q}</span>
                  <motion.span animate={{ rotate:activeFaq===i ? 45 : 0 }} transition={{ duration:.2 }}
                    style={{ fontSize:'1.3rem', color:ORANGE, flexShrink:0, lineHeight:1 }}>+</motion.span>
                </div>
                <AnimatePresence>
                  {activeFaq===i && (
                    <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:.3 }}
                      style={{ overflow:'hidden' }}>
                      <div style={{ padding:'0 1.4rem 1.2rem', fontSize:'.88rem', color:'rgba(255,255,255,.55)', lineHeight:1.65 }}>{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════ IMPACT ════ */}
      <section style={{ background:`linear-gradient(135deg,${ORANGE} 0%,#b45309 100%)`, padding:'clamp(3rem,6vw,5rem) 1.5rem' }}>
        <div style={{ maxWidth:760, margin:'0 auto', textAlign:'center' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.4 }} variants={stagger(.12)}>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.6rem,4vw,2.8rem)', lineHeight:1.15, color:'#fff', marginBottom:'1rem' }}>
              O problema não é ter pouco lead.
            </motion.h2>
            <motion.h3 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'clamp(1.1rem,2.5vw,1.7rem)', color:'rgba(255,255,255,.85)', lineHeight:1.3, marginBottom:'1.8rem' }}>
              O problema é não ter uma operação rápida o suficiente<br/>para converter os leads que você já tem.
            </motion.h3>
            <motion.button variants={fadeUp} onClick={scrollToForm}
              whileHover={{ scale:1.06 }} whileTap={{ scale:.97 }}
              style={{ background:'rgba(255,255,255,.95)', color:'#0f172a', border:'none', borderRadius:999, padding:'1.1rem 2.8rem', fontSize:'1.05rem', fontWeight:800, cursor:'pointer', letterSpacing:'.025em', transition:'all .2s' }}>
              QUERO VENDER COM IA →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ════ FORM ════ */}
      <section id="form-ia" style={{ background:BG_HERO, padding:'clamp(5rem,10vw,8rem) 1.5rem', position:'relative', overflow:'hidden' }}>
        <motion.div animate={{ opacity:[.6,1,.6] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse 80% 70% at 50% 0%,rgba(${OR},${OG},${OB},.08),transparent 60%)`, pointerEvents:'none' }}/>

        <div style={{ maxWidth:680, margin:'0 auto', position:'relative' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={stagger(.1)}
            style={{ textAlign:'center', marginBottom:'3rem' }}>
            <motion.div variants={fadeUp}
              style={{ display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:ORANGE, border:`1px solid rgba(${OR},${OG},${OB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.4rem', background:`rgba(${OR},${OG},${OB},.1)` }}>
              DIAGNÓSTICO GRATUITO
            </motion.div>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3rem)', lineHeight:1.1, marginBottom:'1rem' }}>
              Coloque IA para trabalhar<br/><span style={{ color:ORANGE }}>no seu comercial.</span>
            </motion.h2>
            <motion.p variants={fadeUp}
              style={{ color:'rgba(255,255,255,.5)', fontSize:'1rem', lineHeight:1.6, maxWidth:480, margin:'0 auto' }}>
              Preencha abaixo. Em até <strong style={{ color:'#fff' }}>12 horas</strong> nossa equipe entra em contato com um diagnóstico completo da sua operação.{' '}
              <strong style={{ color:'#fff' }}>Sem custo. Sem compromisso.</strong>
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity:0, scale:.94 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true, amount:.2 }} transition={{ duration:.7, ease:EASE }}
            style={{ position:'relative', borderRadius:28, padding:3, background:`conic-gradient(from ${angle}deg,rgba(${OR},${OG},${OB},.85),rgba(${OR},${OG},${OB},.1),rgba(${OR},${OG},${OB},.85))` }}>
            <div style={{ background:BG_PANEL, borderRadius:26, padding:'clamp(2rem,5vw,2.8rem)' }}>
              <form onSubmit={handleSubmit} style={{ display:'grid', gap:'1.1rem', gridTemplateColumns:'repeat(2,1fr)' }}>

                <div style={{ gridColumn:'1/2' }}>
                  <label style={{ display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.6)', marginBottom:6, letterSpacing:'.04em' }}>NOME <span style={{ color:ORANGE }}>*</span></label>
                  <input required type="text" autoComplete="name" placeholder="Seu nome completo"
                    value={form.nome} onChange={e=>setForm(f=>({...f,nome:e.target.value}))}
                    style={inputStyle} onFocus={onFocus} onBlur={onBlur}/>
                </div>

                <div style={{ gridColumn:'2/3' }}>
                  <label style={{ display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.6)', marginBottom:6, letterSpacing:'.04em' }}>EMPRESA <span style={{ color:ORANGE }}>*</span></label>
                  <input required type="text" autoComplete="organization" placeholder="Nome da empresa"
                    value={form.empresa} onChange={e=>setForm(f=>({...f,empresa:e.target.value}))}
                    style={inputStyle} onFocus={onFocus} onBlur={onBlur}/>
                </div>

                <div style={{ gridColumn:'1/2' }}>
                  <label style={{ display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.6)', marginBottom:6, letterSpacing:'.04em' }}>E-MAIL <span style={{ color:ORANGE }}>*</span></label>
                  <input required type="email" autoComplete="email" placeholder="voce@empresa.com"
                    value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}
                    style={inputStyle} onFocus={onFocus} onBlur={onBlur}/>
                </div>

                <div style={{ gridColumn:'2/3' }}>
                  <label style={{ display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.6)', marginBottom:6, letterSpacing:'.04em' }}>WHATSAPP <span style={{ color:ORANGE }}>*</span></label>
                  <input required type="tel" autoComplete="tel" placeholder="(11) 99999-9999"
                    value={form.whatsapp} onChange={e=>setForm(f=>({...f,whatsapp:e.target.value}))}
                    style={inputStyle} onFocus={onFocus}
                    onBlur={e=>{ onBlur(e); setForm(f=>({...f,whatsapp:applyCountryCode(e.target.value)})) }}/>
                </div>

                <div style={{ gridColumn:'1/-1' }}>
                  <label style={{ display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.6)', marginBottom:6, letterSpacing:'.04em' }}>FATURAMENTO MENSAL <span style={{ color:ORANGE }}>*</span></label>
                  <select required value={form.faturamento} onChange={e=>setForm(f=>({...f,faturamento:e.target.value}))}
                    style={{ ...inputStyle, cursor:'pointer', appearance:'none', background:'#1a1a1a', color:form.faturamento?'#fff':'rgba(255,255,255,.35)' }}
                    onFocus={onFocus} onBlur={onBlur}>
                    <option value="" disabled>Selecione uma faixa</option>
                    {FAIXAS.map(f=><option key={f} value={f} style={{ background:'#1a1a1a', color:'#fff' }}>{f}</option>)}
                  </select>
                </div>

                <div style={{ gridColumn:'1/-1' }}>
                  <label style={{ display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.6)', marginBottom:6, letterSpacing:'.04em' }}>COMO POSSO TE AJUDAR? <span style={{ color:ORANGE }}>*</span></label>
                  <textarea required rows={4} placeholder="Qual o seu maior desafio comercial hoje?"
                    value={form.mensagem} onChange={e=>setForm(f=>({...f,mensagem:e.target.value}))}
                    style={{ ...inputStyle, resize:'none' }}
                    onFocus={onFocus} onBlur={onBlur}/>
                </div>

                <div style={{ gridColumn:'1/-1' }}>
                  <motion.button type="submit"
                    whileHover={{ scale:1.03, boxShadow:`0 0 40px rgba(${OR},${OG},${OB},.65),0 8px 32px rgba(0,0,0,.4)` }} whileTap={{ scale:.97 }}
                    style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, width:'100%', background:ORANGE, color:'#fff', border:'none', borderRadius:999, padding:'1.1rem 2rem', fontSize:'1rem', fontWeight:700, cursor:'pointer', letterSpacing:'.04em', boxShadow:`0 0 28px rgba(${OR},${OG},${OB},.4)` }}>
                    Quero implementar IA no meu comercial
                    <Send size={17}/>
                  </motion.button>
                  <p style={{ marginTop:'.8rem', textAlign:'center', fontSize:'.75rem', color:'rgba(255,255,255,.45)' }}>
                    Ao enviar, você concorda em ser contatado pela Nexxus. Resposta em até 12h.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.5 }} variants={stagger(.12)}
            style={{ marginTop:'2.5rem', display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap' }}>
            {[{i:'🔒',t:'Dados 100% seguros'},{i:'⚡',t:'Resposta em até 12h'},{i:'🎯',t:'Sem compromisso'}].map(({i,t})=>(
              <motion.div key={t} variants={fadeIn} style={{ display:'flex', alignItems:'center', gap:6, fontSize:'.8rem', color:'rgba(255,255,255,.35)' }}>
                <span>{i}</span>{t}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer/>

      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,.25); }
        select option { background: #1a1a1a; color: #fff; }
      `}</style>
    </div>
  )
}
