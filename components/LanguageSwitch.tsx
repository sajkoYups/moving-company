"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitch({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname?.replace(/^\/(de|en)/, "") || "";
  const base = pathWithoutLocale ? pathWithoutLocale : "";

  return (
    <div className="flex gap-2">
      <Link
        href={`/de${base}`}
        className={`px-2 py-1 text-sm rounded ${currentLocale === "de" ? "bg-zinc-200 font-medium" : "text-zinc-600 hover:text-zinc-900"}`}
        aria-current={currentLocale === "de" ? "true" : undefined}
      >
        DE
      </Link>
      <Link
        href={`/en${base}`}
        className={`px-2 py-1 text-sm rounded ${currentLocale === "en" ? "bg-zinc-200 font-medium" : "text-zinc-600 hover:text-zinc-900"}`}
        aria-current={currentLocale === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
