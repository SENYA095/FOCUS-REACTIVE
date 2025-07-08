import React from "react";
import Clutch from "../assets/svg/Clutch";
import Star from "../assets/svg/Star";

const AboutUs = () => {
      return (
            <div className=" flex justify-between mt-[112px]">
                  <div className="flex flex-col gap-2">
                        <Clutch />
                        <div className="flex gap-1 items-center ">
                              <div className="flex gap-[1px]  items-center">
                                    {[...Array(5)].map((_, index) => (
                                          <Star key={index} />
                                    ))}
                              </div>
                              <span className="text-[12px] font-bold tracking-[-0.246px]">
                                    4,9
                              </span>
                        </div>
                  </div>
                  <div className=" w-[679px] flex items-center justify-between">
                        <p className=" max-w-[310px] text-[16px] font-medium leading-[1.2]">
                              We build CMS websites and content-rich eCommerce
                              platforms for businesses with complex needs
                        </p>
                        <div className="flex gap-2">
                              <div className="w-10 h-10 rounded-[200px] border border-[#3B3B3B] flex items-center justify-center">
                                    X
                              </div>
                              <div className="w-10 h-10 rounded-[200px] border border-[#3B3B3B] flex items-center justify-center">
                                    LI
                              </div>
                              <div className="w-10 h-10 rounded-[200px] border border-[#3B3B3B] flex items-center justify-center">
                                    FB
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AboutUs;
