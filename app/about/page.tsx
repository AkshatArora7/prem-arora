import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Prem Arora — 25+ Years as Greater Noida's Industrial & Land Consultant",
  description: "Meet Prem Arora — Greater Noida's most experienced industrial land consultant. 25+ years guiding manufacturers, NRIs and investors with clean-title transactions across GNIDA, YEIDA, UPSIDA and Jewar Airport corridor.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Prem Arora — 25+ Years in Greater Noida Industrial Real Estate",
    description: "25+ years. 500+ industrial deals. ₹600 Cr+ in clean-title transactions. Meet Greater Noida's most personal industrial & land advisor.",
    type: "profile",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prem Arora",
  jobTitle: "Industrial & Land Real Estate Consultant",
  url: `${site.url}/about`,
  image: `${site.url}/prem-arora.jpg`,
  description: "Prem Arora is Greater Noida's most experienced industrial land consultant with 25+ years of expertise in GNIDA, YEIDA, UPSIDA plots, warehouse land and legal due diligence for manufacturers and investors.",
  knowsAbout: ["Industrial plots Greater Noida","YEIDA industrial land","Yamuna Expressway","Jewar Airport corridor","GNIDA allotment","UPSIDA industrial estates","Ecotech sectors","Warehouse and logistics land","Factory setup","Legal due diligence","Title verification Uttar Pradesh","Freehold and leasehold land","NRI industrial investment"],
  address: { "@type": "PostalAddress", addressLocality: "Greater Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin, site.social.youtube],
  award: ["25+ Years of Trusted Industrial Real Estate Advisory","500+ Industrial & Land Deals Closed","Preferred Advisor for NRI Industrial Investors"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type":"ListItem", position:1, name:"Home", item: site.url },
    { "@type":"ListItem", position:2, name:"About Prem Arora", item: `${site.url}/about` },
  ],
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="gradient-page text-white py-16">
        <div className="container-x">
          <div className="text-[0.85rem] text-slate-300 mb-2"><Link href="/" className="hover:text-[var(--color-gold)]">Home</Link> / About Prem</div>
          <span className="eyebrow" style={{color:"var(--color-gold)"}}>About</span>
          <h1 className="text-white mt-1 max-w-[820px]">Prem Arora — Greater Noida&apos;s most personal industrial &amp; land consultant for 25+ years.</h1>
          <p className="text-slate-200 max-w-[760px] mt-3">Through three industrial cycles, the rise of GNIDA &amp; YEIDA, and the arrival of the Jewar International Airport — one advisor has stood beside 500+ manufacturers, warehousing operators and NRI investors with the same quiet promise: <i>clean title, every time.</i></p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
          <div>
            <div className="rounded-[18px] overflow-hidden shadow-[var(--shadow-lg)] border border-[var(--color-line)] bg-white">
              {/* Replace src with /prem-arora.jpg once final photo is supplied */}
              <Image src={site.photo} alt="Prem Arora — Greater Noida Property Consultant" width={900} height={1100} className="w-full h-auto object-cover" priority />
            </div>
            <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-5 mt-5">
              <span className="eyebrow">At a glance</span>
              <ul className="mt-2 space-y-2 text-slate-700">
                <li><b>Experience:</b> 25+ years in Greater Noida industrial &amp; land</li>
                <li><b>Deals closed:</b> 500+ industrial / commercial / warehouse transactions</li>
                <li><b>Closed value:</b> ₹600 Cr+ in lifetime transactions</li>
                <li><b>NRI clients:</b> 80+ across UAE, Singapore, US, UK</li>
                <li><b>Compliance:</b> 100% clean-title, RERA/GNIDA/YEIDA-compliant guidance</li>
                <li><b>Languages:</b> English, Hindi, Punjabi</li>
                <li><b>Areas of expertise:</b> Greater Noida (Ecotech), GNIDA, YEIDA / Yamuna Expressway, Jewar Airport corridor, UPSIDA estates</li>
              </ul>
            </div>
          </div>

          <div className="article max-w-none">
            <span className="eyebrow">Prem&apos;s story</span>
            <h2>From a single-room office in 1999 to Greater Noida&apos;s most trusted industrial land advisor.</h2>
            <p>Prem Arora started in real estate in 1999, when Greater Noida was little more than fields, dust tracks, and the first foundation stones of what would become one of India&apos;s largest planned industrial cities. He walked those plots before there were Ecotech sectors, before there was an Expressway — and that ground-up understanding is the foundation of every recommendation he makes today.</p>
            <p>Over the past two and a half decades, Prem has closed 500+ industrial, commercial and warehouse transactions, advised 80+ NRI investors across four continents, and helped manufacturers set up factories on land that is title-clean, end-use approved, and legally bullet-proof.</p>

            <h2>What makes working with Prem different</h2>
            <p>Most brokers transact. Prem advises. He deliberately caps his client intake to around 50 deals a year — because legal due diligence cannot scale through call centres or junior agents. When you call Prem, you get Prem.</p>
            <p>He&apos;ll tell you when <i>not</i> to buy. He&apos;ll tell you when a plot has lease-deed problems, conversion issues, or end-use restrictions that don&apos;t fit your factory. He&apos;ll walk you away from a deal that looks cheap but isn&apos;t clean — and that habit, more than any sale, is why manufacturers return to him for their second unit, their third unit, and their warehousing expansion.</p>

            <h2>Specialisations</h2>
            <ul>
              <li><b>Industrial plot acquisition</b> — GNIDA, YEIDA, UPSIDA, and private freehold land matched to your end use, power load and road frontage needs.</li>
              <li><b>Warehouse &amp; logistics land</b> — Grade-A warehousing parcels on the Eastern Peripheral, NH-91 and Yamuna Expressway corridors.</li>
              <li><b>Factory-ready land</b> — plots with sanctioned building plans, power load, water and effluent approvals already in place.</li>
              <li><b>NRI investors</b> — virtual site visits, POA registration, FEMA-compliant payments, repatriation planning for industrial assets.</li>
              <li><b>Legal due diligence</b> — title chain, mutation, encumbrance, lease-deed and end-use compliance verified by panel advocates before you pay a rupee.</li>
              <li><b>Sellers &amp; exits</b> — honest valuation, qualified-buyer network, clean documentation, faster closes.</li>
            </ul>

            <h2>Areas covered</h2>
            <p>Prem&apos;s on-ground expertise spans <b>Greater Noida Ecotech sectors</b> (Ecotech I Extension, Ecotech III, VI, VIII, X, XI, XII), <b>GNIDA industrial &amp; institutional plots</b>, <b>Yamuna Expressway (YEIDA) industrial sectors</b> near the upcoming Jewar International Airport, <b>UPSIDA estates</b>, and select commercial parcels in <b>Pari Chowk</b> and <b>Knowledge Park</b>.</p>

            <h2>Trust, in numbers</h2>
            <ul>
              <li><b>25+ years</b> of on-ground Greater Noida industrial experience</li>
              <li><b>500+ industrial &amp; land deals</b> successfully closed</li>
              <li><b>₹600 Cr+</b> in lifetime transaction value</li>
              <li><b>80+ NRI clients</b> served fully remotely</li>
              <li><b>30+ industry &amp; legal partnerships</b> — direct-rate access &amp; panel advocates</li>
              <li><b>100% clean-title</b> closure record across two decades</li>
            </ul>

            <h2>The Prem Arora promise</h2>
            <p>Three things you will always get from Prem:</p>
            <ol>
              <li><b>Clean title over the sale.</b> If a plot has lease, mutation or end-use issues, he&apos;ll say so — even if it costs him the deal.</li>
              <li><b>Personal attention.</b> Direct WhatsApp, direct phone, direct accountability — from first call to registry &amp; mutation.</li>
              <li><b>End-to-end care.</b> Title verification, GNIDA/YEIDA paperwork, building-plan sanction, conversion, registry, possession — handled.</li>
            </ol>

            <div className="not-prose rounded-2xl p-6 mt-8 text-white" style={{background:"linear-gradient(135deg,var(--color-navy),var(--color-navy-2))"}}>
              <h3 className="font-display text-2xl text-white m-0">Talk to Prem — one call, full clarity.</h3>
              <p className="text-slate-200 mt-2 mb-4">Free 20-minute consultation. No pressure. Just 25 years of Greater Noida industrial wisdom on your side.</p>
              <div className="flex flex-wrap gap-3">
                <a className="btn btn-primary" href={`tel:${site.phone}`}>📞 Call {site.phoneDisplay}</a>
                <a className="btn" style={{background:"#25D366",color:"#fff"}} href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener">💬 WhatsApp Prem</a>
                <Link className="btn" style={{background:"#fff",color:"var(--color-navy)"}} href="/contact">📅 Book Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg-soft)]">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <span className="eyebrow">Get a personal callback</span>
            <h2 className="mt-1">Share your goal — Prem will call you back personally.</h2>
            <p className="text-slate-600 mt-2">Most callbacks happen within 2 business hours. For urgent queries, just dial or WhatsApp directly — Prem picks up his own phone.</p>
          </div>
          <LeadForm id="about-lead" interest="About — personal callback from Prem" />
        </div>
      </section>
    </>
  );
}
