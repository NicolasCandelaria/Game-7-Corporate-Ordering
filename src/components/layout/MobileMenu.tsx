"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ctaLink, navLinks } from "@/data/nav";
import Button from "@/components/ui/Button";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className="fixed inset-0 z-[100] flex min-h-[100dvh] flex-col overflow-y-auto bg-g7-black text-g7-offwhite md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex min-h-16 items-center justify-between border-b border-g7-line px-5 pt-[env(safe-area-inset-top)]">
            <span className="g7-mono text-xs text-g7-offwhite/60">Menu</span>
            <button
              type="button"
              className="p-2 text-g7-offwhite"
              aria-label="Close menu"
              onClick={onClose}
            >
              <X size={24} aria-hidden />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col justify-center gap-1 px-5 py-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))]"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: reduced ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="g7-display block py-2 text-[clamp(2.5rem,12vw,4rem)] leading-[0.9] text-g7-offwhite transition-colors hover:text-g7-yellow"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="mt-8"
            >
              <Button href={ctaLink.href} onClick={onClose} className="w-full">
                {ctaLink.label}
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
