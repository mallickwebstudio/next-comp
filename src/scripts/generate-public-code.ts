import fs from "fs";
import path from "path";
import { data } from "@/lib/database"; // adjust if your data is in another path
import chalk from "chalk";

// Get command-line args
const args = process.argv.slice(2);
const selectedSections = args; // like: ["navbar", "hero"]

const PUBLIC_DIR = path.resolve("public/ui");

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function copyFileToPublic(filePath: string) {
  const fileName = path.basename(filePath);
  const destPath = path.join(PUBLIC_DIR, fileName);

  ensureDir(PUBLIC_DIR);
  fs.copyFileSync(filePath, destPath);
  console.log(chalk.green("✔"), `Copied ${fileName}`);
}

function shouldIncludeSection(categorySlug: string) {
  if (selectedSections.length === 0) return true;
  return selectedSections.includes(categorySlug);
}

async function main() {
  let copied = 0;

  for (const group of data) {
    for (const section of group.sections) {
      if (!shouldIncludeSection(section.slug)) continue;

      for (const block of section.blocks) {
        const srcPath = path.resolve(
          process.cwd(),
          block.path.replace(/^\/+/, ""),
        );

        if (!fs.existsSync(srcPath)) {
          console.warn(chalk.yellow("⚠"), `File not found: ${srcPath}`);
          continue;
        }

        copyFileToPublic(srcPath);
        copied++;
      }
    }
  }

  if (copied === 0) {
    console.log(chalk.red("No files copied. Check your category slugs."));
  } else {
    console.log(chalk.cyan(`\n✅ Done! ${copied} file(s) copied.`));
  }
}

main().catch((err) => {
  console.error(chalk.red("Error generating public code:"), err);
  process.exit(1);
});
