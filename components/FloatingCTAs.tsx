import { site } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`}
      target="_blank" rel="noopener" aria-label="WhatsApp"
      className="fixed bottom-[18px] right-[18px] z-[60] w-[54px] h-[54px] rounded-full grid place-items-center text-white text-[1.4rem] shadow-[var(--shadow-lg)] transition-transform hover:scale-110"
      style={{ background: "#25d366" }}
    >💬</a>
  );
}

export function StickyMobileBar() {
  return (
    <div className="md:hidden fixed left-0 right-0 bottom-0 z-[55] bg-white border-t border-[var(--color-line)] grid grid-cols-3 p-2 gap-2 shadow-[0_-8px_24px_rgba(15,23,36,.08)]">
      <a className="flex items-center justify-center gap-1.5 py-2.5 rounded-[10px] font-semibold text-[0.85rem] text-white" style={{background:"var(--color-navy)"}} href={`tel:${site.phone}`}>📞 Call</a>
      <a className="flex items-center justify-center gap-1.5 py-2.5 rounded-[10px] font-semibold text-[0.85rem] text-white" style={{background:"#25d366"}} href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">💬 WhatsApp</a>
      <a className="flex items-center justify-center gap-1.5 py-2.5 rounded-[10px] font-semibold text-[0.85rem]" style={{background:"var(--color-gold)",color:"#1a1305"}} href="/contact">📅 Enquire</a>
    </div>
  );
}
