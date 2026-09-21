import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Towards the Change Foundation",
    "TTC NGO Salem",
    "NGO in Salem Tamil Nadu",
    "youth-led NGO Tamil Nadu",
    "Nirmal Kathirvel",
    "Chief Minister Youth Award NGO",
    "community welfare Tamil Nadu",
    "health camps Salem",
    "rural upliftment Salem",
    "women child safety POSH Salem",
    "tree planting Tamil Nadu",
    "volunteer NGO Salem",
    "donate NGO Tamil Nadu",
  ],
  authors: [{ name: site.name, url: site.url }, { name: site.founder }],
  creator: site.name,
  publisher: site.name,
  category: "nonprofit",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.jpg",
    apple: "/images/logo.jpg",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["NGO", "NonprofitOrganization"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: [site.shortName, "TTC Foundation", "Towards the Change Trust"],
      url: site.url,
      logo: `${site.url}/images/logo.jpg`,
      image: `${site.url}/images/cm-youth-award.jpg`,
      description: site.description,
      slogan: site.tagline,
      foundingDate: String(site.founded),
      award: "Chief Minister's Youth Award 2026, Government of Tamil Nadu",
      founder: {
        "@type": "Person",
        name: site.founder,
        jobTitle: "Founder & Managing Trustee",
        award: "Chief Minister's Youth Award 2026, Government of Tamil Nadu",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1/300, Katheri, Samiyampalayam, Sangari",
        addressLocality: "Salem",
        addressRegion: "Tamil Nadu",
        postalCode: "638183",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "community support and volunteer desk",
        email: site.email,
        availableLanguage: ["English", "Tamil"],
      },
      sameAs: [site.social.instagram, site.social.facebook],
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Tamil Nadu, India",
      },
      knowsAbout: [
        "Community Healthcare & Free Medical Camps",
        "Youth Leadership & Volunteering",
        "Women & Child Safety Awareness & POSH",
        "Rural and Tribal Welfare Upliftment",
        "Environmental Action & Afforestation",
        "Livelihood & Digital Skill Training",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: {
        "@id": `${site.url}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics id={process.env.NEXT_PUBLIC_GA_ID} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
