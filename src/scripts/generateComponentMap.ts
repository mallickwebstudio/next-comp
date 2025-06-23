import fs from "fs";
import path from "path";

const COMPONENT_DIR = path.join(process.cwd(), "src", "ui", "components");
const OUTPUT_FILE = path.join(process.cwd(), "src", "lib", "componentMap.ts");

function walk(dir: string): string[] {
  return fs.readdirSync(dir).flatMap((file) => {
    const fullPath = path.join(dir, file);
    return fs.statSync(fullPath).isDirectory()
      ? walk(fullPath)
      : /\.(jsx|tsx)$/.test(fullPath)
        ? [fullPath]
        : [];
  });
}

const files = walk(COMPONENT_DIR);

// Generate map entries
const mapEntries = files.map((file) => {
  const relativePathFromSrc = path.relative(path.join(process.cwd(), "src"), file);
  const noExtension = relativePathFromSrc.replace(/\.(tsx|jsx)$/, "");
  const importPath = "@/".concat(noExtension.replace(/\\/g, "/")); // Normalize Windows paths
  return {
    key: importPath,
    value: `() => import("${importPath}")`,
  };
});

// Sort alphabetically
mapEntries.sort((a, b) => a.key.localeCompare(b.key));

// Build the output string
const mapObject = mapEntries.map((entry) => `  "${entry.key}": ${entry.value}`).join(",\n");

const keyUnion = mapEntries.map((entry) => `  | "${entry.key}"`).join("\n");

const output = `// ⚠️ AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Run \`npm run generate:components\` to regenerate

export const componentMap = {
${mapObject}
} as const;

export type ComponentPath =
${keyUnion};
`;

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, output);

console.log("✅ componentMap.ts generated at:", OUTPUT_FILE);
