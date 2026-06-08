// ─────────────────────────────────────────────────────────────────────────────
// PASSO 1 — Acesse web3forms.com, informe gabriel.isidoro@nexxusagencia.com.br
//           e cole a chave que chegar no e-mail abaixo:
const WEB3FORMS_KEY = '869f6a4b-5cb5-4695-bd83-0cb4a6542b19'

// PASSO 2 — Após criar o cenário no Make.com, cole a URL do webhook:
export const MAKE_WEBHOOK_URL = '' // ex: 'https://hook.us1.make.com/abc123...'
// ─────────────────────────────────────────────────────────────────────────────

export interface LeadData {
  nome: string
  empresa: string
  email: string
  whatsapp: string
  faturamento: string
  mensagem: string
  origem: 'lp' | 'site'
}

export async function submitLead(data: LeadData): Promise<void> {
  // 1. Web3Forms → e-mail para gabriel.isidoro@nexxusagencia.com.br
  await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `🔔 Novo lead Nexxus — ${data.nome} [${data.origem.toUpperCase()}]`,
      from_name: 'Site Nexxus',
      Nome: data.nome,
      Empresa: data.empresa,
      Email: data.email,
      WhatsApp: data.whatsapp,
      Faturamento: data.faturamento,
      Mensagem: data.mensagem,
      Origem: data.origem,
    }),
  })

  // 2. Make.com webhook → Kommo CRM (preencha MAKE_WEBHOOK_URL quando disponível)
  if (MAKE_WEBHOOK_URL) {
    fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: data.nome,
        empresa: data.empresa,
        email: data.email,
        whatsapp: data.whatsapp,
        faturamento: data.faturamento,
        mensagem: data.mensagem,
        origem: data.origem,
        timestamp: new Date().toISOString(),
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
