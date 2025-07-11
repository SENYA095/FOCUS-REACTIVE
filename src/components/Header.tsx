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
                                    <a href="#" className="font-medium relative inline-block group underline-animation-center">
                                          Services
                                          <span className="absolute left-0 bottom-0 h-0.5 w-full origin-bottom scale-x-0 bg-[#00E56D] transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                                    </a>
                                    <div
                                          className="w-0 h-0 
            border-l-[5px] border-l-transparent 
            border-r-[5px] border-r-transparent 
            border-t-[5px] border-t-green-500"
                                    ></div>
                              </div>
                              <div className="flex gap-[6px] items-center">
                                    <a href="#" className="font-medium relative inline-block group underline-animation-center">
                                          Tecnologies
                                           <span className="absolute left-0 bottom-0 h-0.5 w-full origin-bottom scale-x-0 bg-[#00E56D] transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                                    </a>
                              </div>
                              <div className="flex gap-[6px] items-center">
                                    <a href="#" className="font-medium relative inline-block group underline-animation-center">
                                          Our Works
                                           <span className="absolute left-0 bottom-0 h-0.5 w-full origin-bottom scale-x-0 bg-[#00E56D] transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                                    </a>
                                    <div
                                          className="w-0 h-0 
            border-l-[5px] border-l-transparent 
            border-r-[5px] border-r-transparent 
            border-t-[5px] border-t-green-500"
                                    ></div>
                              </div>
                              <div className="flex gap-[6px] items-center">
                                    <a href="#" className="font-medium relative inline-block group underline-animation-center">
                                          Careers
                                           <span className="absolute left-0 bottom-0 h-0.5 w-full origin-bottom scale-x-0 bg-[#00E56D] transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                                    </a>
                              </div>
                              <div className="flex gap-[6px] items-center">
                                    <a href="#" className="font-medium relative inline-block group underline-animation-center">
                                          About
                                           <span className="absolute left-0 bottom-0 h-0.5 w-full origin-bottom scale-x-0 bg-[#00E56D] transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                                    </a>
                              </div>
                        </div>
                        <a
                              href="#"
                              className="py-[10px] px-[24px] rounded-[999px] bg-[#00E56D] text-black font-medium"
                        >
                              {" "}
                              Contact Us
                        </a>
                  </div>
            </div>
      );
};

export default Header;
