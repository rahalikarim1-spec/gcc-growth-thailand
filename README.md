# Wadhah Belhassen — GCC Market Entry & Growth Consultant

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · EN + TH · deployable to Vercel.

## Run

```bash
npm install
npm run dev          # http://localhost:3000  → English at /, Thai at /th/, Arabic at /ar/
npm run lint && npm run typecheck && npm run build
```

Environment (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for canonicals, hreflang, sitemap, JSON-LD. Defaults to `https://arabicmarket.asia` (or `VERCEL_PROJECT_PRODUCTION_URL` on Vercel). |
| `AUDIT_WEBHOOK_URL` | Where audit-form leads are POSTed (Zapier/Make/n8n/CRM). **Unset in production ⇒ the form shows an error** rather than silently dropping leads. |

## Architecture

```
src/
  app/
    [lang]/                 layout (html lang, fonts, header/footer), home, services, industries, contact, insights, OG image
    api/audit/route.ts      validates + forwards the audit form
    sitemap.ts robots.ts icon.svg
  components/               Header(+Client), MegaMenu, LanguageSwitcher, Hero, MarketFlow, TeamDiagram, MedicalFeature,
                            IndustryCard, ServiceCard, ProcessStep, DataInsight, Related{Services,Industries}, FAQ,
                            Breadcrumbs, CTASection, AuditForm, JsonLd, RichText, PageHero, Footer
  content/                  ALL copy. types.ts defines the Dictionary; en/ and th/ implement it.
  lib/                      i18n (locales), routes (slugs + internal-link graph), seo (metadata/hreflang), site, links, audit
```

- **Content is separate from UI.** Each locale implements `Dictionary` (`content/types.ts`); TypeScript fails the build if a locale is missing a page or field.
- **Internal links in copy** use `[anchor](service:slug)` / `[anchor](industry:slug)` / `[anchor](page:contact)` markup, resolved per-locale by `RichText`.
- **Link graph** (service ↔ industry ↔ related) lives in `lib/routes.ts`, not in components.
- **Static generation**: every page is prerendered via `generateStaticParams`; unknown locales/slugs 404.
- **Trailing slashes** are on (`trailingSlash: true`), matching the specified URLs and canonicals.

### Arabic (`/ar/`) and RTL

Arabic is a first-class locale: `locales = ["en","th","ar"]`, `localeMeta.ar.dir = "rtl"`, content in `content/ar/` (same `Dictionary` shape as EN/TH). `[lang]/layout.tsx` sets `<html lang dir>` and loads IBM Plex Sans Arabic (unicode-range, only fetched when Arabic text is present).

- Components use logical properties (`ms-/me-/ps-/pe-/start-/end-/border-s`). Directional icons are mirrored globally under `html[dir="rtl"]` in `globals.css`; the hero image and its scrims are mirrored so the face stays toward the copy.
- Latin-only inputs (URL, email, phone) use `.field-ltr`. The GCC map SVG is pinned `direction: ltr`.
- Arabic typography rules (`html[lang="ar"]`): taller line-height, no letter-spacing (it breaks Arabic joining), no mono/uppercase eyebrow.
- Hreflang (`en`, `th`, `ar`, `x-default`), sitemap alternates and the language switcher pick locales up automatically. The Open Graph image is Latin-only (no Arabic font is bundled for it).

### Contact channels and the audit form

No contact details are invented. `lib/site.ts` (`contactChannels`, `getContactLinks()`) shows email and WhatsApp only when `NEXT_PUBLIC_CONTACT_EMAIL` / `NEXT_PUBLIC_CONTACT_WHATSAPP` are set; the footer, contact page and form error panel pick them up. The form posts to `/api/audit`, which forwards to `AUDIT_WEBHOOK_URL`. If that is unset, production returns 503 and the form shows an error with the available fallback channels, so leads are never silently lost. **Set `AUDIT_WEBHOOK_URL` (and ideally the email/WhatsApp variables) before launch.**

### Structure notes

Eight services (Local SEO & Google Maps added), eleven industries (Education, Professional Services and B2B & Exporters added), a `/how-it-works/` page, and Bahrain in the six GCC markets.

### URL architecture

English is the default locale and has **no prefix** (`/`, `/services/`, `/industries/restaurants/`); Thai is `/th/...` and Arabic `/ar/...`. Internally every page still lives under `src/app/[lang]/`; `next.config.ts` rewrites unprefixed URLs to `/en/...` and 308-redirects legacy `/en/...` URLs to their unprefixed equivalent. Always build links with `localePath(locale, path)` (never hard-code `/en`). Trailing slashes stay on (`trailingSlash: true`). There is no geo/IP/browser-language redirect: the root is always English.

## SEO implementation

Per page: unique `<title>` + description, canonical, `hreflang` (`en`, `th`, `ar`, `x-default`), Open Graph + Twitter. JSON-LD: `Person`, `ProfessionalService`, `WebSite` (home); `Service` + `BreadcrumbList` + `FAQPage` (service pages — FAQ is visible `<details>` content); `WebPage` + `BreadcrumbList` (industries); `BreadcrumbList` on hubs. No `Organization` schema (no registered entity/address is claimed).
Pages now include `/about/` (ProfilePage + Person) and `/industries/restaurants/` (flagged HOT via `HotBadge`; per-vertical "optimises for" line comes from `IndustryPage.model`).
`/insights/` is `noindex` and excluded from the sitemap until verified research exists.

## Content rules baked in

No invented clients, logos, testimonials, awards, statistics, local offices or Thailand/Malaysia client claims. Clinic pages carry a responsibility split and no outcome guarantees. `DataInsight` renders a "Verified data pending" state unless given a `value` + `source`.

## Positioning & geography

Brand: **Wadhah Belhassen — GCC Market Entry & Growth Consultant**, helping businesses in Thailand and Malaysia (umbrella: Southeast Asia) build measurable customer acquisition channels across GCC and Arabic-speaking markets.

- Geography hierarchy in copy: Southeast Asia → Thailand & Malaysia → city examples (Bangkok, Kuala Lumpur, Phuket, Penang, Langkawi) only where they add meaning (restaurants/hotels/travel).
- Market entry means **digital** market entry. Company formation, legal, tax, licensing and regulatory work are explicitly out of scope (stated on the market-entry page, services hub and footer).
- Services (7): GCC Market Entry · Market Intelligence · Arabic Localization · Google Ads & Acquisition · Arabic SEO & AI Search Visibility · Landing Pages & CRO · Analytics, Tracking & Measurement. `customer-journey-optimization` was retired and 308-redirects to `arabic-localization` (see `next.config.ts`).
- `SEA_MARKETS` in `src/lib/routes.ts` reserves `/thailand/` and `/malaysia/` for future market pages (not routed yet; add only with real search demand). Singapore/Indonesia can be added to the same list.
