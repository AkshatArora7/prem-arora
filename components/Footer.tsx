import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-[#cfd6e6] pt-14 pb-5 mt-16">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <span className="w-9 h-9 rounded-lg grid place-items-center text-[var(--color-gold)] font-display text-lg" style={{background:"linear-gradient(135deg,var(--color-navy-2),#1c3563)"}}>P</span>
              <span className="font-display text-[1.25rem]">
                Prem Arora
                <small className="block font-sans text-[0.62rem] tracking-[0.25em] text-[var(--color-gold)] font-semibold mt-[-2px]">GREATER NOIDA · 25+ YRS</small>
              </span>
            </Link>
            <p className="text-[#cfd6e6] mt-3 max-w-[320px] text-[0.95rem]">Greater Noida&apos;s most trusted industrial &amp; land consultant. 25+ years of clean-title transactions across GNIDA, YEIDA, UPSIDA and private freehold — for manufacturers, warehousing operators, NRIs and investors.</p>
            <div className="flex gap-2.5 mt-3.5">
              <a className="btn btn-primary btn-sm" href={`tel:${site.phone}`}>📞 Call Now</a>
              <a className="btn btn-sm" style={{background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,.3)"}} href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">💬 WhatsApp</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-sans text-[0.95rem] tracking-[0.08em] uppercase mb-3.5">Explore</h4>
            <Link href="/about" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">About Prem</Link>
            <Link href="/contact" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Book Consultation</Link>
            <Link href="/seo/legal-due-diligence-industrial-land-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Why Work With Prem</Link>
            <Link href="/seo/industrial-real-estate-market-trends-greater-noida-2026" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Market Trends 2026</Link>
          </div>
          <div>
            <h4 className="text-white font-sans text-[0.95rem] tracking-[0.08em] uppercase mb-3.5">Popular Searches</h4>
            <Link href="/seo/industrial-plots-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Industrial Plots Greater Noida</Link>
            <Link href="/seo/industrial-land-yamuna-expressway-yeida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">YEIDA Industrial Land</Link>
            <Link href="/seo/industrial-land-jewar-airport" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Land Near Jewar Airport</Link>
            <Link href="/seo/ecotech-industrial-sectors-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Ecotech Sectors Guide</Link>
            <Link href="/seo/warehouse-logistics-land-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Warehouse &amp; Logistics Land</Link>
            <Link href="/seo/commercial-plots-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Commercial Plots</Link>
            <Link href="/seo/freehold-vs-leasehold-land-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Freehold vs Leasehold</Link>
            <Link href="/seo/legal-due-diligence-industrial-land-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Legal Due Diligence</Link>
            <Link href="/seo/title-verification-land-uttar-pradesh" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Title Verification — UP</Link>
            <Link href="/seo/gnida-plot-allotment-process" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">GNIDA Plot Allotment</Link>
            <Link href="/seo/nri-buy-industrial-land-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">NRI Industrial Land</Link>
            <Link href="/seo/factory-setup-land-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Factory Setup Land</Link>
            <Link href="/seo/industrial-real-estate-market-trends-greater-noida-2026" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Market Trends 2026</Link>
          </div>
          <div>
            <h4 className="text-white font-sans text-[0.95rem] tracking-[0.08em] uppercase mb-3.5">Contact</h4>
            <a href={`tel:${site.phone}`} className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">📞 {site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">✉ {site.email}</a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">💬 WhatsApp Chat</a>
            <p className="text-[#9aa6c2] text-[0.85rem] mt-2">Office: {site.address}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 flex flex-wrap gap-2.5 justify-between text-[0.82rem] text-[#9aa6c2]">
          <span>© {new Date().getFullYear()} Prem Arora — Greater Noida Industrial &amp; Land Consultant. All rights reserved.{site.rera ? ` RERA: ${site.rera}.` : ""}</span>
          <span><a href="#" className="text-[#9aa6c2] hover:text-[var(--color-gold)]">Privacy</a> • <a href="#" className="text-[#9aa6c2] hover:text-[var(--color-gold)]">Terms</a> • <Link href="/sitemap.xml" className="text-[#9aa6c2] hover:text-[var(--color-gold)]">Sitemap</Link></span>
        </div>
      </div>
    </footer>
  );
}
