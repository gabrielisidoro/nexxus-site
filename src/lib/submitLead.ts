// ─────────────────────────────────────────────────────────────────────────────
// PASSO 1 — Acesse web3forms.com, informe gabriel.isidoro@nexxusagencia.com.br
//           e cole a chave que chegar no e-mail abaixo:
const WEB3FORMS_KEY = '869f6a4b-5cb5-4695-bd83-0cb4a6542b19'

// PASSO 2 — Após criar o cenário no Make.com, cole a URL do webhook:
export const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/tqs3y787fgzy1u17xcyivb9sd4eynhou'
// ─────────────────────────────────────────────────────────────────────────────

export interface LeadData {
  nome: string
  empresa: string
  email: string
  whatsapp: string
  faturamento: string
  mensagem: string
  origem: 'lp' | 'lp-ia' | 'lp-ebook' | 'lp-global' | 'site'
  pagina?: string
}

// Campos obrigatórios que a Kommo precisa ter preenchidos
const REQUIRED: (keyof LeadData)[] = ['nome', 'empresa', 'email', 'whatsapp']

/** Remove espaços extras de todas as strings do lead */
function sanitize(data: LeadData): LeadData {
  return {
    nome:        data.nome.trim(),
    empresa:     data.empresa.trim(),
    email:       data.email.trim(),
    whatsapp:    data.whatsapp.trim(),
    faturamento: data.faturamento.trim(),
    mensagem:    data.mensagem.trim(),
    origem:      data.origem,
    pagina:      data.pagina?.trim(),
  }
}

/** Valida campos obrigatórios após trim. Retorna o nome do primeiro campo vazio, ou null se OK. */
export function validateLead(data: LeadData): string | null {
  const clean = sanitize(data)
  for (const field of REQUIRED) {
    if (!clean[field]) return field
  }
  return null
}

export async function submitLead(data: LeadData): Promise<void> {
  // Sanitiza antes de qualquer envio — previne espaços em branco chegando na Kommo
  const d = sanitize(data)

  // Garante que campos obrigatórios não estejam vazios (defesa extra no servidor)
  for (const field of REQUIRED) {
    if (!d[field]) throw new Error(`Campo obrigatório vazio: ${field}`)
  }

  // 1. Web3Forms → e-mail para gabriel.isidoro@nexxusagencia.com.br
  await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `🔔 Novo lead Nexxus — ${d.nome} [${d.origem.toUpperCase()}]`,
      from_name: 'Site Nexxus',
      Nome:        d.nome,
      Empresa:     d.empresa,
      Email:       d.email,
      WhatsApp:    d.whatsapp,
      Faturamento: d.faturamento,
      Mensagem:    d.mensagem,
      Origem:      d.origem,
    }),
  })

  // 2. Make.com webhook → Kommo CRM
  if (MAKE_WEBHOOK_URL) {
    fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome:        d.nome,
        empresa:     d.empresa,
        email:       d.email,
        whatsapp:    d.whatsapp,
        faturamento: d.faturamento,
        mensagem:    d.mensagem,
        origem:      d.origem,
        pagina:      d.pagina ?? window.location.href,
        timestamp:   new Date().toISOString(),
      }),
    }).catch(() => {})
  }
}

// Garante que o WhatsApp tenha +55 (obrigatório no Kommo CRM)
export function applyCountryCode(value: string): string {
  const v = value.trim()
  if (!v) return v
  if (v.startsWith('+55')) return v
  if (v.startsWith('55') && v.length > 2) return '+' + v
  return '+55 ' + v
}
