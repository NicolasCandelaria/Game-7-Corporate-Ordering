import type { ReactNode } from "react";

export default function Tag({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`g7-mono inline-block rounded-[2px] border border-g7-line px-2 py-1 text-[10px] text-g7-offwhite/70 ${className}`}
    >
      {children}
    </span>
  );
}
