import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingOne() {
    return (
        <section
            className="relative bg-background overflow-hidden"
            id="pricing"
            aria-label="Pricing section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
                {/* Text Content */}
                <header className="text-center flex flex-col items-center justify-center">
                    <Badge variant="secondary">Tagline</Badge>
                    <h1 className="mt-4 md:max-w-2xl text-4xl font-bold tracking-tight text-balance">
                        Pricing plan
                    </h1>
                    <p className="mt-4 md:max-w-2xl text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </header>

                <div className="mt-12 flex justify-center">
                    <Card className="w-full md:max-w-lg">
                        <CardHeader className="flex flex-col items-center">
                            <div className="font-bold text-xl">Basic plan</div>
                            <div className="mt-4 font-bold">
                                <span className="mt-4 text-4xl">$19</span><span className="text-2xl">/mo</span>
                            </div>
                            <div className="mt-4">or $199 yearly</div>
                        </CardHeader>

                        <CardContent>
                            <ul className="mt-6 space-y-3">
                                <li className="flex gap-3 items-start">
                                    <Check className="mt-1 size-4 shrink-0" strokeWidth={3} />
                                    Feature One text goes here.
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Check className="mt-1 size-4 shrink-0" strokeWidth={3} />
                                    Feature Two text goes here.
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Check className="mt-1 size-4 shrink-0" strokeWidth={3} />
                                    Feature Three text goes here.
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Check className="mt-1 size-4 shrink-0" strokeWidth={3} />
                                    Feature Four text goes here.
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Check className="mt-1 size-4 shrink-0" strokeWidth={3} />
                                    Feature Five text goes here.
                                </li>
                            </ul>
                        </CardContent>

                        <CardFooter>
                            <Button className="mt-6 cursor-pointer w-full">Get Started</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
