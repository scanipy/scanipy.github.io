import Link from 'next/link'
import { DocsSidebar } from '@/components/docs-sidebar'
import { DocsMobileNav } from '@/components/docs-mobile-nav'
import { getDocsNav } from '@/lib/docs'
import { ThemeToggle } from '@/components/theme-toggle'
import { BookOpen, Github, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nav = getDocsNav()

  return (
    <div className="min-h-screen bg-background">
      {/* ─── Docs Header ─── */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between h-14 px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <img
                src="/scanipy-logo.svg"
                alt="Scanipy"
                className="w-6 h-6"
              />
              <span className="font-bold text-sm hidden sm:inline">
                scanipy
              </span>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">Documentation</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="https://github.com/papadoxie/scanipy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full h-8 w-8 p-0"
              >
                <Github className="w-4 h-4" />
              </Button>
            </Link>
            <DocsMobileNav nav={nav} />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* ─── Desktop Sidebar ─── */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border/50 sticky top-14 h-[calc(100vh-3.5rem)]">
          <ScrollArea className="h-full py-6 px-4">
            <DocsSidebar nav={nav} />
          </ScrollArea>
        </aside>

        {/* ─── Main Content ─── */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  )
}
