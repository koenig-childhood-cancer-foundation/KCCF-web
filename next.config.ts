import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  // Generate a fully static site suitable for GitHub Pages
  output: 'export',
  trailingSlash: false,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    // Disable Image Optimization (no server on GitHub Pages)
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
