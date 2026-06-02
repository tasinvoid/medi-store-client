import { Medicine } from "@/types";
import Image from "next/image";
import React from "react";
import { Heart, ShoppingCart, Eye, BarChart2 } from "lucide-react";

const ProductCard = ({ medicine }: { medicine: Medicine }) => {
  
  return (
    <div className=" flex flex-col items-center border border-gray-300 max-w-50 pb-5 group relative">
      <Image
        src={medicine.image}
        alt="medicine image"
        width={300}
        height={500}
        className="group-hover:opacity-40"
      ></Image>
      <div className="inset-0 opacity-0 group-hover:opacity-100 z-10 absolute flex gap-1 transition-opacity duration-800 bg-white/20 backdrop-blur-sm items-center justify-center">
        <button className="p-3 bg-white border border-gray-200 text-gray-600 hover:bg-white hover:text-primary hover:border-primary transition-all duration-200 shadow-sm">
          <Heart size={18} />
        </button>

        <button className="p-3 bg-white border border-gray-200 text-gray-600 hover:bg-white hover:text-primary hover:border-primary transition-all duration-200 shadow-sm">
          <BarChart2 size={18} className="rotate-90" />
        </button>

        <button className="p-3 bg-white border border-gray-200 text-gray-600 hover:bg-white hover:text-primary hover:border-primary transition-all duration-200 shadow-sm">
          <ShoppingCart size={18} />
        </button>

        <button className="p-3 bg-white border border-gray-200 text-gray-600 hover:bg-white hover:text-primary hover:border-primary transition-all duration-200 shadow-sm">
          <Eye size={18} />
        </button>
      </div>
      <h1 className="text-xs group-hover:opacity-40">
        {medicine.product_name}
      </h1>
      <p className="text-primary text-sm font-semibold group-hover:opacity-40">
        {medicine.price}$
      </p>
    </div>
  );
};

export default ProductCard;
