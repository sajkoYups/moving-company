import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

/** 8 FAQ items (design_file §3.9) */
export function FAQ({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const faq = t.faq as Record<string, string>;

  const items = [
    { q: "q1", a: "a1" },
    { q: "q2", a: "a2" },
    { q: "q3", a: "a3" },
    { q: "q4", a: "a4" },
    { q: "q5", a: "a5" },
    { q: "q6", a: "a6" },
    { q: "q7", a: "a7" },
    { q: "q8", a: "a8" },
  ] as const;

  return (
    <Section id="faq" className="bg-[var(--surface)]">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8">{faq.title}</h2>
      <Accordion>
        {items.map(({ q, a }) => (
          <AccordionItem key={q} title={faq[q]} defaultOpen={q === "q1"}>
            {faq[a]}
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
