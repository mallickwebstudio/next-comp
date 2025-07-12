"use client";

import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import CopyButton from "./action/copy-button";
import DownloadButton from "./action/download-button";
import { getFileBySlug } from "@/lib/get-file-by-slug";
import { BadgeInfo, Loader } from "lucide-react";

export default function PanelCode({
  fileSlug
}: {
  fileSlug: string;
}) {
  const [fileContent, setFileContent] = useState<string | null | "loading">("loading");
  const [renderedCode, setRenderedCode] = useState<string>("");

  useEffect(() => {
    async function fetchAndProcess() {
      try {
        const content = await getFileBySlug(fileSlug);
        setFileContent(content);

        const codeWithFences = `\`\`\`tsx\n${content}\n\`\`\``;

        const processor = unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypePrettyCode, {
            theme: "tokyo-night",
            keepBackground: false,
          })
          .use(rehypeStringify);

        const result = await processor.process(codeWithFences);
        setRenderedCode(result.toString());
      } catch (err) {
        console.error("Error loading code file:", err);
        setFileContent(null);
      }
    }

    fetchAndProcess();
  });

  if (fileContent === "loading") {
    return (
      <div className="size-full flex justify-center items-center">
        <Loader className="animate-spin size-5" />
      </div>
    );
  }

  if (fileContent === null) {
    return (
      <div className="size-full flex flex-col gap-2 justify-center items-center text-yellow-500">
        <BadgeInfo className="size-5" />
        Something Went Wrong
      </div>
    );
  }

  return (
    <div className="relative size-full">
      <div className="absolute flex gap-2 top-3 right-3 z-10">
        <CopyButton text={fileContent} />
        <DownloadButton text={fileContent} fileName={fileSlug} />
      </div>
      <div className="size-full overflow-auto">
        <pre className="p-4 overflow-auto" dangerouslySetInnerHTML={{ __html: renderedCode }} />
      </div>
    </div>
  );
}
