import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { SectionEyebrow } from '@/components/section-eyebrow'
import { DemoCTA } from '@/components/demo-cta'
import { detectors } from '@/lib/detectors'

export const metadata = {
  title: 'Detectors · Scanipy',
  description:
    'The full Scanipy detector catalog: ten vulnerability classes, two GA today, eight scaffolded with manifests and shipping content as it lands.',
}

const ENGINE_LABEL: Record<string, string> = {
  semgrep: 'Semgrep',
  codeql: 'CodeQL',
  cpg: 'CPG',
  hybrid: 'Semgrep + CodeQL',
}

export default function DetectorsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0f0a12] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-24">
            <SectionEyebrow>
              <span className="text-white/60">The catalog</span>
            </SectionEyebrow>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
              Ten vulnerability classes. Two ship at GA today.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              Scanipy is detector-driven, not engine-driven. Each class
              is its own bundle: rules plus queries plus
              source/sink models. Roadmap classes have manifests today
              and ship content as it lands.
            </p>
          </div>
        </section>

        {/* Long-form catalog: one card per detector class */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {detectors.map((d) => (
              <article
                key={d.id}
                className="rounded-xl border border-border/60 bg-card/40 p-6 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="text-xl font-semibold text-foreground tracking-tight">
                    {d.name}
                  </h2>
                  {d.status === 'ga' ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-primary text-primary-foreground shrink-0">
                      GA
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border border-foreground/30 text-foreground/60 shrink-0">
                      Roadmap
                    </span>
                  )}
                </div>
                <dl className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <dt className="text-foreground/55 w-20 shrink-0">CWE</dt>
                    <dd className="font-mono text-foreground/85">
                      {d.cwes.map((n) => `CWE-${n}`).join(', ')}
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-foreground/55 w-20 shrink-0">
                      Languages
                    </dt>
                    <dd className="font-mono text-foreground/75">
                      {d.languages.join(', ')}
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-foreground/55 w-20 shrink-0">
                      Engine
                    </dt>
                    <dd className="text-foreground/75">
                      {ENGINE_LABEL[d.engine] ?? d.engine}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* Closing CTA band */}
        <section className="bg-[#0f0a12] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Need a class that&rsquo;s on the roadmap?
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Tell us which CWE class is blocking your team and
              we&rsquo;ll move it forward in the queue.
            </p>
            <div className="mt-9 inline-flex">
              <DemoCTA size="lg" label="Talk to us" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
