import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, getRelated, products } from "@/data/products";
import { categoryLabel } from "@/data/categories";
import Tag from "@/components/ui/Tag";
import SectionLabel from "@/components/ui/SectionLabel";
import Gallery from "@/components/product/Gallery";
import ColorSwatches from "@/components/product/ColorSwatches";
import CustomizationSpec from "@/components/product/CustomizationSpec";
import RequestItemButton from "@/components/product/RequestItemButton";
import ProductGrid from "@/components/product/ProductGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} — GAME 7 Corporate Program`,
      description: product.description,
      images: [product.images.hero],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelated(product);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Sticky gallery column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Gallery product={product} />
        </div>

        {/* Scrolling detail column */}
        <div className="flex flex-col gap-8 md:gap-10">
          <header>
            <Tag>{categoryLabel(product.category)}</Tag>
            <h1 className="g7-display mt-4 text-3xl text-g7-offwhite sm:text-4xl md:mt-5 md:text-6xl">
              {product.name}
            </h1>
            {product.tagline && (
              <p className="g7-mono mt-4 text-xs text-g7-yellow">{product.tagline}</p>
            )}
          </header>

          <p className="max-w-prose text-base leading-relaxed text-g7-offwhite/80">
            {product.description}
          </p>

          <ColorSwatches colors={product.colors} />

          <CustomizationSpec spec={product.customization} />

          <div className="border-t border-g7-line pt-8">
            <RequestItemButton slug={product.slug} />
            <p className="g7-mono mt-4 text-[10px] text-g7-offwhite/40">
              No pricing online — every program is quoted directly.
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-28 border-t border-g7-line pt-16">
          <SectionLabel>More in {categoryLabel(product.category)}</SectionLabel>
          <div className="mt-10">
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </div>
  );
}
