import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // In production: persist to DB, send email via Resend/SendGrid, push to CRM (HubSpot/Zoho), send WhatsApp via Twilio/MessageBird
    console.log("[lead]", data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
