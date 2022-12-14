/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	images: {
		domains: ['images.unsplash.com'],
	},
};

module.exports = nextConfig;
