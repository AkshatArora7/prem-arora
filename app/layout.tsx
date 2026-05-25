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
    default: `Prem Arora — Greater Noida's Most Trusted Property Consultant (25+ Yrs)`,
    template: `%s | Prem Arora · Greater Noida Property Consultant`,
  },
  description: "Prem Arora — Greater Noida's most experienced real estate consultant with 25+ years of local expertise. Personalised guidance for buyers, sellers, NRIs & investors. Free consultation. RERA registered.",
  keywords: [
    "Prem Arora", "Prem Arora Greater Noida", "property consultant Greater Noida",
    "real estate advisor Greater Noida", "best property dealer Greater Noida",
    "RERA agent Greater Noida", "property in Greater Noida", "flats in Greater Noida",
    "Greater Noida West property", "Noida Extension flats", "Jewar airport property",
    "YEIDA plots", "NRI property consultant Greater Noida",
  ],
  authors: [{ name: "Prem Arora", url: site.url }],
  creator: "Prem Arora",
  publisher: "Prem Arora",
  openGraph: {
    type: "website",
    siteName: site.brand,
    url: site.url,
    locale: "en_IN",
    title: "Prem Arora — Greater Noida Property Consultant (25+ Years Experience)",
    description: "Personalised real estate guidance from Greater Noida's most experienced advisor. 700+ families served, RERA verified, end-to-end support.",
  },
  twitter: { card: "summary_large_image", title: "Prem Arora — Greater Noida Property Consultant", description: "25+ years of trust. Personalised real estate guidance in Greater Noida." },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification: { google: "REPLACE_WITH_GSC_TOKEN" },
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
      jobTitle: "Real Estate Consultant",
      url: site.url,
      image: `${site.url}/prem-arora.jpg`,
      worksFor: { "@id": `${site.url}/#business` },
      sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin, site.social.youtube],
      description: "25+ years of real estate consulting experience in Greater Noida. Specialist in residential, investment & NRI property advisory.",
      knowsAbout: ["Greater Noida real estate", "YEIDA plots", "Jewar Airport corridor", "RERA compliance", "NRI property investment", "Home loans"],
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
        name: "Real Estate Consulting Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property buying consultation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property selling advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI property advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real estate investment consulting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home loan facilitation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Legal & registry support" } },
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
