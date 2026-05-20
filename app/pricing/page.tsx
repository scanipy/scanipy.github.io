import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ScrollEffects } from '@/components/scroll-effects'

export const metadata = {
  title: 'Pricing — scanipy',
  description: 'Free for open source. Per-developer for teams. Custom for the enterprise.',
}

export default function PricingPage() {
  return (
    <>
      <SiteNav activePage="pricing" />
      <ScrollEffects />

      <section className="page-head">
        <span className="type-section">Pricing</span>
        <h1 className="type-heading">Simple, honest, and free where it matters.</h1>
        <p className="type-lede">Open source is free forever. Small teams ship without paperwork. The enterprise edition adds compliance and the determinism attestor — not your security results.</p>
      </section>

      <section className="section bone" style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
          <div className="price-grid">
            <div className="price-card reveal">
              <div className="tier">Free</div>
              <div className="price">$0<span className="per">forever</span></div>
              <p className="desc">For individual developers, open-source maintainers, and small projects.</p>
              <ul>
                <li>Unlimited public repositories</li>
                <li>1 private repository</li>
                <li>Up to 3 collaborators</li>
                <li>All deterministic-core detectors</li>
                <li>SARIF export</li>
                <li>Community support</li>
              </ul>
              <Link href="/signin#signup" className="btn btn-ghost cta">Start free</Link>
            </div>

            <div className="price-card featured reveal">
              <span className="badge">Most popular</span>
              <div className="tier">Team</div>
              <div className="price">$29<span className="per">/ developer / month</span></div>
              <p className="desc">For engineering teams who want every PR scanned, attested, and triaged.</p>
              <ul>
                <li>Unlimited private repositories</li>
                <li>Unlimited collaborators</li>
                <li>GitHub, GitLab, Bitbucket &amp; Azure DevOps</li>
                <li>LLM-assisted triage</li>
                <li>Jira, Slack &amp; Linear integrations</li>
                <li>30-day finding history</li>
                <li>Priority email support</li>
              </ul>
              <Link href="/signin#signup" className="btn btn-primary cta">Start 14-day trial</Link>
            </div>

            <div className="price-card reveal">
              <div className="tier">Enterprise</div>
              <div className="price">Custom</div>
              <p className="desc">For regulated industries, compliance-bound orgs, and audit-driven teams.</p>
              <ul>
                <li>Everything in Team</li>
                <li>Determinism Attestor (signed provenance)</li>
                <li>SAML SSO &amp; SCIM</li>
                <li>Audit logs &amp; data residency</li>
                <li>Per-customer spec inference</li>
                <li>Unlimited finding history</li>
                <li>Dedicated solutions engineer</li>
                <li>99.9% SLA</li>
              </ul>
              <Link href="/contact" className="btn btn-ghost cta">Talk to sales</Link>
            </div>
          </div>

          <p className="kicker" style={{ textAlign: 'center', marginTop: '32px' }}>— Open source projects under a recognised OSS licence pay nothing on the Team plan. Just write to us.</p>
        </div>
      </section>

      {/* Compare table */}
      <section className="section paper">
        <div style={{ maxWidth: 'var(--maxw-narrow)', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="type-section">Compare plans</span>
            <h2 className="type-heading" style={{ margin: '16px 0 0' }}>What&apos;s in each tier.</h2>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '56px', fontSize: '15px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(29,13,62,0.12)' }}>
                <th style={{ textAlign: 'left', padding: '14px 8px', font: '700 12px/1 var(--font-heading)', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--scan-graphite)' }}></th>
                <th style={{ textAlign: 'center', padding: '14px 8px', font: '700 13px/1 var(--font-heading)', color: 'var(--scan-plum-900)' }}>Free</th>
                <th style={{ textAlign: 'center', padding: '14px 8px', font: '700 13px/1 var(--font-heading)', color: 'var(--scan-berry-600)' }}>Team</th>
                <th style={{ textAlign: 'center', padding: '14px 8px', font: '700 13px/1 var(--font-heading)', color: 'var(--scan-plum-900)' }}>Enterprise</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: 'var(--font-body)' }}>
              {([
                ['Private repositories', '1', 'Unlimited', 'Unlimited'],
                ['Deterministic-core detectors', '●', '●', '●'],
                ['Oracle-passthrough detectors', '●', '●', '●'],
                ['Incremental analysis', '●', '●', '●'],
                ['Multi-SCM (GH/GL/BB/ADO)', 'GH only', '●', '●'],
                ['LLM-assisted triage', '—', '●', '●'],
                ['Signed provenance & attestor', '—', '—', '●'],
                ['SAML SSO & SCIM', '—', '—', '●'],
                ['Per-customer spec inference', '—', '—', '●'],
                ['Audit logs & data residency', '—', '—', '●'],
                ['Finding history', '7 days', '30 days', 'Unlimited'],
                ['Support', 'Community', 'Email', 'Dedicated SE + 99.9% SLA'],
              ] as const).map(([label, free, team, ent]) => (
                <tr key={label} style={{ borderBottom: '1px solid rgba(29,13,62,0.06)' }}>
                  <td style={{ padding: '14px 8px', color: 'var(--scan-graphite)' }}>{label}</td>
                  <td style={{ textAlign: 'center', color: free === '—' ? 'var(--scan-fog)' : 'var(--scan-ink)' }}>{free}</td>
                  <td style={{ textAlign: 'center', color: team === '—' ? 'var(--scan-fog)' : 'var(--scan-ink)' }}>{team}</td>
                  <td style={{ textAlign: 'center', color: ent === '—' ? 'var(--scan-fog)' : 'var(--scan-ink)' }}>{ent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bone">
        <div style={{ maxWidth: 'var(--maxw-narrow)', margin: '0 auto' }}>
          <div className="reveal center" style={{ marginBottom: '56px' }}>
            <span className="type-section">Questions</span>
            <h2 className="type-heading" style={{ margin: '16px 0 0' }}>Pricing, answered.</h2>
          </div>
          <div style={{ display: 'grid', gap: '20px' }}>
            {([
              ['What counts as a developer?', 'Anyone whose commits scanipy analyses in a billing month. Reviewers, bots, and read-only collaborators are free.'],
              ['Do you actually offer free OSS?', 'Yes. If your project ships under an OSI-approved licence, the Team plan is free for that repository — regardless of contributor count. Email oss@scanipy.com.'],
              ['Where does my source code live?', 'Scanipy clones into ephemeral, single-tenant worker containers that are torn down after each scan. The graph and findings persist; the source does not.'],
              ["Can I run scanipy on-prem?", "Not today. The platform is multi-tenant SaaS. We don't ship a self-hosted runner — we'd rather do one thing well."],
              ["What's the determinism attestor?", 'An Enterprise-only feature that re-runs every release-gated analysis under pinned spec and environment, asserts the deterministic-core SARIF is byte-identical to the original, and signs the provenance record.'],
              ['How does annual billing work?', 'Annual prepay gets you two months free. Switch anytime; we prorate on the way down.'],
            ] as const).map(([q, a]) => (
              <div className="feature-card reveal" key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section dark tight" style={{ textAlign: 'center' }}>
        <div className="reveal" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 className="type-heading">Still deciding?</h2>
          <p className="type-lede" style={{ marginTop: '18px' }}>Run scanipy on one repository, for free, forever. Upgrade only if you outgrow it.</p>
          <div className="hero-actions" style={{ marginTop: '28px' }}>
            <Link href="/signin#signup" className="btn btn-primary">Start free</Link>
            <Link href="/contact" className="btn btn-ghost">Talk to sales →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
