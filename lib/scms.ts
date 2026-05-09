/**
 * The four SCM providers scanipy v2 connects to. Each tile on the
 * homepage's SCM-coverage section renders straight from this array.
 *
 * The notes column is one line each (auth modes and self-hosted
 * support), pulled from the v2 beta's connector implementations
 * (`integrations/scm/{github,gitlab,bitbucket,ado}.py`).
 */

export interface ScmEntry {
  id: 'github' | 'gitlab' | 'bitbucket' | 'ado'
  name: string
  /** One-line note: auth modes + self-hosted reach. */
  note: string
}

export const scms: ScmEntry[] = [
  {
    id: 'github',
    name: 'GitHub',
    note: 'PAT, GitHub App installs, OAuth, GHE on a self-hosted base URL.',
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    note: 'PAT or OAuth bearer; self-hosted GitLab via base URL override.',
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket Cloud',
    note: 'Repository / Workspace Access Tokens; HMAC-signed webhooks.',
  },
  {
    id: 'ado',
    name: 'Azure DevOps',
    note: 'PAT (HTTP Basic, empty user); Service Hooks for push events.',
  },
]
