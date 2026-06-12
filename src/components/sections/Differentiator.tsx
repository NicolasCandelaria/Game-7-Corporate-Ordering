import { Layers, PenTool, Handshake } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

const pillars = [
  {
    icon: Layers,
    title: "Premium Blanks",
    body: "Performance-grade garments selected for hand, fit, and durability — a different class from off-the-shelf promo merch.",
  },
  {
    icon: PenTool,
    title: "Deep Customization",
    body: "Product selection, decoration method, and placement are all open. Embroidery, applique, PVC badges, woven labels, tonal executions.",
  },
  {
    icon: Handshake,
    title: "Co-Branding Built In",
    body: "Your mark and the GAME 7 mark, engineered together on every piece. Not a logo slapped on a catalog blank.",
  },
];

/** The strategic heart of the site: customization vs standard domestic blanks. */
export default function Differentiator() {
  return (
    <section className="border-b border-g7-line bg-g7-black py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel accent>Where The Game Lives On</SectionLabel>
          <h2 className="g7-display mt-6 max-w-4xl text-3xl text-g7-offwhite sm:text-4xl md:text-6xl">
            Official Energy. Corporate Control.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-g7-offwhite/70">
            Standard corporate merch comes from the same domestic blank catalogs with
            limited customization. The GAME 7 program is built differently — more
            authentic, more premium, and engineered for performance under pressure.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] border border-g7-line bg-g7-line md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col gap-6 bg-g7-near-black p-8 md:p-10">
                <pillar.icon size={28} className="text-g7-yellow" aria-hidden />
                <h3 className="g7-display text-xl text-g7-offwhite">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-g7-offwhite/70">
                  {pillar.body}
                </p>
                <span className="g7-mono mt-auto text-[10px] text-g7-offwhite/40">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
