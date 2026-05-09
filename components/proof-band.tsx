import Link from 'next/link'
import { Star, Shield, Github } from 'lucide-react'
import { scms } from '@/lib/scms'
import { getRepoProof, repoUrl } from '@/lib/proof'

/**
 * The band that sits immediately under the hero. We don't have customer
 * logos, so this substitutes:
 *   - SCM wordmark row (the four providers we connect to)
 *   - Open-source chip with the live GitHub star count fetched at build
 *   - MIT-licensed chip
 *   - "Found in the wild" CVE chip
 *
 * Built as an async server component so the GitHub stars fetch in
 * `lib/proof.ts` runs at build time. No client-side request, no
 * per-pageview fetch on the static export.
 */
export async function ProofBand() {
  const { stars } = await getRepoProof()

  return (
    <section
      aria-label="Connections and project signals"
      className="bg-muted/30 border-y border-border/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/50 text-center mb-5">
          Connects to
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-8">
          {scms.map((scm) => (
            <li
              key={scm.id}
              className="text-base md:text-lg font-semibold text-foreground/70 tracking-tight"
            >
              {scm.name}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-foreground/70 hover:text-foreground border border-border/60 hover:border-border bg-background/60 rounded-full px-3 py-1.5 transition"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Open source</span>
            <span className="opacity-40">·</span>
            <Star className="w-3 h-3 fill-current" />
            <span className="font-mono tabular-nums">{stars}</span>
          </Link>

          <span className="inline-flex items-center gap-1.5 text-xs text-foreground/70 border border-border/60 bg-background/60 rounded-full px-3 py-1.5">
            <Shield className="w-3.5 h-3.5" />
            <span>MIT licensed</span>
          </span>

          <Link
            href="https://nvd.nist.gov/vuln/detail/CVE-2025-61765"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-foreground/70 hover:text-foreground border border-border/60 hover:border-border bg-background/60 rounded-full px-3 py-1.5 transition"
          >
            <span className="font-mono">CVE-2025-61765</span>
            <span className="opacity-60">found in the wild</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
