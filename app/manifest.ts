import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prem Arora — Greater Noida Property Consultant",
    short_name: "Prem Arora",
    description: "Greater Noida's most trusted real estate consultant. 25+ years of personalised, RERA-verified property advisory.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b1d39",
    lang: "en-IN",
    categories: ["business", "lifestyle", "finance"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
