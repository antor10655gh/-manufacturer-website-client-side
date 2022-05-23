import React from "react";

const Services = () => {
  return (
    <div className="lg:pb-14">
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
      <div className="grid lg:grid-cols-4 gap-10 lg:gap-4 pt-5 lg:pt-0">
        <div className="flex flex-col items-center lg:flex-row justify-center gap-4 hover:shadow-lg lg:py-12">
          <span className="text-primary text-5xl">
            <i className="fa-solid fa-truck"></i>
          </span>
          <div>
            <h4 className="text-xl text-center lg:text-left font-bold">
              FREE DELIVERY
            </h4>
            <p>Worldwide from $75</p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center gap-4 hover:shadow-lg lg:py-12">
          <span className="text-primary text-5xl">
            <i className="fa-solid fa-arrow-rotate-left"></i>
          </span>
          <div>
            <h4 className="text-xl text-center lg:text-left font-bold">
              EASY RETURNS
            </h4>
            <p>365 days for free returns</p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center gap-4 hover:shadow-lg lg:py-12">
          <span className="text-primary text-5xl">
            <i className="fa-solid fa-credit-card"></i>
          </span>
          <div>
            <h4 className="text-xl text-center lg:text-left font-bold">
              COMFORT PAYMENTS
            </h4>
            <p>Credit Cards Available</p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center gap-4 hover:shadow-lg lg:py-12">
          <span className="text-primary text-5xl">
            <i className="fa-solid fa-gift"></i>
          </span>
          <div>
            <h4 className="text-xl text-center lg:text-left font-bold">
              FREE GIFTS
            </h4>
            <p>Get gifts and discounts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
