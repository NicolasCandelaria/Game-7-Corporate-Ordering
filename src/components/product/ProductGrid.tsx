import type { Product } from "@/lib/types";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";

/** 2-col mobile / 3-col tablet / 4-col desktop, tight gutters, stagger reveal. */
export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-4 lg:grid-cols-4">
      {products.map((product, i) => (
        <Reveal key={product.slug} delay={(i % 4) * 0.06}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
