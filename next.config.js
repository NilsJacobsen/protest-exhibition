/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
		//Use spread operator to shut typescript up
		locales: ["de", "de-EASY", "en", "es", "fr", "tr", "ru"],
		defaultLocale: "de",
		localeDetection: false
	}
}

module.exports = nextConfig
