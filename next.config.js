/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  basePath: "/talesweaver_homework",
  trailingSlash: true,
}

module.exports = nextConfig
