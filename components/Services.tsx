import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

/** 6 service cards: Private, Office, Packing, Assembly, Disposal, Boxes (design_file §3.4) */
export function Services({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const s = t.services as Record<string, string>;
  const items = [
    { titleKey: "apartment", descKey: "apartmentDesc", icon: "Truck" },
    { titleKey: "office", descKey: "officeDesc", icon: "Building" },
    { titleKey: "packing", descKey: "packingDesc", icon: "Box" },
    { titleKey: "furniture", descKey: "furnitureDesc", icon: "Wrench" },
    { titleKey: "disposal", descKey: "disposalDesc", icon: "Trash" },
    { titleKey: "boxes", descKey: "boxesDesc", icon: "Package" },
  ] as const;

  return (
    <Section id="services" className="bg-[var(--bg)]">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">{s.title}</h2>
      <p className="text-[var(--muted)] mb-8">{s.subtitle}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ titleKey, descKey, icon }) => (
          <Card key={titleKey} className="p-6">
            <div className="mb-4 w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
              {icon === "Truck" && <TruckIcon />}
              {icon === "Building" && <BuildingIcon />}
              {icon === "Box" && <BoxIcon />}
              {icon === "Wrench" && <WrenchIcon />}
              {icon === "Trash" && <TrashIcon />}
              {icon === "Package" && <PackageIcon />}
            </div>
            <h3 className="font-semibold text-[var(--text)]">{s[titleKey]}</h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{s[descKey]}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function TruckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M8 10h.01M8 14h.01M16 14h.01" /></svg>
  );
}
function BoxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
  );
}
function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
  );
}
function TrashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
  );
}
function PackageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /></svg>
  );
}
