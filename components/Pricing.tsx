import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import {
  HOURLY_RATE_EUR,
  PACKAGES,
  PACKAGE_FROM_PRICES_EUR,
  APARTMENT_FROM_PRICES_EUR,
} from "@/lib/pricing";

/** Block A: hourly. Block B: packages. Block C: apartment table (design_file §3.6) */
export function Pricing({ locale }: { locale: Locale }) {
  const tr = getTranslations(locale);
  const p = tr.pricing as Record<string, string>;

  return (
    <Section id="pricing" className="bg-[var(--bg)]">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">{p.title}</h2>
      <p className="text-[var(--muted)] mb-10">{p.subtitle}</p>

      {/* Block A — Hourly anchor */}
      <Card className="p-6 mb-8 max-w-md">
        <p className="text-3xl font-bold text-[var(--text)]">{t(p.hourly, { price: String(HOURLY_RATE_EUR) })}</p>
        <p className="mt-2 text-[var(--muted)]">{p.hourlySub}</p>
        <ul className="mt-4 space-y-1 text-sm text-[var(--muted)]">
          <li>• 2 Männer + Transporter</li>
          <li>• Inkl. Grundleistung</li>
        </ul>
        <p className="mt-4 text-sm font-medium text-[var(--primary)]">{p.hourlyDisclaimer}</p>
      </Card>

      {/* Block B — Packages */}
      <h3 className="text-xl font-semibold text-[var(--text)] mb-4">{p.packages}</h3>
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {PACKAGES.map((pk) => (
          <Card key={pk.id} className="p-6 text-center">
            <p className="font-semibold text-[var(--text)]">{p[pk.id]}</p>
            <p className="mt-2 text-lg font-bold text-[var(--accent)]">
              from {PACKAGE_FROM_PRICES_EUR[pk.id] ?? pk.hours * HOURLY_RATE_EUR} EUR
            </p>
          </Card>
        ))}
      </div>

      {/* Block C — Apartment table */}
      <h3 className="text-xl font-semibold text-[var(--text)] mb-4">{p.apartmentTable}</h3>
      <div className="overflow-x-auto rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)]">
        <table className="w-full text-left">
          <tbody>
            {[1, 2, 3].map((rooms) => (
              <tr key={rooms} className="border-b border-[var(--border)] last:border-0">
                <td className="px-4 py-3 font-medium text-[var(--text)]">{rooms} {locale === "de" ? "Zimmer" : "room(s)"}</td>
                <td className="px-4 py-3 text-[var(--muted)]">from {APARTMENT_FROM_PRICES_EUR[rooms]} EUR</td>
              </tr>
            ))}
            <tr className="border-b border-[var(--border)] last:border-0">
              <td className="px-4 py-3 font-medium text-[var(--text)]">4+ {locale === "de" ? "Zimmer" : "rooms"}</td>
              <td className="px-4 py-3 text-[var(--muted)]">from {APARTMENT_FROM_PRICES_EUR[4]} EUR</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-sm text-[var(--muted)]">{p.vatNote}</p>
    </Section>
  );
}
