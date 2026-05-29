import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prem Arora — Greater Noida Industrial & Land Consultant (25+ Years Experience)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg,#0b1d39 0%,#15315f 60%,#1c3563 100%)",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#d4a73a",
              color: "#0b1d39",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            P
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1 }}>Prem Arora</div>
            <div style={{ fontSize: 18, color: "#d4a73a", letterSpacing: 4, marginTop: 6 }}>GREATER NOIDA · 25+ YRS</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, maxWidth: 1000 }}>
            Greater Noida&apos;s most trusted industrial &amp; land consultant.
          </div>
          <div style={{ fontSize: 28, color: "#cfd8ea", marginTop: 24, maxWidth: 1000 }}>
            28+ years · 500+ industrial deals · GNIDA · YEIDA · Jewar Airport · 100% clean title
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, color: "#cfd8ea" }}>
          <div>premarora.aatechax.com</div>
          <div style={{ display: "flex", gap: 24 }}>
            <span>Call Direct</span>
            <span>WhatsApp</span>
            <span>4.9 / 5</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
