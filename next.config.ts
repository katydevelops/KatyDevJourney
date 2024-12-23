import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imageSizes.ctfassets.net'],
  },
};

export default nextConfig;
