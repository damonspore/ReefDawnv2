# ReefDawnv2 execution plan

**Status:** Phase 1–2 completed for global chrome (see git history). **Canonical repo:** [github.com/damonspore/ReefDawnv2](https://github.com/damonspore/ReefDawnv2) (`git remote` name `origin`).

## Decisions

- **Avada SEO:** Removed from the theme (all `snippets/avada-seo*.liquid` deleted). Global **Organization** + **WebSite** JSON-LD live in `snippets/reef-seo-global.liquid`.
- **Customization surface:** `assets/reef-custom.css` (after `base.aio.min.css`) and `assets/reef-custom.js` (defer). New sections/snippets use the `reef-` prefix.

## Phases (reference)

1. **Design foundation** — Tokens, Google Fonts (DM Sans / Inter / JetBrains Mono), base snippets, global JSON-LD.
2. **Header, footer, cart** — Sticky glass header (`.reef-header`), slim announcement (`.reef-announcement`), footer wave + dark `.reef-footer` + tagline setting, cart drawer (`.reef-cart-*`), free-shipping threshold in **Theme settings → Reef Telecom**.
3. **Homepage** — Nine-section funnel in `templates/index.json` + `reef-*` sections.
4. **Collection + product card** — `card-product`, filters, SEO zones, pagination strategy.
5. **PDP** — Gallery, tabs, sticky ATC, cross-sell.
6. **SEO** — Meta title patterns, OG/Twitter, canonicals, FAQ/Product/Article JSON-LD, heading audit (extends `meta-tags.liquid` + sections).
7. **Supporting** — Blog, about, search, 404, accounts.
8. **Polish** — Motion, a11y, Lighthouse.

## Publish to GitHub

- **Done:** Repository created; default remote `origin` → `https://github.com/damonspore/ReefDawnv2.git`. Legacy remote preserved as `reefclaude` → ReefClaudeTheme.
- **Branches:** `dev/seo-cro` has Phase 1 work (ahead of older `master` on that line); align default branch / merge in GitHub as you prefer.
- Confirm no secrets in theme files.
