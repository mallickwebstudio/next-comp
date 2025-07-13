import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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


export default function ProductListSectionOne() {
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productData.map((item, index) => (
            <article
              className="max-w-sm p-2"
              key={item.name + index + "ProductListSectionOne"}
              itemScope
              itemType="https://schema.org/Product"
            >
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

              <header className="mt-2">
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
                  <span itemProp="priceCurrency" content="INR" />
                  <span itemProp="price">{item.price}</span>
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                </div>
              </header>
            </article>
          ))}
        </div>

        <div className="mt-8 md:hidden flex justify-center">
          <div className="block">
            <Link className={buttonVariants({ variant: "outline" })} href="#">View All</Link>
          </div>
        </div>
      </div>
    </section >
  );
}
