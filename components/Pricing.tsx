import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import {
  HOURLY_RATE_EUR,
  APARTMENT_FROM_PRICES_EUR,
  ADDONS,
} from "@/lib/pricing";

/** Block A: hourly. Block B: packages. Block C: apartment table (design_file §3.6) */
export function Pricing({ locale }: { locale: Locale }) {
  const tr = getTranslations(locale);
  const p = tr.pricing as Record<string, string>;

  return (
    <Section id="pricing" className="relative bg-[var(--bg)] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'var(--gradient-mesh-1)' }} />
      <div className="noise-texture absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--text)] mb-2 animate-fade-in-up stagger-1 opacity-0">{p.title}</h2>
        <p className="text-[var(--muted)] mb-10 animate-fade-in-up stagger-2 opacity-0">{p.subtitle}</p>

        {/* Block A — Hourly anchor */}
        <Card variant="elevated" className="p-6 mb-8 max-w-md animate-scale-in stagger-3 opacity-0">
          <p className="font-display text-3xl font-bold text-[var(--text)]">{t(p.hourly, { price: String(HOURLY_RATE_EUR) })}</p>
          <p className="mt-2 text-[var(--muted)]">{p.hourlySub}</p>
          <ul className="mt-4 space-y-1 text-sm text-[var(--muted)]">
            <li>• 2 Männer + Transporter</li>
            <li>• Inkl. Grundleistung</li>
          </ul>
          <p className="mt-4 text-sm font-medium text-[var(--primary)]">{p.hourlyDisclaimer}</p>
        </Card>

        {/* Block B — Packages */}
        <h3 className="font-display text-xl font-semibold text-[var(--text)] mb-4 animate-fade-in-up stagger-4 opacity-0">{p.packages}</h3>
        <div className="grid sm:grid-cols-4 gap-4 mb-10">
          {/* 1 Room */}
          <Card variant="gradient-border" className="p-6 text-center animate-scale-in stagger-5 opacity-0">
            <p className="font-display font-semibold text-[var(--text)]">{p.oneRoom}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">3-4h, 2 {locale === "de" ? "Männer" : "movers"}</p>
            <p className="mt-2 font-display text-lg font-bold gradient-text">from {APARTMENT_FROM_PRICES_EUR[1]} EUR</p>
          </Card>
          {/* 2 Rooms */}
          <Card variant="gradient-border" className="p-6 text-center animate-scale-in stagger-5 opacity-0" style={{ animationDelay: "0.1s" }}>
            <p className="font-display font-semibold text-[var(--text)]">{p.twoRooms}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">4-5h, 2 {locale === "de" ? "Männer" : "movers"}</p>
            <p className="mt-2 font-display text-lg font-bold gradient-text">from {APARTMENT_FROM_PRICES_EUR[2]} EUR</p>
          </Card>
          {/* 3 Rooms */}
          <Card variant="gradient-border" className="p-6 text-center animate-scale-in stagger-5 opacity-0" style={{ animationDelay: "0.2s" }}>
            <p className="font-display font-semibold text-[var(--text)]">{p.threeRooms}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">5-6h, 2 {locale === "de" ? "Männer" : "movers"}</p>
            <p className="mt-2 font-display text-lg font-bold gradient-text">from {APARTMENT_FROM_PRICES_EUR[3]} EUR</p>
          </Card>
          {/* 4+ Rooms */}
          <Card variant="gradient-border" className="p-6 text-center animate-scale-in stagger-5 opacity-0" style={{ animationDelay: "0.3s" }}>
            <p className="font-display font-semibold text-[var(--text)]">{p.fourPlusRooms}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">6-8h, 2-3 {locale === "de" ? "Männer" : "movers"}</p>
            <p className="mt-2 font-display text-lg font-bold gradient-text">from {APARTMENT_FROM_PRICES_EUR[4]} EUR</p>
          </Card>
        </div>

        {/* Block C — Apartment table */}
        <h3 className="font-display text-xl font-semibold text-[var(--text)] mb-4 animate-fade-in-up stagger-6 opacity-0">{p.apartmentTable}</h3>
        <div className="overflow-x-auto rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] animate-fade-in-up stagger-6 opacity-0">
          <table className="w-full text-left">
            <tbody>
              {[1, 2, 3].map((rooms) => (
                <tr key={rooms} className="border-b border-[var(--border)] last:border-0 transition-colors hover:bg-[var(--bg)]/50">
                  <td className="px-4 py-3 font-display font-medium text-[var(--text)]">{rooms} {locale === "de" ? "Zimmer" : "room(s)"}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">from {APARTMENT_FROM_PRICES_EUR[rooms]} EUR</td>
                </tr>
              ))}
              <tr className="border-b border-[var(--border)] last:border-0 transition-colors hover:bg-[var(--bg)]/50">
                <td className="px-4 py-3 font-display font-medium text-[var(--text)]">4+ {locale === "de" ? "Zimmer" : "rooms"}</td>
                <td className="px-4 py-3 text-[var(--muted)]">from {APARTMENT_FROM_PRICES_EUR[4]} EUR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-[var(--muted)] animate-fade-in-up stagger-6 opacity-0">{p.vatNote}</p>

        {/* Add-ons Section */}
        <div className="mt-10 pt-8 border-t border-[var(--border)]">
          <h3 className="font-display text-xl font-semibold text-[var(--text)] mb-4">{p.addonsTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card variant="elevated" className="p-4">
              <p className="font-display font-semibold text-sm text-[var(--text)] mb-1">{p.packingAddon}</p>
              <p className="text-lg font-bold text-[var(--accent)]">{p.packingPrice}</p>
            </Card>
            <Card variant="elevated" className="p-4">
              <p className="font-display font-semibold text-sm text-[var(--text)] mb-1">{p.parkingAddon}</p>
              <p className="text-lg font-bold text-[var(--accent)]">{p.parkingPrice}</p>
            </Card>
            <Card variant="elevated" className="p-4">
              <p className="font-display font-semibold text-sm text-[var(--text)] mb-1">{p.weekendAddon}</p>
              <p className="text-lg font-bold text-[var(--accent)]">{p.weekendPrice}</p>
            </Card>
            <Card variant="elevated" className="p-4">
              <p className="font-display font-semibold text-sm text-[var(--text)] mb-1">{p.liftAddon}</p>
              <p className="text-lg font-bold text-[var(--accent)]">{p.liftPrice}</p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
