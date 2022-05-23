import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  if (loading || googleLoading) {
    return <Loading></Loading>;
  }

  if (error || googleError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || googleError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="pt-20 py-10">
      <div className="grid grid-cols-1 place-items-center">
        <div
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          className="form-control w-full max-w-md p-8"
        >
          <header className="mb-2">
            <h1 className="text-xl lg:text-3xl font-bold">Please Sign</h1>
          </header>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className="input input-bordered w-full max-w-md"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />

            {/* email error message show */}
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full max-w-md"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            {/* password error message show */}
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
            <label className="label mb-3">
              <button className="text-secondary text-sm">
                Forgot Password ?
              </button>
            </label>
            {signInError}
            <input
              className="btn btn-wide w-full mb-2"
              type="submit"
              value="Login"
            />

            <span className="flex flex-row justify-center">
              Don't Have an Account ?{" "}
              <Link to="/signup" className="text-secondary">
                Create an account
              </Link>
            </span>
          </form>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
          </div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-wide w-full"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
