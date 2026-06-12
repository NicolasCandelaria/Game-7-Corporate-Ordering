import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "outline" | "cobalt" | "inverse";

/*
 * Accent pairing rule enforced here: every variant pairs ONE accent with
 * black or off-white. Yellow and cobalt are never combined on one element.
 */
const variants: Record<Variant, string> = {
  primary:
    "bg-g7-yellow text-g7-black hover:bg-g7-offwhite focus-visible:outline-g7-yellow",
  outline:
    "border border-g7-offwhite text-g7-offwhite hover:bg-g7-offwhite hover:text-g7-black",
  cobalt: "bg-g7-cobalt text-g7-offwhite hover:bg-g7-offwhite hover:text-g7-black",
  inverse: "bg-g7-black text-g7-offwhite hover:bg-g7-near-black border border-g7-black",
};

const base =
  "g7-mono inline-flex items-center justify-center gap-2 rounded-[2px] px-6 py-3.5 text-xs font-bold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

interface ButtonBaseProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
    | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className">)
  );

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={cls} {...linkProps}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
