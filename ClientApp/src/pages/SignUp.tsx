import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { UserType, APIError } from "src/types";

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UserType>();

  const _passwordClick = () => {
    setPasswordEye(!passwordEye);
  };
  const _confirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  const onSubmit = async function submitNewUser(data: UserType) {
    const response = await fetch("/api/User", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw await response.json();
    }
  };

  function _radioClick(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.value === "Yes" ? true : false;
  }

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center p-8 ">
        <form
          className="mx-auto w-full max-w-[400px] rounded bg-slate-100 p-8 text-gray-950 shadow-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          {successMessage && (
            <p className="flex justify-center border-2 border-solid border-blue-700 bg-gray-50">
              {errorMessage}
            </p>
          )}
          {errorMessage && (
            <p className="flex justify-center border-2 border-solid border-red-700 bg-gray-50">
              {errorMessage}
            </p>
          )}
          <h1 className="flex justify-center text-2xl ">Sign Up</h1>
          <div className="flex justify-around p-8 ">
            <p className="flex cursor-pointer border bg-slate-50 px-6 py-2 pb-1 shadow-lg hover:shadow-xl">
              <BsFacebook />
            </p>
            <p className="flex cursor-pointer border bg-slate-50 px-6 py-2 pb-1 shadow-lg hover:shadow-xl">
              <FcGoogle />
            </p>
          </div>
          <div className="mb-4 flex  flex-col">
            <label className="mb-1 px-1">First Name</label>
            <input
              autoFocus
              className="h-8 rounded px-3"
              placeholder="First Name"
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
              <p role="alert">First name is required</p>
            )}
          </div>
          <div className="mb-4 flex flex-col">
            <label className="mb-1 px-1">Last Name</label>
            <input
              className="h-8 rounded px-3 "
              placeholder="Last Name"
              {...register("lastName")}
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="mb-1 px-1">Email</label>
            <input
              type="text"
              className="h-8 rounded px-3 "
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="mb-1 px-1">Zip Code</label>
            <input
              className="h-8 rounded px-3 "
              type="text"
              {...register("zipCode")}
              placeholder="Zip Code"
            />
          </div>
          <div className="mb-2 flex flex-col pt-2">
            <label className="px-1">Are you a licensed contractor?</label>
            <div className="flex w-full justify-around py-2">
              <div>
                <label className="px-2">Yes</label>
                <input
                  type="radio"
                  value="yes"
                  name="isContractor"
                  onChange={_radioClick}
                />
              </div>
              <div>
                <label className="px-2">No</label>
                <input
                  type="radio"
                  name="isContractor"
                  value="no"
                  onChange={_radioClick}
                />
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col pt-2">
            <label className="mb-1 px-1">Create a Username</label>
            <input
              className="h-8 rounded px-3"
              type="text"
              placeholder="Username"
              {...(register("username"), { required: true })}
            />
          </div>
          <div className="relative mb-4 flex flex-col pt-2 ">
            <label className="mb-1 px-1">Create a Password</label>
            <input
              className="h-8 rounded px-3"
              type={passwordEye === false ? "password" : "text"}
              placeholder="Password"
              {...register("password")}
            />

            <div className="absolute right-3 top-10 flex cursor-pointer text-2xl">
              {passwordEye === false ? (
                <AiFillEyeInvisible onClick={_passwordClick} />
              ) : (
                <AiFillEye onClick={_passwordClick} />
              )}
            </div>
          </div>
          <div className="relative flex flex-col ">
            <label className="mb-1 px-1">Confirm Password</label>
            <input
              className="h-8 rounded px-3"
              type={confirmPasswordEye === false ? "password" : "text"}
              placeholder="Confirm Password"
            />

            <div className="absolute right-3 top-8 flex cursor-pointer text-2xl">
              {confirmPasswordEye === false ? (
                <AiFillEyeInvisible onClick={_confirmPasswordClick} />
              ) : (
                <AiFillEye onClick={_confirmPasswordClick} />
              )}
            </div>
          </div>
          <button className="mt-8 w-full rounded-xl bg-gray-500 py-3 text-white hover:bg-primary-500">
            Sign Up
          </button>
          <p className="mt-8 text-center">
            Already a member?{" "}
            <Link to="/sign-in" className="underline">
              Sign In Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
