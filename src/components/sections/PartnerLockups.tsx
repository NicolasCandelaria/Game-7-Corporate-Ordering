import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

/**
 * Partnership lockup concept: GAME 7 + partner mark in paired containers.
 * Partner marks are placeholders — swap in real partner SVGs as they land.
 */
export default function PartnerLockups() {
  return (
    <section className="border-b border-g7-line bg-g7-near-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>Co-Branding</SectionLabel>
          <h2 className="g7-display mt-6 max-w-3xl text-4xl text-g7-offwhite md:text-6xl">
            Your brand, <span className="text-g7-cobalt">integrated</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-g7-offwhite/70">
            Every program piece is developed as a true lockup — the GAME 7 mark and
            your mark, paired with intent on premium garments.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((n, i) => (
            <Reveal key={n} delay={i * 0.08}>
              <div className="flex items-center justify-center gap-0 rounded-[2px] border border-g7-line bg-g7-black">
                <div className="flex flex-1 items-center justify-center border-r border-g7-line p-8">
                  <Image
                    src="/brand/logo-horizontal.png"
                    alt="GAME 7"
                    width={160}
                    height={28}
                    className="h-5 w-auto opacity-90"
                  />
                </div>
                <div className="flex flex-1 items-center justify-center p-8">
                  <Image
                    src={`/partners/partner-${n}.svg`}
                    alt={`Partner logo placeholder ${n}`}
                    width={140}
                    height={47}
                    className="h-10 w-auto"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
