/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 禁用图片优化功能
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
