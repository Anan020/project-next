import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    serverActions:{
      bodySizeLimit:'5mb'
    }
  },
  reactStrictMode:false,
    images: {
    remotePatterns: [new URL('https://res.cloudinary.com/**')],
  },
};

export default nextConfig;
