import fs from "fs";
import path from "path";

const COMPONENT_DIR = path.join(process.cwd(), "src", "ui");
const OUTPUT_FILE = path.join(process.cwd(), "src", "lib", "component-map.ts");

// Recursively walk directories and return list of .tsx/.jsx files
function walk(dir: string): string[] {
  return fs.readdirSync(dir).flatMap((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) return walk(fullPath);
    return /\.(tsx|jsx)$/.test(fullPath) ? [fullPath] : [];
  });
}

// Generate slug from filename (e.g., "team-two.tsx" => "team-two")
function getSlug(filePath: string): string {
  return path.basename(filePath).replace(/\.(tsx|jsx)$/, "");
}

// Convert absolute file path to alias import path (e.g., "@/ui/section/team/team-two")
function toImportPath(filePath: string): string {
  const relative = path.relative(path.join(process.cwd(), "src"), filePath);
  return "@/".concat(relative.replace(/\.(tsx|jsx)$/, "").replace(/\\/g, "/"));
}

const files = walk(COMPONENT_DIR);

// Build entries
const entries = files.map((file) => {
  const slug = getSlug(file);
  const importPath = toImportPath(file);
  return {
    slug,
    importPath,
  };
});

// Sort by slug alphabetically
entries.sort((a, b) => a.slug.localeCompare(b.slug));

// Generate object content
const mapContent = entries.map(
  ({ slug, importPath }) => `  "${slug}": () => import("${importPath}")`
).join(",\n");

// Generate union type of slugs
const typeUnion = entries.map(({ slug }) => `  | "${slug}"`).join("\n");

// Final output
const output = `// ⚠️ AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Run \`npm run generate:components\` to regenerate

export const componentMap = {
${mapContent}
} as const;

export type ComponentSlug =
${typeUnion};
`;

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, output);

console.log("✅ component-map.ts generated at:", OUTPUT_FILE);
