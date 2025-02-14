// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? '/dapp' : '',
  assetPrefix: isProd ? '/dapp/' : '',
  images: {
    unoptimized: true,
  },
  // УДАЛИТЬ секцию redirects
};

export default nextConfig;