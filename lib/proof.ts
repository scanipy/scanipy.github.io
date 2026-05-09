/**
 * Build-time GitHub stars fetch for the homepage proof band and the CLI
 * page chip. Static export means there's no ISR — whatever we read at
 * `next build` is what ships, until the next deploy.
 *
 * `STAR_FALLBACK` is the floor the page renders when the fetch fails
 * (rate limit, offline build, GitHub outage). Bump it to roughly track
 * reality so a failed build doesn't visibly under-state social proof.
 */

const STAR_FALLBACK = 30
const REPO = 'papadoxie/scanipy'

export interface RepoProof {
  stars: number
  /** True when the value came from the live fetch. */
  fresh: boolean
}

export async function getRepoProof(repo: string = REPO): Promise<RepoProof> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { 'User-Agent': 'scanipy-website-build' },
      // The static export path runs this once at build time. No revalidation needed.
      cache: 'force-cache',
    })
    if (!res.ok) {
      return { stars: STAR_FALLBACK, fresh: false }
    }
    const data = (await res.json()) as { stargazers_count?: number }
    if (typeof data.stargazers_count !== 'number') {
      return { stars: STAR_FALLBACK, fresh: false }
    }
    return { stars: data.stargazers_count, fresh: true }
  } catch {
    return { stars: STAR_FALLBACK, fresh: false }
  }
}

export const repoUrl = `https://github.com/${REPO}`
