"use client";

import Image from "next/image";
import type { ColorOption, Product } from "@/lib/types";
import { productImageClass, productImageFrame, productImageStyle } from "@/lib/product-image-position";
import ImageZoomLightbox from "@/components/product/ImageZoomLightbox";
import CobrandToggle from "@/components/product/CobrandToggle";
import { useProductView } from "@/components/product/ProductView";

/**
 * PDP image gallery: main image + thumbnail rail, with a toggle between
 * the GAME 7 set and the co-branded example set.
 */
function colorImages(color: ColorOption | undefined, mode: "base" | "cobrand") {
  if (!color) return undefined;
  const images = mode === "cobrand" ? color.cobrandedImages : color.images;
  return images?.length ? images : undefined;
}

export default function Gallery({ product }: { product: Product }) {
  const { mode, index, colorName, switchMode, setIndex } = useProductView();
  const selected = product.colors.find((color) => color.name === colorName);

  const baseSet = [product.images.hero, ...product.images.gallery];
  const cobrandSet = product.images.cobranded;
  const activeSet =
    colorImages(selected, mode) ?? (mode === "base" ? baseSet : cobrandSet);
  const current = activeSet[Math.min(index, Math.max(activeSet.length - 1, 0))];
  const heroFrame = productImageFrame(product.slug);
  const heroStyle = productImageStyle(heroFrame);
  const heroClass = productImageClass(heroFrame);

  return (
    <div>
      <div className="mb-4">
        <CobrandToggle mode={mode} onChange={switchMode} />
      </div>

      {activeSet.length === 0 ? (
        // Labeled placeholder when no co-branded mockups exist yet
        <div className="flex aspect-[4/5] items-center justify-center rounded-[2px] border border-g7-line bg-g7-near-black p-8 text-center">
          <p className="g7-mono text-xs leading-relaxed text-g7-offwhite/50">
            Co-branded mockups
            <br />
            in development —
            <br />
            placeholder
          </p>
        </div>
      ) : (
        <>
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-g7-near-black"
            style={heroFrame?.background ? { backgroundColor: heroFrame.background } : undefined}
          >
            <Image
              key={current}
              src={current}
              alt={`${product.name}${mode === "cobrand" ? " — co-branded example" : ""} — GAME 7 corporate apparel`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={heroClass}
              style={heroStyle}
            />
            <ImageZoomLightbox
              src={current}
              alt={`${product.name}${mode === "cobrand" ? " — co-branded example" : ""} — GAME 7 corporate apparel`}
            />
          </div>

          {activeSet.length > 1 && (
            <div
              className="mt-3 flex gap-2 overflow-x-auto"
              role="group"
              aria-label="Image thumbnails"
            >
              {activeSet.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`View image ${i + 1} of ${activeSet.length}`}
                  aria-current={i === index}
                  className={`relative aspect-[4/5] w-20 shrink-0 overflow-hidden rounded-[2px] border transition-colors duration-200 ${
                    i === index
                      ? "border-g7-yellow"
                      : "border-g7-line hover:border-g7-offwhite/40"
                  }`}
                  style={heroFrame?.background ? { backgroundColor: heroFrame.background } : undefined}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="80px"
                    className={heroClass}
                    style={heroStyle}
                  />
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
