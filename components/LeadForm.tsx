"use client";
import { useState, FormEvent } from "react";

type Props = {
  variant?: "card" | "inline";
  interest?: string;
  cta?: string;
  fields?: ("name" | "phone" | "email" | "budget" | "type" | "notes")[];
  id?: string;
};

const budgets = ["Under ₹40 Lakhs", "₹40L – ₹70L", "₹70L – ₹1.2 Cr", "Above ₹1.2 Cr"];
const types = ["2 BHK", "3 BHK", "4 BHK / Penthouse", "Villa", "Plot", "Commercial"];

export default function LeadForm({
  variant = "card",
  interest,
  cta = "Get My Personalised Shortlist →",
  fields = ["name", "phone", "budget", "type", "notes"],
  id = "lead",
}: Props) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      await fetch("/api/lead", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...data, interest, source: id }) });
      setSent(true);
      (e.target as HTMLFormElement).reset();
      // GA / dataLayer hook
      try { (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "lead_submit", form_id: id, interest }); } catch {}
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  const wrap = variant === "card"
    ? "bg-white rounded-[14px] p-5 md:p-6 text-[var(--color-ink)] shadow-[var(--shadow-md)]"
    : "";

  return (
    <form onSubmit={onSubmit} className={wrap} id={id}>
      {sent && (
        <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-3 rounded-[10px] mb-3 text-sm">
          ✅ Thank you! Our Greater Noida expert will reach out within 15 minutes.
        </div>
      )}
      {fields.includes("name") && fields.includes("phone") ? (
        <div className="grid gap-3 sm:grid-cols-2 mb-3">
          <div><label className="text-[0.82rem] text-slate-600 font-semibold block mb-1">Full Name *</label><input className="form-control" name="name" required /></div>
          <div><label className="text-[0.82rem] text-slate-600 font-semibold block mb-1">Phone *</label><input className="form-control" name="phone" type="tel" pattern="[0-9]{10}" required /></div>
        </div>
      ) : null}
      {fields.includes("email") && (
        <div className="mb-3"><label className="text-[0.82rem] text-slate-600 font-semibold block mb-1">Email</label><input className="form-control" name="email" type="email" /></div>
      )}
      {(fields.includes("budget") || fields.includes("type")) && (
        <div className="grid gap-3 sm:grid-cols-2 mb-3">
          {fields.includes("budget") && (
            <div>
              <label className="text-[0.82rem] text-slate-600 font-semibold block mb-1">Budget</label>
              <select className="form-control" name="budget" defaultValue="">
                <option value="">Select budget</option>
                {budgets.map(b => <option key={b}>{b}</option>)}
              </select>
            </div>
          )}
          {fields.includes("type") && (
            <div>
              <label className="text-[0.82rem] text-slate-600 font-semibold block mb-1">Property Type</label>
              <select className="form-control" name="type" defaultValue="">
                <option value="">Select type</option>
                {types.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          )}
        </div>
      )}
      {fields.includes("notes") && (
        <div className="mb-3">
          <label className="text-[0.82rem] text-slate-600 font-semibold block mb-1">Anything specific?</label>
          <textarea className="form-control min-h-[100px]" name="notes" placeholder="e.g. need ground floor near a school" />
        </div>
      )}
      <button type="submit" disabled={loading} className="btn btn-primary btn-block">
        {loading ? "Sending..." : cta}
      </button>
      <p className="text-[0.78rem] text-slate-500 mt-2">By submitting, you agree to be contacted via call/WhatsApp. We never share your data.</p>
    </form>
  );
}
