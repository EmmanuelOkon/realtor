import React, { useState } from "react";
import Locked from "../assets/signin.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold text-red-600 uppercase border-b-red-900 tracking-widest">Log in</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="w-full md:w-[50%] lg:w-[50%] ">
          <img className="w-full" src={Locked} alt="locker" />
        </div>
        <div className="w-full md:w-[50%] bg-rd-700 py-6  lg:px-6 ">
          <form className="w-full">
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-[2px] border-grey-300 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none transition ease-in-out mb-6"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter e-mail address"
            />
            <div className="relative">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-[2px] border-grey-300 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none transition ease-in-out mb-6"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Enter password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-4 top-[.8rem] text-2xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-4 top-[.8rem] text-2xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm lg:text-base font-normal md:font-medium">
              <p className="mb-6">
                Don't have an account?
                <Link
                  to="/signup"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out pl-1"
                >
                  Sign Up
                </Link>
              </p>
              <p>
                <Link
                  to="/forgotpassword"
                  className="text-sm lg:text-base text-green-600 hover:text-green-800 transition duration-200 ease-in-out"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-red-600 text-white px-7 py-3 rounded-md font-medium text-sm transition duration-150 ease-in-out hover:bg-red-700 active:bg-red-900 uppercase shadow-xl"
              type="submit"
            >
              Log In
            </button>
            <div className="my-4 flex items-center before:border-t before:flex-1 before:border-gray-300 w-full after:border-t after:flex-1 after:border-gray-300">
              <p className="uppercase text-center font-semibold mx-4">or</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
