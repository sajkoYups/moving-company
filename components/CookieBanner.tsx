"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

const CONSENT_KEY = "moving-company-cookie-consent";

export function CookieBanner({ locale }: { locale: Locale }) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setShow(true);
    const onCookieSettings = () => setShow(true);
    window.addEventListener("cookie-settings-open", onCookieSettings);
    return () => window.removeEventListener("cookie-settings-open", onCookieSettings);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ ad_storage: "granted", analytics_storage: "granted" }));
    setShow(false);
    if (typeof window !== "undefined" && (window as unknown as { gtag?: (a: string, b: string, c: object) => void }).gtag) {
      (window as unknown as { gtag: (a: string, b: string, c: object) => void }).gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ ad_storage: "denied", analytics_storage: "denied" }));
    setShow(false);
    if (typeof window !== "undefined" && (window as unknown as { gtag?: (a: string, b: string, c: object) => void }).gtag) {
      (window as unknown as { gtag: (a: string, b: string, c: object) => void }).gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
      });
    }
  };

  if (!mounted || !show) return null;

  const t = getTranslations(locale);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[var(--primary)] text-[var(--surface)] shadow-lg"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm">{t.cookieBanner.message}</p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={reject}
            className="px-4 py-2 text-sm border border-[var(--border)] rounded-[var(--radius-button)] hover:opacity-90"
          >
            {t.cookieBanner.reject}
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-2 text-sm bg-[var(--surface)] text-[var(--text)] rounded-[var(--radius-button)] hover:bg-[var(--bg)]"
          >
            {t.cookieBanner.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
