import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { citations, type CitationId } from '@/lib/citations'

interface CitationProps {
  id: CitationId
  /**
   * If true (default), render the gist sentence above the formal
   * citation. Set to `false` to render only the formal reference,
   * useful inside captions where the prose has already framed the
   * point.
   */
  showGist?: boolean
}

/**
 * Renders one academic citation by id, with the gist sentence + the
 * formal reference (authors, italicised title, venue, year) on a
 * separate line in muted text. The url is wrapped in a normal Next
 * link with `target="_blank"` and `rel="noopener noreferrer"`.
 *
 * Used by the `/research` bibliography page. Not used in marketing-page
 * body copy; those pages link to `/research` from the footer instead.
 */
export function Citation({ id, showGist = true }: CitationProps) {
  const c = citations[id]
  return (
    <div className="text-xs text-foreground/55 leading-relaxed">
      {showGist && <p className="mb-1">{c.oneLineGist}</p>}
      <p>
        {c.authors}.{' '}
        <Link
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-foreground transition inline-flex items-baseline gap-1"
        >
          <em className="not-italic">
            <span className="italic">{c.title}</span>
          </em>
          <ExternalLink className="w-3 h-3" />
        </Link>
        , {c.venue}
        {c.year ? `, ${c.year}` : ''}.
      </p>
    </div>
  )
}
