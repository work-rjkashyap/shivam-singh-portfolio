/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/' : '',
  assetPrefix: isProd ? '/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
