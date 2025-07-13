import { Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const includesData = [
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
]

const informationsData = [
  {
    title: "Details One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
  },
  {
    title: "Details Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
  },
  {
    title: "Details Three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
  },
  {
    title: "Details Four",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
  },
  {
    title: "Details Five",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
  },
  {
    title: "Details Six",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
  },
]


export default function ProductHeaderFour() {
  const product = {
    name: "Digital product name",
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
      className="relative bg-background"
      id="product-header"
      aria-label="Product header section"
    >
      {/* Structured data for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: product.name,
          image: "https://yourdomain.com/image.svg",
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

      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16">
        {/* Product Info */}
        <article
          className="grid md:grid-cols-[1fr_0.6fr] md:grid-rows-[auto_1fr] gap-4 md:gap-x-12"
          itemScope
          itemType="https://schema.org/Product"
        >
          {/* Product Image, Price & Rating */}
          <div className="md:sticky md:top-8 md:h-fit md:col-start-2 md:row-start-1 md:row-span-2">
            {/* Main Image */}
            <figure className="w-full">
              <Image
                className="w-full aspect-video object-cover select-none pointer-events-none overflow-hidden"
                src="/image.svg"
                width={600}
                height={600}
                alt={`Preview of ${product.name}`}
              />
            </figure>

            {/* Pricing & Rating */}
            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="text-xl font-medium" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <span itemProp="priceCurrency" content="USD">$</span>
                <span itemProp="price">{product.price}</span>
              </div>

              <div className="flex flex-col items-end text-right">
                <div className="flex items-center gap-0.5" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                  <Star className="size-3.5 fill-foreground" />
                  <Star className="size-3.5 fill-foreground" />
                  <Star className="size-3.5 fill-foreground" />
                  <Star className="size-3.5 fill-foreground" />
                  <StarHalf className="size-3.5 fill-foreground" />
                  <meta itemProp="ratingValue" content={product.rating.toString()} />
                  <meta itemProp="reviewCount" content={product.reviewCount.toString()} />
                </div>

                <div className="mt-1 text-sm text-muted-foreground">
                  ({product.rating} stars) • {product.reviewCount} reviews
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div>
              <div className="mt-4 flex flex-col gap-4">
                <Button className="cursor-pointer">Add to cart</Button>
                <Button className="cursor-pointer" variant="outline">Buy Now</Button>
              </div>

              <div className="mt-4 text-center text-xs">30-Day Money-Back Guarantee</div>
            </div>
          </div>

          {/* Product Name & Description */}
          <div className="md:col-start-1 md:row-start-1">
            <h1 className="text-3xl font-medium tracking-tight text-balance" itemProp="name">
              {product.name}
            </h1>

            <p className="mt-4 text-muted-foreground" itemProp="description">
              {product.description}
            </p>
          </div>

          {/* Product Details */}
          <div className="md:col-start-1 md:row-start-2">
            {/* Includes */}
            <div className="p-4 border rounded-md">
              <h2 className="text-lg font-medium">Includes:</h2>
              <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
                {includesData.map((item, index) => (
                  <li key={item + index + "ProductHeaderFour"}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* More Information */}
            <div>
              <h2 className="mt-4 text-lg font-medium">More Information:</h2>
              <Accordion
                className="mt-4 w-full border-y"
                type="multiple"
                defaultValue={[informationsData[0].title]}
              >
                {informationsData.map((item, index) => (
                  <AccordionItem
                    value={item.title}
                    key={item.title + index + "ProductHeaderFour"}
                  >
                    <AccordionTrigger className="cursor-pointer">{item.title}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-muted-foreground text-balance">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
