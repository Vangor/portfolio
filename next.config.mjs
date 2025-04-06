import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure for Cloudflare Pages
  output: 'standalone',

  // Enable image optimization with Cloudflare loader
  images: {
    loader: 'custom',
    loaderFile: './src/utils/cloudflare-image-loader.js',
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  // ESLint configuration
  eslint: {
    // Only run ESLint on these directories during production builds
    dirs: ['src/app', 'src/components', 'src/lib', 'src/utils'],
    // Don't run ESLint during builds to prevent failures due to test files
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
