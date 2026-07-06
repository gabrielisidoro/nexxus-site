import {
  useEffect, useState, type FormEvent,
} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue,
} from 'framer-motion'
import { Send, ArrowDown, ChevronRight, Globe2 } from 'lucide-react'
import logo from '@/assets/logo-nexxus.png'
import { office } from '@/assets/escritorio'
import { submitLead, validateLead } from '@/lib/submitLead'

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
  'Até US$ 50 mil/mês','US$ 51 mil a US$ 99 mil/mês',
  'US$ 100 mil a US$ 199 mil/mês','US$ 200 mil a US$ 299 mil/mês',
  'US$ 300 mil a US$ 500 mil/mês','US$ 500 mil a US$ 1 milhão/mês',
  'Mais de US$ 1 milhão/mês','Mais de US$ 5 milhões/mês',
]

const PAINS = [
  { emoji:'💸', text:'Vendedor local custa uma fortuna: um SDR nos EUA passa de US$ 4 mil por mês, fora encargos e benefícios.' },
  { emoji:'🧾', text:'A burocracia trabalhista do país transforma cada contratação em um risco caro.' },
  { emoji:'🗣️', text:'Encontrar profissional que fale português e entenda o seu negócio aí fora é quase impossível.' },
  { emoji:'🔄', text:'Turnover alto: você treina, investe e a pessoa vai embora em poucos meses.' },
  { emoji:'🧠', text:'Gerir vendedor sem método e sem tempo vira caos. E a venda para.' },
  { emoji:'🎲', text:'Resultado imprevisível: mês bom, mês ruim, zero controle sobre o funil.' },
]

const LOCAL_VS = [
  'Salário em dólar ou euro, com encargos e benefícios locais',
  'Passivo trabalhista e burocracia do país por sua conta',
  'Você recruta, entrevista, treina e gere sozinho',
  'Se a pessoa sair, o problema e o custo são todos seus',
  'Meses de rampagem até ver o primeiro resultado',
  'Gestão à distância no improviso, sem método',
]
const NEXXUS_VS = [
  'Preço em dólar bem menor que um salário local, com gestão inclusa',
  'Vínculo 100% com a Nexxus: zero passivo no seu país',
  'Recrutamento, treinamento e gestão por nossa conta',
  'Reposição garantida: saiu alguém, colocamos outro',
  'Operação no ar em 20 dias com método validado',
  'Relatórios e reuniões semanais: você só acompanha os números',
]

const STEPS = [
  { day:'Dia 1 a 3',   title:'Diagnóstico do seu mercado', body:'Entendemos seu negócio, o país onde você atua e o perfil do seu cliente.' },
  { day:'Dia 4 a 7',   title:'Arquitetura Comercial',      body:'Desenhamos ICP, oferta, canal, funil e cadência sob medida para o seu mercado.' },
  { day:'Dia 8 a 14',  title:'Recrutamento no Brasil',     body:'Selecionamos e treinamos o SDR, vendedor ou closer ideal. O contrato é com a Nexxus.' },
  { day:'Dia 15 a 20', title:'Operação No Ar',             body:'Time vendendo para a sua empresa, no fuso do seu mercado, com gestão semanal.' },
]

const DELIVERS = [
  { title:'Fluência em inglês e espanhol',     body:'SDRs e closers brasileiros fluentes em inglês e espanhol, prontos para vender para clientes locais e para a comunidade brasileira.' },
  { title:'Contratação sem burocracia',        body:'O vínculo é com a Nexxus, no Brasil. Nada de passivo trabalhista no país onde você está.' },
  { title:'Gestão e método completos',         body:'Treinamento, cadência D1-D12, CRM configurado e cobrança de resultado por nossa conta.' },
  { title:'Fuso e horário do seu mercado',     body:'O time trabalha no horário comercial do país onde estão os seus clientes.' },
]

