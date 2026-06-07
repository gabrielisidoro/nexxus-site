import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from './Button'
import { navLinks } from '@/data/site'
import { cn } from '@/lib/cn'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Fecha o menu ao trocar de página
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Sombra/blur ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll do body com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
      isActive ? 'text-brand-600' : 'text-ink-600 hover:text-brand-600',
    )

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-ink-100 bg-white/85 backdrop-blur-lg' : 'border-b border-transparent bg-white/0',
      )}
    >
      <div className="container-nx flex h-16 items-center justify-between lg:h-20">
        <Link to="/" aria-label="Nexxus — início" className="relative z-10">
          <Logo className="h-7 sm:h-8" />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contato">
            Solicitar diagnóstico
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-100 bg-white text-ink-700 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="fixed inset-0 z-0 bg-white lg:hidden">
          <div className="container-nx flex h-full flex-col pb-10 pt-24">
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'rounded-2xl px-4 py-3 text-lg font-semibold transition-colors',
                      isActive ? 'bg-brand-50 text-brand-600' : 'text-ink-700 hover:bg-ink-50',
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto">
              <Button to="/contato" size="lg" className="w-full">
                Solicitar diagnóstico
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
