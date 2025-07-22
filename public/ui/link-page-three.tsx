import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FacebookIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";

export default function LinkPageThree() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="contact"
      aria-label="Contact section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        <div className="p-4 md:p-6 mx-auto max-w-sm">
          {/* Text Content */}
          <header className="p-4 md:mx-auto aspect-square bg-[url('/image.svg')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-end gap-4 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight text-balance">
              Name Surname
            </h1>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="mt-6 w-full flex justify-center gap-2">
              <Link className="p-2 rounded-full bg-secondary" href="#">
                <TwitterIcon className="size-5" />
                <span className="sr-only">Twitter Icon</span>
              </Link>
              <Link className="p-2 rounded-full bg-secondary" href="#">
                <LinkedinIcon className="size-5" />
                <span className="sr-only">Linkedin Icon</span>
              </Link>
              <Link className="p-2 rounded-full bg-secondary" href="#">
                <FacebookIcon className="size-5" />
                <span className="sr-only">Facebook Icon</span>
              </Link>
              <Link className="p-2 rounded-full bg-secondary" href="#">
                <YoutubeIcon className="size-5" />
                <span className="sr-only">Facebook Icon</span>
              </Link>
            </div>
          </header>

          <Link className={cn(buttonVariants({ variant: "outline" }), "mt-6 w-full cursor-pointer")} href="#">
            Link One
          </Link>

          <div className="mt-6 space-y-4">
            <div className="text-lg font-bold text-center">Category name</div>
            <Link className={cn(buttonVariants({ variant: "outline" }), "w-full cursor-pointer")} href="#">
              Link Two
            </Link>
            <Link className={cn(buttonVariants({ variant: "outline" }), "w-full cursor-pointer")} href="#">
              Link Three
            </Link>
            <Link className={cn(buttonVariants({ variant: "outline" }), "w-full cursor-pointer")} href="#">
              Link Four
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            <div className="text-lg font-bold text-center">Category name</div>
            <Link className={cn(buttonVariants({ variant: "outline" }), "w-full cursor-pointer")} href="#">
              Link Five
            </Link>
            <Link className={cn(buttonVariants({ variant: "outline" }), "w-full cursor-pointer")} href="#">
              Link Six
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            <div className="text-lg font-bold text-center">Join our newsletter</div>
            <form className="flex flex-col sm:items-center sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}>
              <Input
                className="flex-1 h-10"
                type="email"
                id="newsletter-email"
                placeholder="Your email"
                aria-label="Your email"
                required
              />
              <Button className="cursor-pointer" type="submit" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section >
  );
}
