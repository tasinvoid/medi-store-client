import React from "react";

const TopBar = () => {
  return (
    
    <div className="w-full bg-background-muted  flex items-center text-xs h-8 overflow-x-auto whitespace-nowrap scrollbar-none text-muted-text">
     
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-full px-4 gap-4">
       
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-phone" suppressHydrationWarning></i>
            <span>Call us: +800 911 2349</span>
          </div>
          <div className="border-l  h-4"></div>
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-envelope" suppressHydrationWarning></i>
            <span>Email: support@clarivo.com</span>
          </div>
        </div>

        
        <div className="lg:flex lg:items-center lg:gap-4 sm:gap-5 lg:h-full hidden">
          <div className="flex gap-2 items-center">
            <i
              className="fa-solid fa-location-dot"
              suppressHydrationWarning
            ></i>
            <span>Address: Bangladesh, Dhaka-009</span>
          </div>

          
          <div className="bg-primary text-white h-full px-6 flex items-center justify-center transition-colors duration-200 cursor-pointer font-medium">
            Blog
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
