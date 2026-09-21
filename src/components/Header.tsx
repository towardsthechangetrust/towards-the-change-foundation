import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Support Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.jpg"
            alt={site.name}
            width={52}
            height={52}
            className="h-[52px] w-[52px]"
            priority
          />
          <span className="font-display text-lg font-semibold leading-tight text-brand-dark">
            {site.shortName}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 sm:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Get involved
        </Link>
      </div>
    </header>
  );
}
