/**
 * The dark-themed flow diagram for the redesigned hero. Hand-coded SVG
 * with filled cards (linear-gradient fills), magenta glow filters on
 * borders and connector lines, and bolder typography than the prior
 * outline-only diagram.
 *
 * Static (no animation). The previous animated version was reported
 * as "not working"; this visual relies on weight and contrast, not
 * motion, to read as a flow.
 *
 * Designed against a dark hero backdrop. The cards' gradient fills are
 * `#1a1220` → `#0f0a12`, the brand-kit dark surfaces. Strokes and text
 * use the magenta accent tokens (`#d946ef`, `#c9469b`, `#a78bcc`) so
 * the diagram reads in both light- and dark-mode renderings of the
 * page (the parent dark band overrides any theme inheritance).
 */

const SCMS = [
  { id: 'gh', name: 'GitHub', sub: 'PAT · App · OAuth' },
  { id: 'gl', name: 'GitLab', sub: 'PAT · OAuth · GHE' },
  { id: 'bb', name: 'Bitbucket', sub: 'Workspace tokens' },
  { id: 'ad', name: 'Azure DevOps', sub: 'PAT · Service hooks' },
]

const DETECTORS_LEFT = ['path-traversal', 'memory-safety', 'injection', 'deserialization']
const DETECTORS_RIGHT = ['ssrf', 'crypto-misuse', 'authn-authz', 'secrets']

