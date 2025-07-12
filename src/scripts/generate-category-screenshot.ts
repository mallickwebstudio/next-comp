import { chromium } from "playwright";
import { data } from "@/lib/database";
import fs from "fs";
import path from "path";
import kebabCase from "lodash.kebabcase";

const args = process.argv.slice(2);
const blockSlug = args.find((arg) => arg.startsWith("block="))?.split("=")[1];
const darkMode = args.includes("dark");
const theme = darkMode ? "dark" : undefined;

// Extract category slugs (ignoring block= and dark)
const categoryArgs = args.filter(
  (arg) => !arg.startsWith("block=") && arg !== "dark",
);

// 🧠 If no categories are passed and no block is passed, default to ALL categories
const allCategoriesSelected = categoryArgs.length === 0 && !blockSlug;

(async () => {
  const blocks = data.flatMap((category) =>
    category.sections.flatMap((section) =>
      section.blocks
        .filter((block) => {
          const categoryMatch =
            allCategoriesSelected || categoryArgs.includes(section.slug);
          const blockMatch = !blockSlug || block.slug === blockSlug;
          return categoryMatch && blockMatch;
        })
        .map((block) => ({
          ...block,
          sectionSlug: section.slug,
        })),
    ),
  );

  if (blocks.length === 0) {
    console.error("⚠️ No matching blocks found. Check your arguments.");
    process.exit(1);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const block of blocks) {
    const url = `http://localhost:3000/preview/frame?block=${block.slug}${
      theme ? `&theme=${theme}` : ""
    }`;

    const outputPath = path.resolve(
      __dirname,
      `../../public/images/ui/${block.sectionSlug}`,
    );
    const fileName = `${darkMode ? "dark-" : ""}${kebabCase(block.slug)}.png`;
    const fullOutputPath = path.join(outputPath, fileName);

    fs.mkdirSync(outputPath, { recursive: true });

    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);

    const blockContainer = await page.$("#preview-wrapper");

    if (blockContainer) {
      await blockContainer.screenshot({ path: fullOutputPath });
      console.log(`✅ Screenshot saved: ${fileName}`);
    } else {
      console.warn(`⚠️ Missing container for: ${block.slug}`);
    }
  }

  await browser.close();
})();
