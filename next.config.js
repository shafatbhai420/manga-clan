/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['avt.mkklcdnv6temp.com', 's4.anilist.co', 'mangabat-beta.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avt.mkklcdnv6temp.com',
      },
      {
        protocol: 'https',
        hostname: 's4.anilist.co',
      },
      {
        protocol: 'https',
        hostname: 'mangabat-beta.vercel.app',
      }
    ],
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimize for Vercel deployment
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true
}

module.exports = nextConfig
