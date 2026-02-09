import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/LeadForm";

export function Hero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const hero = t.hero as Record<string, string>;

  return (
    <Section id="top" className="relative bg-[var(--bg)] pt-16 md:pt-20 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: 'var(--gradient-mesh-1)' }} />
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'var(--gradient-mesh-2)' }} />
      <div className="noise-texture absolute inset-0 pointer-events-none" />
      
      {/* Diagonal accent element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--accent)]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: headline + trust bullets + process */}
        <div className="animate-fade-in-up stagger-1">
          <h1 className="font-display text-[2.5rem] md:text-4xl lg:text-[3.5rem] font-bold text-[var(--text)] leading-tight tracking-tight">
            {hero.h1}
          </h1>
          <ul className="mt-6 space-y-3" aria-label="Trust points">
            <li className="flex items-center gap-3 text-[var(--muted)] animate-fade-in-up stagger-2 opacity-0">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-sm transition-transform hover:scale-110">✓</span>
              {hero.trustBullet1}
            </li>
            <li className="flex items-center gap-3 text-[var(--muted)] animate-fade-in-up stagger-3 opacity-0">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-sm transition-transform hover:scale-110">✓</span>
              {hero.trustBullet2}
            </li>
            <li className="flex items-center gap-3 text-[var(--muted)] animate-fade-in-up stagger-4 opacity-0">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] text-sm transition-transform hover:scale-110">✓</span>
              {hero.trustBullet3}
            </li>
          </ul>
          {/* Process mini-strip: Submit → Visit → Final quote */}
          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm font-medium text-[var(--text)] animate-fade-in-up stagger-5 opacity-0">
            <span className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-sm transition-all hover:shadow-md hover:scale-105">{hero.processStep1}</span>
            <span className="text-[var(--muted)]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-sm transition-all hover:shadow-md hover:scale-105">{hero.processStep2}</span>
            <span className="text-[var(--muted)]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-sm transition-all hover:shadow-md hover:scale-105">{hero.processStep3}</span>
          </div>
        </div>
        {/* Right: form card with overlap effect */}
        <div className="lg:sticky lg:top-24 animate-scale-in stagger-6 opacity-0">
          <div className="relative">
            {/* Decorative backdrop blur effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)]/20 via-[var(--secondary)]/20 to-[var(--accent)]/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative">
              <LeadForm locale={locale} variant="hero" showMicrocopy={true} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
