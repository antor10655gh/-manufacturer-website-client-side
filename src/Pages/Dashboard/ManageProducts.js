import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const ManageProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch(`http://localhost:5000/products`).then((res) => res.json())
  );

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
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

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="px-6 lg:px-12">
      <h2 className="text-xl py-2">Manage Products {products.length}</h2>
      <div class="overflow-x-auto mt-2 lg:mt-5">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Minimum Quantity</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div class="avatar">
                    <div class="w-20 rounded-xl">
                      <img src={product.picture} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.name.slice(0, 10)}...</td>
                <td>{product.description.slice(0, 15)}...</td>
                <td className="text-center">${product.price}</td>
                <td className="text-center">{product.minimum_quantity}</td>
                <td className="text-center">{product.available_quantity}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-xs btn-error"
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

export default ManageProducts;
