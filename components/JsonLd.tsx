import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+49 40 12345678";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export function JsonLd({ locale }: { locale: Locale }) {
  const isDe = locale === "de";
  const t = getTranslations(locale);
  const faq = t.faq as Record<string, string>;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: isDe ? "Umzugsfirma Hamburg" : "Moving Company Hamburg",
    description: isDe
      ? "Umzug in Hamburg. Kostenlose Besichtigung vor Ort. Transparente Preise."
      : "Moving in Hamburg. Free on-site visit. Transparent pricing.",
    telephone: PHONE.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hamburg",
      addressCountry: "DE",
    },
    areaServed: { "@type": "City", name: "Hamburg" },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.5511,
      longitude: 9.9937,
    },
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    url: `${BASE_URL}/${locale}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: faq.q1,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a1,
        },
      },
      {
        "@type": "Question",
        name: faq.q2,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a2,
        },
      },
      {
        "@type": "Question",
        name: faq.q3,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a3,
        },
      },
      {
        "@type": "Question",
        name: faq.q4,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a4,
        },
      },
      {
        "@type": "Question",
        name: faq.q5,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a5,
        },
      },
      {
        "@type": "Question",
        name: faq.q6,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a6,
        },
      },
      {
        "@type": "Question",
        name: faq.q7,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a7,
        },
      },
      {
        "@type": "Question",
        name: faq.q8,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a8,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
