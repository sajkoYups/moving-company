"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

export function QuoteForm({ locale }: { locale: Locale }) {
  const tr = getTranslations(locale);
  const form = tr.quoteForm as Record<string, string>;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return; // spam
    const formData = new FormData(e.currentTarget);
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
          gdpr: formData.get("gdpr") === "on",
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="px-4 py-16 md:py-20 bg-white border-t border-zinc-200">
        <div className="max-w-2xl mx-auto p-6 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">{form.success}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="px-4 py-16 md:py-20 bg-white border-t border-zinc-200">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">{form.title}</h2>
        <p className="mt-2 text-zinc-600">{form.subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="quote-name" className="block text-sm text-zinc-600 mb-1">{form.name}</label>
              <input id="quote-name" name="name" type="text" required className="w-full px-3 py-2 border border-zinc-300 rounded" />
            </div>
            <div>
              <label htmlFor="quote-email" className="block text-sm text-zinc-600 mb-1">{form.email}</label>
              <input id="quote-email" name="email" type="email" required className="w-full px-3 py-2 border border-zinc-300 rounded" />
            </div>
          </div>
          <div>
            <label htmlFor="quote-phone" className="block text-sm text-zinc-600 mb-1">{form.phone}</label>
            <input id="quote-phone" name="phone" type="tel" required className="w-full px-3 py-2 border border-zinc-300 rounded" />
          </div>
          <div>
            <label htmlFor="quote-moveDate" className="block text-sm text-zinc-600 mb-1">{form.moveDate}</label>
            <input id="quote-moveDate" name="moveDate" type="date" required className="w-full px-3 py-2 border border-zinc-300 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="quote-fromZip" className="block text-sm text-zinc-600 mb-1">{form.fromZip}</label>
              <input id="quote-fromZip" name="fromZip" type="text" required className="w-full px-3 py-2 border border-zinc-300 rounded" />
            </div>
            <div>
              <label htmlFor="quote-toZip" className="block text-sm text-zinc-600 mb-1">{form.toZip}</label>
              <input id="quote-toZip" name="toZip" type="text" required className="w-full px-3 py-2 border border-zinc-300 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="quote-floorFrom" className="block text-sm text-zinc-600 mb-1">{form.floorFrom}</label>
              <input id="quote-floorFrom" name="floorFrom" type="number" min={0} className="w-full px-3 py-2 border border-zinc-300 rounded" />
            </div>
            <div>
              <label htmlFor="quote-floorTo" className="block text-sm text-zinc-600 mb-1">{form.floorTo}</label>
              <input id="quote-floorTo" name="floorTo" type="number" min={0} className="w-full px-3 py-2 border border-zinc-300 rounded" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="elevatorFrom" value="yes" />
              {form.elevatorFrom}
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="elevatorTo" value="yes" />
              {form.elevatorTo}
            </label>
          </div>
          <div>
            <label htmlFor="quote-apartmentSize" className="block text-sm text-zinc-600 mb-1">{form.apartmentSize}</label>
            <input id="quote-apartmentSize" name="apartmentSize" type="text" required className="w-full px-3 py-2 border border-zinc-300 rounded" placeholder="z.B. 3 Zimmer" />
          </div>
          <div>
            <label htmlFor="quote-assemblyItems" className="block text-sm text-zinc-600 mb-1">{form.assemblyItems}</label>
            <input id="quote-assemblyItems" name="assemblyItems" type="text" className="w-full px-3 py-2 border border-zinc-300 rounded" />
          </div>
          <div>
            <label htmlFor="quote-message" className="block text-sm text-zinc-600 mb-1">{form.message}</label>
            <textarea id="quote-message" name="message" rows={3} className="w-full px-3 py-2 border border-zinc-300 rounded" />
          </div>
          <label className="flex items-start gap-2">
            <input type="checkbox" name="gdpr" required className="mt-1" />
            <span className="text-sm text-zinc-600">{form.gdpr}</span>
          </label>
          {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again or contact us by phone.</p>}
          <button type="submit" disabled={status === "sending"} className="w-full py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 disabled:opacity-50">
            {status === "sending" ? (locale === "de" ? "Wird gesendet…" : "Sending…") : form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
