import { SEO } from '@/components/SEO'
import { breadcrumbSchema, blogIndexSchema, pageKeywords } from '@/data/seo'
import { Reveal } from '@/components/Reveal'
import { BlogCard } from '@/components/BlogCard'
import { CTASection } from '@/components/CTASection'
import { allPosts } from '@/data/posts'

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog de Vendas B2B e Estruturação Comercial | Nexxus"
        description="Artigos práticos sobre terceirização comercial, SDR, Hunter e Closer, prospecção outbound, CRM, playbook e como escalar vendas B2B com método. Conteúdo da equipe Nexxus."
        keywords={pageKeywords.blog}
        path="/blog"
        schema={[
          blogIndexSchema(allPosts),
          breadcrumbSchema([
            { name: 'Início', url: 'https://nexxusagencia.com.br' },
            { name: 'Blog', url: 'https://nexxusagencia.com.br/blog' },
          ]),
        ]}
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-nx py-16 sm:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Blog</span>
              <h1 className="heading mt-5 text-balance text-4xl leading-tight sm:text-5xl">
                Conteúdo para vender com <span className="text-gradient">método</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                Artigos sobre estrutura comercial, terceirização de vendas e o que separa as
                operações previsíveis das que vivem no improviso.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lista de posts */}
      <section className="container-nx pb-16 sm:pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
