import { detectors } from '@/lib/detectors'

/**
 * The detector-catalog table. Renders straight from `lib/detectors.ts`.
 *
 * Status pills are distinguishable without color alone: GA = solid
 * pill, Roadmap = outline pill. Verified to remain readable under
 * `forced-colors: active`.
 */
export function DetectorCatalog() {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full text-sm">
        <caption className="caption-bottom text-xs text-foreground/55 mt-4 px-4 sm:px-0 text-left">
          Roadmap classes ship with manifests today and content as the
          detector lands. CWE numbers map directly into compliance
          frameworks.
        </caption>
        <thead>
          <tr className="border-b border-border/50 text-left text-foreground/60">
            <th className="font-medium py-3 pl-4 sm:pl-0 pr-4">Class</th>
            <th className="font-medium py-3 pr-4">CWE</th>
            <th className="font-medium py-3 pr-4 hidden sm:table-cell">
              Languages
            </th>
            <th className="font-medium py-3 pr-4 hidden md:table-cell">
              Engine
            </th>
            <th className="font-medium py-3 pr-4 sm:pr-0">Status</th>
          </tr>
        </thead>
        <tbody>
          {detectors.map((d) => (
            <tr
              key={d.id}
              className="border-b border-border/30 hover:bg-muted/30 transition"
            >
              <td className="py-3 pl-4 sm:pl-0 pr-4 font-medium">{d.name}</td>
              <td className="py-3 pr-4 font-mono text-xs text-foreground/70">
                {d.cwes.map((n) => `CWE-${n}`).join(', ')}
              </td>
              <td className="py-3 pr-4 font-mono text-xs text-foreground/60 hidden sm:table-cell">
                {d.languages.join(', ')}
              </td>
              <td className="py-3 pr-4 font-mono text-xs text-foreground/60 hidden md:table-cell">
                {d.engine}
              </td>
              <td className="py-3 pr-4 sm:pr-0">
                <StatusPill status={d.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function StatusPill({ status }: { status: 'ga' | 'roadmap' }) {
  if (status === 'ga') {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary text-primary-foreground">
        GA
      </span>
    )
  }
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-foreground/30 text-foreground/60">
      Roadmap
    </span>
  )
}
