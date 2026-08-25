import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { BlogCard } from '@/components/BlogCard'
import { CTASection } from '@/components/CTASection'
import { PostCover } from '@/components/PostCover'
import { getPost, relatedPosts, formatDate, type PostBlock } from '@/data/posts'
import { blogPostingSchema, breadcrumbSchema, postFaqSchema, organizationSchema } from '@/data/seo'
import { site } from '@/data/site'

/** Conta as palavras do corpo do post, para o campo wordCount do JSON-LD. */
function contarPalavras(blocks: PostBlock[]): number {
  return blocks.reduce((total, bloco) => {
    let texto: string
    if (bloco.type === 'ul') texto = bloco.items.join(' ')
    else if (bloco.type === 'table') texto = [...bloco.headers, ...bloco.rows.flat()].join(' ')
    else texto = bloco.text
    return total + texto.trim().split(/\s+/).filter(Boolean).length
  }, 0)
}

/**
 * Renderiza texto do post com links em sintaxe markdown: `[âncora](/destino)`.
 * Link interno vira <Link> do router (não recarrega a página e passa autoridade
 * entre as matérias); link externo abre em nova aba com rel de segurança.
 * Sem isto não dá para cumprir o critério de rede de links internos da rubrica.
 */
function Texto({ children }: { children: string }) {
  const partes = children.split(/(\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {partes.map((parte, i) => {
        const achou = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(parte)
        if (!achou) return parte
        const [, ancora, destino] = achou
        const externo = /^https?:/.test(destino)
        if (externo) {
          return (
            <a
              key={i}
              href={destino}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 underline decoration-brand-600/30 underline-offset-2 transition-colors hover:decoration-brand-600"
            >
              {ancora}
            </a>
          )
        }
        return (
          <Link
            key={i}
            to={destino}
            className="font-medium text-brand-600 underline decoration-brand-600/30 underline-offset-2 transition-colors hover:decoration-brand-600"
          >
            {ancora}
          </Link>
        )
      })}
    </>
  )
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="heading mt-10 text-2xl sm:text-[1.7rem]">{block.text}</h2>
      )
    case 'p':
      return (
        <p className="mt-5 leading-[1.8] text-ink-600">
          <Texto>{block.text}</Texto>
        </p>
      )
    case 'ul':
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed text-ink-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>
                <Texto>{item}</Texto>
              </span>
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="mt-8 rounded-2xl border-l-4 border-brand-500 bg-brand-50/60 px-6 py-5 font-display text-lg font-semibold italic text-ink-800">
          “{block.text}”
        </blockquote>
      )
    case 'table':
      return (
        <figure className="mt-8">
          {/* Rola sozinha no celular, sem estourar a largura da página */}
          <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <thead>
                <tr>
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="border-b-2 border-ink-900/15 pb-3 pr-4 font-display text-xs font-bold uppercase tracking-wider text-ink-500 last:pr-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-b border-ink-100 last:border-0">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={
                          j === 0
                            ? 'py-3.5 pr-4 font-semibold text-ink-800'
                            : 'py-3.5 pr-4 tabular-nums text-ink-600 last:pr-0'
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-xs leading-relaxed text-ink-400">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const related = relatedPosts(post.slug, 2)
  const wordCount = contarPalavras(post.content)

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords?.join(', ')}
        path={`/blog/${post.slug}`}
        type="article"
        image={(post.ogImage ?? post.cover) ? `${site.url}${post.ogImage ?? post.cover}` : undefined}
        publishedTime={post.date}
        modifiedTime={post.updated}
        section={post.category}
        schema={[
          // O publisher do BlogPosting referencia a Organization por @id, e @id só
          // resolve dentro do grafo da mesma página. Sem isto o publisher fica órfão.
          organizationSchema,
          blogPostingSchema({ ...post, wordCount }),
          breadcrumbSchema([
            { name: 'Início', url: site.url },
            { name: 'Blog', url: `${site.url}/blog` },
            { name: post.title, url: `${site.url}/blog/${post.slug}` },
          ]),
          ...(post.faq?.length ? [postFaqSchema(post.slug, post.faq)] : []),
        ]}
      />

      <article className="container-nx py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-500 transition-colors hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Voltar para o blog
          </Link>

          <header className="mt-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-ink-400">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingMinutes} min de leitura
              </span>
            </div>
            <h1 className="heading mt-4 text-balance text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">{post.excerpt}</p>
          </header>
        </div>

        {/* Capa */}
        <div className="mx-auto mt-10 max-w-4xl">
          <PostCover post={post} ratio="wide" rounded="rounded-3xl" priority />
        </div>

        {/* Conteúdo */}
        <div className="mx-auto mt-10 max-w-3xl">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* Dúvidas frequentes */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-14 border-t border-ink-100 pt-10">
              <h2 className="heading text-2xl sm:text-[1.7rem]">Perguntas frequentes</h2>
              <dl className="mt-6 divide-y divide-ink-100">
                {post.faq.map((item) => (
                  <div key={item.pergunta} className="py-5 first:pt-0">
                    <dt className="font-display text-lg font-bold text-ink-900">{item.pergunta}</dt>
                    <dd className="mt-2 leading-[1.8] text-ink-600">
                      <Texto>{item.resposta}</Texto>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>
      </article>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="border-t border-ink-100 bg-ink-50/50 py-16">
          <div className="container-nx">
            <div className="flex items-end justify-between">
              <h2 className="heading text-2xl sm:text-3xl">Continue lendo</h2>
              <Link
                to="/blog"
                className="group hidden items-center gap-2 text-sm font-semibold text-brand-600 sm:inline-flex"
              >
                Ver todas
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
