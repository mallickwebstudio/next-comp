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
        <div className="relative size-full flex justify-center items-center">
            <div className="relative size-full z-0 bg-background select-none touch-none pointer-events-none">
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
