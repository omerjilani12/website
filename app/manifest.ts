import type { MetadataRoute } from "next";
import { studio } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${studio.name}, ${studio.tagline}`,
    short_name: "Vector",
    description: studio.intro,
    start_url: "/",
    display: "standalone",
    background_color: "#F4F2EC",
    theme_color: "#F4F2EC",
    lang: "en",
    categories: ["business", "design", "architecture"],
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
