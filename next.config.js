/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable SWC minification (default in Next.js 13+)
  swcMinify: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig

