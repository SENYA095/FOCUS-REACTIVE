import React from 'react'
import brand1 from '../assets/img/brand/brand1.png';
import brand2 from '../assets/img/brand/brand2.png';
import brand3 from '../assets/img/brand/brand3.png';
import brand4 from '../assets/img/brand/brand4.png';
import brand5 from '../assets/img/brand/brand5.png';
import brand6 from '../assets/img/brand/brand6.png';
import brand7 from '../assets/img/brand/brand7.png';

const brandImages: string[] = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
];

const BrandSlider: React.FC = () => {
  return (
    <div className="overflow-hidden mt-[147px]  bg-black">
      <div className="flex w-max animate-slide gap-16">
        {[...brandImages, ...brandImages].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`brand-${i}`}
            className="h-auto w-auto object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSlider