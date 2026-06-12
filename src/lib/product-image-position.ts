/** Per-product hero framing tweaks for the 4:5 display boxes. */
const PRODUCT_IMAGE_POSITIONS: Record<string, string> = {
  // Full-length shots — shift down to keep head off the top edge.
  "black-vest": "center 42%",
  "classic-tee": "center 36%",
  "stripe-polo": "center 36%",
  // Waist-up shots — shift up to reduce empty headroom and show more below.
  "varsity-bomber": "center 62%",
  "denim-jacket": "center 60%",
};

export function productImagePosition(slug: string): string | undefined {
  return PRODUCT_IMAGE_POSITIONS[slug];
}
