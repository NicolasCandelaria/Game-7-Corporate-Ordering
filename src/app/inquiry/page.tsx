import type { Metadata } from "next";
import { Suspense } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import InquiryForm from "@/components/form/InquiryForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Start a GAME 7 corporate program inquiry. Tell us about your organization, the pieces you're interested in, and how you want your brand integrated.",
};

export default function InquiryPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
      <header className="mb-14">
        <SectionLabel accent>Request a Quote</SectionLabel>
        <h1 className="g7-display mt-6 text-[clamp(2rem,8vw,6.5rem)] text-g7-offwhite">
          Make your move
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-g7-offwhite/70">
          Tell us about your organization and the pieces you have in mind. The program
          team responds directly — every quote is a conversation, not a calculator.
        </p>
      </header>

      <Suspense fallback={null}>
        <InquiryForm />
      </Suspense>
    </div>
  );
}
