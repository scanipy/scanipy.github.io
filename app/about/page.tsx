import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ScrollEffects } from '@/components/scroll-effects'

export const metadata = {
  title: 'About — scanipy',
  description: 'A static security analysis platform built for engineering teams that audit their own results.',
}

const TEAM = [
  { initials: 'AK', name: 'Anika Khanna', role: 'Co-founder · Analysis' },
  { initials: 'JM', name: 'Jonas Müller', role: 'Co-founder · Platform' },
  { initials: 'SR', name: 'Sofia Ramos', role: 'Head of Engineering' },
  { initials: 'DC', name: 'David Chen', role: 'Detection & Specs' },
  { initials: 'PO', name: 'Priya Okafor', role: 'Security Research' },
  { initials: 'NL', name: 'Naomi Larsen', role: 'Compliance & Trust' },
]

const PRINCIPLES = [
  { n: '01', h: 'Determinism over cleverness.', p: "A clever finding you can't reproduce is a liability. We'd rather ship a slightly smaller catalogue with a theorem than a giant one with a shrug." },
  { n: '02', h: 'Honest labels, always.', p: "Every finding declares what it can defend. We never tag a result with a guarantee it hasn't earned." },
  { n: '03', h: 'LLMs assist, never decide.', p: "Language models triage and propose specs. They never delete a finding, never sit on the detection path. Determinism is non-negotiable." },
  { n: '04', h: 'Witnesses, not warnings.', p: "A finding without a path through your code is a guess. Every taint-style result ships with the exact trace that produced it." },
  { n: '05', h: 'Auditors get the receipts.', p: "Compliance shouldn't be a fight. The provenance record is signed, machine-checkable, and complete enough to verify a finding without re-running the scan." },
]

export default function AboutPage() {
  return (
    <>
      <SiteNav activePage="company" />
      <ScrollEffects />

      {/* Hero with Caveat */}
      <section className="hero" style={{ paddingTop: 'calc(var(--nav-h) + 64px)', paddingBottom: '64px' }}>
        <div className="hero-inner">
          <span className="type-section eyebrow">Our story</span>
          <h1 className="type-title" style={{ fontSize: 'clamp(64px, 9vw, 120px)', background: 'var(--scan-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
            we got tired<br />of guesses.
          </h1>
          <p className="type-subtitle hero-sub" style={{ maxWidth: '640px' }}>Scanipy is a small team building the first static analysis tool engineers stop arguing with.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section bone" style={{ paddingTop: '40px' }}>
        <div style={{ maxWidth: 'var(--maxw-narrow)', margin: '0 auto' }}>
          <div className="reveal">
            <p className="type-body" style={{ fontSize: '19px', lineHeight: '1.7' }}>
              Every team we&apos;d ever worked on had the same security-scanner story. A tool ships a thousand findings. The team triages a hundred. Half of them disappear next quarter when the vendor &ldquo;improves the rules.&rdquo; A new release introduces a hundred new alerts on code nobody touched. The auditor asks how a finding was derived; the team shrugs.
            </p>
            <p className="type-body" style={{ fontSize: '19px', lineHeight: '1.7', marginTop: '20px' }}>We were the team. We got tired of it.</p>
            <p className="type-body" style={{ fontSize: '19px', lineHeight: '1.7', marginTop: '20px' }}>
              Scanipy began as a CLI in 2023 — a Python wrapper that drove Semgrep and CodeQL with a single config and a stricter result schema. By the time it had found CVE-2025-61765 in the wild, it had become something else: an architecture for static analysis as a reproducible, attestable function of source code. Same code in, same findings out — every time, every commit, every team.
            </p>
            <p className="type-body" style={{ fontSize: '19px', lineHeight: '1.7', marginTop: '20px' }}>We&apos;re a remote team. We write our own results. And we charge for the attestor, not for the analysis.</p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section paper">
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
          <div className="reveal" style={{ maxWidth: '720px' }}>
            <span className="type-section">What we believe</span>
            <h2 className="type-heading" style={{ margin: '16px 0 0' }}>Five principles we won&apos;t trade.</h2>
          </div>
          <div className="feature-grid">
            {PRINCIPLES.map(({ n, h, p }) => (
              <div className="feature-card reveal" key={n}>
                <div className="icon">
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px' }}>{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
            <div className="feature-card reveal" style={{ background: 'var(--scan-plum-900)', color: 'var(--scan-bone)', borderColor: 'var(--scan-plum-900)' }}>
              <div className="icon" style={{ background: 'rgba(251,247,242,0.12)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7" /></svg>
              </div>
              <h3 style={{ color: 'var(--scan-bone)' }}>No mystery results.</h3>
              <p style={{ color: 'rgba(251,247,242,0.78)' }}>Everything we ship can be re-derived. Everything we charge for is at the edges — compliance, attestation, scale — never the core.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team — TODO: populate with real team members
      <section className="section bone">
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
          <div className="reveal center">
            <span className="type-section">The team</span>
            <h2 className="type-heading" style={{ margin: '16px 0 0' }}>Small. Senior. Honest.</h2>
            <p className="type-lede" style={{ marginTop: '18px', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>Twelve people, five timezones, one Slack channel called <em>#received-receipts</em>.</p>
          </div>
          <div className="team-grid">
            {TEAM.map(({ initials, name, role }) => (
              <div className="team-card reveal" key={name}>
                <div className="avatar">{initials}</div>
                <div className="name">{name}</div>
                <div className="role">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Investors — TODO: populate with real investors
      <section className="section paper">
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal">
            <span className="type-section">Backed by</span>
            <h2 className="type-heading" style={{ margin: '16px 0 0' }}>Investors who read the SDD.</h2>
          </div>
          <div className="logos-strip reveal" style={{ marginTop: '40px' }}>
            {['Bridge Lane', 'Polaris', 'Forecastle', 'Notable', 'Foundry 7', 'Quanta'].map((name) => (
              <div className="logo" key={name}>{name}</div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
      <section className="section dark tight" style={{ textAlign: 'center' }}>
        <div className="reveal" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 className="type-heading">Want to come build this?</h2>
          <p className="type-lede" style={{ marginTop: '18px' }}>We hire for taste, rigour, and the willingness to say &ldquo;we don&apos;t know&rdquo; out loud.</p>
          <div className="hero-actions" style={{ marginTop: '28px' }}>
            <Link href="#" className="btn btn-primary">Open positions</Link>
            <Link href="/contact" className="btn btn-ghost">Get in touch →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
