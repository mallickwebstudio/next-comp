import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    value: "item-1",
    question: "Question text goes here",
    answer: [
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
      "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
    ],
  },
  {
    value: "item-2",
    question: "Shipping Details",
    answer: [
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
      "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
    ],
  },
  {
    value: "item-3",
    question: "Return Policy",
    answer: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
    ],
  },
  {
    value: "item-4",
    question: "Warranty & Support",
    answer: [
      "All our products come with a 1-year manufacturer warranty covering hardware defects and performance issues.",
      "Our support team is available 24/7 via chat, email, or phone to assist you with troubleshooting or warranty claims.",
    ],
  },
];

export default function FaqThree() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Text Content */}
          <div>
            <header>
              <h2 className="scroll-m-20 text-3xl md:text-4xl  font-bold tracking-tight text-balance">
                FAQs
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Find answers to the most common questions about our product and
                services.
              </p>
            </header>

            <Button className="mt-4" variant="outline">
              Contact Support
            </Button>
          </div>

          {/* FAQ Accordion */}
          <div className="w-full md:w-1/2">
            <Accordion
              type="single"
              collapsible
              className="w-full border-y"
              defaultValue="item-1"
              aria-label="Frequently Asked Questions"
            >
              {faqs.map((faq) => (
                <AccordionItem key={faq.value + "FaqThree"} value={faq.value}>
                  <AccordionTrigger aria-label={`Toggle answer for: ${faq.question}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    {faq.answer.map((paragraph, index) => (
                      <p key={index + "FaqThree"}>{paragraph}</p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
