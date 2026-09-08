import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats first; both are widely supported and much smaller.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
