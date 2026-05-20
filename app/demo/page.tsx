'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ScrollEffects } from '@/components/scroll-effects'

const SAMPLES = {
  'path-traversal': {
    label: 'Path traversal',
    code: `# app/views/uploads.py
from flask import request, send_file
import os

UPLOAD_DIR = "/var/uploads"

def download(req):
    name = req.args["file"]
    path = os.path.join(UPLOAD_DIR, name)
    return send_file(path)`,
    finding: {
      title: 'Path traversal · unsanitised user input reaches file read',
      path: 'app/views/uploads.py · L7 (source) → L9 (sink)',
      sev: 'High · CWE-22',
      spec: 'path-traversal/flask-py',
      fp: 'a82d · 4e1f · 7c93 · strong',
    },
  },
  'sql-injection': {
    label: 'SQL injection',
    code: `# api/search.py
from flask import request
import db

def search():
    q = request.args["q"]
    rows = db.search(q)
    return rows`,
    finding: {
      title: 'SQL injection · user input flows into raw query',
      path: 'api/search.py · L5 (source) → db/raw.py · L91 (sink)',
      sev: 'High · CWE-89',
      spec: 'sql-injection/flask-py',
      fp: '9f2c · 1a8e · 3d74 · strong',
    },
  },
  ssrf: {
    label: 'SSRF',
    code: `# services/fetch.py
import requests
from flask import request

def proxy():
    url = request.args["url"]
    resp = requests.get(url)
    return resp.content`,
    finding: {
      title: 'SSRF · user-controlled URL passed to HTTP client',
      path: 'services/fetch.py · L5 (source) → L6 (sink)',
      sev: 'High · CWE-918',
      spec: 'ssrf/requests-py',
      fp: 'c1e9 · 5b4a · 2f87 · strong',
    },
  },
  clean: {
    label: 'Clean code',
    code: `# api/files.py
import os
from pathlib import Path

BASE = Path("/var/uploads").resolve()

def safe_download(name: str) -> Path:
    target = (BASE / name).resolve()
    if not str(target).startswith(str(BASE)):
        raise ValueError("path escape rejected")
    return target`,
    finding: null,
  },
}

export default function DemoPage() {
  const [active, setActive] = useState<keyof typeof SAMPLES>('path-traversal')
  const sample = SAMPLES[active]

  return (
    <>
      <SiteNav activePage="demo" />
      <ScrollEffects />

      <section className="page-head">
        <span className="type-section">Interactive demo</span>
        <h1 className="type-heading">See a finding, end to end.</h1>
        <p className="type-lede">Select a sample or paste your own code. The sandbox simulates the IFDS analysis and returns a finding with a full taint witness.</p>
      </section>

      <section className="section bone" style={{ paddingTop: '0' }}>
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
          {/* Sample selector */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {(Object.entries(SAMPLES) as [keyof typeof SAMPLES, typeof SAMPLES[keyof typeof SAMPLES]][]).map(([key, s]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                style={{
                  background: active === key ? 'rgba(29,13,62,0.04)' : 'transparent',
                  border: `1px solid ${active === key ? 'var(--scan-plum-900)' : 'rgba(29,13,62,0.16)'}`,
                  color: active === key ? 'var(--scan-plum-900)' : 'var(--scan-graphite)',
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="try-row">
            <div className="try-pane">
              <h4>Input · python</h4>
              <pre className="code-pad" style={{ minHeight: '280px', whiteSpace: 'pre-wrap' }}>
                {sample.code}
              </pre>
            </div>

            <div className="try-pane">
              <h4>{sample.finding ? 'Output · 1 finding' : 'Output · no findings'}</h4>
              <div className="try-output">
                {sample.finding ? (
                  <div className="f-out">
                    <div className="f-row">
                      <div className="f-top">
                        <span className="chip chip-sev-high">{sample.finding.sev}</span>
                        <span className="chip chip-core">Deterministic-core</span>
                      </div>
                      <div className="f-title">{sample.finding.title}</div>
                      <div className="f-path">{sample.finding.path}</div>
                      <div className="f-meta">
                        <div><div className="k">fingerprint</div><div className="v">{sample.finding.fp}</div></div>
                        <div><div className="k">spec</div><div className="v">{sample.finding.spec}</div></div>
                        <div><div className="k">S_version</div><div className="v">specs@2026.05.14-r2</div></div>
                        <div><div className="k">env_digest</div><div className="v">sha256:c1b…a89</div></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px', color: 'var(--scan-fog)' }}>
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.4 }}><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
                    <span style={{ fontFamily: 'var(--font-note)', fontStyle: 'italic', fontSize: '15px' }}>No findings. The input is clean.</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '32px', padding: '24px', background: 'var(--scan-paper)', borderRadius: '16px', border: '1px solid rgba(29,13,62,0.06)' }}>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--scan-graphite)', lineHeight: '1.6' }}>
              <strong style={{ color: 'var(--scan-plum-900)' }}>Note:</strong> This sandbox simulates the IFDS analysis. In production, scanipy runs a full code-property graph construction over your repository, replays only the affected slice on incremental commits, and signs every finding with a provenance chain.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark tight" style={{ textAlign: 'center' }}>
        <div className="reveal" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 className="type-heading">Scan your own repository.</h2>
          <p className="type-lede" style={{ marginTop: '18px' }}>Connect your SCM in a minute. No agents, no infrastructure changes.</p>
          <div className="hero-actions" style={{ marginTop: '28px' }}>
            <Link href="/signin#signup" className="btn btn-primary">Start free scan →</Link>
            <Link href="/pricing" className="btn btn-ghost">See pricing</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
