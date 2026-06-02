import { div } from "framer-motion/client";
import React from "react";

const HomePageServices = () => {
  return (
    <div>
      <div className=" flex items-center justify-center gap my-20">
        <div className="border border-primary flex items-center gap-5 p-5">
          <i
            className="fa-solid fa-gift text-primary text-4xl"
            suppressHydrationWarning
          ></i>
          <div className="text-center">
            <h1 className="text-xl font-semibold">Free Delivery</h1>
            <p className="text-muted-text text-sm">For all orders over 100$</p>
          </div>
        </div>
        <div className=" border-primary border flex items-center gap-5 p-5">
          <i
            className="fa-solid fa-plane text-primary text-4xl"
            suppressHydrationWarning
          ></i>
          <div className="text-center">
            <h1 className="text-xl font-semibold">30 Days Return</h1>
            <p className="text-muted-text text-sm">If goods have problem</p>
          </div>
        </div>
        <div className=" border-primary border flex items-center gap-5 p-5">
          <i
            className="fa-solid fa-bookmark text-primary text-4xl"
            suppressHydrationWarning
          ></i>
          <div className="text-center">
            <h1 className="text-xl font-semibold">Secure Payment</h1>
            <p className="text-muted-text text-sm">100% Secure Payment</p>
          </div>
        </div>

        <div className=" border-primary border flex items-center gap-5 p-5">
          <i
            className="fa-solid fa-circle-user text-primary text-4xl"
            suppressHydrationWarning
          ></i>
          <div className="text-center">
            <h1 className="text-xl font-semibold">24/7 Support</h1>
            <p className="text-muted-text text-sm">Dedicated Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageServices;
