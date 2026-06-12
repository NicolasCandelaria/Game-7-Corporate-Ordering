"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { ctaLink, navLinks } from "@/data/nav";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-g7-line bg-g7-black/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          {/* Horizontal Primary mark, off-white on dark; padding preserves clear space */}
          <Link href="/" className="flex items-center py-2" aria-label="GAME 7 home">
            <Image
              src="/brand/logo-horizontal.png"
              alt="GAME 7"
              width={615}
              height={96}
              priority
              className="h-6 w-auto md:h-7"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="g7-mono text-xs text-g7-offwhite/80 transition-colors duration-200 hover:text-g7-offwhite"
              >
                {link.label}
              </Link>
            ))}
            <Button href={ctaLink.href}>{ctaLink.label}</Button>
          </nav>

          <button
            type="button"
            className="p-2 text-g7-offwhite md:hidden"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} aria-hidden />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
