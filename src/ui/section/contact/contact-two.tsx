import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

export default function ContactTwo() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="contact"
      aria-label="Contact section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="text-center flex flex-col items-center justify-center">
          <Badge variant="secondary">Tagline</Badge>
          <h2 className="mt-4 md:max-w-2xl text-4xl font-bold tracking-tight text-balance">
            Contact us
          </h2>
          <p className="mt-4 md:max-w-2xl text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        <div className="mt-12 mx-auto md:max-w-sm">
          <form className="space-y-6" action="#">
            <div className="flex gap-6 items-center">
              <div>
                <Label htmlFor="firstname">First Name</Label>
                <Input className="mt-2" type="text" id="firstname" />
              </div>
              <div>
                <Label htmlFor="lastname">Last Name</Label>
                <Input className="mt-2" type="text" id="lastname" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input className="mt-2" type="text" id="email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input className="mt-2" type="tel" id="phone" />
              </div>
            </div>
            <div>
              <Label className="mb-2">Choose a topic</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Option One" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select One</SelectLabel>
                    <SelectItem value="Option One">Option One</SelectItem>
                    <SelectItem value="Option Two">Option Two</SelectItem>
                    <SelectItem value="Option Three">Option Three</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Which best describes you?</Label>
              <RadioGroup className="mt-2 gird grid-cols-2" defaultValue="comfortable">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="first" id="first" />
                  <Label htmlFor="first">First choice</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="second" id="second" />
                  <Label htmlFor="second">Second choice</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="third" id="third" />
                  <Label htmlFor="third">Third choice</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="fourth" id="fourth" />
                  <Label htmlFor="fourth">Fourth choice</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="fifth" id="fifth" />
                  <Label htmlFor="fifth">Fifth choice</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="sixth" id="sixth" />
                  <Label htmlFor="sixth">Sixth choice</Label>
                </div>
              </RadioGroup>
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
