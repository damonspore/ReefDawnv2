# ReefDawnv2 execution plan

**Status:** Phase 1 in progress / completed (see git history). **Target repo:** **ReefDawnv2** on GitHub.

## Decisions

- **Avada SEO:** Removed from the theme (all `snippets/avada-seo*.liquid` deleted). Global **Organization** + **WebSite** JSON-LD live in `snippets/reef-seo-global.liquid`.
- **Customization surface:** `assets/reef-custom.css` (after `base.aio.min.css`) and `assets/reef-custom.js` (defer). New sections/snippets use the `reef-` prefix.

## Phases (reference)

1. **Design foundation** — Tokens, Google Fonts (DM Sans / Inter / JetBrains Mono), base snippets, global JSON-LD.
2. **Header, footer, cart** — Sticky glass header, dark footer + wave, cart drawer enhancements.
3. **Homepage** — Nine-section funnel in `templates/index.json` + `reef-*` sections.
4. **Collection + product card** — `card-product`, filters, SEO zones, pagination strategy.
5. **PDP** — Gallery, tabs, sticky ATC, cross-sell.
6. **SEO** — Meta title patterns, OG/Twitter, canonicals, FAQ/Product/Article JSON-LD, heading audit (extends `meta-tags.liquid` + sections).
7. **Supporting** — Blog, about, search, 404, accounts.
8. **Polish** — Motion, a11y, Lighthouse.

## Publish to GitHub

- Add remote `ReefDawnv2`, push `main`.
- Confirm no secrets in theme files.
