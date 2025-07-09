import React from "react";
import Star from "../assets/svg/Star";
import ClutchFooter from "../assets/svg/ClutchFooter";
import FooterIcon from "../assets/svg/FooterIcon";

const Footer = () => {
      return (
            <div className=" py-[120px] flex flex-col items-center justify-center gap-[40px]">
                  <div className="flex flex-col gap-2 items-center justify-center">
                        <ClutchFooter />
                        <div className="flex gap-1 items-center ">
                              <div className="flex gap-[1px]  items-center ">
                                    {[...Array(5)].map((_, index) => (
                                          <Star
                                                key={index}
                                                className="size-7"
                                          />
                                    ))}
                              </div>
                              <span className="text-[27px] font-bold tracking-[-0.533px]">
                                    4,9
                              </span>
                        </div>
                  </div>
                  <div className="relative">
                  <p className="uppercase text-[64px] font-bold leading-[1.1] text-center w-[806px] ">Our <span className="text-[#00E56D] underline decoration-solid decoration-[2.5%] underline-offset-[13.5%]">customer reviews</span> are excellent</p>
                  <FooterIcon className="absolute top-2 right-[-20px]"/>
                  </div>
                  <p className="text-[24px] font-medium leading-[1]">Join the success stories!</p>
            </div>
      );
};

export default Footer;
