import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

/** Full-bleed editorial block with overlaid manifesto copy. */
export default function Manifesto() {
  return (
    <section className="relative flex min-h-[70svh] items-start overflow-x-hidden border-b border-g7-line md:min-h-[80svh] md:items-center">
      <Image
        src="/editorial/manifesto.jpg"
        alt="A buzzer-beating playoff shot drops as both benches watch"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-g7-black via-g7-black/50 to-g7-black/70" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel accent>When Everything Is On The Line</SectionLabel>
          <h2 className="g7-display mt-6 max-w-5xl text-[clamp(2rem,7vw,7rem)] text-g7-offwhite md:mt-8">
            What Is Your <span className="text-g7-yellow">Game 7</span> Moment?
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-g7-offwhite/80 md:text-lg">
            Winner takes all. The stage where greatness is born. Stars become
            champions, and champions become legends. We build corporate apparel for
            the moments where preparation, pressure, and identity meet.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
