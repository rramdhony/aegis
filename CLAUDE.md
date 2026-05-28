# Aegis

Single-page site for aegis-ai.solutions.
Aegis is an AI solutions brand.

## Deployment

- **Type:** Cloudflare Pages (project name: `aegis`)
- **Live URLs:** https://aegis-ai.solutions, https://www.aegis-ai.solutions
- **Pipeline:** push to `main` → GitHub Actions → `wrangler pages deploy` → live in ~60s

## Architecture

Single `index.html` with one local asset (`aegis-logo.png`).
No build step, no frameworks, no npm.

### Assets in this repo

- `aegis-logo.png` — main brand logo, referenced by relative path in `index.html`
- `_headers` — Cloudflare Pages cache rules (no-cache for HTML, immutable for images)

### Fonts

Loaded from Google Fonts — check `index.html` `<head>` for current selection.

## What to avoid

- Do not add npm/node_modules — this is intentionally zero-dependency
- Do not use `wrangler deploy` — this is Cloudflare Pages, not a Worker
