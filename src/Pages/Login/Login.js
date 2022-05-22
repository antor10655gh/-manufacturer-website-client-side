import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    console.log(user);
  }

  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 place-items-center">
        <div
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          class="form-control w-full max-w-md p-8"
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
            class="input input-bordered w-full max-w-md mb-2"
          />
          <label class="label">
            <span class="label-text text-lg">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            class="input input-bordered w-full max-w-md"
          />
          <label class="label mb-5">
            <button className="text-secondary text-sm">
              Forgot Password ?
            </button>
          </label>
          <button class="btn btn-wide w-full mb-2">Login</button>
          <span className="text-center">
            Don't Have an Account ?{" "}
            <Link to="/signup" className="text-secondary">
              Create an account
            </Link>
          </span>
          <div class="flex flex-col w-full border-opacity-50">
            <div class="divider">OR</div>
          </div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline btn-wide w-full"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
