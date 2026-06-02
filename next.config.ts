import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*", // ফ্রন্টএন্ডে যখনই এই রুটে রিকোয়েস্ট যাবে
        destination: "https://medi-store-server-psi.vercel.app/api/auth/:path*", // ব্যাকহ্যান্ডে সেটি ভার্সেলে ফরওয়ার্ড হবে
      },
    ];
  },
};

export default nextConfig;
