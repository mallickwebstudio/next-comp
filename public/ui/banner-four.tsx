"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

export default function BannerFour() {
  const [bannerOpen, setBannerOpen] = useState(true);
  return (
    <div
      className={cn(
        "bg-background",
        bannerOpen ? "block" : "hidden"
      )}
    >
      <div className="p-4 mx-auto container flex justify-between gap-4 items-center">
        <div className="md:text-center md:w-full md:ml-12">
          Medium length banner heading with link goes here
        </div>

        <Button className='cursor-pointer' variant="ghost" size="icon" onClick={() => setBannerOpen(false)}>
          <X />
          <span className="sr-only">Close Cookie Button</span>
        </Button>
      </div>
    </div>
  )
}
