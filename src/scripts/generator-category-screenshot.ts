import { chromium } from "playwright";
import { data } from "@/lib/database";
import fs from "fs";
import path from "path";
import kebabCase from "lodash.kebabcase";

const args = process.argv.slice(2);
const categories = args.filter((arg) => arg !== "dark");
const darkMode = args.includes("dark");
const theme = darkMode ? "dark" : undefined;


(async () => {
  if (categories.length === 0) {
    console.error("Please specify at least one category slug (e.g., navbar hero feature)");
    process.exit(1);
  }

  const blocks = data.flatMap(section =>
    section.category
      .filter(category => categories.includes(category.slug))
      .flatMap(category =>
        category.block.map(block => ({
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
