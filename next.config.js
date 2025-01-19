/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avt.mkklcdnv6temp.com', 's4.anilist.co'],
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
  // Optimize for Vercel deployment
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true
}

module.exports = nextConfig
