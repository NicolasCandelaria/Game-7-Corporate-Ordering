import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeatured } from "@/data/products";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import ProductGrid from "@/components/product/ProductGrid";

export default function FeaturedDrops() {
  const featured = getFeatured().slice(0, 8);

  return (
    <section className="border-b border-g7-line bg-g7-black py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>Featured Drops</SectionLabel>
              <h2 className="g7-display mt-6 text-3xl text-g7-offwhite sm:text-4xl md:text-6xl">
                The Lineup
              </h2>
            </div>
            <Link
              href="/collection"
              className="g7-mono group flex items-center gap-2 text-xs text-g7-offwhite/70 transition-colors hover:text-g7-yellow"
            >
              View Full Collection
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12">
          <ProductGrid products={featured} />
        </div>
      </div>
    </section>
  );
}
