import React from "react";
import BusinessSummery from "../BusinessSummary/BusinessSummary";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Brand from "./Brand";
import CountDown from "./CountDown";
import HomeContact from "./HomeContact";
import HomeTools from "./HomeTools";
import Services from "./Services";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <HomeTools></HomeTools>
      <CountDown></CountDown>
      <Subscribe></Subscribe>
      <HomeContact></HomeContact>
      <Brand></Brand>
      <Footer></Footer>
    </div>
  );
};

export default Home;
