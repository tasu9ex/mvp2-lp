import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_DEPLOY_TIME: new Date().toISOString(),
  },
};

export default nextConfig;
