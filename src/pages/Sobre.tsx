import { Building2, Presentation, Video, MapPin, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'
import { VideoPlaceholder } from '@/components/VideoPlaceholder'
import { CTASection } from '@/components/CTASection'
import { values, team } from '@/data/team'
import { site } from '@/data/site'

const infra = [
  {
    icon: Building2,
    title: 'Ambiente corporativo',
    description:
      'Recepção e corredores com design moderno, iluminação em LED e alto padrão de acabamento.',
    label: 'foto do ambiente corporativo',
  },
  {
    icon: Presentation,
    title: 'Salas de mentoria',
    description:
      'Salas privativas equipadas com telas e infraestrutura completa para reuniões e planejamento estratégico.',
    label: 'foto da sala de mentoria',
  },
  {
    icon: Video,
    title: 'Estúdio para clientes',
    description:
      'Sala de gravação profissional com câmera, iluminação avançada e cenário, pronta para a sua operação.',
    label: 'foto do estúdio',
  },
]

export default function Sobre() {
  return (
    <>
      <SEO
        title="Sobre a Nexxus"
        description="Conheça a Nexxus: método, dados e governança para estruturar e operar o comercial da sua empresa. Estrutura física em São Paulo, com salas de mentoria e estúdio."
        path="/sobre"
      />

      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-nx py-16 sm:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">Sobre a Nexxus</span>
              <h1 className="heading mt-5 text-balance text-4xl leading-tight sm:text-5xl">
                Construímos máquinas comerciais que crescem com{' '}
                <span className="text-gradient">método</span>, não com sorte.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                A Nexxus nasceu para resolver uma dor comum a empresas de todos os tamanhos: vender
                de forma consistente sem depender de improviso, de indicação ou do esforço heroico de
                uma única pessoa. Em vez de alocar um vendedor e torcer, desenhamos a engenharia
                completa da operação — e colocamos o time certo para executá-la.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Propósito / história */}
      <section className="container-nx pb-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="rounded-3xl border border-ink-100 bg-ink-50/50 p-8">
              <h2 className="font-display text-xl font-bold text-ink-900">Nosso propósito</h2>
              <p className="mt-3 leading-relaxed text-ink-500">
                Tirar o dono do operacional e dar a ele previsibilidade. Acreditamos que toda empresa
                merece uma operação comercial estruturada — com arquitetura, processo, cadência e
                gestão orientada a dados — independentemente de ter ou não um time interno hoje.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink-100 bg-ink-50/50 p-8">
              <h2 className="font-display text-xl font-bold text-ink-900">Como trabalhamos</h2>
              <p className="mt-3 leading-relaxed text-ink-500">
                Arquitetura antes de pessoas. Primeiro entendemos e desenhamos toda a sua arquitetura
                comercial — ICP, oferta, canal e funil. Só depois construímos e treinamos o time para
                executar e escalar, com acompanhamento próximo do início ao fim.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Operação física em SP — fotos + vídeo do escritório */}
      <section className="container-nx py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Operação física"
            title={<>Estrutura real, no coração de São Paulo</>}
            subtitle="Estamos no polo de negócios da cidade, oferecendo a melhor infraestrutura para clientes e parceiros."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Foto/imagem do prédio */}
          <Reveal className="lg:col-span-7">
            <MediaPlaceholder
              label="foto do edifício / fachada do escritório"
              ratio="wide"
              className="h-full"
            />
          </Reveal>

          {/* Vídeo da fachada */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <VideoPlaceholder
                label="vídeo da fachada do escritório"
                ratioClass="aspect-video"
                className="w-full"
              />
              <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <div>
                    <p className="font-display font-bold text-ink-900">{site.address.building}</p>
                    <p className="text-sm text-ink-500">{site.address.reference}</p>
                    <p className="text-sm text-ink-500">
                      {site.address.city}/{site.address.state}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-ink-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-500" /> Operação comercial 100% ativa
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-500" /> Ao lado do Shopping Morumbi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-500" /> Salas de mentoria e estúdio
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Estrutura interna */}
      <section className="bg-ink-50/60 py-16 sm:py-20">
        <div className="container-nx">
          <Reveal>
            <SectionHeading
              eyebrow="Infraestrutura completa"
              title="Mais do que um escritório: um hub para parceiros"
              subtitle="Espaços de trabalho, salas de mentoria e um estúdio de gravação profissional liberado para o uso dos clientes."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {infra.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="card h-full overflow-hidden">
                  <MediaPlaceholder label={item.label} ratio="wide" rounded="rounded-none" />
                  <div className="p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="container-nx py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="No que acreditamos"
            title="Nossos valores"
            subtitle="Os princípios que guiam cada operação que assumimos."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
                <span className="font-display text-2xl font-extrabold text-brand-500">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{v.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Equipe */}
      <section className="container-nx pb-16 sm:pb-24">
        <Reveal>
          <SectionHeading
            eyebrow="Time"
            title="Quem está em campo com você"
            subtitle="Especialistas que vivem vendas todos os dias. (Adicione novos integrantes em src/data/team.ts.)"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name + i} delay={i * 0.08}>
              <div className="card h-full overflow-hidden text-center">
                <MediaPlaceholder
                  src={member.photo}
                  label={`foto de ${member.name}`}
                  ratio="square"
                  rounded="rounded-none"
                  alt={member.name}
                />
                <div className="p-5">
                  <h3 className="font-display font-bold text-ink-900">{member.name}</h3>
                  <p className="text-sm font-medium text-brand-600">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
