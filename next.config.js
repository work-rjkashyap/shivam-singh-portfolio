/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		images: {
			unoptimized: true,
		},
	},
	basePath: '',
	assetPrefix: '',
};

module.exports = nextConfig;
