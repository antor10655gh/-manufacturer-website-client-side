import React from "react";
import BusinessSummery from "../BusinessSummary/BusinessSummary";
import Banner from "./Banner";
import Brand from "./Brand";
import CountDown from "./CountDown";
import HomeTools from "./HomeTools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brand></Brand>
      <HomeTools></HomeTools>
      <CountDown></CountDown>
      <BusinessSummery></BusinessSummery>
    </div>
  );
};

export default Home;
