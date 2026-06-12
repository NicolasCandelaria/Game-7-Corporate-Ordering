"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { productImagePosition } from "@/lib/product-image-position";
import CobrandToggle, { type GalleryMode } from "@/components/product/CobrandToggle";

/**
 * PDP image gallery: main image + thumbnail rail, with a toggle between
 * the GAME 7 set and the co-branded example set.
 */
export default function Gallery({ product }: { product: Product }) {
  const [mode, setMode] = useState<GalleryMode>("base");
  const [index, setIndex] = useState(0);

  const baseSet = [product.images.hero, ...product.images.gallery];
  const cobrandSet = product.images.cobranded;
  const activeSet = mode === "base" ? baseSet : cobrandSet;
  const current = activeSet[Math.min(index, Math.max(activeSet.length - 1, 0))];
  const imagePosition = productImagePosition(product.slug);

  function switchMode(next: GalleryMode) {
    setMode(next);
    setIndex(0);
  }

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
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-g7-near-black">
            <Image
              key={current}
              src={current}
              alt={`${product.name}${mode === "cobrand" ? " — co-branded example" : ""} — GAME 7 corporate apparel`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
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
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                    style={
                      i === 0 && imagePosition
                        ? { objectPosition: imagePosition }
                        : undefined
                    }
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
