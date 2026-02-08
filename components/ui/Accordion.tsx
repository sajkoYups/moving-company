"use client";

import { useState, type ReactNode } from "react";

/** Keyboard accessible, smooth open/close (design_file §4.4) */
export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[var(--border)] last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-[var(--text)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        aria-expanded={open}
        aria-controls={`accordion-${title.replace(/\s/g, "-")}`}
        id={`accordion-trigger-${title.replace(/\s/g, "-")}`}
      >
        {title}
        <svg
          className={`ml-2 shrink-0 w-4 h-4 text-[var(--muted)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        id={`accordion-${title.replace(/\s/g, "-")}`}
        role="region"
        aria-labelledby={`accordion-trigger-${title.replace(/\s/g, "-")}`}
        className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-[var(--muted)] leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div className="divide-y-0">{children}</div>;
}
