/**
 * Generates labeled SVG placeholder tiles for every product image slot,
 * editorial blocks, and partner logos so nothing renders broken before real
 * assets land. Re-run with: node scripts/generate-placeholders.mjs
 *
 * Replace any generated file with real photography (same path, .jpg/.png)
 * and update the path in src/data/products.ts.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..", "public");

const PRODUCTS = [
  ["track-jacket", "Track Jacket with Zip Pockets"],
  ["everyday-jacket", "Everyday Jacket"],
  ["training-jacket", "Versatile Training Jacket"],
  ["black-vest", "Black Vest"],
  ["varsity-bomber", "Varsity Knit Bomber"],
  ["letterman-jacket", "Letterman Jacket"],
  ["red-button-up-jacket", "Red Button-Up Jacket"],
  ["denim-jacket", "Denim Jacket"],
  ["quarter-zip", "Quarter Zip"],
  ["colour-block-quarter-zip", "Colour Block Quarter Zip"],
  ["oversized-hoodie", "Oversized Hoodie"],
  ["relaxed-fit-hoodie", "Relaxed Fit Hoodie"],
  ["long-sleeve-polo", "Long Sleeve Polo"],
  ["stripe-polo", "Polo with Stripe Detailing"],
  ["long-sleeve-tee", "Long Sleeve Tee"],
  ["classic-tee", "Classic Tee"],
  ["classic-cap", "Classic Cap"],
  ["off-duty-snapback", "Off Duty Snapback"],
  ["off-duty-dad-hat", "Off Duty Dad Hat"],
];

const MONO = "'Courier New', Courier, monospace";

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function wrap(name, max = 16) {
  const words = name.toUpperCase().split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > max && line) {
      lines.push(line);
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

function tile({ w, h, name, label, accent = "#2A2A2A" }) {
  const lines = wrap(name);
  const fs = Math.round(w / 18);
  const cy = h / 2 - ((lines.length - 1) * fs * 1.3) / 2;
  const text = lines
    .map(
      (l, i) =>
        `<text x="${w / 2}" y="${cy + i * fs * 1.3}" text-anchor="middle" font-family="${MONO}" font-size="${fs}" letter-spacing="3" fill="#EAEAEA">${escapeXml(l)}</text>`,
    )
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#0A0A0A"/>
  <rect x="1" y="1" width="${w - 2}" height="${h - 2}" fill="none" stroke="#2A2A2A" stroke-width="2"/>
  <line x1="${w * 0.08}" y1="${h * 0.08}" x2="${w * 0.16}" y2="${h * 0.08}" stroke="${accent}" stroke-width="4"/>
  ${text}
  <text x="${w / 2}" y="${h - h * 0.07}" text-anchor="middle" font-family="${MONO}" font-size="${Math.round(fs * 0.55)}" letter-spacing="4" fill="#6F6F6F">${escapeXml(label.toUpperCase())}</text>
</svg>
`;
}

let count = 0;
function write(path, contents) {
  mkdirSync(join(ROOT, path, ".."), { recursive: true });
  writeFileSync(join(ROOT, path), contents);
  count++;
}

// Product image slots: hero, gallery x3, cobranded x2
for (const [slug, name] of PRODUCTS) {
  const dir = `products/${slug}`;
  mkdirSync(join(ROOT, dir), { recursive: true });
  write(`${dir}/hero.svg`, tile({ w: 1200, h: 1500, name, label: "Image placeholder" }));
  for (let i = 1; i <= 3; i++) {
    write(
      `${dir}/gallery-${i}.svg`,
      tile({ w: 1200, h: 1500, name, label: `Gallery ${i} - placeholder` }),
    );
  }
  for (let i = 1; i <= 2; i++) {
    write(
      `${dir}/cobranded-${i}.svg`,
      tile({
        w: 1200,
        h: 1500,
        name,
        label: `Co-branded example ${i} - placeholder`,
        accent: "#0359F0",
      }),
    );
  }
}

// Editorial / cinematic blocks (dark, heavy overlay applied in components)
const editorial = [
  ["editorial/hero.svg", "Performance Under Pressure", "Hero editorial - placeholder"],
  ["editorial/manifesto.svg", "What Is Your Game 7 Moment?", "Manifesto editorial - placeholder"],
  ["editorial/program.svg", "The Corporate Program", "Program editorial - placeholder"],
  ["editorial/about.svg", "The Brand Story", "About editorial - placeholder"],
  ["editorial/messier.svg", "Mark Messier", "Portrait - placeholder"],
];
for (const [path, name, label] of editorial) {
  write(path, tile({ w: 2400, h: 1350, name, label, accent: "#FFEF00" }));
}

// Partner logo placeholders for the co-branding lockup section
for (let i = 1; i <= 4; i++) {
  write(
    `partners/partner-${i}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80">
  <rect width="240" height="80" fill="none"/>
  <rect x="2" y="2" width="236" height="76" fill="none" stroke="#2A2A2A" stroke-width="2" stroke-dasharray="6 6"/>
  <text x="120" y="46" text-anchor="middle" font-family="${MONO}" font-size="16" letter-spacing="3" fill="#EAEAEA">YOUR LOGO</text>
</svg>
`,
  );
}

console.log(`Generated ${count} placeholder assets.`);
