import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 1. 忽略 TypeScript 类型错误
  typescript: {
    ignoreBuildErrors: true,
  },
  // 2. 忽略 ESLint 报错
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
    esmExternals: 'loose',
  },
}

export default withContentlayer(nextConfig)
