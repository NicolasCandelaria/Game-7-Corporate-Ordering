"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-start overflow-x-hidden bg-g7-black md:min-h-[100svh] md:justify-center">
      <Image
        src="/editorial/hero.jpg"
        alt=""
        aria-hidden
        fill
        priority
        className="object-cover opacity-40"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-g7-black/70 via-g7-black/40 to-g7-black" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-24 md:px-8 md:py-32">
        <motion.div {...rise(0)}>
          <SectionLabel accent>The GAME 7 Corporate Program</SectionLabel>
        </motion.div>

        <motion.h1
          {...rise(0.1)}
          className="g7-display mt-4 w-full max-w-4xl text-pretty text-[clamp(2.25rem,9vw,6rem)] text-g7-offwhite md:mt-6"
        >
          The Two Greatest
          <br />
          Words In{" "}
          <span className="text-g7-yellow">Sports</span>
        </motion.h1>

        <motion.p
          {...rise(0.25)}
          className="mt-6 max-w-xl text-base leading-relaxed text-g7-offwhite/80 md:mt-8 md:text-lg"
        >
          Corporate customization for moments when everything is on the line:
          premium GAME 7 apparel, built around your organization.
        </motion.p>

        <motion.div
          {...rise(0.35)}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <Button href="/inquiry" className="w-full sm:w-auto">
            Request a Quote
          </Button>
          <Button href="/collection" variant="outline" className="w-full sm:w-auto">
            View the Collection
          </Button>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-g7-offwhite/50 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
