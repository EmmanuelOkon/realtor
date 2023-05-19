import React, { useState } from "react";
import Locker from "../assets/locker.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../utils/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate()
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      // delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Sign up Successful")
      navigate("/")
    } catch (error) {
      // console.log(error);
      toast.error("Something is Wrong")
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <section>
      <h1 className="text-xl md:text-3xl text-center mt-6 font-bold text-red uppercase md:tracking-widest">
        Create account
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="w-full md:w-[50%] lg:w-[50%] ">
          <img className="w-full" src={Locker} alt="locker" />
        </div>
        <div className="w-full md:w-[50%] bg-re py-6  lg:px-6 ">
          <form className="w-full" onSubmit={onSubmit}>
            <input
              className="w-full px-4 py-2 md:text-lg text-grey bg-white border-[2px] border-grey border-opacity-25 rounded-md outline-none focus:border-fadeGreen focus:ring-transparent transition ease-in-out mb-6"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full name"
            />
            <input
              className="w-full px-4 py-2 md:text-lg text-grey bg-white border-[2px] border-grey border-opacity-25 rounded-md outline-none focus:border-fadeGreen focus:ring-transparent transition ease-in-out mb-6"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter e-mail address"
            />
            <div className="relative">
              <input
                className="w-full px-4 py-2 md:text-lg text-grey bg-white border-[2px] border-grey border-opacity-25 rounded-md outline-none focus:border-fadeGreen focus:ring-transparent transition ease-in-out mb-6"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Enter password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-4 top-[.6rem] md:top-[.8rem] text-2xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-4 top-[.6rem] md:top-[.8rem] text-2xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="mb-4 flex justify-between whitespace-nowrap text-sm lg:text-base font-normal md:font-medium">
              <p className="">
                Have an account?
                <Link
                  to="/signin"
                  className="text-red hover:text-opacity-90 transition duration-200 ease-in-out pl-1"
                >
                  Sign In
                </Link>
              </p>
              {/* <p>
                <Link
                  to="/forgotpassword"
                  className="text-sm lg:text-base text-green-600 hover:text-green-800 transition duration-200 ease-in-out"
                >
                  Forgot password?
                </Link>
              </p> */}
            </div>
            <button
              className="w-full bg-red hover:bg-opacity-90 text-white px-7 py-3 rounded-md font-medium text-sm transition duration-150 ease-in-out hover:bg-red-700 active:bg-red-900 uppercase shadow-xl"
              type="submit"
            >
              Sign Up
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
