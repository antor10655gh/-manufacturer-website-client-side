import React from "react";
import useProduct from "../../hooks/useProduct";
import HomeTool from "../Home/HomeTool";

const Tools = () => {
  const [products, setProducts] = useProduct();
  return (
    <div className="pt-12 pb-12 px-2 lg:px-0">
      <header className="text-center pb-5 lg:pb-20 ">
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
      <div className="grid lg:grid-cols-3 lg:gap-x-5 gap-y-10">
        {products.map((product) => (
          <HomeTool key={product._id} product={product}></HomeTool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
