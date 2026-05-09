'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'

/**
 * The animated dataflow pipeline that runs in the homepage hero (right
 * column) and again as the section visual on the "How it works" band.
 *
 * Two modes:
 *   - `hero`     — animation runs on mount.
 *   - `section`  — animation runs once when the SVG scrolls into view.
 *
 * The `useReducedMotion` guard short-circuits to a static layout that's
 * indistinguishable from the animated end state — no flashes, no popping.
 *
 * All shapes use `currentColor` so the diagram inherits the parent text
 * colour and looks legible in both light and dark mode without two PNGs.
 */

interface AnimatedPipelineProps {
  mode?: 'hero' | 'section'
  className?: string
}

const SCMS: Array<{ id: string; label: string; y: number }> = [
  { id: 'gh', label: 'GitHub', y: 20 },
  { id: 'gl', label: 'GitLab', y: 62 },
  { id: 'bb', label: 'Bitbucket', y: 104 },
  { id: 'ad', label: 'Azure DevOps', y: 146 },
]

const CHIPS: string[] = [
  'path-traversal',
  'memory-safety',
  'injection',
  'deserialization',
  'ssrf',
  'crypto-misuse',
  'authn-authz',
  'secrets',
]

// y-centre of the snapshotter and findings boxes — used as the
// convergence/divergence point for the SCM and pool arrows.
const HUB_Y = 130

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.4, ease: 'easeOut' },
  }),
}

const drawIn: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number = 0) => ({
    pathLength: 1,
    opacity: 0.8,
    transition: { delay, duration: 0.55, ease: 'easeOut' },
  }),
}

export function AnimatedPipeline({
  mode = 'hero',
  className = '',
}: AnimatedPipelineProps) {
  const reduceMotion = useReducedMotion() ?? false

  // Variant trigger for the wrapping <motion.g>. Children inherit and
  // resolve their own `custom` delays against the parent's animate state.
  const trigger = reduceMotion
    ? { initial: 'visible' as const, animate: 'visible' as const }
    : mode === 'hero'
      ? { initial: 'hidden' as const, animate: 'visible' as const }
      : {
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, margin: '-80px' },
        }

  return (
    <figure className={`text-foreground/85 ${className}`}>
      <svg
        viewBox="0 0 1000 260"
        role="img"
        aria-labelledby="ap-title ap-desc"
        preserveAspectRatio="xMidYMid meet"
        className="w-full max-w-3xl mx-auto block"
      >
        <title id="ap-title">Scanipy pipeline</title>
        <desc id="ap-desc">
          A horizontal pipeline. SCM connectors feed one snapshotter,
          which fans out to a pool of class-specific detectors, which
          all write into a single findings store with stable
          fingerprints.
        </desc>

        <motion.g {...trigger}>
          {/* SCM nodes (stacked on the left) */}
          {SCMS.map((scm, i) => (
            <motion.g
              key={scm.id}
              variants={fadeIn}
              custom={0.05 * i}
              transform={`translate(20, ${scm.y})`}
            >
              <rect
                width="160"
                height="36"
                rx="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <text
                x="80"
                y="22"
                fill="currentColor"
                fontFamily="ui-sans-serif,system-ui,-apple-system"
                fontSize="13"
                fontWeight="500"
                textAnchor="middle"
              >
                {scm.label}
              </text>
            </motion.g>
          ))}

          {/* Arrows: each SCM → snapshotter (bezier, converging at HUB_Y) */}
          {SCMS.map((scm, i) => {
            const startY = scm.y + 18
            return (
              <motion.path
                key={`scm-arrow-${scm.id}`}
                d={`M 180 ${startY} C 215 ${startY} 215 ${HUB_Y} 240 ${HUB_Y}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                variants={drawIn}
                custom={0.3 + 0.05 * i}
              />
            )
          })}

          {/* Snapshotter */}
          <motion.g
            variants={fadeIn}
            custom={0.6}
            transform="translate(240, 98)"
          >
            <rect
              width="160"
              height="64"
              rx="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <text
              x="80"
              y="26"
              fill="currentColor"
              fontFamily="ui-sans-serif,system-ui,-apple-system"
              fontSize="13"
              fontWeight="600"
              textAnchor="middle"
            >
              snapshot
            </text>
            <text
              x="80"
              y="46"
              fill="currentColor"
              fontFamily="ui-monospace,Menlo,monospace"
              fontSize="10"
              opacity="0.65"
              textAnchor="middle"
            >
              clone · graph · cache
            </text>
          </motion.g>

          {/* Snapshot → detector pool */}
          <motion.path
            d="M 400 130 H 460"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            variants={drawIn}
            custom={1.0}
          />

          {/* Detector pool */}
          <motion.g
            variants={fadeIn}
            custom={1.2}
            transform="translate(460, 50)"
          >
            <rect
              width="260"
              height="160"
              rx="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <text
              x="130"
              y="24"
              fill="currentColor"
              fontFamily="ui-sans-serif,system-ui,-apple-system"
              fontSize="12"
              fontWeight="600"
              textAnchor="middle"
            >
              detector pool
            </text>

            {CHIPS.map((label, i) => {
              const col = i % 2
              const row = Math.floor(i / 2)
              return (
                <motion.text
                  key={label}
                  variants={fadeIn}
                  custom={1.4 + i * 0.07}
                  x={col === 0 ? 18 : 140}
                  y={50 + row * 22}
                  fill="currentColor"
                  fontFamily="ui-monospace,Menlo,monospace"
                  fontSize="10"
                >
                  · {label}
                </motion.text>
              )
            })}

            <text
              x="130"
              y="148"
              fill="currentColor"
              fontFamily="ui-sans-serif,system-ui,-apple-system"
              fontSize="9"
              opacity="0.55"
              textAnchor="middle"
            >
              +2 more · SARIF 2.1.0 out
            </text>
          </motion.g>

          {/* Detector pool → findings */}
          <motion.path
            d="M 720 130 H 780"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            variants={drawIn}
            custom={2.0}
          />

          {/* Findings */}
          <motion.g
            variants={fadeIn}
            custom={2.2}
            transform="translate(780, 98)"
          >
            <rect
              width="180"
              height="64"
              rx="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <text
              x="90"
              y="26"
              fill="currentColor"
              fontFamily="ui-sans-serif,system-ui,-apple-system"
              fontSize="13"
              fontWeight="600"
              textAnchor="middle"
            >
              findings
            </text>
            <text
              x="90"
              y="46"
              fill="currentColor"
              fontFamily="ui-monospace,Menlo,monospace"
              fontSize="10"
              opacity="0.65"
              textAnchor="middle"
            >
              fingerprint stable
            </text>
          </motion.g>

          {/* A second findings rectangle that pulses gently to signal
              the pipeline is "live" once the build sequence settles.
              Suppressed under reduced-motion. */}
          {!reduceMotion && (
            <motion.rect
              x="780"
              y="98"
              width="180"
              height="64"
              rx="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.35, 0] }}
              transition={{
                delay: 2.9,
                duration: 2.4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              style={{ pointerEvents: 'none' }}
            />
          )}
        </motion.g>
      </svg>
    </figure>
  )
}
