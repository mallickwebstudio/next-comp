"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const linkList = [
  {
    title: "Product",
    links: [
      {
        label: "Features",
        href: "#"
      },
      {
        label: "Pricing",
        href: "#"
      },
      {
        label: "Integrations",
        href: "#"
      },
      {
        label: "API",
        href: "#"
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        href: "#"
      },
      {
        label: "Careers",
        href: "#"
      },
      {
        label: "Blog",
        href: "#"
      },
      {
        label: "Contact",
        href: "#"
      },
    ],
  }
]

const socialLinks = [
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
]

export default function FooterOne() {
  return (
    <footer
      className="relative bg-background overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">

        <div className="grid gap-8 md:gap-16 md:grid-cols-[0.75fr_1fr]">
          {/* Logo & Input */}
          <div className="space-y-4">
            <Link className="block h-8" href="#">
              <Image
                className="h-full w-fit"
                src="/logo.svg"
                width={150}
                height={50}
                alt="Your Company Logo"
              />
              <span className="sr-only">Company</span>
            </Link>

            <h3>Join our newsletter to stay up to date on features and releases.</h3>
            <form className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}>
              <Input
                className="flex-1"
                type="email"
                id="newsletter-email"
                placeholder="Your email"
                aria-label="Your email"
                required
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
            <div className="mt-4 text-sm">
              By subscribing you agree to with our <a className="underline underline-offset-1 hover:underline-offset-2" href="#">Privacy Policy</a> and provide consent to receive updates from our company.
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {linkList.map((item) => (
              <React.Fragment key={item.title + "FooterOne"}>
                <nav aria-labelledby={item.title.toLowerCase()}>
                  <h4 className="font-semibold mb-4">{item.title}</h4>
                  <ul className="space-y-1">
                    {item.links.map((link) => (
                      <li key={link.label + "FooterOne"}>
                        <Link
                          href={link.href}
                          className="text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </React.Fragment>
            ))}
            <div aria-labelledby="social links">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label + "FooterOne"}>
                    <Link
                      href={href}
                      className="text-sm flex items-center"
                    >
                      <Icon className="size-5 mr-2" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        {/* Bottom */}
        <div className="border-t mt-6 pt-6 md:mt-12 md:pt-12 flex gap-4 flex-col md:flex-row-reverse md:justify-between md:items-center text-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Link className="underline underline-offset-1 hover:underline-offset-2" href="#">Privacy Policy</Link>
            <Link className="underline underline-offset-1 hover:underline-offset-2" href="#">Terms of Service</Link>
            <Link className="underline underline-offset-1 hover:underline-offset-2" href="#">Cookies Settings</Link>
          </div>
          <p className="">
            © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
