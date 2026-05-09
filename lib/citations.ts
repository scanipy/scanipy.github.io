/**
 * Single source of truth for the academic references the site cites.
 *
 * Five entries — five distinct references across the homepage. Adding
 * a sixth pads the section and weakens the others; if a new reference
 * lands here, audit whether one of the existing five should retire.
 *
 * The `oneLineGist` is the muted-text caption rendered immediately
 * under each pillar/section. Keeping it on the data record (not in the
 * page body) prevents the citation copy and the marketing prose from
 * drifting.
 */

export type CitationId =
  | 'cpg-yamaguchi-2014'
  | 'engler-coverity-2010'
  | 'iris-stanford-2024'
  | 'mariana-trench'
  | 'cwe-1000'

export interface Citation {
  id: CitationId
  authors: string
  /** Italicised in the rendered citation. */
  title: string
  /** Conference / journal / project name. */
  venue: string
  year: number
  url: string
  /** Caption shown under the pillar/section that cites this work. */
  oneLineGist: string
}

export const citations: Record<CitationId, Citation> = {
  'cpg-yamaguchi-2014': {
    id: 'cpg-yamaguchi-2014',
    authors: 'Yamaguchi, Golde, Arp, Rieck',
    title: 'Modeling and Discovering Vulnerabilities with Code Property Graphs',
    venue: 'IEEE Symposium on Security and Privacy',
    year: 2014,
    url: 'https://ieeexplore.ieee.org/document/6956589',
    oneLineGist:
      'Yamaguchi et al. (IEEE S&P 2014) introduced the Code Property Graph as a unified IR over which class-specific queries operate.',
  },
  'engler-coverity-2010': {
    id: 'engler-coverity-2010',
    authors: 'Bessey, Block, Chelf, Chou, Fulton, Hallem, Henri-Gros, Kamsky, McPeak, Engler',
    title: 'A Few Billion Lines of Code Later',
    venue: 'Communications of the ACM',
    year: 2010,
    url: 'https://cacm.acm.org/research/a-few-billion-lines-of-code-later/',
    oneLineGist:
      'Coverity (CACM 2010) showed class-specific checkers with domain knowledge consistently beat monolithic SAST.',
  },
  'iris-stanford-2024': {
    id: 'iris-stanford-2024',
    authors: 'Li, Yu, Wang, Lattner, Aiken, Yin, Lipp',
    title: 'IRIS: LLM-Assisted Static Analysis for Detecting Security Vulnerabilities',
    venue: 'arXiv',
    year: 2024,
    url: 'https://arxiv.org/abs/2405.17238',
    oneLineGist:
      'IRIS (Li et al., Stanford 2024) treats LLMs as triage and spec-inference helpers; detection stays deterministic.',
  },
  'mariana-trench': {
    id: 'mariana-trench',
    authors: 'Meta',
    title: 'Mariana Trench',
    venue: 'open-source taint analyser',
    year: 2021,
    url: 'https://mariana-tren.ch/',
    oneLineGist:
      'Detectors ship as (rules + queries + source/sink models) — the Mariana Trench, Pysa, and FlowDroid pattern.',
  },
  'cwe-1000': {
    id: 'cwe-1000',
    authors: 'MITRE',
    title: 'CWE-1000: Research Concepts',
    venue: 'CWE',
    year: 2024,
    url: 'https://cwe.mitre.org/data/definitions/1000.html',
    oneLineGist:
      'Every finding is anchored to MITRE CWE-1000 (Research view) so it lands in your compliance reports unchanged.',
  },
}
