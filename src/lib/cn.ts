/**
 * Pequeno helper para juntar classes condicionais sem dependências externas.
 * Uso: cn('base', condicao && 'extra', outraCondicao ? 'a' : 'b')
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
