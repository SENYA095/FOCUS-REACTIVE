import { div } from "framer-motion/client";
import React from "react";

const Adventages = () => {
      return (
            <div className="flex flex-col">
                  <div className="flex gap-[100px] items-start">
                        <span className="text-[240px] w-[785px] text-right font-bold uppercase leading-[.9] tracking-[-4.8px] text-[#00E56D]">
                              3.5%
                        </span>
                        <p className="text-[40px] font-semibold">
                              Conversion Rate
                        </p>
                  </div>
                  <div className="flex gap-[100px] items-start">
                        <span className="text-[240px] w-[785px] text-right font-bold uppercase leading-[.9] tracking-[-4.8px] text-[#00E56D]">
                              1200$
                        </span>
                        <p className="text-[40px] font-semibold">
                              Customer Lifetime Value
                        </p>
                  </div>
                  <div className="flex gap-[100px] items-start ">
                        <span className="text-[240px] w-[785px] text-right font-bold uppercase leading-[.9] tracking-[-4.8px] text-[#00E56D]">
                              100
                        </span>
                        <p className="text-[40px] font-semibold">
                              Website Performance
                        </p>
                  </div>
            </div>
      );
};

export default Adventages;
