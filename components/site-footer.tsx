import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="scn-footer">
      <div className="scn-footer-grid">
        <div className="scn-footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/scanipy-mark-light.svg" width={26} alt="" />
            <span className="wordmark">scanipy</span>
          </div>
          <p>Static security analysis with reproducibility, incrementality, and machine-checkable provenance. Built for engineering teams that audit their own results.</p>
        </div>
        <div>
          <h5>Product</h5>
          <ul>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/demo">Demo</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="#">Changelog</Link></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="#">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <li><Link href="/docs">Documentation</Link></li>
            <li><Link href="#">Determinism whitepaper</Link></li>
            <li><Link href="#">Honest-labeling ledger</Link></li>
            <li><Link href="#">Open source</Link></li>
          </ul>
        </div>
        <div>
          <h5>Trust</h5>
          <ul>
            <li><Link href="#">SOC 2 Type II</Link></li>
            <li><Link href="#">Security</Link></li>
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="scn-footer-bottom">
        <span>© {new Date().getFullYear()} scanipy, inc. All rights reserved.</span>
        <span className="note">made for teams that read their own results.</span>
      </div>
    </footer>
  )
}
