'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  title: string
  href?: string
  children?: NavItem[]
}

export function DocsSidebar({ nav }: { nav: NavItem[] }) {
  const pathname = usePathname()

  return (
    <nav className="space-y-1">
      {nav.map((item, i) => (
        <SidebarItem key={i} item={item} pathname={pathname} />
      ))}
    </nav>
  )
}

function SidebarItem({
  item,
  pathname,
  depth = 0,
}: {
  item: NavItem
  pathname: string
  depth?: number
}) {
  const isActive = item.href === pathname
  const hasChildren = !!(item.children && item.children.length > 0)
  const isChildActive = hasChildren && containsActive(item, pathname)
  const [open, setOpen] = useState(isChildActive)

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            'flex items-center justify-between w-full text-left rounded-lg text-sm font-medium transition-colors',
            'text-foreground/70 hover:text-foreground hover:bg-muted/50 py-2',
          )}
          style={{ paddingLeft: `${depth * 12 + 12}px`, paddingRight: '12px' }}
        >
          {item.title}
          <ChevronRight
            className={cn(
              'w-3.5 h-3.5 shrink-0 transition-transform duration-200',
              open && 'rotate-90',
            )}
          />
        </button>
        {open && (
          <div className="mt-0.5">
            {item.children!.map((child, i) => (
              <SidebarItem
                key={i}
                item={child}
                pathname={pathname}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={cn(
          'block rounded-lg text-sm transition-colors py-2',
          isActive
            ? 'bg-primary/10 text-primary font-medium'
            : 'text-foreground/60 hover:text-foreground hover:bg-muted/50',
        )}
        style={{ paddingLeft: `${depth * 12 + 12}px`, paddingRight: '12px' }}
      >
        {item.title}
      </Link>
    )
  }

  return null
}

function containsActive(item: NavItem, pathname: string): boolean {
  if (item.href === pathname) return true
  if (item.children) {
    return item.children.some((child) => containsActive(child, pathname))
  }
  return false
}
