import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "Choose Your Pieces",
    body: "Select from the curated GAME 7 corporate collection — outerwear, layers, tops, and headwear.",
  },
  {
    title: "Integrate Your Branding",
    body: "We develop the co-branded lockup: placements, decoration methods, and colorways built around your mark.",
  },
  {
    title: "Review Mockups & Proofs",
    body: "Every piece is mocked up and proofed for your approval before anything goes into production.",
  },
  {
    title: "Approve & Produce",
    body: "Sign off, and your program goes into production on premium, performance-grade blanks.",
  },
];

export default function ProgramSteps() {
  return (
    <section className="border-b border-g7-line bg-g7-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel accent>The Process</SectionLabel>
          <h2 className="g7-display mt-6 text-4xl text-g7-offwhite md:text-6xl">
            How it works
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] border border-g7-line bg-g7-line md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-5 bg-g7-near-black p-8">
                <span className="g7-mono text-sm text-g7-yellow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="g7-display text-lg text-g7-offwhite">{step.title}</h3>
                <p className="text-sm leading-relaxed text-g7-offwhite/70">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
