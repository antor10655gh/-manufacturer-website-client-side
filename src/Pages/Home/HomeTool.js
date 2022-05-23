import React from "react";
import { useNavigate } from "react-router-dom";

const HomeTool = ({ product }) => {
  const navigate = useNavigate();
  const handleOrder = (id) => {
    navigate(`/toolsOrder/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          <div className="badge badge-secondary p-3">${product.price}</div>
        </h2>
        <p className="pb-2">{product.description}</p>
        <div className="flex justify-between">
          <div className="badge badge-outline p-2">
            Min. Qty. - {product.minimum_quantity} pc's
          </div>
          <div className="badge badge-outline">
            Able. Qty. - {product.available_quantity} pc's
          </div>
        </div>
        <button
          onClick={() => handleOrder(product._id)}
          className="btn btn-outline btn-secondary lg:my-2 lg:mt-8"
        >
          Order Now
          <i className="fa-solid fa-store px-2"></i>
        </button>
      </div>
    </div>
  );
};

export default HomeTool;
