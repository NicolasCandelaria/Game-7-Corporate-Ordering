import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/** Bold closing band. Yellow block, black type — single accent, no mixing. */
export default function CTASection({
  headline = "Win Or Go Home",
  body = "Build a corporate program with premium GAME 7 pieces, deep customization, and a co-branded system your team will actually wear.",
}: {
  headline?: string;
  body?: string;
}) {
  return (
    <section className="bg-g7-yellow py-16 text-g7-black md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="g7-mono text-xs text-g7-black/70">Request a Quote</p>
          <h2 className="g7-display mt-6 max-w-4xl text-3xl sm:text-4xl md:text-7xl">{headline}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-g7-black/80">
            {body}
          </p>
          <div className="mt-10">
            <Button
              href="/inquiry"
              variant="inverse"
              className="!bg-g7-black !text-g7-offwhite hover:!bg-g7-near-black"
            >
              Start the Conversation
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
