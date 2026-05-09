import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { DemoCTA } from '@/components/demo-cta'
import { Citation } from '@/components/citation'
import { ArchitectureDiagram } from '@/components/architecture-diagram'
import { DetectorCatalog } from '@/components/detector-catalog'
import { ScmGrid } from '@/components/scm-grid'
import { SarifExcerpt } from '@/components/sarif-excerpt'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      <main className="flex-1">
        {/* ─── 1. Hero ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                Vulnerability detection
                <br />
                by CWE class, not by tool.
              </h1>
              <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-2xl">
                Built on Yamaguchi&rsquo;s Code Property Graph (S&amp;P 2014),
                Engler-style class-specific checkers, and Stanford IRIS for
                LLM-augmented triage &mdash; multi-SCM, deterministic by default.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <DemoCTA size="lg" />
                <Link
                  href="/cli"
                  className="text-sm text-foreground/70 hover:text-foreground inline-flex items-center gap-1 transition"
                >
                  Or run the open-source CLI
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SarifExcerpt language="shell" caption="$ scanipy --query extractall --run-semgrep">
{`▸ tiered-star search   github.com  100k+ stars  ✓
▸ analysing            python-socketio @ a1f3d72…  ✓
▸ semgrep rule         path-traversal/tarslip      ▌

  found  CWE-22  src/socketio/server.py:412
  rule   tarslip.tarfile-extract
  cwe    CWE-22 (Path Traversal)
  fingerprint  d4e7c1…b9f2

CVE-2025-61765 reproduced.`}
              </SarifExcerpt>
            </div>
          </div>
        </section>

        {/* ─── 2. Three pillars (each grounded in a citation) ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                By class, not by tool.
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                A customer enables <em>path-traversal scanning</em>; the
                platform routes that to a class-specific detector with its
                own Semgrep rules and taint specs &mdash; instead of
                &ldquo;run Semgrep with a big YAML.&rdquo; Each of the ten
                CWE classes gets its own detector.
              </p>
              <div className="pt-2">
                <Citation id="engler-coverity-2010" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                One snapshot, many detectors.
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Per <code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5 rounded">(codebase, commit)</code>{' '}
                the snapshotter builds one Code Property Graph and one set
                of CodeQL DBs. Every detector reads the same artefacts,
                so adding a new class costs zero re-clone, zero re-parse.
              </p>
              <div className="pt-2">
                <Citation id="cpg-yamaguchi-2014" />
              </div>
            </div>

            <div className="lg:col-span-12 space-y-3 pt-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Auditable by default.
              </h2>
              <p className="text-foreground/70 leading-relaxed max-w-3xl">
                Findings are deterministic SARIF 2.1.0 with a stable
                <code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5 rounded mx-1">sha256</code>
                fingerprint per finding. LLM triage is off unless an org
                turns it on, and even then it never deletes a finding.
                Two scans of the same commit produce byte-identical
                results &mdash; that&rsquo;s the audit story for compliance
                customers.
              </p>
              <div className="pt-2">
                <Citation id="iris-stanford-2024" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. Architecture diagram ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border/40">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 max-w-2xl">
            One pipeline. Snapshots cache; detectors fan out.
          </h2>
          <ArchitectureDiagram />
        </section>

        {/* ─── 4. Detector catalog ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border/40">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              The catalog.
            </h2>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              Ten vulnerability classes anchored to MITRE CWE-1000. Two
              ship at GA today (path-traversal, memory-safety); the other
              eight are scaffolded with manifests and ship as content lands.
            </p>
          </div>
          <DetectorCatalog />
        </section>

        {/* ─── 5. Detectors as taint specs ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Detectors are spec bundles, not pattern strings.
              </h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Each detector ships as <code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5 rounded">(rules + queries + source/sink models)</code>.
                The manifest declares CWEs, languages, engine, and the
                snapshot artefacts it needs. The detector worker reads the
                manifest and runs the right thing.
              </p>
              <div className="mt-4">
                <Citation id="mariana-trench" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <SarifExcerpt language="shell" caption="detectors/path-traversal/manifest.yaml">
{`id: path-traversal
cwes: [22]
languages: [py, js, ts, java, go]
engine: semgrep
severity_default: high
requires: []
description: |
  Detects path-traversal vulnerabilities. Initial v2
  coverage migrated from the v1 tarslip rule.
enabled: true`}
              </SarifExcerpt>
            </div>
          </div>
        </section>

        {/* ─── 6. SCM coverage ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border/40">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Wherever your code lives.
            </h2>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              Provider-agnostic SCM connectors. Each one verifies inbound
              webhooks, lists repositories, clones at a commit, and resolves
              refs to 40-char SHAs through one shared interface.
            </p>
          </div>
          <ScmGrid />
        </section>

        {/* ─── 7. Auditability ─── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Deterministic by default.
              </h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Every finding carries the same fingerprint across scans.
                Re-scanning a commit collapses onto the same row, so
                triage state and baseline suppressions survive.
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                LLM triage is feature-flagged off. With{' '}
                <code className="font-mono text-sm bg-muted/50 px-1.5 py-0.5 rounded">TRIAGE_LLM=off</code>,
                two scans of the same commit produce byte-identical
                fingerprints, severities, and CWEs.
              </p>
              <div className="mt-4">
                <Citation id="cwe-1000" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <SarifExcerpt language="json" caption="findings.fingerprint formula">
{`fingerprint = sha256(
  rule_id  + "|" +
  file     + "|" +
  symbol   + "|" +
  dataflow_signature
)`}
              </SarifExcerpt>
              <SarifExcerpt language="json" caption="SARIF excerpt">
{`{
  "ruleId": "tarslip.tarfile-extract",
  "level": "error",
  "properties": {
    "severity": "high",
    "cwe": ["CWE-22"]
  },
  "locations": [{
    "physicalLocation": {
      "artifactLocation": { "uri": "src/server.py" },
      "region": { "startLine": 412 }
    }
  }]
}`}
              </SarifExcerpt>
            </div>
          </div>
        </section>

        {/* ─── 8. Closing CTA ─── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center border-t border-border/40">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Scan your own private codebases the same way.
          </h2>
          <p className="mt-4 text-foreground/70">
            We&rsquo;re onboarding teams now. A 30-minute call walks
            through your repo layout and the path to your first scan.
          </p>
          <div className="mt-8 inline-flex">
            <DemoCTA size="lg" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
