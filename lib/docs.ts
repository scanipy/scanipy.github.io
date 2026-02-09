import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const DOCS_DIR = path.join(process.cwd(), 'docs')
const MKDOCS_PATH = path.join(process.cwd(), 'mkdocs.yml')

/* ── Types ── */

export interface NavItem {
  title: string
  href?: string
  children?: NavItem[]
}

export interface Doc {
  content: string
  title: string
  slug: string[]
}

/* ── Navigation ── */

/** Parse the mkdocs.yml `nav` section into a NavItem tree */
export function getDocsNav(): NavItem[] {
  const raw = fs.readFileSync(MKDOCS_PATH, 'utf-8')
  // Strip Python-specific YAML tags that js-yaml can't handle
  const sanitized = raw.replace(/!!python\/\S+/g, '""')
  const mkdocs = yaml.load(sanitized) as { nav: unknown[] }
  return parseNavItems(mkdocs.nav)
}

function parseNavItems(items: unknown[]): NavItem[] {
  return items
    .map((item) => {
      if (typeof item === 'string') {
        return {
          title: slugToTitle(item),
          href: mdPathToHref(item),
        }
      }

      if (typeof item === 'object' && item !== null) {
        const [title, value] = Object.entries(item)[0]

        if (typeof value === 'string') {
          return { title, href: mdPathToHref(value) }
        }

        if (Array.isArray(value)) {
          return { title, children: parseNavItems(value) }
        }
      }

      return null
    })
    .filter(Boolean) as NavItem[]
}

function mdPathToHref(mdPath: string): string {
  const slug = mdPath
    .replace(/\.md$/, '')
    .replace(/\/index$/, '')

  // home.md is the docs root page → /docs
  if (slug === 'home') return '/docs'

  return `/docs/${slug}`
}

function slugToTitle(mdPath: string): string {
  const name = mdPath.replace(/\.md$/, '').split('/').pop() || ''
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/* ── Static Params ── */

/** Return every doc slug for `generateStaticParams` */
export function getAllDocSlugs(): string[][] {
  const nav = getDocsNav()
  const slugs: string[][] = []

  function extract(items: NavItem[]) {
    for (const item of items) {
      if (item.href) {
        const parts = item.href
          .replace(/^\/docs\/?/, '')
          .split('/')
          .filter(Boolean)
        slugs.push(parts)
      }
      if (item.children) extract(item.children)
    }
  }

  extract(nav)
  return slugs
}

/* ── Read a single doc ── */

export function getDocBySlug(slug: string[]): Doc | null {
  const candidates =
    slug.length === 0 || (slug.length === 1 && slug[0] === '')
      ? [
          path.join(DOCS_DIR, 'home.md'),
          path.join(DOCS_DIR, 'index.md'),
        ]
      : [
          path.join(DOCS_DIR, ...slug) + '.md',
          path.join(DOCS_DIR, ...slug, 'index.md'),
        ]

  let filePath: string | null = null
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      filePath = p
      break
    }
  }

  if (!filePath) return null

  const content = fs.readFileSync(filePath, 'utf-8')

  // Extract title from first # heading
  const titleMatch = content.match(/^#\s+(.+)$/m)
  const title = titleMatch
    ? titleMatch[1].replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim()
    : slug[slug.length - 1] || 'Documentation'

  return { content, title, slug }
}

/* ── Ordered flat list (for prev / next) ── */

export function getDocsList(): { title: string; href: string }[] {
  const nav = getDocsNav()
  const list: { title: string; href: string }[] = []

  function extract(items: NavItem[]) {
    for (const item of items) {
      if (item.href) list.push({ title: item.title, href: item.href })
      if (item.children) extract(item.children)
    }
  }

  extract(nav)
  return list
}
