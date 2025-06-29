import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PortfolioHeaderOne() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="portfolio-header"
      aria-label="Portfolio header section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Text Content */}
        <header>
          <h1 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Project name here
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Badge variant="secondary">Tag One</Badge>
            <Badge variant="secondary">Tag Two</Badge>
            <Badge variant="secondary">Tag Three</Badge>
          </div>
        </header>

        {/* Details */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="font-bold">Client</h2>
            <div>Full Name</div>
          </div>
          <div>
            <h2 className="font-bold">Date</h2>
            <div>March 2023</div>
          </div>
          <div>
            <h2 className="font-bold">Role</h2>
            <div>Role name</div>
          </div>
          <div>
            <h2 className="font-bold">Website</h2>
            <Link className="underline hover:underline-offset-2" href="#">www.website.com</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
