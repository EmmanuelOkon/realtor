import { useState } from "react";
import Locked from "../assets/signin.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const position = "top-right";
  const duration = 3000;
  const others = {
    closeButton: false,
  };

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success("Sign in successful");
        navigate("/");
      }
    } catch (error) {
      toast.error("Invalid credentials", {
        position,
        autoClose: duration,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        transition: Slide,
        ...others,
      });
    }
  }

  return (
    <section>
      <h1 className="text-xl md:text-3xl text-center mt-6 font-bold text-red uppercase  md:tracking-widest">
        Log in
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="w-full md:w-[50%] lg:w-[50%] ">
          <img className="w-full" src={Locked} alt="locker" />
        </div>
        <div className="w-full md:w-[50%] bg-rd-700 py-6 lg:px-6">
          <form className="w-full" onSubmit={onSubmit}>
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
            <div className="mb-4 flex justify-between items-center whitespace-nowrap txt-sm lg:text-base font-normal md:font-medium">
              <p className="text-[13px] md:text-base">
                Don't have an account?
                <Link
                  to="/signup"
                  className="text-red hover:text-opacity-90 transition duration-200 ease-in-out pl-1"
                >
                  Sign Up
                </Link>
              </p>
              <p className="text-[13px] md:text-base">
                <Link
                  to="/forgotpassword"
                  className="text-sm lg:text-base text-fadeGreen hover:text-deepGreen transition duration-200 ease-in-out"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-red text-white px-7 py-3 rounded-md font-medium text-sm transition duration-150 ease-in-out hover:bg-opacity-90 active:bg-red-900 uppercase shadow-xl"
              type="submit"
            >
              Log In
            </button>
            <div className="my-4 flex items-center before:border-t before:flex-1 before:border-grey w-full after:border-t after:flex-1 after:border-grey before:border-opacity-30 after:border-opacity-30">
              <p className="uppercase text-center font-semibold mx-4 ">or</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
