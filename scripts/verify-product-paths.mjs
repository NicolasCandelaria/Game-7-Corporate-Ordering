import { existsSync, readFileSync } from "node:fs";

const src = readFileSync("src/data/products.ts", "utf8");
const paths = [...src.matchAll(/\/products\/[^"'`]+/g)].map((m) => m[0]);
const missing = paths.filter((p) => !existsSync(`public${p}`));
console.log(`refs ${paths.length} missing ${missing.length}`);
for (const p of missing) console.log(p);
process.exit(missing.length ? 1 : 0);
