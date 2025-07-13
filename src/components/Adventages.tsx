import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const AdvantageSlide = ({ value, label, style }) => (
  <motion.div
    className="absolute left-0 right-0 flex gap-[100px] items-start justify-center"
    style={style}
  >
    <span className="text-[240px] w-[785px] text-right font-bold uppercase leading-[.9] tracking-[-4.8px] text-[#00E56D]">
      {value}
    </span>
    <p className="text-[40px] font-semibold">{label}</p>
  </motion.div>
);

const Advantages = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Трансформації для кожного слайда
  const slide1Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "-150%"]);
  const slide2Y = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "-25%"]);
  const slide3Y = useTransform(scrollYProgress, [0.6, 1], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[3000px] mt-[500px]">
      <div className="sticky top-1/2 -translate-y-1/2">
          <AdvantageSlide value="3.5%" label="Conversion Rate" style={{ y: slide1Y }} />
          <AdvantageSlide value="1200$" label="Customer Lifetime Value" style={{ y: slide2Y }} />
          <AdvantageSlide value="100" label="Website Performance" style={{ y: slide3Y }} />
      </div>
    </div>
  );
};

export default Advantages;
