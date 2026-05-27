import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Prem Arora — Greater Noida Industrial & Land Consultant",
  description: "Book a free industrial land consultation with Prem Arora. Call, WhatsApp, or fill the form — Prem personally responds within 15 minutes. Office in Greater Noida.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Prem Arora — Free Industrial Land Consultation in Greater Noida",
    description: "25+ years of experience. Free, no-obligation consultation on industrial plots, warehouse land, GNIDA & YEIDA. Call, WhatsApp or book a slot directly with Prem.",
    type: "website",
    url: `${site.url}/contact`,
    siteName: site.brand,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Contact Prem Arora — Greater Noida Industrial Land", description: "Free 20-minute industrial land consultation. 25+ years experience." },
};

export default function Contact() {
  return (
    <>
      <section className="gradient-page text-white py-16">
        <div className="container-x">
          <div className="text-[0.85rem] text-slate-300 mb-2"><Link href="/" className="hover:text-[var(--color-gold)]">Home</Link> / Contact</div>
          <h1 className="text-white">Let&apos;s find your Greater Noida industrial land</h1>
          <p className="text-slate-200 max-w-[720px] mt-2">Tell us about your factory, warehouse or investment plan — Prem will personally call you back within 15 minutes — or reach us directly on phone or WhatsApp.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-10">
          <div>
            <h2>Get in touch</h2>
            <p className="text-slate-600">We&apos;re open 9 AM to 9 PM, all 7 days. Walk in to our Greater Noida office, or reach us on call/WhatsApp.</p>

            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <a className="bg-white border border-[var(--color-line)] rounded-[12px] p-4 hover:border-[var(--color-gold)]" href={`tel:${site.phone}`}>
                <div className="text-2xl">📞</div>
                <b className="block text-[var(--color-navy)] mt-1">Call us</b>
                <span className="text-slate-600 text-[0.92rem]">{site.phoneDisplay}</span>
              </a>
              <a className="bg-white border border-[var(--color-line)] rounded-[12px] p-4 hover:border-[var(--color-gold)]" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">
                <div className="text-2xl">💬</div>
                <b className="block text-[var(--color-navy)] mt-1">WhatsApp</b>
                <span className="text-slate-600 text-[0.92rem]">Instant chat — usually replies in 5 min</span>
              </a>
              <a className="bg-white border border-[var(--color-line)] rounded-[12px] p-4 hover:border-[var(--color-gold)]" href={`mailto:${site.email}`}>
                <div className="text-2xl">✉</div>
                <b className="block text-[var(--color-navy)] mt-1">Email</b>
                <span className="text-slate-600 text-[0.92rem]">{site.email}</span>
              </a>
              <div className="bg-white border border-[var(--color-line)] rounded-[12px] p-4">
                <div className="text-2xl">📍</div>
                <b className="block text-[var(--color-navy)] mt-1">Office</b>
                <span className="text-slate-600 text-[0.92rem]">{site.address}</span>
              </div>
            </div>

            <div className="mt-6 rounded-[12px] overflow-hidden border border-[var(--color-line)]">
              <iframe
                title="Prem Arora — Greater Noida office"
                src="https://www.google.com/maps?q=Greater+Noida+Sector+Alpha+1&output=embed"
                width="100%" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                style={{border:0}}
              />
            </div>
          </div>

          <div>
            <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-6 shadow-sm">
              <h3 className="text-[1.2rem] mb-1">Book a free consultation</h3>
              <p className="text-slate-600 text-[0.92rem] mb-3">Tell us your end use, land size and preferred corridor — we&apos;ll send a personalised shortlist with clean-title plots.</p>
              <LeadForm id="contact-lead" interest="Contact Page" cta="Request a Free Consultation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
