import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/data/services'
import { iconMap } from './iconMap'
import { cn } from '@/lib/cn'

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon]

  return (
    <Link
      to={`/servicos#${service.slug}`}
      className={cn('card card-hover group relative flex flex-col p-7', className)}
    >
      <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
        {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
      </span>

      <h3 className="font-display text-xl font-bold text-ink-900">{service.name}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-500">{service.short}</p>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
        Saiba mais
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
