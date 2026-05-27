import type { Metadata } from "next";
import Link from "next/link";
import { seoPages } from "@/lib/seo-pages";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Greater Noida Industrial & Land Guides — Expert Insights by Prem Arora",
  description: "Complete library of Greater Noida industrial real estate guides — industrial plots, warehouse land, GNIDA & YEIDA allotment, Jewar Airport corridor, legal due diligence, freehold vs leasehold, NRI advisory. Written by Prem Arora (25+ yrs).",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Greater Noida Industrial Land Guides — Prem Arora",
    description: "Every Greater Noida industrial land question answered by 25+ years of on-ground expertise.",
    type: "website",
    url: `${site.url}/guides`,
    siteName: site.brand,
    locale: "en_IN",
  },
  keywords: [
    "Greater Noida industrial land guides","industrial plots Greater Noida","GNIDA plot allotment",
    "YEIDA industrial land","Jewar Airport land","legal due diligence industrial land",
    "freehold vs leasehold","warehouse land Greater Noida","Prem Arora guides",
  ],
};

const breadcrumbJsonLd = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  itemListElement:[
    {"@type":"ListItem", position:1, name:"Home", item: site.url},
    {"@type":"ListItem", position:2, name:"Guides", item: `${site.url}/guides`},
  ],
};

const itemListJsonLd = {
  "@context":"https://schema.org","@type":"ItemList",
  itemListElement: seoPages.map((p, i) => ({
    "@type":"ListItem", position: i+1,
    name: p.title,
    url: `${site.url}/seo/${p.slug}`,
  })),
};

export default function GuidesIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(itemListJsonLd)}} />

      <section className="gradient-page text-white py-16">
        <div className="container-x">
          <div className="text-[0.85rem] text-slate-300 mb-2"><Link href="/" className="hover:text-[var(--color-gold)]">Home</Link> / Guides</div>
          <span className="eyebrow" style={{color:"var(--color-gold)"}}>Free expert guides</span>
          <h1 className="text-white mt-1 max-w-[820px]">Greater Noida industrial &amp; land guides — 25 years of expertise, free to read.</h1>
          <p className="text-slate-200 max-w-[760px] mt-3">From your first industrial plot in Ecotech to a YEIDA parcel near Jewar Airport, GNIDA allotments and legal due diligence — Prem&apos;s guides cover every Greater Noida industrial land question with honest, on-ground insight.</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a className="btn btn-primary" href={`tel:${site.phone}`}>📞 Call Prem Now</a>
            <a className="btn" style={{background:"#25D366",color:"#fff"}} href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener">💬 WhatsApp</a>
            <Link className="btn btn-ghost" href="/contact">📅 Free Consultation →</Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {seoPages.map(p => (
              <Link key={p.slug} href={`/seo/${p.slug}`} className="bg-white border border-[var(--color-line)] rounded-[14px] p-6 hover:border-[var(--color-gold)] hover:-translate-y-1 transition-all block">
                <h2 className="text-[1.1rem] font-semibold mb-2 text-[var(--color-navy)]">{p.title}</h2>
                <p className="text-slate-600 text-[0.92rem]">{p.metaDescription}</p>
                <span className="mt-3 inline-block text-[var(--color-gold)] font-semibold">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x">
          <div className="rounded-[18px] p-8 md:p-10 text-white text-center" style={{background:"linear-gradient(135deg,var(--color-navy),var(--color-navy-2))"}}>
            <h2 className="text-white">Reading guides is great. A 20-minute call with Prem is faster.</h2>
            <p className="text-slate-200 max-w-[640px] mx-auto mt-2">Skip the research — share your goal and Prem will give you a clear, honest plan.</p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a href={`tel:${site.phone}`} className="btn btn-primary">📞 Call {site.phoneDisplay}</a>
              <a href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener" className="btn" style={{background:"#25D366",color:"#fff"}}>💬 WhatsApp</a>
              <Link href="/contact" className="btn" style={{background:"#fff",color:"var(--color-navy)"}}>📅 Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
