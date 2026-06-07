import { Link } from 'react-router-dom'
import { Mail, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import { Logo } from './Logo'
import { site, navLinks, mailtoLink, whatsappLink } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 text-white/70">
      <div className="container-nx grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        {/* Marca */}
        <div className="lg:col-span-5">
          <Link to="/" aria-label="Nexxus — início">
            <Logo variant="white" className="h-8" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            {site.description}
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/80 ring-1 ring-white/10 transition-colors hover:bg-brand-500 hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/80 ring-1 ring-white/10 transition-colors hover:bg-brand-500 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <div className="lg:col-span-3 lg:col-start-7">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Navegação
          </h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/60 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div className="lg:col-span-3">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contato
          </h4>
          <ul className="mt-4 flex flex-col gap-3.5 text-sm">
            <li>
              <a
                href={mailtoLink}
                className="flex items-start gap-3 text-white/60 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="break-all">{site.email}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 transition-colors hover:text-white"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>
                {site.address.building}
                <br />
                {site.address.reference}
                <br />
                {site.address.city}/{site.address.state}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-nx flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>
            Estruturação e terceirização comercial · {site.address.city}/{site.address.state}
          </p>
        </div>
      </div>
    </footer>
  )
}
