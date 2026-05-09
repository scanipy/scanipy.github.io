import Link from 'next/link'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Citation } from '@/components/citation'
import { SarifExcerpt } from '@/components/sarif-excerpt'

export const metadata = {
  title: 'Scanipy CLI — research-mode security scanner for OSS CVE hunting',
  description:
    'The Scanipy CLI is free, MIT, and built for OSS CVE hunting. Tiered-star GitHub search, Semgrep + local CodeQL. Same class-specific-checker philosophy as the platform.',
}

export default function CliPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav showDocs />

      <main className="flex-1">
        {/* ─── 1. Hero ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                The Scanipy CLI is free, MIT,
                <br />
                and built for OSS CVE hunting.
              </h1>
              <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-2xl">
                Tiered-star GitHub code search, Semgrep, and local CodeQL,
                wrapped as a single Python CLI. Same class-specific-checker
                philosophy as the platform &mdash; just packaged for one
                researcher on one laptop.
              </p>
              <div className="mt-4">
                <Citation id="engler-coverity-2010" />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <SarifExcerpt language="shell" caption="install">
{`pip install scanipy-cli`}
              </SarifExcerpt>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link
                  href="https://github.com/papadoxie/scanipy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ─── 2. What it does ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                What it does.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Search GitHub for code patterns at scale. Filter by language
                and stars; the tiered-star strategy walks repositories in
                star buckets so popular projects come first.
              </p>
              <p>
                Each match is cloned and analysed with Semgrep against
                custom rules; CodeQL runs locally for semantic queries on
                C, C++, Java, Python, and more.
              </p>
              <p>
                Sessions are resumable. Long runs can be interrupted and
                continued without re-cloning everything.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. Real proof ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border/40">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Real proof.
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              CVE-2025-61765 &mdash; <em>Unsafe Pickle Deserialization</em> in
              the{' '}
              <Link
                href="https://github.com/miguelgrinberg/python-socketio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:text-foreground transition"
              >
                python-socketio
              </Link>{' '}
              project. Found by{' '}
              <Link
                href="https://github.com/locus-x64"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:text-foreground transition inline-flex items-baseline gap-1"
              >
                locus-x64
                <ExternalLink className="w-3 h-3" />
              </Link>{' '}
              using Scanipy pattern matching against the{' '}
              <code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5 rounded">
                extractall
              </code>{' '}
              query. Arbitrary Python RCE in certain multi-server deployments.
            </p>
            <p className="mt-3 text-sm text-foreground/55">
              The same finding reproduces today with{' '}
              <code className="font-mono bg-muted/50 px-1.5 py-0.5 rounded">
                python scanipy.py --query &quot;extractall&quot; --run-semgrep
              </code>
              .
            </p>
          </div>
        </section>

        {/* ─── 4. Quick start ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border/40">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Quick start.
            </h2>
            <SarifExcerpt language="shell" caption="install">
{`pip install scanipy-cli`}
            </SarifExcerpt>
            <SarifExcerpt language="shell" caption="run a search + scan">
{`# search GitHub for python code that calls extractall(...),
# then run semgrep against each match
python scanipy.py --query "extractall" \\
    --language python \\
    --run-semgrep`}
            </SarifExcerpt>
            <p className="mt-6">
              <Link
                href="/docs/installation"
                className="text-sm text-foreground/70 hover:text-foreground inline-flex items-center gap-1 transition"
              >
                Read the full installation guide
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </p>
          </div>
        </section>

        {/* ─── 5. When to use CLI vs platform ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border/40">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              CLI or platform.
            </h2>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              Honest split. The CLI is good at one job; the platform does
              a different one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <p className="text-xs uppercase tracking-wide text-foreground/55 mb-3">
                Reach for the CLI when
              </p>
              <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed list-disc pl-5">
                <li>
                  You&rsquo;re hunting CVEs in open-source projects across
                  millions of GitHub repos.
                </li>
                <li>
                  You want one Python tool you can pipe into a Jupyter
                  notebook or a research script.
                </li>
                <li>
                  Your workflow is local Semgrep / local CodeQL on a
                  workstation.
                </li>
                <li>You don&rsquo;t need multi-tenant scoping or audit logs.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <p className="text-xs uppercase tracking-wide text-foreground/55 mb-3">
                Reach for the platform when
              </p>
              <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed list-disc pl-5">
                <li>
                  You&rsquo;re scanning your own private codebases at org
                  scale, across heterogeneous SCMs.
                </li>
                <li>
                  You want one Code Property Graph per commit shared
                  across many class-specific detectors.
                </li>
                <li>
                  You need stable fingerprints, baselines, suppression,
                  and a CWE-1000 anchored compliance trail.
                </li>
                <li>
                  You want LLM-augmented triage with a hard kill switch.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 6. Closing ─── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center border-t border-border/40">
          <p className="text-lg text-foreground/70">
            <Link
              href="/"
              className="text-foreground hover:text-foreground/80 inline-flex items-center gap-1 underline decoration-dotted underline-offset-4 transition"
            >
              Scanning your own codebases? See the platform
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
