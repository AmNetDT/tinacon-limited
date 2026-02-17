// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // This is critical for shared hosting
  images: {
    unoptimized: true, // Prevents 503s caused by heavy image processing
  },
};

export default nextConfig;
