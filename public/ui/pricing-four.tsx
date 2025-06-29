"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Box, Check } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
    {
        id: "basic",
        icon: <Box className="size-8" />,
        title: "Basic plan",
        description: "Lorem ipsum dolor sit amet",
        monthlyPrice: 19,
        yearlyPrice: 180,
        features: [
            "Feature One text goes here.",
            "Feature Two text goes here.",
        ],
    },
    {
        id: "business",
        icon: <Box className="size-8" />,
        title: "Business plan",
        description: "Lorem ipsum dolor sit amet",
        monthlyPrice: 29,
        yearlyPrice: 270,
        features: [
            "Feature One text goes here.",
            "Feature Two text goes here.",
            "Feature Three text goes here.",
        ],
    },
    {
        id: "Enterprise",
        icon: <Box className="size-8" />,
        title: "Business plan",
        description: "Lorem ipsum dolor sit amet",
        monthlyPrice: 39,
        yearlyPrice: 370,
        features: [
            "Feature One text goes here.",
            "Feature Two text goes here.",
            "Feature Three text goes here.",
            "Feature Four text goes here.",
            "Feature Five text goes here.",
        ],
    },
];


export default function PricingFour() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

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
                    <h2 className="mt-4 md:max-w-2xl text-4xl  font-bold tracking-tight text-balance">
                        Pricing plan
                    </h2>
                    <p className="mt-4 md:max-w-2xl text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </header>

                <div className="mt-8 flex justify-center">
                    <div className="flex">
                        <Button
                            className="cursor-pointer rounded-e-none"
                            variant={billingPeriod === "monthly" ? "default" : "outline"}
                            onClick={() => setBillingPeriod("monthly")}
                        >
                            Monthly
                        </Button>
                        <Button
                            className="cursor-pointer rounded-l-none"
                            variant={billingPeriod === "yearly" ? "default" : "outline"}
                            onClick={() => setBillingPeriod("yearly")}
                        >
                            Yearly
                        </Button>
                    </div>
                </div>


                {/* Pricing Cards */}
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 items-stretch gap-8">
                    {pricingPlans.map((plan) => (
                        <Card key={plan.id + "PricingFour"} className="w-full">
                            <CardHeader className="flex flex-col gap-6 md:flex-row items-start justify-between">
                                <div>
                                    {plan.icon}
                                    <div className="mt-4 font-bold text-xl">{plan.title}</div>
                                    <div>{plan.description}</div>
                                </div>
                            </CardHeader>

                            <hr className="my-4" />

                            <CardContent>
                                <div className="flex items-end justify-between gap-4">
                                    <div className="font-bold">
                                        <span className="mt-4 text-4xl">
                                            ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                                        </span>
                                        <span className="text-2xl">
                                            /{billingPeriod === "monthly" ? "mo" : "yr"}
                                        </span>
                                    </div>
                                    
                                {billingPeriod === "monthly" && <div className="text-muted-foreground">Yearly ${plan.monthlyPrice*12}</div>}
                                </div>
                                <div className="mt-1">Save 20% yearly</div>
                                <Button className="mt-6 cursor-pointer w-full self-end">Get Started</Button>
                            </CardContent>

                            <hr className="my-4" />

                            <CardContent>
                                Includes:
                                <ul className="mt-4 space-y-4">
                                    {plan.features.map((feature, index) => (
                                        <li key={`${plan.id}-${index}` + "PricingFour"} className="flex gap-3 items-start">
                                            <Check className="mt-1 size-4 shrink-0" strokeWidth={3} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}
