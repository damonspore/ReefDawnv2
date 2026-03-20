# ReefDawnv2 execution plan

**Status:** Phases **1–8** completed (polish / QA baseline — see Phase 8 below). **Canonical repo:** [github.com/damonspore/ReefDawnv2](https://github.com/damonspore/ReefDawnv2) (`git remote` name `origin`).

### Phase 3 verification (code + editor)

- **Homepage:** Nine-section funnel in [`templates/index.json`](../templates/index.json): `reef-hero` → `reef-logo-bar` → `reef-category-grid` → `featured-collection` → `multicolumn` → `image-with-text` (mission) → `reef-testimonials` → `featured-blog` → `reef-newsletter-strip`.
- **Featured blog:** Default blog handle set to `reef-telecom-knowledge-base-how-tos` (matches [`templates/page.llms-txt.liquid`](../templates/page.llms-txt.liquid)); change in the theme editor if your blog handle differs.
- **Category grid:** Optics card uses collection `all` with title override “Fiber optics & transceivers” so it does not duplicate `ai-solutions`; point it at a real optics collection when you have one.
- **Mission block:** `image-with-text` image is still empty in JSON — add imagery in the theme editor.
- **Logo bar:** Upload partner logos per block (alts are placeholders).
- **Theme check:** `reef-*` section Liquid passes inspection; remaining CLI offenses are mostly Dawn baseline (e.g. locale parity, third-party URLs in `theme.liquid`).

### Phase 4 — Collection + product card

- **Product cards:** [`snippets/card-product.liquid`](../snippets/card-product.liquid) — `reef-card-product` wrapper; optional **`custom.reef_condition`** metafield drives [`snippets/reef-condition-badge.liquid`](../snippets/reef-condition-badge.liquid).
- **Collection template:** [`sections/main-collection-banner.liquid`](../sections/main-collection-banner.liquid) (`reef-collection-hero`); [`sections/main-collection-product-grid.liquid`](../sections/main-collection-product-grid.liquid) (`reef-collection-grid`, translated product count row).
- **Pagination:** [`snippets/pagination.liquid`](../snippets/pagination.liquid) accepts optional `wrapper_class`; collection grid passes `reef-collection-pagination` for styling in [`assets/reef-custom.css`](../assets/reef-custom.css).
- **SEO:** **CollectionPage** JSON-LD with `mainEntity` **ItemList** (Product `url` / optional `image`), `isPartOf` **WebSite**; `rel="prev"` / `rel="next"` unchanged; list positions use `paginate.current_offset` + index.

### Phase 5 — PDP (gallery, tabs, sticky ATC, cross-sell)

- **Layout hooks:** [`sections/main-product.liquid`](../sections/main-product.liquid) — `reef-product` on `<product-info>`, `reef-product__gallery` on media column, `reef-product__info` on the info column; existing **sticky column** via `enable_sticky_info` (Dawn).
- **Metafields:** New block **Reef — PDP meta** renders [`snippets/reef-pdp-meta.liquid`](../snippets/reef-pdp-meta.liquid): **`custom.reef_condition`** (badge) + optional **`custom.reef_pdp_note`** (rich text via `metafield_tag`). Add block in theme editor if missing from JSON.
- **Sticky ATC (mobile):** Buy buttons wrapped in **`.reef-product-sticky-atc`** — sticky bottom bar & blur (see [`assets/reef-custom.css`](../assets/reef-custom.css)).
- **Cross-sell:** **Complementary** block (`Pairs well with`) in [`templates/product.json`](../templates/product.json) after buy buttons; **Related products** section uses **`reef-related-products`** on [`sections/related-products.liquid`](../sections/related-products.liquid).
- **Gallery / tabs:** Thumbnail + lightbox behavior unchanged (Dawn); accordions (Description / Specs / Shipping) get light **Reef** typography under `.reef-product`.

### Phase 6 — SEO (meta, OG/Twitter, canonicals, JSON-LD)

- **Canonical & title:** [`layout/theme.liquid`](../layout/theme.liquid) — `<link rel="canonical">` + title pattern (page title, tags, pagination, brand suffix when missing).
- **OG / Twitter:** [`snippets/meta-tags.liquid`](../snippets/meta-tags.liquid) — existing OG/Twitter; **product** adds `product:availability`; **article** adds `article:published_time`, `article:modified_time`, `article:author`, `article:section`.
- **Global JSON-LD:** [`snippets/reef-seo-global.liquid`](../snippets/reef-seo-global.liquid) — Organization + WebSite (SearchAction), unchanged.
- **Per-page JSON-LD:** [`snippets/reef-seo-page.liquid`](../snippets/reef-seo-page.liquid) — **BreadcrumbList** (product with first collection when present, collection, article, blog index, page, search WebPage); **Article** schema on blog posts (headline, dates, author, publisher, optional image/description). Rendered from [`layout/theme.liquid`](../layout/theme.liquid) after `reef-seo-global`.
- **Product / collection in-page:** [`sections/main-product.liquid`](../sections/main-product.liquid) **Product** JSON-LD and [`sections/main-collection-product-grid.liquid`](../sections/main-collection-product-grid.liquid) **CollectionPage** / ItemList remain the source of truth for PDP/collection rich results.
- **Locales:** [`locales/en.default.json`](../locales/en.default.json) — `reef.breadcrumb.home` for breadcrumb name in JSON-LD.
- **Heading audit:** One **h1** per template is standard in Dawn (product title, collection hero, article title, blog title); visible breadcrumbs live in [`snippets/breadcrumbs.liquid`](../snippets/breadcrumbs.liquid) where used.

### Phase 7 — Supporting (blog, about/page, search, 404, accounts)

- **Body classes:** [`layout/theme.liquid`](../layout/theme.liquid) — `reef-body` + `reef-template--{name}` (dots → hyphens) for template-scoped CSS; [`layout/password.liquid`](../layout/password.liquid) — `reef-body reef-template--password`.
- **Blog & article:** [`sections/main-blog.liquid`](../sections/main-blog.liquid) — `reef-support reef-support--blog`; [`sections/main-article.liquid`](../sections/main-article.liquid) — `reef-support reef-support--article` on `<article>`.
- **Pages (About, generic):** [`sections/main-page.liquid`](../sections/main-page.liquid) — `reef-support reef-support--page`. Contact pages using [`sections/contact-form.liquid`](../sections/contact-form.liquid) — `reef-support reef-support--contact`.
- **Search:** [`sections/main-search.liquid`](../sections/main-search.liquid) — `reef-support reef-support--search`.
- **404:** [`sections/main-404.liquid`](../sections/main-404.liquid) — `reef-support reef-support--404`; search form uses `reef-404-search` / `reef-404-search__form`; contact link prefers `pages.contact`, then `pages['contact-us-1']`, else `/pages/contact`.
- **Collections index:** [`sections/main-list-collections.liquid`](../sections/main-list-collections.liquid) — `reef-support reef-support--collections-list`.
- **Accounts:** [`sections/main-account.liquid`](../sections/main-account.liquid), [`main-login.liquid`](../sections/main-login.liquid), [`main-register.liquid`](../sections/main-register.liquid), [`main-activate-account.liquid`](../sections/main-activate-account.liquid), [`main-reset-password.liquid`](../sections/main-reset-password.liquid), [`main-order.liquid`](../sections/main-order.liquid), [`main-addresses.liquid`](../sections/main-addresses.liquid) — `reef-account reef-support` on the main customer wrapper.
- **Styles:** [`assets/reef-custom.css`](../assets/reef-custom.css) — Phase 7 block: headings, 404 form/actions, account tables, contact titles.

### Phase 8 — Polish (motion, a11y, Lighthouse-oriented defaults)

- **Motion:** [`assets/reef-custom.js`](../assets/reef-custom.js) — `prefers-reduced-motion` sets `reef-reduced-motion` on `<html>`, listens for preference changes, skips scroll-reveal `IntersectionObserver` when reduced, adds `is-visible` to `.reef-reveal` as a fallback. Hero gradient + `.reef-reveal` CSS already gated in [`assets/reef-custom.css`](../assets/reef-custom.css); testimonials autoplay off when reduced ([`sections/reef-testimonials.liquid`](../sections/reef-testimonials.liquid)).
- **Scroll-in animations:** Under `prefers-reduced-motion: reduce`, Dawn `.scroll-trigger.animate--*` is forced visible (no transform/animation).
- **Focus & keyboard:** `:focus-visible` rings (teal outline) for links, buttons, inputs, `summary`, tabbable elements; stronger primary button ring; skip link visible focus state (`.skip-to-content-link`).
- **Contrast:** `prefers-contrast: more` slightly strengthens borders on buttons/inputs.
- **Lighthouse:** No theme change replaces running **PageSpeed / Lighthouse** in Chrome on key templates (home, collection, PDP, article); defer `reef-custom.js`, existing lazy images, and `theme-color` meta in [`layout/theme.liquid`](../layout/theme.liquid) support good scores — verify LCP image priority and third-party scripts in production.

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
