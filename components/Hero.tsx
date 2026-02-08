import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/LeadForm";

export function Hero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const hero = t.hero as Record<string, string>;

  return (
    <Section id="top" className="bg-[var(--bg)] pt-16 md:pt-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: headline + trust bullets + process */}
        <div>
          <h1 className="text-[2.5rem] md:text-4xl lg:text-[3.5rem] font-bold text-[var(--text)] leading-tight tracking-tight">
            {hero.h1}
          </h1>
          <ul className="mt-6 space-y-3" aria-label="Trust points">
            <li className="flex items-center gap-3 text-[var(--muted)]">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-sm">✓</span>
              {hero.trustBullet1}
            </li>
            <li className="flex items-center gap-3 text-[var(--muted)]">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-sm">✓</span>
              {hero.trustBullet2}
            </li>
            <li className="flex items-center gap-3 text-[var(--muted)]">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-sm">✓</span>
              {hero.trustBullet3}
            </li>
          </ul>
          {/* Process mini-strip: Submit → Visit → Final quote */}
          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm font-medium text-[var(--text)]">
            <span className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">{hero.processStep1}</span>
            <span className="text-[var(--muted)]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">{hero.processStep2}</span>
            <span className="text-[var(--muted)]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">{hero.processStep3}</span>
          </div>
        </div>
        {/* Right: form card */}
        <div className="lg:sticky lg:top-24">
          <LeadForm locale={locale} variant="hero" showMicrocopy={true} />
        </div>
      </div>
    </Section>
  );
}
