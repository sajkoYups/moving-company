import de from "@/content/de.json";
import en from "@/content/en.json";

export type Locale = "de" | "en";

export type Translations = typeof de;

const translations: Record<Locale, Translations> = { de, en };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.de;
}

/** Simple interpolate: replace {key} with value. */
export function t(
  text: string,
  params?: Record<string, string | number>
): string {
  if (!params) return text;
  return Object.entries(params).reduce(
    (acc, [k, v]) => acc.replace(new RegExp(`\\{${k}\\}`, "g"), String(v)),
    text
  );
}
