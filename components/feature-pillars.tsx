import { Target, Layers, GitBranch } from 'lucide-react'
import { SectionEyebrow } from '@/components/section-eyebrow'

/**
 * The three-pillar grid that sits directly under the proof band. Each
 * pillar leads with a short outcome headline (no academic framing) and
 * keeps the body to two short sentences. Lucide icons are sized so
 * they don't compete with the H3.
 */

interface Pillar {
  icon: React.ComponentType<{ className?: string }>
  title: string
  body: string
}

const PILLARS: Pillar[] = [
  {
    icon: Target,
    title: 'Real bugs, not noise.',
    body: 'Each detector is built around a single CWE class with its own taint specs. Findings carry stable fingerprints, so re-scans collapse onto the same row instead of multiplying.',
  },
  {
    icon: Layers,
    title: 'One snapshot, ten detectors.',
    body: 'Scanipy clones once, builds the graph once, and fans out to every detector in parallel. Adding a new vulnerability class costs zero re-clones and zero re-parses.',
  },
  {
    icon: GitBranch,
    title: 'Wherever your code lives.',
    body: 'GitHub, GitLab, Bitbucket, Azure DevOps. One contract, four providers, zero per-SCM glue code in your CI pipeline.',
  },
]

export function FeaturePillars() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="max-w-2xl mb-12 md:mb-16">
        <SectionEyebrow>The product</SectionEyebrow>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Three things you don&rsquo;t usually get from a scanner.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
        {PILLARS.map((p) => (
          <article key={p.title} className="flex flex-col">
            <p.icon
              className="w-6 h-6 text-foreground/55 mb-5"
              strokeWidth={1.5}
            />
            <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
              {p.title}
            </h3>
            <p className="text-foreground/70 leading-relaxed">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
