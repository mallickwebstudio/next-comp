import { chromium } from "playwright";
import { data } from "@/lib/database";
import fs from "fs";
import path from "path";
import kebabCase from "lodash.kebabcase";

const args = process.argv.slice(2);
const blockSlug = args.find((arg) => arg.startsWith("block="))?.split("=")[1];
const categories = args.filter((arg) => !arg.startsWith("block=") && arg !== "dark");
const darkMode = args.includes("dark");
const theme = darkMode ? "dark" : undefined;


(async () => {
  if (categories.length === 0 && !blockSlug) {
    console.error("Please specify at least one category slug (e.g., navbar hero feature) or a block slug (e.g., block=hero-one)");
    process.exit(1);
  }

  const blocks = data.flatMap(section =>
    section.category.flatMap(category =>
      category.block
        .filter(block => {
          const categoryMatch = categories.length === 0 || categories.includes(category.slug);
          const blockMatch = !blockSlug || block.slug === blockSlug;
          return categoryMatch && blockMatch;
        })
        .map(block => ({
          ...block,
          categorySlug: category.slug,
        }))
    )
  );


  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const block of blocks) {
    const url = `http://localhost:3000/preview/frame?block=${block.slug}${theme ? `&theme=${theme}` : ""}`;

    const outputPath = path.resolve(
      __dirname,
      `../../public/images/ui/${block.categorySlug}`
    );
    const fileName = `${darkMode ? "dark-" : ""}${kebabCase(block.slug)}.png`;
    const fullOutputPath = path.join(outputPath, fileName);

    fs.mkdirSync(outputPath, { recursive: true });

    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(800); // wait for animations/fonts if any

    const blockContainer = await page.$("#preview-wrapper");

    if (blockContainer) {
      await blockContainer.screenshot({ path: fullOutputPath });
      console.log(`✅ Cropped screenshot saved: ${fileName}`);
    } else {
      console.warn(`⚠️ Could not find block container for ${block.slug}`);
    }
  }

  await browser.close();
})();
