import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { SectionEyebrow } from '@/components/section-eyebrow'
import { DemoCTA } from '@/components/demo-cta'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Pricing — Scanipy',
  description:
    'Scanipy pricing: a single design-partner tier today, scoped per codebase and per detector class. Open-source CLI is and will remain free.',
}

const PARTNER_INCLUDES = [
  'Unlimited scans across enabled detector classes',
  'All four SCM connectors: GitHub, GitLab, Bitbucket, Azure DevOps',
  'Dedicated onboarding and a Slack channel with the team',
  'Roadmap input — your CWE classes get prioritised',
  'Stable-fingerprint baselines, suppression, audit trail',
]

const CLI_INCLUDES = [
  'Tiered-star GitHub code search at scale',
  'Local Semgrep against custom rules',
  'Local CodeQL for semantic queries',
  'Resumable sessions for long runs',
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0f0a12] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20 text-center">
            <SectionEyebrow>
              <span className="text-white/60">Pricing</span>
            </SectionEyebrow>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl mx-auto">
              We&rsquo;re onboarding design partners.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Standard SaaS tiers will land once we&rsquo;ve scanned
              enough real codebases to price honestly. Until then,
              there&rsquo;s a single design-partner tier and the
              free open-source CLI.
            </p>
          </div>
        </section>

        {/* Two cards: design partner + CLI */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Design partner */}
            <article className="rounded-2xl border-2 border-primary/40 bg-card p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 text-[11px] font-medium uppercase tracking-wider bg-primary text-primary-foreground rounded-bl-lg">
                Design partner
              </div>
              <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-2">
                Platform &mdash; design partner tier
              </h2>
              <p className="text-foreground/65 mb-6 leading-relaxed">
                Pricing is a flat monthly retainer scoped to your
                codebase count and the detector classes you enable.
              </p>
              <p className="text-3xl font-bold text-foreground mb-1">
                Talk to us
              </p>
              <p className="text-sm text-foreground/55 mb-6">
                Honest scoping in one call.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {PARTNER_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <DemoCTA size="lg" className="w-full" />
            </article>

            {/* CLI */}
            <article className="rounded-2xl border border-border/60 bg-card/40 p-8 flex flex-col">
              <div className="px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground/60 self-start mb-4">
                Free
              </div>
              <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-2">
                Open-source CLI
              </h2>
              <p className="text-foreground/65 mb-6 leading-relaxed">
                The free, MIT-licensed command-line scanner. For
                researchers, security folk, and one-laptop CVE hunting.
              </p>
              <p className="text-3xl font-bold text-foreground mb-1">$0</p>
              <p className="text-sm text-foreground/55 mb-6">Forever.</p>
              <ul className="space-y-3 mb-8 flex-1">
                {CLI_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-foreground/55 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/cli"
                className="block w-full text-center px-4 py-2.5 rounded-md border border-border hover:bg-muted/50 transition text-sm font-medium text-foreground"
              >
                See the CLI
              </a>
            </article>
          </div>
        </section>

        {/* FAQ-ish closing */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-border/40">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-8">
            What we don&rsquo;t do.
          </h2>
          <div className="space-y-6 text-foreground/75 leading-relaxed">
            <p>
              <strong className="text-foreground">No per-finding pricing.</strong>{' '}
              Charging per finding aligns the wrong incentives &mdash;
              it pushes the platform towards more findings, not better
              ones.
            </p>
            <p>
              <strong className="text-foreground">No per-developer seat tax.</strong>{' '}
              Scanipy scans codebases, not developers; pricing should
              follow the artefact, not the headcount.
            </p>
            <p>
              <strong className="text-foreground">No locking the CLI behind a paywall.</strong>{' '}
              The CLI is and will remain MIT. The platform offers things
              the CLI can&rsquo;t (multi-SCM, multi-tenant, shared
              snapshots) &mdash; the split is genuine, not artificial.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
