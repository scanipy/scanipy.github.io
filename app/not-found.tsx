import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <FileQuestion className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-5xl font-bold text-foreground mb-2">404</h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-4">
          Page Not Found
        </h2>
        <p className="text-foreground/60 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button variant="default" className="gap-2 rounded-full">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/docs">
            <Button variant="outline" className="gap-2 rounded-full">
              Documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
