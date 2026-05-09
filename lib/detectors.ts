/**
 * The v2 vulnerability-class catalog.
 *
 * Mirrors the ten-class table in `scanipy/PLAN.md` (lines 73-89). Two
 * classes ship at GA — path-traversal and memory-safety — because those
 * are the only two with shipping detector content as of the v2 beta.
 * The other eight are listed honestly as Roadmap so the page reads as
 * a public, candid catalog rather than an aspirational marketing list.
 *
 * Update this file when:
 *   - A roadmap class moves to GA (status: 'ga') after content lands.
 *   - A new vulnerability class is added to PLAN.md.
 *
 * The detector-catalog table component renders straight from this
 * array — keep entries in the order PLAN.md uses so a reader can
 * cross-reference without re-sorting.
 */

export type DetectorEngine = 'semgrep' | 'codeql' | 'cpg' | 'hybrid'

export interface DetectorEntry {
  /** Slug used as both directory name and table key. */
  id: string
  /** Human label shown in the table heading. */
  name: string
  /** CWE numbers from MITRE CWE-1000, listed in PLAN.md priority order. */
  cwes: number[]
  /** Provider-neutral language tokens (`py`, `js`, `java`, etc.). */
  languages: string[]
  /** Primary engine. `hybrid` runs more than one and dedupes. */
  engine: DetectorEngine
  /** GA = shipping content. Roadmap = manifest exists, content does not. */
  status: 'ga' | 'roadmap'
}

export const detectors: DetectorEntry[] = [
  {
    id: 'injection',
    name: 'Injection',
    cwes: [89, 77, 78, 94],
    languages: ['py', 'js', 'ts', 'java', 'go', 'rb', 'php'],
    engine: 'hybrid',
    status: 'roadmap',
  },
  {
    id: 'deserialization',
    name: 'Deserialization',
    cwes: [502],
    languages: ['py', 'java', 'js', 'ts', 'csharp'],
    engine: 'hybrid',
    status: 'roadmap',
  },
  {
    id: 'memory-safety',
    name: 'Memory safety',
    cwes: [119, 416, 415, 476],
    languages: ['c', 'cpp'],
    engine: 'codeql',
    status: 'ga',
  },
  {
    id: 'path-traversal',
    name: 'Path traversal',
    cwes: [22],
    languages: ['py', 'js', 'ts', 'java', 'go'],
    engine: 'semgrep',
    status: 'ga',
  },
  {
    id: 'ssrf',
    name: 'SSRF',
    cwes: [918],
    languages: ['py', 'js', 'ts', 'java', 'go'],
    engine: 'codeql',
    status: 'roadmap',
  },
  {
    id: 'crypto-misuse',
    name: 'Crypto misuse',
    cwes: [327, 329, 330, 916],
    languages: ['py', 'js', 'ts', 'java', 'go', 'c', 'cpp'],
    engine: 'semgrep',
    status: 'roadmap',
  },
  {
    id: 'authn-authz',
    name: 'Authn / Authz',
    cwes: [285, 639, 863],
    languages: ['py', 'js', 'ts', 'java'],
    engine: 'hybrid',
    status: 'roadmap',
  },
  {
    id: 'race-toctou',
    name: 'Race / TOCTOU',
    cwes: [362, 367],
    languages: ['c', 'cpp', 'java', 'go'],
    engine: 'codeql',
    status: 'roadmap',
  },
  {
    id: 'secrets',
    name: 'Secrets',
    cwes: [798],
    languages: ['py', 'js', 'ts', 'java', 'go', 'rb', 'php', 'c', 'cpp'],
    engine: 'semgrep',
    status: 'roadmap',
  },
  {
    id: 'dep-cve',
    name: 'Dependency CVE',
    cwes: [1104],
    languages: ['py', 'js', 'ts', 'java', 'go', 'rb', 'php'],
    engine: 'semgrep',
    status: 'roadmap',
  },
]
