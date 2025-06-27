"use client";

import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const linkList = [
  {
    label: "Features",
    href: "#"
  },
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
]

const socialLinks = [
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: YoutubeIcon, label: "You Tube", href: "#" },
]

export default function FooterFour() {
  return (
    <footer
      className="relative bg-background overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3 justify-center">
          {/* Logo & Input */}
          <div className="justify-self-center lg:justify-self-start">
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
          </div>


          {/* Nav Links */}
          <nav className="justify-self-center lg:justify-self-center" aria-labelledby="site navigation">
            <ul className="flex flex-col gap-4 sm:flex-row items-center">
              {linkList.map((link) => (
                <li key={link.label + "FooterFour"}>
                  <Link className="text-sm text-nowrap" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="justify-self-center lg:justify-self-end" aria-labelledby="social links">
            <ul className="space-y-3 flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label + "FooterOne"}>
                  <Link className="text-sm flex items-center" href={href}>
                    <Icon className="size-5" aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Bottom */}
        <div className="border-t mt-8 pt-8 md:mt-12 md:pt-12 flex gap-4 flex-col md:flex-row-reverse md:justify-between md:items-center text-sm">
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
