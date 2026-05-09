import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { DemoCTA } from '@/components/demo-cta'
import { DarkPipeline } from '@/components/dark-pipeline'
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
        {/* ─── Hero (dark band) ─── */}
        <section className="relative bg-[#0f0a12] text-white overflow-hidden">
          {/* Soft radial glow that bleeds in from the right edge */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none [background:radial-gradient(circle_at_75%_25%,rgba(217,70,239,0.18),transparent_55%)]"
          />
          {/* Subtle grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]"
            style={{
              maskImage:
                'radial-gradient(ellipse_at_center,#000_30%,transparent_75%)',
              WebkitMaskImage:
                'radial-gradient(ellipse_at_center,#000_30%,transparent_75%)',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="text-center max-w-4xl mx-auto">
              <SectionEyebrow>
                <span className="text-white/60">
                  Class-driven SAST · v2 beta
                </span>
              </SectionEyebrow>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
                Find security bugs by class.
              </h1>
              <h1 className="mt-2 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-white/55">
                Across every codebase you ship.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                Scanipy runs ten focused detectors against one snapshot
                of your code &mdash; across GitHub, GitLab, Bitbucket,
                and Azure DevOps. Findings carry stable fingerprints, so
                re-scans collapse onto the same row instead of
                multiplying.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-4">
                <DemoCTA size="lg" />
                <Link
                  href="/cli"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-white/85 hover:text-white border border-white/15 hover:border-white/30 hover:bg-white/5 transition group"
                >
                  <PlayCircle className="w-4 h-4" />
                  Run the open-source CLI
                </Link>
              </div>
            </div>

            {/* Pipeline illustration sits below the hero copy */}
            <div className="mt-16 md:mt-20">
              <DarkPipeline className="opacity-95" />
            </div>
          </div>
        </section>

        {/* ─── Proof band (light, build-time GitHub stars) ─── */}
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
            <Link
              href="/detectors"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/80 transition group"
            >
              See the long-form catalog
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
          <DetectorCatalog />
        </section>

        {/* ─── Comparison band ─── */}
        <ComparisonBand />

        {/* ─── CVE callout ─── */}
        <CveCallout />

        {/* ─── Final CTA (dark band, mirrors the hero) ─── */}
        <section className="relative bg-[#0f0a12] text-white overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none [background:radial-gradient(circle_at_50%_120%,rgba(217,70,239,0.22),transparent_55%)]"
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <SectionEyebrow>
              <span className="text-white/60">First scan</span>
            </SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Scan your own private codebases the same way.
            </h2>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              We&rsquo;re onboarding teams now. A 30-minute call walks
              through your repo layout and the path to your first scan.
            </p>
            <div className="mt-10 inline-flex">
              <DemoCTA size="lg" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
