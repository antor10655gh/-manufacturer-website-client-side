import React from "react";
import bannerImg from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="hero lg:min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img
          style={{ width: "750px" }}
          src={bannerImg}
          className="lg:min-h-screen rounded-lg banner"
          alt=""
        />
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold">
            Manufacturer & Exporter All Auto Parts!
          </h1>
          <p className="py-6">
            A manufacturer is any business that produces finished goods from raw
            materials. They sell these goods to consumers, wholesalers,
            distributors, retailers, and other manufacturers wanting to create
            more complex items. Manufacturers typically stick to one type of
            product.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            <span>Get Started</span>
            <i className="fa-solid fa-angles-right px-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