const STATS = [
  { value:20, sfx:'',  label:'dias para operação no ar' },
  { value:80, sfx:'%', label:'das vendas entre o 5º e 12º contato' },
  { value:12, sfx:'h', label:'tempo máximo de resposta garantido' },
  { value:3,  sfx:'x', label:'aumento médio na geração de leads' },
]

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
export default function LPGlobal() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ nome:'', empresa:'', email:'', whatsapp:'', faturamento:'', mensagem:'' })
  const [formError, setFormError] = useState<string | null>(null)
  const [angle, setAngle] = useState(0)
  const [statOn, setStatOn] = useState(false)
  const [activePhoto, setActivePhoto] = useState(0)
  const [vsMode, setVsMode] = useState<'local'|'nexxus'>('nexxus')

  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, { damping: 30, stiffness: 200 })
  const { scrollY } = useScroll()
  const heroGlowY = useTransform(scrollY, [0, 600], [0, -80])

  useEffect(() => {
    let raf = 0
    const tick = () => { setAngle(a => (a + 0.5) % 360); raf = requestAnimationFrame(tick) }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError(null)
    const data = { ...form, origem: 'lp-global' as const }
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

      {/* Progress bar */}
      <motion.div style={{ scaleX:progressScaleX, transformOrigin:'left', position:'fixed', top:0, left:0, right:0, zIndex:50, height:3, background:`linear-gradient(90deg,${BLUE},rgba(${BR},${BG},${BB},.5))`, boxShadow:`0 0 8px ${BLUE}` }}/>

      {/* ════ HERO ════ */}
      <section style={{position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column', background:BG_HERO, overflow:'hidden'}}>
        {/* Vídeo de fundo */}
        <video autoPlay muted loop playsInline src={office.heroBg}
          style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
        {/* Overlay escuro para legibilidade do texto */}
        <div style={{position:'absolute', inset:0, background:'rgba(6,10,22,0.74)', pointerEvents:'none'}}/>
        <motion.div style={{ y:heroGlowY, position:'absolute', inset:0, background:`radial-gradient(ellipse 70% 60% at 50% 55%, rgba(${BR},${BG},${BB},.18), transparent 70%)`, pointerEvents:'none' }}/>

        {/* Barra qualificadora topo */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:.8 }}
          style={{ position:'relative', zIndex:10, borderBottom:`1px solid rgba(${BR},${BG},${BB},.1)`, padding:'.45rem 1rem', textAlign:'center', background:'rgba(6,10,22,.45)', backdropFilter:'blur(8px)' }}>
          <span style={{ fontSize:'.66rem', fontWeight:700, letterSpacing:'.15em', color:'rgba(255,255,255,.38)', textTransform:'uppercase' }}>
            PARA EMPRESÁRIOS BRASILEIROS QUE VIVEM FORA DO BRASIL · DIAGNÓSTICO{' '}<span style={{ color:BLUE }}>100% GRATUITO</span>
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

        {/* Conteúdo central */}
        <div style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'2rem 1.5rem 1rem', position:'relative', zIndex:10}}>

          {/* Badge pulsante */}
          <motion.div initial={{ opacity:0, scale:.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:.2, duration:.5, ease:EASE }}
            style={{ display:'inline-flex', alignItems:'center', gap:8, borderRadius:999, border:`1px solid rgba(${BR},${BG},${BB},.35)`, padding:'.38rem 1.1rem', fontSize:'.7rem', fontWeight:700, letterSpacing:'.14em', color:BLUE, marginBottom:'1.8rem', background:`rgba(${BR},${BG},${BB},.08)`, backdropFilter:'blur(8px)' }}>
            <Globe2 size={13}/>
            ATENDEMOS BRASILEIROS NO MUNDO INTEIRO
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:.3, duration:.7, ease:EASE }}
            style={{ fontFamily:'Poppins,sans-serif', fontWeight:900, lineHeight:1.05, letterSpacing:'-.025em', fontSize:'clamp(2rem,5.8vw,4.4rem)', marginBottom:0 }}>
            <span style={{ display:'block', color:'#fff' }}>SUA EMPRESA NO EXTERIOR.</span>
            <span style={{ display:'block', background:`linear-gradient(135deg,${BLUE} 30%,rgba(${BR},${BG},${BB},.55))`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>SEU COMERCIAL NO BRASIL.</span>
            <span style={{ display:'block', color:'rgba(255,255,255,.92)', fontSize:'.55em', fontWeight:600, letterSpacing:'-.01em', marginTop:'.45em', lineHeight:1.3 }}>
              Terceirize SDRs, vendedores e closers brasileiros. A gente contrata, treina e gere por você.
            </span>
          </motion.h1>

          {/* Subtexto */}
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.62, duration:.7, ease:EASE }}
            style={{ maxWidth:580, fontSize:'clamp(.95rem,2.2vw,1.1rem)', color:'rgba(255,255,255,.78)', lineHeight:1.75, marginTop:'1.8rem', marginBottom:'2rem', textShadow:'0 2px 14px rgba(0,0,0,.9)' }}>
            Contratar vendedor no país onde você vive custa caro e dá trabalho. A Nexxus monta o seu time comercial aqui no Brasil, com SDRs e closers fluentes em inglês e espanhol, custando bem menos que um salário local e sem burocracia trabalhista no seu país.{' '}
            <strong style={{ color:'rgba(255,255,255,.85)' }}>Operação no ar em 20 dias.</strong>
          </motion.p>

          {/* Prova social */}
          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:.78, duration:.6, ease:EASE }}
            style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12, marginBottom:'2.2rem' }}>
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
            <div style={{ display:'flex', alignItems:'center', gap:7 }}>
              <motion.span animate={{ opacity:[1,.3,1] }} transition={{ duration:1.8, repeat:Infinity }}
                style={{ width:7, height:7, borderRadius:'50%', background:'#22c55e', display:'inline-block', boxShadow:'0 0 8px rgba(34,197,94,.8)', flexShrink:0 }}/>
              <span style={{ fontSize:'.82rem', fontWeight:700, color:'rgba(255,255,255,.92)', textShadow:'0 1px 8px rgba(0,0,0,.7)' }}>
                mais de 600 empresas confiaram na Nexxus
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.9, duration:.6, ease:EASE }}
            style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
            <motion.button onClick={scrollToForm}
              whileHover={{ scale:1.04, boxShadow:`0 0 50px rgba(${BR},${BG},${BB},.7), 0 12px 40px rgba(0,0,0,.5)` }}
              whileTap={{ scale:.97 }}
              animate={{ boxShadow:[`0 0 20px rgba(${BR},${BG},${BB},.35)`, `0 0 40px rgba(${BR},${BG},${BB},.6)`, `0 0 20px rgba(${BR},${BG},${BB},.35)`] }}
              transition={{ boxShadow:{ duration:2.5, repeat:Infinity, ease:'easeInOut' } }}
              style={{ display:'flex', alignItems:'center', gap:10, background:BLUE, color:'#fff', border:'none', borderRadius:999, padding:'1.1rem 2.8rem', fontSize:'1.05rem', fontWeight:800, cursor:'pointer', letterSpacing:'.025em' }}>
              → QUERO MEU TIME NO BRASIL
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
            {['✓ Fluência em inglês e espanhol','✓ Menos que um salário local','✓ Operação em 20 dias'].map(t=>(
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
          {[{v:'Preço em US$',l:'Bem menor que um salário local'},{v:'SDR + Hunter + Closer',l:'Fluentes em inglês e espanhol'},{v:'Zero burocracia',l:'Vínculo 100% com a Nexxus no Brasil'},{v:'Qualquer fuso',l:'Time no horário do seu mercado'}].map(({v,l})=>(
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
              VOCÊ CONHECE ESSA DOR
            </div>
            <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1}}>
              Contratar vendedor <span style={{color:'#ef4444'}}>fora do Brasil</span> é assim:
            </h2>
            <p style={{marginTop:'1rem', color:'#64748b', fontSize:'1.05rem', maxWidth:520, margin:'1rem auto 0'}}>
              Se você se identificar com 2 ou mais cenários abaixo, a terceirização com time brasileiro é para você.
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
              A Nexxus resolve <strong style={{color:'#0f172a'}}>todos</strong> esses problemas com um time brasileiro gerido por nós.
            </p>
            <motion.button onClick={scrollToForm}
              whileHover={{ scale:1.05, boxShadow:`0 0 24px rgba(${BR},${BG},${BB},.35)` }} whileTap={{ scale:.97 }}
              style={{ background:'transparent', border:`1px solid rgba(${BR},${BG},${BB},.5)`, color:BLUE, borderRadius:999, padding:'.75rem 2rem', fontSize:'.9rem', fontWeight:700, cursor:'pointer', letterSpacing:'.04em' }}>
              Quero resolver isso →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ════ COMPARAÇÃO LOCAL x NEXXUS ════ */}
      <section style={{background:BG_DARK, padding:'clamp(4rem,8vw,6rem) 1.5rem', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(${BR},${BG},${BB},.04) 1px,transparent 1px),linear-gradient(90deg,rgba(${BR},${BG},${BB},.04) 1px,transparent 1px)`, backgroundSize:'60px 60px', pointerEvents:'none'}}/>
        <div style={{maxWidth:760, margin:'0 auto', position:'relative'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.25}} variants={stagger(.1)}>
            <motion.div variants={fadeUp} style={{textAlign:'center', marginBottom:'2.5rem'}}>
              <div style={{display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, border:`1px solid rgba(${BR},${BG},${BB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${BR},${BG},${BB},.08)`}}>
                COMPARE OS DOIS CAMINHOS
              </div>
              <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4vw,2.8rem)', lineHeight:1.08, marginBottom:'.8rem'}}>
                Contratar local ou <span style={{color:BLUE}}>terceirizar no Brasil?</span>
              </h2>
              <p style={{color:'rgba(255,255,255,.5)', fontSize:'1rem', lineHeight:1.6, maxWidth:460, margin:'0 auto'}}>
                Veja lado a lado o que muda quando o seu time comercial fica com a Nexxus.
              </p>
            </motion.div>

            {/* Toggle */}
            <motion.div variants={fadeUp} style={{display:'flex', justifyContent:'center', marginBottom:'2rem'}}>
              <div style={{display:'inline-flex', background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)', borderRadius:999, padding:5}}>
                <button type="button" onClick={()=>setVsMode('local')}
                  style={{display:'flex', alignItems:'center', gap:7, padding:'.7rem 1.5rem', borderRadius:999, border:'none', cursor:'pointer', fontSize:'.9rem', fontWeight:700, fontFamily:'inherit', transition:'all .25s',
                    background: vsMode==='local' ? '#ef4444' : 'transparent',
                    color: vsMode==='local' ? '#fff' : 'rgba(255,255,255,.5)'}}>
                  💸 Contratar local
                </button>
                <button type="button" onClick={()=>setVsMode('nexxus')}
                  style={{display:'flex', alignItems:'center', gap:7, padding:'.7rem 1.5rem', borderRadius:999, border:'none', cursor:'pointer', fontSize:'.9rem', fontWeight:700, fontFamily:'inherit', transition:'all .25s',
                    background: vsMode==='nexxus' ? BLUE : 'transparent',
                    color: vsMode==='nexxus' ? '#fff' : 'rgba(255,255,255,.5)'}}>
                  🇧🇷 Com a Nexxus
                </button>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div key={vsMode}
                initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}
                transition={{duration:.3, ease:'easeOut'}}
                style={{borderRadius:24, padding:'clamp(1.5rem,4vw,2.5rem)',
                  border: vsMode==='nexxus' ? `1px solid rgba(${BR},${BG},${BB},.25)` : '1px solid rgba(239,68,68,.25)',
                  background: vsMode==='nexxus' ? `rgba(${BR},${BG},${BB},.07)` : 'rgba(239,68,68,.06)',
                }}>
                <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:'1.5rem'}}>
                  <div style={{width:44, height:44, borderRadius:12, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.25rem',
                    background: vsMode==='nexxus' ? BLUE : '#ef4444'}}>
                    {vsMode==='nexxus' ? '🇧🇷' : '💸'}
                  </div>
                  <div>
                    <p style={{fontSize:'.68rem', fontWeight:700, letterSpacing:'.14em', margin:0,
                      color: vsMode==='nexxus' ? BLUE : '#f87171'}}>
                      {vsMode==='nexxus' ? 'TIME BRASILEIRO GERIDO PELA NEXXUS' : 'CONTRATAÇÃO LOCAL NO SEU PAÍS'}
                    </p>
                    <p style={{fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'1rem', color:'#fff', margin:'3px 0 0', lineHeight:1.3}}>
                      {vsMode==='nexxus' ? 'Custo menor, zero burocracia, gestão inclusa' : 'Caro, arriscado e todo o peso nas suas costas'}
                    </p>
                  </div>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:'.75rem'}}>
                  {(vsMode==='nexxus' ? NEXXUS_VS : LOCAL_VS).map((text,i)=>(
                    <div key={i} style={{display:'flex', alignItems:'flex-start', gap:10}}>
                      <span style={{marginTop:3, width:19, height:19, borderRadius:'50%', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.65rem', fontWeight:900, color:'#fff',
                        background: vsMode==='nexxus' ? BLUE : '#ef4444'}}>
                        {vsMode==='nexxus' ? '✓' : '✕'}
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

      {/* ════ STEPS ════ */}
      <section style={{background:'#f4f7ff', color:'#0f172a', padding:'clamp(4rem,8vw,7rem) 1.5rem'}}>
        <div style={{maxWidth:900, margin:'0 auto'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.3}} variants={fadeUp}
            style={{textAlign:'center', marginBottom:'3.5rem'}}>
            <div style={{display:'inline-block', fontSize:'.7rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, border:`1px solid rgba(${BR},${BG},${BB},.35)`, borderRadius:999, padding:'.35rem 1rem', marginBottom:'1.2rem', background:`rgba(${BR},${BG},${BB},.08)`}}>
              COMO FUNCIONA
            </div>
            <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.9rem,4.5vw,3.2rem)', lineHeight:1.1}}>
              Do zero ao time vendendo<br/><span style={{color:BLUE}}>em 20 dias</span>
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

      {/* ════ O QUE ENTREGAMOS ════ */}
      <section style={{background:BG_HERO, color:'#fff', padding:'clamp(4rem,8vw,6rem) 1.5rem', position:'relative', overflow:'hidden'}}>
        <motion.div animate={{opacity:[.4,.7,.4], scale:[1,1.1,1]}} transition={{duration:7, repeat:Infinity, ease:'easeInOut'}}
          style={{position:'absolute', top:'-20%', right:'-10%', width:'50%', paddingTop:'50%', borderRadius:'50%', background:`radial-gradient(circle,rgba(${BR},${BG},${BB},.07),transparent 70%)`, pointerEvents:'none'}}/>
        <div style={{maxWidth:1100, margin:'0 auto', position:'relative'}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.15}} variants={stagger(.1)}
            style={{display:'flex', gap:'clamp(2rem,5vw,4rem)', flexWrap:'wrap', alignItems:'flex-start'}}>

            {/* Coluna esquerda */}
            <motion.div variants={slideLeft} style={{flex:'1 1 280px', minWidth:260, maxWidth:420}}>
              <div style={{width:52, height:52, borderRadius:14, background:BLUE, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 0 24px rgba(${BR},${BG},${BB},.4)`, marginBottom:'1.2rem'}}>
                <Globe2 style={{width:26, height:26, color:'#fff'}}/>
              </div>
              <div style={{fontSize:'.68rem', fontWeight:700, letterSpacing:'.14em', color:BLUE, marginBottom:'.6rem'}}>
                TERCEIRIZAÇÃO INTERNACIONAL
              </div>
              <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:900, fontSize:'clamp(1.7rem,3.5vw,2.4rem)', lineHeight:1.1, marginBottom:'.7rem'}}>
                Seu time comercial,<br/>gerido pela Nexxus
              </h2>
              <p style={{color:BLUE, fontWeight:700, fontSize:'1rem', lineHeight:1.4, marginBottom:'1rem'}}>
                Você recebe reuniões e vendas. A gente cuida de todo o resto.
              </p>
              <p style={{color:'rgba(255,255,255,.55)', fontSize:'.9rem', lineHeight:1.65, marginBottom:'1.6rem'}}>
                Recrutamos, contratamos, treinamos e gerimos SDRs, vendedores e closers brasileiros, fluentes em inglês, espanhol e português, que trabalham exclusivamente para a sua empresa no fuso horário do seu mercado.
              </p>

              {/* Para quem é */}
              <div style={{background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)', borderRadius:16, padding:'1.2rem 1.4rem', marginBottom:'1.6rem'}}>
                <p style={{fontSize:'.78rem', fontWeight:700, color:'rgba(255,255,255,.45)', letterSpacing:'.08em', margin:'0 0 .9rem'}}>
                  👥 PARA QUEM É
                </p>
                <ul style={{listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'.65rem'}}>
                  {['Brasileiros com empresa fora do Brasil que precisam vender mais','Quem acha caro demais contratar vendedor no país onde vive','Quem já tentou contratar local e sofreu com turnover e gestão','Quem quer time comercial dedicado sem visto, sem mudança, sem dor de cabeça'].map((item,i)=>(
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
                {DELIVERS.map((d,i)=>(
                  <motion.div key={i} whileHover={{borderColor:`rgba(${BR},${BG},${BB},.35)`, y:-2}}
                    style={{background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.08)', borderRadius:16, padding:'1.1rem 1.2rem', transition:'border-color .25s'}}>
                    <p style={{fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'.88rem', color:'#fff', margin:'0 0 .4rem'}}>{d.title}</p>
                    <p style={{fontSize:'.8rem', color:'rgba(255,255,255,.5)', lineHeight:1.55, margin:0}}>{d.body}</p>
                  </motion.div>
                ))}
              </div>

              <p style={{fontSize:'.72rem', fontWeight:700, letterSpacing:'.14em', color:'rgba(255,255,255,.4)', marginBottom:'1rem'}}>VOCÊ ESCOLHE O PERFIL</p>
              <div style={{display:'flex', flexDirection:'column', gap:'.8rem', marginBottom:'1.5rem'}}>
                {[
                  {n:'01', title:'SDR de prospecção', body:'Gera e qualifica leads no seu mercado, agenda reuniões direto no seu calendário.'},
                  {n:'02', title:'Vendedor / Hunter', body:'Aborda, negocia e avança oportunidades com cadência estruturada.'},
                  {n:'03', title:'Closer de fechamento', body:'Conduz a reta final da venda e converte oportunidades em contrato.'},
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
                  Um time comercial dedicado à sua empresa, custando uma fração do valor local, sem nenhuma burocracia no seu país.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════ GALERIA DO ESCRITÓRIO ════ */}
      {(() => {
        const PHOTOS = [
          { src: office.equipeOperacao, label: 'Time em operação' },
          { src: office.salaReuniao,    label: 'Sala de reunião' },
          { src: office.estudio,        label: 'Estúdio' },
          { src: office.varandaSkyline, label: 'Varanda' },
        ]
        return (
          <section style={{background:'#eef2ff', color:'#0f172a', padding:'clamp(3rem,6vw,5rem) 1.5rem'}}>
            <div style={{maxWidth:820, margin:'0 auto'}}>
              <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.3}} variants={fadeUp}
                style={{textAlign:'center', marginBottom:'2rem'}}>
                <div style={{display:'inline-block', fontSize:'.68rem', fontWeight:700, letterSpacing:'.16em', color:BLUE, border:`1px solid rgba(${BR},${BG},${BB},.3)`, borderRadius:999, padding:'.3rem .9rem', marginBottom:'1rem', background:`rgba(${BR},${BG},${BB},.07)`}}>
                  ESTRUTURA REAL, NÃO HOME OFFICE
                </div>
                <h2 style={{fontFamily:'Poppins,sans-serif', fontWeight:800, fontSize:'clamp(1.5rem,3.5vw,2.2rem)', lineHeight:1.15}}>
                  Seu time opera do nosso escritório em <span style={{color:BLUE}}>São Paulo</span>
                </h2>
                <p style={{marginTop:'.8rem', color:'#64748b', fontSize:'.95rem', maxWidth:520, margin:'.8rem auto 0'}}>
                  Estrutura física completa, com gestão presencial e supervisão diária. Você acompanha tudo de onde estiver.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.2}} variants={scaleIn}>
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
                  <div style={{position:'absolute', bottom:12, left:14, fontSize:'.72rem', fontWeight:600, color:'rgba(255,255,255,.7)', background:'rgba(6,10,22,.55)', backdropFilter:'blur(8px)', borderRadius:6, padding:'.25rem .6rem', letterSpacing:'.06em'}}>
                    {PHOTOS[activePhoto].label}
                  </div>
                </div>

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
              Monte seu time comercial<br/><span style={{color:BLUE}}>no Brasil.</span>
            </motion.h2>
            <motion.p variants={fadeUp}
              style={{color:'rgba(255,255,255,.55)', fontSize:'1rem', lineHeight:1.6, maxWidth:480, margin:'0 auto'}}>
              Preencha abaixo. Em até <strong style={{color:'#fff'}}>12 horas</strong> nossa equipe entra em contato com um diagnóstico real da sua operação, esteja você onde estiver.{' '}
              <strong style={{color:'#fff'}}>Sem custo, sem compromisso.</strong>
            </motion.p>
          </motion.div>

          {/* Form card com borda rotativa */}
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
                        WHATSAPP COM CÓDIGO DO PAÍS <span style={{color:BLUE}}>*</span>
                      </label>
                      <input required type="tel" autoComplete="tel" placeholder="+1 407 555 0134"
                        value={form.whatsapp} onChange={e=>setForm(f=>({...f,whatsapp:e.target.value}))}
                        style={inputStyle} onFocus={onFocus} onBlur={onBlur}/>
                    </div>

                    <div style={{gridColumn:'1/-1'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>FATURAMENTO MENSAL (EM US$ OU EQUIVALENTE) <span style={{color:BLUE}}>*</span></label>
                      <select required value={form.faturamento} onChange={e=>setForm(f=>({...f,faturamento:e.target.value}))}
                        style={{...inputStyle, cursor:'pointer', appearance:'none', background:'#0c1220', color:form.faturamento?'#fff':'rgba(255,255,255,.35)'}}
                        onFocus={onFocus} onBlur={onBlur}>
                        <option value="" disabled>Selecione uma faixa</option>
                        {FAIXAS.map(f=><option key={f} value={f} style={{background:'#0c1220',color:'#fff'}}>{f}</option>)}
                      </select>
                    </div>

                    <div style={{gridColumn:'1/-1'}}>
                      <label style={{display:'block', fontSize:'.78rem', fontWeight:600, color:'rgba(255,255,255,.65)', marginBottom:6, letterSpacing:'.04em'}}>CONTE SOBRE SUA OPERAÇÃO <span style={{color:BLUE}}>*</span></label>
                      <textarea required rows={4} placeholder="Em que país está sua empresa e qual o seu principal desafio comercial hoje?"
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
                        Ao enviar, você concorda em ser contatado pela Nexxus. Resposta em até 12h, no seu fuso horário.
                      </p>
                    </div>
                  </motion.form>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.5}} variants={stagger(.12)}
            style={{marginTop:'2.5rem', display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap'}}>
            {[{i:'🔒',t:'Dados 100% seguros'},{i:'🌎',t:'Atendemos qualquer país'},{i:'🎯',t:'Sem compromisso'}].map(({i,t})=>(
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
          © {new Date().getFullYear()} Nexxus. Estruturação Comercial. Sede em São Paulo, Brasil. Atendimento para brasileiros no mundo inteiro.
        </p>
        <a href="https://www.instagram.com/nexxus.inc/" target="_blank" rel="noopener noreferrer"
          style={{fontSize:'.75rem', color:'rgba(255,255,255,.52)', textDecoration:'none'}}>@nexxus.inc</a>
      </footer>

      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,.28); }
        select option { background: #0c1220; color: #fff; }
      `}</style>
    </div>
  )
}
