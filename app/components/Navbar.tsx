"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Hire MDW now", href: "/domestic-helper" },
  { label: "Job Seekers", href: "https://findjobs.com.sg/app", external: true },
  {
    label: "Employers",
    href: "https://dashboard.findjobs.asia/signup",
    external: true,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between gap-6 bg-white px-6 py-5 sm:px-8 sm:py-6 lg:justify-normal lg:gap-10 lg:px-20">
      {/* logo */}
      <Link href="/" className="shrink-0">
        <Image
          src="/ksc-logo.png"
          alt="KSC Consultants"
          width={300}
          height={179}
          className="h-14 sm:h-16 lg:h-20 w-auto"
        />
      </Link>

      {/* nav menu */}
      <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex lg:gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group relative flex items-center whitespace-nowrap"
            >
              <span
                className={`text-sm font-medium tracking-[0.35px] ${isActive ? "text-primary" : "text-muted-dark"}`}
              >
                {link.label}
              </span>
              <span
                className={`absolute top-5.25 left-0 h-px bg-primary transition-all duration-200 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          );
        })}
      </nav>

      {/* contact button */}
      <Link
        href="/contact"
        className="hidden shrink-0 rounded bg-primary px-4 py-3 text-sm font-bold whitespace-nowrap text-white transition-colors duration-200 hover:bg-muted-dark lg:block"
      >
        Contact Us
      </Link>

      {/* mobile menu toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex shrink-0 flex-col justify-center gap-1.5 lg:hidden"
      >
        <span
          className={`h-0.5 w-6 bg-dark transition-transform duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`h-0.5 w-6 bg-dark transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`h-0.5 w-6 bg-dark transition-transform duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* mobile menu panel */}
      {isOpen && (
        <div className="absolute top-full right-0 left-0 flex flex-col gap-1 border-t border-line bg-white px-6 py-4 shadow-lg lg:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`py-3 text-sm font-medium ${pathname === "/" ? "text-primary" : "text-muted-dark"}`}
          >
            Home
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className={`py-3 text-sm font-medium ${isActive ? "text-primary" : "text-muted-dark"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/privacy-policy"
            onClick={() => setIsOpen(false)}
            className={`py-3 text-sm font-medium ${pathname === "/privacy-policy" ? "text-primary" : "text-muted-dark"}`}
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded bg-primary px-4 py-3 text-center text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}
