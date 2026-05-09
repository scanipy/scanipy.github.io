'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ChevronDown, Github, BookOpen, Terminal, BookText } from 'lucide-react'
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
   * Reserved for backwards compatibility — the redesigned nav surfaces
   * Docs through the Resources dropdown on every page, so the prop is
   * accepted but no longer changes the desktop link set.
   */
  showDocs?: boolean
  /**
   * When set, swaps the chrome to the dark-hero variant: transparent
   * background, light text, light borders. Used on `/` so the nav
   * blends with the dark hero band.
   */
  variant?: 'default' | 'on-dark'
}

const PRIMARY_LINKS: { href: string; label: string }[] = [
  { href: '/platform', label: 'Platform' },
  { href: '/detectors', label: 'Detectors' },
  { href: '/pricing', label: 'Pricing' },
]

const RESOURCE_LINKS: {
  href: string
  label: string
  description: string
  external?: boolean
  icon: React.ComponentType<{ className?: string }>
}[] = [
  {
    href: '/docs',
    label: 'Documentation',
    description: 'CLI install, configuration, and reference',
    icon: BookOpen,
  },
  {
    href: '/cli',
    label: 'Open-source CLI',
    description: 'The free, MIT command-line scanner',
    icon: Terminal,
  },
  {
    href: '/research',
    label: 'Research',
    description: 'The published work that informed Scanipy',
    icon: BookText,
  },
  {
    href: 'https://github.com/papadoxie/scanipy',
    label: 'GitHub',
    description: 'Source code and releases',
    external: true,
    icon: Github,
  },
]

/**
 * The primary site nav. Full-width top bar with the brand mark on the
 * left, four primary links in the centre (Platform, Detectors, Pricing,
 * and a Resources dropdown), and the theme toggle + Demo CTA on the
 * right. Mobile collapses everything into a sheet.
 *
 * `variant="on-dark"` is used on the `/` hero so the nav inherits the
 * dark band's surface — same component, different chrome.
 */
export function SiteNav({ variant = 'default' }: SiteNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isDark = variant === 'on-dark'

  const barClass = isDark
    ? 'border-white/10 bg-[#0f0a12]/80 supports-[backdrop-filter]:bg-[#0f0a12]/60'
    : 'border-border/50 bg-background/85 supports-[backdrop-filter]:bg-background/70'
  const linkClass = isDark
    ? 'text-white/70 hover:text-white'
    : 'text-foreground/65 hover:text-foreground'
  const brandTextClass = isDark ? 'text-white' : 'text-foreground'
  const dividerClass = isDark ? 'bg-white/10' : 'bg-border/60'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b backdrop-blur-xl ${barClass}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/scanipy-logo.svg"
            alt=""
            className="w-7 h-7"
          />
          <span className={`font-bold text-lg tracking-tight ${brandTextClass}`}>
            scanipy
          </span>
        </Link>

        {/* Desktop primary links + Resources dropdown */}
        <div className="hidden md:flex items-center gap-1">
          {PRIMARY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3 py-2 rounded-md transition ${linkClass}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Resources dropdown — group-hover/focus-within driven, no JS */}
          <div className="relative group">
            <button
              type="button"
              className={`text-sm font-medium px-3 py-2 rounded-md transition inline-flex items-center gap-1 ${linkClass}`}
              aria-haspopup="true"
            >
              Resources
              <ChevronDown className="w-3.5 h-3.5 transition group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>
            <div
              className="absolute right-0 top-full pt-3 hidden group-hover:block group-focus-within:block"
              role="menu"
            >
              <div className="w-80 bg-popover border border-border/60 rounded-xl shadow-lg p-2">
                {RESOURCE_LINKS.map((link) => {
                  const Icon = link.icon
                  const linkProps = link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {}
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      {...linkProps}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition group/item"
                    >
                      <Icon className="w-4 h-4 mt-0.5 text-foreground/55 group-hover/item:text-foreground transition" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {link.label}
                        </p>
                        <p className="text-xs text-foreground/55 leading-snug mt-0.5">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right rail: theme toggle + demo CTA */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <div
            className={`hidden sm:block w-px h-5 ${dividerClass}`}
            aria-hidden
          />
          <DemoCTA size="sm" className="hidden sm:inline-flex h-9" />

          {/* Mobile sheet */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`md:hidden h-9 w-9 p-0 ${
                  isDark ? 'text-white hover:bg-white/10' : ''
                }`}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img
                    src="/scanipy-logo.svg"
                    alt=""
                    className="w-6 h-6"
                  />
                  scanipy
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {PRIMARY_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground/75 hover:text-foreground py-3 px-3 rounded-lg hover:bg-muted/50 transition text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <Separator className="my-2" />
                <p className="px-3 py-1 text-[11px] uppercase tracking-wider text-foreground/45 font-medium">
                  Resources
                </p>
                {RESOURCE_LINKS.map((link) => {
                  const linkProps = link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {}
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      {...linkProps}
                      className="text-foreground/75 hover:text-foreground py-3 px-3 rounded-lg hover:bg-muted/50 transition text-sm"
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <Separator className="my-2" />
                <div className="py-2 px-1">
                  <DemoCTA size="default" className="w-full" />
                </div>
                <div className="flex items-center justify-between py-3 px-3">
                  <span className="text-sm font-medium text-foreground/75">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
