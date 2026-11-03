"use client";

import type { Product } from "@/lib/types";
import { colorImages, gallerySet } from "@/lib/product-gallery";
import { useProductView } from "@/components/product/ProductView";

/** Swatch row. Colorways with their own photos open that mockup. */
export default function ColorSwatches({ product }: { product: Product }) {
  const { mode, colorName, selectColor } = useProductView();
  const colors = product.colors;
  const selectable = colors.some(
    (color) => color.images?.length || color.cobrandedImages?.length,
  );

  return (
    <div>
      <p className="g7-mono mb-3 text-[10px] text-g7-offwhite/50">Colorways</p>
      <ul className="flex flex-wrap gap-4">
        {colors.map((color) => {
          const selected = colorName === color.name;
          const displayName =
            mode === "cobrand" && color.cobrandedName ? color.cobrandedName : color.name;
          const displayHex =
            mode === "cobrand" && color.cobrandedHex ? color.cobrandedHex : color.hex;
          const swatch = (
            <span
              className={`block h-10 w-10 rounded-[2px] border transition-colors duration-200 ${
                selected
                  ? "border-g7-yellow"
                  : "border-g7-line group-hover:border-g7-offwhite/60"
              }`}
              style={{ backgroundColor: displayHex }}
            />
          );
          const label = (
            <span className="g7-mono max-w-28 text-[10px] leading-snug text-g7-offwhite/60">
              {displayName}
              {color.pantone && (
                <>
                  <br />
                  <span className="text-g7-offwhite/40">{color.pantone}</span>
                </>
              )}
            </span>
          );

          return (
            <li key={color.name} className="group flex flex-col gap-2">
              {selectable ? (
                <button
                  type="button"
                  title={displayName}
                  aria-pressed={selected}
                  onClick={() => {
                    const set = gallerySet(product, mode);
                    const primary = colorImages(color, mode)?.[0];
                    const nextIndex = primary ? Math.max(set.indexOf(primary), 0) : 0;
                    selectColor(color.name, nextIndex);
                  }}
                  className="flex flex-col items-start gap-2 text-left"
                >
                  {swatch}
                  {label}
                </button>
              ) : (
                <>
                  <span title={displayName}>{swatch}</span>
                  {label}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
