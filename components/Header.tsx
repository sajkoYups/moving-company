"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+49 40 12345678";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const t = getTranslations(locale);
  const nav = t.nav as Record<string, string>;
  const header = t.header as Record<string, string>;
  const pathWithoutLocale = pathname?.replace(/^\/(de|en)/, "") || "";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between max-w-[1120px] mx-auto px-6 md:px-8 lg:px-10 h-16">
        <Link href={`/${locale}#top`} className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-lg text-[var(--text)]">{header.brand}</span>
          <span className="text-xs px-2 py-0.5 rounded bg-[var(--bg)] text-[var(--muted)]">{header.hamburgBadge}</span>
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main">
          <Link href={`/${locale}#services`} className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors">{nav.services}</Link>
          <Link href={`/${locale}#pricing`} className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors">{nav.pricing}</Link>
          <Link href={`/${locale}#calculator`} className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors">{nav.calculator}</Link>
          <Link href={`/${locale}#contact`} className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors">{nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex rounded-full bg-[var(--bg)] p-0.5">
            <Link
              href={`/de${pathWithoutLocale}`}
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${locale === "de" ? "bg-[var(--surface)] text-[var(--text)] shadow-sm" : "text-[var(--muted)] hover:text-[var(--text)]"}`}
              aria-current={locale === "de" ? "true" : undefined}
            >
              DE
            </Link>
            <Link
              href={`/en${pathWithoutLocale}`}
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${locale === "en" ? "bg-[var(--surface)] text-[var(--text)] shadow-sm" : "text-[var(--muted)] hover:text-[var(--text)]"}`}
              aria-current={locale === "en" ? "true" : undefined}
            >
              EN
            </Link>
          </div>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors whitespace-nowrap">
            {PHONE}
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between h-14 px-6">
          <Link href={`/${locale}#top`} className="font-bold text-[var(--text)]">{header.brand}</Link>
          <div className="flex rounded-full bg-[var(--bg)] p-0.5">
            <Link href={`/de${pathWithoutLocale}`} className={`px-3 py-1.5 text-sm font-medium rounded-full ${locale === "de" ? "bg-[var(--surface)] shadow-sm" : ""}`}>DE</Link>
            <Link href={`/en${pathWithoutLocale}`} className={`px-3 py-1.5 text-sm font-medium rounded-full ${locale === "en" ? "bg-[var(--surface)] shadow-sm" : ""}`}>EN</Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 px-6 py-2 text-xs text-[var(--muted)] border-t border-[var(--border)] bg-[var(--bg)]">
          <span>{header.workingHours}</span>
          <span>{header.reply24h}</span>
        </div>
      </div>
    </header>
  );
}
