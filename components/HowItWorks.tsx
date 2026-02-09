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
    <Section id="how-it-works" className="relative bg-[var(--surface)] overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'var(--gradient-mesh-1)' }} />
      <div className="noise-texture absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--text)] mb-4 animate-fade-in-up stagger-1 opacity-0">{h.title}</h2>
        {h.intro && (
          <p className="text-[var(--muted)] mb-10 max-w-2xl animate-fade-in-up stagger-2 opacity-0">{h.intro}</p>
        )}
        {/* Desktop: horizontal stepper with animated progress line */}
        <div className="hidden md:relative mb-10">
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col animate-fade-in-up stagger-3 opacity-0" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-3 relative">
                  {/* Animated progress line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[52px] top-5 w-full h-0.5 bg-[var(--border)] overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] animate-slide-in-left"
                        style={{ 
                          animationDelay: `${0.5 + i * 0.1}s`,
                          animationDuration: '0.6s',
                          animationFillMode: 'forwards'
                        }}
                      />
                    </div>
                  )}
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#F97316] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-lg shadow-[var(--accent)]/30 animate-pulse" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                    <span className="relative z-10">{i + 1}</span>
                    <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-0 animate-ping" style={{ animationDelay: `${0.4 + i * 0.1}s` }} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-[var(--text)] relative z-10">{step.title}</h3>
                </div>
                <p className="text-sm text-[var(--muted)] ml-[52px] animate-fade-in stagger-4 opacity-0" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile: vertical stepper */}
        <div className="md:hidden space-y-6 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 animate-fade-in-up stagger-3 opacity-0" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#F97316] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-lg shadow-[var(--accent)]/30 animate-pulse" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                  <span className="relative z-10">{i + 1}</span>
                </div>
                {/* Vertical progress line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-1/2 top-10 w-0.5 h-full -translate-x-1/2 bg-[var(--border)]">
                    <div 
                      className="w-full bg-gradient-to-b from-[var(--accent)] to-[var(--secondary)] animate-slide-in-left"
                      style={{ 
                        animationDelay: `${0.3 + i * 0.1}s`,
                        animationDuration: '0.6s',
                        animationFillMode: 'forwards'
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-sm font-semibold text-[var(--text)] mb-1">{step.title}</h3>
                <p className="text-sm text-[var(--muted)]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Enhanced banner with gradient */}
        <div className="mt-10 p-4 rounded-[var(--radius-card)] bg-gradient-to-r from-[var(--primary)] via-[#1E293B] to-[var(--primary)] text-[var(--surface)] text-center font-medium shadow-[var(--shadow-dramatic)] animate-fade-in-up stagger-5 opacity-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--secondary)]/10 opacity-50" />
          <p className="relative z-10">{h.banner}</p>
        </div>
      </div>
    </Section>
  );
}
