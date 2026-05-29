import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FloatingWhatsApp, StickyMobileBar } from "@/components/FloatingCTAs";
import ExitIntentModal from "@/components/ExitIntentModal";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap", weight: ["600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Prem Arora — Greater Noida Industrial & Land Consultant (28+ Yrs)`,
    template: `%s | Prem Arora · Industrial & Land Consultant, Greater Noida`,
  },
  description: "Prem Arora — Greater Noida's most experienced industrial & land consultant. 28+ years of clean-title transactions in GNIDA, YEIDA, UPSIDA & private freehold. Industrial plots, warehousing land, factory sites, legal due diligence.",
  keywords: [
    "Prem Arora", "Prem Arora Greater Noida", "industrial land consultant Greater Noida",
    "industrial plot Greater Noida", "industrial plots Greater Noida",
    "GNIDA industrial plot", "UPSIDA plot Greater Noida", "YEIDA industrial land",
    "Ecotech Greater Noida", "Ecotech 1 industrial", "Ecotech 10 industrial", "Ecotech 11", "Ecotech 12",
    "industrial land near Jewar Airport", "Yamuna Expressway industrial land",
    "warehouse land Greater Noida", "warehousing plot Greater Noida",
    "logistics land Greater Noida", "factory plot Greater Noida",
    "factory setup land Noida", "commercial plot Greater Noida",
    "freehold industrial land", "leasehold industrial land Greater Noida",
    "legal due diligence industrial land", "title verification UP",
    "Khatauni Khasra Greater Noida", "Section 143 land conversion UP",
    "GNIDA plot allotment", "GNIDA scheme", "industrial land allotment Greater Noida",
    "NRI industrial land Greater Noida", "NRI land investment India",
    "industrial real estate Greater Noida 2026", "industrial land price Greater Noida",
    "best industrial property dealer Greater Noida", "RERA industrial Greater Noida",
    "Surajpur Kasna industrial", "Dadri industrial land", "DFC Boraki warehouse",
    "Noida International Airport industrial", "cold chain warehouse land",
    "bonded warehouse land", "industrial CLU UP", "industrial plot resale Greater Noida",
  ],
  authors: [{ name: "Prem Arora", url: site.url }],
  creator: "Prem Arora",
  publisher: "Prem Arora",
  openGraph: {
    type: "website",
    siteName: site.brand,
    url: site.url,
    locale: "en_IN",
    title: "Prem Arora — Greater Noida Industrial & Land Consultant (28+ Yrs)",
    description: "Clean-title industrial plots, warehousing land, factory sites & legal due diligence across GNIDA, YEIDA, UPSIDA and private freehold. 28+ years of trusted advisory.",
  },
  twitter: { card: "summary_large_image", title: "Prem Arora — Industrial & Land Consultant, Greater Noida", description: "28+ years. Industrial plots, warehousing land, factory sites — with full legal paperwork." },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification: process.env.NEXT_PUBLIC_GSC_TOKEN ? { google: process.env.NEXT_PUBLIC_GSC_TOKEN } : undefined,
  category: "Real Estate",
};

// Combined Person + LocalBusiness + RealEstateAgent schema
const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#prem-arora`,
      name: "Prem Arora",
      jobTitle: "Industrial & Land Real Estate Consultant",
      url: site.url,
      image: `${site.url}/prem-arora.jpg`,
      worksFor: { "@id": `${site.url}/#business` },
      sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin, site.social.youtube],
      description: "28+ years of industrial and land real estate advisory in Greater Noida. Specialist in GNIDA, YEIDA, UPSIDA industrial plots, warehousing land, factory sites, freehold and legal due diligence.",
      knowsAbout: ["Industrial land Greater Noida", "GNIDA industrial plots", "YEIDA industrial sectors", "UPSIDA estates", "Ecotech sectors", "Industrial land near Jewar Airport", "Warehousing and logistics land", "Legal due diligence on land", "Section 143 CLU Uttar Pradesh", "Freehold vs leasehold industrial land", "NRI industrial land investment", "Factory site selection"],
      address: { "@type": "PostalAddress", addressLocality: "Greater Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      telephone: site.phone,
      email: site.email,
    },
    {
      "@type": ["LocalBusiness", "RealEstateAgent"],
      "@id": `${site.url}/#business`,
      name: site.brand,
      image: `${site.url}/prem-arora.jpg`,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      priceRange: "₹₹",
      founder: { "@id": `${site.url}/#prem-arora` },
      foundingDate: "2000-01-01",
      address: { "@type": "PostalAddress", streetAddress: "Sector Alpha-1", addressLocality: "Greater Noida", addressRegion: "Uttar Pradesh", postalCode: "201310", addressCountry: "IN" },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      areaServed: [
        { "@type": "City", name: "Greater Noida" },
        { "@type": "Place", name: "Greater Noida West (Noida Extension)" },
        { "@type": "Place", name: "Yamuna Expressway (YEIDA)" },
        { "@type": "City", name: "Noida" },
      ],
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "21:00" }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "182", bestRating: "5" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Industrial & Land Real Estate Consulting",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial plot advisory (GNIDA / UPSIDA / YEIDA)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehousing & logistics land advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Factory site selection & setup advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Legal due diligence & title verification" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "GNIDA / YEIDA plot allotment & transfer support" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI industrial land advisory" } },
        ],
      },
      sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin, site.social.youtube],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.brand,
      inLanguage: "en-IN",
      publisher: { "@id": `${site.url}/#business` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0b1d39" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Greater Noida" />
        <meta name="geo.position" content={`${site.geo.lat};${site.geo.lng}`} />
        <meta name="ICBM" content={`${site.geo.lat}, ${site.geo.lng}`} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Header />
        {children}
        <Footer />
        <StickyMobileBar />
        <FloatingWhatsApp />
        <ExitIntentModal />
      </body>
    </html>
  );
}
