// Meta Pixel (Facebook) — dois pixels da conta de anúncios da Nexxus.
// Carrega o fbevents.js uma vez e inicializa ambos os pixels.
// Usado no funil do ebook: PageView na LP (/ebook) para capturar o clique do
// anúncio (fbclid -> _fbc) e PageView + Lead na página de obrigado.

const PIXEL_IDS = ['1880542172809553', '946381581193014']

let initialized = false

/** Injeta o fbevents.js (uma vez) e inicializa os pixels. */
export function loadMetaPixel(): void {
  if (typeof window === 'undefined') return
  const w = window as unknown as { fbq?: any; _fbq?: any }

  if (!w.fbq) {
    const n: any = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args)
    }
    w.fbq = n
    if (!w._fbq) w._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    const t = document.createElement('script')
    t.async = true
    t.src = 'https://connect.facebook.net/en_US/fbevents.js'
    const s = document.getElementsByTagName('script')[0]
    s?.parentNode?.insertBefore(t, s)
  }

  if (!initialized) {
    PIXEL_IDS.forEach((id) => (window as any).fbq('init', id))
    initialized = true
  }
}

/** Dispara um evento padrão da Meta (PageView, Lead, etc.) para todos os pixels. */
export function metaTrack(event: 'PageView' | 'Lead' | string): void {
  if (typeof window === 'undefined') return
  const w = window as unknown as { fbq?: any }
  if (w.fbq) w.fbq('track', event)
}
