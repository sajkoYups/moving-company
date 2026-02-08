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
    kitchen: false,
    wardrobe: false,
    bed: false,
    washingMachine: false,
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
      kitchen: inputs.kitchen ?? false,
      wardrobe: inputs.wardrobe ?? false,
      bed: inputs.bed ?? false,
      washingMachine: inputs.washingMachine ?? false,
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
                  <div className="flex flex-wrap gap-4">
                    {(["kitchen", "wardrobe", "bed", "washingMachine"] as const).map((key) => (
                      <label key={key} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={inputs[key] ?? false} onChange={(e) => setInputs((i) => ({ ...i, [key]: e.target.checked }))} />
                        {calc[key]}
                      </label>
                    ))}
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
