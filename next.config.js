/** @type {import('next').NextConfig} */
const { createNextIntlPlugin } = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["api.dicebear.com", "images.unsplash.com"],
  },
  reactStrictMode: true,
};

module.exports = withNextIntl(nextConfig);
