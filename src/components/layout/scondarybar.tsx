import React from "react";

const SecondaryBar = () => {
  return (
    <div>
      <div className="flex p-2 justify-between  max-w-7xl mx-auto lg:px-7 items-center my-5 text-muted-text">
        <div className="flex gap-5 text-xl4 ">
          <i className="fa-brands fa-facebook-f hover:text-primary transition-all duration-300 ease-in-out" suppressHydrationWarning></i>
          <i className="fa-brands fa-twitter hover:text-primary transition-all duration-300 ease-in-out" suppressHydrationWarning></i>
          <i className="fa-brands fa-instagram hover:text-primary transition-all duration-300 ease-in-out" suppressHydrationWarning></i>
          <i className="fa-brands fa-youtube hidden lg:block smooth-hover " suppressHydrationWarning></i>
        </div>
        <div className="flex">
          <h1 className="text-4xl font-extrabold ">
            <span className="text-primary">Medi</span> Store
          </h1>
          <i
            className="fa-solid fa-plus text-primary font-extrabold"
            suppressHydrationWarning
          ></i>
        </div>
        <div>
          <i
            className="fa-regular fa-circle-user text-3xl hover:text-primary"
            suppressHydrationWarning
          ></i>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBar;
