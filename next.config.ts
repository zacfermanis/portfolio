import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable static site generation
  output: 'export',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: [],
  },
  
  // TypeScript and ESLint configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  
  // Compression
  compress: true,
  
  // Skip static file generation for favicon.ico
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
}

export default nextConfig
