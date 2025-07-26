import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
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
