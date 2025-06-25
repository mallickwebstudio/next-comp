"use client";

import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
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
  { icon: YoutubeIcon, label: "You Tube", href: "#" },
]

export default function FooterThree() {
  return (
    <footer
      className="relative bg-background overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">

        <div className="p-8 grid gap-8 md:gap-16 md:grid-cols-[1fr_0.5fr] border">
          {/* Logo & Input */}
          <div className="text-sm">
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

            <div className="mt-6">
              <div className="font-semibold">Address:</div>
              <div className="mt-1">Level 1, 12 Sample St, Sydney NSW 2000</div>
            </div>

            <div className="mt-6">
              <div className="font-semibold">Contact:</div>
              <a className="mt-1 block" href="tel:#">1900 123 4567</a>
              <a className="block" href="mailto:#">info@company.com</a>
            </div>

            <div className="mt-6" aria-labelledby="social links">
              <ul className="space-y-3 flex gap-4">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label + "FooterOne"}>
                    <Link
                      href={href}
                      className="text-sm flex items-center"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                      <span className="sr-only">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {linkList.map((item) => (
              <React.Fragment key={item.title + "FooterThree"}>
                <nav aria-labelledby={item.title.toLowerCase()}>
                  <h4 className="font-semibold mb-4">{item.title}</h4>
                  <ul className="space-y-1">
                    {item.links.map((link) => (
                      <li key={link.label + "FooterThree"}>
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
          </div>
        </div>


        {/* Bottom */}
        <div className="pt-6 md:pt-12 flex gap-4 flex-col md:flex-row-reverse md:justify-between md:items-center text-sm">
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
