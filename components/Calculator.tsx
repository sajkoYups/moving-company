"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { calculateFromPrice, type CalculatorInputs } from "@/lib/calculator";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

/** Calculator: contact gate → move details → result "from X EUR" + CTA (design_file §3.7) */
export function Calculator({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const calc = t.calculator as Record<string, string>;
  const [step, setStep] = useState<"contact" | "details" | "result">("contact");
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [inputs, setInputs] = useState<Partial<CalculatorInputs>>({
    moveDate: "",
    fromZip: "",
    toZip: "",
    apartmentSize: 3,
    floorFrom: 0,
    floorTo: 0,
    elevatorFrom: false,
    elevatorTo: false,
    // Detailed furniture
    kitchenDisassembly: false,
    kitchenAssembly: false,
    doubleBedCount: 0,
    singleBedCount: 0,
    largeSofaCount: 0,
    standardSofaCount: 0,
    wardrobe5DoorCount: 0,
    wardrobe4DoorCount: 0,
    tvCommodeCount: 0,
    cabinetCount: 0,
    washingMachineDisassembly: false,
    washingMachineAssembly: false,
    // Legacy support
    kitchen: false,
    wardrobe: false,
    bed: false,
    washingMachine: false,
    // Add-ons
    packingHours: 0,
    parkingPermit: false,
    weekend: false,
    lift: false,
  });
  const [fromPrice, setFromPrice] = useState<number | null>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact.name.trim() && contact.email.trim() && contact.phone.trim()) setStep("details");
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const full: CalculatorInputs = {
      moveDate: inputs.moveDate!,
      fromZip: inputs.fromZip!,
      toZip: inputs.toZip!,
      apartmentSize: Number(inputs.apartmentSize) || 3,
      floorFrom: Number(inputs.floorFrom) || 0,
      floorTo: Number(inputs.floorTo) || 0,
      elevatorFrom: inputs.elevatorFrom ?? false,
      elevatorTo: inputs.elevatorTo ?? false,
      // Detailed furniture
      kitchenDisassembly: inputs.kitchenDisassembly ?? false,
      kitchenAssembly: inputs.kitchenAssembly ?? false,
      doubleBedCount: Number(inputs.doubleBedCount) || 0,
      singleBedCount: Number(inputs.singleBedCount) || 0,
      largeSofaCount: Number(inputs.largeSofaCount) || 0,
      standardSofaCount: Number(inputs.standardSofaCount) || 0,
      wardrobe5DoorCount: Number(inputs.wardrobe5DoorCount) || 0,
      wardrobe4DoorCount: Number(inputs.wardrobe4DoorCount) || 0,
      tvCommodeCount: Number(inputs.tvCommodeCount) || 0,
      cabinetCount: Number(inputs.cabinetCount) || 0,
      washingMachineDisassembly: inputs.washingMachineDisassembly ?? false,
      washingMachineAssembly: inputs.washingMachineAssembly ?? false,
      // Legacy support
      kitchen: inputs.kitchen ?? false,
      wardrobe: inputs.wardrobe ?? false,
      bed: inputs.bed ?? false,
      washingMachine: inputs.washingMachine ?? false,
      // Add-ons
      packingHours: Number(inputs.packingHours) || 0,
      parkingPermit: inputs.parkingPermit ?? false,
      weekend: inputs.weekend ?? false,
      lift: inputs.lift ?? false,
    };
    setFromPrice(calculateFromPrice(full));
    setStep("result");
  };

  return (
    <Section id="calculator" className="bg-[var(--surface)]">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)]">{calc.title}</h2>
          <p className="mt-2 text-[var(--muted)]">{calc.subtitle}</p>
        </div>

        <div>
          {step === "contact" && (
            <Card className="p-6">
              <p className="text-sm font-medium text-[var(--text)] mb-4">{calc.contactFirst}</p>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <Input name="calc-name" label={calc.name} value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} required />
                <Input name="calc-email" label={calc.email} type="email" value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))} required />
                <Input name="calc-phone" label={calc.phone} type="tel" value={contact.phone} onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))} required />
                <Button type="submit" className="w-full">{calc.showResult}</Button>
              </form>
            </Card>
          )}

          {step === "details" && (
            <Card className="p-6">
              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                <Input name="calc-moveDate" label={calc.moveDate} type="date" value={inputs.moveDate} onChange={(e) => setInputs((i) => ({ ...i, moveDate: e.target.value }))} required />
                <div className="grid grid-cols-2 gap-4">
                  <Input name="calc-fromZip" label={calc.fromZip} value={inputs.fromZip} onChange={(e) => setInputs((i) => ({ ...i, fromZip: e.target.value }))} required />
                  <Input name="calc-toZip" label={calc.toZip} value={inputs.toZip} onChange={(e) => setInputs((i) => ({ ...i, toZip: e.target.value }))} required />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-[var(--text)]">{calc.apartmentSize}</label>
                  <select value={inputs.apartmentSize} onChange={(e) => setInputs((i) => ({ ...i, apartmentSize: Number(e.target.value) }))} className="h-12 w-full rounded-[var(--radius-input)] border border-[var(--border)] px-4">
                    {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n} {locale === "de" ? "Zimmer" : "room(s)"}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input name="calc-floorFrom" label={calc.floorFrom} type="number" min={0} value={String(inputs.floorFrom ?? "")} onChange={(e) => setInputs((i) => ({ ...i, floorFrom: Number(e.target.value) || 0 }))} />
                  <Input name="calc-floorTo" label={calc.floorTo} type="number" min={0} value={String(inputs.floorTo ?? "")} onChange={(e) => setInputs((i) => ({ ...i, floorTo: Number(e.target.value) || 0 }))} />
                </div>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={inputs.elevatorFrom ?? false} onChange={(e) => setInputs((i) => ({ ...i, elevatorFrom: e.target.checked }))} /> {calc.elevatorFrom}</label>
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={inputs.elevatorTo ?? false} onChange={(e) => setInputs((i) => ({ ...i, elevatorTo: e.target.checked }))} /> {calc.elevatorTo}</label>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text)] mb-2">{calc.assembly}</p>
                  
                  {/* Kitchen */}
                  <div className="mb-3 p-3 border border-[var(--border)] rounded-[var(--radius-input)]">
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">{calc.kitchen}</label>
                    <div className="flex gap-4 ml-4">
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={inputs.kitchenDisassembly ?? false} onChange={(e) => setInputs((i) => ({ ...i, kitchenDisassembly: e.target.checked }))} />
                        {calc.disassembly}
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={inputs.kitchenAssembly ?? false} onChange={(e) => setInputs((i) => ({ ...i, kitchenAssembly: e.target.checked }))} />
                        {calc.assemblyOnly}
                      </label>
                    </div>
                  </div>

                  {/* Beds */}
                  <div className="mb-3 p-3 border border-[var(--border)] rounded-[var(--radius-input)]">
                    <label className="block text-sm font-medium mb-2">{calc.beds}</label>
                    <div className="grid grid-cols-2 gap-3 ml-4">
                      <div>
                        <label className="block text-xs text-[var(--muted)] mb-1">{calc.doubleBed}</label>
                        <input type="number" min={0} value={inputs.doubleBedCount ?? 0} onChange={(e) => setInputs((i) => ({ ...i, doubleBedCount: Number(e.target.value) || 0 }))} className="h-10 w-full rounded-[var(--radius-input)] border border-[var(--border)] px-3 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs text-[var(--muted)] mb-1">{calc.singleBed}</label>
                        <input type="number" min={0} value={inputs.singleBedCount ?? 0} onChange={(e) => setInputs((i) => ({ ...i, singleBedCount: Number(e.target.value) || 0 }))} className="h-10 w-full rounded-[var(--radius-input)] border border-[var(--border)] px-3 text-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Sofas */}
                  <div className="mb-3 p-3 border border-[var(--border)] rounded-[var(--radius-input)]">
                    <label className="block text-sm font-medium mb-2">{calc.sofas}</label>
                    <div className="grid grid-cols-2 gap-3 ml-4">
                      <div>
                        <label className="block text-xs text-[var(--muted)] mb-1">{calc.largeSofa}</label>
                        <input type="number" min={0} value={inputs.largeSofaCount ?? 0} onChange={(e) => setInputs((i) => ({ ...i, largeSofaCount: Number(e.target.value) || 0 }))} className="h-10 w-full rounded-[var(--radius-input)] border border-[var(--border)] px-3 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs text-[var(--muted)] mb-1">{calc.standardSofa}</label>
                        <input type="number" min={0} value={inputs.standardSofaCount ?? 0} onChange={(e) => setInputs((i) => ({ ...i, standardSofaCount: Number(e.target.value) || 0 }))} className="h-10 w-full rounded-[var(--radius-input)] border border-[var(--border)] px-3 text-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Wardrobes */}
                  <div className="mb-3 p-3 border border-[var(--border)] rounded-[var(--radius-input)]">
                    <label className="block text-sm font-medium mb-2">{calc.wardrobes}</label>
                    <div className="grid grid-cols-2 gap-3 ml-4">
                      <div>
                        <label className="block text-xs text-[var(--muted)] mb-1">{calc.wardrobe5Door}</label>
                        <input type="number" min={0} value={inputs.wardrobe5DoorCount ?? 0} onChange={(e) => setInputs((i) => ({ ...i, wardrobe5DoorCount: Number(e.target.value) || 0 }))} className="h-10 w-full rounded-[var(--radius-input)] border border-[var(--border)] px-3 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs text-[var(--muted)] mb-1">{calc.wardrobe4Door}</label>
                        <input type="number" min={0} value={inputs.wardrobe4DoorCount ?? 0} onChange={(e) => setInputs((i) => ({ ...i, wardrobe4DoorCount: Number(e.target.value) || 0 }))} className="h-10 w-full rounded-[var(--radius-input)] border border-[var(--border)] px-3 text-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Small Furniture */}
                  <div className="mb-3 p-3 border border-[var(--border)] rounded-[var(--radius-input)]">
                    <label className="block text-sm font-medium mb-2">{calc.smallFurniture}</label>
                    <div className="grid grid-cols-2 gap-3 ml-4">
                      <div>
                        <label className="block text-xs text-[var(--muted)] mb-1">{calc.tvCommode}</label>
                        <input type="number" min={0} value={inputs.tvCommodeCount ?? 0} onChange={(e) => setInputs((i) => ({ ...i, tvCommodeCount: Number(e.target.value) || 0 }))} className="h-10 w-full rounded-[var(--radius-input)] border border-[var(--border)] px-3 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs text-[var(--muted)] mb-1">{calc.cabinet}</label>
                        <input type="number" min={0} value={inputs.cabinetCount ?? 0} onChange={(e) => setInputs((i) => ({ ...i, cabinetCount: Number(e.target.value) || 0 }))} className="h-10 w-full rounded-[var(--radius-input)] border border-[var(--border)] px-3 text-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Washing Machine */}
                  <div className="mb-3 p-3 border border-[var(--border)] rounded-[var(--radius-input)]">
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">{calc.washingMachine}</label>
                    <div className="flex gap-4 ml-4">
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={inputs.washingMachineDisassembly ?? false} onChange={(e) => setInputs((i) => ({ ...i, washingMachineDisassembly: e.target.checked }))} />
                        {calc.disassembly}
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={inputs.washingMachineAssembly ?? false} onChange={(e) => setInputs((i) => ({ ...i, washingMachineAssembly: e.target.checked }))} />
                        {calc.assemblyOnly}
                      </label>
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div className="mt-6 pt-4 border-t border-[var(--border)]">
                    <p className="text-sm font-medium text-[var(--text)] mb-3">{calc.addons}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-[var(--text)] mb-1">{calc.packingHours}</label>
                        <input type="number" min={0} step={0.5} value={inputs.packingHours ?? 0} onChange={(e) => setInputs((i) => ({ ...i, packingHours: Number(e.target.value) || 0 }))} className="h-10 w-full rounded-[var(--radius-input)] border border-[var(--border)] px-3 text-sm" />
                        <p className="text-xs text-[var(--muted)] mt-1">{calc.packingHoursDesc}</p>
                      </div>
                      
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={inputs.parkingPermit ?? false} onChange={(e) => setInputs((i) => ({ ...i, parkingPermit: e.target.checked }))} />
                        {calc.parkingPermit}
                      </label>
                      
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={inputs.weekend ?? false} onChange={(e) => setInputs((i) => ({ ...i, weekend: e.target.checked }))} />
                        {calc.weekend}
                      </label>
                      
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={inputs.lift ?? false} onChange={(e) => setInputs((i) => ({ ...i, lift: e.target.checked }))} />
                        {calc.lift}
                      </label>
                    </div>
                  </div>

                </div>
                <Button type="submit" className="w-full">{calc.showResult}</Button>
              </form>
            </Card>
          )}

          {step === "result" && fromPrice !== null && (
            <Card className="p-6">
              <p className="text-2xl font-bold text-[var(--text)]">
                {calc.resultPrefix} <span className="text-[var(--accent)]">{fromPrice}</span> {calc.resultSuffix}
              </p>
              <p className="mt-4 text-sm text-[var(--muted)]">
                {locale === "de" ? "Wir bestätigen den Festpreis nach einer kostenlosen Besichtigung vor Ort." : "We confirm the final price after a free on-site visit."}
              </p>
              <a href="#contact" className="mt-6 inline-block">
                <Button type="button" className="w-full sm:w-auto">{calc.submitCta}</Button>
              </a>
            </Card>
          )}
        </div>
      </div>
    </Section>
  );
}
