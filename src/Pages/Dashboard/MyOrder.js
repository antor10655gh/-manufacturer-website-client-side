import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery("order", () =>
    fetch(
      `https://arcane-headland-03409.herokuapp.com/order?customerEmail=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          console.log("res", res);
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => setOrders(data))
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDeleteOrder = (id) => {
    fetch(`https://arcane-headland-03409.herokuapp.com/order/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("Deleted");
          refetch();
        }
      });
  };

  return (
    <div className="px-6 lg:px-12">
      <h2 className="text-xl py-2">My Orders - {orders.length}</h2>
      <div class="overflow-x-auto mt-2 lg:mt-5">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date/Time</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.customerName}</td>
                <td class="tooltip" data-tip={order.orderProductName}>
                  {order.orderProductName.slice(0, 10)}...
                </td>
                <td>{order.orderQuantity}</td>
                <td>{order.orderPrice}</td>
                <td>{order.date}</td>
                <td>
                  {order.orderPrice && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-secondary lg:px-5">
                        Pay
                      </button>
                    </Link>
                  )}
                  {order.orderPrice && order.paid && (
                    <div>
                      <button className="btn btn-xs disabled text-primary lg:px-4">
                        Paid
                      </button>
                      <p>
                        Transaction id:{" "}
                        <span className="text-primary">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteOrder(order._id)}
                    for="delete-confirm-modal"
                    class="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
