"use client"
import { Star, StarHalf } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const imagesData = [
  "/image-1.svg",
  "/image-2.svg",
  "/image-3.svg",
  "/image-4.svg",
  "/image-5.svg",
  "/image-6.svg",
  "/image-7.svg",
  "/image-8.svg",
];

export default function ProductHeaderOne() {
  const [activeImage, setActiveImage] = useState(imagesData[0]);

  const product = {
    name: "Product name",
    price: 55,
    rating: 4.5,
    reviewCount: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    features:
      "Advanced processing capabilities and an intuitive user interface.",
  };

  return (
    <section
      className="relative bg-background overflow-hidden"
      id="product-header"
      aria-label="Product header section"
    >
      {/* Structured data for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: product.name,
          image: imagesData.map((img) => `https://yourdomain.com${img}`),
          description: product.description,
          brand: {
            "@type": "Brand",
            name: "Your Brand",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: product.price,
            availability: "https://schema.org/InStock",
            url: "https://yourdomain.com/product",
          },
        })}
      </script>

      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16 grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-4 md:gap-12">
        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
          {/* Main Image */}
          <figure className="w-full md:order-1">
            <Image
              className="w-full aspect-square object-contain select-none pointer-events-none overflow-hidden"
              src={activeImage}
              width={600}
              height={600}
              alt={`Preview of ${product.name}`}
            />
          </figure>

          {/* Thumbnail Images */}
          <div className="pb-2 md:pb-0 md:pr-2 md:max-h-[40rem] flex md:flex-col items-center gap-2 overflow-scroll md:order-0" aria-label="Product image thumbnails">
            {imagesData.map((item, index) => (
              <button
                type="button"
                className="h-20 md:h-auto md:w-40 aspect-video cursor-pointer"
                key={item + index + "ProductHeaderOne"}
                onClick={() => setActiveImage(item)}
                aria-label={`View image ${index + 1} of ${product.name}`}
              >
                <Image
                  className="w-full aspect-video object-cover select-none pointer-events-none"
                  src={item}
                  width={200}
                  height={200}
                  alt={`Thumbnail ${index + 1} of ${product.name}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <article itemScope itemType="https://schema.org/Product">
          <h1 className="text-3xl font-medium tracking-tight text-balance" itemProp="name">
            {product.name}
          </h1>

          <div className="mt-4 text-xl font-medium" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="priceCurrency" content="USD">$</span>
            <span itemProp="price">{product.price}</span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-0.5" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              <Star className="size-3 fill-foreground" />
              <Star className="size-3 fill-foreground" />
              <Star className="size-3 fill-foreground" />
              <Star className="size-3 fill-foreground" />
              <StarHalf className="size-3 fill-foreground" />
              <meta itemProp="ratingValue" content={product.rating.toString()} />
              <meta itemProp="reviewCount" content={product.reviewCount.toString()} />
            </div>
            <div className="text-sm text-muted-foreground">
              ({product.rating} stars) • {product.reviewCount} reviews
            </div>
          </div>

          <p className="mt-4 text-muted-foreground" itemProp="description">
            {product.description}
          </p>

          <div className="mt-4">
            <label className="mb-1 block">Variant</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Variant</SelectLabel>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="yellow">Yellow</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4">
            <label className="mb-1 block">Quantity</label>
            <Input className="w-20" type="number" min={1} defaultValue={1} />
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <Button className="cursor-pointer">Add to cart</Button>
            <Button className="cursor-pointer" variant="outline">Buy Now</Button>
          </div>

          <div className="mt-4 text-center text-xs">Free shipping over $50</div>

          {/* Product FAQs */}
          <Accordion
            className="mt-4 w-full border-y"
            type="multiple"
            defaultValue={["item-1"]}
          >
             <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-muted-foreground text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
                <p>
                  Key features include {product.features}
                </p>
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-2">
              <AccordionTrigger className="cursor-pointer">Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-muted-foreground text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express shipping
                  ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track your
                  shipment in real-time through our dedicated tracking portal.
                </p>
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-3">
              <AccordionTrigger className="cursor-pointer">Return Policy</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-muted-foreground text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day return
                  policy. If you&apos;re not completely satisfied, simply return the
                  item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping and
                  full refunds processed within 48 hours of receiving the returned
                  item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </div>
    </section>
  );
}
