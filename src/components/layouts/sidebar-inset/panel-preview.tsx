import Image from "next/image"
import { siteConfig } from "@/lib/metadata"

export default function PanelPreview({
    thumbnail,
    name,
}: {
    thumbnail: string;
    name: string;
}) {

    return (
        <div className="relative p-4 pb-0 size-full bg-secondary">
            <div className="relative size-full z-0 bg-card/70 select-none touch-none pointer-events-none">
                <Image
                    className="w-full object-cover"
                    width={480}
                    height={270}
                    src={thumbnail}
                    alt={siteConfig.name + " " + name + " Image"}
                />
            </div>
        </div>
    )
}
