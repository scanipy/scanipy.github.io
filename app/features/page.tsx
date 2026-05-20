import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ScrollEffects } from '@/components/scroll-effects'

export const metadata = {
  title: 'Product — scanipy',
  description: 'A static security analysis platform with reproducibility, incrementality, and machine-checkable provenance.',
}

export default function FeaturesPage() {
  return (
    <>
      <SiteNav activePage="product" />
      <ScrollEffects />

      <section className="page-head">
        <span className="type-section">The product</span>
        <h1 className="type-heading">A SAST tool whose results you can defend.</h1>
        <p className="type-lede">Most security scanners ship results. Scanipy ships <em>evidence</em> — every finding carries a witness, a fingerprint, and a verifiable provenance chain.</p>
      </section>

      {/* Three pillars */}
      <section className="section bone">
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
          <div className="reveal" style={{ maxWidth: '720px' }}>
            <span className="type-section">How it&apos;s built</span>
            <h2 className="type-heading" style={{ margin: '16px 0 0' }}>Three properties carry the wedge.</h2>
          </div>
          <div className="feature-grid">
            <div className="feature-card reveal">
              <div className="icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 17l9 4 9-4M3 12l9 4 9-4" /></svg></div>
              <h3>Reproducibility</h3>
              <p>For a fixed spec set and analysis environment, the deterministic-core partition is a deterministic function of source code. Same code in, same SARIF out — byte for byte.</p>
            </div>
            <div className="feature-card reveal">
              <div className="icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 17l6-6 4 4 6-6" /><path d="M14 5h6v6" /></svg></div>
              <h3>Incrementality</h3>
              <p>Analysis cost scales with the semantic delta of a commit, not the size of the repository. A typed-rename touches kilobytes of work, not minutes of CI.</p>
            </div>
            <div className="feature-card reveal">
              <div className="icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg></div>
              <h3>Provenance</h3>
              <p>Every finding ships with a signed chain — source commit, snapshot digest, spec version, env digest, witness, rule id, signature. Auditors verify without re-running.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep dive 1 — two partitions */}
      <section className="section dark spacious">
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="reveal">
            <span className="type-section">Deterministic core</span>
            <h2 className="type-heading" style={{ margin: '16px 0 18px' }}>Two partitions, honest labels.</h2>
            <p className="type-lede">Some findings — taint-style classes like injection, path traversal, SSRF, deserialisation — run through a precise IFDS/IDE solver over a canonical code-property graph. We call these <em>deterministic-core</em> and back them with a reproducibility theorem.</p>
            <p className="type-lede" style={{ marginTop: '16px' }}>Other findings — pattern queries, CodeQL queries, memory-safety on C/C++ — run through external engines. We call these <em>oracle-passthrough</em> and report their measured reproduction rate.</p>
            <p className="kicker">— Every finding declares its origin. The dashboard never blurs the two.</p>
          </div>
          <div className="reveal">
            <div className="viz-shell" style={{ maxWidth: '480px', marginLeft: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(251,247,242,0.08)', borderRadius: '12px' }}>
                  <div style={{ font: '700 11px/1 var(--font-heading)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--scan-rose-400)', marginBottom: '10px' }}>core</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--scan-bone)', lineHeight: '1.7' }}>ifds<br />ide</div>
                  <div style={{ marginTop: '14px', font: '700 24px/1 var(--font-heading)', color: 'var(--scan-bone)' }}>≡</div>
                  <div style={{ fontFamily: 'var(--font-note)', fontStyle: 'italic', fontSize: '13px', color: 'var(--scan-rose-200)', marginTop: '6px' }}>byte-identical</div>
                </div>
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(251,247,242,0.08)', borderRadius: '12px' }}>
                  <div style={{ font: '700 11px/1 var(--font-heading)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--scan-warn)', marginBottom: '10px' }}>oracle</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--scan-bone)', lineHeight: '1.7' }}>semgrep<br />codeql<br />cpg-query</div>
                  <div style={{ marginTop: '14px', font: '700 24px/1 var(--font-heading)', color: 'var(--scan-bone)' }}>≈</div>
                  <div style={{ fontFamily: 'var(--font-note)', fontStyle: 'italic', fontSize: '13px', color: 'var(--scan-rose-200)', marginTop: '6px' }}>reported rate</div>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-note)', fontStyle: 'italic', color: 'var(--scan-rose-200)', fontSize: '14px', marginTop: '20px', textAlign: 'center' }}>Both partitions ship. Only one carries the theorem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep dive 2 — incremental */}
      <section className="section bone spacious">
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="reveal">
            <div className="mock" style={{ maxWidth: 'none' }}>
              <div className="mock-bar">
                <div className="mock-dots"><span /><span /><span /></div>
                <div className="mock-title">git push · pre-receive hook · scanipy</div>
              </div>
              <div className="mock-body" style={{ padding: '20px' }}>
                <pre className="code-pad" style={{ fontSize: '12.5px' }}><span className="com">→ snapshotting commit 7f3a2c9...</span>{'\n'}<span className="com">→ parent: e1d8f4a (cached cpg)</span>{'\n'}<span className="com">→ closed-world precondition: held</span>{'\n'}<span className="com">→ affected: 8 files (of 14,328)</span>{'\n'}<span className="com">→ replaying ifds over slice...</span>{'\n'}<span className="ok">✓ analysis complete in 6.4s</span>{'\n'}<span className="ok">✓ 0 new findings</span>{'\n'}<span className="ok">✓ attestation: byte-identical to parent</span></pre>
              </div>
            </div>
          </div>
          <div className="reveal">
            <span className="type-section">Incremental by default</span>
            <h2 className="type-heading" style={{ margin: '16px 0 18px' }}>Scan the delta, not the repo.</h2>
            <p className="type-lede">Scanipy treats every commit as a delta against its parent. The code-property graph from the parent commit is reused; only the changed declarations and their transitive callers are re-analysed. Refactor a class? Touch a config file? You pay for the change, not the codebase.</p>
            <p className="kicker">— On open-world snapshots we publish a median ≥5× speedup, p95 ≥2×, with an explicit fallback rate.</p>
          </div>
        </div>
      </section>

      {/* Deep dive 3 — witnesses */}
      <section className="section dark spacious">
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="reveal">
            <span className="type-section">Witnesses &amp; fingerprints</span>
            <h2 className="type-heading" style={{ margin: '16px 0 18px' }}>A finding without a witness is a guess.</h2>
            <p className="type-lede">Every taint-style finding ships with the exact program path that produced it — source statement, every propagation step, sink statement. The witness is content-addressed and signed. Hand it to an engineer and the fix is obvious; hand it to an auditor and the case is closed.</p>
            <p className="type-lede" style={{ marginTop: '16px' }}>Slice-fingerprints survive cosmetic refactors. Rename, reorder, extract, move — the same vulnerability keeps the same identity. No false-new alerts on style fixes.</p>
          </div>
          <div className="reveal">
            <div className="finding-card" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(251,247,242,0.08)', maxWidth: '480px', marginLeft: 'auto' }}>
              <div className="finding-head">
                <span className="chip chip-sev-high">High · CWE-89</span>
                <span className="chip" style={{ background: 'rgba(251,247,242,0.08)', color: 'var(--scan-bone)' }}>Deterministic-core</span>
              </div>
              <h3 className="finding-title" style={{ color: 'var(--scan-bone)' }}>SQL injection in lookup helper</h3>
              <div className="finding-path" style={{ color: 'var(--scan-rose-200)' }}>api/search.py · L23 → db/raw.py · L91</div>
              <div className="witness" style={{ background: 'rgba(0,0,0,0.4)' }}>
                <div><span className="ln">23</span>q = req.args[<span className="str">&quot;q&quot;</span>]   <span className="com"># ← source</span></div>
                <div><span className="ln">24</span>rows = db.<span className="ok">search</span>(q)</div>
                <div className="witness-arrow">↓ taint propagates ↓</div>
                <div><span className="ln">91</span>sql = <span className="str">f&quot;SELECT * FROM items WHERE name LIKE &apos;%&#123;<span className="sink">term</span>&#125;%&apos;&quot;</span></div>
                <div><span className="ln">92</span>cursor.<span className="ok">execute</span>(sql)  <span className="com"># ← sink</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language staging */}
      <section className="section bone spacious">
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
          <div className="reveal" style={{ maxWidth: '720px' }}>
            <span className="type-section">Languages, by stage</span>
            <h2 className="type-heading" style={{ margin: '16px 0 0' }}>Honest about what&apos;s ready.</h2>
            <p className="type-lede" style={{ marginTop: '18px' }}>Front-end fidelity dominates the schedule of any cross-language SAST tool. We don&apos;t pretend otherwise. Every language is gated by a parse-fidelity test before we publish recall claims for it.</p>
          </div>
          <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div className="feature-card reveal">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>Java &amp; Python</h3><span className="chip chip-ok">Core · Stage A</span>
              </div>
              <p>Strongest front-ends. Full IFDS support for injection, path traversal, SSRF, deserialisation.</p>
            </div>
            <div className="feature-card reveal">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>JavaScript &amp; TypeScript</h3><span className="chip chip-ok">Core · Stage B</span>
              </div>
              <p>Determinism-attested after Stage A. Full IFDS for the four core classes.</p>
            </div>
            <div className="feature-card reveal">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>Go</h3><span className="chip" style={{ background: 'rgba(208,140,46,0.12)', color: 'var(--scan-warn)' }}>Core · Stage C</span>
              </div>
              <p>Points-to analysis investment underway. Oracle-passthrough until the fidelity gate passes.</p>
            </div>
            <div className="feature-card reveal">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>Ruby &amp; PHP</h3><span className="chip" style={{ background: 'rgba(208,140,46,0.12)', color: 'var(--scan-warn)' }}>Oracle · Stage D</span>
              </div>
              <p>Oracle-passthrough today. Core port tracked, gated on proprietary front-end work.</p>
            </div>
            <div className="feature-card reveal">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>C / C++</h3><span className="chip chip-oracle">Oracle</span>
              </div>
              <p>Memory-safety via CodeQL throughout v3. Core port tracked but explicitly post-v3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section dark tight" style={{ textAlign: 'center' }}>
        <div className="reveal" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 className="type-heading">See a real finding in two minutes.</h2>
          <p className="type-lede" style={{ marginTop: '18px' }}>Paste your code into the sandbox. No signup, no install.</p>
          <div className="hero-actions" style={{ marginTop: '28px' }}>
            <Link href="/demo" className="btn btn-primary">Open demo →</Link>
            <Link href="/pricing" className="btn btn-ghost">See pricing</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
