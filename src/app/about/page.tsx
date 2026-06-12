import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "The GAME 7 story: Mark Messier's premium sports-lifestyle brand, built on performance under pressure. Nine career Game 7s. Seven wins.",
};

// Pillar names and taglines taken directly from the GAME 7 brand guidelines.
const pillars = [
  { name: "Ambition", line: "Dare to dream. Greatness does not happen by accident." },
  { name: "Commitment", line: "Make your own luck. Fortune favors the prepared." },
  { name: "Gratitude", line: "No one wins alone." },
  { name: "Sacrifice", line: "Put it all on the line." },
  { name: "Focus", line: "Sweat every detail." },
  { name: "Preparation", line: "Preparation is the foundation." },
  { name: "Passion", line: "Love the game." },
];

export default function AboutPage() {
  return (
    <>
      {/* Manifesto treatment */}
      <section className="relative flex min-h-[70svh] items-start overflow-x-hidden border-b border-g7-line md:min-h-[85svh] md:items-center">
        <Image
          src="/editorial/about.jpg"
          alt="A team piles together in celebration after a championship win"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-g7-black/80 via-g7-black/40 to-g7-black"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-32">
          <SectionLabel accent>The Two Greatest Words In Sports</SectionLabel>
          <h1 className="g7-display mt-6 max-w-5xl text-[clamp(2rem,8vw,8.5rem)] text-g7-offwhite">
            When Everything Is{" "}
            <span className="text-g7-yellow">On The Line</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-g7-offwhite/80 md:mt-8 md:text-lg">
            GAME 7 is a performance lifestyle brand underscoring the journey to
            success. The corporate program brings that same pressure-tested identity
            to premium apparel built for teams, partners, and organizations.
          </p>
        </div>
      </section>

      {/* Messier section */}
      <section className="border-b border-g7-line bg-g7-black py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-g7-near-black">
              <Image
                src="/editorial/messier.jpg"
                alt="Rangers fans hold up 1994 signs during the playoff run"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center">
              <SectionLabel>Leadership Under Pressure</SectionLabel>
              <h2 className="g7-display mt-6 text-4xl text-g7-offwhite md:text-6xl">
                Mark Messier
              </h2>
              <p className="mt-8 max-w-prose text-base leading-relaxed text-g7-offwhite/80">
                Few athletes have defined leadership under pressure like Mark Messier.
                Over his career he played nine Game 7s — and won seven. That statistic
                is the name on the label: the game where everything is decided, and the
                preparation that decides it.
              </p>
              <div className="g7-mono mt-10 flex gap-10 border-t border-g7-line pt-8 text-xs text-g7-offwhite/60">
                <div>
                  <p className="g7-display text-5xl text-g7-yellow">9</p>
                  <p className="mt-2">Career Game 7s</p>
                </div>
                <div>
                  <p className="g7-display text-5xl text-g7-offwhite">7</p>
                  <p className="mt-2">Game 7 Wins</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-g7-line bg-g7-near-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>The Pillars</SectionLabel>
            <h2 className="g7-display mt-6 text-4xl text-g7-offwhite md:text-6xl">
              The Work Behind The Moment
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2px] border border-g7-line bg-g7-line sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.name} delay={(i % 4) * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-3 bg-g7-black p-7">
                  <span className="g7-mono text-[10px] text-g7-offwhite/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="g7-display text-lg text-g7-offwhite">{pillar.name}</h3>
                  <p className="text-sm leading-relaxed text-g7-offwhite/70">
                    {pillar.line}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <p className="g7-mono max-w-2xl text-xs leading-relaxed text-g7-offwhite/50">
              The GAME 7 corporate customization program is brought to organizations
              across North America by Billboard Agency International, strategic
              distribution partner.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        headline="Where The Game Lives On"
        body="Bring the GAME 7 standard into your organization through premium pieces, co-branding, and direct program support."
      />
    </>
  );
}
