import { useEffect, useRef } from 'react'

const BRAND_R = 23
const BRAND_G = 94
const BRAND_B = 255

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  phase: number
}

/** Fundo animado da hero: rede de partículas com interação de mouse. */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    let cw = 0
    let ch = 0
    let dots: Dot[] = []

    function buildDots() {
      const count = Math.max(50, Math.floor((cw * ch) / 14000))
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * cw,
        y: Math.random() * ch,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.5,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1
      cw = canvas.offsetWidth
      ch = canvas.offsetHeight
      canvas.width = cw * dpr
      canvas.height = ch * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildDots()
    }

    resize()
    window.addEventListener('resize', resize)

    let t = 0

    function frame() {
      t += 0.007
      ctx.clearRect(0, 0, cw, ch)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const hasMouse = mx > -500

      // Mouse spotlight
      if (hasMouse) {
        const spot = ctx.createRadialGradient(mx, my, 0, mx, my, 260)
        spot.addColorStop(0, `rgba(${BRAND_R},${BRAND_G},${BRAND_B},0.10)`)
        spot.addColorStop(1, `rgba(${BRAND_R},${BRAND_G},${BRAND_B},0)`)
        ctx.fillStyle = spot
        ctx.fillRect(0, 0, cw, ch)
      }

      // Mover dots
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x <= 0 || d.x >= cw) { d.vx *= -1; d.x = Math.max(0, Math.min(cw, d.x)) }
        if (d.y <= 0 || d.y >= ch) { d.vy *= -1; d.y = Math.max(0, Math.min(ch, d.y)) }

        // Atração ao mouse
        if (hasMouse) {
          const dx = mx - d.x
          const dy = my - d.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < 160 * 160) {
            const dist = Math.sqrt(dist2)
            const f = ((160 - dist) / 160) * 0.018
            d.x += dx * f
            d.y += dy * f
          }
        }
      }

      // Conexões
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const d2 = dx * dx + dy * dy
          if (d2 > 115 * 115) continue
          const dist = Math.sqrt(d2)
          const t01 = 1 - dist / 115

          // boost se próximo do mouse
          let boost = 0
          if (hasMouse) {
            const mx1 = (dots[i].x + dots[j].x) / 2 - mx
            const my1 = (dots[i].y + dots[j].y) / 2 - my
            const md = Math.sqrt(mx1 * mx1 + my1 * my1)
            if (md < 180) boost = (1 - md / 180) * 0.5
          }

          const alpha = t01 * (0.11 + boost)
          const lw = t01 * (0.6 + boost * 1.2)
          ctx.beginPath()
          ctx.moveTo(dots[i].x, dots[i].y)
          ctx.lineTo(dots[j].x, dots[j].y)
          ctx.strokeStyle = `rgba(${BRAND_R},${BRAND_G},${BRAND_B},${alpha})`
          ctx.lineWidth = lw
          ctx.stroke()
        }
      }

      // Desenhar dots
      for (const d of dots) {
        const pulse = 0.22 + Math.sin(t * 1.4 + d.phase) * 0.08

        let glow = 0
        let radiusBonus = 0
        if (hasMouse) {
          const dx = mx - d.x
          const dy = my - d.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            glow = (1 - dist / 200) * 0.75
            radiusBonus = glow * 2.5
          }
        }

        const opacity = Math.min(1, pulse + glow)
        const radius = d.r + radiusBonus

        if (glow > 0.15) {
          ctx.shadowBlur = 14
          ctx.shadowColor = `rgba(${BRAND_R},${BRAND_G},${BRAND_B},0.9)`
        }

        ctx.beginPath()
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${BRAND_R},${BRAND_G},${BRAND_B},${opacity})`
        ctx.fill()
        ctx.shadowBlur = 0
      }

      rafRef.current = requestAnimationFrame(frame)
    }

    frame()

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }

    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafRef.current!)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ display: 'block' }}
    />
  )
}
