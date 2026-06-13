/** Fundo do hero: orbs de gradiente CSS animados. Sem canvas, sem partículas. */
export function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Orb principal — topo direito */}
      <div
        className="absolute"
        style={{
          right: '-180px',
          top: '-180px',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(23,94,255,0.18) 0%, rgba(23,94,255,0.06) 45%, transparent 70%)',
          filter: 'blur(64px)',
          animation: 'orb-breathe 11s ease-in-out infinite',
        }}
      />
      {/* Orb secundário — centro esquerdo */}
      <div
        className="absolute"
        style={{
          left: '-120px',
          top: '30%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(82,120,255,0.10) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'orb-breathe 16s ease-in-out infinite reverse',
        }}
      />
      {/* Orb accent — fundo direito */}
      <div
        className="absolute"
        style={{
          right: '5%',
          bottom: '-80px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(11,28,71,0.6) 0%, transparent 70%)',
          filter: 'blur(48px)',
          animation: 'orb-breathe 9s ease-in-out infinite 2s',
        }}
      />
      {/* Grade diagonal finíssima */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 64px)',
        }}
      />
    </div>
  )
}
