/**
 * Replaces public/products with the 2026 core lineup from images/Final Image.
 */
import { copyFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { extname, join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SRC = join(ROOT, "images", "Final Image");
const PUB = join(ROOT, "public", "products");
const COBRAND = join(ROOT, "images", "cobranded images", "Track Jacket Mondelez.jpg");

/** @type {Record<string, string[]>} first file is the hero */
const SETS = {
  "classic-tee": [
    "Classic Tee a.jpg",
    "classic tee White b.jpg",
    "classic tee black.jpg",
    "classic tee grey.jpg",
  ],
  "womens-classic-tee": [
    "Womens Classic Tee a.jpg",
    "Womens Classic Tee b.jpg",
    "Womens Classic Tee c black.jpg",
    "Womens Classic Tee c grey.jpg",
  ],
  "long-sleeve-tee": [
    "long sleeve shirt White bb.png",
    "long sleeve shirt Black a.jpg",
    "long sleeve shirt Grey.jpg",
    "Long Sleeve Shirt Blue a.jpg",
  ],
  "womens-long-sleeve-tee": [
    "Womens Long Sleeve Tee white.jpg",
    "Womens Long Sleeve Tee b white.jpg",
    "Womens Long Sleeve Tee c black.jpg",
    "Womens Long Sleeve Tee c grey.jpg",
  ],
  "long-sleeve-polo": [
    "Long Sleeve Polo White a.jpg",
    "Long Sleeve Polo White b.jpg",
    "long sleeve polo Black a.jpg",
    "Long Sleeve Polo heathered grey.jpg",
  ],
  "stripe-polo": [
    "Mens Polo.jpg",
    "mens polo 2 WHITE.jpg",
    "mens polo grey.jpg",
    "mens polo white back.jpg",
  ],
  "oversized-hoodie": [
    "hoodie d update.jpg",
    "hoodie aa.jpg",
    "hoodie d grey.jpg",
    "hoodie b back.png",
  ],
  "relaxed-fit-hoodie": [
    "cp hoodie b white.png",
    "cp hoodie white.jpg",
    "cp hoodie a grey a update.jpg",
    "cp hoodie d black.jpg",
  ],
  "quarter-zip": [
    "quarter zip.jpg",
    "quarterzip bb black.jpg",
    "quarterzip bb grey.jpg",
    "quarter zip bb white back.png",
  ],
  "track-jacket": [
    "Track Jacket a - update.jpg",
    "track jacket b update.jpg",
    "track jacket c black.jpg",
    "track jacket c ice grey.jpg",
  ],
  "training-jacket": [
    "Versatile Training Jacket White.jpg",
    "Versatile Training Jacket Black 2.jpg",
    "Versatile Training Jacket Grey.jpg",
    "Versatile Training Jacket Grey back.jpg",
  ],
  "everyday-jacket": [
    "Everyday Jacket White a.png",
    "Everyday Jacket c white.jpg",
    "Everyday Jacket b.jpg",
    "Everyday Jacket b ice grey.jpg",
  ],
  "off-duty-snapback": [
    "off duty snapback a.jpg",
    "off duty snapback b stacked logo.jpg",
    "off duty snapback underside update.jpg",
  ],
  "classic-cap": [
    "Baseball cap black update.jpg",
    "Baseball cap navy update.jpg",
    "Baseball cap red update.jpg",
    "Baseball Cap back - black.jpg",
    "Baseball Cap Inside black update.jpg",
    "Baseball Cap back navy.jpg",
    "Baseball Cap Inside navy - update.jpg",
    "baseball cap red back .jpg",
    "Baseball Cap Inside red update.jpg",
  ],
  "off-duty-dad-hat": [
    "Black hat.jpg",
    "White hat.jpg",
    "Black Hat Back update.jpg",
    "White hat back update.jpg",
    "Baseball Hat Inside black update.jpg",
    "Baseball Hat Inside white update.jpg",
  ],
  "gym-towel": ["gym towel 3 pack.jpg"],
  "rally-towel": ["Rally Towel.jpg"],
  "shaker-bottle": ["Game 7 Shaker Bottle - Metal - Mockup.jpg"],
  "flip-straw-tumbler": [
    "Game 7 Flip Straw Tumbler with Handle - Black.jpg",
    "Game 7 Flip Straw Tumbler with Handle - White.jpg",
  ],
  "clear-hip-bag": ["Stadium Hip Bag Black.jpg", "Stadium Hip Bag white.jpg"],
  "essentials-backpack": ["Backpack a.jpg"],
  "everything-leather-bag": ["Everything Duffle Bag.jpg"],
  "leather-duffle": ["duffle bag a.jpg"],
  "waterproof-weekender": ["Game 7 Waterproof Weekender Bag - Black - Mockup.jpg"],
};

const used = new Set();
rmSync(PUB, { recursive: true, force: true });

for (const [slug, files] of Object.entries(SETS)) {
  const dir = join(PUB, slug);
  mkdirSync(dir, { recursive: true });
  files.forEach((file, index) => {
    used.add(file);
    const ext = extname(file).toLowerCase();
    const name = index === 0 ? `hero${ext}` : `gallery-${index}${ext}`;
    copyFileSync(join(SRC, file), join(dir, name));
  });
}

mkdirSync(join(PUB, "track-jacket"), { recursive: true });
copyFileSync(COBRAND, join(PUB, "track-jacket", "cobranded-1.jpg"));

const unused = readdirSync(SRC).filter((file) => !used.has(file));
console.log(`products ${Object.keys(SETS).length}`);
if (unused.length) console.log("unused source files:\n" + unused.join("\n"));
