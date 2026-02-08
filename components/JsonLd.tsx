import type { Locale } from "@/lib/i18n";

export function JsonLd({ locale }: { locale: Locale }) {
  const isDe = locale === "de";
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: isDe ? "Umzugsfirma Hamburg" : "Moving Company Hamburg",
    description: isDe
      ? "Umzug in Hamburg. Kostenlose Besichtigung vor Ort. Transparente Preise."
      : "Moving in Hamburg. Free on-site visit. Transparent pricing.",
    areaServed: { "@type": "City", name: "Hamburg" },
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isDe ? "Wann wird der endgültige Preis festgelegt?" : "When is the final price agreed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isDe
            ? "Der endgültige Preis wird erst nach einer kostenlosen Besichtigung vor Ort festgelegt."
            : "The final price is agreed only after a free on-site visit.",
        },
      },
      {
        "@type": "Question",
        name: isDe ? "In welchem Gebiet sind Sie tätig?" : "What area do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isDe ? "Wir sind in Hamburg tätig." : "We serve Hamburg.",
        },
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
