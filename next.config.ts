import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.uwphotographyguide.com",
        port: "",
      }
    ]
  }
};

export default nextConfig;
