# elbe move — Lead-Gen One-Pager (DE/EN)

**Purpose:** This document defines a clear, no-ambiguity development plan for a bilingual (German/English) one-page website for a Hamburg-based moving company. The site’s sole goal is to generate qualified quote requests. All decisions below are final and intentional.

---

## 1. Business Definition

* **Brand:** elbe move
* **Domain:** Keyword-based `.com` domain (placeholder)
* **Service area:** Hamburg city only
* **Languages:** German (DE) and English (EN)

  * Manual language switch only
  * All copy stored in JSON (no auto-detection)

---

## 2. Core Conversion Strategy

* **Primary conversion:** Quote request form submission
* **Process promise:**

  * User submits details
  * Company performs a **mandatory on-site visit**
  * Final price is agreed **only after inspection**
* **Response time:** Email response within 24 hours
* **Working hours displayed:** Monday–Saturday

The website must strongly communicate that **no final price is given without an on-site visit**.

---

## 3. Services Offered (Day One)

* Private apartment moves (primary focus)
* Furniture disassembly and assembly (kitchen, bedroom, wardrobes, beds)
* Packing service
* Disposal (Sperrmüll)
* Office moves

No services are excluded.

---

## 4. Pricing Strategy (Public-Facing)

Pricing is shown to build trust and qualify leads. All prices are **incl. VAT** and explicitly marked as **non-binding**.

### 4.1 Hourly Pricing

* **One public rate only**
* Displayed as:

  * “2 movers + truck — from 105 EUR / hour (incl. VAT)”
* Minimum hours are **internal only** and never shown on the website.

### 4.2 Package Pricing (Time-Based)

Packages are shown for clarity and simplicity.

* Small move — 3 hours (from-price)
* Medium move — 5 hours (from-price)
* Full-day move (from-price)

Exact package prices are configurable internally.

### 4.3 Apartment Size Pricing Table

A simple, easy-to-understand table is displayed:

* 1 room — from X EUR
* 2 rooms — from X EUR
* 3 rooms — from X EUR
* 4+ rooms — from X EUR

Only **“from” numbers** are shown. No ranges.

---

## 5. Pricing Calculator (Mandatory)

### 5.1 Purpose

The calculator exists to:

* Qualify leads
* Set expectations
* Reinforce the on-site visit requirement

### 5.2 Placement & Behavior

* Positioned **after the pricing section**
* Contact details are **required before showing the result**
* Output is a **single “from” price**, not a range

Displayed message example:

> “Based on your details, your move starts from X EUR. The final price is confirmed after a free on-site visit.”

Strong emphasis on inspection is required.

### 5.3 Calculator Inputs (All Required)

* Move date
* From postal code (Hamburg)
* To postal code (Hamburg)
* Apartment size (rooms or m²)
* Floor (from and to)
* Elevator (from and to)
* Assembly / disassembly items:

  * Kitchen
  * Wardrobe
  * Bed
  * Washing machine

Unknown values are allowed where applicable.

---

## 6. Lead Form Specification

### Required Fields

* Full name
* Phone
* Email
* Move date
* From / To postal code
* Floors + elevator
* Apartment size
* Assembly items

Photo uploads are intentionally excluded.

### Form Rules

* GDPR consent checkbox mandatory
* Spam protection enabled
* Success message confirms on-site visit step

Leads are sent to **email inbox only**.

---

## 7. Trust & Credibility (No Reviews)

No fake or placeholder reviews are used.

Trust is built through factual statements:

* Bilingual German / English team
* Mandatory on-site inspection before pricing
* Clear communication of services and scope
* Careful handling of furniture and personal items

---

## 8. Design Direction

### Brand Personality

* Premium appearance
* Budget-friendly positioning
* Focus on care, not speed

### Color System

(To be defined by design; no client preference)

### Typography

* Modern, clean sans-serif
* High readability

### Layout Principles

* Mobile-first
* One clear CTA per section
* Sticky contact actions on mobile

---

## 9. SEO & Advertising

* Primary traffic source: Google Ads
* Consent Mode v2 implemented
* Self-built cookie and consent banner

### SEO Focus

* “Umzugsfirma Hamburg”
* “Umzug Hamburg Kosten”
* “Moving company Hamburg”

LocalBusiness and FAQ schema included.

---

## 10. Technical Implementation

* Framework: Next.js (SEO-first)
* Styling: Tailwind CSS
* Hosting: Vercel
* Language content: JSON-based i18n
* Forms: API route

### Suggested Structure

/app
/components
/content (i18n JSON)
/lib (pricing + calculator config)

---

## 11. Legal (Germany)

The following pages are required and fully implemented with placeholders:

* Impressum
* Datenschutzerklärung
* Cookie consent

Legal entity data will be updated before launch.

---

## 12. Final Intent Summary

This website:

* Generates quote requests only
* Never promises a final price online
* Enforces an on-site visit before agreement
* Uses pricing transparency to build trust
* Is optimized for Hamburg-based Google Ads traffic

This document is written for direct execution by development without interpretation.
