import React from "react";
import Image from "next/image";

interface FooterItem {
  label: string;
  href?: string;
}

interface FooterColumn {
  heading: string;
  items: FooterItem[];
}

interface FooterProps {
  columns?: FooterColumn[];
  country?: string;
  year?: number;
  logoSrc?: string;
  socials?: { src: string; alt: string; href?: string }[];
}

export default function Footer({
  columns = [
    {
      heading: "Featured",
      items: [
        { label: "Air Force 1" },
        { label: "Huarache" },
        { label: "Air Max 90" },
        { label: "Air Max 95" },
      ],
    },
    {
      heading: "Shoes",
      items: [
        { label: "All Shoes" },
        { label: "Custom Shoes" },
        { label: "Jordan Shoes" },
        { label: "Running Shoes" },
      ],
    },
    {
      heading: "Clothing",
      items: [
        { label: "All Clothing" },
        { label: "Modest Wear" },
        { label: "Hoodies & Pullovers" },
        { label: "Shirts & Tops" },
      ],
    },
    {
      heading: "Kids'",
      items: [
        { label: "Infant & Toddler Shoes" },
        { label: "Kids' Shoes" },
        { label: "Kids' Jordan Shoes" },
        { label: "Kids' Basketball Shoes" },
      ],
    },
  ],
  country = "Croatia",
  year = new Date().getFullYear(),
  logoSrc = "/logo.svg",
  socials = [
    { src: "/x.svg", alt: "X", href: "#" },
    { src: "/facebook.svg", alt: "Facebook", href: "#" },
    { src: "/instagram.svg", alt: "Instagram", href: "#" },
  ],
}: FooterProps) {
  return (
    <footer className="mt-16 bg-[--color-dark-900] text-[--color-light-100]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <Image src={logoSrc} alt="Logo" width={48} height={48} />
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.alt}
                href={s.href || "#"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--color-light-100]"
                aria-label={s.alt}
              >
                <Image src={s.src} alt="" width={18} height={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-[--text-heading-3] leading-[--text-heading-3--line-height] font-[--text-heading-3--font-weight]">
                {col.heading}
              </h3>
              <ul className="space-y-3 text-[--color-dark-500]">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href || "#"} className="hover:text-[--color-light-400]">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[--color-light-400] text-[--text-caption] leading-[--text-caption--line-height]">
          <div className="flex items-center gap-2">
            <span aria-hidden>📍</span>
            <span>{country}</span>
            <span className="mx-2">© {year} Nike, Inc. All Rights Reserved</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            {[
              "Guides",
              "Terms of Sale",
              "Terms of Use",
              "Nike Privacy Policy",
            ].map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
