"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface NavLink {
  label: string;
  href?: string;
}

interface NavbarProps {
  links?: NavLink[];
  cartCount?: number;
  logoSrc?: string;
}

export default function Navbar({
  links = [
    { label: "Men", href: "#" },
    { label: "Women", href: "#" },
    { label: "Kids", href: "#" },
    { label: "Collections", href: "#" },
    { label: "Contact", href: "#" },
  ],
  cartCount,
  logoSrc = "/logo.svg",
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[--color-light-100]/90 backdrop-blur border-b border-[--color-light-300]">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logoSrc} alt="Logo" width={36} height={36} priority />
            <span className="sr-only">Home</span>
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href || "#"}
                  className="text-[--color-dark-900] hover:text-[--color-dark-700] text-[--text-heading-3] leading-[--text-heading-3--line-height] font-[--text-heading-3--font-weight]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6">
            <button
              type="button"
              className="text-[--color-dark-900] hover:text-[--color-dark-700]"
            >
              Search
            </button>
            <button
              type="button"
              className="text-[--color-dark-900] hover:text-[--color-dark-700]"
            >
              {`My Cart${typeof cartCount === "number" ? ` (${cartCount})` : ""}`}
            </button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[--color-dark-900] hover:bg-[--color-light-200] focus:outline-none focus:ring-2 focus:ring-[--color-dark-900]"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Toggle main menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href || "#"}
                    className="block py-2 text-[--color-dark-900] hover:text-[--color-dark-700]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center gap-6">
              <button className="text-[--color-dark-900] hover:text-[--color-dark-700]">
                Search
              </button>
              <button className="text-[--color-dark-900] hover:text-[--color-dark-700]">
                {`My Cart${typeof cartCount === "number" ? ` (${cartCount})` : ""}`}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
