"use client";

import { type ReactNode, type ButtonHTMLAttributes } from "react";

/** Primary: filled accent, 48px height. Secondary: outline. Loading state (design_file §4.1) */
export function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  loading?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">) {
  const base =
    "inline-flex items-center justify-center h-12 min-h-[48px] px-6 rounded-[var(--radius-button)] font-semibold text-base transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:opacity-50 disabled:pointer-events-none";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-white hover:bg-[#c2410c]"
      : "border-2 border-[var(--primary)] text-[var(--text)] hover:bg-[var(--primary)]/5";

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
