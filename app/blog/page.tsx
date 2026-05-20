import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ScrollEffects } from '@/components/scroll-effects'
import { SubscribeForm } from '@/components/subscribe-form'

export const metadata = {
  title: 'Blog — scanipy',
  description: 'Writing on reproducible security analysis, static analysis research, and building Scanipy.',
}

const FEATURED = {
  tag: 'Engineering',
  title: 'Why byte-identical SARIF is the only meaningful reproducibility guarantee',
  excerpt: 'Most SAST tools claim determinism. We explain why "same findings" is a much weaker claim than "same SARIF", and why the difference matters when you hand results to an auditor.',
  date: 'May 14, 2026',
  readTime: '12 min read',
}

const POSTS = [
  { tag: 'Research', title: 'Anytime-valid inference for detection spec acceptance', excerpt: 'How we replaced a classical α-spending function with an e-process that works under unbounded re-evaluation, and why the difference is not academic.', date: 'May 7, 2026', readTime: '9 min' },
  { tag: 'Engineering', title: 'Incremental CPG maintenance on a 100k-file monorepo', excerpt: 'A walkthrough of our closed-world precondition detector and the fallback path for open-world code.', date: 'Apr 28, 2026', readTime: '8 min' },
  { tag: 'Security', title: 'CVE-2025-61765: how we found it and what made the finding sticky', excerpt: 'The zip-slip variant that survived a rename, a file-move, and a project restructure, thanks to a slice fingerprint.', date: 'Apr 14, 2026', readTime: '6 min' },
  { tag: 'Product', title: 'Honest labels: what "deterministic-core" and "oracle-passthrough" mean in practice', excerpt: 'A plain-language explainer of the two finding partitions, written for the engineering leader who just got a scanipy report.', date: 'Apr 2, 2026', readTime: '5 min' },
  { tag: 'Research', title: 'Refactor-stable fingerprints: the normalisation passes that matter', excerpt: 'α-renaming, PDG-only formatting normalisation, canonical topological sort, and extract/inline summary inlining, each explained with a before/after example.', date: 'Mar 19, 2026', readTime: '11 min' },
  { tag: 'Engineering', title: 'Multi-SCM parity: making GitHub, GitLab, Bitbucket and ADO return identical fingerprints', excerpt: 'How we built the SCM connector abstraction and why the conformance test suite had to come before the connectors.', date: 'Mar 5, 2026', readTime: '7 min' },
  { tag: 'Security', title: 'SSRF in cloud-native services: the detection class we added in Stage A', excerpt: 'Why SSRF is harder to detect than path traversal, and the IFDS spec changes that make it tractable.', date: 'Feb 20, 2026', readTime: '8 min' },
  { tag: 'Product', title: 'The honest-labeling ledger: a living document', excerpt: 'Every claim in our architecture is tagged proven, empirical, staged, or not-claimed. Here is how to read it.', date: 'Feb 6, 2026', readTime: '4 min' },
  { tag: 'Engineering', title: 'Per-language CPG fidelity gates: what we measure and why', excerpt: 'Parse success rate, call-edge precision/recall, PDG dependence-edge recall: the three numbers that gate a language into the Algorithm 2 benchmark.', date: 'Jan 23, 2026', readTime: '6 min' },
]

export default function BlogPage() {
  return (
    <>
      <SiteNav activePage="blog" />
      <ScrollEffects />

      <section className="page-head">
        <span className="type-section">Blog</span>
        <h1 className="type-heading">Writing on reproducible security analysis.</h1>
        <p className="type-lede">Research, engineering, and honest product thinking from the scanipy team.</p>
      </section>

      {/* Featured post */}
      <section className="section bone" style={{ paddingTop: '0' }}>
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
          <div className="reveal" style={{ background: 'var(--scan-white)', borderRadius: '20px', padding: '48px', border: '1px solid rgba(29,13,62,0.06)', marginBottom: '48px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
              <span className="type-section">{FEATURED.tag}</span>
              <span className="type-caption">{FEATURED.date} · {FEATURED.readTime}</span>
            </div>
            <h2 style={{ font: '700 clamp(26px, 3.2vw, 36px)/1.15 var(--font-heading)', color: 'var(--scan-plum-900)', letterSpacing: '-0.6px', margin: '0 0 16px' }}>{FEATURED.title}</h2>
            <p style={{ fontSize: '17px', color: 'var(--scan-graphite)', lineHeight: '1.65', maxWidth: '760px', margin: '0 0 24px' }}>{FEATURED.excerpt}</p>
            <Link href="#" className="btn btn-ghost">Read post →</Link>
          </div>

          <div className="post-grid">
            {POSTS.map(({ tag, title, excerpt, date, readTime }) => (
              <Link href="#" key={title} style={{ textDecoration: 'none' }}>
                <div className="post-card">
                  <div className="tag">{tag}</div>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <div className="meta">{date} · {readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="section paper tight" style={{ textAlign: 'center' }}>
        <div className="reveal" style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="type-section">Stay up to date</span>
          <h2 className="type-heading" style={{ margin: '16px 0 0', fontSize: 'clamp(28px, 3.5vw, 40px)' }}>New posts, infrequently.</h2>
          <p className="type-lede" style={{ marginTop: '18px' }}>No newsletter cadence, no growth hacking. We write when we have something to say.</p>
          <SubscribeForm />
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
