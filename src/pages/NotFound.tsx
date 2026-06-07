import { ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <>
      <SEO title="Página não encontrada" path="/404" noindex />
      <section className="container-nx flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-display text-7xl font-extrabold text-gradient sm:text-8xl">404</span>
        <h1 className="heading mt-4 text-2xl sm:text-3xl">Página não encontrada</h1>
        <p className="mt-3 max-w-md text-ink-500">
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <div className="mt-8">
          <Button to="/" size="lg">
            <ArrowLeft className="h-5 w-5" />
            Voltar para o início
          </Button>
        </div>
      </section>
    </>
  )
}
