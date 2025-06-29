import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const jobData = [
    {
        department: "Engineering",
        jobs: [
            {
                title: "Frontend Developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                location: "San Francisco, CA",
                applyHref: "#"
            },
            {
                title: "Backend Developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                location: "New York, NY",
                applyHref: "#"
            },
            {
                title: "DevOps Engineer",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                location: "Remote",
                applyHref: "#"
            }
        ]
    },
    {
        department: "Marketing",
        jobs: [
            {
                title: "Content Strategist",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                location: "Austin, TX",
                applyHref: "#"
            },
            {
                title: "SEO Specialist",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                location: "Los Angeles, CA",
                applyHref: "#"
            },
            {
                title: "Social Media Manager",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                location: "Remote",
                applyHref: "#"
            }
        ]
    },
    {
        department: "Human Resources",
        jobs: [
            {
                title: "HR Generalist",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                location: "Chicago, IL",
                applyHref: "#"
            },
            {
                title: "Talent Acquisition Specialist",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                location: "Boston, MA",
                applyHref: "#"
            },
            {
                title: "People Operations Manager",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
                location: "Remote",
                applyHref: "#"
            }
        ]
    }
];

export default function CareerOne() {
    return (
        <section
            className="relative bg-background overflow-hidden"
            id="career"
            aria-label="Career section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
                {/* Text Content */}
                <header className="text-center flex flex-col items-center justify-center">
                    <Badge variant="secondary">Tagline</Badge>
                    <h2 className="mt-4 md:max-w-2xl text-4xl font-bold tracking-tight text-balance">
                        Job Openings
                    </h2>
                    <p className="mt-4 md:max-w-2xl text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                </header>

                <div className="mt-12 flex justify-center">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full md:max-w-2xl border-y"
                        defaultValue={jobData[0].department}
                    >
                        {jobData.map((item, index) => (
                            <AccordionItem value={item.department} key={item.department + index + "CareerOne"}>
                                <AccordionTrigger className="text-2xl">{item.department}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-8 text-balance">
                                    {item.jobs.map((item, index) => (
                                        <div key={item.title + index + "CareerOne"}>
                                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                                <div>
                                                    <h4 className="text-xl font-medium">{item.title}</h4>
                                                    <div>{item.location}</div>
                                                </div>
                                                <Link
                                                    className={buttonVariants({ variant: "outline" })}
                                                    href={item.applyHref}
                                                >
                                                    Apply Now
                                                </Link>
                                            </div>
                                            <p className="mt-4 text-muted-foreground">{item.description}</p>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section >
    );
}
