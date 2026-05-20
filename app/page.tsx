import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ScrollEffects } from '@/components/scroll-effects'

export default function Home() {
  return (
    <>
      <SiteNav />
      <ScrollEffects />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <span className="type-section eyebrow">Static application security testing · v3.2</span>
          <h1 className="type-title">code, understood.</h1>
          <p className="type-subtitle hero-sub">
            Security analysis that&apos;s reproducible by design — every finding witnessed, every result attested.
          </p>
          <div className="hero-actions">
            <Link href="/signin#signup" className="btn btn-primary">Start free scan</Link>
            <Link href="/demo" className="btn btn-ghost">See a live finding →</Link>
          </div>

          {/* Product mock */}
          <div className="hero-mock reveal">
            <div className="mock">
              <div className="mock-bar">
                <div className="mock-dots"><span /><span /><span /></div>
                <div className="mock-title">scanipy · acme/payments-api · main@7f3a2c9</div>
              </div>
              <div className="mock-body">
                <div className="mock-grid">
                  <aside className="mock-side">
                    <h4>Findings · 14</h4>
                    <div className="mock-list">
                      <div className="row active"><span>Path traversal</span><span className="count">3</span></div>
                      <div className="row"><span>SQL injection</span><span className="count">2</span></div>
                      <div className="row"><span>SSRF</span><span className="count">2</span></div>
                      <div className="row"><span>Deserialization</span><span className="count">1</span></div>
                      <div className="row"><span>Crypto misuse</span><span className="count">4</span></div>
                      <div className="row"><span>Secrets</span><span className="count">2</span></div>
                    </div>
                    <h4 style={{ marginTop: '24px' }}>Run</h4>
                    <div className="mock-list">
                      <div className="row"><span>Language</span><span className="count">python</span></div>
                      <div className="row"><span>Engine</span><span className="count">ifds</span></div>
                      <div className="row"><span>Δ vs parent</span><span className="count">2.4%</span></div>
                      <div className="row"><span>Wall-clock</span><span className="count">47s</span></div>
                    </div>
                  </aside>

                  <article>
                    <div className="finding-card">
                      <div className="finding-head">
                        <span className="chip chip-sev-high">High · CWE-22</span>
                        <span className="chip chip-core">Deterministic-core</span>
                        <span className="chip chip-ok">Attested</span>
                      </div>
                      <h3 className="finding-title">Path traversal in archive extraction</h3>
                      <div className="finding-path">src/api/uploads.py · L48 → src/util/archive.py · L112</div>
                      <div className="witness">
                        <div><span className="ln">42</span><span className="kw">def</span> <span className="ok">upload_archive</span>(req):</div>
                        <div><span className="ln">43</span>&nbsp;&nbsp;&nbsp;&nbsp;name = req.form[<span className="str">&quot;name&quot;</span>] <span className="com"># ← source</span></div>
                        <div><span className="ln">48</span>&nbsp;&nbsp;&nbsp;&nbsp;archive.extract(name, dest=UPLOAD_DIR)</div>
                        <div className="witness-arrow">↓ taint propagates · 2 hops ↓</div>
                        <div><span className="ln">110</span><span className="kw">def</span> <span className="ok">extract</span>(member, dest):</div>
                        <div><span className="ln">112</span>&nbsp;&nbsp;&nbsp;&nbsp;path = os.path.join(dest, <span className="sink">member</span>)  <span className="com"># ← sink</span></div>
                        <div><span className="ln">113</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">open</span>(path, <span className="str">&quot;wb&quot;</span>).write(data)</div>
                      </div>
                      <div className="meta-grid">
                        <div><div className="k">fingerprint</div><div className="v">7f3a · 2c9d · 4e81 · strong</div></div>
                        <div><div className="k">S_version</div><div className="v">specs@2026.05.14-r2</div></div>
                        <div><div className="k">env_digest</div><div className="v">sha256:c1b…a89</div></div>
                        <div><div className="k">cpg_order_hash</div><div className="v">canonical · 3d8…b22</div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* Stat row */}
          <div className="stat-row reveal">
            <div className="stat"><div className="n">99.5%</div><div className="l">Front-end parse fidelity gate for benchmarked languages.</div></div>
            <div className="stat"><div className="n">5×</div><div className="l">Median incremental speedup vs full re-analysis.</div></div>
            <div className="stat"><div className="n">&lt; 30m</div><div className="l">p95 end-to-end scan for a 100k LOC repository.</div></div>
            <div className="stat"><div className="n">0</div><div className="l">Tolerated byte-diffs on the deterministic-core partition.</div></div>
          </div>
        </div>
      </section>

      {/* ── Sticky 3-up scroll story ── */}
      <section className="sticky-three">
        <div className="sticky-three-track">
          <div className="sticky-three-stage">
            <div className="graph-bg" />

            {/* LEFT: text panels */}
            <div className="s3-text">
              <div className="s3-panel is-active">
                <div className="tag">01 — Reproducibility</div>
                <h3>Same code in.<br />Same findings out.</h3>
                <p>Every deterministic-core result is a function of source, a version-pinned spec set, and a pinned environment. Re-run the scan and get the same SARIF — byte for byte. The Attestor fails the build if it doesn&apos;t.</p>
              </div>
              <div className="s3-panel">
                <div className="tag">02 — Incrementality</div>
                <h3>Only analyse<br />what changed.</h3>
                <p>Scanipy reuses the CPG of the parent commit and replays the analysis on the affected slice. Closed-world commits rebuild in time proportional to the semantic delta — not the size of the repository.</p>
              </div>
              <div className="s3-panel">
                <div className="tag">03 — Provenance</div>
                <h3>Every finding<br />shows its work.</h3>
                <p>Every result ships with a signed chain: source commit → snapshot digest → spec version → env digest → taint witness → rule id. Auditors verify findings without re-running the analysis.</p>
              </div>
            </div>

            {/* RIGHT: visuals */}
            <div className="s3-viz">
              <div className="s3-viz-panel is-active">
                <div className="viz-shell">
                  <div className="viz-hash"><span className="lbl">Run · 14:02 UTC</span><code>SARIF · sha256:c1b…a89</code></div>
                  <div className="viz-equals">≡</div>
                  <div className="viz-hash"><span className="lbl">Run · 14:39 UTC</span><code>SARIF · sha256:c1b…a89</code></div>
                  <div className="viz-equals">≡</div>
                  <div className="viz-hash"><span className="lbl">Run · audit replay</span><code>SARIF · sha256:c1b…a89</code></div>
                  <p style={{ fontFamily: 'var(--font-note)', fontStyle: 'italic', color: 'var(--scan-rose-200)', marginTop: '18px', fontSize: '14px' }}>Three runs, three weeks apart. Same hash.</p>
                </div>
              </div>
              <div className="s3-viz-panel">
                <div className="viz-shell">
                  <div className="viz-hash"><span className="lbl">Repository · 14,328 files</span><code>parent: 7f3a2c9</code></div>
                  <div className="viz-delta">
                    <i /><i /><i /><i className="hit" /><i /><i /><i /><i />
                    <i /><i /><i className="hit" /><i className="cone" /><i /><i /><i /><i />
                    <i /><i /><i className="cone" /><i className="hit" /><i className="cone" /><i /><i /><i />
                    <i /><i /><i /><i className="cone" /><i /><i /><i /><i />
                    <i /><i /><i /><i /><i /><i /><i /><i />
                    <i /><i /><i /><i /><i /><i /><i /><i />
                  </div>
                  <div style={{ display: 'flex', gap: '18px', marginTop: '18px', fontFamily: 'var(--font-heading)', fontSize: '12px', color: 'var(--scan-rose-200)' }}>
                    <span><i style={{ display: 'inline-block', width: '10px', height: '10px', background: 'var(--scan-berry-600)', borderRadius: '3px', verticalAlign: 'middle', marginRight: '6px' }} />changed (3)</span>
                    <span><i style={{ display: 'inline-block', width: '10px', height: '10px', background: 'rgba(194,84,127,0.5)', borderRadius: '3px', verticalAlign: 'middle', marginRight: '6px' }} />affected (5)</span>
                    <span style={{ color: 'var(--scan-fog)' }}>untouched (14,320)</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-note)', fontStyle: 'italic', color: 'var(--scan-rose-200)', marginTop: '18px', fontSize: '14px' }}>Eight files of work for a fourteen-thousand-file repo.</p>
                </div>
              </div>
              <div className="s3-viz-panel">
                <div className="viz-shell">
                  <div className="viz-chain">
                    <div className="step"><span className="k">source</span><span className="v">acme/payments-api@7f3a2c9</span></div>
                    <div className="step"><span className="k">snapshot</span><span className="v">cpg · sha256:9d2…11c</span></div>
                    <div className="step"><span className="k">S_version</span><span className="v">specs@2026.05.14-r2</span></div>
                    <div className="step"><span className="k">env_digest</span><span className="v">image · sha256:c1b…a89</span></div>
                    <div className="step"><span className="k">cpg_order</span><span className="v">canonical · 3d8…b22</span></div>
                    <div className="step"><span className="k">witness</span><span className="v">uploads.py:48 → archive.py:112</span></div>
                    <div className="step"><span className="k">spec_id</span><span className="v">path-traversal/zipslip-py</span></div>
                    <div className="step"><span className="k">signature</span><span className="v">ed25519 · 0x8f…42a</span></div>
                  </div>
                </div>
              </div>

              <div className="s3-progress">
                <span className="is-active" /><span /><span />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="section bone">
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
          <div className="reveal" style={{ maxWidth: '720px' }}>
            <span className="type-section">Built for the messy real world</span>
            <h2 className="type-heading" style={{ margin: '16px 0 0' }}>A SAST platform with the receipts.</h2>
            <p className="type-lede" style={{ marginTop: '18px' }}>Engineering teams stop trusting tools that change their minds. Scanipy is built so you don&apos;t have to.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card reveal">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M12 3v18" /><circle cx="12" cy="12" r="9" /></svg>
              </div>
              <h3>Multi-SCM, one connector</h3>
              <p>GitHub, GitLab, Bitbucket, Azure DevOps — same conformance suite, same fingerprint across providers.</p>
            </div>
            <div className="feature-card reveal">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" /></svg>
              </div>
              <h3>Refactor-stable findings</h3>
              <p>Rename a variable, extract a method, move a file. The slice fingerprint survives. No false-new on cosmetic changes.</p>
            </div>
            <div className="feature-card reveal">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /><path d="M12 7v5l3 2" /></svg>
              </div>
              <h3>Anytime-valid spec gate</h3>
              <p>New detection rules clear a precision floor with mathematically defensible guarantees — even under unbounded re-evaluation.</p>
            </div>
            <div className="feature-card reveal">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 17l6-6 4 4 6-6" /><path d="M14 5h6v6" /></svg>
              </div>
              <h3>Incremental by default</h3>
              <p>Scanipy reuses the parent commit&apos;s analysis graph and replays only the affected slice. PRs scan in seconds, not minutes.</p>
            </div>
            <div className="feature-card reveal">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L3 7v5c0 5 3.5 9 9 10 5.5-1 9-5 9-10V7l-9-5z" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <h3>Two partitions, honest labels</h3>
              <p>Every finding declares its <em>origin</em>. Deterministic-core results carry a reproducibility theorem; oracle-passthrough results carry a measured rate. Never both, never blurred.</p>
            </div>
            <div className="feature-card reveal">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
              </div>
              <h3>LLM-assisted, not LLM-decided</h3>
              <p>Language models triage and propose new specs. They never delete a finding, never sit on the detection path. Determinism is non-negotiable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Demo preview ── */}
      <section className="section paper">
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <span className="type-section">Drop in code · get back evidence</span>
            <h2 className="type-heading" style={{ margin: '16px 0 0' }}>Findings you can defend.</h2>
            <p className="type-lede" style={{ marginTop: '18px' }}>Every result links back to the exact path through your code that produced it. Hand the witness to anyone — auditor, engineer, ticket bot — and they can verify without re-running the scan.</p>
          </div>

          <div className="try-row reveal" style={{ marginTop: '56px' }}>
            <div className="try-pane">
              <h4>Input · python</h4>
              <pre className="code-pad"><span className="com"># app/views/uploads.py</span>{'\n'}<span className="kw">from</span> flask <span className="kw">import</span> request, send_file{'\n'}<span className="kw">import</span> os{'\n'}{'\n'}UPLOAD_DIR = <span className="str">&quot;/var/uploads&quot;</span>{'\n'}{'\n'}<span className="kw">def</span> <span className="fn">download</span>(req):{'\n'}    name = req.args[<span className="str">&quot;file&quot;</span>]{'\n'}    path = os.path.join(UPLOAD_DIR, name){'\n'}    <span className="kw">return</span> <span className="fn">send_file</span>(path)</pre>
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/demo" className="btn btn-primary">Open interactive demo →</Link>
                <span className="type-caption">No signup required.</span>
              </div>
            </div>

            <div className="try-pane">
              <h4>Output · 1 finding</h4>
              <div className="try-output">
                <div className="f-out">
                  <div className="f-row">
                    <div className="f-top">
                      <span className="chip chip-sev-high">High · CWE-22</span>
                      <span className="chip chip-core">Deterministic-core</span>
                    </div>
                    <div className="f-title">Path traversal · unsanitised user input reaches file read</div>
                    <div className="f-path">app/views/uploads.py · L7 (source) → L9 (sink)</div>
                    <p style={{ fontSize: '13.5px', lineHeight: '1.55', color: 'var(--scan-graphite)', margin: '12px 0 0' }}>
                      <code style={{ fontFamily: 'var(--font-mono)', background: 'rgba(128,11,79,0.08)', padding: '1px 5px', borderRadius: '4px', fontSize: '12.5px' }}>req.args[&quot;file&quot;]</code> flows into <code style={{ fontFamily: 'var(--font-mono)', background: 'rgba(128,11,79,0.08)', padding: '1px 5px', borderRadius: '4px', fontSize: '12.5px' }}>os.path.join</code> without a normalisation check.
                    </p>
                    <div className="f-meta">
                      <div><div className="k">fingerprint</div><div className="v">a82d · 4e1f · 7c93 · strong</div></div>
                      <div><div className="k">spec</div><div className="v">path-traversal/flask-py</div></div>
                      <div><div className="k">S_version</div><div className="v">specs@2026.05.14-r2</div></div>
                      <div><div className="k">env_digest</div><div className="v">sha256:c1b…a89</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="section dark spacious">
        <div className="quote-block reveal">
          <span className="type-section">Why teams ship Scanipy</span>
          <p className="quote" style={{ marginTop: '22px' }}>&ldquo;It&apos;s the first SAST result our auditors stopped arguing with. The finding either reproduces or it doesn&apos;t. Done.&rdquo;</p>
          <p className="by">Priya Rao · Director of AppSec · Northwind Logistics</p>

          <div className="logos-strip" style={{ marginTop: '80px', opacity: '0.55' }}>
            <div className="logo" style={{ color: 'var(--scan-rose-200)' }}>Northwind</div>
            <div className="logo" style={{ color: 'var(--scan-rose-200)' }}>Helios Bank</div>
            <div className="logo" style={{ color: 'var(--scan-rose-200)' }}>Linerly</div>
            <div className="logo" style={{ color: 'var(--scan-rose-200)' }}>Folio Health</div>
            <div className="logo" style={{ color: 'var(--scan-rose-200)' }}>Quartzly</div>
            <div className="logo" style={{ color: 'var(--scan-rose-200)' }}>Beam &amp; Co</div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bone tight" style={{ textAlign: 'center' }}>
        <div className="reveal" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 className="type-heading">Run your first scan in a minute.</h2>
          <p className="type-lede" style={{ marginTop: '18px' }}>Free for open-source. Free for the first repo. The auditor&apos;s edition is paid — but never the result.</p>
          <div className="hero-actions" style={{ marginTop: '28px' }}>
            <Link href="/signin#signup" className="btn btn-primary">Start free</Link>
            <Link href="/pricing" className="btn btn-ghost">See pricing →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
