"use client";

import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function NavbarThree() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
  ];

  const subNavItems = [
    { name: "Pricing", href: "#" },
    { name: "Features", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  return (
    <header className="w-full border-b bg-background text-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="#" className="h-8 w-fit flex gap-2 justify-self-start" aria-label="Go to homepage">
          <Image
            className="h-full w-fit object-contain"
            width={20}
            height={20}
            src="/logo.svg"
            alt="Site Logo"
          />
          <span className="sr-only">Company</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3">
          <nav className="flex gap-2 justify-self-center" role="navigation" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={buttonVariants({ variant: "ghost" })}
              >
                {item.name}
              </Link>
            ))}

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="dark:hover:bg-accent/50"
                    aria-expanded="false"
                    aria-label="More navigation options"
                  >
                    More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3" role="menu">
                      {subNavItems.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex-row items-center gap-2"
                              role="menuitem"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-2 justify-self-end">
            <Link className={buttonVariants({ variant: "outline" })} href="#" aria-label="Log in to your account">
              Log in
            </Link>
            <Link className={buttonVariants()} href="#" aria-label="Sign up for an account">
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden justify-self-end"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t px-4 py-4 space-y-2" role="navigation" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(buttonVariants({ variant: "ghost" }), "block w-fit")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="dark:hover:bg-accent/50"
                  aria-expanded="false"
                  aria-label="More options"
                >
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3" role="menu">
                    {subNavItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="flex-row items-center gap-2"
                            role="menuitem"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="mt-4 flex flex-col gap-2">
            <Link className={buttonVariants({ variant: "outline" })} href="#" aria-label="Log in">
              Log in
            </Link>
            <Link className={buttonVariants()} href="#" aria-label="Sign up">
              Sign up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
