# scanipy.com

The marketing site for [Scanipy](https://github.com/papadoxie/scanipy) — vulnerability detection by CWE class, multi-SCM, deterministic by default.

Static-export Next.js 16 site, deployed to GitHub Pages on
[scanipy.com](https://scanipy.com) via the workflow at
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Routes

| Route | Source | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | SaaS marketing pitch — the v2 platform |
| `/cli` | `app/cli/page.tsx` | The open-source CLI (research-mode framing) |
| `/research` | `app/research/page.tsx` | Academic-bibliography credibility doc (footer-linked only) |
| `/docs/...` | `app/docs/[[...slug]]/page.tsx` | CLI documentation (banner makes the scope explicit) |

The top nav is context-sensitive via `<SiteNav showDocs?: boolean>`:

- `/` hides the **Docs** link (the SaaS audience doesn't lead with CLI docs).
- `/cli` and `/docs/*` surface the **Docs** link.
- The footer always carries a Docs link so a visitor on `/` can reach the docs in one click.

## Operator-facing knobs

Three constants drive most of the visible copy. Edit these instead of the page bodies when you're updating data, not narrative.

| File | What it owns |
|---|---|
| [`lib/cta.ts`](lib/cta.ts) | `demoBookingUrl` — the "Get a demo" target. Replace the placeholder Cal.com URL with your real booking link. |
| [`lib/detectors.ts`](lib/detectors.ts) | The 10-class catalog table. Move a class from `roadmap` to `ga` here when its content ships. |
| [`lib/scms.ts`](lib/scms.ts) | The four SCM-coverage tiles (auth-mode notes). |
| [`lib/proof.ts`](lib/proof.ts) | Build-time GitHub-stars fetch for the proof band. `STAR_FALLBACK` is the floor a failed network fetch falls back to — bump it to roughly track reality so a broken build doesn't visibly under-state social proof. |
| [`lib/citations.ts`](lib/citations.ts) | The five academic references rendered on `/research`. Cap is five; if a sixth lands, retire one. |
| [`lib/site.ts`](lib/site.ts) | `siteTitle`, `siteDescription` — used in the `<title>` tag and OG / Twitter cards. |

## Anti-"AI-generated default" rules in force

Don't ship copy that violates these — they're the levers that keep this site from reading like a v0.app scaffold.

1. **No vague stats.** No "1M+ scanned" / "millions of repos." If a number ships, it cites a specific advisory.
2. **No banned generic adjectives.** A pre-deploy grep on `out/index.html` and `out/cli.html` checks for `powerful|robust|advanced|seamless|unleash|supercharge|comprehensive|transformative|empower`. Zero matches expected.
3. **No academic citations on marketing pages.** The marketing audience doesn't lead with academic references; the same grep also flags `Yamaguchi|Engler|IRIS|Mariana|CWE-1000` as zero-match on the homepage and `/cli`. Those references live on `/research` instead, footer-linked only.
4. **One CTA per page.** `<DemoCTA />` is the only conversion target on `/`. No `[Get a demo] [See pricing]` pairs.
5. **No fake customer logos.** The proof band renders SCM wordmarks + a build-time GitHub stars chip + a real CVE chip. No vendor-logo PNGs masquerading as customers.
6. **Real artefacts inline.** SARIF excerpts, CLI command snippets, and the dataflow pipeline are real syntax / real architecture (no fake-looking terminal mockups).
7. **Editorial layout cues.** Every H2 carries a `<SectionEyebrow>` label (small caps, tracking-wide). That single rule is the strongest "this isn't a v0 scaffold" tell.

## Asset gaps to close before launch

These were left as TODO items by the rewrite plan (see commit history):

- [ ] **`public/og-image.png`** — replace the v0.app-era OG image with a 1200×630 designed card showing either the architecture diagram or the catalog table with the new tagline. The metadata wiring (`app/layout.tsx`) already references `/og-image.png`; just swap the file.
- [ ] **Lighthouse pass.** Run incognito Chrome Lighthouse on `/` and `/cli` and confirm Performance / Accessibility / Best Practices / SEO ≥ 95.
- [ ] **Real CLI screenshot.** The hero right-column currently uses a `<SarifExcerpt>` block with literal text. A captured PNG of `python scanipy.py --query extractall --run-semgrep` finishing a real run would be more visually striking; commit it as `public/hero-cli.png` and reference from `app/page.tsx`.

## Deployment

`.github/workflows/deploy.yml` builds on push to `main` and deploys via the GitHub Pages action. The CNAME is `scanipy.com`.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI primitives | shadcn/ui + Radix |
| Styling | Tailwind CSS v4 |
| Fonts | Geist + Geist Mono (Google Fonts) |
| Markdown rendering (docs) | `remark-gfm`, `remark-rehype`, `rehype-highlight` |
| Theming | `next-themes` |
| Analytics | `@vercel/analytics` |
| Build target | `next build` with `output: 'export'` (static HTML to `out/`) |
| Hosting | GitHub Pages (custom domain via CNAME) |
