import React from "react";
import Image from "next/image";

export interface CardBadge {
  label: string;
  color?: "green" | "red" | "orange";
}

export interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  meta?: string;
  price?: string | number;
  href?: string;
  badge?: CardBadge;
}

const badgeColorMap: Record<NonNullable<CardBadge["color"]>, string> = {
  green: "text-[--color-green]",
  red: "text-[--color-red]",
  orange: "text-[--color-orange]",
};

export default function Card({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  meta,
  price,
  href = "#",
  badge,
}: CardProps) {
  return (
    <article className="group overflow-hidden rounded-xl bg-[--color-light-100] ring-1 ring-[--color-light-300] hover:shadow-lg transition">
      <a href={href} className="block focus:outline-none focus:ring-2 focus:ring-[--color-dark-900]">
        <div className="relative aspect-[4/3] bg-[--color-light-200]">
          <Image
            fill
            src={imageSrc}
            alt={imageAlt}
            className="object-cover"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            priority={false}
          />
          {badge && (
            <span
              className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[--text-caption] leading-[--text-caption--line-height] font-[--text-caption--font-weight] bg-[--color-light-100] ${badgeColorMap[badge.color || "orange"]}`}
            >
              {badge.label}
            </span>
          )}
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-[--color-dark-900] text-[--text-heading-3] leading-[--text-heading-3--line-height] font-[--text-heading-3--font-weight]">
                {title}
              </h3>
              {subtitle && (
                <p className="text-[--color-dark-700] text-[--text-body] leading-[--text-body--line-height]">
                  {subtitle}
                </p>
              )}
              {meta && (
                <p className="text-[--color-dark-500] text-[--text-caption] leading-[--text-caption--line-height]">
                  {meta}
                </p>
              )}
            </div>
            {typeof price !== "undefined" && (
              <div className="shrink-0 text-right text-[--color-dark-900] text-[--text-heading-3] leading-[--text-heading-3--line-height] font-[--text-heading-3--font-weight]">
                ${price}
              </div>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}
