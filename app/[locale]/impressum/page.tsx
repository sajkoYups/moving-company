import type { Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";

const LOCALES: Locale[] = ["de", "en"];

function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export default async function ImpressumPage({
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
        {isDe ? "Impressum" : "Imprint"}
      </h1>
      <p className="mt-4 text-zinc-600 text-sm">
        {isDe
          ? "Angaben gemäß § 5 TMG. (Platzhalter — vor dem Launch durch rechtliche Angaben ersetzen.)"
          : "Information according to § 5 TMG. (Placeholder — replace with legal details before launch.)"}
      </p>
      <p className="mt-4 text-zinc-600">
        [Firmenname]<br />
        [Straße, Hausnummer]<br />
        [PLZ] Hamburg<br />
        [Land]
      </p>
      <p className="mt-4 text-zinc-600">
        {isDe ? "Kontakt" : "Contact"}: [E-Mail / Telefon]
      </p>
      <p className="mt-4 text-zinc-600 text-sm">
        {isDe ? "Umsatzsteuer-ID usw. (Platzhalter)" : "VAT ID etc. (placeholder)"}
      </p>
      <Link href={`/${locale}`} className="inline-block mt-8 text-zinc-600 hover:text-zinc-900 text-sm">
        ← {isDe ? "Zurück" : "Back"}
      </Link>
    </div>
  );
}
