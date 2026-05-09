import { SectionEyebrow } from '@/components/section-eyebrow'

/**
 * The "why not grep" band: a 4/8 split with the eyebrow + H2 on the
 * left and a real comparison table on the right. Sat on `bg-muted/30`
 * to break visual rhythm vs. the surrounding white sections.
 */

const ROWS: Array<[string, string]> = [
  [
    'Run one ruleset against every file.',
    'Run a class-specific ruleset against the right file.',
  ],
  [
    'Flag every regex hit as a finding.',
    'Confirm with taint analysis before flagging.',
  ],
  [
    'Re-run = new finding IDs to triage.',
    'Re-run = same fingerprint, same row.',
  ],
  [
    'One language per scanner binary.',
    'Five languages per snapshot, in one pass.',
  ],
]

export function ComparisonBand() {
  return (
    <section className="bg-muted/30 border-y border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <SectionEyebrow>Why not grep</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]">
              Single-tool scanners run grep against everything.
            </h2>
            <p className="mt-5 text-foreground/65 leading-relaxed">
              That&rsquo;s why teams triage ten times the false positives
              they&rsquo;d see from a class-aware engine.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-xl border border-border/60 bg-background overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 text-foreground/55">
                    <th className="text-left font-medium px-5 py-3 w-1/2">
                      Single-tool scanners
                    </th>
                    <th className="text-left font-medium px-5 py-3 w-1/2 bg-muted/40">
                      Scanipy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([a, b], i) => (
                    <tr
                      key={i}
                      className="border-b border-border/40 last:border-b-0"
                    >
                      <td className="px-5 py-4 align-top text-foreground/65">
                        {a}
                      </td>
                      <td className="px-5 py-4 align-top text-foreground bg-muted/20">
                        {b}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
