import type { Customization, Product } from "@/lib/types";

// Descriptions are written in brand voice (performance, premium, wearable)
// and aligned with game7.com / the 2024 brand guidelines. Hex values are
// best-known approximations; refine from approved mockups as they land.
//
// Image paths follow /products/{slug}/hero.jpg and gallery-*.jpg (integrated
// from images/Item images/ via scripts/integrate-assets.mjs). Co-branded
// mockups added to cobranded[] as they land.
//
// `baseGarmentRef` is an INTERNAL note for the design team. It is never
// rendered anywhere on the site.

const DEFAULT_CUSTOMIZATION: Customization = {
  placements: ["Left chest", "Back neck"],
  methods: ["Embroidery", "Woven label"],
  notes: "Placement and decoration method customizable.",
};

function images(slug: string, galleryCount = 3) {
  return {
    hero: `/products/${slug}/hero.jpg`,
    gallery: Array.from(
      { length: galleryCount },
      (_, i) => `/products/${slug}/gallery-${i + 1}.jpg`,
    ),
    cobranded: [] as string[],
  };
}

export const products: Product[] = [
  // ------------------------------------------------------------------
  // OUTERWEAR
  // ------------------------------------------------------------------
  {
    id: "g7-001",
    slug: "track-jacket",
    name: "Track Jacket with Zip Pockets",
    category: "outerwear",
    tagline: "Built to move. Made to lead.",
    description:
      "A performance track jacket cut for motion, finished with secure zip pockets and a tonal back-neck mark. Boardroom to warm-up without breaking stride.",
    colors: [
      { name: "Cobalt", hex: "#0F6BD7", pantone: "PMS 2387 C" },
      { name: "Tonal Logo Cobalt", hex: "#0B4FA8", pantone: "PMS 2388 C" },
    ],
    images: images("track-jacket"),
    customization: {
      placements: ["Back neck (tonal)", "Left chest"],
      methods: ["Embroidery", "Heat transfer", "Woven label"],
      notes: "Tonal back-neck execution as approved. Placement and decoration method customizable.",
    },
    baseGarmentRef: "Vuori Sunday Element track jacket",
    featured: true,
  },
  {
    id: "g7-002",
    slug: "everyday-jacket",
    name: "Everyday Jacket",
    category: "outerwear",
    tagline: "The daily standard.",
    description:
      "A clean everyday layer with snap-button detail that holds its shape from first meeting to last call. Premium hand, zero fuss.",
    colors: [{ name: "Black", hex: "#000000" }],
    images: images("everyday-jacket", 1),
    customization: {
      placements: ["Left chest", "Snap placket"],
      methods: ["Embroidery", "Woven label"],
      notes: "Placement and decoration method customizable.",
    },
    baseGarmentRef: "Vuori Metatwill Harrington",
    featured: true,
  },
  {
    id: "g7-003",
    slug: "training-jacket",
    name: "Versatile Training Jacket",
    category: "outerwear",
    tagline: "Ready for every rep.",
    description:
      "An insulated hybrid built for transition — warm enough for the commute, light enough for the work. Wear it hard.",
    colors: [{ name: "Black", hex: "#000000" }],
    images: images("training-jacket"),
    customization: DEFAULT_CUSTOMIZATION,
    baseGarmentRef: "Vuori Sunday Insulated Hybrid",
  },
  {
    id: "g7-004",
    slug: "black-vest",
    name: "Black Vest",
    category: "outerwear",
    tagline: "Core warmth. Full range.",
    description:
      "A hybrid vest that keeps your core in the game and your arms free. Back-neck mark executed as a rubber badge — quiet, technical, permanent.",
    colors: [{ name: "Black", hex: "#000000" }],
    images: images("black-vest", 1),
    customization: {
      placements: ["Back neck", "Left chest"],
      methods: ["Rubber / PVC badge", "Embroidery"],
      notes: "Back-neck logo applied as PVC. Placement and decoration method customizable.",
    },
    baseGarmentRef: "Under Armour Drive Pro Hybrid vest",
    featured: true,
  },
  {
    id: "g7-005",
    slug: "varsity-bomber",
    name: "Varsity Knit Bomber",
    category: "outerwear",
    tagline: "Earned, not issued.",
    description:
      "A knit bomber with championship posture — structured collar, ribbed trim, updated GAME 7 mark. The piece people ask about.",
    colors: [
      { name: "Green", hex: "#1E4D2B" }, // Pantone picked; refine from mockups
      { name: "Blue", hex: "#1B3A6B" }, // Pantone picked; refine from mockups
    ],
    images: images("varsity-bomber", 1),
    customization: {
      placements: ["Left chest", "Back", "Sleeve"],
      methods: ["Knit-in", "Applique", "Embroidery"],
      notes: "Updated GAME 7 logo. Placement and decoration method customizable.",
    },
    baseGarmentRef: "Kith",
    featured: true,
  },
  {
    id: "g7-006",
    slug: "letterman-jacket",
    name: "Letterman Jacket",
    category: "outerwear",
    tagline: "Legacy on your shoulders.",
    description:
      "Collegiate weight, modern cut, updated GAME 7 mark. Built for the people who set the standard, not the ones who follow it.",
    colors: [{ name: "Black", hex: "#000000" }],
    images: images("letterman-jacket", 1),
    customization: {
      placements: ["Left chest", "Back", "Sleeve"],
      methods: ["Applique", "Embroidery", "Chenille patch"],
      notes: "Updated GAME 7 logo. Placement and decoration method customizable.",
    },
    baseGarmentRef: "Y-3 collegiate jacket",
    featured: true,
  },
  {
    id: "g7-007",
    slug: "red-button-up-jacket",
    name: "Red Button-Up Jacket",
    category: "outerwear",
    tagline: "Loud where it counts.",
    description:
      "A button-up varsity layer in full red. One statement piece per wardrobe — this is it.",
    colors: [{ name: "Red", hex: "#B3251E" }],
    images: images("red-button-up-jacket", 1),
    customization: DEFAULT_CUSTOMIZATION,
    baseGarmentRef: "BDG corduroy varsity",
  },
  {
    id: "g7-008",
    slug: "denim-jacket",
    name: "Denim Jacket",
    category: "outerwear",
    tagline: "Workwear, promoted.",
    description:
      "Indigo denim with a back placement built to carry a mark. A workhorse layer that gets better the more it's worn.",
    colors: [{ name: "Denim / Indigo", hex: "#2E4057" }],
    images: images("denim-jacket", 1),
    customization: {
      placements: ["Back (size TBD)", "Left chest"],
      methods: ["Embroidery", "Applique"],
      notes: "Item likely to be revised; back placement size TBD. Placement and decoration method customizable.",
    },
    baseGarmentRef: "BDG corduroy varsity (revisit)",
  },

  // ------------------------------------------------------------------
  // HOODIES & LAYERS
  // ------------------------------------------------------------------
  {
    id: "g7-009",
    slug: "quarter-zip",
    name: "Quarter Zip",
    category: "hoodies-layers",
    tagline: "The mid-layer that means business.",
    description:
      "Athletic heather with a red accent hit. The quarter zip that holds up under travel, training, and Tuesday.",
    colors: [
      { name: "Athletic Heather Grey", hex: "#9DA2A6" },
      { name: "Red Accent", hex: "#C8102E" }, // red Pantone TBD
    ],
    images: images("quarter-zip"),
    customization: DEFAULT_CUSTOMIZATION,
    baseGarmentRef: "Alo Accolade 1/4 zip",
  },
  {
    id: "g7-010",
    slug: "colour-block-quarter-zip",
    name: "Colour Block Quarter Zip",
    category: "hoodies-layers",
    tagline: "Contrast, controlled.",
    description:
      "Heather colour-blocking with sleeve and back-neck marks. Engineered contrast that reads premium across a full team.",
    colors: [{ name: "Heather Grey Colour-Block", hex: "#8E9398" }],
    images: images("colour-block-quarter-zip"),
    customization: {
      placements: ["Left sleeve", "Back neck"],
      methods: ["Embroidery", "Heat transfer"],
      notes: "Logo dimensions TBD. Placement and decoration method customizable.",
    },
    baseGarmentRef: "Alo Accolade 1/4 zip",
    featured: true,
  },
  {
    id: "g7-011",
    slug: "oversized-hoodie",
    name: "Oversized Hoodie",
    category: "hoodies-layers",
    tagline: "Recovery-grade comfort.",
    description:
      "An oversized hoodie in pale grey heather with serious loft. Built for the hours between the work.",
    colors: [{ name: "Pale Grey Heather", hex: "#C9CBCD" }], // greys picked; refine
    images: images("oversized-hoodie"),
    customization: DEFAULT_CUSTOMIZATION,
    baseGarmentRef: "Vuori Restore oversized hoodie",
  },
  {
    id: "g7-012",
    slug: "relaxed-fit-hoodie",
    name: "Relaxed Fit Hoodie",
    category: "hoodies-layers",
    tagline: "Steady under pressure.",
    description:
      "A relaxed pullover in deep navy with a clean face for decoration. The hoodie your team actually keeps.",
    colors: [{ name: "Navy", hex: "#1B2A4A" }], // closest Pantone match
    images: images("relaxed-fit-hoodie"),
    customization: DEFAULT_CUSTOMIZATION,
    baseGarmentRef: "Lululemon Steady State pullover hoodie",
  },

  // ------------------------------------------------------------------
  // TOPS
  // ------------------------------------------------------------------
  {
    id: "g7-013",
    slug: "long-sleeve-polo",
    name: "Long Sleeve Polo",
    category: "tops",
    tagline: "Client-facing. Performance-built.",
    description:
      "A technical long-sleeve polo that holds a collar and a pace. Frost grey, white, and navy variants for full-roster programs.",
    colors: [
      { name: "Frost Grey Heather", hex: "#B7BCC0" },
      { name: "White", hex: "#F4F4F4" }, // grey logo used on white
      { name: "Blue / Navy", hex: "#1E3A5F" },
    ],
    images: images("long-sleeve-polo"),
    customization: {
      placements: ["Left chest", "Back neck"],
      methods: ["Embroidery", "Screen print"],
      notes: "Black-on-black print feasibility under review; grey logo used on white. Placement and decoration method customizable.",
    },
    baseGarmentRef: "Vuori Strato tech polo",
  },
  {
    id: "g7-014",
    slug: "stripe-polo",
    name: "Polo with Stripe Detailing",
    category: "tops",
    tagline: "Detail wins games.",
    description:
      "Cotton pique with contrast tipping at collar and cuff. Tipping colors configurable to your brand system.",
    colors: [{ name: "Contrast Tipping Options", hex: "#1A1A1A" }],
    images: images("stripe-polo"),
    customization: DEFAULT_CUSTOMIZATION,
    baseGarmentRef: "Hugo Boss cotton pique with contrast tipping",
  },
  {
    id: "g7-015",
    slug: "long-sleeve-tee",
    name: "Long Sleeve Tee",
    category: "tops",
    tagline: "The everyday training layer.",
    description:
      "A tech long-sleeve in navy heather that wicks, stretches, and recovers. Daily-wear durability with a premium hand.",
    colors: [{ name: "Navy Heather", hex: "#2C3A55" }],
    images: images("long-sleeve-tee"),
    customization: DEFAULT_CUSTOMIZATION,
    baseGarmentRef: "Vuori Strato tech tee",
  },
  {
    id: "g7-016",
    slug: "classic-tee",
    name: "Classic Tee",
    category: "tops",
    tagline: "The foundation piece.",
    description:
      "A premium classic tee in misty blue — soft enough to keep, sharp enough to wear out. The baseline every program is built on.",
    colors: [
      { name: "Misty Blue (Darker)", hex: "#7FA0AC", pantone: "PMS 2220 C" },
      { name: "Misty Blue (Lighter)", hex: "#9FB9BD", pantone: "PMS 5503 C" },
    ],
    images: images("classic-tee"),
    customization: DEFAULT_CUSTOMIZATION,
    baseGarmentRef: "Vuori Tuvalu tee",
    featured: true,
  },

  // ------------------------------------------------------------------
  // HEADWEAR
  // ------------------------------------------------------------------
  {
    id: "g7-017",
    slug: "classic-cap",
    name: "Classic Cap",
    category: "headwear",
    tagline: "Crown standard.",
    description:
      "A structured snapback in black/navy with GAME 7 logo on the inner taping. Alternate spec: black hat, blue label, blue inner seam tape.",
    colors: [
      { name: "Black / Navy", hex: "#10141C" },
      { name: "Black / Blue Tape (Alt)", hex: "#0A0A0A" },
    ],
    images: images("classic-cap"),
    customization: {
      placements: ["Front crown", "Inner taping", "Back arch"],
      methods: ["Embroidery", "Woven label", "Printed taping"],
      notes: "Inner taping logo size approximate. Placement and decoration method customizable.",
    },
    baseGarmentRef: "Mitchell & Ness Pro Crown snapback",
  },
  {
    id: "g7-018",
    slug: "off-duty-snapback",
    name: "Off Duty Snapback",
    category: "headwear",
    tagline: "Off the clock, on brand.",
    description:
      "A snapback in a deliberate off-palette colorway. Built for the hours when the suit comes off and the standard doesn't.",
    colors: [{ name: "Off-Palette (Selected)", hex: "#6B5B4D" }], // Pantone picked
    images: images("off-duty-snapback", 2),
    customization: {
      placements: ["Front crown", "Back arch"],
      methods: ["Embroidery", "Woven label"],
      notes: "Placement and decoration method customizable.",
    },
    baseGarmentRef: "snapback",
  },
  {
    id: "g7-019",
    slug: "off-duty-dad-hat",
    name: "Off Duty Dad Hat",
    category: "headwear",
    tagline: "Low profile. High standard.",
    description:
      "An unstructured dad hat with back tag included, logo set to the wearer's right for consistency. Easy to wear, hard to put down.",
    colors: [{ name: "TBD", hex: "#3A3A3A" }],
    images: images("off-duty-dad-hat"),
    customization: {
      placements: ["Front crown (wearer's right)", "Back tag"],
      methods: ["Embroidery", "Woven label"],
      notes: "Back tag included; logo flipped to wearer's right for consistency. Placement and decoration method customizable.",
    },
    baseGarmentRef: "dad hat",
    featured: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeatured(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelated(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, count);
}
