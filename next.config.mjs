/** @type {import('next').NextConfig} */
import "antd";
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  transpilePackages: [
    "@ant-design",
    "antd",
    "rc-util",
    "rc-pagination",
    "rc-picker",
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.svg$/,
  //       use: ["@svgr/webpack"],
  //     },
  //   ],
  // },
};

export default nextConfig;
