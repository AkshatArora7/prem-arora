#!/usr/bin/env node
/**
 * Sync hardcoded experience years across the site.
 *
 * Reads START_YEAR from lib/site.ts and replaces "<n>+ years", "<n>+ Yrs",
 * "<n>+ yrs", "<n> years" literals throughout the app with the current
 * computed value (currentYear - START_YEAR).
 *
 * Run yearly:  npm run sync:years
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const siteSrc = fs.readFileSync(path.join(ROOT, "lib/site.ts"), "utf8");
const startMatch = siteSrc.match(/START_YEAR\s*=\s*(\d{4})/);
if (!startMatch) {
  console.error("Could not find START_YEAR in lib/site.ts");
  process.exit(1);
}
const startYear = Number(startMatch[1]);
const years = new Date().getFullYear() - startYear;
console.log(`START_YEAR=${startYear}  →  years=${years}`);

const targets = [
  "app/about/page.tsx",
  "app/contact/page.tsx",
  "app/guides/page.tsx",
  "app/layout.tsx",
  "app/manifest.ts",
  "app/opengraph-image.tsx",
  "app/twitter-image.tsx",
  "app/page.tsx",
  "app/seo/[slug]/page.tsx",
  "components/Footer.tsx",
  "lib/seo-pages.ts",
];

// Replace any small-int "<n>+ years|Yrs|yrs" and "<n> years" / "<n> year " patterns.
// Skip if number is already current.
const patterns = [
  { re: /\b\d{1,2}\+\s*years\b/g, fmt: () => `${years}+ years` },
  { re: /\b\d{1,2}\+\s*Yrs\b/g,   fmt: () => `${years}+ Yrs` },
  { re: /\b\d{1,2}\+\s*yrs\b/g,   fmt: () => `${years}+ yrs` },
  { re: /\b\d{1,2}\s+years\b/g,   fmt: () => `${years} years` },
];

let totalChanges = 0;
for (const rel of targets) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) { console.warn(`  skip (missing): ${rel}`); continue; }
  const before = fs.readFileSync(file, "utf8");
  let after = before;
  let changes = 0;
  for (const { re, fmt } of patterns) {
    after = after.replace(re, (m) => {
      const replacement = fmt();
      if (m === replacement) return m;
      changes++;
      return replacement;
    });
  }
  if (changes > 0) {
    fs.writeFileSync(file, after);
    console.log(`  ${rel}  (${changes} change${changes === 1 ? "" : "s"})`);
    totalChanges += changes;
  }
}

console.log(`\nDone. ${totalChanges} replacement${totalChanges === 1 ? "" : "s"} total.`);
