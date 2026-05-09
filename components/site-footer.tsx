import Link from 'next/link'
import { Github } from 'lucide-react'

/**
 * Slim site-wide footer. Always carries a `Docs` link so a visitor on
 * `/` can reach the CLI documentation in one click without `/cli` as
 * an intermediate hop.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/scanipy-logo.svg"
              alt="Scanipy Logo"
              className="w-5 h-5"
            />
            <span className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Scanipy.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/cli"
              className="text-foreground/50 hover:text-foreground transition"
            >
              CLI
            </Link>
            <Link
              href="/docs"
              className="text-foreground/50 hover:text-foreground transition"
            >
              Docs
            </Link>
            <Link
              href="/research"
              className="text-foreground/50 hover:text-foreground transition"
            >
              Research
            </Link>
            <Link
              href="https://github.com/papadoxie/scanipy/security/advisories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition"
            >
              Security
            </Link>
            <Link
              href="https://github.com/papadoxie/scanipy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
