import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '@/components/SEO'
import { organizationSchema, localBusinessSchema, websiteSchema, homeFaqSchema, pageKeywords } from '@/data/seo'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { ServiceCard } from '@/components/ServiceCard'
import { MandalaMetodo } from '@/components/MandalaMetodo'
import { InfernoCeu } from '@/components/InfernoCeu'
import { ToolsMarquee } from '@/components/ToolsMarquee'
import { Counter } from '@/components/Counter'
import { BlogCard } from '@/components/BlogCard'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'
import { CTASection } from '@/components/CTASection'
import { HeroGlow } from '@/components/HeroGlow'
import { iconMap } from '@/components/iconMap'
import { office } from '@/assets/escritorio'
import { services } from '@/data/services'
import { differentials, resultStats } from '@/data/metodo'
import { recentPosts } from '@/data/posts'

export default function Home() {
  const posts = recentPosts(3)

  return (
    <>
      <SEO
        title="Terceirização e Estruturação Comercial B2B | Nexxus"
        description="Pare de contratar vendedor CLT ou PJ e torcendo. A Nexxus monta e opera sua equipe comercial completa (SDR, Hunter, Closer) com método e dados — operação no ar em 20 dias. Diagnóstico gratuito."
        keywords={pageKeywords.home}
        path="/"
        schema={[organizationSchema, localBusinessSchema, websiteSchema, homeFaqSchema]}
      />

      {/* ===================== HERO ===================== */}
      <section className="relative flex flex-col overflow-hidden bg-ink-950">
        {/* Linha de topo */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

        {/* Fundo: orbs de gradiente */}
        <HeroGlow />

        {/* Conteúdo principal */}
        <div className="relative container-nx grid items-center gap-10 py-20 lg:grid-cols-[1fr_400px] lg:gap-20 lg:py-32">

          {/* ── Coluna esquerda: copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow editorial */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-7 bg-brand-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-400">
                Estruturação Comercial Completa
              </span>
            </div>

            {/* Headline — grande, peso black */}
            <h1 className="font-display font-black text-5xl leading-[1.0] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Pare de vender<br />
              no{' '}
              <span className="text-red-400">improviso</span>.<br />
              Escale com{' '}
              <span className="text-gradient">método</span>.
            </h1>

            {/* Descrição */}
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/55">
              A Nexxus estrutura e opera o comercial da sua empresa com método, dados e um time
              pronto — sem você precisar montar tudo sozinho.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button to="/contato" size="lg">
                Solicitar diagnóstico gratuito
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Link
                to="/servicos"
                className="group inline-flex items-center gap-2 text-base font-semibold text-white/60 transition-colors duration-300 hover:text-white"
              >
                Ver os serviços
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Diferenciais */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.08] pt-8">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Inclui</span>
              {['Operação em 20 dias', 'Escritório em SP', 'Resposta em 12h'].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-white/50">
                  <span className="h-1 w-1 rounded-full bg-brand-500" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Coluna direita: foto + cards ── */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Foto */}
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/10">
              {/* Gradiente interno para fundir com o fundo */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
              <MediaPlaceholder
                src={office.equipeOperacao}
                alt="Equipe Nexxus em operação no escritório em São Paulo"
                label="foto do escritório"
                ratio="portrait"
                rounded="rounded-[2rem]"
              />
            </div>

            {/* Card KPI — dark glass, canto inferior esquerdo */}
            <div className="absolute -bottom-5 -left-7 z-20 rounded-2xl border border-white/10 bg-ink-900/80 p-5 shadow-glow backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Cadência D1–D12</p>
              <p className="mt-1.5 font-display text-3xl font-black text-white">
                <Counter value={80} suffix="%" />
              </p>
              <p className="mt-0.5 text-xs text-white/40">das vendas acima do 5º contato</p>
            </div>

            {/* Tag squad — brand glass, topo direito */}
            <div className="absolute -right-4 top-7 z-20 rounded-xl border border-brand-500/25 bg-brand-500/12 px-4 py-2.5 backdrop-blur-md">
              <p className="text-xs font-bold tracking-wider text-brand-300">SDR · Hunter · Closer</p>
            </div>
          </motion.div>
        </div>

        {/* Faixa de ferramentas/parceiros */}
        <div className="relative container-nx pb-12 pt-2">
          <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Método e tecnologia que sustentam a operação
          </p>
          <ToolsMarquee />
        </div>
      </section>

      {/* ===================== QUEM SOMOS ===================== */}
      <section className="container-nx py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <MediaPlaceholder
                src={office.varandaSofa}
                alt="Vista do escritório da Nexxus para o skyline de São Paulo"
                label="foto do escritório"
                ratio="wide"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <div>
              <span className="eyebrow">Quem somos</span>
              <h2 className="heading mt-4 text-balance text-3xl sm:text-4xl">
                A Nexxus não vende pessoa avulsa. Vende operação comercial estruturada.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                Antes de colocar gente em campo, desenhamos toda a arquitetura comercial do seu
                negócio: ICP, oferta, canal e funil. Só depois construímos o time certo, com
                metodologia, dados e governança. É assim que transformamos vendas em uma máquina
                previsível.
              </p>
              <div className="mt-7">
                <Button to="/sobre" variant="outline">
                  Conhecer a Nexxus
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVIÇOS ===================== */}
      <section className="container-nx py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="O que fazemos"
            title={<>Três formas de destravar o seu comercial</>}
            subtitle="Da operação inteira terceirizada à estruturação do seu próprio time: você escolhe o nível de envolvimento."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.1}>
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== INFERNO x CÉU ===================== */}
      <section className="bg-ink-50/60 py-16 sm:py-24">
        <div className="container-nx">
          <Reveal>
            <SectionHeading
              eyebrow="O antes e o depois"
              title="Onde está a sua operação hoje?"
              subtitle="A diferença entre crescer no susto e crescer com método. Compare os dois cenários."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12">
              <InfernoCeu />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== MÉTODO (MANDALA) ===================== */}
      <section id="metodo" className="container-nx scroll-mt-24 py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Método Nexxus"
            title={<>A Mandala dos 6 pilares</>}
            subtitle="O ecossistema interligado que sustenta operações comerciais de alto desempenho. Passe o mouse ou toque em cada pilar."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14">
            <MandalaMetodo />
          </div>
        </Reveal>
      </section>

      {/* ===================== NÚMEROS / DIFERENCIAIS ===================== */}
      <section className="bg-ink-950 py-16 text-white sm:py-24">
        <div className="container-nx">
          <Reveal>
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:grid-cols-2 lg:grid-cols-4 sm:p-10">
              {resultStats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                    <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    {s.label}
                    {s.placeholder && (
                      <span className="ml-1 text-brand-400">· [INSERIR DADO REAL]</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {differentials.map((d, i) => {
              const Icon = iconMap[d.icon]
              return (
                <Reveal key={d.title} delay={i * 0.08}>
                  <div className="flex h-full gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-brand-500/40 hover:bg-white/[0.04]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                      {Icon && <Icon className="h-6 w-6" />}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{d.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">{d.description}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== BLOG PREVIEW ===================== */}
      <section className="container-nx py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Conteúdo"
              title="Do blog da Nexxus"
              subtitle="Ideias práticas sobre vendas, estrutura comercial e crescimento previsível."
            />
            <Link
              to="/blog"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-600"
            >
              Ver todas as matérias
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <BlogCard post={post} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <CTASection />
    </>
  )
}
