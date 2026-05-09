import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { SectionEyebrow } from '@/components/section-eyebrow'
import { DemoCTA } from '@/components/demo-cta'
import { DarkPipeline } from '@/components/dark-pipeline'
import { Layers, GitBranch, Shield } from 'lucide-react'

export const metadata = {
  title: 'Platform — Scanipy',
  description:
    'The Scanipy platform: one snapshot per commit, fanned out to class-specific detectors, written into a single findings store with stable fingerprints. Multi-SCM, multi-tenant, deterministic by default.',
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[#0f0a12] text-white">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none [background:radial-gradient(circle_at_70%_30%,rgba(217,70,239,0.18),transparent_55%)]"
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28 relative">
            <SectionEyebrow>
              <span className="text-white/60">The platform</span>
            </SectionEyebrow>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
              One pipeline. One snapshot per commit. Many class-specific
              detectors.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              Scanipy connects to your SCM, takes one snapshot of every
              commit, and routes it through the detector pool you have
              enabled. Findings land in one store, keyed by a stable
              fingerprint, so re-scans collapse onto the same row.
            </p>
            <div className="mt-12">
              <DarkPipeline />
            </div>
          </div>
        </section>

        {/* Three sections, one per pipeline stage worth a deeper take */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            <article>
              <Layers className="w-6 h-6 text-foreground/60 mb-5" strokeWidth={1.5} />
              <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                Snapshot once, scan many.
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                The snapshotter clones, builds the graph, and writes the
                CodeQL DBs once per (codebase, commit). Every detector in
                the pool reads the same artefacts &mdash; adding a new
                class costs zero re-clones, zero re-parses.
              </p>
            </article>
            <article>
              <Shield className="w-6 h-6 text-foreground/60 mb-5" strokeWidth={1.5} />
              <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                Class-specific by design.
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Each detector is a manifest plus a rule set plus the
                source/sink models for one CWE class. The worker reads
                the manifest and runs the right tool &mdash; Semgrep,
                CodeQL, or a hybrid &mdash; per class.
              </p>
            </article>
            <article>
              <GitBranch className="w-6 h-6 text-foreground/60 mb-5" strokeWidth={1.5} />
              <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                Provider-agnostic SCM.
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                One contract, four providers. Webhook verification,
                clone, ref resolution, repo listing &mdash; the same
                surface for GitHub, GitLab, Bitbucket, and Azure DevOps,
                cloud or self-hosted.
              </p>
            </article>
          </div>
        </section>

        {/* Closing dark CTA band */}
        <section className="bg-[#0f0a12] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              See the platform on your own repo.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              A 30-minute call walks through your repo layout and the
              path to your first scan.
            </p>
            <div className="mt-9 inline-flex">
              <DemoCTA size="lg" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
