import type { Metadata } from "next";
import { products } from "@/data/products";
import SectionLabel from "@/components/ui/SectionLabel";
import CollectionView from "@/components/product/CollectionView";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "The GAME 7 corporate collection — performance, training, and lifestyle pieces, plus headwear and accessories, customizable for your organization.",
};

export default function CollectionPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-28">
      <header className="mb-14">
        <SectionLabel accent>
          The Catalog &middot; {products.length} Items
        </SectionLabel>
        <h1 className="g7-display mt-6 text-[clamp(2.25rem,10vw,9rem)] text-g7-offwhite">
          Collection
        </h1>
      </header>

      <CollectionView products={products} />
    </div>
  );
}
