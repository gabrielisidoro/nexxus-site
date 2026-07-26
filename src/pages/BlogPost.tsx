import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { BlogCard } from '@/components/BlogCard'
import { CTASection } from '@/components/CTASection'
import { PostCover } from '@/components/PostCover'
import { getPost, relatedPosts, formatDate, type PostBlock } from '@/data/posts'
import { blogPostingSchema, breadcrumbSchema } from '@/data/seo'
import { site } from '@/data/site'

/** Conta as palavras do corpo do post, para o campo wordCount do JSON-LD. */
function contarPalavras(blocks: PostBlock[]): number {
  return blocks.reduce((total, bloco) => {
    const texto = bloco.type === 'ul' ? bloco.items.join(' ') : bloco.text
    return total + texto.trim().split(/\s+/).filter(Boolean).length
  }, 0)
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="heading mt-10 text-2xl sm:text-[1.7rem]">{block.text}</h2>
      )
    case 'p':
      return <p className="mt-5 leading-[1.8] text-ink-600">{block.text}</p>
    case 'ul':
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed text-ink-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>{item}</span>
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
        image={post.cover ? `${site.url}${post.cover}` : undefined}
        publishedTime={post.date}
        modifiedTime={post.updated}
        section={post.category}
        schema={[
          blogPostingSchema({ ...post, wordCount }),
          breadcrumbSchema([
            { name: 'Início', url: site.url },
            { name: 'Blog', url: `${site.url}/blog` },
            { name: post.title, url: `${site.url}/blog/${post.slug}` },
          ]),
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
          <PostCover post={post} ratio="wide" rounded="rounded-3xl" />
        </div>

        {/* Conteúdo */}
        <div className="mx-auto mt-10 max-w-3xl">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
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
