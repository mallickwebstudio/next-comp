import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import Image from "next/image";

const data = [
  {
    label: "Custom Domain",
    feature: {
      starter: true,
      pro: true,
      business: true,
    },
  },
  {
    label: "SEO Tools",
    feature: {
      starter: false,
      pro: true,
      business: true,
    },
  },
  {
    label: "Team Collaboration",
    feature: {
      starter: false,
      pro: true,
      business: true,
    },
  },
  {
    label: "Analytics",
    feature: {
      starter: false,
      pro: true,
      business: true,
    },
  },
  {
    label: "Unlimited Projects",
    feature: {
      starter: false,
      pro: false,
      business: true,
    },
  },
  {
    label: "Priority Support",
    feature: {
      starter: false,
      pro: true,
      business: true,
    },
  },
  {
    label: "Advanced Security",
    feature: {
      starter: false,
      pro: true,
      business: true,
    },
  },
  {
    label: "Email Reports",
    feature: {
      starter: false,
      pro: true,
      business: true,
    },
  },
  {
    label: "Custom Branding",
    feature: {
      starter: false,
      pro: true,
      business: true,
    },
  },
  {
    label: "API Access",
    feature: {
      starter: false,
      pro: true,
      business: true,
    },
  },
];


export default function ComparisonTwo() {
  return (
    <section className="relative bg-background" id="contact" aria-label="Contact section">
      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="md:mx-auto md:max-w-2xl text-center flex flex-col items-center justify-center">
          <Badge variant="secondary">Tagline</Badge>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance">
            Short heading goes here
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        <div className="mt-12 mx-auto max-w-3xl">
          {/* Static Header */}
          <div className="sticky top-0 bg-background grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="hidden md:flex p-4 font-medium items-end">
              Features
            </div>
            <div className="p-4 font-medium flex flex-col justify-center items-center text-center">
              <Image
                className='w-full aspect-square object-contain select-none pointer-events-none'
                src='/image.svg'
                width={200}
                height={200}
                alt='Image Description'
              />
              <span className="mt-1">Starter</span>
              <div className="text-xs text-muted-foreground">$19/mo</div>
            </div>
            <div className="p-4 font-medium flex flex-col justify-center items-center text-center">
              <Image
                className='w-full aspect-square object-contain select-none pointer-events-none'
                src='/image.svg'
                width={200}
                height={200}
                alt='Image Description'
              />
              <span className="mt-1">Pro</span>
              <div className="text-xs text-muted-foreground">$19/mo</div>
            </div>
            <div className="p-4 font-medium flex flex-col justify-center items-center text-center">
              <Image
                className='w-full aspect-square object-contain select-none pointer-events-none'
                src='/image.svg'
                width={200}
                height={200}
                alt='Image Description'
              />
              <span className="mt-1">Business</span>
              <div className="text-xs text-muted-foreground">$49/mo</div>
            </div>
          </div>

          {/* Feature Rows */}
          {data.map((item, index) => (
            <div
              className={cn("grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr] bg-secondary/30", index % 2 && "bg-background")}
              key={item.label + index + "ComparisonTwo"}
            >
              <div className="p-4 col-span-3 md:col-span-1">
                {item.label}
              </div>
              <div className="p-4 flex justify-center items-center text-center">
                {item.feature.starter ? <Check className="size-5" /> : <X className="size-5" />}
              </div>
              <div className="p-4 flex justify-center items-center text-center">
                {item.feature.pro ? <Check className="size-5" /> : <X className="size-5" />}
              </div>
              <div className="p-4 flex justify-center items-center text-center">
                {item.feature.business ? <Check className="size-5" /> : <X className="size-5" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
