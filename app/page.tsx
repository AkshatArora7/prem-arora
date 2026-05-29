import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { site } from "@/lib/site";

const homeFaqs = [
  { q: "Who is Prem Arora and why work with him?", a: "Prem Arora is one of Greater Noida's most experienced industrial and land consultants, with 28+ years of on-ground expertise across GNIDA, YEIDA, UPSIDA and private freehold parcels. He has personally closed clean-title transactions for manufacturers, warehousing operators, NRIs and investors. Every client gets a direct line to Prem — no call centres, no junior agents." },
  { q: "What kind of properties does Prem handle?", a: "Industrial plots, warehousing and logistics land, factory-ready built-up sheds, commercial plots, and private freehold land with completed CLU. No residential apartments, no BHK flats. The focus is on income-generating and investment-grade land with full legal paperwork." },
  { q: "Is Greater Noida a good time for industrial land in 2026?", a: "Yes — Jewar Airport, the Eastern Dedicated Freight Corridor and the PLI manufacturing push are converging here. GNIDA Ecotech resale has compounded ~17% per year over the last 28 years; YEIDA industrial belt has run faster. For 5+ year horizons, the fundamentals remain among the strongest in NCR." },
  { q: "Does Prem help with legal due diligence?", a: "Yes — every shortlist comes with a paperwork score. Allotment chain, lease deed, No-Dues Certificate, Encumbrance Certificate, litigation search, Section 143 CLU, building plan, environmental and fire NOCs — all checked before any non-refundable rupee is paid." },
  { q: "Can NRIs buy industrial land in Greater Noida?", a: "Absolutely. Under general FEMA permission, NRIs can acquire industrial and commercial property in India. Prem has handled NRI transactions end-to-end — including POA execution, GNIDA/YEIDA transfer, remittance routing through NRE/NRO, TDS planning and post-purchase asset management." },
  { q: "Does Prem charge a fee?", a: "Prem works on a flat advisory model, not a percentage commission — so the incentive is to find the right plot, not the most expensive one. Fee structure is shared transparently upfront before any engagement begins." },
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

      {/* HERO — warm editorial */}
      <section className="relative overflow-hidden" style={{background:"linear-gradient(180deg,#efe9dc 0%,#e2d7c0 55%,#cdbb9b 100%)"}}>
        {/* soft landscape silhouette */}
        <svg className="absolute inset-x-0 bottom-0 w-full opacity-[0.18] pointer-events-none" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,160 C220,80 380,180 600,120 C820,60 1000,150 1200,100 C1320,72 1400,110 1440,90 L1440,200 L0,200 Z" fill="#7a6a55"/>
        </svg>

        <div className="container-x relative z-10 pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">

            {/* LEFT — editorial display */}
            <div className="relative pt-4">
              <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.92] tracking-[-0.025em] text-[#2a2218]">
                THE RIGHT<br/>
                <span className="block">PLOT.</span>
                <em className="block not-italic text-[#8a7a62] mt-2">Done right.</em>
              </h1>
              <p className="text-[#7a6a55] italic mt-7 text-[0.95rem] tracking-wide">/ Clean title. Greater Noida. Since 1998. /</p>

              <div className="mt-9 flex items-center gap-5">
                <a href={`tel:${site.phone}`} className="inline-flex items-center gap-3 bg-[#2a2218] text-white px-9 py-4 rounded-full text-[0.88rem] font-medium tracking-[0.12em] uppercase hover:bg-[#3d3325] transition-colors shadow-[0_10px_30px_-10px_rgba(42,34,24,0.5)]">
                  Talk to Prem
                </a>
                <Link href="/contact" className="text-[#2a2218] text-[0.85rem] font-semibold tracking-[0.14em] uppercase underline underline-offset-4 decoration-[#2a2218]/30 hover:decoration-[#2a2218] transition">
                  Book a free slot
                </Link>
              </div>
            </div>

            {/* RIGHT — photo card with floating chips */}
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-[28px] p-5 md:p-6 shadow-[0_30px_80px_-25px_rgba(75,55,35,0.45)]">
                <div className="flex flex-wrap gap-2 mb-5">
                  <Link href="/seo/gnida-plot-allotment-process" className="px-4 py-1.5 rounded-full bg-white border border-[#e5dccb] text-[0.74rem] text-[#3a2e22] font-medium hover:bg-[#f5efe2] hover:border-[#c9b890] transition">GNIDA</Link>
                  <Link href="/seo/industrial-land-yamuna-expressway-yeida" className="px-4 py-1.5 rounded-full bg-white border border-[#e5dccb] text-[0.74rem] text-[#3a2e22] font-medium hover:bg-[#f5efe2] hover:border-[#c9b890] transition">YEIDA</Link>
                  <Link href="/seo/industrial-plots-greater-noida" className="px-4 py-1.5 rounded-full bg-[#2a2218] text-white text-[0.74rem] font-medium hover:bg-[#3d3325] transition">UPSIDA</Link>
                </div>
                <h3 className="font-display text-[1.5rem] md:text-[1.75rem] leading-[1.1] text-[#2a2218]">
                  End-to-end legal<br/>due diligence.
                </h3>
                <p className="text-[#7a6a55] text-[0.88rem] mt-2">Title chain, mutation, lease, CLU.</p>
                <div className="relative mt-5 rounded-[18px] overflow-hidden aspect-[16/11] bg-[#d4c4a8]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hero-skyline.jpg"
                    alt="Greater Noida skyline at dusk"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating "site visit" badge */}
              <div className="hidden sm:flex absolute -right-3 md:-right-6 top-[42%] bg-white rounded-2xl pl-2 pr-4 py-2 shadow-[0_12px_30px_-10px_rgba(75,55,35,0.35)] items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#2a2218] grid place-items-center text-white text-[0.7rem]">▶</div>
                <div className="leading-tight">
                  <div className="text-[0.62rem] uppercase tracking-[0.18em] text-[#7a6a55]">Free</div>
                  <div className="text-[0.78rem] font-semibold text-[#2a2218]">Site visit</div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM 2-up trust strip */}
          <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-5">
            {/* Tan paperwork card */}
            <div className="bg-[#a89378] rounded-[24px] p-6 text-white flex items-center gap-5 overflow-hidden relative">
              <div className="flex-1 min-w-0">
                <div className="font-display text-[1.45rem] md:text-[1.7rem] leading-[1.1]">100% clean<br/>paperwork.</div>
                <p className="text-white/75 text-[0.82rem] mt-2">Title verified before you commit a rupee.</p>
              </div>
              <div className="w-28 h-24 md:w-36 md:h-28 rounded-[14px] overflow-hidden flex-shrink-0 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80"
                  alt="Legal documents being signed"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Testimonials + CTA */}
            <div className="flex items-center gap-5 md:gap-7 px-2">
              <div className="flex -space-x-3 flex-shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-[#efe9dc] bg-[#7a6a55] grid place-items-center text-white text-[0.78rem] font-semibold">RK</div>
                <div className="w-12 h-12 rounded-full border-2 border-[#efe9dc] bg-[#a89378] grid place-items-center text-white text-[0.78rem] font-semibold">SP</div>
                <div className="w-12 h-12 rounded-full border-2 border-[#efe9dc] bg-[#2a2218] grid place-items-center text-white text-[0.78rem] font-semibold">+</div>
              </div>
              <div className="border-l border-[#7a6a55]/30 pl-4 md:pl-5">
                <div className="font-display italic text-[1.6rem] text-[#2a2218] leading-none">500+</div>
                <div className="text-[0.7rem] text-[#7a6a55] uppercase tracking-[0.16em] mt-1">deals closed</div>
              </div>
              <div className="ml-auto text-right max-w-[260px]">
                <div className="font-display text-[0.82rem] md:text-[0.9rem] uppercase tracking-[0.1em] text-[#2a2218] leading-[1.3]">We handle legal, mutation &amp; possession</div>
                <Link href="/about" className="text-[0.72rem] text-[#2a2218] underline underline-offset-4 tracking-[0.14em] uppercase mt-2.5 inline-block font-semibold hover:text-[#7a6a55] transition">Learn more →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* smooth fade into the next white section */}
        <div className="absolute bottom-0 left-0 right-0 h-[60px] pointer-events-none" style={{background:"linear-gradient(180deg,transparent,#ffffff)"}} />
      </section>

      {/* HOW PREM HELPS */}
      <section className="py-16">
        <div className="container-x">
          <Reveal className="max-w-[760px]">
            <span className="eyebrow">How Prem helps you</span>
            <h2 className="text-[1.9rem] md:text-[2.2rem] mt-1">Industrial &amp; land advisory — strategic, paperwork-first, personal.</h2>
            <p className="lead mt-2">Whether you&apos;re setting up a factory, building a warehouse, expanding your manufacturing footprint, or investing in land — Prem builds a strategy around <i>your</i> operating needs and exit horizon, not a seller&apos;s pressure.</p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Industrial Plots","GNIDA Ecotech, UPSIDA Surajpur/Kasna and YEIDA industrial sectors — allotment and resale, sized to your operating profile.","Discuss industrial plot"],
                ["Warehousing &amp; Logistics Land","Grade-A warehouse-grade plots with truck-grade approach roads, ready power and water — for 3PL, e-comm and cold chain.","Find warehouse land"],
                ["Factory Setup Advisory","From land to operational unit — sector pre-qualification, power and water sanction, building plan, fire NOC, environmental clearance.","Plan factory setup"],
                ["Legal Due Diligence","Title chain, allotment file, encumbrance, litigation search, Section 143 CLU, building plan — every paper reviewed before token.","Get a paperwork audit"],
                ["GNIDA / YEIDA Allotment","Scheme notification tracking, EMD planning, draw &amp; auction support, possession and project-implementation tracking.","Apply for allotment"],
                ["NRI Industrial Advisory","FEMA-compliant purchase, NRE/NRO routing, POA execution, GNIDA/YEIDA transfer and remote asset management — done routinely.","I'm an NRI buyer"],
              ].map(([h,p,cta], i)=>(
                <div key={h} className="bg-white border border-[var(--color-line)] rounded-[14px] p-6 hover:border-[var(--color-navy)] hover:-translate-y-1 transition-all flex flex-col">
                  <span className="text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-muted)] mb-3">{String(i+1).padStart(2,"0")}</span>
                  <h3 className="text-[1.15rem] font-display mb-2 text-[var(--color-navy)]" dangerouslySetInnerHTML={{__html:h}} />
                  <p className="text-[var(--color-muted)] flex-1 text-[0.95rem] leading-relaxed" dangerouslySetInnerHTML={{__html:p}} />
                  <a href={`https://wa.me/${site.whatsapp}?text=Hi%20Prem%20ji%2C%20${encodeURIComponent(cta)}`} target="_blank" rel="noopener" className="mt-4 text-[var(--color-navy)] font-medium text-[0.88rem] tracking-wide hover:text-[var(--color-muted)] transition border-b border-[var(--color-line)] hover:border-[var(--color-navy)] pb-0.5 self-start">{cta} →</a>
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
            <h2 className="mt-1">28 years of trust. Every deal, personal.</h2>
            <p className="lead mx-auto mt-2">You won&apos;t be passed to a junior agent. You won&apos;t be chased by a call centre. You get Prem — direct, honest, and accountable.</p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Quarter-Century of Local Mastery","Prem has watched Greater Noida grow from farmland to an industrial powerhouse. He knows every Ecotech sector, every authority counter, every paperwork pitfall — first-hand."],
                ["Paperwork-First, Always","No grey-zone deals. Allotment chain, lease deed, No-Dues, EC, litigation search and Section 143 CLU verified before you commit a single rupee."],
                ["Flat Advisory Fee, Not Commission","Prem charges a flat advisory fee — so the incentive is to find the right plot for your operating profile, not the most expensive one available."],
                ["Personal, Not Transactional","Prem takes on a limited number of engagements each year — by choice. Every client gets unhurried attention from shortlist to mutation."],
                ["NRI &amp; Out-of-Town Specialist","FEMA-compliant routes, POA execution, GNIDA/YEIDA transfer and remote asset management — done routinely for NRI manufacturers and investors."],
                ["End-to-End — Land to Operations","Plot selection, registration, mutation, building plan, power and water sanction, environmental and fire NOCs — coordinated through one accountable point of contact."],
              ].map(([h,p], i)=>(
                <div key={h} className="bg-white border border-[var(--color-line)] rounded-[14px] p-6 hover:border-[var(--color-navy)] hover:-translate-y-1 transition-all">
                  <span className="text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-muted)] mb-3 block">{String(i+1).padStart(2,"0")}</span>
                  <h3 className="text-[1.15rem] font-display mb-2 text-[var(--color-navy)]" dangerouslySetInnerHTML={{__html:h}} />
                  <p className="text-[var(--color-muted)] text-[0.95rem] leading-relaxed" dangerouslySetInnerHTML={{__html:p}} />
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
                  <li>— 100% free, no obligation</li>
                  <li>— Personal call from Prem, not an assistant</li>
                  <li>— Honest pros, cons &amp; price expectations</li>
                  <li>— Best-price negotiation handled by Prem</li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-5">
                  <a href={`tel:${site.phone}`} className="btn btn-primary">Call {site.phoneDisplay}</a>
                  <a href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener" className="btn" style={{background:"#25D366",color:"#fff"}}>WhatsApp</a>
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
            <h2 className="mt-1">Real businesses. Real factories. Real Greater Noida.</h2>
          </Reveal>
          <Reveal className="mt-10">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {q:"Prem ji helped us shortlist three GNIDA Ecotech plots, ran the title diligence and negotiated ₹18 lakhs off the asking. Our 4,500 sq.m. unit was operational within 11 months. After two decades in the trade, his word still carries weight at the authority counter.", n:"Rohit Verma", m:"Manufacturer • Ecotech 11", img:"https://i.pravatar.cc/120?img=12"},
                {q:"I'm an NRI based in Dubai. Prem managed end-to-end — POA, GNIDA transfer, instalments, mutation — all over WhatsApp and video calls. I bought my YEIDA plot without flying down once. Most trustworthy advisor I've worked with in India.", n:"Anand Kapoor", m:"NRI Investor • YEIDA Sector 32", img:"https://i.pravatar.cc/120?img=33"},
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
            <h2 className="mt-1">Industrial &amp; land knowledge — 28 years on the ground.</h2>
          </Reveal>
          <Reveal className="mt-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Industrial Plots Guide","GNIDA, UPSIDA & Ecotech industrial plots — pricing, paperwork & resale.","/seo/industrial-plots-greater-noida"],
                ["Yamuna Expressway / YEIDA","Industrial land along the Yamuna Expressway — the Jewar belt opportunity.","/seo/industrial-land-yamuna-expressway-yeida"],
                ["Land Near Jewar Airport","Cargo, logistics &amp; MRO — best pockets within 20 km of Jewar.","/seo/industrial-land-jewar-airport"],
                ["Ecotech Sectors Map","Ecotech 1 to 21 — plot sizes, infrastructure &amp; price bands.","/seo/ecotech-industrial-sectors-greater-noida"],
                ["Warehouse &amp; Logistics","Grade-A warehouse land — 3PL, cold chain, e-comm fulfilment.","/seo/warehouse-logistics-land-greater-noida"],
                ["Commercial Plots","Mixed-use, SCO retail and office plots — sectors that actually rent.","/seo/commercial-plots-greater-noida"],
                ["Freehold vs Leasehold","Which tenure suits your use case &amp; exit horizon — full comparison.","/seo/freehold-vs-leasehold-land-greater-noida"],
                ["Legal Due Diligence","The complete pre-purchase paperwork checklist for industrial land.","/seo/legal-due-diligence-industrial-land-greater-noida"],
                ["Title Verification — UP","Bhulekh, Khatauni, Khasra, Section 143 — UP land records explained.","/seo/title-verification-land-uttar-pradesh"],
                ["GNIDA Allotment","How the GNIDA industrial scheme works — eligibility, EMD &amp; draw.","/seo/gnida-plot-allotment-process"],
                ["NRI Land Buyer Guide","FEMA, NRE/NRO, POA &amp; GNIDA/YEIDA transfer for NRIs.","/seo/nri-buy-industrial-land-greater-noida"],
                ["Factory Setup Land","From plot to operational factory — approvals stack &amp; workforce.","/seo/factory-setup-land-greater-noida"],
                ["Market Trends 2026","Industrial land prices, demand drivers &amp; the 5-year outlook.","/seo/industrial-real-estate-market-trends-greater-noida-2026"],
              ].map(([h,p,href])=>(
                <Link key={h} href={href} className="bg-white border border-[var(--color-line)] rounded-[14px] p-6 hover:border-[var(--color-navy)] hover:-translate-y-1 transition-all group block">
                  <h3 className="text-[1.05rem] font-display mb-2 text-[var(--color-navy)] group-hover:text-[var(--color-navy-2)]" dangerouslySetInnerHTML={{__html:h}} />
                  <p className="text-[var(--color-muted)] text-[0.92rem] leading-relaxed" dangerouslySetInnerHTML={{__html:p}} />
                  <span className="mt-3 inline-block text-[0.8rem] tracking-[0.14em] uppercase text-[var(--color-navy)] border-b border-[var(--color-line)] group-hover:border-[var(--color-navy)] pb-0.5">Read guide →</span>
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
              <a href={`tel:${site.phone}`} className="btn btn-primary">Call Prem Now</a>
              <a href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener" className="btn" style={{background:"#25D366",color:"#fff"}}>WhatsApp</a>
              <Link href="/contact" className="btn" style={{background:"#fff",color:"var(--color-navy)"}}>Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
