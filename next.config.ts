import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Ensure Next.js uses the portfolio workspace as root */
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
