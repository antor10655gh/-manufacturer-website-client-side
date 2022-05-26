import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  const {
    data: allOrders,
    isLoading,
    refetch,
  } = useQuery("allOrders", () =>
    fetch("https://arcane-headland-03409.herokuapp.com/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDeleteOrder = (id) => {
    fetch(`https://arcane-headland-03409.herokuapp.com/orders/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully order deleted");
        refetch();
      });
  };

  return (
    <div className="px-6 lg:px-12">
      <h2 className="text-xl py-2">Manage All Orders </h2>
      <div class="overflow-x-auto mt-2 lg:mt-5">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>O. Quantity</th>
              <th>Total Price</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Acton</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td className="text-center">{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td>{order.orderProductName.slice(0, 10)}...</td>
                <td className="text-center">{order.orderQuantity}</td>
                <td className="text-center">${order.orderPrice}</td>
                <td className="text-center">{order.address}</td>
                <td className="text-center">{order.phone}</td>
                <td>
                  <label
                    onClick={() => handleDeleteOrder(order._id)}
                    for="delete-confirm-modal"
                    class="btn btn-xs btn-error"
                  >
                    Delete
                  </label>
                  <label
                    for="delete-confirm-modal"
                    class="btn btn-xs btn-info m-2"
                  >
                    Pending...
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
