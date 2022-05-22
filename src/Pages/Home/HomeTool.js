import React from "react";

const HomeTool = ({ product }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.picture} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {product.name}
          <div class="badge badge-secondary p-3">${product.price}</div>
        </h2>
        <p className="pb-2">{product.description}</p>
        <div class="flex justify-between">
          <div class="badge badge-outline p-2">
            Min. Qty. - {product.minimum_quantity} pc's
          </div>
          <div class="badge badge-outline">
            Able. Qty. - {product.available_quantity} pc's
          </div>
        </div>
        <button class="btn btn-outline btn-secondary lg:my-2 lg:mt-8">
          Order Now
          <i class="fa-solid fa-store px-2"></i>
        </button>
      </div>
    </div>
  );
};

export default HomeTool;
