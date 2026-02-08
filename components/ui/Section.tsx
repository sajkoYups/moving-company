import { type ReactNode } from "react";

/** Max width 1120px, section spacing 56–72px mobile / 80–104px desktop (design_file §2.1) */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`px-6 md:px-8 lg:px-10 py-14 md:py-[72px] lg:py-[104px] ${className}`}
    >
      <div className="mx-auto max-w-[1120px]">{children}</div>
    </section>
  );
}
