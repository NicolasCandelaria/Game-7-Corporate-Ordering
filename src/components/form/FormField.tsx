import type { ReactNode } from "react";

export const inputClass =
  "w-full rounded-[2px] border border-g7-line bg-g7-near-black px-4 py-3 text-sm text-g7-offwhite placeholder:text-g7-offwhite/30 transition-colors duration-200 focus:border-g7-offwhite/60 focus:outline-none";

export default function FormField({
  label,
  htmlFor,
  required = false,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="g7-mono text-[10px] text-g7-offwhite/60">
        {label}
        {required && (
          <span className="ml-1 text-g7-yellow" aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
