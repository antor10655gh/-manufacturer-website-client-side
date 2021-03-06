import React from "react";
import subscribeImg from "../../images/subscribe.png";

const HomeContact = () => {
  return (
    <div
      style={{
        background: `url(${subscribeImg})`,
      }}
      className="bg-primary px-10 py-8 lg:py-14"
    >
      <div className="text-center pb-5 lg:pb-14 text-white">
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
          Contact Us
        </p>
        <h1 className="text-2xl lg:text-4xl">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary btn-wide">
          Submit
        </button>
      </div>
    </div>
  );
};

export default HomeContact;
