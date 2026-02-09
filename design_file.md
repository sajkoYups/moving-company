# Design Plan — elbe move One-Pager (DE/EN)

**File:** `design_plan.md`
**Goal:** A premium-looking, high-converting one-pager for a Hamburg moving company with budget-friendly pricing. Bilingual (DE/EN), manual language switch, SEO-first. Primary conversion: form submission. Strong emphasis: **final quote only after mandatory on-site visit**.

---

## 1) Design Principles (Non-negotiable)

1. **Care-first positioning**: visuals + copy emphasize careful handling and inspection-based quoting.
2. **Single primary CTA** repeated consistently: “Request a quote” / “Angebot anfragen”.
3. **Scannable sections**: short headings, bullet points, cards, clear hierarchy.
4. **Mobile-first**: 70%+ traffic expectation from Google Ads.
5. **Trust without reviews**: no fake stars or testimonials; only factual trust statements.
6. **Conversion clarity**: show the process visually: Submit → Visit → Final quote.
7. **Bilingual UX**: language switch always visible, strings from JSON.

---

## 2) Visual System

### 2.1 Layout grid

* Max content width: **1120px**
* Page padding: **24px** (mobile), **32px** (tablet), **40px** (desktop)
* Section vertical spacing:

  * Mobile: **56–72px**
  * Desktop: **80–104px**
* Grid:

  * Mobile: single column
  * Desktop: 12-column grid

### 2.2 Type scale

Use a modern sans-serif: **Inter** (fallback: system UI).

* H1: 40px (mobile) / 56px (desktop), 700
* H2: 28px / 36px, 700
* H3: 20px / 24px, 600
* Body: 16px / 18px, 400–500
* Small: 13px / 14px
* Line height: 1.4–1.6

### 2.3 Color tokens

Define tokens in Tailwind theme variables (CSS variables recommended).

**Core tokens**

* `--bg`: #F7F9FB
* `--surface`: #FFFFFF
* `--text`: #0F172A
* `--muted`: #475569
* `--border`: #E2E8F0

**Brand tokens (choose final colors once, keep tokens stable)**

* `--primary`: deep navy
* `--accent`: warm CTA color (high contrast)
* `--secondary`: teal/cool accent

**State tokens**

* `--success`: #16A34A
* `--error`: #DC2626
* `--warning`: #F59E0B

Accessibility:

* CTA buttons must meet contrast for text.

### 2.4 Radius, shadow, borders

* Radius:

  * Buttons: 12px
  * Cards: 16px
  * Inputs: 12px
* Border: 1px `--border`
* Shadows:

  * Card default: subtle (y=8 blur=24, low opacity)
  * Hover: slightly stronger

### 2.5 Icon system

* Use line icons only.
* Consistent stroke width.
* Icons only support meaning (do not overload).

### 2.6 Imagery direction

* Hero image: moving crew carrying items carefully (neutral, modern).
* Avoid cheap stock clichés.
* No fake team photos. If none, use neutral “hands + boxes” or truck detail.

---

## 3) Page Structure & Section-by-Section Design

### 3.1 Sticky Top Bar (Header)

**Purpose:** constant trust + language switch + quick contact.

**Desktop layout**

* Left: brand placeholder logo + “Hamburg” badge
* Center: nav anchors (Services, Pricing, Calculator, Contact)
* Right: language switch + phone

**Mobile layout**

* Top row: logo left, language switch right
* Below: thin info strip with working hours “Mon–Sat” and “Reply within 24h”

**Language switch**

* Two pills: DE / EN
* Active state clearly highlighted

**Phone display**

* Show phone label even if primary conversion is form
* Tap-to-call enabled

---

### 3.2 Hero + Primary Quote Form

**Purpose:** immediate conversion.

**Hero composition (desktop)**

* Left: headline + trust bullets + process highlight
* Right: compact form card

**Hero composition (mobile)**

* Headline → bullets → process highlight → form card

**Required hero elements**

* H1 emphasizes care + on-site visit:

  * EN: “Careful moves in Hamburg — final quote after on-site visit”
  * DE: “Sorgfältiger Umzug in Hamburg — Festpreis nach Vor-Ort-Termin”
* 3 trust bullets:

  * Bilingual team
  * Mandatory on-site inspection
  * Reply within 24h
* Process mini-strip (3 steps) directly under bullets:

  * Submit → Visit → Final quote

**Hero form card**

* Title: “Request a quote” / “Angebot anfragen”
* Minimal fields only (fast):

  * Name
  * Phone
  * Email
  * Move date
  * From ZIP
  * To ZIP
  * CTA button
* Below CTA: small GDPR line + consent checkbox
* Microcopy: “Final price confirmed after a free on-site visit.”

**Validation states**

* Inline errors under fields
* Submit disabled until required fields valid + consent checked

---

### 3.3 Trust Statements (No Reviews)

**Purpose:** replace social proof.

Display as 3–4 cards with icons:

* Bilingual German/English communication
* Mandatory inspection before final quote
* Careful handling & protection
* Clear scope confirmation before move day

No star ratings. No testimonial quotes.

---

### 3.4 Services

**Purpose:** show scope clearly.

Grid of service cards (6):

* Private moves
* Office moves
* Packing
* Assembly/disassembly (kitchen/bedroom)
* Disposal
* Boxes & materials (if offered)

Each card:

* Icon
* Title
* 1–2 lines description

---

### 3.5 How It Works (Inspection-first)

