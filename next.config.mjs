import nextI18nConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: nextI18nConfig.i18n,
  experimental: {
    esmExternals: true, // optional
  }
};

export default nextConfig;
