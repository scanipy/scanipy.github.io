import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Search, Shield, Zap, Code2, Terminal, BookOpen,
  ArrowRight, Github, ChevronRight, Database,
  Container, RotateCcw, Palette, FileCode, Bug,
  Layers, Cpu, Workflow, Rocket,
} from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Smart Code Search',
    desc: 'Search GitHub for code patterns across millions of repositories with tiered star-based ranking.',
  },
  {
    icon: Shield,
    title: 'Semgrep Integration',
    desc: 'Automatically clone and scan top repositories with Semgrep for security vulnerabilities.',
  },
  {
    icon: Code2,
    title: 'CodeQL Analysis',
    desc: 'Run deep semantic security scanning powered by GitHub\'s CodeQL engine.',
  },
  {
    icon: Container,
    title: 'Containerized Execution',
    desc: 'Run parallel scans using Kubernetes Jobs with EKS-ready deployments.',
  },
  {
    icon: Database,
    title: 'Database Support',
    desc: 'SQLite for local dev, PostgreSQL for production. Full schema migration support.',
  },
  {
    icon: RotateCcw,
    title: 'Resume Capability',
    desc: 'Resume interrupted analysis from where it left off. Never lose progress.',
  },
]

const gettingStarted = [
  { title: 'Installation', href: '/docs/installation', desc: 'Set up Scanipy and dependencies', icon: Rocket },
  { title: 'Usage Guide', href: '/docs/usage', desc: 'Learn basic and advanced usage', icon: BookOpen },
  { title: 'CLI Reference', href: '/docs/cli-reference', desc: 'Complete command-line options', icon: Terminal },
  { title: 'Examples', href: '/docs/examples', desc: 'Real-world usage examples', icon: FileCode },
]

const sections = [
  {
    category: 'Integrations',
    color: 'text-accent',
    items: [
      { title: 'Semgrep', href: '/docs/semgrep', desc: 'Static analysis scanning' },
      { title: 'CodeQL', href: '/docs/codeql', desc: 'Semantic security analysis' },
    ],
  },
  {
    category: 'Developer Docs',
    color: 'text-secondary',
    items: [
      { title: 'Architecture', href: '/docs/developer/architecture', desc: 'System design overview' },
      { title: 'Module Reference', href: '/docs/developer/modules', desc: 'Internal module APIs' },
      { title: 'Design Decisions', href: '/docs/developer/design-decisions', desc: 'Why things are built this way' },
      { title: 'Testing Guide', href: '/docs/developer/testing', desc: 'Test patterns & coverage' },
    ],
  },
]

export default function DocsHomePage() {
  return (
    <div className="flex-1 min-w-0">
      {/* ─── Hero ─── */}
      <section className="relative px-6 lg:px-12 pt-12 pb-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="text-xs gap-1.5 px-2.5 py-1">
              <Palette className="w-3 h-3" />
              v1.0
            </Badge>
            <Badge variant="outline" className="text-xs gap-1.5 px-2.5 py-1">
              Python 3.12+
            </Badge>
            <Badge variant="outline" className="text-xs gap-1.5 px-2.5 py-1">
              99% Coverage
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Scanipy{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>

          <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mb-8">
            A powerful CLI tool to scan open source code-bases on GitHub for
            security patterns and vulnerabilities. Search repositories, run{' '}
            <strong className="text-foreground/80">Semgrep</strong> and{' '}
            <strong className="text-foreground/80">CodeQL</strong> analysis, and
            discover security issues at scale.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/docs/installation">
              <Button size="lg" className="gap-2 rounded-full">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://github.com/papadoxie/scanipy" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2 rounded-full">
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="opacity-50" />

      {/* ─── Quick Start Terminal ─── */}
      <section className="px-6 lg:px-12 py-10">
        <h2 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider mb-4">
          Quick Start
        </h2>
        <Card className="bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden max-w-3xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-foreground/30 font-mono">terminal</span>
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="text-foreground/40 mb-1"># Clone and setup</div>
            <div>
              <span className="text-green-400">$</span>{' '}
              <span className="text-foreground/80">git clone https://github.com/papadoxie/scanipy.git && cd scanipy</span>
            </div>
            <div>
              <span className="text-green-400">$</span>{' '}
              <span className="text-foreground/80">python -m venv .venv && source .venv/bin/activate</span>
            </div>
            <div>
              <span className="text-green-400">$</span>{' '}
              <span className="text-foreground/80">pip install -r requirements.txt</span>
            </div>
            <div className="mt-3 text-foreground/40"># Set your GitHub token</div>
            <div>
              <span className="text-green-400">$</span>{' '}
              <span className="text-blue-400">export</span>{' '}
              <span className="text-yellow-400">GITHUB_TOKEN</span>
              <span className="text-foreground/60">=</span>
              <span className="text-purple-400">&quot;your_token_here&quot;</span>
            </div>
            <div className="mt-3 text-foreground/40"># Search for vulnerable patterns</div>
            <div>
              <span className="text-green-400">$</span>{' '}
              <span className="text-foreground/80">python scanipy.py --query</span>{' '}
              <span className="text-purple-400">&quot;extractall&quot;</span>{' '}
              <span className="text-blue-400">--language</span>{' '}
              <span className="text-foreground/80">python</span>{' '}
              <span className="text-blue-400">--run-semgrep</span>
            </div>
          </div>
        </Card>
      </section>

      <Separator className="opacity-50" />

      {/* ─── Features Grid ─── */}
      <section className="px-6 lg:px-12 py-10">
        <h2 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider mb-6">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {features.map((f) => (
            <Card
              key={f.title}
              className="p-5 bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-colors group"
            >
              <f.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm text-foreground mb-1.5">{f.title}</h3>
              <p className="text-xs text-foreground/50 leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="opacity-50" />

      {/* ─── Getting Started Cards ─── */}
      <section className="px-6 lg:px-12 py-10">
        <h2 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider mb-6">
          Getting Started
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {gettingStarted.map((item, i) => (
            <Link key={item.href} href={item.href}>
              <Card className="p-5 bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all group cursor-pointer h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-foreground/30">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-xs text-foreground/50">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-foreground/20 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator className="opacity-50" />

      {/* ─── Browse by Section ─── */}
      <section className="px-6 lg:px-12 py-10 pb-16">
        <h2 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider mb-6">
          Browse Documentation
        </h2>
        <div className="space-y-8 max-w-3xl">
          {sections.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-2 mb-3">
                <Layers className={`w-3.5 h-3.5 ${section.color}`} />
                <h3 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                  {section.category}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.items.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div className="flex items-center justify-between px-4 py-3 rounded-lg border border-border/40 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all group cursor-pointer">
                      <div>
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-foreground/40">{item.desc}</div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-foreground/20 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
