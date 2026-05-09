import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DocsSidebar } from '@/components/docs-sidebar'
import { DocsMobileNav } from '@/components/docs-mobile-nav'
import { getDocsNav } from '@/lib/docs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nav = getDocsNav()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav showDocs />

      {/* CLI-only-docs banner: surfaces the scope of these docs to a
          visitor who lands deep in the docs tree without coming through
          the marketing site first. */}
      <div className="border-b border-border/50 bg-muted/40 pt-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-4">
          <p className="text-sm text-foreground/70">
            Documentation for the open-source Scanipy CLI.
          </p>
          <Link
            href="/"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition inline-flex items-center gap-1"
          >
            See the platform
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Mobile sidebar drawer trigger lives just below the banner so it
          stays accessible without competing with the floating nav. */}
      <div className="lg:hidden border-b border-border/50 bg-background/80">
        <div className="px-4 py-2 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-foreground/50">
            Documentation
          </span>
          <DocsMobileNav nav={nav} />
        </div>
      </div>

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border/50 sticky top-32 h-[calc(100vh-8rem)]">
          <ScrollArea className="h-full py-6 px-4">
            <DocsSidebar nav={nav} />
          </ScrollArea>
        </aside>

        <main className="flex-1 min-w-0">{children}</main>
      </div>

      <SiteFooter />
    </div>
  )
}
