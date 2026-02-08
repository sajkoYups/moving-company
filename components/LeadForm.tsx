"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

/** Minimal quote form: name, phone, email, move date, from ZIP, to ZIP. Used in hero and contact (design_file §3.2) */
export function LeadForm({
  locale,
  variant = "hero",
  showMicrocopy = true,
}: {
  locale: Locale;
  variant?: "hero" | "contact";
  showMicrocopy?: boolean;
}) {
  const t = getTranslations(locale);
  const form = t.quoteForm as Record<string, string>;
  const hero = t.hero as Record<string, string>;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return;
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const gdpr = formData.get("gdpr") === "on";
    if (!gdpr) {
      setErrors({ gdpr: locale === "de" ? "Bitte stimmen Sie der Verarbeitung zu." : "Please consent to data processing." });
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          moveDate: formData.get("moveDate"),
          fromZip: formData.get("fromZip"),
          toZip: formData.get("toZip"),
          floorFrom: formData.get("floorFrom"),
          floorTo: formData.get("floorTo"),
          elevatorFrom: formData.get("elevatorFrom"),
          elevatorTo: formData.get("elevatorTo"),
          apartmentSize: formData.get("apartmentSize"),
          assemblyItems: formData.get("assemblyItems"),
          message: formData.get("message"),
          gdpr: true,
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Card className="p-6">
        <p className="text-[var(--success)] font-medium">{form.success}</p>
      </Card>
    );
  }

  const formTitle = variant === "hero" ? (hero.formTitle ?? form.title) : form.title;

  return (
    <Card as="article" className="p-6">
      <h3 className="text-xl font-semibold text-[var(--text)] mb-4">{formTitle}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label={form.name} name="name" required />
          <Input label={form.phone} name="phone" type="tel" required />
        </div>
        <Input label={form.email} name="email" type="email" required />
        <Input label={form.moveDate} name="moveDate" type="date" required />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label={form.fromZip} name="fromZip" required placeholder="20095" />
          <Input label={form.toZip} name="toZip" required placeholder="20095" />
        </div>
        {variant === "contact" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label={form.floorFrom} name="floorFrom" type="number" min={0} />
              <Input label={form.floorTo} name="floorTo" type="number" min={0} />
            </div>
            <Input label={form.apartmentSize} name="apartmentSize" />
            <Input label={form.assemblyItems} name="assemblyItems" />
            <Textarea label={form.message} name="message" rows={3} />
          </>
        )}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="gdpr"
              required
              className="mt-1 h-4 w-4 rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]"
              aria-describedby={errors.gdpr ? "gdpr-error" : undefined}
            />
            <span className="text-sm text-[var(--muted)]">{form.gdpr}</span>
          </label>
          {errors.gdpr && (
            <p id="gdpr-error" className="mt-1 text-sm text-[var(--error)]" role="alert">
              {errors.gdpr}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full" loading={status === "sending"} disabled={status === "sending"}>
          {form.submit}
        </Button>
        {showMicrocopy && (
          <p className="text-xs text-[var(--muted)] text-center pt-1">
            {variant === "hero" ? (hero.formMicrocopy ?? form.success) : hero.formMicrocopy}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-[var(--error)]" role="alert">
            {locale === "de" ? "Etwas ist schiefgelaufen. Bitte erneut versuchen oder anrufen." : "Something went wrong. Please try again or call us."}
          </p>
        )}
      </form>
    </Card>
  );
}
