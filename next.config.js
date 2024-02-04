/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
		//Use spread operator to shut typescript up
		locales: ["de", "en", "tr"],
		defaultLocale: "de",
		localeDetection: false
	}
}

module.exports = nextConfig
