import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
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
import { iconMap } from '@/components/iconMap'
import { office } from '@/assets/escritorio'
import { services } from '@/data/services'
import { differentials, resultStats } from '@/data/metodo'
import { recentPosts } from '@/data/posts'
import { site } from '@/data/site'

export default function Home() {
  const posts = recentPosts(3)

  return (
    <>
      <SEO
        title="Nexxus | Estruturação e Terceirização Comercial"
        description={site.description}
        path="/"
      />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        {/* Vídeo de fundo */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        {/* Overlay escuro para legibilidade do texto */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ink-950/88 via-ink-950/75 to-ink-950/55" />
        {/* Grade sutil */}
        <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-[0.06] [background-size:30px_30px]" />

        <div className="relative container-nx grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
          <Reveal>
            <div>
              <span className="eyebrow">Estruturação Comercial Completa</span>
              <h1 className="heading mt-5 text-balance text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
                Pare de vender no <span className="text-red-400">improviso</span>.
                <br />
                Escale com <span className="text-gradient">método</span>.
              </h1>
              <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70">
                A Nexxus estrutura e opera o comercial da sua empresa com método, dados e um time
                pronto. Terceirização, mentoria e estruturação de vendas, para você crescer com
                previsibilidade, sem montar tudo sozinho.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button to="/contato" size="lg">
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button to="/servicos" variant="white" size="lg">
                  Conhecer os serviços
                </Button>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-400" /> Operação no ar em 20 dias
                </li>
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-400" /> Estrutura física em São Paulo
                </li>
                <li className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-400" /> {site.responseTime}
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Visual do hero */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-white/10">
                <MediaPlaceholder
                  src={office.equipeOperacao}
                  alt="Equipe Nexxus em operação no escritório em São Paulo"
                  label="foto do escritório"
                  ratio="portrait"
                  rounded="rounded-[2rem]"
                />
              </div>

              {/* Card flutuante: previsibilidade */}
              <div className="absolute -left-4 bottom-6 hidden rounded-2xl border border-white/10 bg-white/95 p-4 shadow-glow backdrop-blur sm:block">
                <p className="text-xs font-medium text-ink-400">Cadência D1-D12</p>
                <p className="mt-1 font-display text-2xl font-bold text-ink-900">
                  <Counter value={80} suffix="%" />
                </p>
                <p className="text-xs text-ink-500">das vendas entre o 5º e o 12º contato</p>
              </div>

              {/* Card flutuante: squad */}
              <div className="absolute -right-3 -top-4 hidden rounded-2xl border border-white/10 bg-white/95 p-4 shadow-glow backdrop-blur sm:block">
                <p className="text-xs font-medium text-ink-400">Squad dedicada</p>
                <p className="mt-1 font-display text-2xl font-bold text-brand-600">SDR · Hunter · Closer</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Faixa de ferramentas/parceiros */}
        <div className="relative container-nx pb-10">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
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
