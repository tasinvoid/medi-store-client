import React from "react";

export default function Banners() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 justify-center my-10">
      {/* Banner 1: Protein Food */}
      <div className="relative w-[500px] h-[250px] bg-[#E2F1F1] p-4 flex items-center justify-between overflow-hidden">
        {/* Inner White Border */}
        <div className="absolute inset-3 border-2 border-white pointer-events-none"></div>

        {/* Left: Product Image Placeholder */}
        <div className="z-10 w-1/2">
          <img
            src="/banner-images/b1s2.png"
            alt="Protein"
            className="object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="z-10 w-1/2 text-right pr-6">
          <h2 className="text-4xl font-bold text-[#558B2F]">
            20% <span className="text-2xl">off</span>
          </h2>
          <p className="text-xs tracking-wider text-amber-800 font-semibold my-2">
            PLEASE DON'T MISS
          </p>
          <button className="text-sm font-bold border-b-2 border-black pb-1">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Banner 2: Organic Products */}
      <div
        className="relative w-[500px] h-[250px] p-4 flex items-center justify-between overflow-hidden"
        style={{
          background: "linear-gradient(115deg, #FFF9E6 65%, #F5E6C4 65%)",
        }}
      >
        {/* Inner White Border */}
        <div className="absolute inset-3 border-2 border-white pointer-events-none"></div>

        {/* Left: Content */}
        <div className="z-10 w-1/2 pl-6">
          <p className="italic text-red-500 font-serif">Hello Spring</p>
          <h2 className="text-2xl font-black text-[#558B2F] tracking-wide uppercase leading-tight my-2">
            Organic
            <br />
            Products
          </h2>
          <button className="text-xs font-bold border-b-2 border-black pb-1 mt-2">
            SHOP NOW
          </button>
        </div>

        {/* Right: Lemon Image Placeholder */}
        <div className="z-10 w-1/2 h-full flex items-center justify-center">
          <img
            src="/banner-images/b1s1.png"
            alt="Lemons"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
