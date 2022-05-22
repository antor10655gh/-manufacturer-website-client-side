import React from "react";
import bannerImg from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div class="hero lg:min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          style={{ width: "800px" }}
          src={bannerImg}
          class="lg:min-h-screen rounded-lg banner"
        />
        <div className="lg:w-2/6">
          <h1 class="text-2xl lg:text-5xl font-bold">
            Manufacturer & Exporter All Auto Parts!
          </h1>
          <p class="py-6">
            A manufacturer is any business that produces finished goods from raw
            materials. They sell these goods to consumers, wholesalers,
            distributors, retailers, and other manufacturers wanting to create
            more complex items. Manufacturers typically stick to one type of
            product.
          </p>
          <button class="btn btn-primary bg-gradient-to-r from-primary to-orange-600 text-white">
            <span>Get Started</span>
            <i class="fa-solid fa-angles-right px-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
