'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

interface SiteNavProps {
  activePage?: 'product' | 'demo' | 'pricing' | 'blog' | 'company'
}

export function SiteNav({ activePage }: SiteNavProps) {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const darkSections = document.querySelectorAll(
      '.section.dark, .sticky-three, .page-head.dark, .scn-footer'
    )

    function updateNav() {
      if (!nav) return
      const navMid = window.scrollY + 32
      let onDark = false
      darkSections.forEach((sec) => {
        const el = sec as HTMLElement
        const top = el.offsetTop
        const bottom = top + el.offsetHeight
        if (navMid >= top && navMid < bottom) onDark = true
      })
      nav.classList.toggle('is-dark', onDark)
    }

    updateNav()
    window.addEventListener('scroll', updateNav, { passive: true })
    window.addEventListener('resize', updateNav)
    return () => {
      window.removeEventListener('scroll', updateNav)
      window.removeEventListener('resize', updateNav)
    }
  }, [])

  return (
    <nav className="scn-nav" id="scn-nav" ref={navRef}>
      <div className="scn-nav-inner">
        <Link href="/" className="scn-nav-brand">
          <img src="/scanipy-mark-berry.svg" alt="" width={24} height={24} />
          <span className="wordmark">scanipy</span>
        </Link>
        <div className="scn-nav-links">
          <Link href="/features" className={activePage === 'product' ? 'is-active' : ''}>Product</Link>
          <Link href="/demo" className={activePage === 'demo' ? 'is-active' : ''}>Demo</Link>
          <Link href="/pricing" className={activePage === 'pricing' ? 'is-active' : ''}>Pricing</Link>
          <Link href="/blog" className={activePage === 'blog' ? 'is-active' : ''}>Blog</Link>
          <Link href="/about" className={activePage === 'company' ? 'is-active' : ''}>Company</Link>
        </div>
        <div className="scn-nav-actions">
          <Link href="/signin" className="btn btn-link">Sign in <span className="arr">→</span></Link>
          <Link href="/signin#signup" className="btn btn-primary">Try free</Link>
        </div>
      </div>
    </nav>
  )
}
