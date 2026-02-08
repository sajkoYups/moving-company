import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { CookieBanner } from "@/components/CookieBanner";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";

const LOCALES: Locale[] = ["de", "en"];

function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return { title: "Moving Company Hamburg" };
  const t = getTranslations(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <>
      <JsonLd locale={locale} />
      <Header locale={locale} />
      <main className="pb-20 md:pb-0">{children}</main>
      <CookieBanner locale={locale} />
    </>
  );
}
