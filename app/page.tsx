'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import {
  ChevronRight, Zap, Shield, Search, Code2, Github, ExternalLink,
  Terminal, Menu, BookOpen, Bug, Users, Lock, Star, RotateCcw, FileCode,
  ArrowRight, CheckCircle2, Circle, Sparkles
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#use-cases', label: 'Use Cases' },
    { href: '#getting-started', label: 'Getting Started' },
    { href: '/docs', label: 'Docs' },
    { href: '#support', label: 'Support' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      {/* ─── Floating Pill Navbar ─── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
        <div className="bg-background/70 backdrop-blur-xl border border-border/50 rounded-full px-4 py-2.5 flex items-center justify-between shadow-lg shadow-primary/5">
          <Link href="/" className="flex items-center gap-2">
            <img src="/scanipy-logo.svg" alt="Scanipy Logo" className="w-7 h-7" />
            <span className="font-bold text-lg text-foreground">scanipy</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/60 hover:text-foreground px-3 py-1.5 rounded-full hover:bg-muted/50 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <Link href="https://github.com/papadoxie/scanipy" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="rounded-full gap-1.5 h-8">
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">GitHub</span>
              </Button>
            </Link>

            <ThemeToggle />

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden rounded-full h-8 w-8 p-0">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <img src="/scanipy-logo.svg" alt="Scanipy Logo" className="w-6 h-6" />
                    scanipy
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 px-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-foreground/70 hover:text-foreground py-3 px-3 rounded-lg hover:bg-muted/50 transition text-sm font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Separator className="my-2" />
                  <Link
                    href="https://github.com/papadoxie/scanipy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/70 hover:text-foreground py-3 px-3 rounded-lg hover:bg-muted/50 transition text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </Link>
                  <Separator className="my-2" />
                  <div className="flex items-center justify-between py-3 px-3">
                    <span className="text-sm font-medium text-foreground/70">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* ─── Hero: Split Layout ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Open Source Security Scanner
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Find Vulnerabilities
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                in Open Source Code
              </span>
            </h1>

            <p className="text-lg text-foreground/60 max-w-lg leading-relaxed">
              A powerful Python CLI tool that scans GitHub repositories for security patterns and vulnerable code. Run Semgrep and CodeQL analysis at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="#getting-started" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="https://github.com/papadoxie/scanipy" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto rounded-full bg-transparent">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Button>
              </Link>
            </div>

            {/* Inline stats */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground/60"><strong className="text-foreground">1M+</strong> repos scanned</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground/60"><strong className="text-foreground">3</strong> analysis engines</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-sm text-foreground/60"><strong className="text-foreground">Real-time</strong> scanning</span>
              </div>
            </div>
          </div>

          {/* Right: Terminal mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-2xl blur-xl -z-10 scale-105" />
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-foreground/40 ml-2 font-mono">terminal</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-3 leading-relaxed">
                <div>
                  <span className="text-accent">$</span>{' '}
                  <span className="text-foreground">pip install scanipy-cli</span>
                </div>
                <div className="text-foreground/40">✓ Successfully installed scanipy-cli</div>
                <div className="mt-1">
                  <span className="text-accent">$</span>{' '}
                  <span className="text-foreground">scanipy --query &quot;extractall&quot; --language python</span>
                </div>
                <div className="text-foreground/40 space-y-1">
                  <div>
                    <span className="text-primary">⟐</span> Searching GitHub for pattern...
                  </div>
                  <div>
                    <span className="text-primary">⟐</span> Found <span className="text-accent">847</span> matching repositories
                  </div>
                  <div>
                    <span className="text-primary">⟐</span> Cloning top results by stars...
                  </div>
                </div>
                <div className="mt-1">
                  <span className="text-accent">$</span>{' '}
                  <span className="text-foreground">scanipy --run-semgrep --output results.json</span>
                </div>
                <div className="text-foreground/40 space-y-1">
                  <div>
                    <span className="text-green-500">✓</span> Semgrep scan complete —{' '}
                    <span className="text-destructive">12 findings</span> across 5 repos
                  </div>
                </div>
                <div className="flex items-center gap-1 text-foreground/20 mt-1">
                  <span className="text-accent">$</span>{' '}
                  <span className="w-2 h-4 bg-foreground/40 animate-pulse" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── Features: Bento Grid with Tabs ─── */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            <Zap className="w-3 h-3 mr-1.5" />
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Powerful Security Toolkit
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Built for developers and security researchers who need to find and analyze vulnerable patterns at scale.
          </p>
        </div>

        <Tabs defaultValue="analysis" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50 backdrop-blur-sm rounded-full p-1">
              <TabsTrigger value="analysis" className="rounded-full px-5 gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                Analysis
              </TabsTrigger>
              <TabsTrigger value="discovery" className="rounded-full px-5 gap-1.5">
                <Search className="w-3.5 h-3.5" />
                Discovery
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Analysis Tab */}
          <TabsContent value="analysis">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Large card — Semgrep */}
              <Card className="md:col-span-2 md:row-span-2 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Semgrep Integration</h3>
                <p className="text-foreground/60 leading-relaxed mb-6 max-w-md">
                  Automatically clone and run Semgrep analysis on discovered repositories. Use built-in security rules or provide your own custom patterns for targeted scanning.
                </p>
                <div className="font-mono text-sm bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <span className="text-accent">$</span>{' '}
                  <span className="text-foreground/80">scanipy --query &quot;eval&quot; --run-semgrep --semgrep-rules p/security-audit</span>
                </div>
              </Card>

              {/* CodeQL */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all group">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">CodeQL Analysis</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Deep semantic security scanning. Detect complex vulnerabilities that require code flow analysis.
                </p>
              </Card>

              {/* Custom Rules */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all group">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition">
                  <FileCode className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Custom Rules</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Write your own patterns for specialized security research with full flexibility.
                </p>
              </Card>
            </div>
          </TabsContent>

          {/* Discovery Tab */}
          <TabsContent value="discovery">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Large card — Smart Search */}
              <Card className="md:col-span-2 md:row-span-2 p-8 bg-gradient-to-br from-accent/5 to-secondary/5 border border-border/50 hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition">
                  <Search className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Smart Code Search</h3>
                <p className="text-foreground/60 leading-relaxed mb-6 max-w-md">
                  Search GitHub for specific code patterns across millions of repositories. Filter by keywords and prioritize results by project popularity.
                </p>
                <div className="font-mono text-sm bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <span className="text-accent">$</span>{' '}
                  <span className="text-foreground/80">scanipy --query &quot;pickle.loads&quot; --language python --min-stars 100</span>
                </div>
              </Card>

              {/* Tiered Star Search */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Tiered Star Search</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Prioritize well-maintained repositories by searching in star tiers. Focus on the most impactful projects.
                </p>
              </Card>

              {/* Resume Capability */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all group">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition">
                  <RotateCcw className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Resume Capability</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Pause and resume interrupted analysis without losing progress. Perfect for large-scale scans.
                </p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* ─── Use Cases: Timeline ─── */}
      <section id="use-cases" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Shield className="w-3 h-3 mr-1.5" />
            Real-World Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            From Search to CVE
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            See how Scanipy helps discover real vulnerabilities in popular open source projects.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary" />

            {/* Step 1: Search */}
            <div className="relative flex gap-6 pb-10">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-foreground mb-1">Search for Patterns</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Use Scanipy to search GitHub for dangerous code patterns like <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">pickle.loads</code> across Python repositories.
                </p>
              </div>
            </div>

            {/* Step 2: Clone & Scan */}
            <div className="relative flex gap-6 pb-10">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center z-10">
                <Terminal className="w-5 h-5 text-accent" />
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-foreground mb-1">Clone & Analyze</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Scanipy automatically clones matching repos and runs Semgrep analysis with security-focused rule sets.
                </p>
              </div>
            </div>

            {/* Step 3: Discover */}
            <div className="relative flex gap-6 pb-10">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center z-10">
                <Bug className="w-5 h-5 text-secondary" />
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-foreground mb-1">Discover Vulnerabilities</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Review findings, confirm the vulnerability, and prepare a responsible disclosure.
                </p>
              </div>
            </div>

            {/* Step 4: CVE — highlighted */}
            <div className="relative flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary border-2 border-primary flex items-center justify-center z-10">
                <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-primary text-primary-foreground">CVE-2025-61765</Badge>
                    <ExternalLink className="w-4 h-4 text-foreground/30" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Unsafe Pickle Deserialization</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-3">
                    <strong className="text-foreground">python-socketio</strong> — Arbitrary code execution (RCE) through malicious pickle deserialization in multi-server deployments.
                    <br />
                    <span className="text-foreground/50">Discoverer: locus-x64</span>
                  </p>
                  <div className="flex items-center gap-2 text-xs text-foreground/50">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Found using Scanipy pattern matching
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center pt-10">
            <p className="text-foreground/60 text-sm mb-4">
              Found a vulnerability using Scanipy? We&apos;d love to hear about it!
            </p>
            <Link href="https://github.com/papadoxie/scanipy/issues" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 rounded-full bg-transparent">
                <Github className="w-4 h-4" />
                Report Your Finding
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Getting Started: Tabs + Accordion ─── */}
      <section id="getting-started" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
            <Terminal className="w-3 h-3 mr-1.5" />
            Quick Start
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Get Started in Minutes
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            From install to first scan in under a minute.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="install" className="w-full">
            <TabsList className="w-full bg-muted/50 backdrop-blur-sm rounded-xl p-1 grid grid-cols-4">
              <TabsTrigger value="install" className="rounded-lg text-xs sm:text-sm">Install</TabsTrigger>
              <TabsTrigger value="configure" className="rounded-lg text-xs sm:text-sm">Configure</TabsTrigger>
              <TabsTrigger value="search" className="rounded-lg text-xs sm:text-sm">Search</TabsTrigger>
              <TabsTrigger value="analyze" className="rounded-lg text-xs sm:text-sm">Analyze</TabsTrigger>
            </TabsList>

            <TabsContent value="install" className="mt-6">
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/30 border-b border-border/50">
                  <Circle className="w-2.5 h-2.5 text-foreground/20" />
                  <span className="text-xs text-foreground/40 font-mono">step 1 — install</span>
                </div>
                <div className="p-6">
                  <p className="text-foreground/60 text-sm mb-4">Install Scanipy from PyPI with a single command:</p>
                  <div className="font-mono text-sm bg-muted/30 rounded-lg p-4 border border-border/30">
                    <span className="text-accent">$</span> <span className="text-foreground">pip install scanipy-cli</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="configure" className="mt-6">
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/30 border-b border-border/50">
                  <Circle className="w-2.5 h-2.5 text-foreground/20" />
                  <span className="text-xs text-foreground/40 font-mono">step 2 — configure</span>
                </div>
                <div className="p-6">
                  <p className="text-foreground/60 text-sm mb-4">Set your GitHub token for API access:</p>
                  <div className="font-mono text-sm bg-muted/30 rounded-lg p-4 border border-border/30">
                    <span className="text-accent">$</span> <span className="text-foreground">export GITHUB_TOKEN=&quot;your_token_here&quot;</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="search" className="mt-6">
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/30 border-b border-border/50">
                  <Circle className="w-2.5 h-2.5 text-foreground/20" />
                  <span className="text-xs text-foreground/40 font-mono">step 3 — search</span>
                </div>
                <div className="p-6">
                  <p className="text-foreground/60 text-sm mb-4">Search for vulnerable code patterns across GitHub:</p>
                  <div className="font-mono text-sm bg-muted/30 rounded-lg p-4 border border-border/30">
                    <span className="text-accent">$</span> <span className="text-foreground">scanipy --query &quot;extractall&quot; --language python</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="analyze" className="mt-6">
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/30 border-b border-border/50">
                  <Circle className="w-2.5 h-2.5 text-foreground/20" />
                  <span className="text-xs text-foreground/40 font-mono">step 4 — analyze</span>
                </div>
                <div className="p-6">
                  <p className="text-foreground/60 text-sm mb-4">Run Semgrep analysis on the discovered repositories:</p>
                  <div className="font-mono text-sm bg-muted/30 rounded-lg p-4 border border-border/30">
                    <span className="text-accent">$</span> <span className="text-foreground">scanipy --query &quot;extractall&quot; --language python --run-semgrep</span>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Requirements Accordion */}
          <div className="mt-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="requirements" className="border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="hover:no-underline">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Code2 className="w-4 h-4 text-primary" />
                    Setup Requirements
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground text-sm">Python 3.8+</span>
                        <p className="text-foreground/50 text-xs">Required runtime</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground text-sm">GitHub Token</span>
                        <p className="text-foreground/50 text-xs">For API access</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground text-sm">Semgrep</span>
                        <p className="text-foreground/50 text-xs">Optional — static analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground text-sm">CodeQL</span>
                        <p className="text-foreground/50 text-xs">Optional — semantic analysis</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center pt-8">
            <Link href="docs/installation" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                Read Full Installation Guide
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Docs + Support: Consolidated CTA Strip ─── */}
      <section id="support" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-border/50 rounded-2xl relative overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -z-0" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  Documentation & Community
                </h2>
                <p className="text-foreground/60 max-w-lg">
                  Comprehensive guides, active community, and open source collaboration. Get the help you need.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Link href="/docs">
                  <Card className="p-4 bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all text-center group cursor-pointer h-full">
                    <BookOpen className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-foreground">Docs</span>
                  </Card>
                </Link>
                <Link href="https://github.com/papadoxie/scanipy/issues" target="_blank" rel="noopener noreferrer">
                  <Card className="p-4 bg-card/60 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all text-center group cursor-pointer h-full">
                    <Bug className="w-5 h-5 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-foreground">Issues</span>
                  </Card>
                </Link>
                <Link href="https://github.com/papadoxie/scanipy#-contributing" target="_blank" rel="noopener noreferrer">
                  <Card className="p-4 bg-card/60 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all text-center group cursor-pointer h-full">
                    <Users className="w-5 h-5 text-secondary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-foreground">Contribute</span>
                  </Card>
                </Link>
                <Link href="https://github.com/papadoxie/scanipy/security" target="_blank" rel="noopener noreferrer">
                  <Card className="p-4 bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all text-center group cursor-pointer h-full">
                    <Lock className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-foreground">Security</span>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* ─── Footer: Slim ─── */}
      <footer className="border-t border-border/50 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/scanipy-logo.svg" alt="Scanipy Logo" className="w-5 h-5" />
              <span className="text-sm text-foreground/60">
                © {new Date().getFullYear()} Scanipy. Built with ❤️ for the security research community.
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/docs" className="text-foreground/50 hover:text-foreground transition">
                Docs
              </Link>
              <Link href="https://github.com/papadoxie/scanipy/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition">
                Changelog
              </Link>
              <Link href="https://github.com/papadoxie/scanipy/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition">
                MIT License
              </Link>
              <Link href="https://github.com/papadoxie/scanipy" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition">
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
