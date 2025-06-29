import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

const jobData = [
  {
    title: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    location: "San Francisco, CA",
    contractType: "Freelancer",
    applyHref: "#"
  },
  {
    title: "Backend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    location: "New York, NY",
    contractType: "Full Time",
    applyHref: "#"
  },
  {
    title: "DevOps Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    location: "Remote",
    contractType: "Part Time",
    applyHref: "#"
  }
];

export default function CareerFour() {
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

        <div className="mt-12 mx-auto md:max-w-2xl space-y-8">
          {jobData.map((item, index) => (
            <div className="p-4 border bg-card rounded-md" key={item.title + index + "CareerFour"}>
              <h4 className="text-xl font-medium">{item.title}</h4>
              <p className="mt-4 text-muted-foreground">{item.description}</p>
              <div className="mt-4 flex flex-col md:flex-row justify-between md:items-end gap-4">
                <div className="flex gap-4 items-center flex-wrap">
                  <div className="flex gap-2 items-center text-sm">
                    <MapPin className="size-4 shrink-0" />
                    {item.location}
                  </div>
                  <div className="flex gap-2 items-center text-sm">
                    <Clock className="size-4 shrink-0" />
                    {item.contractType}
                  </div>
                </div>
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href={item.applyHref}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