**Purpose:** enforce the process.

Design:

* Horizontal stepper (desktop), vertical stepper (mobile)

Steps:

1. Request a quote (form)
2. We schedule a **mandatory on-site visit**
3. Final quote confirmed after inspection
4. Move day with confirmed scope

Add an emphasized banner below:

* “We do not confirm final prices without inspection.”

---

### 3.6 Pricing

**Purpose:** transparency + qualification.

Layout: 3 pricing blocks + a simple table.

**Block A — Hourly anchor**

* Card with big number: “from 105 EUR/h (incl. VAT)”
* Subtitle: “2 movers + truck”
* What’s included list (short)
* Disclaimer: “Final quote after visit”

**Block B — Packages**

* Three mini-cards (3h / 5h / full day)
* Each shows “from X EUR”
* Keep copy simple

**Block C — Apartment table**

* 1 room / 2 rooms / 3 rooms / 4+ rooms
* Each: “from X EUR”
* Note: “Exact price confirmed after visit”

Design requirements:

* Avoid heavy pricing detail (no stair fee numbers).
* Always display “incl. VAT”.

---

### 3.7 Calculator (Lead Gate)

**Purpose:** capture leads and qualify.

Placement: immediately after Pricing.

**Calculator card design**

* Left: short explanation
* Right: fields

**Gate behavior**

* User fills contact fields + consent
* Then calculator returns:

  * “Your move starts from X EUR”
  * Strong visit emphasis line below

**Calculator fields (required)**

* Contact gate:

  * Name
  * Phone
  * Email
  * GDPR consent
* Move inputs:

  * Move date
  * From ZIP
  * To ZIP
  * Size (rooms or m²)
  * From floor + elevator
  * To floor + elevator
  * Assembly items: kitchen, wardrobe, bed, washing machine

**Result area**

* Big “from X EUR”
* Smaller disclaimer
* CTA button: “Submit quote request” (same lead pipeline)

---

### 3.8 Care & Standards (Why us)

**Purpose:** reinforce premium look.

Two-column layout:

* Left: “How we protect your items” bullets (blankets, straps, careful loading)
* Right: “Before move day we confirm…” bullets (scope, parking, access)

No claims about insurance unless legally accurate and actually offered.

---

### 3.9 FAQ

**Purpose:** reduce friction.

Accordion list with 8–10 Qs.
Mandatory inclusions:

* Why on-site visit is required
* How fast the reply comes (24h)
* What happens after form submission
* Assembly/disassembly scope
* Disposal process
* Weekend moves
* Parking / access (general)
* VAT included

---

### 3.10 Contact Section

**Purpose:** secondary conversion.

Content:

* Short contact form (same as hero but longer version) OR reuse same component
* Business hours: Mon–Sat
* Email address
* Phone
* Service area: Hamburg

Map:

* Use a simple static Hamburg outline graphic or no map.
* Avoid embedding heavy interactive maps for performance.

---

### 3.11 Footer

Required links:

* Impressum
* Datenschutz
* Cookie settings

Also:

* Placeholder legal entity data marked “to be updated before launch”

---

## 4) Components Specification

### 4.1 Buttons

**Primary**

* Filled accent
* 48px height
* Loading state with spinner

**Secondary**

* Outline primary
* Hover background

### 4.2 Inputs

* 48px height
* Label above input
* Required asterisk
* Error message below

### 4.3 Cards

* Surface background
* Border + subtle shadow
* Hover shadow slightly stronger

### 4.4 Accordion

* Keyboard accessible
* Smooth open/close

### 4.5 Sticky mobile CTA bar

Even though conversion is form-first, include mobile sticky bar:

* Button 1: “Request a quote” (scroll to hero form)
* Button 2: “Call” (tap-to-call)

---

## 5) Interaction & Animation Rules

* Use minimal motion (premium feel)
* Allowed:

  * 150–220ms hover transitions
  * Fade-in on section entry (subtle)
* Avoid:

  * excessive parallax
  * large scroll animations

---

## 6) Accessibility & Performance

* Keyboard navigable
* Focus rings visible
* Headings hierarchical (H1 → H2 → H3)
* Images optimized and lazy-loaded
* Lighthouse targets:

  * Performance: 90+
  * Accessibility: 95+
  * Best practices: 95+
  * SEO: 90+

---

## 7) Bilingual Implementation Notes (Design-related)

* Language switch is always visible in header.
* All copy is read from `i18n.de.json` and `i18n.en.json`.
* Layout must handle longer German strings:

  * Buttons may wrap to two lines on small screens.
  * Pricing labels must not overflow.

---

## 8) Tracking (UI Event Points)

Tracked events (UI locations must exist):

* Form submit (hero)
* Form submit (contact section)
* Calculator submit / reveal result
* Scroll to section (optional)
* Tap-to-call

Consent Mode v2 is required; tracking must respect consent.

---

## 9) Deliverables (Design)

* Tokenized theme (colors, spacing, typography)
* Responsive layout for all sections
* Components implemented with consistent states
* No review UI elements
* Strong on-site visit emphasis in hero, how-it-works, pricing, calculator

---

## 10) Cursor Implementation Notes

Cursor should implement:

* Component-first architecture
* Shared `Section` wrapper component for consistent spacing
* Shared `Card`, `Button`, `Input`, `Accordion` primitives
* A single `LeadForm` component used in hero and contact
* A `Calculator` component that uses the same lead pipeline

This document is the single source of truth for design implementation.
