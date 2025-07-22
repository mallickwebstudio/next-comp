import { Button } from "@/components/ui/button";
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


export default function ProductCard() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="blog-section"
      aria-label="Blog section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productData.map((item, index) => (
            <article
              key={item.name + index + "ProductCardTwo"}
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
          ))}
        </div>
      </div>
    </section >
  );
}
