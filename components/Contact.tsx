import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/LeadForm";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+49 40 12345678";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "anfrage@example.com";

/** Contact: LeadForm (full) + hours, email, phone, area (design_file §3.10) */
export function Contact({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const c = t.contact as Record<string, string>;

  return (
    <Section id="contact" className="bg-[var(--bg)]">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)]">{c.title}</h2>
          <div className="mt-6 space-y-4 text-[var(--muted)]">
            <p><span className="font-medium text-[var(--text)]">{c.hours}</span> — {locale === "de" ? "Geschäftszeiten" : "Business hours"}</p>
            <p>
              <span className="font-medium text-[var(--text)]">{c.email}</span>:{" "}
              <a href={`mailto:${EMAIL}`} className="text-[var(--accent)] hover:underline">{EMAIL}</a>
            </p>
            <p>
              <span className="font-medium text-[var(--text)]">{c.phone}</span>:{" "}
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-[var(--accent)] hover:underline">{PHONE}</a>
            </p>
            <p className="font-medium text-[var(--text)]">{c.area}</p>
          </div>
        </div>
        <LeadForm locale={locale} variant="contact" showMicrocopy={false} />
      </div>
    </Section>
  );
}
