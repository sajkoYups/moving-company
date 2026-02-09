import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";

/** Horizontal stepper (desktop), vertical (mobile) + banner (design_file §3.5) */
export function HowItWorks({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const h = t.howItWorks as Record<string, string>;
  const steps = [
    { title: h.step1, desc: h.step1Desc },
    { title: h.step2, desc: h.step2Desc },
    { title: h.step3, desc: h.step3Desc },
    { title: h.step4, desc: h.step4Desc },
  ];

  return (
    <Section id="how-it-works" className="bg-[var(--surface)]">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">{h.title}</h2>
      {h.intro && (
        <p className="text-[var(--muted)] mb-10 max-w-2xl">{h.intro}</p>
      )}
      {/* Desktop: horizontal stepper */}
      <div className="hidden md:grid grid-cols-4 gap-6 mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white font-bold flex items-center justify-center text-sm shrink-0">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold text-[var(--text)]">{step.title}</h3>
            </div>
            <p className="text-sm text-[var(--muted)] ml-[52px]">{step.desc}</p>
          </div>
        ))}
      </div>
      {/* Mobile: vertical stepper */}
      <div className="md:hidden space-y-6 mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white font-bold flex items-center justify-center text-sm shrink-0">
              {i + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-[var(--text)] mb-1">{step.title}</h3>
              <p className="text-sm text-[var(--muted)]">{step.desc}</p>
            </div>
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
