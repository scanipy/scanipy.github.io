'use client'

import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ScrollEffects } from '@/components/scroll-effects'

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <ScrollEffects />

      <section className="page-head">
        <span className="type-section">Contact</span>
        <h1 className="type-heading">Talk to a human.</h1>
        <p className="type-lede">Enterprise pricing, compliance questions, security disclosures, or just to see if scanipy fits. We read every message.</p>
      </section>

      <section className="section bone" style={{ paddingTop: '0' }}>
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* Form */}
          <div className="reveal">
            <span className="type-section">Sales &amp; enterprise</span>
            <h2 className="type-heading" style={{ margin: '16px 0 18px', fontSize: 'clamp(28px, 3vw, 38px)' }}>Let&apos;s talk about your scan.</h2>
            <form className="scn-form" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div>
                  <label htmlFor="c-name">Your name</label>
                  <input id="c-name" placeholder="Avery Wong" required />
                </div>
                <div>
                  <label htmlFor="c-email">Work email</label>
                  <input id="c-email" type="email" placeholder="you@team.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="c-company">Company</label>
                <input id="c-company" placeholder="Acme Corp" />
              </div>
              <div>
                <label htmlFor="c-size">Team size</label>
                <select id="c-size">
                  <option value="">Select…</option>
                  <option>1–10 developers</option>
                  <option>11–50 developers</option>
                  <option>51–200 developers</option>
                  <option>200+ developers</option>
                </select>
              </div>
              <div>
                <label htmlFor="c-msg">What would you like to scan?</label>
                <textarea id="c-msg" placeholder="Tell us about your stack, language mix, and what you're hoping scanipy can help with." />
              </div>
              <button type="submit" className="btn btn-primary">Send message →</button>
            </form>
          </div>

          {/* Direct contacts */}
          <div className="reveal" style={{ paddingTop: '48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                { label: 'Sales', email: 'sales@scanipy.com', note: 'Pricing, trials, enterprise contracts' },
                { label: 'Security', email: 'security@scanipy.com', note: 'Responsible disclosure and security questions' },
                { label: 'Open Source', email: 'oss@scanipy.com', note: 'Free Team plan for OSS maintainers' },
                { label: 'General', email: 'hello@scanipy.com', note: 'Everything else' },
              ].map(({ label, email, note }) => (
                <div key={label} style={{ borderBottom: '1px solid rgba(29,13,62,0.08)', paddingBottom: '24px' }}>
                  <div style={{ font: '700 12px/1 var(--font-heading)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--scan-berry-600)', marginBottom: '6px' }}>{label}</div>
                  <a href={`mailto:${email}`} style={{ font: '600 18px/1.3 var(--font-heading)', color: 'var(--scan-plum-900)', letterSpacing: '-0.2px' }}>{email}</a>
                  <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--scan-graphite)' }}>{note}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px', padding: '20px', background: 'var(--scan-paper)', borderRadius: '14px' }}>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--scan-graphite)', lineHeight: '1.6', fontFamily: 'var(--font-note)', fontStyle: 'italic' }}>
                &ldquo;We try to reply within one business day. For enterprise inquiries, we&apos;ll book a 30-minute call to understand your stack before sending anything.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
