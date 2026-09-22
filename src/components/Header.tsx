"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.jpg"
            alt={site.name}
            width={48}
            height={48}
            className="h-15 w-15 rounded-full border-2 border-brand/30 sm:h-17 sm:w-17"
            priority
          />
          <span className="font-display text-base font-semibold leading-tight text-brand-dark sm:text-lg">
            {site.shortName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/80 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <Link
            href="/admin"
            className="rounded-full border border-black/10 px-3.5 py-2 text-xs font-semibold text-foreground/75 transition hover:border-brand hover:text-brand hover:bg-sand/40"
          >
            Admin Console
          </Link>
          <Link
            href="/donate"
            className="rounded-full border border-brand/30 px-4 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand hover:bg-sand/40"
          >
            Donate
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile Actions: Donate + Hamburger Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <Link
            href="/donate"
            className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-brand-dark transition hover:bg-sand/70"
            onClick={() => setOpen(false)}
          >
            Donate
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 text-brand-dark transition hover:bg-sand"
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {open && (
        <div className="border-b border-black/5 bg-background px-5 pb-6 pt-2 sm:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-brand-dark transition hover:bg-sand/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 border-t border-black/5 pt-4 space-y-2.5">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-brand py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Volunteer with us
            </Link>
            <div className="flex items-center justify-between pt-3 border-t border-black/5 text-xs text-foreground/70">
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand">
                📞 {site.phone}
              </a>
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="font-medium text-brand hover:text-brand-dark"
              >
                Admin Console
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
