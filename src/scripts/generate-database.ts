import fs from "fs";
import path from "path";
import startCase from "lodash.startcase";

// ✳️ Define sort priorities
const sectionOrder = [
  "section",
  "ecommerce",
  "dashboard"
];
const categoryFirst = [
  // Section
  "navbar",
  "footer",
  "hero",
  "header",
  "feature",
];
const categoryLast = [
  // Section
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

// 📌 Helper to extract number from slug (like navbar-one → 1)
function extractBlockOrder(slug: string): number {
  const match = slug.match(/(\d+)/);
  if (match) return parseInt(match[1]);
  const map: Record<string, number> = {
    one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  };
  const wordMatch = slug.match(/(one|two|three|four|five|six|seven|eight|nine|ten)/i);
  return wordMatch ? map[wordMatch[1].toLowerCase()] || 99 : 99;
}

function getComponentData() {
  const sections = fs.readdirSync(UI_ROOT).filter(dir =>
    fs.statSync(path.join(UI_ROOT, dir)).isDirectory()
  );

  const sortedSections = [...sections].sort((a, b) => {
    const aIndex = sectionOrder.indexOf(a);
    const bIndex = sectionOrder.indexOf(b);
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const sectionData = sortedSections.map(sectionSlug => {
    const sectionPath = path.join(UI_ROOT, sectionSlug);

    const categories = fs.readdirSync(sectionPath).filter(cat =>
      fs.statSync(path.join(sectionPath, cat)).isDirectory()
    );

    const sortedCategories = [...categories].sort((a, b) => {
      if (categoryFirst.includes(a)) return -1;
      if (categoryFirst.includes(b)) return 1;
      if (categoryLast.includes(a)) return 1;
      if (categoryLast.includes(b)) return -1;
      return a.localeCompare(b);
    });

    const categoryData = sortedCategories.map(categorySlug => {
      const categoryPath = path.join(sectionPath, categorySlug);
      const files = fs.readdirSync(categoryPath).filter(f => f.endsWith(".tsx"));

      const blocks = files
        .map(file => {
          const blockSlug = file.replace(/\.tsx$/, "");
          const name = startCase(blockSlug.replace(/-/g, " "));
          return {
            slug: blockSlug,
            id: blockSlug,
            name,
            thumbnail: `/images/ui/${categorySlug}/${blockSlug}.png`,
            path: `/src/ui/${sectionSlug}/${categorySlug}/${file}`,
            _order: extractBlockOrder(blockSlug),
          };
        })
        .sort((a, b) => a._order - b._order) // sort by inferred number
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ _order, ...rest }) => rest); // remove internal field

      return {
        slug: categorySlug,
        href: categorySlug,
        name: startCase(categorySlug),
        block: blocks,
      };
    });

    return {
      slug: sectionSlug,
      href: sectionSlug,
      name: startCase(sectionSlug),
      category: categoryData,
    };
  });

  return sectionData;
}

// 📝 Write the data
const data = getComponentData();

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });

fs.writeFileSync(
  OUTPUT_FILE,
  `// AUTO-GENERATED FILE — DO NOT EDIT\n` +
  `// RUN "npm run generate-database" TO AUTO-GENERATED FILE\n\n` +
  `import { ComponentData } from "@/types";\n\n` +
  `export const data: ComponentData = ${JSON.stringify(data, null, 2)};\n`
);

console.log(`✅ Component data generated to ${OUTPUT_FILE}`);
