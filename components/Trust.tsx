import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

/** 4 trust cards with icons — no reviews (design_file §3.3) */
export function Trust({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const trust = t.trust as Record<string, string>;
  const items = [
    { key: "bilingual", icon: "Chat" },
    { key: "inspection", icon: "Clipboard" },
    { key: "care", icon: "Shield" },
    { key: "scope", icon: "Check" },
  ] as const;

  return (
    <Section id="trust" className="bg-[var(--surface)]">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8">{trust.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ key, icon }) => (
          <Card key={key} className="p-6">
            <div className="mb-4 w-10 h-10 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)]">
              {icon === "Chat" && <ChatIcon />}
              {icon === "Clipboard" && <ClipboardIcon />}
              {icon === "Shield" && <ShieldIcon />}
              {icon === "Check" && <CheckIcon />}
            </div>
            <p className="text-[var(--text)] font-medium leading-relaxed">{trust[key]}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
