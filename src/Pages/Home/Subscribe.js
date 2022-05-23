import React from "react";

const Subscribe = () => {
  return (
    <div className="lg:py-28">
      <div className="grid lg:grid-cols-2 gap-4 place-items-center">
        <div>
          <h2 className="lg:text-5xl pb-2">
            Get <span className="text-primary">10%</span> Discount
          </h2>
          <p>
            Subscribe our newsletter and get 10% discount for your first order
          </p>
        </div>
        <div>
          <div className="form-control">
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
              <button className="btn btn-primary px-8 bg-gradient-to-r from-primary to-secondary text-white">
                Subscribe Now
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
