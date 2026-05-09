/**
 * Tiny tracking-wide uppercase label that sits above every H2 on the
 * marketing pages. Its job is editorial: an eyebrow stops the section
 * from reading like another generic SaaS card and signals where the
 * reader is in the page. Keep it as its own component so the styling
 * rule is enforced, not improvised in each page body.
 */
export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/55 mb-3">
      {children}
    </p>
  )
}
