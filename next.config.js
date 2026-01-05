/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 16, no experimental flag needed
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
