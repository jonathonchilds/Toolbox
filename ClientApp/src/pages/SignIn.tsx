import React from "react";
import backgroundImg from "../images/pointy-glove-guy.jpg";
import logo from "../images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  oAuthIcon,
  form,
  formContainer,
  button,
} from "../styling/tailwindClasses";

export default function SignIn() {
  return (
    <div className="h-full">
      <div className={formContainer}>
        <form className={form}>
          <h1 className="flex justify-center text-2xl ">Sign In</h1>
          <div className="flex justify-around pb-8 pt-4">
            <p className={oAuthIcon}>
              <BsFacebook />
            </p>
            <p className={oAuthIcon}>
              <FcGoogle />
            </p>
          </div>
          <p className="mb-4 flex flex-col">
            <label className="mb-1 px-1">Username</label>
            <input
              className="rounded p-2 px-4"
              type="text"
              placeholder="Username"
            />
          </p>
          <p className="flex flex-col ">
            <label className="mb-1 px-1">Password</label>
            <input
              className="rounded p-2 px-4 "
              type="password"
              placeholder="Password"
            />
          </p>
          <button className={button}>Sign In</button>
          <p className="mt-3 flex items-center">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
          <p className="mt-8 text-center">
            Not a member?{" "}
            <Link to="/sign-up" className="underline">
              Sign Up Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
