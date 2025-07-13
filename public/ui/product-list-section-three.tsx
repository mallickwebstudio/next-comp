import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const productData = [
  {
    productHref: "#",
    productImageSrc: "/image.svg",
    name: "Poduct name",
    description: "Product Description",
    price: "$99"
  },
  {
    productHref: "#",
    productImageSrc: "/image.svg",
    name: "Poduct name",
    description: "Product Description",
    price: "$99"
  },
  {
    productHref: "#",
    productImageSrc: "/image.svg",
    name: "Poduct name",
    description: "Product Description",
    price: "$99"
  },
  {
    productHref: "#",
    productImageSrc: "/image.svg",
    name: "Poduct name",
    description: "Product Description",
    price: "$99"
  },
  {
    productHref: "#",
    productImageSrc: "/image.svg",
    name: "Poduct name",
    description: "Product Description",
    price: "$99"
  },
  {
    productHref: "#",
    productImageSrc: "/image.svg",
    name: "Poduct name",
    description: "Product Description",
    price: "$99"
  },
  {
    productHref: "#",
    productImageSrc: "/image.svg",
    name: "Poduct name",
    description: "Product Description",
    price: "$99"
  },
  {
    productHref: "#",
    productImageSrc: "/image.svg",
    name: "Poduct name",
    description: "Product Description",
    price: "$99"
  },
];

export default function ProductListSectionThree() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="blog-section"
      aria-label="Blog section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <div className="flex gap-4 justify-between items-end">
          <header>
            <Badge variant="secondary">Tagline</Badge>
            <h2 className="mt-4 md:max-w-2xl text-4xl font-bold tracking-tight text-balance">
              Products
            </h2>
            <p className="mt-4 md:max-w-2xl text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </header>

          <div className="hidden md:block">
            <Link className={buttonVariants({ variant: "outline" })} href="#">View All</Link>
          </div>
        </div>

        {/* Product Cards */}
        <Carousel className="mt-12 w-full">
          <CarouselContent>
            {productData.map((item, index) => (
              <CarouselItem
                className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                key={item.name + index + "ProductListSectionThree"}
                itemScope
                itemType="https://schema.org/Product"
              >
                <article className="p-2">
                  <figure itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                    <Image
                      className="w-full aspect-square object-cover select-none pointer-events-none"
                      src={item.productImageSrc}
                      width={160}
                      height={160}
                      alt={item.name}
                    />
                    <meta itemProp="url" content={item.productImageSrc} />
                  </figure>

                  <header className="mt-2 flex flex-col items-center justify-center text-center">
                    <h3 className="mt-2 text-lg font-medium hover:underline line-clamp-2" itemProp="name">
                      <Link href={item.productHref}>
                        <span itemProp="url">{item.name}</span>
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3" itemProp="description">
                      {item.description}
                    </p>
                    <div
                      className="font-bold"
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      <span itemProp="priceCurrency" content="USD" />
                      <span itemProp="price">{item.price}</span>
                      <meta itemProp="availability" content="https://schema.org/InStock" />
                    </div>
                    <Button className="mt-2 w-full cursor-pointer" variant="outline" size="sm">
                      Add to cart
                    </Button>
                  </header>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" aria-label="previous slide" />
          <CarouselNext className="-right-4" aria-label="Next slide" />
        </Carousel>

        <div className="mt-8 md:hidden flex justify-center">
          <div className="block">
            <Link className={buttonVariants({ variant: "outline" })} href="#">View All</Link>
          </div>
        </div>
      </div>
    </section >
  );
}
