import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactOne() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="contact"
      aria-label="Contact section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="md:mx-auto md:max-w-2xl text-center flex flex-col items-center justify-center">
          <Badge variant="secondary">Tagline</Badge>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance">
            Contact us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        <div className="mt-12 mx-auto md:max-w-sm">
          <form className="space-y-6" action="#">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input className="mt-2" type="text" id="name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input className="mt-2" type="text" id="email" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea className="mt-2" rows={4} id="message" />
            </div>
            <Label className="flex gap-2 items-center text-sm">
              <Checkbox id="accept" />
              I accept the <Link className="underline underline-offset-1 hover:underline-offset-2" href="#">Terms</Link>
            </Label>
            <div className="flex justify-center">
              <Button className="cursor-pointer" type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section >
  );
}
