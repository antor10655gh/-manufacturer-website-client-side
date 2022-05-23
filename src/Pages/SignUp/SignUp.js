import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updateLoading, updateError] = useUpdateProfile(auth);

  let signUpError;

  const navigate = useNavigate();

  if (googleUser) {
    console.log(googleUser);
  }

  if (loading || googleLoading || updateLoading) {
    return <Loading></Loading>;
  }

  if (error || googleError || updateError) {
    signUpError = (
      <p className="text-red-500">
        <small>
          {error?.message || googleError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
    navigate("/home");
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
            <h1 className="text-xl lg:text-3xl font-bold">Please Sign Up</h1>
          </header>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
              <span className="label-text text-lg">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="input input-bordered w-full max-w-md"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
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
            {signUpError}
            <input
              className="btn btn-wide w-full mb-2"
              type="submit"
              value="Sign Up"
            />

            <span className="flex flex-row justify-center">
              Already Have an Account ?{" "}
              <Link to="/login" className="text-secondary">
                Please Login
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

export default SignUp;
