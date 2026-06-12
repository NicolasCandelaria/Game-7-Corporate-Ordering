export interface ProductImageFrame {
  objectPosition: string;
  fit?: "cover" | "contain";
  scale?: number;
  translateY?: string;
  transformOrigin?: string;
}

type ImageStyle = {
  objectPosition: string;
  transform?: string;
  transformOrigin?: string;
};

/**
 * Per-product hero framing for 4:5 display boxes.
 * Full-length shots anchor to the top edge; waist-up shots use a modest
 * bottom-anchored zoom so the frame stays filled without cutting off heads.
 */
const PRODUCT_IMAGE_FRAMES: Record<string, ProductImageFrame> = {
  // Portrait (~2:3) — anchor to the top so head clears the frame edge.
  "black-vest": { objectPosition: "center top" },
  "classic-tee": { objectPosition: "center top" },
  "stripe-polo": { objectPosition: "center top" },
  // Wider (~19:20) — cover the frame with a light downward nudge.
  "varsity-bomber": {
    objectPosition: "center center",
    scale: 1.1,
    translateY: "2%",
    transformOrigin: "center center",
  },
  "denim-jacket": {
    objectPosition: "center center",
    scale: 1.08,
    translateY: "2%",
    transformOrigin: "center center",
  },
};

export function productImageFrame(slug: string): ProductImageFrame | undefined {
  return PRODUCT_IMAGE_FRAMES[slug];
}

export function productImageClass(frame?: ProductImageFrame): string {
  return frame?.fit === "contain" ? "object-contain" : "object-cover";
}

export function productImageStyle(
  frame?: ProductImageFrame,
): ImageStyle | undefined {
  if (!frame) return undefined;

  const style: ImageStyle = {
    objectPosition: frame.objectPosition,
  };

  const transforms = [];
  if (frame.translateY) transforms.push(`translateY(${frame.translateY})`);
  if (frame.scale && frame.scale !== 1) transforms.push(`scale(${frame.scale})`);

  if (transforms.length > 0) {
    style.transform = transforms.join(" ");
    style.transformOrigin = frame.transformOrigin ?? frame.objectPosition;
  }

  return style;
}
