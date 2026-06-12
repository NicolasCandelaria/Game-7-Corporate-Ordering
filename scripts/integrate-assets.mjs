/**
 * Copies client-provided assets from /images into /public with stable paths.
 * Re-run after adding new files to images/Item images/.
 */
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SRC = join(ROOT, "images");
const ITEMS = join(SRC, "Item images");
const PUB = join(ROOT, "public");

function copy(src, dest) {
  mkdirSync(join(dest, ".."), { recursive: true });
  copyFileSync(src, dest);
  console.log(`  ${dest.replace(ROOT, "").replace(/\\/g, "/")}`);
}

// Brand + editorial + favicon
copy(join(SRC, "game7 horizontal lockup white.png"), join(PUB, "brand/logo-horizontal.png"));
copy(join(SRC, "Game7stack_2024_White.png"), join(PUB, "brand/logo-primary.png"));
copy(join(SRC, "favicon.jpg"), join(PUB, "brand/icon-mark.jpg"));
copy(join(SRC, "favicon.jpg"), join(ROOT, "src", "app", "icon.jpg"));
copy(join(SRC, "Hero Image.jpg"), join(PUB, "editorial/hero.jpg"));

/** @type {Record<string, { hero: string; gallery: string[] }>} */
const PRODUCT_MAP = {
  "track-jacket": {
    hero: "Track Jacket a.jpg",
    gallery: ["track jacket b.jpg", "track jacket blue.jpg", "track jacket cc.jpg"],
  },
  "everyday-jacket": {
    hero: "Everday Jacket.jpg",
    gallery: ["Everyday Jacket c.jpg"],
  },
  "training-jacket": {
    hero: "Versatile Training Jacket Black.jpg",
    gallery: [
      "Versatile Training Jacket Black - Back.jpg",
      "Versatile Training Jacket Grey.jpg",
      "Versatile Training Jacket Grey back.jpg",
    ],
  },
  "black-vest": {
    hero: "black vest a.jpg",
    gallery: ["black vest b.jpg"],
  },
  "varsity-bomber": {
    hero: "Varsity Knit Bomber a.jpg",
    gallery: ["Varsity Knit Bomber b.jpg"],
  },
  "letterman-jacket": {
    hero: "Letterman Jacket (1).jpg",
    gallery: ["Letterman Jacket (2).jpg"],
  },
  "red-button-up-jacket": {
    hero: "Red Button Up Jacket (1).jpg",
    gallery: ["Red Button Up Jacket (2).jpg"],
  },
  "denim-jacket": {
    hero: "Sporty Denim Jacket a.jpg",
    gallery: ["Sporty Denim Jacket b.jpg"],
  },
  "quarter-zip": {
    hero: "quarter zip.jpg",
    gallery: ["quarterzip c.jpg", "quarterzip red.jpg", "quarterzip c red.jpg"],
  },
  "colour-block-quarter-zip": {
    hero: "color blockquarter zip blue front (1).jpg",
    gallery: [
      "color block quarter zip 1bb neutral (1).jpg",
      "color block quarter zip 1bb neutral (2).jpg",
      "color blockquarter zip blue back(2).jpg",
    ],
  },
  "oversized-hoodie": {
    hero: "oversized hoodie a grey (1).jpg",
    gallery: [
      "oversized hoodie a grey (2).jpg",
      "oversized hoodie b black (1).jpg",
      "oversized hoodie b black (2).jpg",
    ],
  },
  "relaxed-fit-hoodie": {
    hero: "Relaxed Hoodie b navy (1).jpg",
    gallery: [
      "Relaxed Hoodie b navy (2).jpg",
      "Relaxed Hoodie b black (1).jpg",
      "Relaxed Hoodie b black (2).jpg",
    ],
  },
  "long-sleeve-polo": {
    hero: "Long Sleeve Polo White a.jpg",
    gallery: [
      "Long Sleeve Polo White b.jpg",
      "long sleeve polo Navy Blue a.jpg",
      "Long Sleeve Polo Navy Blue b.jpg",
    ],
  },
  "stripe-polo": {
    hero: "Mens Polo - navy.jpg",
    gallery: [
      "Mens Polo Navy - back.jpg",
      "Mens Polo - black.jpg",
      "Mens Polo black - back.jpg",
    ],
  },
  "long-sleeve-tee": {
    hero: "long sleeve shirt Black a.jpg",
    gallery: [
      "long sleeve shirt Black b.jpg",
      "Long Sleeve Shirt Blue a.jpg",
      "long sleeve shirt Blue b.jpg",
    ],
  },
  "classic-tee": {
    hero: "Classic Tee a.jpg",
    gallery: ["classic tee b.jpg", "classic tee White a.jpg", "classic tee White b.jpg"],
  },
  "classic-cap": {
    hero: "Baseball cap navy.jpg",
    gallery: [
      "Baseball cap red.jpg",
      "Baseball Cap Inside navy.jpg",
      "Baseball Cap Inside red.jpg",
    ],
  },
  "off-duty-snapback": {
    hero: "off duty snapback a.jpg",
    gallery: ["off duty snapback b.jpg", "off duty snapback underside.jpg"],
  },
  "off-duty-dad-hat": {
    hero: "Black hat.jpg",
    gallery: ["Black Hat Back.jpg", "White hat.jpg", "White hat back.jpg"],
  },
};

console.log("Brand + editorial:");
for (const [slug, { hero, gallery }] of Object.entries(PRODUCT_MAP)) {
  const dir = join(PUB, "products", slug);
  mkdirSync(dir, { recursive: true });
  const heroSrc = join(ITEMS, hero);
  if (!existsSync(heroSrc)) {
    console.warn(`  SKIP ${slug}: missing ${hero}`);
    continue;
  }
  copy(heroSrc, join(dir, "hero.jpg"));
  gallery.forEach((file, i) => {
    const gSrc = join(ITEMS, file);
    if (existsSync(gSrc)) {
      copy(gSrc, join(dir, `gallery-${i + 1}.jpg`));
    } else {
      console.warn(`  SKIP ${slug}/gallery-${i + 1}: missing ${file}`);
    }
  });
}

console.log("\nDone.");
