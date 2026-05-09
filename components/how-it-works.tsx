import { SectionEyebrow } from '@/components/section-eyebrow'
import { AnimatedPipeline } from '@/components/animated-pipeline'

/**
 * The "how it works" band: section eyebrow + section H2, the animated
 * pipeline scroll-triggered, and four short stage cards laid out
 * horizontally underneath. Stage copy is two short sentences each,
 * not bullet lists — readers skim section titles, not bullets.
 */

const STAGES: Array<{ n: string; title: string; body: string }> = [
  {
    n: '01',
    title: 'Connect',
    body: 'Webhook into your SCM, or POST a (codebase, commit) to the API. No SCM-specific glue in your CI.',
  },
  {
    n: '02',
    title: 'Snapshot',
    body: 'Clone once, build the graph once, cache for every detector. One snapshot per (codebase, commit).',
  },
  {
    n: '03',
    title: 'Scan',
    body: 'Fan out to enabled detectors in parallel. Each detector is class-specific — its own rules, its own taint specs.',
  },
  {
    n: '04',
    title: 'Triage',
    body: 'Stable fingerprints dedupe across scans. Optional LLM re-rank, off by default.',
  },
]

export function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-border/40">
      <div className="max-w-2xl mb-10 md:mb-14">
        <SectionEyebrow>The pipeline</SectionEyebrow>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Connect once. Scan continuously.
        </h2>
        <p className="mt-4 text-foreground/70 leading-relaxed">
          One snapshot per commit, fanned out to every detector you have
          enabled. Findings land in one store with one stable fingerprint
          per real bug.
        </p>
      </div>

      <div className="mb-12 md:mb-16">
        <AnimatedPipeline mode="section" />
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {STAGES.map((s) => (
          <li key={s.n} className="flex flex-col">
            <p className="text-xs font-mono text-foreground/45 mb-2">
              {s.n}
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
              {s.title}
            </h3>
            <p className="text-sm text-foreground/65 leading-relaxed">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
