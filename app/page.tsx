'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Zap, Shield, Search, Code2, Github, ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">scanipy</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition">Features</a>
            <a href="#use-cases" className="text-sm text-foreground/70 hover:text-foreground transition">Use Cases</a>
            <a href="#getting-started" className="text-sm text-foreground/70 hover:text-foreground transition">Getting Started</a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition">Support</a>
          </div>
          <Link href="https://github.com/scanipy/scanipy" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge className="mx-auto bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
            <Zap className="w-3 h-3 mr-2" />
            Open Source Security Scanner
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
            Find Vulnerabilities in Open Source Code
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance leading-relaxed">
            Scanipy is a powerful Python CLI tool that scans GitHub repositories for security patterns and vulnerable code. Automatically run Semgrep and CodeQL analysis at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="https://github.com/scanipy/scanipy#-quick-start" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 w-full sm:w-auto bg-primary hover:bg-primary/90">
                Get Started
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://github.com/scanipy/scanipy" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-transparent">
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 bg-card border border-border/50 hover:border-border transition">
            <div className="text-3xl font-bold text-primary mb-2">1M+</div>
            <p className="text-sm text-foreground/70">GitHub repositories scanned</p>
          </Card>
          <Card className="p-8 bg-card border border-border/50 hover:border-border transition">
            <div className="text-3xl font-bold text-secondary mb-2">Real-time</div>
            <p className="text-sm text-foreground/70">Pattern matching and analysis</p>
          </Card>
          <Card className="p-8 bg-card border border-border/50 hover:border-border transition">
            <div className="text-3xl font-bold text-accent mb-2">3 Tools</div>
            <p className="text-sm text-foreground/70">GitHub API, Semgrep, CodeQL</p>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Powerful Features for Security Research
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
            Built for developers and security professionals who need to find and analyze vulnerable patterns at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <Card className="p-8 bg-card border border-border/50 hover:border-border transition group cursor-pointer">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/15 transition">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Smart Code Search</h3>
            <p className="text-foreground/70 leading-relaxed">
              Search GitHub for specific code patterns across millions of repositories. Filter by keywords and prioritize results by project popularity.
            </p>
          </Card>

          {/* Feature 2 */}
          <Card className="p-8 bg-card border border-border/50 hover:border-border transition group cursor-pointer">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/15 transition">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Semgrep Integration</h3>
            <p className="text-foreground/70 leading-relaxed">
              Automatically clone and run Semgrep analysis on discovered repositories. Use built-in security rules or provide your own custom patterns.
            </p>
          </Card>

          {/* Feature 3 */}
          <Card className="p-8 bg-card border border-border/50 hover:border-border transition group cursor-pointer">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/15 transition">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">CodeQL Analysis</h3>
            <p className="text-foreground/70 leading-relaxed">
              Run deep semantic security scanning with CodeQL. Detect complex vulnerabilities that require code flow analysis.
            </p>
          </Card>

          {/* Feature 4 */}
          <Card className="p-8 bg-card border border-border/50 hover:border-border transition group cursor-pointer">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/15 transition">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Resume Capability</h3>
            <p className="text-foreground/70 leading-relaxed">
              Pause and resume interrupted analysis without losing progress. Perfect for large-scale scans and long-running operations.
            </p>
          </Card>

          {/* Feature 5 */}
          <Card className="p-8 bg-card border border-border/50 hover:border-border transition group cursor-pointer">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/15 transition">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Tiered Star Search</h3>
            <p className="text-foreground/70 leading-relaxed">
              Prioritize well-maintained repositories by searching in star tiers. Focus on the most important projects first.
            </p>
          </Card>

          {/* Feature 6 */}
          <Card className="p-8 bg-card border border-border/50 hover:border-border transition group cursor-pointer">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/15 transition">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Custom Rules</h3>
            <p className="text-foreground/70 leading-relaxed">
              Leverage built-in security rules or write your own custom patterns. Full flexibility for specialized security research.
            </p>
          </Card>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Real-World Vulnerability Discovery
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
            Scanipy has been used to discover critical vulnerabilities in popular open source projects.
          </p>
        </div>

        <div className="space-y-6">
          {/* CVE Example */}
          <Card className="p-8 bg-card border border-border/50 hover:border-border transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge className="bg-primary text-primary-foreground mb-4">CVE-2025-61765</Badge>
                <h3 className="text-xl font-bold text-foreground mb-2">Unsafe Pickle Deserialization</h3>
              </div>
              <ExternalLink className="w-5 h-5 text-foreground/40" />
            </div>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              <span className="font-semibold">Project:</span> python-socketio — Arbitrary Python code execution (RCE) through malicious pickle deserialization in multi-server deployments. <span className="font-semibold">Discoverer:</span> locus-x64
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Found using Scanipy pattern matching
            </div>
          </Card>

          <div className="text-center pt-6">
            <p className="text-foreground/70 mb-4">
              Found a vulnerability using Scanipy? We'd love to hear about it!
            </p>
            <Link href="https://github.com/scanipy/scanipy/issues" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Github className="w-4 h-4" />
                Report Your Finding
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Get Started in Minutes
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
            Installation is straightforward. Get up and running with just a few commands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="p-6 bg-card border border-border/50 font-mono text-sm overflow-x-auto">
              <div className="text-foreground/60 mb-2"># Install from PyPI</div>
              <div className="text-foreground">pip install scanipy-cli</div>
            </Card>

            <Card className="p-6 bg-card border border-border/50 font-mono text-sm overflow-x-auto">
              <div className="text-foreground/60 mb-2"># Set your GitHub token</div>
              <div className="text-foreground">export GITHUB_TOKEN="your_token_here"</div>
            </Card>

            <Card className="p-6 bg-card border border-border/50 font-mono text-sm overflow-x-auto">
              <div className="text-foreground/60 mb-2"># Search for vulnerable patterns</div>
              <div className="text-foreground">scanipy --query "extractall" --language python</div>
            </Card>

            <Card className="p-6 bg-card border border-border/50 font-mono text-sm overflow-x-auto">
              <div className="text-foreground/60 mb-2"># Run with Semgrep analysis</div>
              <div className="text-foreground">scanipy --query "extractall" --language python --run-semgrep</div>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Setup Requirements</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><span className="font-semibold text-foreground">Python 3.8+</span> for running the tool</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span><span className="font-semibold text-foreground">GitHub Token</span> for accessing the GitHub API</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span><span className="font-semibold text-foreground">Semgrep</span> (optional) for static analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><span className="font-semibold text-foreground">CodeQL</span> (optional) for semantic analysis</span>
                </li>
              </ul>
            </div>

            <Link href="https://github.com/scanipy/scanipy#-installation" target="_blank" rel="noopener noreferrer">
              <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                Read Full Installation Guide
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Complete Documentation Available
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
              Dive deeper with comprehensive guides covering installation, usage, integrations, CLI reference, and development setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="https://github.com/scanipy/scanipy/tree/main/docs" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 bg-primary hover:bg-primary/90">
                  Read Documentation
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="https://github.com/scanipy/scanipy" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 bg-transparent">
                  View GitHub Repository
                  <Github className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* Contact/Support Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Get Support & Connect
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
              Have questions or want to contribute? We're an open source project and welcome community involvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border border-border/50 hover:border-border transition text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">GitHub Issues</h3>
              <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                Report bugs, request features, or discuss improvements on GitHub
              </p>
              <Link href="https://github.com/scanipy/scanipy/issues" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full bg-transparent">
                  Open Issue
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>

            <Card className="p-8 bg-card border border-border/50 hover:border-border transition text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Contributing</h3>
              <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                Help improve Scanipy by contributing code, documentation, or ideas
              </p>
              <Link href="https://github.com/scanipy/scanipy#-contributing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>

            <Card className="p-8 bg-card border border-border/50 hover:border-border transition text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Security</h3>
              <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                Found a security issue? Help us keep the community safe
              </p>
              <Link href="https://github.com/scanipy/scanipy/security" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full bg-transparent">
                  Security Policy
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-secondary-foreground rounded-lg flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-bold text-lg">scanipy</span>
              </div>
              <p className="text-secondary-foreground/70 text-sm">
                A powerful tool to scan open source code-bases for security vulnerabilities.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-secondary-foreground/70 hover:text-secondary-foreground transition">Features</a>
                </li>
                <li>
                  <a href="#use-cases" className="text-secondary-foreground/70 hover:text-secondary-foreground transition">Use Cases</a>
                </li>
                <li>
                  <a href="#getting-started" className="text-secondary-foreground/70 hover:text-secondary-foreground transition">Getting Started</a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary-foreground/70 hover:text-secondary-foreground transition">Support</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://github.com/scanipy/scanipy" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-secondary-foreground transition">GitHub Repository</Link>
                </li>
                <li>
                  <Link href="https://github.com/scanipy/scanipy/tree/main/docs" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-secondary-foreground transition">Documentation</Link>
                </li>
                <li>
                  <Link href="https://github.com/scanipy/scanipy/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-secondary-foreground transition">Changelog</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://github.com/scanipy/scanipy/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-secondary-foreground transition">MIT License</Link>
                </li>
                <li>
                  <Link href="https://github.com/scanipy/scanipy" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-secondary-foreground transition">Open Source</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/70">
            <p>© 2025 Scanipy. All rights reserved. Built with ❤️ for the security research community.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="https://github.com/scanipy/scanipy" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground transition">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
