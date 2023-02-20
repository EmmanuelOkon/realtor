import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../utils/firebase";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update displayName in Firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        // Update name in the Firestore
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
        if (changeDetails === true) {
          toast.success("Changes Updated");
          window.location.reload();
        }
      }
      
    } catch (error) {
      toast.error("Changes update failed");
    }
  }

  function onLogout() {
    auth.signOut();
    navigate("/");
  }

  return (
    <>
      <section>
        <h1 className="text-xl md:text-3xl text-center mt-6 font-semibold text-red-600 uppercase  md:tracking-wide">
          Welcome Back
          <span className="text-green-700 capitalie font-bold md:ml-2">
            {/* {name} */}
            {auth.currentUser.displayName}
          </span>
        </h1>
        <div className="w-full md:w-[50%] px-3 py-6 lg:px-6 mx-auto">
          <form className="-full">
            {/* Name Input */}
            <input
              className={`w-full px-4 py-2 md:text-lg text-gray-700 bg-white border-[.2px] border-grey-300 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none transition ease-in-out mb-6 ${
                changeDetails && "bg-green-100"
              }`}
              type="text"
              id="name"
              value={name}
              disabled={!changeDetails}
              onChange={onChange}
            />

            {/* Email Input */}
            <input
              className="w-full px-4 py-2 md:text-lg text-gray-700 bg-white border-[.2px] border-grey-300 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none transition ease-in-out"
              type="email"
              id="email"
              value={email}
              disabled
            />

            <div className="my-3 flex justify-between items-center whitespace-nowrap text-sm lg:text-base font-normal md:font-medium">
              <p className="text-[13px] md:text-base">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetails && onSubmit();
                    setChangeDetails((prevState) => !prevState);
                  }}
                  className="text-green-600 hover:text-green-800 transition duration-200 ease-in-out ml-1 cursor-pointer"
                >
                  {changeDetails ? "Save Changes" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-[13px] md:text-base text-sm lg:text-base text-red-600 hover:text-red-700 transition duration-200 ease-in-out cursor-pointer "
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
