"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Prem" },
  { href: "/guides", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--color-line)]">
      <div className="container-x flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-2.5 font-extrabold text-[var(--color-navy)]">
          <span className="w-9 h-9 rounded-lg grid place-items-center text-[var(--color-gold)] font-display text-lg shadow-sm" style={{background:"linear-gradient(135deg,var(--color-navy),var(--color-navy-2))"}}>P</span>
          <span className="font-display text-[1.25rem] leading-none">
            Prem Arora
            <small className="block font-sans text-[0.62rem] tracking-[0.25em] text-[var(--color-gold)] font-semibold mt-[-2px]">GREATER NOIDA · 25+ YRS</small>
          </span>
        </Link>
        <nav className="hidden md:flex gap-7 items-center" aria-label="Primary">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-[0.95rem] font-medium text-[#1f2a44] hover:text-[var(--color-gold)] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden md:inline-flex btn btn-primary">Book Free Consultation</Link>
        <button
          aria-label="Menu" aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          className="md:hidden w-[42px] h-[42px] rounded-[10px] border border-[var(--color-line)] bg-white grid place-items-center"
        >
          <span className="block w-[18px] h-0.5 bg-[var(--color-navy)] relative before:content-[''] before:absolute before:left-0 before:w-[18px] before:h-0.5 before:bg-[var(--color-navy)] before:-top-[6px] after:content-[''] after:absolute after:left-0 after:w-[18px] after:h-0.5 after:bg-[var(--color-navy)] after:top-[6px]" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--color-line)] bg-white px-5 py-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 border-b border-[var(--color-line)] font-medium">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary btn-block mt-3">Book Free Consultation</Link>
        </div>
      )}
    </header>
  );
}
