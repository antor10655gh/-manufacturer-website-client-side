import React from "react";
import "../Home/HomeTools.css";

const HomeTools = () => {
  return (
    <div>
      <header className="text-center pt-3 lg:pt-3 lg:pb-5 pb-3">
        <h2>
          <span id="span">O</span>
          <span id="span">U</span>
          <span id="span">R</span>
          <span id="span">T</span>
          <span id="span">O</span>
          <span id="span">O</span>
          <span id="span">L</span>
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
      <div className="grid grid-cols-3 gap-5">{}</div>
    </div>
  );
};

export default HomeTools;
