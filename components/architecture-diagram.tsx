/**
 * The pipeline diagram for the homepage architecture section.
 *
 * Inlined as JSX (rather than loaded via `<img src="/architecture.svg" />`)
 * so `currentColor` inherits the parent's text color — that's how the
 * diagram stays legible in both light and dark mode without us shipping
 * two PNGs or a theme-aware loader.
 */
export function ArchitectureDiagram() {
  return (
    <figure className="text-foreground/80">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 960 360"
        role="img"
        aria-labelledby="arch-title arch-desc"
        preserveAspectRatio="xMidYMid meet"
        className="w-full max-w-4xl mx-auto block"
      >
        <title id="arch-title">Scanipy v2 architecture</title>
        <desc id="arch-desc">
          A horizontal pipeline. From left to right: SCM connectors feed
          the snapshotter, which produces one Code Property Graph and
          tarball per (codebase, commit) and stores them in S3. The
          detector pool reads the snapshot and emits SARIF. The findings
          normaliser computes a stable SHA-256 fingerprint and stores
          rows in Postgres, keyed by (codebase_id, fingerprint).
        </desc>

        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* SCM connectors */}
          <g transform="translate(20,40)">
            <rect width="160" height="56" rx="8" />
            <text x="80" y="22" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="13" fontWeight="600" textAnchor="middle">SCM connectors</text>
            <text x="80" y="42" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="10" opacity="0.7" textAnchor="middle">github · gitlab · bitbucket · ado</text>
          </g>

          {/* Webhook */}
          <g transform="translate(20,116)">
            <rect width="160" height="40" rx="8" strokeDasharray="4 3" />
            <text x="80" y="18" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="11" fontWeight="500" textAnchor="middle">webhook / API trigger</text>
            <text x="80" y="32" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="10" opacity="0.6" textAnchor="middle">(codebase, commit_sha)</text>
          </g>

          {/* Snapshotter */}
          <g transform="translate(220,40)">
            <rect width="200" height="116" rx="8" />
            <text x="100" y="24" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="13" fontWeight="600" textAnchor="middle">Snapshotter</text>
            <text x="100" y="46" fill="currentColor" stroke="none" fontFamily="ui-monospace,Menlo,monospace" fontSize="10" opacity="0.7" textAnchor="middle">git clone · tar</text>
            <text x="100" y="64" fill="currentColor" stroke="none" fontFamily="ui-monospace,Menlo,monospace" fontSize="10" opacity="0.7" textAnchor="middle">joern → cpg.bin</text>
            <text x="100" y="82" fill="currentColor" stroke="none" fontFamily="ui-monospace,Menlo,monospace" fontSize="10" opacity="0.7" textAnchor="middle">codeql database create</text>
            <text x="100" y="104" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="10" opacity="0.6" textAnchor="middle">cached on (codebase, sha)</text>
          </g>

          {/* S3 */}
          <g transform="translate(220,176)">
            <rect width="200" height="40" rx="8" strokeDasharray="4 3" />
            <text x="100" y="18" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="11" fontWeight="500" textAnchor="middle">S3 / object storage</text>
            <text x="100" y="32" fill="currentColor" stroke="none" fontFamily="ui-monospace,Menlo,monospace" fontSize="10" opacity="0.6" textAnchor="middle">orgs/&lt;org&gt;/snapshots/...</text>
          </g>

          {/* Detector pool */}
          <g transform="translate(460,40)">
            <rect width="240" height="156" rx="8" />
            <text x="120" y="24" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="13" fontWeight="600" textAnchor="middle">Detector pool</text>
            <text x="120" y="40" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="10" opacity="0.6" textAnchor="middle">one job per (snapshot, detector)</text>
            <g fontFamily="ui-monospace,Menlo,monospace" fontSize="9" fill="currentColor" stroke="none">
              <text x="20"  y="62">· path-traversal</text>
              <text x="130" y="62">· memory-safety</text>
              <text x="20"  y="78">· injection</text>
              <text x="130" y="78">· deserialization</text>
              <text x="20"  y="94">· ssrf</text>
              <text x="130" y="94">· crypto-misuse</text>
              <text x="20"  y="110">· authn-authz</text>
              <text x="130" y="110">· race-toctou</text>
              <text x="20"  y="126">· secrets</text>
              <text x="130" y="126">· dep-cve</text>
            </g>
            <text x="120" y="146" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="9" opacity="0.55" textAnchor="middle">SARIF 2.1.0 out</text>
          </g>

          {/* Findings normaliser */}
          <g transform="translate(740,40)">
            <rect width="200" height="116" rx="8" />
            <text x="100" y="24" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="13" fontWeight="600" textAnchor="middle">Findings normaliser</text>
            <text x="100" y="48" fill="currentColor" stroke="none" fontFamily="ui-monospace,Menlo,monospace" fontSize="9" opacity="0.7" textAnchor="middle">sha256(rule_id|file|symbol|</text>
            <text x="100" y="62" fill="currentColor" stroke="none" fontFamily="ui-monospace,Menlo,monospace" fontSize="9" opacity="0.7" textAnchor="middle">dataflow_signature)</text>
            <text x="100" y="86" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="10" opacity="0.6" textAnchor="middle">stable across scans</text>
            <text x="100" y="102" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="10" opacity="0.6" textAnchor="middle">CWE-1000 anchored</text>
          </g>

          {/* Postgres findings */}
          <g transform="translate(740,176)">
            <rect width="200" height="40" rx="8" strokeDasharray="4 3" />
            <text x="100" y="18" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="11" fontWeight="500" textAnchor="middle">Postgres · findings</text>
            <text x="100" y="32" fill="currentColor" stroke="none" fontFamily="ui-monospace,Menlo,monospace" fontSize="10" opacity="0.6" textAnchor="middle">UNIQUE(codebase_id, fingerprint)</text>
          </g>

          {/* Arrows */}
          <path d="M 180 68 H 220" strokeWidth="1" />
          <path d="M 215 64 L 222 68 L 215 72 Z" fill="currentColor" stroke="none" />
          <path d="M 180 136 Q 200 136 200 100 H 220" strokeWidth="1" />
          <path d="M 215 96 L 222 100 L 215 104 Z" fill="currentColor" stroke="none" />
          <path d="M 320 156 V 176" strokeWidth="1" />
          <path d="M 316 171 L 320 178 L 324 171 Z" fill="currentColor" stroke="none" />
          <path d="M 420 196 H 460" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 420 98 H 460" strokeWidth="1" />
          <path d="M 455 94 L 462 98 L 455 102 Z" fill="currentColor" stroke="none" />
          <path d="M 700 118 H 740" strokeWidth="1" />
          <path d="M 735 114 L 742 118 L 735 122 Z" fill="currentColor" stroke="none" />
          <path d="M 840 156 V 176" strokeWidth="1" />
          <path d="M 836 171 L 840 178 L 844 171 Z" fill="currentColor" stroke="none" />
        </g>

        <text x="480" y="320" fill="currentColor" stroke="none" fontFamily="ui-sans-serif,system-ui" fontSize="10" opacity="0.45" textAnchor="middle">
          CPG construction: joern. Detection: Semgrep + CodeQL + class-specific taint queries.
        </text>
      </svg>
    </figure>
  )
}
