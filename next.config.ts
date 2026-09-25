import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/job-seekers",
        destination: "https://findjobs.com.sg/app",
        permanent: false,
      },
      {
        source: "/employer",
        destination: "https://dashboard.findjobs.asia/signup",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
