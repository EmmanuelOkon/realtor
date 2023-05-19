import React, { useState } from "react";
import Locked from "../assets/lock.png";

import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent");
    } catch (error) {
      toast.error("Could not send reset link");
    }
  }

  return (
    <section>
      <h1 className="text-xl md:text-3xl text-center mt-6 font-bold text-red uppercase md:tracking-widest">
        Forgot Password
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="w-full md:w-[50%] lg:w-[50%] ">
          <img className="w-full" src={Locked} alt="locker" />
        </div>
        <div className="w-full md:w-[50%] bg-rd-700 py-6 lg:px-6 ">
          <form className="w-full" onSubmit={onSubmit}>
            <p className="text-sm lg:text-base font-normal md:font-medium mb-1">Enter registered e-mail</p>
            <input
              className="w-full px-4 py-2 md:text-lg text-grey bg-white border-[2px] border-grey border-opacity-25 rounded-md outline-none focus:border-fadeGreen focus:ring-transparent transition ease-in-out mb-6"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter e-mail address"
            />

            <div className="mb-4 flex justify-between whitespace-nowrap text-sm lg:text-base font-normal md:font-medium">
              {/* <p className="mb-6">
                Don't have an account?
                <Link
                  to="/signup"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out pl-1"
                >
                  Sign Up
                </Link>
              </p> */}
              <p>
                Remembered password?
                <Link
                  to="/signin"
                  className="ml-2 text-sm lg:text-base text-fadeGreen hover:text-deepGreen transition duration-200 ease-in-out"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-red hover:bg-opacity-90 text-white px-7 py-3 rounded-md font-medium text-sm transition duration-150 ease-in-out hover:bg-red active:bg-red uppercase shadow-xl"
              type="submit"
            >
              Send reset link
            </button>
            <div className="my-4 flex items-center before:border-opacity-30 before:border-t before:flex-1 before:border-grey w-full after:border-t after:flex-1 after:border-grey after:border-opacity-30">
              <p className="uppercase text-center font-semibold mx-4">or</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
