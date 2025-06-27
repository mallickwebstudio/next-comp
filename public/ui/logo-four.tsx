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
  }
]

export default function LogoFour() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="logo"
      aria-label="Logo section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        <h2 className="text-xl font-bold text-center">
          Used by the world&apos;s leading companies
        </h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {logoList.map((item, index) => (
            <Link className="block py-1.5 h-12 w-fit" href={item.href} key={item.src + index + "LogoFour"}>
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
