import React from "react";
import Settings from "../assets/img/settings.png";
import Switch from "../assets/img/switch.png";

const Hero = () => {
      return (
            <>
                  <div className="  pt-[136px] flex items-center gap-[15px] ">
                        <h2 className="pl-[54px] text-white font-bold uppercase text-[10rem] leading-[.8] tracking-[-3.2px]">
                              headless
                        </h2>
                        <img src={Settings} alt="settings" />
                  </div>

                  <div className="flex items-center gap-[15px] ">
                        <img
                              src={Switch}
                              alt="switch"
                              className=" pl-[195px]"
                        />
                        <h2 className=" leading-[.8] tracking-[-3.2px] font-bold uppercase text-[10rem] text-[#00E56D]">
                              commerce
                        </h2>
                  </div>

                  <div className="flex items-center gap-[15px] ">
                        <h2 className="text-white font-bold uppercase text-[10rem] leading-[.8] tracking-[-3.2px] pl-[100px]">
                              agency
                        </h2>
                        <a
                              href="#"
                              className="inline-flex h-[116px] px-[64px] py-[49px] justify-center items-center gap-[10px] shrink-0 rounded-[80px] bg-[#00E56D] text-black text-center text-[24px] font-semibold leading-[.8]"
                        >
                              REQUEST A QUOTE
                        </a>
                  </div>
            </>
      );
};

export default Hero;
