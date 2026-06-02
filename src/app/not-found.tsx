"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
     
      <div className="w-full max-w-[600px]">
        <DotLottieReact
          src="/not-found.json" // public ফোল্ডারের পাথ
          loop
          autoplay
        />
      </div>

      <h1 className="text-2xl font-bold mt-4">Ohh! Page not found</h1>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-green-400 transition"
      >
       Return Home
      </Link>
    </div>
  );
}
