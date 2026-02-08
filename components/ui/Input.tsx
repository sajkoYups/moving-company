import { type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

/** 48px height, label above, required asterisk, error below (design_file §4.2) */
export function Input({
  label,
  error,
  required,
  id,
  className = "",
  ...props
}: {
  label: string;
  error?: string;
  required?: boolean;
  id?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  const inputId = id ?? props.name ?? label.replace(/\s/g, "-").toLowerCase();
  return (
    <div className="w-full">
      <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-[var(--text)]">
        {label}
        {required && <span className="ml-0.5 text-[var(--error)]">*</span>}
      </label>
      <input
        id={inputId}
        required={required}
        className={`h-12 w-full rounded-[var(--radius-input)] border border-[var(--border)] bg-[var(--surface)] px-4 text-[var(--text)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:outline-none ${error ? "border-[var(--error)]" : ""} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-[var(--error)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function Textarea({
  label,
  error,
  required,
  id,
  className = "",
  ...props
}: {
  label: string;
  error?: string;
  required?: boolean;
  id?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const inputId = id ?? props.name ?? label.replace(/\s/g, "-").toLowerCase();
  return (
    <div className="w-full">
      <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-[var(--text)]">
        {label}
        {required && <span className="ml-0.5 text-[var(--error)]">*</span>}
      </label>
      <textarea
        id={inputId}
        required={required}
        className={`min-h-[96px] w-full rounded-[var(--radius-input)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:outline-none ${error ? "border-[var(--error)]" : ""} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-[var(--error)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
