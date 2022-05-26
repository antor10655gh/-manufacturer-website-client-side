import React from "react";
import brand1 from "../../images/brand/brand-1.png";
import brand2 from "../../images/brand/brand-2.png";
import brand3 from "../../images/brand/brand-3.png";
import brand4 from "../../images/brand/brand-4.png";
import brand5 from "../../images/brand/brand-5.png";
import "../Home/Brand.css";

const Brand = () => {
  return (
    <div className="py-5 lg:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 brand">
        <div className="flex items-center justify-center brand-logo">
          <img src={brand1} alt="brand1" />
        </div>
        <div className="flex items-center justify-center brand-logo">
          <img src={brand2} alt="brand2" />
        </div>
        <div className="flex items-center justify-center brand-logo">
          <img src={brand3} alt="brand3" />
        </div>
        <div className="flex items-center justify-center brand-logo">
          <img src={brand4} alt="brand4" />
        </div>
        <div className="flex items-center justify-center brand-logo">
          <img src={brand5} alt="brand5" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
