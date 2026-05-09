import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { DemoCTA } from '@/components/demo-cta'
import { AnimatedPipeline } from '@/components/animated-pipeline'
import { ProofBand } from '@/components/proof-band'
import { FeaturePillars } from '@/components/feature-pillars'
import { HowItWorks } from '@/components/how-it-works'
import { ComparisonBand } from '@/components/comparison-band'
import { CveCallout } from '@/components/cve-callout'
import { DetectorCatalog } from '@/components/detector-catalog'
import { SectionEyebrow } from '@/components/section-eyebrow'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      <main className="flex-1">
        {/* ─── Hero ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-44 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-foreground leading-[1.05]">
                Find security bugs by class.
                <br />
                <span className="text-foreground/70">
                  Across every codebase you ship.
                </span>
              </h1>
              <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-xl">
                Scanipy runs ten focused detectors against one snapshot
                of your code &mdash; across GitHub, GitLab, Bitbucket,
                and Azure DevOps. Findings carry stable fingerprints, so
                re-scans collapse onto the same row instead of
                multiplying.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
                <DemoCTA size="lg" />
                <Link
                  href="/cli"
                  className="text-sm text-foreground/65 hover:text-foreground inline-flex items-center gap-1.5 transition group"
                >
                  Or run the open-source CLI
                  <ArrowRight className="w-3.5 h-3.5 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <AnimatedPipeline mode="hero" />
            </div>
          </div>
        </section>

        {/* ─── Proof band (async; build-time GitHub stars) ─── */}
        <ProofBand />

        {/* ─── Feature pillars ─── */}
        <FeaturePillars />

        {/* ─── How it works ─── */}
        <HowItWorks />

        {/* ─── Detector catalog ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-border/40">
          <div className="max-w-2xl mb-10">
            <SectionEyebrow>The catalog</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Ten classes today. Two ship at GA.
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Honest catalog. Path traversal and memory safety ship with
              detection content today. The other eight are scaffolded
              with manifests and ship as content lands.
            </p>
          </div>
          <DetectorCatalog />
        </section>

        {/* ─── Comparison band ─── */}
        <ComparisonBand />

        {/* ─── CVE callout ─── */}
        <CveCallout />

        {/* ─── Final CTA ─── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center border-t border-border/40">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Scan your own private codebases the same way.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            We&rsquo;re onboarding teams now. A 30-minute call walks
            through your repo layout and the path to your first scan.
          </p>
          <div className="mt-9 inline-flex">
            <DemoCTA size="lg" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
