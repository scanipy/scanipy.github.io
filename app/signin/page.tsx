'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SigninPage() {
  const [tab, setTab] = useState<'in' | 'up'>('in')

  return (
    <div className="signin-wrap">
      {/* Aside */}
      <aside className="signin-aside" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/scanipy-mark-light.svg" width={28} alt="" />
          <Link href="/" style={{ fontFamily: 'var(--font-title)', fontSize: '32px', lineHeight: '1', color: 'var(--scan-bone)', textDecoration: 'none' }}>scanipy</Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <p className="blurb" style={{ textAlign: 'left' }}>
            &ldquo;It&apos;s the first SAST result our auditors stopped arguing with. The finding either reproduces or it doesn&apos;t. Done.&rdquo;
          </p>
        </div>

      </aside>

      {/* Main */}
      <main className="signin-main">
        <div style={{ maxWidth: '380px', width: '100%', margin: '0 auto' }}>
          <h1>Welcome.</h1>
          <p className="type-body" style={{ color: 'var(--scan-graphite)', margin: '6px 0 0' }}>Sign in or sign up. Takes a minute.</p>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid rgba(29,13,62,0.1)', marginTop: '24px' }}>
            {(['in', 'up'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  background: 'none', border: 'none',
                  padding: '12px 0', marginRight: '28px',
                  fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '15px',
                  color: tab === t ? 'var(--scan-plum-900)' : 'var(--scan-fog)',
                  borderBottom: `2px solid ${tab === t ? 'var(--scan-berry-600)' : 'transparent'}`,
                  marginBottom: '-1px', cursor: 'pointer',
                  transition: 'color 200ms, border-color 200ms',
                }}
              >
                {t === 'in' ? 'Sign in' : 'Sign up'}
              </button>
            ))}
          </div>

          {tab === 'in' && (
            <div style={{ marginTop: '28px' }}>
              <div className="sso">
                <button type="button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.78-.25.78-.55v-2c-3.2.69-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.79.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" /></svg>
                  Continue with GitHub
                </button>
                <button type="button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FC6D26"><path d="M22.018 13.298L12.643 22.667l-9.376-9.369c-.66-.66-.992-1.527-.992-2.394 0-.866.331-1.732.992-2.394L11.638 0 22.018 10.38c1.32 1.319 1.32 3.59 0 4.92z" /></svg>
                  Continue with GitLab
                </button>
                <button type="button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                  Continue with SSO (SAML)
                </button>
              </div>
              <div className="or">or</div>
              <form className="scn-form" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="i-email">Work email</label>
                  <input id="i-email" type="email" required placeholder="you@team.com" />
                </div>
                <div>
                  <label htmlFor="i-pw">Password</label>
                  <input id="i-pw" type="password" required placeholder="••••••••" />
                </div>
                <button className="btn btn-primary" type="submit">Sign in →</button>
              </form>
              <p style={{ fontSize: '13px', color: 'var(--scan-fog)', marginTop: '20px', lineHeight: '1.5' }}>
                Forgot your password? <a href="#" style={{ color: 'var(--scan-berry-600)' }}>Reset it.</a>
              </p>
            </div>
          )}

          {tab === 'up' && (
            <div style={{ marginTop: '28px' }}>
              <div className="sso">
                <button type="button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.78-.25.78-.55v-2c-3.2.69-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.79.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" /></svg>
                  Sign up with GitHub
                </button>
                <button type="button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FC6D26"><path d="M22.018 13.298L12.643 22.667l-9.376-9.369c-.66-.66-.992-1.527-.992-2.394 0-.866.331-1.732.992-2.394L11.638 0 22.018 10.38c1.32 1.319 1.32 3.59 0 4.92z" /></svg>
                  Sign up with GitLab
                </button>
              </div>
              <div className="or">or</div>
              <form className="scn-form" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div>
                    <label htmlFor="u-name">Your name</label>
                    <input id="u-name" required placeholder="Avery Wong" />
                  </div>
                  <div>
                    <label htmlFor="u-email">Work email</label>
                    <input id="u-email" type="email" required placeholder="you@team.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="u-pw">Password</label>
                  <input id="u-pw" type="password" required minLength={10} placeholder="At least 10 characters" />
                </div>
                <label style={{ fontWeight: 400, fontSize: '13.5px', color: 'var(--scan-graphite)', display: 'flex', gap: '8px', alignItems: 'flex-start', lineHeight: '1.5' }}>
                  <input type="checkbox" required style={{ width: 'auto', marginTop: '4px' }} />
                  <span>I agree to the <a href="#" style={{ color: 'var(--scan-berry-600)' }}>terms of service</a> and the <a href="#" style={{ color: 'var(--scan-berry-600)' }}>privacy policy</a>.</span>
                </label>
                <button className="btn btn-primary" type="submit">Create account →</button>
              </form>
              <p style={{ fontSize: '13px', color: 'var(--scan-fog)', marginTop: '20px', lineHeight: '1.5' }}>
                Free forever for one repository. No card required. Upgrade only if you outgrow it.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
