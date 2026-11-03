import type { ColorOption, Product } from "@/lib/types";

export type ProductGalleryMode = "base" | "cobrand";

/** Photos tied to a colorway for the current toggle. Empty means no dedicated shot. */
export function colorImages(
  color: ColorOption | undefined,
  mode: ProductGalleryMode,
): string[] | undefined {
  if (!color) return undefined;
  const images = mode === "cobrand" ? color.cobrandedImages : color.images;
  return images?.length ? images : undefined;
}

/**
 * Every mockup for this mode. Colorways pick which one is shown large;
 * they do not drop the others out of the thumbnail row.
 */
export function gallerySet(product: Product, mode: ProductGalleryMode): string[] {
  const defaults =
    mode === "base"
      ? [product.images.hero, ...product.images.gallery]
      : product.images.cobranded;
  const extras = product.colors.flatMap((color) => colorImages(color, mode) ?? []);
  return [...new Set([...defaults, ...extras])];
}
