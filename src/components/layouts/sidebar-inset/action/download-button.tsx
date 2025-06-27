"use client";

import { Button } from "@/components/ui/button";
import { CheckCheck, Download } from "lucide-react";
import { useState } from "react";

export default function DownloadButton({
    text,
    fileName,
}: {
    text: string;
    fileName: string;
}) {
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = () => {
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${fileName}.tsx`;
        link.click();
        setIsDownloaded(true);
        setTimeout(() => setIsDownloaded(false), 2000);
    };

    return (
        <Button
            className="size-8 cursor-pointer"
            variant="outline"
            size="icon"
            onClick={handleDownload}
        >
            {isDownloaded ? (
                <CheckCheck className="size-3 text-green-500" />
            ) : (
                <Download className="size-3" />
            )}
        </Button>
    );
}
