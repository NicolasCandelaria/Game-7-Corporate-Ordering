import Hero from "@/components/sections/Hero";
import Ticker from "@/components/ui/Ticker";
import Differentiator from "@/components/sections/Differentiator";
import FeaturedDrops from "@/components/sections/FeaturedDrops";
import Manifesto from "@/components/sections/Manifesto";
import CTASection from "@/components/sections/CTASection";
import { tickerItems } from "@/data/nav";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker items={tickerItems} />
      <Differentiator />
      <FeaturedDrops />
      <Manifesto />
      <CTASection />
    </>
  );
}
