import fs from "fs";
import path from "path";
import startCase from "lodash.startcase";

// ✳️ Define sort priorities
const categoryOrder = ["section", "ecommerce", "dashboard"];
const sectionFirst = ["navbar", "footer", "hero", "header", "feature"];
const sectionLast = [
  "banner",
  "loaders",
  "timeline",
  "cookie-consent",
  "multi-step-form",
  "long-form-content",
  "link-page",
  "stats-section",
];

const UI_ROOT = path.join(process.cwd(), "src", "ui");
const OUTPUT_FILE = path.join(process.cwd(), "src", "lib", "database.ts");

const map: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
  sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20,
  thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70,
  eighty: 80, ninety: 90, hundred: 100
};

// 📌 Helper to extract number from slug (like navbar-one → 1)
function extractBlockOrder(slug: string): number {
  const match = slug.match(/(\d+)/);
  if (match) return parseInt(match[1]);

  const words = slug.split(/[-_]/); // split by dash or underscore
  let order = 0;
  words.forEach((word) => {
    const val = map[word.toLowerCase()];
    if (val) order += val;
  });

  return order || 999;
}

function getComponentData() {
  const categories = fs
    .readdirSync(UI_ROOT)
    .filter((dir) => fs.statSync(path.join(UI_ROOT, dir)).isDirectory());

  const sortedCategories = [...categories].sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a);
    const bIndex = categoryOrder.indexOf(b);
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const categoryData = sortedCategories.map((categorySlug) => {
    const categoryPath = path.join(UI_ROOT, categorySlug);

    const sections = fs
      .readdirSync(categoryPath)
      .filter((sec) => fs.statSync(path.join(categoryPath, sec)).isDirectory());

    const sortedSections = [...sections].sort((a, b) => {
      if (sectionFirst.includes(a)) return -1;
      if (sectionFirst.includes(b)) return 1;
      if (sectionLast.includes(a)) return 1;
      if (sectionLast.includes(b)) return -1;
      return a.localeCompare(b);
    });

    const sectionData = sortedSections.map((sectionSlug) => {
      const sectionPath = path.join(categoryPath, sectionSlug);
      const files = fs
        .readdirSync(sectionPath)
        .filter((f) => f.endsWith(".tsx"));

      // ✳️ Enhanced sort to handle variants like hero-one-flip
      const blocks = files
        .map((file) => {
          const blockSlug = file.replace(/\.tsx$/, "");
          const name = startCase(blockSlug.replace(/-/g, " "));
          return {
            slug: blockSlug,
            id: blockSlug,
            name,
            thumbnail: `/images/ui/${sectionSlug}/${blockSlug}.png`,
            path: `/src/ui/${categorySlug}/${sectionSlug}/${file}`,
            _order: extractBlockOrder(blockSlug),
            isVariant: /-(flip|slide|alt|animated|variant|v\d+)$/i.test(blockSlug),
          };
        })
        .sort((a, b) => {
          // Same order → base block comes first, then variant
          if (a._order === b._order) {
            if (a.isVariant && !b.isVariant) return 1;
            if (!a.isVariant && b.isVariant) return -1;
            return a.slug.localeCompare(b.slug);
          }
          return a._order - b._order;
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ _order, isVariant, ...rest }) => rest);

      return {
        slug: sectionSlug,
        href: sectionSlug,
        name: startCase(sectionSlug),
        blocks,
      };
    });

    return {
      slug: categorySlug,
      href: categorySlug,
      name: startCase(categorySlug),
      sections: sectionData,
    };
  });

  return categoryData;
}

// 📝 Write the data
const data = getComponentData();

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });

fs.writeFileSync(
  OUTPUT_FILE,
  `// AUTO-GENERATED FILE — DO NOT EDIT\n` +
  `// RUN "npm run generate-database" TO AUTO-GENERATE FILE\n\n` +
  `import { ComponentData } from "@/types";\n\n` +
  `export const data: ComponentData = ${JSON.stringify(data, null, 2)};\n`,
);

console.log(`✅ Component data generated to ${OUTPUT_FILE}`);
