export interface ProductImageFrame {
  objectPosition: string;
  scale?: number;
  transformOrigin?: string;
}

type ImageStyle = {
  objectPosition: string;
  transform?: string;
  transformOrigin?: string;
};

/**
 * Per-product hero framing for 4:5 display boxes.
 * Full-length shots anchor to the top edge; waist-up shots zoom in from the bottom.
 */
const PRODUCT_IMAGE_FRAMES: Record<string, ProductImageFrame> = {
  // Portrait (~2:3) — anchor to top so head clears the frame edge.
  "black-vest": { objectPosition: "center top" },
  "classic-tee": { objectPosition: "center top" },
  "stripe-polo": { objectPosition: "center top" },
  // Wider (~19:20) — full height is visible at 4:5, so zoom from the bottom.
  "varsity-bomber": {
    objectPosition: "center bottom",
    scale: 1.48,
    transformOrigin: "center bottom",
  },
  "denim-jacket": {
    objectPosition: "center bottom",
    scale: 1.48,
    transformOrigin: "center bottom",
  },
};

export function productImageFrame(slug: string): ProductImageFrame | undefined {
  return PRODUCT_IMAGE_FRAMES[slug];
}

export function productImageStyle(
  frame?: ProductImageFrame,
): ImageStyle | undefined {
  if (!frame) return undefined;

  const style: ImageStyle = {
    objectPosition: frame.objectPosition,
  };

  if (frame.scale && frame.scale !== 1) {
    style.transform = `scale(${frame.scale})`;
    style.transformOrigin = frame.transformOrigin ?? frame.objectPosition;
  }

  return style;
}
