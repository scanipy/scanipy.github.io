import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { citations } from '@/lib/citations'

export const metadata = {
  title: 'Research that informed Scanipy',
  description:
    'A short bibliography of the academic and industrial work behind Scanipy’s class-specific detector model, code-property-graph snapshotter, and LLM-augmented triage approach.',
}

/**
 * The credibility document. Five references rendered as a long-form
 * bibliography. No CTA, no chrome beyond `<SiteNav />` and `<SiteFooter />`.
 * Linked only from the footer — never from the homepage hero or body.
 */
export default function ResearchPage() {
  const items = Object.values(citations)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Research that informed Scanipy.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            Scanipy&rsquo;s architecture borrows from a small set of
            published works in program analysis and applied security
            research. We list them here so the technical claims on the
            rest of the site &mdash; class-specific detection, one-graph
            snapshots, deterministic fingerprints, LLM-augmented triage
            &mdash; are verifiable against their sources.
          </p>

          <ol className="mt-14 space-y-10 list-none">
            {items.map((c, i) => (
              <li key={c.id}>
                <p className="text-xs font-mono text-foreground/45 mb-2">
                  [{String(i + 1).padStart(2, '0')}]
                </p>
                <p className="text-base text-foreground/80 leading-relaxed mb-3">
                  {c.oneLineGist}
                </p>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  {c.authors} &mdash;{' '}
                  <Link
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-2 hover:text-foreground transition inline-flex items-baseline gap-1"
                  >
                    <em>{c.title}</em>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                  , {c.venue}
                  {c.year ? `, ${c.year}` : ''}.
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-16 pt-10 border-t border-border/40 text-sm text-foreground/55 leading-relaxed">
            If you&rsquo;re building in the same space and a reference
            here is wrong, missing, or worth re-framing,{' '}
            <Link
              href="https://github.com/papadoxie/scanipy/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted underline-offset-2 hover:text-foreground transition"
            >
              open an issue
            </Link>
            .
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
