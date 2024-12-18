import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_MAP_KEY: process.env.NEXT_PUBLIC_MAP_KEY, 
  },
};

export default nextConfig;
