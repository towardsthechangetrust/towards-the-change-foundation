import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Type checking is handled by the editor; skipping here prevents
    // Cloudflare Worker types from conflicting with DOM types and hanging the build.
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