export function DarkPipeline({ className = '' }: { className?: string }) {
  // Layout constants: single source for nudging proportions later.
  const VB_W = 1100
  const VB_H = 640

  // SCM column
  const SCM_X = 24
  const SCM_W = 200
  const SCM_H = 72
  const SCM_GAP = 14
  const SCM_TOTAL_H = SCMS.length * SCM_H + (SCMS.length - 1) * SCM_GAP
  const SCM_Y0 = (VB_H - SCM_TOTAL_H) / 2

  // Snapshot
  const SNAP_X = 264
  const SNAP_W = 220
  const SNAP_H = 116
  const SNAP_Y = (VB_H - SNAP_H) / 2

  // Detector pool
  const POOL_X = 524
  const POOL_W = 360
  const POOL_H = 380
  const POOL_Y = (VB_H - POOL_H) / 2

  // Findings
  const FIND_X = 924
  const FIND_W = 152
  const FIND_H = 116
  const FIND_Y = (VB_H - FIND_H) / 2

  return (
    <figure className={className}>
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        role="img"
        aria-labelledby="dp-title dp-desc"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto block"
      >
        <title id="dp-title">Scanipy pipeline</title>
        <desc id="dp-desc">
          Four SCM connectors feed one snapshotter, which fans out to a
          pool of class-specific detectors, which all write into a single
          findings store with stable fingerprints.
        </desc>

        <defs>
          {/* Gradient fill for every card: top-down, light to dark. */}
          <linearGradient id="dp-card-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1f1426" />
            <stop offset="100%" stopColor="#0f0a12" />
          </linearGradient>
          {/* Brighter inner fill for the central snapshot node. */}
          <linearGradient id="dp-card-fill-bright" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a1933" />
            <stop offset="100%" stopColor="#160d1c" />
          </linearGradient>
          {/* Glow gradient for connector lines: fades between two pinks. */}
          <linearGradient id="dp-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#d946ef" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.25" />
          </linearGradient>
          {/* Subtle radial under the central node: depth cue. */}
          <radialGradient id="dp-snap-glow" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stopColor="#d946ef" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
          </radialGradient>
          {/* Glow filter: small Gaussian blur merged behind the source. */}
          <filter id="dp-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background depth: a faint glow behind snapshot, then findings. */}
        <ellipse
          cx={SNAP_X + SNAP_W / 2}
          cy={SNAP_Y + SNAP_H / 2}
          rx={SNAP_W * 0.85}
          ry={SNAP_H * 1.4}
          fill="url(#dp-snap-glow)"
        />
        <ellipse
          cx={FIND_X + FIND_W / 2}
          cy={FIND_Y + FIND_H / 2}
          rx={FIND_W * 0.9}
          ry={FIND_H * 1.2}
          fill="url(#dp-snap-glow)"
        />

        {/* Connector lines: SCM → snapshot (4 curves converging) */}
        {SCMS.map((_, i) => {
          const startY = SCM_Y0 + i * (SCM_H + SCM_GAP) + SCM_H / 2
          const endY = SNAP_Y + SNAP_H / 2
          const startX = SCM_X + SCM_W
          const endX = SNAP_X
          return (
            <path
              key={`sl-${i}`}
              d={`M ${startX} ${startY} C ${startX + 30} ${startY} ${endX - 30} ${endY} ${endX} ${endY}`}
              fill="none"
              stroke="url(#dp-flow)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#dp-glow)"
            />
          )
        })}

        {/* Snapshot → pool */}
        <path
          d={`M ${SNAP_X + SNAP_W} ${SNAP_Y + SNAP_H / 2} L ${POOL_X} ${POOL_Y + POOL_H / 2}`}
          fill="none"
          stroke="url(#dp-flow)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#dp-glow)"
        />

        {/* Pool → findings */}
        <path
          d={`M ${POOL_X + POOL_W} ${POOL_Y + POOL_H / 2} L ${FIND_X} ${FIND_Y + FIND_H / 2}`}
          fill="none"
          stroke="url(#dp-flow)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#dp-glow)"
        />

        {/* SCM cards (left column) */}
        {SCMS.map((scm, i) => {
          const y = SCM_Y0 + i * (SCM_H + SCM_GAP)
          return (
            <g key={scm.id}>
              <rect
                x={SCM_X}
                y={y}
                width={SCM_W}
                height={SCM_H}
                rx="12"
                fill="url(#dp-card-fill)"
                stroke="#3a2541"
                strokeWidth="1"
              />
              {/* Glow accent on left edge: small magenta bar */}
              <rect
                x={SCM_X}
                y={y + 14}
                width="3"
                height={SCM_H - 28}
                rx="1.5"
                fill="#d946ef"
                filter="url(#dp-glow)"
              />
              <text
                x={SCM_X + 18}
                y={y + 30}
                fill="#f5f3f8"
                fontFamily="ui-sans-serif,system-ui,-apple-system"
                fontSize="16"
                fontWeight="600"
              >
                {scm.name}
              </text>
              <text
                x={SCM_X + 18}
                y={y + 50}
                fill="#a78bcc"
                fontFamily="ui-monospace,Menlo,monospace"
                fontSize="11"
              >
                {scm.sub}
              </text>
            </g>
          )
        })}

        {/* Snapshot card */}
        <g>
          <rect
            x={SNAP_X}
            y={SNAP_Y}
            width={SNAP_W}
            height={SNAP_H}
            rx="14"
            fill="url(#dp-card-fill-bright)"
            stroke="#d946ef"
            strokeWidth="1.5"
            filter="url(#dp-glow)"
          />
          {/* Tiny graph-like icon: three dots connected by lines */}
          <g
            transform={`translate(${SNAP_X + 22}, ${SNAP_Y + 26})`}
            stroke="#d946ef"
            strokeWidth="1.2"
            fill="#d946ef"
          >
            <line x1="0" y1="0" x2="10" y2="-6" />
            <line x1="0" y1="0" x2="10" y2="6" />
            <circle cx="0" cy="0" r="2" />
            <circle cx="10" cy="-6" r="2" />
            <circle cx="10" cy="6" r="2" />
          </g>
          <text
            x={SNAP_X + 50}
            y={SNAP_Y + 32}
            fill="#f5f3f8"
            fontFamily="ui-sans-serif,system-ui,-apple-system"
            fontSize="18"
            fontWeight="600"
          >
            Snapshot
          </text>
          <text
            x={SNAP_X + 22}
            y={SNAP_Y + 64}
            fill="#a78bcc"
            fontFamily="ui-monospace,Menlo,monospace"
            fontSize="11"
          >
            git clone · joern · codeql db
          </text>
          <text
            x={SNAP_X + 22}
            y={SNAP_Y + 84}
            fill="#a78bcc"
            fontFamily="ui-monospace,Menlo,monospace"
            fontSize="11"
            opacity="0.7"
          >
            cached on (codebase, sha)
          </text>
        </g>

        {/* Detector pool: outer container */}
        <g>
          <rect
            x={POOL_X}
            y={POOL_Y}
            width={POOL_W}
            height={POOL_H}
            rx="14"
            fill="url(#dp-card-fill)"
            stroke="#3a2541"
            strokeWidth="1"
          />
          {/* Title row */}
          <text
            x={POOL_X + 24}
            y={POOL_Y + 36}
            fill="#f5f3f8"
            fontFamily="ui-sans-serif,system-ui,-apple-system"
            fontSize="18"
            fontWeight="600"
          >
            Detector pool
          </text>
          <text
            x={POOL_X + 24}
            y={POOL_Y + 56}
            fill="#a78bcc"
            fontFamily="ui-monospace,Menlo,monospace"
            fontSize="11"
          >
            class-specific · runs in parallel
          </text>

          {/* Inner detector pills, 4×2 grid */}
          {DETECTORS_LEFT.map((label, i) => {
            const px = POOL_X + 24
            const py = POOL_Y + 88 + i * 60
            return (
              <g key={label}>
                <rect
                  x={px}
                  y={py}
                  width="140"
                  height="44"
                  rx="8"
                  fill="#160d1c"
                  stroke="#5a2a6e"
                  strokeWidth="1"
                />
                <circle
                  cx={px + 14}
                  cy={py + 22}
                  r="3"
                  fill="#d946ef"
                  filter="url(#dp-glow)"
                />
                <text
                  x={px + 26}
                  y={py + 27}
                  fill="#f5f3f8"
                  fontFamily="ui-monospace,Menlo,monospace"
                  fontSize="11"
                  fontWeight="500"
                >
                  {label}
                </text>
              </g>
            )
          })}
          {DETECTORS_RIGHT.map((label, i) => {
            const px = POOL_X + 24 + 156
            const py = POOL_Y + 88 + i * 60
            return (
              <g key={label}>
                <rect
                  x={px}
                  y={py}
                  width="156"
                  height="44"
                  rx="8"
                  fill="#160d1c"
                  stroke="#5a2a6e"
                  strokeWidth="1"
                />
                <circle
                  cx={px + 14}
                  cy={py + 22}
                  r="3"
                  fill="#c9469b"
                  filter="url(#dp-glow)"
                />
                <text
                  x={px + 26}
                  y={py + 27}
                  fill="#f5f3f8"
                  fontFamily="ui-monospace,Menlo,monospace"
                  fontSize="11"
                  fontWeight="500"
                >
                  {label}
                </text>
              </g>
            )
          })}

          {/* Footer row: SARIF output label */}
          <text
            x={POOL_X + 24}
            y={POOL_Y + POOL_H - 18}
            fill="#a78bcc"
            fontFamily="ui-monospace,Menlo,monospace"
            fontSize="11"
            opacity="0.7"
          >
            +2 more · SARIF 2.1.0 out
          </text>
        </g>

        {/* Findings card */}
        <g>
          <rect
            x={FIND_X}
            y={FIND_Y}
            width={FIND_W}
            height={FIND_H}
            rx="14"
            fill="url(#dp-card-fill-bright)"
            stroke="#d946ef"
            strokeWidth="1.5"
            filter="url(#dp-glow)"
          />
          {/* Tiny fingerprint-like icon: three concentric arcs */}
          <g
            transform={`translate(${FIND_X + 22}, ${FIND_Y + 28})`}
            stroke="#d946ef"
            strokeWidth="1.4"
            fill="none"
          >
            <path d="M 0 6 a 6 6 0 0 1 12 0" />
            <path d="M -3 9 a 9 9 0 0 1 18 0" opacity="0.7" />
            <path d="M -6 12 a 12 12 0 0 1 24 0" opacity="0.45" />
          </g>
          <text
            x={FIND_X + 50}
            y={FIND_Y + 36}
            fill="#f5f3f8"
            fontFamily="ui-sans-serif,system-ui,-apple-system"
            fontSize="16"
            fontWeight="600"
          >
            Findings
          </text>
          <text
            x={FIND_X + 22}
            y={FIND_Y + 68}
            fill="#a78bcc"
            fontFamily="ui-monospace,Menlo,monospace"
            fontSize="10"
          >
            sha256 fingerprint
          </text>
          <text
            x={FIND_X + 22}
            y={FIND_Y + 86}
            fill="#a78bcc"
            fontFamily="ui-monospace,Menlo,monospace"
            fontSize="10"
            opacity="0.7"
          >
            stable across scans
          </text>
        </g>
      </svg>
    </figure>
  )
}
