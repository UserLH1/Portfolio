// next.config.mjs

import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configurations

  webpack: (config) => {
    // Modify the Webpack configuration
    config.optimization.splitChunks = {
      cacheGroups: {
        three: {
          test: /[\\/]node_modules[\\/](three|three-globe)[\\/]/,
          name: "three-globe",
          chunks: "all",
        },
      },
    };
    return config;
  },
};

export default bundleAnalyzer(nextConfig);
