import { scms } from '@/lib/scms'

/**
 * Four SCM-coverage tiles (GitHub, GitLab, Bitbucket Cloud, Azure
 * DevOps). Renders straight from `lib/scms.ts`. No fake customer logos
 * — the SCM brand wordmark is just text.
 */
export function ScmGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {scms.map((scm) => (
        <div
          key={scm.id}
          className="rounded-lg border border-border/50 bg-card/50 p-4 hover:border-border transition"
        >
          <p className="font-semibold text-foreground mb-1">{scm.name}</p>
          <p className="text-xs text-foreground/60 leading-relaxed">
            {scm.note}
          </p>
        </div>
      ))}
    </div>
  )
}
