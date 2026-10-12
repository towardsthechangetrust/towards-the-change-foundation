import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { ShareButton } from "@/components/ShareButton";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Organization Info */}
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
            <p className="mt-3 text-xs leading-relaxed text-foreground/70 sm:text-sm">
              {site.tagline}
            </p>

            {/* Social Icons & Share */}
            <div className="mt-5 flex items-center gap-3">
              {/* Instagram */}
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-dark transition hover:bg-brand hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-dark transition hover:bg-brand hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* LinkedIn */}
              {site.social.linkedin && (
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-dark transition hover:bg-brand hover:text-white"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0 1.65 1.65 0 0 0 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>
              )}

              {/* WhatsApp Share */}
              <ShareButton />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-12 text-sm sm:gap-16">
            <div>
              <p className="font-semibold text-brand-dark">Navigation</p>
              <ul className="mt-3 space-y-2 text-foreground/70 text-xs sm:text-sm">
                <li><Link href="/about" className="hover:text-brand">About us</Link></li>
                <li><Link href="/programs" className="hover:text-brand">Programs</Link></li>
                <li><Link href="/gallery" className="hover:text-brand">Impact Gallery</Link></li>
                <li><Link href="/donate" className="hover:text-brand">Support Us</Link></li>
                <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-brand-dark">Reach us</p>
              <ul className="mt-3 space-y-2 text-foreground/70 text-xs sm:text-sm">
                <li>{site.location}</li>
                <li>
                  <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand">
                    📞 {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-brand">
                    ✉️ {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Admin Link */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-black/5 pt-6 text-xs text-foreground/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-brand">
              Admin Console
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
