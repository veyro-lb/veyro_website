# Veyro

Recovered static Veyro website, prepared for GitHub and Cloudflare Workers Static Assets.

## Structure

- `public/index.html` — website page
- `public/assets/styles.css` — styles
- `public/assets/main.js` — interactions
- `public/assets/favicon.svg` — reconstructed favicon
- `wrangler.jsonc` — Cloudflare Worker configuration

## Deploy to the existing Cloudflare Worker

The Worker name is `veyro` and static assets are served from `./public/`.

Cloudflare build settings:

- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Non-production branch deploy command: `npx wrangler versions upload`
- Root directory / Path: `/`

Do not delete the existing Worker before confirming the Git-connected deployment works.
