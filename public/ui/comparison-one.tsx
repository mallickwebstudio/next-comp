import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const data = [
    {
        label: "Custom Domain",
        feature: {
            starter: true,
            pro: true,
        },
    },
    {
        label: "SEO Tools",
        feature: {
            starter: false,
            pro: true,
        },
    },
    {
        label: "Team Collaboration",
        feature: {
            starter: false,
            pro: true,
        },
    },
    {
        label: "Analytics",
        feature: {
            starter: false,
            pro: true,
        },
    },
    {
        label: "Unlimited Projects",
        feature: {
            starter: false,
            pro: false,
        },
    },
    {
        label: "Priority Support",
        feature: {
            starter: false,
            pro: true,
        },
    },
    {
        label: "Advanced Security",
        feature: {
            starter: false,
            pro: true,
        },
    },
    {
        label: "Email Reports",
        feature: {
            starter: false,
            pro: true,
        },
    },
    {
        label: "Custom Branding",
        feature: {
            starter: false,
            pro: true,
        },
    },
    {
        label: "API Access",
        feature: {
            starter: false,
            pro: true,
        },
    },
];

export default function ComparisonOne() {
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

                <div className="mt-12 mx-auto max-w-3xl border">
                    {/* Static Header */}
                    <div className="sticky top-0 bg-background grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] border-b divide-x">
                        <div className="hidden md:flex p-4 font-medium items-end">
                            Features
                        </div>
                        <div className="p-4 font-medium flex flex-col justify-center items-center text-center">
                            Starter
                            <div className="text-xs text-muted-foreground">$19/mo</div>
                        </div>
                        <div className="p-4 font-medium flex flex-col justify-center items-center text-center">
                            Pro
                            <div className="text-xs text-muted-foreground">$49/mo</div>
                        </div>
                    </div>

                    {/* Feature Rows */}
                    {data.map((item) => (
                        <div
                            key={item.label}
                            className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] border-b md:divide-x"
                        >
                            <div className="p-4 col-span-2 md:col-span-1">
                                {item.label}
                            </div>
                            <div className="p-4 flex justify-center items-center text-center border-t md:border-t-0">
                                {item.feature.starter ? <Check className="size-5" /> : <X className="size-5" />}
                            </div>
                            <div className="p-4 flex justify-center items-center text-center border-l md:border-l-0 border-t md:border-t-0">
                                {item.feature.pro ? <Check className="size-5" /> : <X className="size-5" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
