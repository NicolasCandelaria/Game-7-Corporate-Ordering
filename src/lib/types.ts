export type Category = "outerwear" | "hoodies-layers" | "tops" | "headwear";

export interface ColorOption {
  name: string;
  hex: string; // best-known approximation; refine from mockups
  pantone?: string; // when specified in approvals
}

export interface Customization {
  placements: string[]; // e.g. ['Left chest', 'Back neck', 'Left sleeve']
  methods: string[]; // e.g. ['Embroidery', 'Woven label', 'PVC badge']
  notes?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  tagline?: string;
  description: string; // brand-voice copy (placeholder ok)
  colors: ColorOption[];
  images: {
    hero: string; // /products/{slug}/hero.jpg
    gallery: string[];
    cobranded: string[]; // co-branded mockups; [] if none yet
  };
  customization: Customization;
  baseGarmentRef?: string; // INTERNAL ONLY, never rendered. Source blank for the mockup.
  featured?: boolean;
}

export interface CategoryDef {
  id: Category;
  label: string;
}
