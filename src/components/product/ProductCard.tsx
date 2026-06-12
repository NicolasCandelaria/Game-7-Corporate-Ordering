import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { categoryLabel } from "@/data/categories";
import Tag from "@/components/ui/Tag";

/**
 * Image-led card. Hover swaps to the second image, scales subtly, and draws
 * a yellow hairline. No price — this is a showcase, not a store.
 */
export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const secondImage = product.images.gallery[0];

  return (
    <Link
      href={`/collection/${product.slug}`}
      className="group block rounded-[2px] border border-transparent transition-colors duration-200 hover:border-g7-yellow"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-g7-near-black">
        <Image
          src={product.images.hero}
          alt={`${product.name} — GAME 7 corporate apparel`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-0"
        />
        {secondImage && (
          <Image
            src={secondImage}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover opacity-0 transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 px-1 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
        <h3 className="g7-display min-w-0 text-sm leading-snug text-g7-offwhite sm:text-base">
          {product.name}
        </h3>
        <Tag className="w-fit shrink-0">{categoryLabel(product.category)}</Tag>
      </div>
    </Link>
  );
}
