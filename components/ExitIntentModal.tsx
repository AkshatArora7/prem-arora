"use client";
import { useEffect, useState } from "react";
import LeadForm from "./LeadForm";

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("exitShown")) return;
    const fire = () => { if (!sessionStorage.getItem("exitShown")) { setOpen(true); sessionStorage.setItem("exitShown", "1"); } };
    const onLeave = (e: MouseEvent) => { if (!e.relatedTarget && e.clientY < 10) fire(); };
    document.addEventListener("mouseout", onLeave);
    const t = setTimeout(fire, 35000);
    return () => { document.removeEventListener("mouseout", onLeave); clearTimeout(t); };
  }, []);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[80] bg-[rgba(11,29,57,.6)] flex items-center justify-center p-5 modal-fade" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="bg-white rounded-2xl max-w-[480px] w-full p-7 relative shadow-[var(--shadow-lg)] modal-pop">
        <button onClick={() => setOpen(false)} aria-label="Close" className="absolute top-2.5 right-2.5 w-[34px] h-[34px] rounded-full bg-slate-100 hover:bg-slate-200 text-[1.1rem] leading-none">&times;</button>
        <span className="eyebrow">Wait — Don&apos;t leave empty-handed</span>
        <h3 className="mt-2 mb-2 text-xl font-display">Get the best deal on Greater Noida industrial land</h3>
        <p className="text-slate-600 mb-3 text-[0.95rem]">Drop your number and we&apos;ll send you this week&apos;s <b>clean-title industrial plot list</b> + a free 15-min consultation.</p>
        <LeadForm variant="inline" fields={["name", "phone"]} cta="Send Me The Plot List" id="exit-intent" interest="Exit Intent — Plot List" />
      </div>
    </div>
  );
}
