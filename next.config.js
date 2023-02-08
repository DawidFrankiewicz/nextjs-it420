/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["pl", "en", "nl"],
		defaultLocale: "pl",
	},
};

module.exports = nextConfig;
