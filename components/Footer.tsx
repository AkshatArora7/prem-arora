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
            <p className="text-[#cfd6e6] mt-3 max-w-[320px] text-[0.95rem]">Greater Noida&apos;s most trusted property consultant. 25+ years of local expertise, RERA-verified guidance, and personalised advisory for buyers, sellers, NRIs &amp; investors.</p>
            <div className="flex gap-2.5 mt-3.5">
              <a className="btn btn-primary btn-sm" href={`tel:${site.phone}`}>📞 Call Now</a>
              <a className="btn btn-sm" style={{background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,.3)"}} href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">💬 WhatsApp</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-sans text-[0.95rem] tracking-[0.08em] uppercase mb-3.5">Explore</h4>
            <Link href="/about" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">About Prem</Link>
            <Link href="/contact" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Book Consultation</Link>
            <Link href="/seo/best-property-dealers-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Why Work With Prem</Link>
            <Link href="/seo/invest-greater-noida-real-estate-2026" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Investment Guide</Link>
          </div>
          <div>
            <h4 className="text-white font-sans text-[0.95rem] tracking-[0.08em] uppercase mb-3.5">Popular Searches</h4>
            <Link href="/seo/2-bhk-flats-greater-noida-under-50-lakhs" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">2 BHK under ₹50 L</Link>
            <Link href="/seo/3-bhk-flats-greater-noida-west" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">3 BHK in Noida Extension</Link>
            <Link href="/seo/luxury-apartments-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Luxury Apartments</Link>
            <Link href="/seo/ready-to-move-flats-greater-noida-extension" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Ready-to-Move Flats</Link>
            <Link href="/seo/property-near-jewar-airport-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Property near Jewar Airport</Link>
            <Link href="/seo/yeida-plots-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">YEIDA Plots</Link>
            <Link href="/seo/nri-property-consultant-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">NRI Advisory</Link>
            <Link href="/seo/invest-greater-noida-real-estate-2026" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Investment Guide 2026</Link>
            <Link href="/seo/best-sectors-greater-noida-to-buy-property" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Best Sectors to Buy</Link>
            <Link href="/seo/sell-property-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Sell Your Property</Link>
            <Link href="/seo/home-loan-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Home Loan Help</Link>
            <Link href="/seo/greater-noida-real-estate-market-trends" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Market Trends 2026</Link>
            <Link href="/seo/best-property-dealers-greater-noida" className="block py-1.5 text-[0.92rem] hover:text-[var(--color-gold)]">Best Property Dealers</Link>
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
          <span>© {new Date().getFullYear()} Sairath Realtors. All rights reserved. RERA Reg: {site.rera}.</span>
          <span><a href="#" className="text-[#9aa6c2] hover:text-[var(--color-gold)]">Privacy</a> • <a href="#" className="text-[#9aa6c2] hover:text-[var(--color-gold)]">Terms</a> • <Link href="/sitemap.xml" className="text-[#9aa6c2] hover:text-[var(--color-gold)]">Sitemap</Link></span>
        </div>
      </div>
    </footer>
  );
}
