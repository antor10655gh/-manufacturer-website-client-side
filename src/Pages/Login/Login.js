import React from "react";

const Login = () => {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 place-items-center">
        <div
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          class="form-control w-full max-w-xs p-5"
        >
          <header>
            <h1 className="text-xl lg:text-3xl font-bold">Please Login</h1>
          </header>
          <label class="label">
            <span class="label-text text-lg">Email</span>
          </label>
          <input
            type="text"
            placeholder="Enter email"
            class="input input-bordered w-full max-w-xs mb-2"
          />
          <label class="label">
            <span class="label-text text-lg">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label pb-5">
            <button className="text-secondary text-sm">
              Forgot Password ?
            </button>
          </label>
          <button class="btn btn-wide w-full">Login</button>
          <div class="flex flex-col w-full border-opacity-50">
            <div class="divider">OR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
