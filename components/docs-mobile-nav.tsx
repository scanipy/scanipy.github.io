'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DocsSidebar } from '@/components/docs-sidebar'

interface NavItem {
  title: string
  href?: string
  children?: NavItem[]
}

export function DocsMobileNav({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden rounded-full h-8 w-8 p-0"
        >
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="px-4 py-4 border-b border-border/50">
          <SheetTitle className="text-sm">Navigation</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-4rem)] px-2 py-4">
          {/* Close the sheet when a link is clicked */}
          <div onClick={() => setOpen(false)}>
            <DocsSidebar nav={nav} />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
