import React from "react";
import DreamBig from "../assets/svg/DreamBig";
import DoubleArrows from "../assets/svg/DoubleArrows";
import GrowFar from "../assets/svg/GrowFar";
import DisabledBtn from "./ui/DisabledBtn";


const Provide = () => {
      return (
            <div className="mt-[120px] flex flex-col py-[108px] pb-[148px] px-[40px]">
                  <h3 className="uppercase text-[16px] font-semibold leading-[1.2] text-white text-center mb-[30px]">
                        we provide
                  </h3>
                  <p className="text-[96px] font-bold tracking-[-1.92px] uppercase leading-[0.9] text-center">
                        Future-<span className="relative">proof<DisabledBtn title = 'DREAM BIG' icon = {<DreamBig/>} wrapperClass="absolute right-[-23px] top-0"/></span>
                        <br /><span className="relative">e-co<DisabledBtn title="BUILD FAST" icon = {<DoubleArrows/>} wrapperClass="absolute right-3 top-[-15px]"/></span>mmerce solutions <br /> at 
                        <span className="relative">opt<DisabledBtn title="GROW FAR" icon = {<GrowFar/>} wrapperClass="absolute right-[-7px] bottom-[-5px]"/></span>imal
                        budget
                  </p>
            </div>
      );
};

export default Provide;
