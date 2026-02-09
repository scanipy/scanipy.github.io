import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion, ArrowLeft, Home } from 'lucide-react'

export default function DocsNotFound() {
  return (
    <div className="flex-1 min-w-0 flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8 text-primary" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-3">
          Page Not Found
        </h1>
        <p className="text-foreground/60 mb-8 leading-relaxed">
          The documentation page you're looking for doesn't exist or may have
          been moved. Check the sidebar for available pages.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/docs">
            <Button variant="default" className="gap-2 rounded-full">
              <Home className="w-4 h-4" />
              Docs Home
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="gap-2 rounded-full">
              <ArrowLeft className="w-4 h-4" />
              Back to Site
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
