import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";

/** Two columns: How we protect / Before move day we confirm (design_file §3.8) */
export function Care({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const c = t.care as Record<string, string>;

  return (
    <Section id="care" className="bg-[var(--bg)]">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-10">{c.title}</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-[var(--text)] mb-4">{c.protectTitle}</h3>
          <ul className="space-y-3 text-[var(--muted)]">
            <li className="flex items-center gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-xs">✓</span>
              {c.protect1}
            </li>
            <li className="flex items-center gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-xs">✓</span>
              {c.protect2}
            </li>
            <li className="flex items-center gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-xs">✓</span>
              {c.protect3}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[var(--text)] mb-4">{c.confirmTitle}</h3>
          <ul className="space-y-3 text-[var(--muted)]">
            <li className="flex items-center gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-xs">✓</span>
              {c.confirm1}
            </li>
            <li className="flex items-center gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-xs">✓</span>
              {c.confirm2}
            </li>
            <li className="flex items-center gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-xs">✓</span>
              {c.confirm3}
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
