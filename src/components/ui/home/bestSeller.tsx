import React from "react";
import ProductCard from "./bestSellerproductCard";

const BestSeller = () => {
  const data = [
    {
      id: 1,
      product_name: "Paracetamol 500mg",
      image: "/best-seller/product3-270x270.jpg",
      price: 1.2,
      rating: 4.5,
    },
    {
      id: 2,
      product_name: "Amoxicillin 250mg",
      image: "/best-seller/product8-270x270.jpg",
      price: 5.5,
      rating: 4.2,
    },
    {
      id: 3,
      product_name: "Omeprazole 20mg",
      image: "/best-seller/product10-270x270 (1).jpg",
      price: 3.8,
      rating: 4.8,
    },
    {
      id: 4,
      product_name: "Atorvastatin 10mg",
      image: "/best-seller/product12-270x270.jpg",
      price: 8.5,
      rating: 4.0,
    },
    {
      id: 5,
      product_name: "Metformin 500mg (Alt)",
      image: "/best-seller/product14-270x270 (1).jpg",
      price: 2.1,
      rating: 4.6,
    },
    {
      id: 6,
      product_name: "Metformin 500mg",
      image: "/best-seller/product14-270x270.jpg",
      price: 2.0,
      rating: 4.3,
    },
    {
      id: 7,
      product_name: "Ibuprofen 400mg",
      image: "/best-seller/product16-270x270.jpg",
      price: 1.75,
      rating: 4.7,
    },
    {
      id: 5,
      product_name: "Metformin 500mg (Alt)",
      image: "/best-seller/product14-270x270 (1).jpg",
      price: 2.1,
      rating: 4.6,
    },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-2xl font-semibold pb-4">Best Seller</h1>
      <div className="grid grid-cols-4 gap-2 ">
        {data.map((medicine, index) => (
          <ProductCard medicine={medicine} key={index}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
