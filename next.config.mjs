/** @type {import('next').NextConfig} */
import "antd";
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@ant-design",
    "antd",
    "rc-util",
    "rc-pagination",
    "rc-picker",
  ],
};

export default nextConfig;
