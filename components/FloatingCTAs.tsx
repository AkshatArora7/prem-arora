import { site } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`}
      target="_blank" rel="noopener" aria-label="WhatsApp"
      className="fixed bottom-[18px] right-[18px] z-[60] w-[54px] h-[54px] rounded-full grid place-items-center text-white shadow-[var(--shadow-lg)] transition-transform hover:scale-110"
      style={{ background: "#25d366" }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11.7 11.7 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3zM12 21.5c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.6 9.6 0 0 1-1.5-5.2c0-5.4 4.4-9.7 9.8-9.7 2.6 0 5 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm5.4-7.3c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
      </svg>
    </a>
  );
}

export function StickyMobileBar() {
  return (
    <div className="md:hidden fixed left-0 right-0 bottom-0 z-[55] bg-white border-t border-[var(--color-line)] grid grid-cols-3 p-2 gap-2 shadow-[0_-8px_24px_rgba(15,23,36,.08)]">
      <a className="flex items-center justify-center py-2.5 rounded-[10px] font-semibold text-[0.85rem] text-white tracking-wide" style={{background:"var(--color-navy)"}} href={`tel:${site.phone}`}>Call</a>
      <a className="flex items-center justify-center py-2.5 rounded-[10px] font-semibold text-[0.85rem] text-white tracking-wide" style={{background:"#25d366"}} href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a>
      <a className="flex items-center justify-center py-2.5 rounded-[10px] font-semibold text-[0.85rem] tracking-wide" style={{background:"var(--color-gold)",color:"#1a1305"}} href="/contact">Enquire</a>
    </div>
  );
}
