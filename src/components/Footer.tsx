import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-sand">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.jpg"
                alt={site.name}
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <span className="font-display text-base font-semibold text-brand-dark">
                {site.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-foreground/70">{site.tagline}</p>
          </div>
          <div className="flex gap-16 text-sm">
            <div>
              <p className="font-semibold text-brand-dark">Site</p>
              <ul className="mt-3 space-y-2 text-foreground/70">
                <li><Link href="/about" className="hover:text-brand">About</Link></li>
                <li><Link href="/programs" className="hover:text-brand">Programs</Link></li>
                <li><Link href="/donate" className="hover:text-brand">Support Us</Link></li>
                <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-brand-dark">Reach us</p>
              <ul className="mt-3 space-y-2 text-foreground/70">
                <li>{site.location}</li>
                <li>
                  <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-brand">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-black/5 pt-6 text-xs text-foreground/50">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
