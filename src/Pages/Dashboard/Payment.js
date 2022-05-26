import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1GNCK95exOkSwmAZHQCW1TviBsoK9dZpqMwG1XiUZc1wXxCGL5wPX97Utp5PGHQbXIpfh9qK2glsDeeKJNUtEh00AsfElRRg"
);

const Payment = () => {
  const [user] = useAuthState(auth);
  const { orderId } = useParams();
  const url = `https://arcane-headland-03409.herokuapp.com/order/${orderId}`;
  const { data: order, isLoading } = useQuery(["order", orderId], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-6 lg:px-12">
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-xl text-secondary">Hello, {user.displayName} ☺</p>
          <h2 class="card-title">
            Please pay for{" "}
            <span className="font-bold">"{order.orderProductName}"</span>
          </h2>
          <p>
            You have ordered: <span className="font-bold">{order.date}</span>
          </p>
          <p>
            Please Pay:{" "}
            <span className="text-orange-500">${order.orderPrice}</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
