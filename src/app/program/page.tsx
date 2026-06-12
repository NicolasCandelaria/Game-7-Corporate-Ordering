import type { Metadata } from "next";
import Image from "next/image";
import { Gift, Briefcase, Users, CalendarCheck, Trophy } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import ProgramSteps from "@/components/sections/ProgramSteps";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "The Program",
  description:
    "How the GAME 7 corporate customization program works: choose your pieces, integrate your branding, review proofs, approve and produce.",
};

const useCases = [
  { icon: Gift, label: "Corporate Gifting" },
  { icon: Briefcase, label: "Executive Apparel" },
  { icon: Users, label: "Team Gear" },
  { icon: CalendarCheck, label: "Client Events" },
  { icon: Trophy, label: "Incentive Programs" },
];

const depth = [
  {
    title: "Placements",
    body: "Left chest, back neck, sleeve, inner taping, back tag — placements are open, not fixed.",
  },
  {
    title: "Methods",
    body: "Embroidery, screen print, applique, rubber/PVC badge, woven label, tonal executions.",
  },
  {
    title: "Co-Branding",
    body: "True lockups developed for your mark alongside GAME 7 — proofed before production.",
  },
  {
    title: "Premium Blanks",
    body: "Performance-grade garments, not standard domestic blanks. Pieces people choose to wear.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <section className="relative overflow-x-hidden border-b border-g7-line">
        <Image
          src="/editorial/program.jpg"
          alt="An athlete trains alone on the pitch at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-g7-black/70 via-g7-black/30 to-g7-black"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
          <SectionLabel accent>Where The Game Lives On</SectionLabel>
          <h1 className="g7-display mt-6 max-w-3xl text-[clamp(2rem,5.5vw,5rem)] text-g7-offwhite">
            Built For Your Organization
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-g7-offwhite/70 md:text-lg">
            The GAME 7 corporate program is open to select partners through Billboard
            Agency International. Every engagement turns the energy of the two greatest
            words in sports into premium apparel shaped around your pieces, your
            branding, and your standard.
          </p>
        </div>
      </section>

      <ProgramSteps />

      <section className="border-b border-g7-line bg-g7-near-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>When Everything Is On The Line</SectionLabel>
            <h2 className="g7-display mt-6 text-4xl text-g7-offwhite md:text-6xl">
              Built For The Moments That Matter
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {useCases.map((uc, i) => (
              <Reveal key={uc.label} delay={i * 0.06} className="h-full">
                <li className="flex h-full flex-col gap-4 rounded-[2px] border border-g7-line bg-g7-black p-6">
                  <uc.icon size={22} className="text-g7-yellow" aria-hidden />
                  <span className="g7-mono text-xs text-g7-offwhite">{uc.label}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-g7-line bg-g7-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>Customization Depth</SectionLabel>
            <h2 className="g7-display mt-6 max-w-3xl text-4xl text-g7-offwhite md:text-6xl">
              Open Spec. Not A Fixed Catalog.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2px] border border-g7-line bg-g7-line sm:grid-cols-2">
            {depth.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-4 bg-g7-near-black p-8">
                  <h3 className="g7-display text-lg text-g7-offwhite">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-g7-offwhite/70">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Start Your Program"
        body="No store. No checkout. A direct conversation about premium GAME 7 pieces customized for your organization."
      />
    </>
  );
}
