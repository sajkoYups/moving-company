# Implementation Steps — Moving Company Hamburg

Track what has been implemented and what has not. Update this file on every meaningful change.

---

## Change log

- **2025-02-08** — Created STEPS.md with full checklist and change log.
- **2025-02-08** — Bootstrap: Next.js app (App Router, TS, Tailwind), project folders (/app, /components, /content, /lib).
- **2025-02-08** — Phase A: Locale routing [locale], root layout, i18n (de.json, en.json), language switcher DE/EN.
- **2025-02-08** — Phase B: Hero, Services, Pricing (hourly, packages, apartment table), Trust, Footer, /lib/pricing.ts.
- **2025-02-08** — Phase C: /lib/calculator.ts, Calculator UI (contact gate, single "from" price).
- **2025-02-08** — Phase D: Quote form (required fields, GDPR, honeypot), POST /api/quote, Resend email integration, .env.example.
- **2025-02-08** — Phase E: Impressum and Datenschutz placeholder pages, Cookie banner, Consent Mode v2 (default denied).
- **2025-02-08** — Phase F: Metadata per locale, LocalBusiness + FAQ JSON-LD, target keywords in content, .env.example for Vercel.
- **2025-02-08** — Design (design_file.md): tokens, Inter, Section/Card/Button/Input/Accordion, LeadForm, Header (sticky, DE/EN pills, phone), Hero (H1, trust bullets, process strip, form card), Trust (4 cards), Services (6 cards), HowItWorks (stepper + banner), Pricing (3 blocks), Calculator (gate + result + CTA), Care & Standards, FAQ accordion, Contact (LeadForm + hours/email/phone), Footer (Impressum, Datenschutz, Cookie settings), Sticky CTA (Request quote + Call).

---

## Checklist

### Bootstrap

- [x] Next.js app created (App Router, TS, Tailwind)
- [x] Project folders (/app, /components, /content, /lib) in place

### Phase A: Foundation

- [x] Locale routing ([locale] or equivalent)
- [x] Root layout (Tailwind, font, cookie banner hook)
- [x] i18n (de.json, en.json + loader/context)
- [x] Language switcher (DE/EN, no auto-detect)

### Phase B: Content & pricing

- [x] Hero section
- [x] Services section
- [x] Pricing section (hourly, packages, apartment table)
- [x] Trust section
- [x] Footer section
- [x] /lib/pricing.ts (configurable values)

### Phase C: Calculator

- [x] /lib/calculator.ts (logic, single "from" price)
- [x] Calculator UI (inputs, contact gate, result message)

### Phase D: Quote form & API

- [x] Quote form (required fields, GDPR checkbox, honeypot)
- [x] POST /api/quote (validate, spam check, send email)
- [x] Email integration (Resend or Nodemailer) + .env.local

### Phase E: Legal & cookie consent

- [x] Impressum page (placeholder)
- [x] Datenschutz page (placeholder)
- [x] Cookie banner (self-built, store consent)
- [x] Consent Mode v2 (gtag ad_storage, analytics_storage)

### Phase F: SEO & deployment

- [x] Metadata (title, description per locale)
- [x] LocalBusiness + FAQ schema (JSON-LD)
- [x] Target keywords in copy/meta
- [x] Vercel-ready (env vars documented)

---

## Next up

1. Replace legal placeholders (Impressum, Datenschutz) before launch.
2. Set QUOTE_EMAIL_TO and optionally RESEND_API_KEY / RESEND_FROM_EMAIL in .env.local and Vercel.
3. Set NEXT_PUBLIC_GA_ID for Google Ads / Analytics with Consent Mode v2.
4. Deploy to Vercel and connect repo.
