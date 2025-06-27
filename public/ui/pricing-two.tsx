import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Box, Check } from "lucide-react";

const pricingFeatures = [
    "Feature One text goes here.",
    "Feature Two text goes here.",
    "Feature Three text goes here.",
    "Feature Four text goes here.",
    "Feature Five text goes here.",
    "Feature Six text goes here.",
    "Feature Seven text goes here.",
    "Feature Eight text goes here.",
    "Feature Nine text goes here.",
    "Feature Ten text goes here.",
]

const pricingKeyFeatures = [
    {
        title: "Key Feature One",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        icon: <Box className="mt-1 size-6 shrink-0" />
    },
    {
        title: "Key Feature Two",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        icon: <Box className="mt-1 size-6 shrink-0" />
    },
    {
        title: "Key Feature Three",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        icon: <Box className="mt-1 size-6 shrink-0" />
    },
]

export default function PricingTwo() {
    return (
        <section
            className="relative bg-background overflow-hidden"
            id="pricing"
            aria-label="Pricing section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
                {/* Text Content */}
                <header>
                    <Badge variant="secondary">Tagline</Badge>
                    <h1 className="mt-4 md:max-w-2xl text-4xl  font-bold tracking-tight text-balance">
                        Pricing plan
                    </h1>
                    <p className="mt-4 md:max-w-2xl text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </header>

                <div className="mt-12 grid md:grid-cols-2 items-center gap-12">
                    {/* Text Content */}
                    <div className="space-y-6">
                        {pricingKeyFeatures.map((item, index) => (
                            <div className="flex gap-4 items-start" key={item.title + index + "PricingTwo"}>
                                {item.icon}
                                <div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Pricing Card */}
                    <Card className="w-full">
                        <CardHeader className="flex items-end justify-between">
                            <div className="">
                                <div className="font-bold text-xl">Basic plan</div>
                                <div className="mt-4">Lorem ipsum dolor sit amet</div>
                            </div>
                            <div className="mt-4 font-bold">
                                <span className="mt-4 text-4xl">$19</span><span className="text-2xl">/mo</span>
                            </div>
                        </CardHeader>

                        <hr className="my-4" />

                        <CardContent>
                            Includes:
                            <ul className="mt-4 grid grid-cols-2 gap-4">
                                {pricingFeatures.map((item, index) => (
                                    <li className="flex gap-3 items-start" key={index + "PricingTwo"}>
                                        <Check className="mt-1 size-4 shrink-0" strokeWidth={3} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <hr className="my-4" />

                        <CardFooter>
                            <Button className="cursor-pointer w-full">Get Started</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
