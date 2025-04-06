import createNextIntlPlugin from 'next-intl/plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';

const withNextIntl = createNextIntlPlugin('./src/i18n/i18n.ts');

// Enable bundle analyzer when ANALYZE env var is set
const analyzeBundle = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure for Cloudflare Pages - standalone is best for server components
  output: 'standalone',
  // Disable image optimization since we're using Cloudflare
  images: {
    loader: 'custom',
    loaderFile: './src/utils/cloudflare-image-loader.js',
    domains: [],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },

  // ESLint configuration
  eslint: {
    // Only run ESLint on these directories during production builds
    dirs: ['src/app', 'src/components', 'src/lib', 'src/utils'],
    // Don't run ESLint during builds to prevent failures due to test files
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer, dev }) => {
    // Optimize client-side bundle splitting
    if (!isServer) {
      // Set production optimization
      if (!dev) {
        config.optimization.splitChunks = {
          chunks: 'all',
          maxInitialRequests: 25,
          maxAsyncRequests: 25,
          minSize: 20000,
          maxSize: 22 * 1024 * 1024, // Keep chunks under 22MB to be safe
          cacheGroups: {
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|next|styled-components)[\\/]/,
              priority: 40,
              chunks: 'all',
              enforce: true,
            },
            // Separate large libraries
            largeVendors: {
              test: /[\\/]node_modules[\\/](framer-motion|posthog-js)[\\/]/,
              name: 'large-vendors',
              priority: 30,
              chunks: 'all',
            },
            commons: {
              test: /[\\/]src[\\/]/,
              name: 'commons',
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
            },
            // Put npm packages in separate chunks
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        };
      }
    }
    return config;
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

// Export with all configs applied
export default analyzeBundle(withNextIntl(nextConfig));
