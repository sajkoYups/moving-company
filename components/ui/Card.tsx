import { type ReactNode } from "react";

/** Surface, border, radius 16px, subtle shadow, hover stronger (design_file §2.4, §4.3) */
export function Card({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  return (
    <Tag
      className={`rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)] ${className}`}
    >
      {children}
    </Tag>
  );
}
