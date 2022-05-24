import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
  };

  return (
    <div className="px-6 lg:px-12 lg:w-3/6">
      <header className="pt-3">
        <h2 className="text-2xl py-2">Add a New Product</h2>
      </header>
      <div className="pt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            <span className="label-text text-md font-bold">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter name"
            className="input input-bordered w-full max-w-md"
            {...register("name", {
              required: {
                value: true,
                message: "Product name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text text-md font-bold">Description</span>
          </label>
          <textarea
            placeholder="Add description"
            class="input input-bordered w-full max-w-md"
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text text-md font-bold">
              Minimum Quantity
            </span>
          </label>
          <input
            type="number"
            placeholder="Enter minimum quantity"
            className="input input-bordered w-full max-w-md"
            {...register("minimum_quantity", {
              required: {
                value: true,
                message: "Minimum quantity is required",
              },
            })}
          />
          <label className="label">
            {errors.minimum_quantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minimum_quantity.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text text-md font-bold">
              Available Quantity
            </span>
          </label>
          <input
            type="number"
            placeholder="Enter available quantity"
            className="input input-bordered w-full max-w-md"
            {...register("available_quantity", {
              required: {
                value: true,
                message: "Available quantity is required",
              },
            })}
          />
          <label className="label">
            {errors.available_quantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.available_quantity.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text text-md font-bold">Price</span>
          </label>
          <input
            type="number"
            placeholder="Enter price"
            className="input input-bordered w-full max-w-md"
            {...register("price", {
              required: {
                value: true,
                message: "Price is required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text text-md font-bold">Photo</span>
          </label>
          <input
            type="file"
            name="image"
            className="input input-bordered w-full max-w-md pt-1.5"
            {...register("image", {
              required: {
                value: true,
                message: "Photo is required",
              },
            })}
          />
          <label className="label mb-4">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
          <input
            type="submit"
            value="Add Now"
            className="btn btn-accent text-white w-full max-w-md mb-2"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
