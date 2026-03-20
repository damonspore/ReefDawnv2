# ReefDawnv2

Shopify **Dawn**–based theme for **Reef Telecom** (reeftel.com): “aquatic premium” design system, conversion-focused templates, and native SEO (Avada SEO removed).

## Spec

Product and UX requirements live in the author’s prompt file (reeftel-dawn-reimagine). Implementation follows eight phases: design foundation → global chrome → homepage → collection/card → PDP → SEO polish → supporting pages → QA.

## Key paths

| Area | Location |
|------|----------|
| Design tokens + component utilities | `assets/reef-custom.css` |
| Vanilla JS (scroll reveal, etc.) | `assets/reef-custom.js` |
| Global layout + fonts + JSON-LD | `layout/theme.liquid` |
| Organization / WebSite schema | `snippets/reef-seo-global.liquid` |
| Reusable UI snippets | `snippets/reef-*.liquid` |

## Development

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli): `shopify theme dev` from this directory.
- Uninstall the **Avada SEO** app in the Shopify admin if it was previously used (theme code no longer includes it).

## License

Use and license follow your organization’s policy; theme structure derives from Shopify Dawn.
