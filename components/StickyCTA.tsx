"use client";

import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+49 40 12345678";

/** Mobile sticky: Request quote + Call (design_file §4.5) */
export function StickyCTA({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const sticky = t.sticky as Record<string, string>;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden flex gap-2 p-3 bg-[var(--surface)] border-t border-[var(--border)] shadow-[0 -4px 20px rgba(0,0,0,0.08)]">
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center h-12 rounded-[var(--radius-button)] bg-[var(--accent)] text-white font-semibold text-sm transition-colors hover:bg-[#c2410c]"
      >
        {sticky.requestQuote}
      </a>
      <a
        href={`tel:${PHONE.replace(/\s/g, "")}`}
        className="flex-1 flex items-center justify-center h-12 rounded-[var(--radius-button)] border-2 border-[var(--primary)] text-[var(--text)] font-semibold text-sm transition-colors hover:bg-[var(--primary)]/5"
      >
        {sticky.call}
      </a>
    </div>
  );
}
