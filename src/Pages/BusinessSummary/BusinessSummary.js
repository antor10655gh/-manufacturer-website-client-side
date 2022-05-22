import React from "react";
import { GiFlyingFlag } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { RiEmotionHappyFill } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";

const BusinessSummery = () => {
  return (
    <div className="lg:py-28">
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
        <div className="stat place-items-center">
          <div className="mb-5">
            <GiFlyingFlag className="text-8xl text-secondary" />
          </div>
          <div className="stat-value text-5xl">65K</div>
          <div className="stat-title text-secondary text-2xl font-bold">
            Countries
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="mb-5">
            <FaUsers className="text-8xl text-secondary" />
          </div>
          <div className="stat-value">655+</div>
          <div className="stat-title  text-secondary text-2xl font-bold">
            New Users Daily
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="mb-5">
            <RiEmotionHappyFill className="text-8xl text-secondary" />
          </div>
          <div className="stat-value">6,500+</div>
          <div className="stat-title  text-secondary text-2xl font-bold">
            Happy Client
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="mb-5">
            <VscFeedback className="text-8xl text-secondary" />
          </div>
          <div className="stat-value">6,200+</div>
          <div className="stat-title  text-secondary text-2xl font-bold">
            Feedback
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
