/**
 * A small syntax-highlighted code block, used for SARIF / CLI command
 * snippets in the homepage and CLI page. Pre-rendered to keep the
 * static-export build fast; we apply a single foreground colour so it
 * works in both light and dark mode without an extra theme switch.
 */
interface SarifExcerptProps {
  /** The literal block contents. Whitespace is preserved verbatim. */
  children: string
  /** Optional caption rendered above the block. */
  caption?: string
  /** Defaults to "json"; set "shell" for command snippets. */
  language?: 'json' | 'shell'
}

export function SarifExcerpt({
  children,
  caption,
  language = 'json',
}: SarifExcerptProps) {
  return (
    <figure className="my-4">
      {caption && (
        <figcaption className="text-xs uppercase tracking-wide text-foreground/50 mb-2 font-mono">
          {caption}
        </figcaption>
      )}
      <pre className="bg-muted/40 border border-border/50 rounded-lg overflow-x-auto p-4 text-xs leading-relaxed">
        <code className={`language-${language} font-mono text-foreground/80`}>
          {children}
        </code>
      </pre>
    </figure>
  )
}
