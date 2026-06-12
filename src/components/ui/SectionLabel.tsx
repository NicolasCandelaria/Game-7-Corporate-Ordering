import type { ReactNode } from "react";

/** Mono eyebrow label that opens a section. */
export default function SectionLabel({
  children,
  accent = false,
  className = "",
}: {
  children: ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`g7-mono flex items-center gap-3 text-xs ${
        accent ? "text-g7-yellow" : "text-g7-offwhite/60"
      } ${className}`}
    >
      <span
        aria-hidden
        className={`inline-block h-px w-8 ${accent ? "bg-g7-yellow" : "bg-g7-line"}`}
      />
      {children}
    </p>
  );
}
