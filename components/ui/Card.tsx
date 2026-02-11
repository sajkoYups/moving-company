import { type ReactNode, type CSSProperties } from "react";

/** Surface, border, radius 16px, enhanced shadow system, decorative borders (design_file §2.4, §4.3) */
export function Card({
  children,
  className = "",
  as: Tag = "div",
  variant = "default",
  style,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  variant?: "default" | "gradient-border" | "elevated";
  style?: CSSProperties;
  [key: string]: unknown;
}) {
  const baseStyles = "rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 will-change-transform";
  
  const variantStyles = {
    default: "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:scale-[1.02]",
    "gradient-border": "shadow-[var(--shadow-layered)] hover:shadow-[var(--shadow-dramatic)] hover:scale-[1.02] relative overflow-hidden before:absolute before:inset-0 before:rounded-[var(--radius-card)] before:p-[1px] before:bg-gradient-to-r before:from-[var(--accent)]/20 before:via-[var(--secondary)]/20 before:to-[var(--accent)]/20 before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
    elevated: "shadow-[var(--shadow-dramatic)] hover:shadow-[var(--shadow-layered)] hover:-translate-y-1",
  };

  return (
    <Tag
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
