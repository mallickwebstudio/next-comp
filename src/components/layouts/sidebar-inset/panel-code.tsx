import path from "path";
import { existsSync, readFileSync } from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import CopyButton from "./action/copy-button";
import DownloadButton from "./action/download-button";

export default async function PanelCode({
    filePath,
    fileName,
    extention
}: {
    filePath: string
    fileName: string
    extention: string
}) {
    const resolvedPath = path.join(process.cwd(), filePath);

    if (!existsSync(resolvedPath)) {
        return (
            <div className="size-full flex justify-center items-center">
                Code Not Found
            </div>
        )
    }

    const fileContent = readFileSync(resolvedPath, "utf-8");

    const codeWithFences = `\`\`\`tsx\n${fileContent}\n\`\`\``;

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            theme: "tokyo-night",
            keepBackground: false,
        })
        .use(rehypeStringify);


    const code = (await processor.process(codeWithFences)).toString();

    return (
        <div className="relative size-full" data-code-preview>
            <div className="absolute flex gap-2 top-3 right-3">
                <CopyButton text={fileContent} />
                <DownloadButton text={fileContent} extention={extention} fileName={fileName} />
            </div>
            <div className="size-full overflow-auto">
                <pre
                    className="p-4 overflow-auto"
                    dangerouslySetInnerHTML={{ __html: code }}
                />
            </div>
        </div>
    );
}
