import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { seoPages, getSeoPage } from "@/lib/seo-pages";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return seoPages.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getSeoPage(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: { canonical: `/seo/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      type: "article",
      url: `${site.url}/seo/${p.slug}`,
      siteName: site.brand,
      locale: "en_IN",
      authors: ["Prem Arora"],
    },
    twitter: { card: "summary_large_image", title: p.metaTitle, description: p.metaDescription },
    authors: [{ name: "Prem Arora", url: site.url }],
  };
}

export default async function SeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getSeoPage(slug);
  if (!p) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/seo/${seoPages[0].slug}` },
      { "@type": "ListItem", position: 3, name: p.title, item: `${site.url}/seo/${p.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.h1,
    description: p.metaDescription,
    inLanguage: "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/seo/${p.slug}` },
    author: { "@type": "Person", name: "Prem Arora", url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.brand,
      logo: { "@type": "ImageObject", url: `${site.url}/icon-512.png` },
    },
    datePublished: "2026-01-15",
    dateModified: new Date().toISOString().slice(0, 10),
    keywords: p.keywords.join(", "),
    about: { "@type": "Place", name: "Greater Noida, Uttar Pradesh, India" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="gradient-page text-white py-14">
        <div className="container-x">
          <div className="text-[0.85rem] text-slate-300 mb-2"><Link href="/" className="hover:text-[var(--color-gold)]">Home</Link> / <Link href="/about" className="hover:text-[var(--color-gold)]">Guides</Link> / {p.title}</div>
          <h1 className="text-white max-w-[820px]">{p.h1}</h1>
          <p className="text-slate-200 max-w-[820px] mt-2">{p.intro}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <article className="article max-w-[820px]">
            <div className="tldr">
              <b>TL;DR — </b>{p.intro.split(".").slice(0, 2).join(".") + "."}
            </div>

            <nav className="bg-[var(--color-bg-soft)] border border-[var(--color-line)] rounded-[12px] p-4 my-6">
              <b className="block mb-2 text-[var(--color-navy)]">In this guide</b>
              {p.sections.map((s, i) => (
                <a key={i} href={`#s-${i}`} className="block py-1 text-[0.93rem] text-slate-700 hover:text-[var(--color-gold)]">→ {s.h2}</a>
              ))}
              <a href="#faqs" className="block py-1 text-[0.93rem] text-slate-700 hover:text-[var(--color-gold)]">→ Frequently Asked Questions</a>
            </nav>

            {p.sections.map((s, i) => (
              <section key={i} id={`s-${i}`}>
                <h2>{s.h2}</h2>
                {s.body.map((b, j) => <p key={j} dangerouslySetInnerHTML={{ __html: b }} />)}
              </section>
            ))}

            <h2 id="faqs">Frequently Asked Questions</h2>
            <FAQ items={p.faqs} />

            <hr className="my-10 border-[var(--color-line)]" />

            <div className="not-prose rounded-2xl p-6 text-white" style={{background:"linear-gradient(135deg,var(--color-navy),var(--color-navy-2))"}}>
              <h3 className="font-display text-2xl text-white m-0">Talk to Prem Arora directly</h3>
              <p className="text-slate-200 mt-2 mb-4">28+ years of Greater Noida experience. One honest conversation can save you lakhs and months of confusion. No obligation, ever.</p>
              <div className="flex flex-wrap gap-3">
                <a className="btn btn-primary" href={`tel:${site.phone}`}>📞 Call Prem Now</a>
                <a className="btn" style={{background:"#25D366",color:"#fff"}} href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`} target="_blank" rel="noopener">💬 WhatsApp</a>
                <Link className="btn" style={{background:"#fff",color:"var(--color-navy)"}} href="/contact">Book Free Consultation</Link>
              </div>
            </div>

            <hr className="my-10 border-[var(--color-line)]" />

            <h2>Explore Other Greater Noida Guides</h2>
            <ul>
              {seoPages.filter(s => s.slug !== p.slug).map(s => (
                <li key={s.slug}><Link href={`/seo/${s.slug}`} className="text-[var(--color-navy)] hover:text-[var(--color-gold)]"><b>{s.title}</b></Link> — {s.metaDescription.split(".")[0]}.</li>
              ))}
            </ul>
          </article>

          <aside>
            <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-6 lg:sticky lg:top-24 shadow-sm">
              <span className="eyebrow">Free Expert Help</span>
              <h3 className="mt-1 text-[1.15rem]">Get a personalised shortlist & price list</h3>
              <p className="text-slate-600 text-[0.92rem] mb-3">Skip the research. Tell us your needs and we&apos;ll send 3 hand-picked options + this week&apos;s exclusive pre-launch prices.</p>
              <LeadForm id={`seo-${p.slug}`} interest={`SEO: ${p.title}`} fields={["name", "phone", "budget"]} cta="Send Me The Price List" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
