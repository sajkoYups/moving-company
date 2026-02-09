import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";

/** 6 service cards: Private, Office, Packing, Assembly, Disposal, Boxes (design_file §3.4) */
export function Services({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const s = t.services as Record<string, string>;
  const items = [
    { titleKey: "apartment", descKey: "apartmentDesc", icon: "Truck", featured: true },
    { titleKey: "office", descKey: "officeDesc", icon: "Building", featured: false },
    { titleKey: "packing", descKey: "packingDesc", icon: "Box", featured: false },
    { titleKey: "furniture", descKey: "furnitureDesc", icon: "Wrench", featured: false },
    { titleKey: "disposal", descKey: "disposalDesc", icon: "Trash", featured: false },
    { titleKey: "boxes", descKey: "boxesDesc", icon: "Package", featured: false },
  ] as const;

  return (
    <Section id="services" className="bg-[var(--bg)]">
      <div className="max-w-[var(--max-content)] mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">{s.title}</h2>
          <p className="text-[var(--muted)] text-lg">{s.subtitle}</p>
        </div>
        
        {/* Balanced 3×2 grid — every row full, no lone card at bottom */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {items.map(({ titleKey, descKey, icon, featured }, index) => {
            const isFeatured = featured && index === 0;
            
            return (
              <div
                key={titleKey}
                className={`
                  group relative overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-xl
                  ${isFeatured 
                    ? "bg-gradient-to-br from-[var(--accent)]/10 via-[var(--primary)]/5 to-[var(--secondary)]/5 rounded-2xl p-6 lg:p-8 border-2 border-[var(--accent)]/20" 
                    : "bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)] shadow-sm hover:shadow-md"
                  }
                `}
              >
                {/* Background decorative elements for featured only */}
                {isFeatured && (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--secondary)]/5 rounded-full -ml-12 -mb-12" />
                  </>
                )}
                
                {/* Icon */}
                <div className="mb-5 flex items-center relative z-10">
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center text-[var(--primary)]
                    ${isFeatured 
                      ? "bg-[var(--accent)]/20 text-[var(--accent)]" 
                      : "bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10"
                    }
                    transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3
                  `}>
                    {icon === "Truck" && <TruckIcon size={isFeatured ? 28 : 24} />}
                    {icon === "Building" && <BuildingIcon size={isFeatured ? 28 : 24} />}
                    {icon === "Box" && <BoxIcon size={isFeatured ? 28 : 24} />}
                    {icon === "Wrench" && <WrenchIcon size={isFeatured ? 28 : 24} />}
                    {icon === "Trash" && <TrashIcon size={isFeatured ? 28 : 24} />}
                    {icon === "Package" && <PackageIcon size={isFeatured ? 28 : 24} />}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-semibold text-[var(--text)] text-lg mb-2">
                    {s[titleKey]}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {s[descKey]}
                  </p>
                </div>
                
                {/* Subtle accent line on hover */}
                {!isFeatured && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/30 to-[var(--accent)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function TruckIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
function BuildingIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M8 10h.01M8 14h.01M16 14h.01" />
    </svg>
  );
}
function BoxIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}
function WrenchIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function TrashIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}
function PackageIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    </svg>
  );
}
