import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import moment from "moment";

const ToolsOrder = () => {
  const [product, setProduct] = useState([]);
  const [quantityError, setQuantityError] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  console.log(product);
  const {
    _id,
    name,
    picture,
    description,
    price,
    minimum_quantity,
    available_quantity,
  } = product;
  const [user, loading] = useAuthState(auth);
  const { productId } = useParams();
  const date = moment().format("MMMM Do YYYY, h:mm a");

  useEffect(() => {
    fetch(`https://arcane-headland-03409.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleQuantity = (event) => {
    const newMinimumQuantity = parseInt(minimum_quantity);
    const newAvailableQuantity = parseInt(available_quantity);
    const inputQuantity = event.target.value;
    setTotalPrice(price * inputQuantity);

    if (inputQuantity < newMinimumQuantity) {
      setQuantityError(
        `Please order minimum ${newMinimumQuantity} tools to purchased`
      );
    } else if (inputQuantity > newAvailableQuantity) {
      setQuantityError(
        `Please order less than ${newAvailableQuantity} tools to purchased`
      );
    } else {
      setQuantityError("");
    }
  };

  const handleOrder = (event) => {
    event.preventDefault();
    const inputQuantity = event.target.quantity.value;
    const order = {
      orderProduct: _id,
      orderProductName: name,
      customerEmail: user.email,
      customerName: user.displayName,
      date: event.target.date.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
      orderPrice: event.target.quantity.value * price,
      orderQuantity: event.target.quantity.value,
    };

    const nextFunc = () => {
      fetch(
        `https://arcane-headland-03409.herokuapp.com/products/${product._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            available_quantity:
              parseInt(available_quantity) - parseInt(inputQuantity),
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast.success("Database Update Successfully", {
            autoClose: 1000,
          });
        });
    };

    fetch(`https://arcane-headland-03409.herokuapp.com/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your order is successful", {
          autoClose: 1000,
        });
        nextFunc();
        event.target.reset();
      });
  };

  return (
    <div className="">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left lg:px-8 pt-8">
            <h1 class="lg:text-3xl font-bold">
              <span className="text-secondary">{name}</span>
            </h1>
            <img className="mx-auto" src={picture} alt="" />
            <p class="py-3">
              <span className="font-bold">Description:</span>
              {description}
            </p>
            <p>
              <span className="font-bold">Available: </span>
              {available_quantity} pc's
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <header>
                <h2 className="text-3xl font-bold pb-2">Order Details</h2>
              </header>
              <form onSubmit={handleOrder}>
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
                    disabled
                    name="date"
                    value={date}
                    type="text"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control mb-3">
                  <input
                    required
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control mb-3">
                  <textarea
                    required
                    name="address"
                    placeholder="Address"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control mb-3">
                  <input
                    required
                    type="number"
                    name="quantity"
                    defaultValue={minimum_quantity}
                    onChange={handleQuantity}
                    placeholder="Order quantity"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control mb-3">
                  <input
                    disabled
                    type="number"
                    name="price"
                    value={totalPrice}
                    placeholder="Order total price"
                    class="input input-bordered"
                  />
                </div>
                {<p className="text-sm text-error">{quantityError}</p>}
                <div class="form-control mt-6">
                  {quantityError ? (
                    <button class="btn disabled bg-gray-400 cursor-not-allowed hover-none">
                      Order
                    </button>
                  ) : (
                    <button class="btn btn-primary text-white">Order</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsOrder;
