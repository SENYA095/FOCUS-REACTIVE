import React from "react";
import logo from "../assets/svg/Logo.svg";

const Header = () => {
  return (
    <div className="max-w-[1360px] mx-auto flex items-center justify-between">
      <div>
      	<img src={logo} alt="logo" />
      </div>
      <div className="w-[679px] flex justify-between items-center">
      <div className="flex gap-6 items-center">
        <div className="flex gap-[6px] items-center">
          <a href="#" className="font-medium">Services</a>
          <div 
            className="w-0 h-0 
            border-l-[5px] border-l-transparent 
            border-r-[5px] border-r-transparent 
            border-t-[5px] border-t-green-500"
          ></div>
        </div>
        <div className="flex gap-[6px] items-center">
          <a href="#" className="font-medium">Tecnologies</a>
        </div>
        <div className="flex gap-[6px] items-center">
          <a href="#" className="font-medium">Our Works</a>
          <div
            className="w-0 h-0 
            border-l-[5px] border-l-transparent 
            border-r-[5px] border-r-transparent 
            border-t-[5px] border-t-green-500"
          ></div>
        </div>
        <div className="flex gap-[6px] items-center">
          <a href="#" className="font-medium">Careers</a>
        </div>
        <div className="flex gap-[6px] items-center">
          <a href="#" className="font-medium">About</a>
        </div>
      </div>
        <a href="#" className="py-[10px] px-[24px] rounded-[999px] bg-[#00E56D] text-black font-medium"> Contact Us</a>
      </div>
    </div>
  );
};

export default Header;
