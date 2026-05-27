import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { site } from "@/lib/site";

const homeFaqs = [
  { q: "Who is Prem Arora and why work with him?", a: "Prem Arora is one of Greater Noida's most experienced real estate consultants, with 25+ years of on-ground expertise. He has personally guided 700+ families and investors through property decisions across Greater Noida, Greater Noida West (Noida Extension), and the YEIDA / Jewar Airport corridor. Every client gets a direct line to Prem — no call centres, no junior agents." },
  { q: "Is Greater Noida a good place to buy property in 2026?", a: "Yes — Greater Noida is one of NCR's fastest-appreciating micro-markets. With Jewar International Airport going live, Film City, the Noida–Greater Noida metro expansion, and YEIDA's industrial corridor, capital appreciation is projected at 10–14% CAGR over the next 5 years. Prem helps clients identify the right sector and asset class for their specific goal — end-use or pure investment." },
  { q: "What does a free consultation with Prem include?", a: "A no-obligation 20-minute call where Prem understands your budget, lifestyle, timeline and goals, then shares a personalised plan — which sectors to consider, which builders to trust, expected appreciation, total cost of ownership, and a realistic shortlist of options. You get expert clarity in one call." },
  { q: "Does Prem charge buyers any consulting fee?", a: "For most direct-developer and pre-launch projects, Prem's fee is paid entirely by the builder — you pay zero. For resale, secondary market, or premium custom advisory, his fees are transparent and shared upfront before any engagement." },
  { q: "Can NRIs buy property in Greater Noida through Prem?", a: "Absolutely. Prem has helped 100+ NRI families across the UAE, Singapore, the US, and the UK buy property in Greater Noida — entirely remotely. The process includes virtual site visits, video walkthroughs, POA-based registration, FEMA-compliant payments, and end-to-end documentation." },
  { q: "Is Prem Arora RERA registered?", a: "Yes — Prem operates with full RERA compliance and only recommends RERA-registered projects. RERA registration number, builder approvals, and project status are shared transparently with every client before any decision." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="gradient-hero text-white relative overflow-hidden min-h-[600px] flex items-center">
        <div className="container-x relative z-10 pt-24 pb-32">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[0.78rem]">★ RERA-verified • 25+ years in Greater Noida • 700+ families guided</span>
          <h1 className="mt-4 text-white text-[clamp(2rem,4.8vw,3.4rem)] font-bold max-w-[820px]">
            Greater Noida&apos;s most trusted <span style={{color:"var(--color-gold)"}}>property consultant</span> — for 25+ years.
          </h1>
          <p className="text-slate-200 text-[1.08rem] max-w-[660px] mt-3">
            Hi, I&apos;m <b className="text-white">Prem Arora</b>. I help families find the right home and investors build wealth in Greater Noida — with honest advice, RERA-verified projects, and end-to-end support from first call to registry.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href={`tel:${site.phone}`} className="btn btn-primary">📞 Call Prem Now</a>
            <a href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener" className="btn" style={{background:"#25D366",color:"#fff"}}>💬 WhatsApp Prem</a>
            <Link href="/contact" className="btn btn-ghost">Book Free Consultation →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-[640px]">
            {[
              ["25+", "Years Experience"],
              ["700+", "Families Guided"],
              ["₹450 Cr+", "Deals Closed"],
              ["4.9★", "Google Rating"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 pl-3" style={{borderColor:"var(--color-gold)"}}>
                <b className="block text-white font-display text-[1.55rem]">{n}</b>
                <span className="text-[#cfd8ea] text-[0.78rem] uppercase tracking-wider">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none" style={{background:"linear-gradient(180deg,transparent,#fff)"}} />
      </section>

      {/* QUICK CTA CARD */}
      <div className="container-x">
        <Reveal className="-mt-16 relative z-20">
          <div className="bg-white rounded-[14px] shadow-[var(--shadow-lg)] p-5 md:p-7 max-w-[980px] mx-auto grid gap-5 md:grid-cols-[1.3fr_1fr] items-center">
            <div>
              <span className="eyebrow">Free 20-min consultation</span>
              <h3 className="font-display text-[1.4rem] md:text-[1.6rem] mt-1 text-[var(--color-navy)]">Talk to Prem — no obligation, no sales pressure.</h3>
              <p className="text-slate-600 mt-2">Share your budget &amp; goal. Prem will personally call back with a clear plan, the right sectors to consider, and an honest market view.</p>
            </div>
            <div className="flex flex-col gap-2.5">
              <a href={`tel:${site.phone}`} className="btn btn-primary btn-block">📞 Call {site.phoneDisplay}</a>
              <a href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener" className="btn btn-block" style={{background:"#25D366",color:"#fff"}}>💬 WhatsApp Now</a>
              <Link href="/contact" className="btn btn-ghost btn-block" style={{borderColor:"var(--color-line)",color:"var(--color-navy)"}}>📅 Book a slot →</Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* TRUST STRIP */}
      <section className="bg-[var(--color-bg-soft)] border-y border-[var(--color-line)] py-7 mt-10">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[["700+","Families Settled"],["25+ Yrs","Local Expertise"],["RERA","Verified Only"],["0%","Buyer Brokerage*"]].map(([n,l])=>(
            <div key={l}><b className="block font-display text-[var(--color-navy)] text-[1.55rem]">{n}</b><span className="text-slate-500 text-[0.85rem]">{l}</span></div>
          ))}
        </div>
      </section>

      {/* HOW PREM HELPS */}
      <section className="py-16">
        <div className="container-x">
          <Reveal className="max-w-[760px]">
            <span className="eyebrow">How Prem helps you</span>
            <h2 className="text-[1.9rem] md:text-[2.2rem] mt-1">Personalised real estate advisory — not a listing portal.</h2>
            <p className="lead mt-2">Whether you&apos;re buying your first home, selling a property, or planning a long-term investment — Prem builds a strategy around <i>your</i> needs, not a builder&apos;s targets.</p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["🏠","Buying a Home","From shortlisting the right sector to negotiating the best price and handling registry — Prem walks with you every step.","Discuss my home goal"],
                ["💼","Selling a Property","Honest valuation, marketing to genuine buyers from his 25-year network, and clean paperwork — sold without stress.","Get a free valuation"],
                ["🌍","NRI Advisory","Virtual site visits, POA-backed registration, FEMA-compliant payments, repatriation guidance — buy from anywhere in the world.","I'm an NRI buyer"],
                ["📈","Investment Strategy","Sector-level appreciation forecasts, ROI modelling, rental yield analysis, and exit timing — built for long-term wealth.","Plan my investment"],
                ["🏦","Home Loan Support","Direct lines with SBI, HDFC, ICICI, LIC HFL. Pre-approval in 48 hrs at the best published rate.","Pre-approve my loan"],
                ["📜","Legal &amp; Registry","RERA verification, title search, sale deed, mutation, possession — every document checked by Prem&apos;s legal panel.","Discuss documentation"],
              ].map(([ico,h,p,cta])=>(
                <div key={h} className="bg-white border border-[var(--color-line)] rounded-[14px] p-6 hover:border-[var(--color-gold)] hover:-translate-y-1 transition-all flex flex-col">
                  <div className="w-12 h-12 rounded-xl grid place-items-center text-[var(--color-gold)] text-xl mb-3" style={{background:"linear-gradient(135deg,var(--color-navy),var(--color-navy-2))"}}>{ico}</div>
                  <h3 className="text-[1.15rem] font-semibold mb-1" dangerouslySetInnerHTML={{__html:h}} />
                  <p className="text-slate-600 flex-1" dangerouslySetInnerHTML={{__html:p}} />
                  <a href={`https://wa.me/${site.whatsapp}?text=Hi%20Prem%20ji%2C%20${encodeURIComponent(cta)}`} target="_blank" rel="noopener" className="mt-3 text-[var(--color-navy)] font-semibold hover:text-[var(--color-gold)]">{cta} →</a>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY PREM */}
      <section className="py-16 bg-[var(--color-bg-soft)]">
        <div className="container-x">
          <Reveal className="text-center max-w-[720px] mx-auto">
            <span className="eyebrow">Why work with Prem Arora</span>
            <h2 className="mt-1">25 years of trust. Every deal, personal.</h2>
            <p className="lead mx-auto mt-2">You won&apos;t be passed to a junior agent. You won&apos;t be chased by a call centre. You get Prem — direct, honest, and accountable.</p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["🏆","Quarter-Century of Local Mastery","Prem has watched Greater Noida grow from farmland in the late 1990s to a metro hub today. He knows every sector, every builder, every pitfall — first-hand."],
                ["🤝","RERA-Verified Recommendations Only","No grey-zone projects, no unapproved layouts. Prem shares the RERA number, approvals, and registry status upfront — before you commit a rupee."],
                ["💰","Builder Network = Better Prices","Direct relationships with 40+ developers unlock pre-launch and corporate-rate pricing typically 8–12% below market."],
                ["🧭","Personal, Not Transactional","Prem closes ~80 deals a year — by choice. Limited intake means every client gets unhurried attention from start to possession."],
                ["🌐","NRI &amp; Out-of-Town Specialist","100+ remote buyers served. Virtual tours, POA registration, FEMA-compliant flows — done routinely, not as a one-off."],
                ["📜","End-to-End Documentation","Sale deed, registry, mutation, possession handover — Prem&apos;s legal panel handles every document so you sleep easy."],
              ].map(([ico,h,p])=>(
                <div key={h} className="bg-white border border-[var(--color-line)] rounded-[14px] p-6 hover:border-[var(--color-gold)] hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-xl grid place-items-center text-[var(--color-gold)] text-xl mb-3" style={{background:"linear-gradient(135deg,var(--color-navy),var(--color-navy-2))"}}>{ico}</div>
                  <h3 className="text-[1.15rem] font-semibold mb-1" dangerouslySetInnerHTML={{__html:h}} />
                  <p className="text-slate-600" dangerouslySetInnerHTML={{__html:p}} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEAD BAND */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <div className="gradient-lead text-white rounded-[18px] p-7 md:p-10 grid gap-7 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="eyebrow" style={{color:"var(--color-gold)"}}>Free 20-min consultation</span>
                <h2 className="text-white mt-1">Tell Prem your goal — get a clear plan.</h2>
                <p className="text-slate-200 mt-2">Share a few details and Prem will personally call back with a tailored shortlist of sectors, builders &amp; budgets that fit your life.</p>
                <ul className="mt-4 text-slate-200 space-y-1.5 list-none p-0">
                  <li>✓ 100% free, no obligation</li>
                  <li>✓ Personal call from Prem — not an assistant</li>
                  <li>✓ Honest pros, cons &amp; price expectations</li>
                  <li>✓ Best-price negotiation handled by Prem</li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-5">
                  <a href={`tel:${site.phone}`} className="btn btn-primary">📞 Call {site.phoneDisplay}</a>
                  <a href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener" className="btn" style={{background:"#25D366",color:"#fff"}}>💬 WhatsApp</a>
                </div>
              </div>
              <LeadForm id="home-lead" interest="Home — Free Consultation with Prem" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-[var(--color-bg-soft)]">
        <div className="container-x">
          <Reveal className="text-center max-w-[680px] mx-auto">
            <span className="eyebrow">Client Stories</span>
            <h2 className="mt-1">Real families. Real homes. Real Greater Noida.</h2>
          </Reveal>
          <Reveal className="mt-10">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {q:"Prem ji helped us find a 3 BHK in Sector Chi-V within our budget. He negotiated ₹4 lakhs off the listed price and handled the entire registry. We moved in within 45 days. After 22 years, his name still means trust in our family.", n:"Rohit & Priya Verma", m:"Bought 3 BHK • Sector Chi-V", img:"https://i.pravatar.cc/120?img=12"},
                {q:"I was an NRI buyer based in Dubai. Prem did virtual site visits, video walkthroughs, and managed everything on WhatsApp. I bought a 4 BHK without flying down once. Truly the most trustworthy advisor I've worked with.", n:"Anand Kapoor", m:"NRI Buyer • Jaypee Greens", img:"https://i.pravatar.cc/120?img=33"},
                {q:"I wanted a YEIDA plot near the upcoming airport. Prem explained the master plan, ROI projections and risks honestly — including what NOT to buy. My plot has appreciated 22% in 14 months. Honest advice is rare; he gives it.", n:"Meera Singh", m:"Investor • YEIDA Plot", img:"https://i.pravatar.cc/120?img=47"},
              ].map(t=>(
                <div key={t.n} className="bg-white border border-[var(--color-line)] rounded-[14px] p-6 relative">
                  <span aria-hidden className="absolute -top-4 left-3 text-[5rem] leading-none font-display" style={{color:"var(--color-gold)"}}>&ldquo;</span>
                  <p className="italic text-slate-600">{t.q}</p>
                  <div className="flex items-center gap-3 mt-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src={t.img} className="w-11 h-11 rounded-full object-cover" />
                    <div>
                      <b className="block text-[var(--color-navy)] text-[0.95rem]">{t.n}</b>
                      <span className="text-slate-500 text-[0.82rem]">{t.m}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEO GUIDES */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Free Guides by Prem</span>
            <h2 className="mt-1">Greater Noida property knowledge — straight from 25 years on the ground.</h2>
          </Reveal>
          <Reveal className="mt-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["🏠","2 BHK under ₹50 L","Affordable ready-to-move 2 BHK flats in Greater Noida & Extension — sector-by-sector.","/seo/2-bhk-flats-greater-noida-under-50-lakhs"],
                ["💎","Luxury Apartments","Premium 3 & 4 BHK residences in Greater Noida — top builders, hidden gems & negotiation tips.","/seo/luxury-apartments-greater-noida"],
                ["🔑","Ready-to-Move Flats","OC-received projects in Greater Noida West (Noida Extension). Move in this month.","/seo/ready-to-move-flats-greater-noida-extension"],
                ["📈","Invest in 2026","Top high-ROI sectors, Jewar airport impact &amp; investor&apos;s playbook.","/seo/invest-greater-noida-real-estate-2026"],
                ["✈️","Property near Jewar Airport","Best YEIDA sectors, plot vs apartment, expected appreciation.","/seo/property-near-jewar-airport-greater-noida"],
                ["🌍","NRI Property Advisor","Buy remotely with virtual tours, POA registration &amp; FEMA-compliant flows.","/seo/nri-property-consultant-greater-noida"],
                ["📍","YEIDA Plots Guide","Rates, allotment, top sectors &amp; expected ROI from Yamuna Authority plots.","/seo/yeida-plots-greater-noida"],
                ["🏢","3 BHK Greater Noida West","Best sectors, builders &amp; prices for 3 BHK in Noida Extension.","/seo/3-bhk-flats-greater-noida-west"],
                ["🗺️","Best Sectors to Buy","Sector-by-sector comparison: end-use, investment &amp; rental.","/seo/best-sectors-greater-noida-to-buy-property"],
                ["💼","Sell Your Property","Honest valuation, genuine buyer network &amp; 30-day closures.","/seo/sell-property-greater-noida"],
                ["🏦","Home Loan Help","Pre-approval in 48 hrs, lowest rates from SBI/HDFC/ICICI.","/seo/home-loan-greater-noida"],
                ["📊","Market Trends 2026","Prices, demand, 5-year outlook &amp; sector winners.","/seo/greater-noida-real-estate-market-trends"],
                ["🏆","Best Property Dealers","What separates the best dealers in Greater Noida.","/seo/best-property-dealers-greater-noida"],
              ].map(([ico,h,p,href])=>(
                <Link key={h} href={href} className="bg-white border border-[var(--color-line)] rounded-[14px] p-6 hover:border-[var(--color-gold)] hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-xl grid place-items-center text-[var(--color-gold)] text-xl mb-3" style={{background:"linear-gradient(135deg,var(--color-navy),var(--color-navy-2))"}}>{ico}</div>
                  <h3 className="text-[1.1rem] font-semibold mb-1" dangerouslySetInnerHTML={{__html:h}} />
                  <p className="text-slate-600 text-[0.92rem]" dangerouslySetInnerHTML={{__html:p}} />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[var(--color-bg-soft)]">
        <div className="container-x max-w-[900px]">
          <Reveal className="text-center">
            <span className="eyebrow">FAQs</span>
            <h2 className="mt-1">Working with Prem Arora — answered</h2>
          </Reveal>
          <Reveal className="mt-8"><FAQ items={homeFaqs} /></Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16">
        <div className="container-x">
          <div className="rounded-[18px] p-8 md:p-12 text-white text-center" style={{background:"linear-gradient(135deg,var(--color-navy),var(--color-navy-2))"}}>
            <h2 className="text-white">Ready for an honest conversation about your property?</h2>
            <p className="text-slate-200 max-w-[640px] mx-auto mt-2">One call with Prem can save you lakhs and months of confusion. Free, no-obligation, and you stay in full control.</p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a href={`tel:${site.phone}`} className="btn btn-primary">📞 Call Prem Now</a>
              <a href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener" className="btn" style={{background:"#25D366",color:"#fff"}}>💬 WhatsApp</a>
              <Link href="/contact" className="btn" style={{background:"#fff",color:"var(--color-navy)"}}>📅 Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
