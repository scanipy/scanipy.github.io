'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { demoBookingUrl } from '@/lib/cta'

interface DemoCTAProps {
  size?: 'sm' | 'lg' | 'default'
  variant?: 'default' | 'outline'
  className?: string
  /** Custom label for the button. Defaults to "Get a demo". */
  label?: string
}

/**
 * Single-source-of-truth "Get a demo" button. Resolves the booking URL
 * from `lib/cta.ts` and opens in a new tab with rel=noopener.
 */
export function DemoCTA({
  size = 'default',
  variant = 'default',
  className,
  label = 'Get a demo',
}: DemoCTAProps) {
  return (
    <Button asChild size={size} variant={variant} className={className}>
      <Link
        href={demoBookingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Link>
    </Button>
  )
}
