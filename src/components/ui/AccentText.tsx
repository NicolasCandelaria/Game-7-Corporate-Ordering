import type { ReactNode } from "react";

/**
 * One accent per view. Use a single AccentText per headline/section and
 * never mix yellow and cobalt within the same element.
 */
export default function AccentText({
  children,
  color = "yellow",
}: {
  children: ReactNode;
  color?: "yellow" | "cobalt";
}) {
  return (
    <span className={color === "yellow" ? "text-g7-yellow" : "text-g7-cobalt"}>
      {children}
    </span>
  );
}
