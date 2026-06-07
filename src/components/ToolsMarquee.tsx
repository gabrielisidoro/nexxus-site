import { tools } from '@/data/metodo'

/** Faixa horizontal animada com as ferramentas e parceiros. */
export function ToolsMarquee() {
  const list = [...tools, ...tools]
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-4 pr-4">
        {list.map((tool, i) => (
          <div
            key={i}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-ink-100 bg-white px-5 py-2.5 shadow-card"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            <span className="font-display text-sm font-semibold text-ink-800">{tool.name}</span>
            <span className="text-xs text-ink-400">· {tool.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
