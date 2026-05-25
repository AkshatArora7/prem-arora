import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Prem Arora — 25+ Years as Greater Noida's Trusted Property Consultant",
  description: "Meet Prem Arora — Greater Noida's most experienced real estate consultant. 25+ years guiding 700+ families, NRIs and investors with honest, RERA-verified, personalised advisory.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Prem Arora — 25+ Years in Greater Noida Real Estate",
    description: "25+ years. 700+ families. ₹450 Cr+ in trusted transactions. Meet Greater Noida's most personal property consultant.",
    type: "profile",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prem Arora",
  jobTitle: "Real Estate Consultant",
  url: `${site.url}/about`,
  image: `${site.url}/prem-arora.jpg`,
  description: "Prem Arora is Greater Noida's most experienced property consultant with 25+ years of local expertise across residential, NRI and investment advisory.",
  knowsAbout: ["Greater Noida real estate","Greater Noida West","YEIDA","Jewar Airport corridor","NRI property advisory","RERA","Home loans","Property investment"],
  address: { "@type": "PostalAddress", addressLocality: "Greater Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin, site.social.youtube],
  award: ["25+ Years of Trusted Real Estate Advisory","700+ Families Successfully Settled","NRI Advisor of Choice for Greater Noida"],
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
          <h1 className="text-white mt-1 max-w-[820px]">Prem Arora — Greater Noida&apos;s most personal property consultant for 25+ years.</h1>
          <p className="text-slate-200 max-w-[760px] mt-3">Through three property cycles, two RERA regimes, and the rise of Greater Noida from farmland to a global aviation hub — one advisor has stood beside 700+ families and investors with the same quiet promise: <i>honest counsel, every time.</i></p>
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
                <li><b>Experience:</b> 25+ years in Greater Noida real estate</li>
                <li><b>Families guided:</b> 700+</li>
                <li><b>Closed value:</b> ₹450 Cr+ in lifetime transactions</li>
                <li><b>NRI clients:</b> 100+ across UAE, Singapore, US, UK</li>
                <li><b>Compliance:</b> RERA registered — only RERA-approved projects recommended</li>
                <li><b>Languages:</b> English, Hindi, Punjabi</li>
                <li><b>Areas of expertise:</b> Greater Noida, Greater Noida West (Noida Extension), YEIDA &amp; Jewar Airport corridor</li>
              </ul>
            </div>
          </div>

          <div className="article max-w-none">
            <span className="eyebrow">Prem&apos;s story</span>
            <h2>From a single-room office in 1999 to Greater Noida&apos;s most trusted advisor.</h2>
            <p>Prem Arora started in real estate in 1999, when Greater Noida was little more than fields, dust tracks, and the first foundation stones of what would become one of India&apos;s largest planned cities. He walked those plots before there were sectors, before there were roads — and that ground-up understanding is the foundation of every recommendation he makes today.</p>
            <p>Over the past two and a half decades, Prem has guided more than 700 families into homes, helped sellers exit at the right time, advised 100+ NRI buyers across four continents, and built investment portfolios for clients who trust him with multi-crore decisions.</p>

            <h2>What makes working with Prem different</h2>
            <p>Most agents transact. Prem advises. He deliberately caps his client intake to around 80 deals a year — because real advisory cannot scale through call centres or junior agents. When you call Prem, you get Prem.</p>
            <p>He&apos;ll tell you when <i>not</i> to buy. He&apos;ll tell you when a project is too risky. He&apos;ll walk you away from a deal that doesn&apos;t fit you — and that habit, more than any sale, is why families return to him for their second home, their children&apos;s home, and their parents&apos; home.</p>

            <h2>Specialisations</h2>
            <ul>
              <li><b>First-time home buyers</b> — patient, jargon-free guidance through your biggest financial decision.</li>
              <li><b>NRI buyers</b> — virtual site visits, POA registration, FEMA-compliant payments, repatriation planning.</li>
              <li><b>Investors</b> — sector-level appreciation forecasts, rental yield models, clear exit strategies.</li>
              <li><b>Sellers</b> — honest valuation, genuine-buyer network, clean documentation, faster closes.</li>
              <li><b>Senior citizens &amp; estate planning</b> — title verification, succession planning, registry support.</li>
            </ul>

            <h2>Areas covered</h2>
            <p>Prem&apos;s on-ground expertise spans <b>Greater Noida</b> (Sectors Alpha, Beta, Gamma, Chi, Pi, Omega, Mu, Zeta, Xu), <b>Greater Noida West / Noida Extension</b> (Sectors 1, 2, 4, 10, 16, 16B, 16C, Tech Zone IV), <b>Yamuna Expressway (YEIDA)</b> sectors near the upcoming Jewar International Airport, and select premium pockets in <b>Noida</b> and <b>Pari Chowk</b>.</p>

            <h2>Trust, in numbers</h2>
            <ul>
              <li><b>25+ years</b> of on-ground Greater Noida experience</li>
              <li><b>700+ families</b> successfully settled into homes</li>
              <li><b>₹450 Cr+</b> in lifetime transaction value</li>
              <li><b>100+ NRI clients</b> served fully remotely</li>
              <li><b>40+ developer partnerships</b> — direct-rate access</li>
              <li><b>4.9★</b> rating across 180+ Google reviews</li>
            </ul>

            <h2>The Prem Arora promise</h2>
            <p>Three things you will always get from Prem:</p>
            <ol>
              <li><b>Honesty over the sale.</b> If a project is wrong for you, he&apos;ll say so — even if it costs him the deal.</li>
              <li><b>Personal attention.</b> Direct WhatsApp, direct phone, direct accountability — from first call to handover of keys.</li>
              <li><b>End-to-end care.</b> RERA verification, negotiation, documentation, loan, registry, possession — handled.</li>
            </ol>

            <div className="not-prose rounded-2xl p-6 mt-8 text-white" style={{background:"linear-gradient(135deg,var(--color-navy),var(--color-navy-2))"}}>
              <h3 className="font-display text-2xl text-white m-0">Talk to Prem — one call, full clarity.</h3>
              <p className="text-slate-200 mt-2 mb-4">Free 20-minute consultation. No pressure. Just 25 years of Greater Noida wisdom on your side.</p>
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
