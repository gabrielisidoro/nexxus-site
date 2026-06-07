import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Sobe a página ao trocar de rota e rola suavemente até a âncora (#id)
 * quando o link contém hash — ex.: /servicos#metodo.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Aguarda o conteúdo montar antes de rolar até a âncora.
      const id = hash.slice(1)
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}
