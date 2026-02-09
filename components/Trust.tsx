import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";

/** 4 trust cards with icons — no reviews (design_file §3.3) */
export function Trust({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const trust = t.trust as Record<string, string>;
  const items = [
    { key: "bilingual", icon: "Chat", variant: "featured" as const },
    { key: "inspection", icon: "Clipboard", variant: "outlined" as const },
    { key: "care", icon: "Shield", variant: "filled" as const },
    { key: "scope", icon: "Check", variant: "minimal" as const },
  ] as const;

  return (
    <Section id="trust" className="relative bg-[var(--surface)] overflow-hidden">
      {/* Diagonal accent element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--secondary)]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="noise-texture absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10 max-w-[var(--max-content)] mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--text)] mb-12 animate-fade-in-up stagger-1 opacity-0">{trust.title}</h2>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {items.map(({ key, icon, variant }, index) => {
            const isFeatured = variant === "featured";
            const isFilled = variant === "filled";
            const isOutlined = variant === "outlined";
            const staggerDelay = `stagger-${index + 2}`;
            
            return (
              <div
                key={key}
                className={`
                  relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 will-change-transform
                  animate-scale-in ${staggerDelay} opacity-0
                  ${isFeatured 
                    ? "bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--primary)]/5 rounded-2xl p-6 lg:p-8 border-2 border-[var(--secondary)]/20 shadow-[var(--shadow-layered)] hover:shadow-[var(--shadow-dramatic)]" 
                    : isFilled
                    ? "bg-gradient-to-br from-[var(--primary)] to-[#1E293B] text-white rounded-2xl p-6 shadow-[var(--shadow-dramatic)] hover:shadow-[var(--shadow-layered)]"
                    : isOutlined
                    ? "bg-[var(--surface)] border-2 border-[var(--border)] rounded-2xl p-6 hover:border-[var(--secondary)]/40 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
                    : "bg-[var(--bg)] rounded-2xl p-6 border border-[var(--border)]/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
                  }
                `}
              >
                {/* Layered decorative elements */}
                {isFeatured && (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--secondary)]/5 rounded-full -mr-16 -mt-16 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--accent)]/5 rounded-full -ml-12 -mb-12" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
                
                {/* Diagonal accent line for filled card */}
                {isFilled && (
                  <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-[var(--accent)]/30 to-transparent rotate-45 origin-top-right" />
                )}
                
                {/* Icon with enhanced animations */}
                <div className={`
                  mb-5 flex items-center relative z-10
                  ${isFeatured ? "w-16 h-16" : "w-12 h-12"}
                  ${isFilled 
                    ? "text-white" 
                    : isFeatured
                    ? "text-[var(--secondary)]"
                    : "text-[var(--primary)]"
                  }
                `}>
                  <div className={`
                    transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                    ${isFeatured 
                      ? "w-16 h-16 rounded-xl bg-[var(--secondary)]/20 flex items-center justify-center shadow-lg shadow-[var(--secondary)]/20" 
                      : isFilled
                      ? "w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm"
                      : "w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center"
                    }
                  `}>
                    {icon === "Chat" && <ChatIcon size={isFeatured ? 28 : 24} className="transition-transform duration-300 group-hover:scale-110" />}
                    {icon === "Clipboard" && <ClipboardIcon size={isFeatured ? 28 : 24} className="transition-transform duration-300 group-hover:scale-110" />}
                    {icon === "Shield" && <ShieldIcon size={isFeatured ? 28 : 24} className="transition-transform duration-300 group-hover:scale-110" />}
                    {icon === "Check" && <CheckIcon size={isFeatured ? 28 : 24} className="transition-transform duration-300 group-hover:scale-110" />}
                  </div>
                </div>
                
                {/* Text */}
                <p className={`
                  leading-relaxed font-medium relative z-10
                  ${isFeatured ? "text-lg text-[var(--text)]" : isFilled ? "text-base text-white" : "text-base text-[var(--text)]"}
                `}>
                  {trust[key]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function ChatIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function ClipboardIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}
function ShieldIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function CheckIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
