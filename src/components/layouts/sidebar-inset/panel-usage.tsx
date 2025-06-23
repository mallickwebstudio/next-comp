import { existsSync } from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import path from "path";

export default async function PanelUsage({
    title,
    filePath,
    fileName,
}: {
    title: string;
    filePath: string;
    fileName: string;
}) {
    const resolvedPath = path.join(process.cwd(), filePath);

    if (!existsSync(resolvedPath)) {
        return <div className="">Code Not Found</div>;
    }

    const usageContent =
        `import ${title.replaceAll(" ", "")} from "@/animations/${fileName.replaceAll(" ", "")}"; // import animation path

export default function Content({
    return (
        <${title.replaceAll(" ", "")}>
            CONTENT
        </${title.replaceAll(" ", "")}>
    );
}
    `

    // const fileContent = readFileSync(resolvedPath, "utf-8");
    const codeWithFences = `\`\`\`${"tsx"}\n${usageContent}\n\`\`\``;

    const processor = unified().use(remarkParse).use(remarkRehype).use(rehypePrettyCode, { theme: "tokyo-night", }).use(rehypeStringify);

    const code = (await processor.process(codeWithFences)).toString();

    return (
        <div className="relative size-full">
            <div className="size-full overflow-scroll">
                <pre className="prose min-w-full min-h-full block prose-p:rounded-none" dangerouslySetInnerHTML={{ __html: code }} />
            </div>
        </div>
    );
}
