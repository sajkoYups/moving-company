"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

/** Impressum, Datenschutz, Cookie settings (design_file §3.11) */
export function Footer({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const nav = t.nav as Record<string, string>;
  const footer = t.footer as Record<string, string>;

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 md:px-8 lg:px-10 py-10">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href={`/${locale}/impressum`} className="hover:text-[var(--text)] transition-colors">
            {nav.impressum}
          </Link>
          <span aria-hidden>·</span>
          <Link href={`/${locale}/datenschutz`} className="hover:text-[var(--text)] transition-colors">
            {nav.datenschutz}
          </Link>
          <span aria-hidden>·</span>
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                localStorage.removeItem("moving-company-cookie-consent");
                window.dispatchEvent(new Event("cookie-settings-open"));
              }
            }}
            className="hover:text-[var(--text)] transition-colors"
          >
            {footer.cookieSettings}
          </button>
        </div>
        <p className="text-center md:text-right">
          {footer.workingHours} · {footer.response}
        </p>
      </div>
      <p className="max-w-[1120px] mx-auto mt-4 text-xs text-[var(--muted)] text-center">
        {locale === "de" ? "Rechtliche Angaben vor dem Launch aktualisieren." : "Legal details to be updated before launch."}
      </p>
    </footer>
  );
}
