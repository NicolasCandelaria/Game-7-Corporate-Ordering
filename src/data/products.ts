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
      "An easy-to-style track jacket built from a stretch knit made with 88% recycled material and finished with a woven overlay. Secure zip pockets keep the essentials close. Wear it to warm-ups, throw it over jeans, or layer it with the rest of your Game 7 fits — on the field or off, it’s ready for whatever the day brings.",
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
      "Go anywhere, do anything. This multi-tasking full-zip layer pairs as easily with chinos for the commute as it does with denim for a night out. Cut in a classic fit with a clean collar, two-way zipper, front pockets, an elastic hem, and snap-closure cuffs — everyday cover that never slows you down.",
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
      "Built for cold-weather training. Moisture-wicking stretch fabric with a water-resistant coating keeps the elements out while warm insulation keeps you in the game. A clean mock neck rounds out a jacket loaded with performance — ready when the temperature drops.",
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
      "The one layer you won’t want to take off. Engineered to adapt to the temperature — keeping you warm when it’s cool and venting heat as things pick up. A water-repellent finish, durable stretch-woven fabric, and a soft fleece lining keep you covered, while secure zip hand pockets keep the essentials safe.",
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
      "A varsity classic, reimagined. A super-chunky cotton knit with a smooth satin lining, finished with front snap closures, welt pockets, and embroidered artwork throughout — including a bold statement across the back. Heavyweight comfort with championship energy.",
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
      "The team jacket, elevated. Paneled in a recycled poly-and-wool melton with grained leather sleeves, finished with a rib-knit stand collar, hem, and cuffs. A two-way zip, chest embroidery, welt pockets, dropped shoulders, and a full satin lining complete the look, topped with a statement across the back. Old-school spirit, premium build.",
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
      "Retro-inspired and ready to stand out. Cut from soft-touch corduroy in an oversized, slouchy fit, with a collared neckline, balloon sleeves, and contrast striped ribbed trim throughout. Chest embroidery and varsity patches at the sleeve bring the throwback energy home.",
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
      "A sporty take on a wardrobe staple. Built in an oversized, slouchy fit with a collared neckline, contrast striped ribbed trim, and varsity detailing down the sleeve. Chest embroidery adds the finishing touch — a denim jacket with game-day attitude.",
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
      "Your new go-to layer. A soft, easy-wearing fabric meets a cool quarter-zip silhouette and a stand-up collar built for game day and every day. Throw it on, zip up, and go.",
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
      "A quarter-zip with attitude. Bold colour-blocking, a clean stand-up collar, and a soft, easy-wearing fabric come together in a silhouette made to stand out. Layer it for warm-ups or wear it solo — either way, it brings the energy.",
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
      "Rest, relax, and reset. Made from brushed French terry and treated with a bio wash for an extra-soft handfeel and a lived-in look, this oversized hoodie is built for the hours between games. Pure comfort, head to toe.",
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
      "A reimagined classic. This relaxed pullover puts softness first, with a kangaroo pocket and a naturally breathable cotton-blend fleece that feels easy against the skin and delivers lightweight warmth. Comfort you’ll want to live in.",
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
      "Our softest polo yet, now in a long sleeve. A performance-minded collared shirt built from 4-way stretch fabric that wicks moisture and offers light protection from the elements. From the clubhouse to the course, it moves the way you do.",
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
      "A casual must-have with a sporty edge. Breathable cotton piqué meets contrast tipping that ties the whole look together, with a flat-knit collar, three-button placket, and short sleeves in an easy regular fit. Clean, classic, and unmistakably Game 7.",
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
      "The softest piece in the lineup, now your everyday go-to. Cut from a smooth performance knit that wicks moisture and dries quickly, this long-sleeve tee delivers next-level comfort for training days and rest days alike.",
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
      "An everyday essential, done right. Ultra-soft pima cotton with plenty of stretch and flatlock seams for clean, all-day comfort. Built to move with you from training to travel — the tee you’ll reach for again and again.",
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
      "Top off the fit. A structured snapback with logo text across the front and brim, finished with crisp embroidery and an adjustable snap closure for the perfect fit. Game-day ready, every day.",
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
