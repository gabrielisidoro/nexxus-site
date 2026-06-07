import { ArrowRight, Check, Users } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { MandalaMetodo } from '@/components/MandalaMetodo'
import { CTASection } from '@/components/CTASection'
import { iconMap } from '@/components/iconMap'
import { services } from '@/data/services'
import { roles, onboarding } from '@/data/metodo'
import { cn } from '@/lib/cn'

export default function Servicos() {
  return (
    <>
      <SEO
        title="Serviços | Nexxus"
        description="Terceirização comercial, mentoria e estruturação comercial interna. Conheça as três frentes da Nexxus e o Método dos 6 pilares."
        path="/servicos"
      />

      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 -top-10 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-nx py-16 sm:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">Serviços</span>
              <h1 className="heading mt-5 text-balance text-4xl leading-tight sm:text-5xl">
                A operação comercial certa para o seu momento
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                Seja assumindo o seu comercial por completo, treinando o seu time ou montando a
                estrutura do zero: entregamos método, dados e governança em cada frente.
              </p>
            </div>
          </Reveal>

          {/* Atalhos para os serviços */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon]
              return (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <a
                    href={`#${s.slug}`}
                    className="card card-hover group flex items-center gap-4 p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      {Icon && <Icon className="h-6 w-6" />}
                    </span>
                    <span className="font-display text-sm font-bold leading-tight text-ink-900">
                      {s.name}
                    </span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detalhe de cada serviço */}
      {services.map((service, idx) => {
        const Icon = iconMap[service.icon]
        const alt = idx % 2 === 1
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={cn('scroll-mt-24 py-16 sm:py-20', alt && 'bg-ink-50/60')}
          >
            <div className="container-nx grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Coluna de apresentação */}
              <Reveal className={cn(alt && 'lg:order-2')}>
                <div className="lg:sticky lg:top-28">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-glow">
                    {Icon && <Icon className="h-7 w-7" />}
                  </span>
                  <h2 className="heading mt-5 text-3xl sm:text-4xl">{service.name}</h2>
                  <p className="mt-2 font-display text-lg font-semibold text-brand-600">
                    {service.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-ink-500">{service.summary}</p>

                  <div className="mt-7 rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
                    <p className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                      <Users className="h-4 w-4 text-brand-500" /> Para quem é
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {service.forWhom.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-ink-600">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7">
                    <Button to="/contato">
                      Quero esse serviço
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Reveal>

              {/* Coluna de entregas + como funciona */}
              <Reveal className={cn(alt && 'lg:order-1')} delay={0.1}>
                <div>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-400">
                    O que entregamos
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {service.deliverables.map((d) => (
                      <div
                        key={d.title}
                        className="rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-colors hover:border-brand-200"
                      >
                        <p className="font-display font-bold text-ink-900">{d.title}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                          {d.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <h3 className="mt-10 font-display text-sm font-semibold uppercase tracking-wider text-ink-400">
                    Como funciona
                  </h3>
                  <div className="mt-4 space-y-4">
                    {service.howItWorks.map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display text-sm font-bold text-brand-600">
                          {step.step}
                        </span>
                        <div className="pt-1">
                          <p className="font-display font-bold text-ink-900">{step.title}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-ink-500">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-50 to-white p-5 ring-1 ring-brand-100">
                    <p className="text-sm font-medium text-ink-600">
                      <span className="font-bold text-brand-700">Resultado: </span>
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      {/* Método (Mandala) */}
      <section id="metodo" className="container-nx scroll-mt-24 py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Método Nexxus"
            title="A Mandala dos 6 pilares"
            subtitle="O ecossistema que sustenta todas as nossas frentes. Sem um pilar, a operação desmorona."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14">
            <MandalaMetodo />
          </div>
        </Reveal>
      </section>

      {/* Papéis da operação */}
      <section className="bg-ink-50/60 py-16 sm:py-20">
        <div className="container-nx">
          <Reveal>
            <SectionHeading
              eyebrow="Time especializado"
              title="Cada um no papel certo"
              subtitle="Não usamos vendedores genéricos. Dividimos o processo em especialistas para garantir volume, previsibilidade e conversão."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {roles.map((role, i) => (
              <Reveal key={role.name} delay={i * 0.1}>
                <div className="card h-full p-7">
                  <p className="font-display text-2xl font-extrabold text-brand-600">{role.name}</p>
                  <p className="text-sm font-medium text-ink-400">{role.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500">{role.mission}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {role.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl bg-ink-50 p-3 text-center">
                        <p className="font-display text-lg font-bold text-ink-900">{m.value}</p>
                        <p className="text-xs text-ink-400">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding 20 dias */}
      <section className="container-nx py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Do contrato ao go-live"
            title="Sua operação no ar em 20 dias"
            subtitle="Um cronograma enxuto para transformar a sua operação comercial em uma máquina previsível."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {onboarding.map((week, i) => (
            <Reveal key={week.week} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl border border-ink-100 bg-white p-7 shadow-card">
                <span className="font-display text-5xl font-extrabold text-brand-100">
                  0{i + 1}
                </span>
                <p className="-mt-6 font-display font-bold text-ink-900">{week.week}</p>
                <ul className="mt-4 space-y-2.5">
                  {week.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Vamos estruturar o seu comercial?" />
    </>
  )
}
