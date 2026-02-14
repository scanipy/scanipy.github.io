import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllDocSlugs, getDocBySlug, getDocsList } from '@/lib/docs'
import { markdownToHtml, extractHeadings } from '@/lib/markdown'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import DocsHomePage from '@/components/docs-home-page'

/* -- Static generation -- */

export async function generateStaticParams() {
  const slugs = getAllDocSlugs()

  // Build params for every known doc slug
  const params = slugs.map((slug) => ({
    slug: slug.length === 0 ? undefined : slug,
  }))

  // Ensure the root /docs/ route is always included (empty catch-all)
  const hasRoot = params.some((p) => p.slug === undefined)
  if (!hasRoot) {
    params.unshift({ slug: undefined })
  }

  // Ensure /docs/home is always included so old links still resolve
  const hasHome = params.some(
    (p) => Array.isArray(p.slug) && p.slug.length === 1 && p.slug[0] === 'home',
  )
  if (!hasHome) {
    params.push({ slug: ['home'] })
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const resolvedSlug = slug ?? []

  // Home page (root or /docs/home)
  if (
    resolvedSlug.length === 0 ||
    (resolvedSlug.length === 1 && resolvedSlug[0] === 'home')
  ) {
    return {
      title: 'Documentation - Scanipy',
      description:
        'Scanipy documentation - installation guides, API reference, integrations, and developer docs.',
      openGraph: {
        title: 'Documentation - Scanipy',
        description:
          'Scanipy documentation - installation guides, API reference, integrations, and developer docs.',
        url: 'https://scanipy.com/docs',
      },
    }
  }

  const doc = getDocBySlug(resolvedSlug)
  if (!doc) return { title: 'Page Not Found - Scanipy Docs' }
  return {
    title: `${doc.title} - Scanipy Docs`,
    openGraph: {
      title: `${doc.title} - Scanipy Docs`,
      url: `https://scanipy.com/docs/${resolvedSlug.join('/')}`,
    },
  }
}

/* -- Page -- */

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const resolvedSlug = slug ?? []

  // Root /docs/ or /docs/home → render the rich home page component
  if (
    resolvedSlug.length === 0 ||
    (resolvedSlug.length === 1 && resolvedSlug[0] === 'home')
  ) {
    return <DocsHomePage />
  }

  // Look up the markdown doc
  const doc = getDocBySlug(resolvedSlug)
  if (!doc) notFound()

  const html = await markdownToHtml(doc.content)
  const headings = extractHeadings(doc.content)

  // Prev / next navigation
  const docsList = getDocsList()
  const currentHref = `/docs/${resolvedSlug.join('/')}`
  const currentIndex = docsList.findIndex((d) => d.href === currentHref)
  const prev = currentIndex > 0 ? docsList[currentIndex - 1] : null
  const next =
    currentIndex >= 0 && currentIndex < docsList.length - 1
      ? docsList[currentIndex + 1]
      : null

  return (
    <div className="flex">
      {/* -- Article -- */}
      <article className="flex-1 min-w-0 px-6 lg:px-12 py-10 max-w-4xl">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* -- Prev / Next -- */}
        {(prev || next) && (
          <div className="flex items-center justify-between mt-16 pt-6 border-t border-border/50">
            {prev ? (
              <Link
                href={prev.href}
                className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <div>
                  <div className="text-xs text-foreground/40">Previous</div>
                  <div className="font-medium">{prev.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={next.href}
                className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition text-right"
              >
                <div>
                  <div className="text-xs text-foreground/40">Next</div>
                  <div className="font-medium">{next.title}</div>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}
      </article>

      {/* -- Table of Contents (desktop) -- */}
      {headings.length > 0 && (
        <aside className="hidden xl:block w-56 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)]">
          <ScrollArea className="h-full py-10 pr-4">
            <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-3">
              On this page
            </p>
            <nav className="space-y-1">
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className="block text-xs text-foreground/50 hover:text-foreground transition py-1"
                  style={{ paddingLeft: `${(h.level - 2) * 12}px` }}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </ScrollArea>
        </aside>
      )}
    </div>
  )
}
