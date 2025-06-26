import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const logoList = [
  {
    href: "#",
    src: "/logo.svg",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/logo.svg",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/logo.svg",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/logo.svg",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/logo.svg",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/logo.svg",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/logo.svg",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/logo.svg",
    alt: "Logo",
  }
]
export default function LogoThree() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="logo"
      aria-label="Logo section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 grid grid-cols-1 md:grid-cols-[1fr_0.6fr] items-center gap-12">
        {/* Text Content */}
        <div className="w-full md:text-left">
          <header>
            <h1 className="text-4xl font-bold tracking-tight text-balance">
              Medium length hero heading goes here
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </header>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="cursor-pointer" variant="outline" size="lg">
              Get started
            </Button>
            <Button className="cursor-pointer" variant="ghost" size="lg">
              Learn more <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:gap-6 place-items-center">
          {logoList.map((item, index) => (
            <Link className="block py-1.5 h-12" href={item.href} key={item.src + index + "LogoThree"}>
              <Image
                className="h-full w-fit object-contain"
                src={item.src}
                width={20}
                height={60}
                alt={item.alt}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
