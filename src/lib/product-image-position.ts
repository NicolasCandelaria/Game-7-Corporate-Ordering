export interface ProductImageFrame {
  objectPosition: string;
  fit?: "cover" | "contain";
  scale?: number;
  translateY?: string;
  transformOrigin?: string;
  /** Fills the card behind object-contain shots so studio gray meets the frame. */
  background?: string;
}

type ImageStyle = {
  objectPosition: string;
  transform?: string;
  transformOrigin?: string;
};

/**
 * 4:5 card framing for the 2026 core lineup.
 * Tall on-figure shots anchor toward the head. Hats stay fully visible inside the frame.
 */
const PRODUCT_IMAGE_FRAMES: Record<string, ProductImageFrame> = {
  "classic-tee": { objectPosition: "center 11%" },
  "womens-classic-tee": { objectPosition: "center top" },
  "long-sleeve-tee": { objectPosition: "center top" },
  "womens-long-sleeve-tee": { objectPosition: "center top" },
  "long-sleeve-polo": { objectPosition: "center top" },
  "stripe-polo": { objectPosition: "center 11%" },
  "oversized-hoodie": { objectPosition: "center top" },
  "quarter-zip": { objectPosition: "center center" },
  "relaxed-fit-hoodie": { objectPosition: "center center" },
  "track-jacket": { objectPosition: "center top" },
  "training-jacket": { objectPosition: "center top" },
  "everyday-jacket": { objectPosition: "center top" },
  "off-duty-snapback": { fit: "contain", objectPosition: "center center", scale: 1.22, transformOrigin: "center center" },
  "classic-cap": { fit: "contain", objectPosition: "center center", scale: 1.18, transformOrigin: "center center" },
  "off-duty-dad-hat": { fit: "contain", objectPosition: "center center", scale: 1.32, transformOrigin: "center center" },
  // Handle and base sit on the frame edge, so cover would clip them.
  "flip-straw-tumbler": { fit: "contain", objectPosition: "center center", background: "#eeeeee" },
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
