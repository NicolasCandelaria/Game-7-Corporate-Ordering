import type { Customization, Product } from "@/lib/types";

const CORE: Customization = {
  placements: ["Left chest"],
  methods: ["Print", "Embroidery"],
};

const NECK: Customization = {
  placements: ["Back neck, tone on tone"],
  methods: ["Print"],
};

const BACK_LOGO: Customization = {
  placements: ["Back"],
  methods: ["Print"],
};

const WHITE = { name: "White", hex: "#F4F4F4" };
const BLACK = { name: "Black", hex: "#111111" };
const HEATHER = { name: "Heathered Grey", hex: "#B7B7B7" };
const ICE = { name: "Ice Grey", hex: "#D5D8DC" };

function jpgSet(slug: string, count: number, heroExt = ".jpg") {
  return {
    hero: `/products/${slug}/hero${heroExt}`,
    gallery: Array.from({ length: count }, (_, i) => {
      return `/products/${slug}/gallery-${i + 1}.jpg`;
    }),
    cobranded: [] as string[],
  };
}

export const products: Product[] = [
  {
    id: "g7-001",
    slug: "classic-tee",
    name: "Classic T-Shirt (Mens)",
    category: "tops",
    tagline: "The everyday standard.",
    description:
      "A clean classic tee in white, black, and heathered grey. The back is left open — no decoration — so a left-chest mark stays the focus. The piece every program starts with.",
    colors: [WHITE, BLACK, HEATHER],
    images: jpgSet("classic-tee", 3),
    customization: { placements: ["Left chest"], methods: ["Print", "Embroidery"] },
    featured: true,
  },
  {
    id: "g7-002",
    slug: "womens-classic-tee",
    name: "Classic T-Shirt (Womens)",
    category: "tops",
    tagline: "Same standard. Cut for her.",
    description:
      "The women's classic tee in white, black, and heathered grey, with a clean back and room for a focused front mark. Built to sit in the same program as the men's tee.",
    colors: [WHITE, BLACK, HEATHER],
    images: jpgSet("womens-classic-tee", 3),
    customization: CORE,
    featured: true,
  },
  {
    id: "g7-003",
    slug: "long-sleeve-tee",
    name: "Long Sleeve Tee (Mens)",
    category: "tops",
    tagline: "Training days. Rest days.",
    description:
      "A long-sleeve tee in white, black, and heathered grey. The back stays undecorated, keeping the silhouette clean from warm-up through the rest of the day.",
    colors: [WHITE, BLACK, HEATHER],
    images: {
      hero: "/products/long-sleeve-tee/gallery-3.jpg",
      gallery: [
        "/products/long-sleeve-tee/hero.png",
        "/products/long-sleeve-tee/gallery-1.jpg",
        "/products/long-sleeve-tee/gallery-2.jpg",
      ],
      cobranded: [],
    },
    customization: CORE,
  },
  {
    id: "g7-004",
    slug: "womens-long-sleeve-tee",
    name: "Long Sleeve Tee (Womens)",
    category: "tops",
    tagline: "Coverage without the bulk.",
    description:
      "The women's long-sleeve tee in white, black, and heathered grey. A clean back and an easy layer for training, travel, and everything between.",
    colors: [WHITE, BLACK, HEATHER],
    images: jpgSet("womens-long-sleeve-tee", 3),
    customization: CORE,
  },
  {
    id: "g7-005",
    slug: "long-sleeve-polo",
    name: "Long Sleeve Polo (Mens)",
    category: "tops",
    tagline: "Collar up. Still in motion.",
    description:
      "A long-sleeve polo in white, black, and heathered grey, finished with a tone-on-tone printed logo at the back of the neck. Sharp enough for the clubhouse, easy enough for the course.",
    colors: [WHITE, BLACK, HEATHER],
    images: jpgSet("long-sleeve-polo", 3),
    customization: NECK,
    featured: true,
  },
  {
    id: "g7-006",
    slug: "stripe-polo",
    name: "Polo with Stripe Detail (Mens)",
    category: "tops",
    tagline: "Classic, with an edge.",
    description:
      "A short-sleeve polo with stripe detailing, offered in white, black, and heathered grey. A tone-on-tone printed logo sits at the back of the neck so the stripe stays the detail.",
    colors: [WHITE, BLACK, HEATHER],
    images: jpgSet("stripe-polo", 3),
    customization: NECK,
  },
  {
    id: "g7-007",
    slug: "oversized-hoodie",
    name: "Oversized Hoodie",
    category: "layers",
    tagline: "Room to recover.",
    description:
      "An oversized hoodie in white, black, and heathered grey. The back is left clean, with a kangaroo pocket and ribbing that reads clearly across a full team.",
    colors: [WHITE, BLACK, HEATHER],
    images: {
      hero: "/products/oversized-hoodie/gallery-1.jpg",
      gallery: [
        "/products/oversized-hoodie/hero.jpg",
        "/products/oversized-hoodie/gallery-2.jpg",
        "/products/oversized-hoodie/gallery-3.png",
      ],
      cobranded: [],
    },
    customization: CORE,
    featured: true,
  },
  {
    id: "g7-008",
    slug: "relaxed-fit-hoodie",
    name: "Relaxed Fit Hoodie",
    category: "layers",
    tagline: "Easy, not oversized.",
    description:
      "A relaxed hoodie in white, black, and heathered grey. Cleaner through the body than the oversized cut, with an undecorated back and a mark that stays quiet.",
    colors: [WHITE, BLACK, HEATHER],
    images: {
      hero: "/products/relaxed-fit-hoodie/hero.png",
      gallery: [
        "/products/relaxed-fit-hoodie/gallery-1.jpg",
        "/products/relaxed-fit-hoodie/gallery-2.jpg",
        "/products/relaxed-fit-hoodie/gallery-3.jpg",
      ],
      cobranded: [],
    },
    customization: CORE,
  },
  {
    id: "g7-009",
    slug: "quarter-zip",
    name: "Quarter Zip",
    category: "layers",
    tagline: "Zip up and go.",
    description:
      "A quarter zip in white, black, and heathered grey. White carries a light grey printed logo; black and heathered grey carry a dark grey logo. The back stays open.",
    colors: [WHITE, BLACK, HEATHER],
    images: {
      hero: "/products/quarter-zip/hero.jpg",
      gallery: [
        "/products/quarter-zip/gallery-1.jpg",
        "/products/quarter-zip/gallery-2.jpg",
        "/products/quarter-zip/gallery-3.png",
      ],
      cobranded: [],
    },
    customization: {
      placements: ["Front logo"],
      methods: ["Print"],
    },
    featured: true,
  },
  {
    id: "g7-010",
    slug: "track-jacket",
    name: "Track Jacket with Zippers",
    category: "outerwear",
    tagline: "Warm up. Head out.",
    description:
      "A track jacket with zip pockets in white, black, and ice grey. The back carries a printed logo — black on white and ice grey, white on black — so the jacket reads from across the field.",
    colors: [WHITE, BLACK, ICE],
    images: {
      hero: "/products/track-jacket/hero.jpg",
      gallery: [
        "/products/track-jacket/gallery-1.jpg",
        "/products/track-jacket/gallery-2.jpg",
        "/products/track-jacket/gallery-3.jpg",
      ],
      cobranded: ["/products/track-jacket/cobranded-1.jpg"],
    },
    customization: BACK_LOGO,
    featured: true,
  },
  {
    id: "g7-011",
    slug: "training-jacket",
    name: "Versatile Training Jacket",
    category: "outerwear",
    tagline: "Built for the session.",
    description:
      "A training jacket in white, black, and ice grey, with a printed back logo — black on white and ice grey, white on black. Made to move from warm-up to cool-down without a second layer.",
    colors: [WHITE, BLACK, ICE],
    images: {
      hero: "/products/training-jacket/gallery-2.jpg",
      gallery: [
        "/products/training-jacket/hero.jpg",
        "/products/training-jacket/gallery-1.jpg",
        "/products/training-jacket/gallery-3.jpg",
      ],
      cobranded: [],
    },
    customization: BACK_LOGO,
    featured: true,
  },
  {
    id: "g7-012",
    slug: "everyday-jacket",
    name: "Everyday Jacket",
    category: "outerwear",
    tagline: "Off the field. Still on brand.",
    description:
      "An everyday jacket in white, black, and ice grey. A printed logo sits on the back — black on white and ice grey, white on black — for a layer that works past the session.",
    colors: [WHITE, BLACK, ICE],
    images: {
      hero: "/products/everyday-jacket/hero.png",
      gallery: [
        "/products/everyday-jacket/gallery-1.jpg",
        "/products/everyday-jacket/gallery-2.jpg",
        "/products/everyday-jacket/gallery-3.jpg",
      ],
      cobranded: [],
    },
    customization: BACK_LOGO,
    featured: true,
  },
  {
    id: "g7-013",
    slug: "off-duty-snapback",
    name: "Off Duty Snapback",
    category: "headwear",
    tagline: "Off the clock.",
    description:
      "A snapback with a printed logo on the right side and printed seam tape on the underside. Structured enough for game day, easy enough for everything after.",
    colors: [BLACK],
    images: jpgSet("off-duty-snapback", 2),
    customization: {
      placements: ["Right side", "Underside seam tape"],
      methods: ["Print"],
    },
  },
  {
    id: "g7-014",
    slug: "classic-cap",
    name: "Classic Cap",
    category: "headwear",
    tagline: "Bill out front.",
    description:
      "A classic cap in black, navy, and red, with an embroidered logo on the bill and printed seam tape underneath. The finish that tops the uniform.",
    colors: [
      BLACK,
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Red", hex: "#B3251E" },
    ],
    images: jpgSet("classic-cap", 8),
    customization: {
      placements: ["Bill", "Underside seam tape"],
      methods: ["Embroidery", "Print"],
    },
  },
  {
    id: "g7-015",
    slug: "off-duty-dad-hat",
    name: "Off Duty Dad Hat",
    category: "headwear",
    tagline: "Low profile.",
    description:
      "An unstructured dad hat in black and white, with an embroidered logo on the right side and printed seam tape on the underside.",
    colors: [BLACK, WHITE],
    images: jpgSet("off-duty-dad-hat", 5),
    customization: {
      placements: ["Right side", "Underside seam tape"],
      methods: ["Embroidery", "Print"],
    },
  },
  {
    id: "g7-016",
    slug: "gym-towel",
    name: "Quick Dry Gym Towel with Dry Bag",
    category: "accessories",
    tagline: "Three up. Packed down.",
    description:
      "A three-pack of quick-dry gym towels with a dry bag. Built for the session and the bag that carries it.",
    colors: [BLACK],
    images: jpgSet("gym-towel", 0),
    customization: { placements: ["Towel", "Dry bag"], methods: ["Print", "Embroidery"] },
  },
  {
    id: "g7-017",
    slug: "rally-towel",
    name: "Rally Towel",
    category: "accessories",
    tagline: "For the stands.",
    description:
      "A rally towel made to be seen from the seats. A clean field for a mark, waved when the game is on the line.",
    colors: [WHITE],
    images: jpgSet("rally-towel", 0),
    customization: { placements: ["Face"], methods: ["Print"] },
  },
  {
    id: "g7-018",
    slug: "shaker-bottle",
    name: "Shaker Bottle",
    category: "accessories",
    tagline: "Between sets.",
    description:
      "A metal shaker bottle with the GAME 7 mark. For the hours between the work.",
    colors: [{ name: "Metal", hex: "#C0C4C8" }],
    images: jpgSet("shaker-bottle", 0),
    customization: { placements: ["Body"], methods: ["Print"] },
  },
  {
    id: "g7-019",
    slug: "flip-straw-tumbler",
    name: "Flip Straw Tumbler with Handle",
    category: "accessories",
    tagline: "Lid up. Keep moving.",
    description:
      "A flip-straw tumbler with a handle, in black and white. Built to travel with the kit.",
    colors: [BLACK, WHITE],
    images: jpgSet("flip-straw-tumbler", 1),
    customization: { placements: ["Body"], methods: ["Print"] },
  },
  {
    id: "g7-020",
    slug: "clear-hip-bag",
    name: "Clear Hip Bag",
    category: "accessories",
    tagline: "Hands free.",
    description:
      "A clear stadium hip bag in black and white. Small enough for the gate, marked enough to belong to the program.",
    colors: [BLACK, WHITE],
    images: jpgSet("clear-hip-bag", 1),
    customization: { placements: ["Front"], methods: ["Print"] },
  },
  {
    id: "g7-021",
    slug: "essentials-backpack",
    name: "Essentials Backpack",
    category: "accessories",
    tagline: "What you actually carry.",
    description:
      "A structured essentials backpack in black, with a tonal GAME 7 mark, top handle, and a front pocket for the things you reach for first.",
    colors: [BLACK],
    images: jpgSet("essentials-backpack", 0),
    customization: { placements: ["Front"], methods: ["Deboss", "Print"] },
  },
  {
    id: "g7-022",
    slug: "everything-leather-bag",
    name: "Everything Leather Bag",
    category: "accessories",
    tagline: "The long haul.",
    description:
      "A leather carry-all for the full kit. Built to take the trip, with the GAME 7 mark on the face.",
    colors: [BLACK],
    images: jpgSet("everything-leather-bag", 0),
    customization: { placements: ["Front"], methods: ["Deboss", "Metal badge"] },
  },
  {
    id: "g7-023",
    slug: "leather-duffle",
    name: "Leather Duffle Bag",
    category: "accessories",
    tagline: "Week to week.",
    description:
      "A woven leather duffle with top handles, a shoulder strap, and a metal GAME 7 badge. The bag that leaves with the team.",
    colors: [BLACK],
    images: jpgSet("leather-duffle", 0),
    customization: { placements: ["Front badge"], methods: ["Metal badge"] },
  },
  {
    id: "g7-024",
    slug: "waterproof-weekender",
    name: "Waterproof Weekender Bag",
    category: "accessories",
    tagline: "Weather stays out.",
    description:
      "A black waterproof weekender for the road. Closed against the weather, marked so it is obvious whose it is.",
    colors: [BLACK],
    images: jpgSet("waterproof-weekender", 0),
    customization: { placements: ["Front"], methods: ["Print"] },
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
