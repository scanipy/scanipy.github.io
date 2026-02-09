import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'

/* ── Admonition pre-processor ── */

/**
 * Convert MkDocs-style admonitions to HTML <div> blocks:
 *
 *   !!! note "Title"
 *       Body text
 *
 * becomes:
 *
 *   <div class="admonition admonition-note">
 *     <p class="admonition-title">Title</p>
 *     Body text
 *   </div>
 */
function preprocessAdmonitions(markdown: string): string {
  const lines = markdown.split('\n')
  const result: string[] = []
  let i = 0

  while (i < lines.length) {
    const match = lines[i].match(/^!!!\s+(\w+)\s*(?:"([^"]*)")?\s*$/)

    if (match) {
      const type = match[1] // note, warning, tip, danger, info, etc.
      const title =
        match[2] || type.charAt(0).toUpperCase() + type.slice(1)
      const body: string[] = []
      i++

      // Collect indented continuation lines (4-space indent)
      while (i < lines.length) {
        if (lines[i].match(/^\s{4}/)) {
          body.push(lines[i].replace(/^\s{4}/, ''))
          i++
        } else if (lines[i].trim() === '') {
          // Blank line — include if the next line is still indented
          if (i + 1 < lines.length && lines[i + 1].match(/^\s{4}/)) {
            body.push('')
            i++
          } else {
            break
          }
        } else {
          break
        }
      }

      result.push(
        `<div class="admonition admonition-${type}">`,
        `<p class="admonition-title">${title}</p>`,
        '',
        ...body,
        '',
        '</div>',
        '',
      )
    } else {
      result.push(lines[i])
      i++
    }
  }

  return result.join('\n')
}

/* ── Markdown → HTML ── */

export async function markdownToHtml(markdown: string): Promise<string> {
  const preprocessed = preprocessAdmonitions(markdown)

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight, { detect: true, ignoreMissing: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(preprocessed)

  return String(result)
}

/* ── Table-of-contents extraction ── */

export function extractHeadings(
  markdown: string,
): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = []

  for (const line of markdown.split('\n')) {
    const match = line.match(/^(#{2,4})\s+(.+)$/)
    if (match) {
      const level = match[1].length
      const text = match[2]
        .replace(/[\u{1F300}-\u{1F9FF}`]/gu, '')
        .trim()
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
      headings.push({ id, text, level })
    }
  }

  return headings
}
