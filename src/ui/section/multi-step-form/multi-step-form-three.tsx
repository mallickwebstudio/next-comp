"use client"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const header: Record<number, { heading: string; paragraph: string }> = {
  1: {
    heading: "Let’s start with your name & email",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  2: {
    heading: "What can we help you with?",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  3: {
    heading: "Let's confirm your company info",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  4: {
    heading: "Finally, confirm your availability",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  }
}

export default function MultiStepFormThree() {
  const [step, setStep] = useState<number>(1);
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <section
      className="relative bg-background md:grid md:grid-cols-2"
      id="multi-step-form"
      aria-label="Multi step form section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="mx-auto md:max-w-lg text-center flex flex-col items-center justify-center">
          {/* Step Status */}
          <div className="flex w-full items-center justify-between">
            <Button
              className="cursor-pointer"
              size="sm"
              variant="secondary"
              onClick={() => setStep(1)}
            >
              1
            </Button>
            <hr className="flex-1 w-full" />
            <Button
              className="cursor-pointer"
              size="sm"
              variant={step >= 2 ? "secondary" : "outline"}
              onClick={() => setStep(2)}
            >
              2
            </Button>
            <hr className="flex-1 w-full" />
            <Button
              className="cursor-pointer"
              size="sm"
              variant={step >= 3 ? "secondary" : "outline"}
              onClick={() => setStep(3)}
            >
              3
            </Button>
            <hr className="flex-1 w-full" />
            <Button
              className="cursor-pointer"
              size="sm"
              variant={step >= 4 ? "secondary" : "outline"}
              onClick={() => setStep(4)}
            >
              4
            </Button>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-balance">
            {header[step].heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {header[step].paragraph}
          </p>
        </header>

        <div className="mt-12 mx-auto md:max-w-lg">
          <form className="space-y-6" action="#">
            {step === 1 ? (
              <>
                <div>
                  <Label htmlFor="name">Enter your name</Label>
                  <Input className="mt-2" type="text" id="name" />
                </div>
                <div>
                  <Label htmlFor="email">Enter your email*</Label>
                  <Input className="mt-2" type="text" id="email" />
                </div>
              </>
            ) : step === 2 ? (
              <>
                <div>
                  <Label className="mb-2">Your budget</Label>
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
                  <Label htmlFor="about-project">About the project</Label>
                  <Textarea className="mt-2" rows={3} id="about-project" />
                </div>
              </>
            ) : step === 3 ? (
              <>
                <div>
                  <Label htmlFor="company-name">What is your company name?</Label>
                  <Input className="mt-2" type="text" id="company-name" />
                </div>
                <div>
                  <Label htmlFor="website-link">Website link</Label>
                  <Input className="mt-2" type="text" id="website-link" />
                </div>
              </>
            ) : step === 4 ? (
              <>
                <div>
                  <Label className="mb-2">Country</Label>
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
                  <Label>Preferred date for chat</Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="mt-2 w-full justify-between font-normal"
                      >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          setDate(date)
                          setOpen(false)
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <Label className="flex gap-2 items-center text-sm">
                  <Checkbox id="accept" />
                  I accept the <Link className="underline underline-offset-1 hover:underline-offset-2" href="#">Terms</Link>
                </Label>
              </>
            ) : null}
          </form>

          <div className="mt-6 flex flex-row-reverse">
            <div className="flex items-center gap-2">
              {step === 1 && <Button className="cursor-pointer" variant="outline">Cancel</Button>}
              {step !== 1 && <Button className="cursor-pointer" variant="secondary" onClick={() => setStep((prev) => prev - 1)}>
                Prev
              </Button>}
              {step !== 4 && <Button className="cursor-pointer" variant="secondary" onClick={() => setStep((prev) => prev + 1)}>
                Next
              </Button>}
              {step === 4 && <Button className="cursor-pointer" type="submit">Submit</Button>}
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="hidden md:block w-full">
        <Image
          className="w-full object-contain select-none pointer-events-none"
          src="/image.svg"
          width={200}
          height={200}
          alt="Image Description"
        />
      </div>
    </section >
  );
}
