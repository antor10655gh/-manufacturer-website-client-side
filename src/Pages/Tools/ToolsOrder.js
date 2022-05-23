import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const ToolsOrder = () => {
  const [product, setProduct] = useState([]);
  const [user] = useAuthState(auth);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div className="py-12">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left lg:px-8 pt-8">
            <h1 class="lg:text-3xl font-bold">
              <span className="text-secondary">{product.name}</span>
            </h1>
            <img src={product.picture} alt="" />
            <p class="py-6">
              <span className="font-bold">Description:</span>
              {product.description}
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <header>
                <h2 className="text-3xl font-bold pb-2">Order Details</h2>
              </header>
              <div class="form-control mb-3">
                <input
                  disabled
                  type="text"
                  value={user.displayName}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mb-3">
                <input
                  disabled
                  type="text"
                  value={user.email}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mb-3">
                <input
                  type="text"
                  placeholder="Phone"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mb-3">
                <textarea placeholder="Address" class="input input-bordered" />
              </div>
              <div class="form-control mb-3">
                <input
                  type="number"
                  placeholder="Order quantity"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsOrder;
