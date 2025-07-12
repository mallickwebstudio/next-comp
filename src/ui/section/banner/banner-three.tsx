"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FacebookIcon, LinkedinIcon, LinkIcon, TwitterIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BannerThree() {
  const [bannerOpen, setBannerOpen] = useState(true);
  return (
    <div
      className={cn(
        "bg-background",
        bannerOpen ? "block" : "hidden"
      )}
    >
      <div className="p-4 mx-auto container flex gap-4 flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4 items-center">
          <Image
            className='size-12 aspect-square object-contain select-none pointer-events-none'
            src='/image.svg'
            width={100}
            height={100}
            alt='Image Description'
          />
          <div>
            <div className="font-medium">
              Medium length banner heading here
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <Link className="p-2 rounded-full bg-secondary" href="#">
              <LinkIcon className="size-5" />
              <span className="sr-only">Link Icon</span>
            </Link>
            <Link className="p-2 rounded-full bg-secondary" href="#">
              <TwitterIcon className="size-5" />
              <span className="sr-only">Twitter Icon</span>
            </Link>
            <Link className="p-2 rounded-full bg-secondary" href="#">
              <LinkedinIcon className="size-5" />
              <span className="sr-only">Linkedin Icon</span>
            </Link>
            <Link className="p-2 rounded-full bg-secondary" href="#">
              <FacebookIcon className="size-5" />
              <span className="sr-only">Facebook Icon</span>
            </Link>
          </div>

          <Button className='absolute top-1 right-1 md:relative md:top-auto md:right-auto cursor-pointer' variant="ghost" size="icon" onClick={() => setBannerOpen(false)}>
            <X />
            <span className="sr-only">Close Cookie Button</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
