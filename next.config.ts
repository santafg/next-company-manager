import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://cloudflare-ipfs.com",
      },
    ],
  },
};

export default nextConfig;
