import { SectionEyebrow } from '@/components/section-eyebrow'
import { GitMerge, Database, Cpu, Fingerprint } from 'lucide-react'

/**
 * "How it works" — four-stage horizontal stepper. Distinct from the
 * hero's DarkPipeline (which shows the data flow at the architectural
 * level); this section is the *user* journey from connect to triage.
 *
 * Connector lines (the dashed path between cards) draw on desktop only
 * — they degrade to nothing on mobile so the column stack reads cleanly.
 */

const STAGES: Array<{
  n: string
  title: string
  body: string
  icon: React.ComponentType<{ className?: string }>
}> = [
  {
    n: '01',
    title: 'Connect',
    body: 'Webhook into your SCM, or POST a (codebase, commit) to the API. No SCM-specific glue in your CI.',
    icon: GitMerge,
  },
  {
    n: '02',
    title: 'Snapshot',
    body: 'Clone once, build the graph once, cache for every detector. One snapshot per (codebase, commit).',
    icon: Database,
  },
  {
    n: '03',
    title: 'Scan',
    body: 'Fan out to enabled detectors in parallel. Each detector is class-specific — its own rules, its own taint specs.',
    icon: Cpu,
  },
  {
    n: '04',
    title: 'Triage',
    body: 'Stable fingerprints dedupe across scans. Optional LLM re-rank, off by default.',
    icon: Fingerprint,
  },
]

export function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-border/40">
      <div className="max-w-2xl mb-12 md:mb-16">
        <SectionEyebrow>The journey</SectionEyebrow>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Connect once. Scan continuously.
        </h2>
        <p className="mt-4 text-foreground/70 leading-relaxed">
          From the first webhook to the first finding in the dashboard,
          four stages — every one of them auditable, deterministic, and
          replayable on demand.
        </p>
      </div>

      <div className="relative">
        {/* Dashed connector — desktop only. Sits behind the cards. */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-border/60"
        />

        <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STAGES.map((s) => {
            const Icon = s.icon
            return (
              <li
                key={s.n}
                className="relative bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/40 transition group"
              >
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition">
                    <Icon
                      className="w-5 h-5 text-foreground/60 group-hover:text-primary transition"
                      strokeWidth={1.6}
                    />
                  </div>
                  <span className="text-xs font-mono text-foreground/40 mt-1.5">
                    {s.n}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {s.body}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
