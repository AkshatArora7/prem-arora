import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { site } from "@/lib/site";

const homeFaqs = [
  { q: "Who is Prem Arora and why work with him?", a: "Prem Arora is one of Greater Noida's most experienced industrial and land consultants, with 25+ years of on-ground expertise across GNIDA, YEIDA, UPSIDA and private freehold parcels. He has personally closed clean-title transactions for manufacturers, warehousing operators, NRIs and investors. Every client gets a direct line to Prem — no call centres, no junior agents." },
  { q: "What kind of properties does Prem handle?", a: "Industrial plots, warehousing and logistics land, factory-ready built-up sheds, commercial plots, and private freehold land with completed CLU. No residential apartments, no BHK flats. The focus is on income-generating and investment-grade land with full legal paperwork." },
  { q: "Is Greater Noida a good time for industrial land in 2026?", a: "Yes — Jewar Airport, the Eastern Dedicated Freight Corridor and the PLI manufacturing push are converging here. GNIDA Ecotech resale has compounded ~17% per year over the last 5 years; YEIDA industrial belt has run faster. For 5+ year horizons, the fundamentals remain among the strongest in NCR." },
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

      {/* HERO */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="container-x relative z-10 pt-20 pb-28 md:pt-24 md:pb-32 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-gold)]/90 font-semibold">
              <span className="w-6 h-px bg-[var(--color-gold)]/60" />
              Greater Noida · Since 1999
            </span>
            <h1 className="mt-5 text-white font-display text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.12] font-semibold max-w-[720px] tracking-tight">
              Industrial &amp; land advisory,<br className="hidden sm:block" />
              done quietly and correctly.
            </h1>
            <p className="text-slate-300 text-[1.02rem] leading-relaxed max-w-[560px] mt-5">
              I&apos;m <span className="text-white">Prem Arora</span>. For 25+ years I&apos;ve helped manufacturers, NRIs and investors acquire clean-title plots across GNIDA, YEIDA, UPSIDA and private freehold — with end-to-end legal due diligence.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-7">
              <a href={`tel:${site.phone}`} className="btn btn-primary">Call Prem</a>
              <a href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener" className="btn" style={{background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,.25)"}}>WhatsApp</a>
              <Link href="/contact" className="btn" style={{background:"transparent",color:"var(--color-gold)",border:"1px solid transparent"}}>Book a free consultation →</Link>
            </div>
            <p className="text-slate-400 text-[0.78rem] mt-4">
              <span className="text-[var(--color-gold)]">✓ Always free</span> · No buyer-side fees, ever · No obligation
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 max-w-[640px] text-slate-300">
              {[
                ["25+", "Years"],
                ["500+", "Deals closed"],
                ["₹600 Cr+", "Land transacted"],
                ["100%", "Clean title"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-white font-display text-[1.35rem] leading-none">{n}</div>
                  <div className="text-[0.72rem] uppercase tracking-[0.14em] text-slate-400 mt-1.5">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right credentials card */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-6 rounded-[24px] bg-[var(--color-gold)]/5 blur-2xl pointer-events-none" />
            <div className="relative rounded-[18px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-[var(--color-gold)]/50 grid place-items-center font-display text-[var(--color-gold)] text-xl">PA</div>
                <div>
                  <div className="text-white font-display text-[1.15rem] leading-tight">Prem Arora</div>
                  <div className="text-slate-400 text-[0.78rem] tracking-[0.12em] uppercase mt-1">Industrial &amp; Land Consultant</div>
                </div>
              </div>

              <hr className="border-white/10 my-6" />

              <ul className="space-y-3.5 text-[0.92rem] text-slate-300">
                <li className="flex gap-3"><span className="text-[var(--color-gold)] mt-0.5">▸</span><span><span className="text-white">GNIDA, YEIDA &amp; UPSIDA</span> — direct allotment &amp; resale</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-gold)] mt-0.5">▸</span><span><span className="text-white">Jewar Airport corridor</span> — front-line inventory</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-gold)] mt-0.5">▸</span><span><span className="text-white">Full legal due diligence</span> — title, mutation, lease, CLU</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-gold)] mt-0.5">▸</span><span><span className="text-white">NRI advisory</span> — POA, FEMA, repatriation</span></li>
              </ul>

              <hr className="border-white/10 my-6" />

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">Direct line</div>
                  <a href={`tel:${site.phone}`} className="text-white font-display text-[1.05rem] mt-1 inline-block hover:text-[var(--color-gold)] transition-colors">{site.phoneDisplay}</a>
                </div>
                <a href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener" className="text-[var(--color-gold)] text-[0.88rem] font-semibold hover:underline">WhatsApp →</a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none" style={{background:"linear-gradient(180deg,transparent,#fff)"}} />
      </section>

      {/* QUICK CTA CARD */}
      <div className="container-x">
        <Reveal className="-mt-16 relative z-20">
          <div className="bg-white rounded-[14px] shadow-[var(--shadow-lg)] p-5 md:p-7 max-w-[980px] mx-auto grid gap-5 md:grid-cols-[1.3fr_1fr] items-center">
            <div>
              <span className="eyebrow">Free 20-min consultation · No fees, ever</span>
              <h3 className="font-display text-[1.4rem] md:text-[1.6rem] mt-1 text-[var(--color-navy)]">Talk to Prem — no obligation, no sales pressure.</h3>
              <p className="text-slate-600 mt-2">Share your budget &amp; goal. Prem will personally call back within 15 minutes with a clear plan, the right sectors to consider, and an honest market view. <b className="text-[var(--color-navy)]">100% free for buyers</b> — Prem is paid by the seller / developer side only.</p>
            </div>
            <div className="flex flex-col gap-2.5">
              <a href={`tel:${site.phone}`} className="btn btn-primary btn-block">📞 Call {site.phoneDisplay}</a>
              <a href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener" className="btn btn-block" style={{background:"#25D366",color:"#fff"}}>💬 WhatsApp Now</a>
              <Link href="/contact" className="btn btn-ghost btn-block" style={{borderColor:"var(--color-line)",color:"var(--color-navy)"}}>📅 Book a free slot →</Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* TRUST STRIP */}
      <section className="bg-[var(--color-bg-soft)] border-y border-[var(--color-line)] py-7 mt-10">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[["500+","Industrial Deals"],["25+ Yrs","Local Expertise"],["100%","Clean-Title Only"],["Flat","Advisory Fee*"]].map(([n,l])=>(
            <div key={l}><b className="block font-display text-[var(--color-navy)] text-[1.55rem]">{n}</b><span className="text-slate-500 text-[0.85rem]">{l}</span></div>
          ))}
        </div>
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
                ["🏭","Industrial Plots","GNIDA Ecotech, UPSIDA Surajpur/Kasna and YEIDA industrial sectors — allotment and resale, sized to your operating profile.","Discuss industrial plot"],
                ["📦","Warehousing &amp; Logistics Land","Grade-A warehouse-grade plots with truck-grade approach roads, ready power and water — for 3PL, e-comm and cold chain.","Find warehouse land"],
                ["🏗️","Factory Setup Advisory","From land to operational unit — sector pre-qualification, power and water sanction, building plan, fire NOC, environmental clearance.","Plan factory setup"],
                ["📜","Legal Due Diligence","Title chain, allotment file, encumbrance, litigation search, Section 143 CLU, building plan — every paper reviewed before token.","Get a paperwork audit"],
                ["🏛️","GNIDA / YEIDA Allotment","Scheme notification tracking, EMD planning, draw &amp; auction support, possession and project-implementation tracking.","Apply for allotment"],
                ["🌍","NRI Industrial Advisory","FEMA-compliant purchase, NRE/NRO routing, POA execution, GNIDA/YEIDA transfer and remote asset management — done routinely.","I'm an NRI buyer"],
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
                ["🏆","Quarter-Century of Local Mastery","Prem has watched Greater Noida grow from farmland to an industrial powerhouse. He knows every Ecotech sector, every authority counter, every paperwork pitfall — first-hand."],
                ["📜","Paperwork-First, Always","No grey-zone deals. Allotment chain, lease deed, No-Dues, EC, litigation search and Section 143 CLU verified before you commit a single rupee."],
                ["🤝","Flat Advisory Fee, Not Commission","Prem charges a flat advisory fee — so the incentive is to find the right plot for your operating profile, not the most expensive one available."],
                ["🧭","Personal, Not Transactional","Prem takes on a limited number of engagements each year — by choice. Every client gets unhurried attention from shortlist to mutation."],
                ["🌐","NRI &amp; Out-of-Town Specialist","FEMA-compliant routes, POA execution, GNIDA/YEIDA transfer and remote asset management — done routinely for NRI manufacturers and investors."],
                ["🏗️","End-to-End — Land to Operations","Plot selection, registration, mutation, building plan, power and water sanction, environmental and fire NOCs — coordinated through one accountable point of contact."],
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
            <h2 className="mt-1">Industrial &amp; land knowledge — 25 years on the ground.</h2>
          </Reveal>
          <Reveal className="mt-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["🏭","Industrial Plots Guide","GNIDA, UPSIDA & Ecotech industrial plots — pricing, paperwork & resale.","/seo/industrial-plots-greater-noida"],
                ["🛣️","Yamuna Expressway / YEIDA","Industrial land along the Yamuna Expressway — the Jewar belt opportunity.","/seo/industrial-land-yamuna-expressway-yeida"],
                ["✈️","Land Near Jewar Airport","Cargo, logistics &amp; MRO — best pockets within 20 km of Jewar.","/seo/industrial-land-jewar-airport"],
                ["🗺️","Ecotech Sectors Map","Ecotech 1 to 21 — plot sizes, infrastructure &amp; price bands.","/seo/ecotech-industrial-sectors-greater-noida"],
                ["📦","Warehouse &amp; Logistics","Grade-A warehouse land — 3PL, cold chain, e-comm fulfilment.","/seo/warehouse-logistics-land-greater-noida"],
                ["🏢","Commercial Plots","Mixed-use, SCO retail and office plots — sectors that actually rent.","/seo/commercial-plots-greater-noida"],
                ["⚖️","Freehold vs Leasehold","Which tenure suits your use case &amp; exit horizon — full comparison.","/seo/freehold-vs-leasehold-land-greater-noida"],
                ["📜","Legal Due Diligence","The complete pre-purchase paperwork checklist for industrial land.","/seo/legal-due-diligence-industrial-land-greater-noida"],
                ["🔎","Title Verification — UP","Bhulekh, Khatauni, Khasra, Section 143 — UP land records explained.","/seo/title-verification-land-uttar-pradesh"],
                ["🏛️","GNIDA Allotment","How the GNIDA industrial scheme works — eligibility, EMD &amp; draw.","/seo/gnida-plot-allotment-process"],
                ["🌍","NRI Land Buyer Guide","FEMA, NRE/NRO, POA &amp; GNIDA/YEIDA transfer for NRIs.","/seo/nri-buy-industrial-land-greater-noida"],
                ["🏗️","Factory Setup Land","From plot to operational factory — approvals stack &amp; workforce.","/seo/factory-setup-land-greater-noida"],
                ["📊","Market Trends 2026","Industrial land prices, demand drivers &amp; the 5-year outlook.","/seo/industrial-real-estate-market-trends-greater-noida-2026"],
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
