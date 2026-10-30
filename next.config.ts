import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/_next/image",
        destination: "/api/lumiere-image",
      },
      {
        source: "/lumiereprimehills/_next/image",
        destination: "/api/lumiere-image",
      },
      {
        source: "/_next/:path*",
        destination: "/lumiereprimehills/_next/:path*",
      },
    ];
  },
};

export default nextConfig;
