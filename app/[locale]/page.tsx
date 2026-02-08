import type { Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Calculator } from "@/components/Calculator";
import { Care } from "@/components/Care";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const LOCALES: Locale[] = ["de", "en"];

function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <>
      <Hero locale={locale} />
      <Trust locale={locale} />
      <Services locale={locale} />
      <HowItWorks locale={locale} />
      <Pricing locale={locale} />
      <Calculator locale={locale} />
      <Care locale={locale} />
      <FAQ locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
      <StickyCTA locale={locale} />
    </>
  );
}
