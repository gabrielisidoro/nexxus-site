import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, MapPin, Send, Instagram, Linkedin } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Reveal } from '@/components/Reveal'
import { site, mailtoLink } from '@/data/site'
import { submitLead, validateLead, applyCountryCode } from '@/lib/submitLead'
import { breadcrumbSchema, pageKeywords } from '@/data/seo'

interface FormState {
  nome: string
  empresa: string
  email: string
  whatsapp: string
  faturamento: string
  mensagem: string
}

const initial: FormState = {
  nome: '',
  empresa: '',
  email: '',
  whatsapp: '',
  faturamento: '',
  mensagem: '',
}

const faixasFaturamento = [
  'Até R$ 50 mil',
  'R$ 51 mil a R$ 99 mil',
  'R$ 100 mil a R$ 199 mil',
  'R$ 200 mil a R$ 299 mil',
  'R$ 300 mil a R$ 500 mil',
  'R$ 500 mil a R$ 1 milhão',
  'Mais de R$ 1 milhão',
  'Mais de R$ 5 milhões',
]

export default function Contato() {
  const navigate = useNavigate()
  const [form, setForm] = useState<FormState>(initial)
  const [formError, setFormError] = useState<string | null>(null)

  function update(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError(null)
    const data = { ...form, origem: 'site' as const }
    const emptyField = validateLead(data)
    if (emptyField) {
      setFormError('Por favor, preencha todos os campos obrigatórios corretamente.')
      return
    }
    await submitLead(data)
    navigate('/obrigado')
  }

  const inputClass =
    'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 transition-colors focus:border-brand-400'

  return (
    <>
      <SEO
        title="Diagnóstico Comercial Gratuito | Fale com a Nexxus"
        description="Solicite seu diagnóstico comercial gratuito. Em até 12 horas nossa equipe analisa sua operação de vendas e apresenta um plano real — sem custo e sem compromisso."
        keywords={pageKeywords.contato}
        path="/contato"
        schema={[breadcrumbSchema([
          { name: 'Início', url: 'https://nexxusagencia.com.br' },
          { name: 'Contato', url: 'https://nexxusagencia.com.br/contato' },
        ])]}
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 -top-10 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-nx py-16 sm:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Contato</span>
              <h1 className="heading mt-5 text-balance text-4xl leading-tight sm:text-5xl">
                Vamos crescer <span className="text-gradient">juntos</span>?
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                Conte um pouco sobre a sua operação. Em uma conversa, mostramos onde está o gargalo e
                o potencial real de escala do seu comercial. {site.responseTime}.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            {/* Informações de contato */}
            <Reveal className="lg:col-span-2">
              <div className="flex flex-col gap-4">
                <a href={mailtoLink} className="card card-hover flex items-center gap-4 p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                    <Mail className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display font-bold text-ink-900">E-mail</span>
                    <span className="block truncate text-sm text-ink-500">{site.email}</span>
                  </span>
                </a>

                <div className="card flex items-start gap-4 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-display font-bold text-ink-900">Escritório</span>
                    <span className="text-sm text-ink-500">
                      {site.address.building}
                      <br />
                      {site.address.reference}, {site.address.city}/{site.address.state}
                    </span>
                  </span>
                </div>

                <div className="flex gap-3 pt-1">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-100 bg-white text-ink-600 transition-colors hover:border-brand-200 hover:text-brand-600"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-100 bg-white text-ink-600 transition-colors hover:border-brand-200 hover:text-brand-600"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Formulário */}
            <Reveal className="lg:col-span-3" delay={0.1}>
              <div className="card p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-ink-700">
                        Nome <span className="text-brand-500">*</span>
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.nome}
                        onChange={(e) => update('nome', e.target.value)}
                        className={inputClass}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label
                        htmlFor="empresa"
                        className="mb-1.5 block text-sm font-medium text-ink-700"
                      >
                        Empresa <span className="text-brand-500">*</span>
                      </label>
                      <input
                        id="empresa"
                        type="text"
                        required
                        autoComplete="organization"
                        value={form.empresa}
                        onChange={(e) => update('empresa', e.target.value)}
                        className={inputClass}
                        placeholder="Nome da empresa"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-ink-700"
                      >
                        E-mail <span className="text-brand-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={inputClass}
                        placeholder="voce@empresa.com"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label
                        htmlFor="whatsapp"
                        className="mb-1.5 block text-sm font-medium text-ink-700"
                      >
                        WhatsApp <span className="text-brand-500">*</span>
                      </label>
                      <input
                        id="whatsapp"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.whatsapp}
                        onChange={(e) => update('whatsapp', e.target.value)}
                        onBlur={(e) => update('whatsapp', applyCountryCode(e.target.value))}
                        className={inputClass}
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="faturamento"
                        className="mb-1.5 block text-sm font-medium text-ink-700"
                      >
                        Faturamento mensal <span className="text-brand-500">*</span>
                      </label>
                      <select
                        id="faturamento"
                        required
                        value={form.faturamento}
                        onChange={(e) => update('faturamento', e.target.value)}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" disabled>
                          Selecione uma faixa
                        </option>
                        {faixasFaturamento.map((faixa) => (
                          <option key={faixa} value={faixa}>
                            {faixa}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="mensagem"
                        className="mb-1.5 block text-sm font-medium text-ink-700"
                      >
                        Mensagem <span className="text-brand-500">*</span>
                      </label>
                      <textarea
                        id="mensagem"
                        required
                        rows={5}
                        value={form.mensagem}
                        onChange={(e) => update('mensagem', e.target.value)}
                        className={`${inputClass} resize-none`}
                        placeholder="Conte um pouco sobre a sua operação comercial e o que você busca."
                      />
                    </div>

                    <div className="sm:col-span-2">
                      {formError && (
                        <p className="mb-3 rounded-lg border border-red-300 bg-red-50 px-4 py-2.5 text-sm text-red-600">
                          ⚠️ {formError}
                        </p>
                      )}
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 sm:w-auto"
                      >
                        Enviar mensagem
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                      <p className="mt-3 text-xs text-ink-400">
                        Ao enviar, você concorda em ser contatado pela equipe da Nexxus.
                      </p>
                    </div>
                  </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
