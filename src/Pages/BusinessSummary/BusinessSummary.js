import React from "react";
import { GiFlyingFlag } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { RiEmotionHappyFill } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import bgImg from "../../images/bg-background.png";
import Footer from "../Shared/Footer";

const BusinessSummery = () => {
  return (
    <div className="lg:pt-12 pt-12">
      <header className="text-center lg:pb-10 pb-3">
        <h2>
          <span id="span">B</span>
          <span id="span">U</span>
          <span id="span">S</span>
          <span id="span">I</span>
          <span id="span">N</span>
          <span id="span">E</span>
          <span id="span">S</span>
          <span id="span">S</span>
          <span>-</span>
          <span id="span">S</span>
          <span id="span">U</span>
          <span id="span">M</span>
          <span id="span">M</span>
          <span id="span">A</span>
          <span id="span">R</span>
          <span id="span">Y</span>
        </h2>
        <div
          className="pt-5"
          style={{
            width: "320px",
            borderBottom: "3px solid #FFAE22",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div
        style={{
          background: `url(${bgImg})`,
        }}
        class="card card-side w-4/5 mx-auto bg-base-100 mt-12 shadow-xl mb-5 lg:mb-12"
      >
        <div class="card-body place-items-center">
          <h2 class="card-title text-5xl text-center text-primary">
            Stay In Touch
          </h2>
          <p className="text-2xl text-center my-5 text-white">
            Subscribe to our newsletter and stay updated on the latest
            developments and special offers!
          </p>
          <div className="w-3/4 mt-5">
            <input
              type="text"
              className="border-2 w-full py-3 px-2 rounded-md"
              placeholder="Enter your email address"
            />
            <div className="flex justify-center mt-5">
              <button className="btn btn-wide btn-primary text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full mb-5 lg:mb-12">
        <div className="stat place-items-center">
          <div className="mb-5">
            <GiFlyingFlag className="text-6xl text-secondary" />
          </div>
          <div className="stat-value text-4xl">65K</div>
          <div className="stat-title text-secondary text-xl font-bold">
            Countries
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="mb-5">
            <FaUsers className="text-6xl text-secondary" />
          </div>
          <div className="stat-value">655+</div>
          <div className="stat-title  text-secondary text-xl font-bold">
            New Users Daily
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="mb-5">
            <RiEmotionHappyFill className="text-6xl text-secondary" />
          </div>
          <div className="stat-value">6,500+</div>
          <div className="stat-title  text-secondary text-xl font-bold">
            Happy Client
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="mb-5">
            <VscFeedback className="text-5xl text-secondary" />
          </div>
          <div className="stat-value">6,200+</div>
          <div className="stat-title  text-secondary text-2xl font-bold">
            Feedback
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BusinessSummery;
