import React from "react";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import "../Home/HomeTools.css";
import HomeTool from "./HomeTool";

const HomeTools = () => {
  const [products, setProducts] = useProduct();
  return (
    <div className="lg:py-12">
      <header className="text-center lg:pb-20 pb-3">
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
      <div className="grid grid-cols-3 gap-5">
        {products.slice(0, 3).map((product) => (
          <HomeTool key={product._id} product={product}></HomeTool>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/tools" class="btn btn-outline btn-secondary lg:mt-16">
          Get More
          <i class="fa-solid fa-angles-right px-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default HomeTools;
