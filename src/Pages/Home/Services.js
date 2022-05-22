import React from "react";

const Services = () => {
  return (
    <div className="lg:pb-28">
      <header className="text-center pt-3 lg:pt-3 lg:pb-5 pb-3">
        <h2>
          <span id="span">S</span>
          <span id="span">E</span>
          <span id="span">R</span>
          <span id="span">V</span>
          <span id="span">I</span>
          <span id="span">C</span>
          <span id="span">E</span>
          <span id="span">S</span>
        </h2>
        <div
          className="pt-5"
          style={{
            width: "150px",
            borderBottom: "3px solid #FFAE22",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="grid lg:grid-cols-4 lg:gap-4">
        <div className="flex lg:flex-row gap-4">
          <span className="text-primary text-5xl">
            <i class="fa-solid fa-truck"></i>
          </span>
          <div>
            <h4>FREE DELIVERY</h4>
            <p>Worldwide from $75</p>
          </div>
        </div>
        <div className="flex lg:flex-row gap-4">
          <span className="text-primary text-5xl">
            <i class="fa-solid fa-arrow-rotate-left"></i>
          </span>
          <div>
            <h4>EASY RETURNS</h4>
            <p>365 days for free returns</p>
          </div>
        </div>
        <div className="flex lg:flex-row gap-4">
          <span className="text-primary text-5xl">
            <i class="fa-solid fa-credit-card"></i>
          </span>
          <div>
            <h4>COMFORT PAYMENTS</h4>
            <p>Credit Cards Available</p>
          </div>
        </div>
        <div className="flex lg:flex-row gap-4">
          <span className="text-primary text-5xl">
            <i class="fa-solid fa-gift"></i>
          </span>
          <div>
            <h4>FREE GIFTS</h4>
            <p>Get gifts and discounts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
