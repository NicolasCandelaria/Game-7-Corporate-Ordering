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
 * 4:5 card framing for the 2026 core lineup.
 * Tall on-figure shots anchor toward the head. Wide product flats stay fully visible.
 */
const PRODUCT_IMAGE_FRAMES: Record<string, ProductImageFrame> = {
  "classic-tee": { objectPosition: "center 18%" },
  "womens-classic-tee": { objectPosition: "center 16%" },
  "long-sleeve-tee": { objectPosition: "center 16%" },
  "womens-long-sleeve-tee": { objectPosition: "center 16%" },
  "long-sleeve-polo": { objectPosition: "center 14%" },
  "stripe-polo": { objectPosition: "center 12%" },
  "oversized-hoodie": { objectPosition: "center 20%" },
  "quarter-zip": { objectPosition: "center 18%" },
  "relaxed-fit-hoodie": { objectPosition: "center 18%" },
  "track-jacket": { objectPosition: "center 16%" },
  "training-jacket": { objectPosition: "center 16%" },
  "everyday-jacket": { objectPosition: "center 14%" },
  "off-duty-snapback": { objectPosition: "center 30%" },
  "classic-cap": { objectPosition: "center 28%" },
  "off-duty-dad-hat": { objectPosition: "center 30%" },
  "flip-straw-tumbler": { fit: "contain", objectPosition: "center center" },
  "essentials-backpack": { objectPosition: "center center" },
  "leather-duffle": { objectPosition: "center center" },
  "gym-towel": { fit: "contain", objectPosition: "center center" },
  "rally-towel": { fit: "contain", objectPosition: "center center" },
  "shaker-bottle": { fit: "contain", objectPosition: "center center" },
  "clear-hip-bag": { fit: "contain", objectPosition: "center center" },
  "everything-leather-bag": {
    fit: "contain",
    objectPosition: "center center",
    scale: 2.15,
    transformOrigin: "center center",
  },
  "waterproof-weekender": { fit: "contain", objectPosition: "center center" },
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
