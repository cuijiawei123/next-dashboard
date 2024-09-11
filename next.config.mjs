/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/next_dashboard',
  images: {
    unoptimized: true, // 禁用图片优化功能
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
