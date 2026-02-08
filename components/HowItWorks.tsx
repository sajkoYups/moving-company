import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";

/** Horizontal stepper (desktop), vertical (mobile) + banner (design_file §3.5) */
export function HowItWorks({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const h = t.howItWorks as Record<string, string>;
  const steps = [h.step1, h.step2, h.step3, h.step4];

  return (
    <Section id="how-it-works" className="bg-[var(--surface)]">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-10">{h.title}</h2>
      {/* Desktop: horizontal stepper */}
      <div className="hidden md:flex items-start justify-between gap-4">
        {steps.map((label, i) => (
          <div key={i} className="flex-1 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white font-bold flex items-center justify-center text-sm shrink-0">
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 min-w-[20px] h-0.5 bg-[var(--border)] mt-5 -mb-5 self-stretch" aria-hidden />
            )}
            <p className="mt-4 text-sm font-medium text-[var(--text)] max-w-[180px]">{label}</p>
          </div>
        ))}
      </div>
      {/* Mobile: vertical stepper */}
      <div className="md:hidden space-y-6">
        {steps.map((label, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white font-bold flex items-center justify-center text-sm shrink-0">
              {i + 1}
            </div>
            <p className="pt-1.5 text-sm font-medium text-[var(--text)]">{label}</p>
          </div>
        ))}
      </div>
      {/* Banner */}
      <div className="mt-10 p-4 rounded-[var(--radius-card)] bg-[var(--primary)] text-[var(--surface)] text-center font-medium">
        {h.banner}
      </div>
    </Section>
  );
}
