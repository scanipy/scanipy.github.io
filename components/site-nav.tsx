'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/theme-toggle'
import { DemoCTA } from '@/components/demo-cta'

interface SiteNavProps {
  /**
   * Show the "Docs" link in the nav. The marketing homepage hides it
   * (the page is for prospects, not CLI users); the CLI page and the
   * docs route surface it.
   */
  showDocs?: boolean
}

/**
 * Floating-pill primary nav, shared across `/`, `/cli`, and `/docs/*`.
 * The link set is context-sensitive via {@link SiteNavProps.showDocs}.
 * The single CTA is `<DemoCTA />`.
 */
export function SiteNav({ showDocs = false }: SiteNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks: { href: string; label: string }[] = [
    { href: '/cli', label: 'CLI' },
  ]
  if (showDocs) {
    navLinks.push({ href: '/docs', label: 'Docs' })
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
      <div className="bg-background/70 backdrop-blur-xl border border-border/50 rounded-full px-4 py-2.5 flex items-center justify-between shadow-lg shadow-primary/5">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/scanipy-logo.svg"
            alt="Scanipy Logo"
            className="w-7 h-7"
          />
          <span className="font-bold text-lg text-foreground">scanipy</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/60 hover:text-foreground px-3 py-1.5 rounded-full hover:bg-muted/50 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <DemoCTA
            size="sm"
            className="rounded-full h-8 hidden sm:inline-flex"
          />
          <ThemeToggle />

          {/* Mobile sheet */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden rounded-full h-8 w-8 p-0"
                aria-label="Open menu"
              >
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img
                    src="/scanipy-logo.svg"
                    alt="Scanipy Logo"
                    className="w-6 h-6"
                  />
                  scanipy
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground/70 hover:text-foreground py-3 px-3 rounded-lg hover:bg-muted/50 transition text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <Separator className="my-2" />
                <div className="py-2 px-1">
                  <DemoCTA size="default" className="w-full" />
                </div>
                <Separator className="my-2" />
                <div className="flex items-center justify-between py-3 px-3">
                  <span className="text-sm font-medium text-foreground/70">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
