import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const LOCALES: Locale[] = ["de", "en"];

function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return { title: "Datenschutz" };
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const url = `${baseUrl}/${locale}/datenschutz`;
  const isDe = locale === "de";
  const title = isDe ? "Datenschutzerklärung" : "Privacy Policy";
  const description = isDe
    ? "Datenschutzerklärung gemäß DSGVO"
    : "Privacy Policy according to GDPR";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        de: `${baseUrl}/de/datenschutz`,
        en: `${baseUrl}/en/datenschutz`,
      },
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const isDe = locale === "de";
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-zinc-900">
        {isDe ? "Datenschutzerklärung" : "Privacy Policy"}
      </h1>
      <p className="mt-4 text-zinc-600 text-sm">
        {isDe
          ? "Platzhalter — vor dem Launch durch eine vollständige Datenschutzerklärung ersetzen (Verantwortlicher, Zweck, Rechtsgrundlagen, Speicherdauer, Betroffenenrechte, Cookies, Kontakt)."
          : "Placeholder — replace with a full privacy policy before launch (controller, purpose, legal basis, retention, rights, cookies, contact)."}
      </p>
      <p className="mt-4 text-zinc-600">
        [Verantwortlicher / Controller]<br />
        [Zweck der Verarbeitung / Purpose]<br />
        [Rechtsgrundlage / Legal basis]<br />
        [Speicherdauer / Retention]<br />
        [Ihre Rechte / Your rights]<br />
        [Cookies, Consent Mode v2]
      </p>
      <Link href={`/${locale}`} className="inline-block mt-8 text-zinc-600 hover:text-zinc-900 text-sm">
        ← {isDe ? "Zurück" : "Back"}
      </Link>
    </div>
  );
}
