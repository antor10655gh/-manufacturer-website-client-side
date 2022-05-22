import React from "react";
import BusinessSummery from "../BusinessSummary/BusinessSummary";
import Banner from "./Banner";
import Brand from "./Brand";
import CountDown from "./CountDown";
import HomeTools from "./HomeTools";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <HomeTools></HomeTools>
      <CountDown></CountDown>
      <BusinessSummery></BusinessSummery>
      <Brand></Brand>
    </div>
  );
};

export default Home;
