import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../utils/firebase";

export default function OAuth() {
  const navigate = useNavigate();
  const position = "top-right";
  const duration = 3000;
  const others = {
    closeButton: false,
  };
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user already exists
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Google authentication failed", {
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
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-deepGreen text-white px-7 py-3 uppercase text-sm font-medium hover:bg-opacity-90 active:bg-deepGreen rounded-md transition-all shadow-xl"
    >
      <FcGoogle className="mr-2 text-2xl bg-white rounded-full" /> Continue with
      Google
    </button>
  );
}