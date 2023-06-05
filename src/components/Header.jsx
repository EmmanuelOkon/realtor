import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageState, setPageState] = useState("Sign In");
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b border-b-red shadow-sm sticky top-0 z-30">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <ul className="flex space-x-10  ">
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-grey hover:text-red border-b-[3px] border-b-white hover:border-b-red  transition-all  ${
              pathMatchRoute("/") &&
              "border-b-[#BF212F] text-red font-bold border-b-[3px]"
            }`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-grey hover:text-red border-b-[3px] border-b-white hover:border-b-red  transition-all ${
              pathMatchRoute("/offers") &&
              "border-b-[#BF212F] text-red font-bold"
            }`}
            onClick={() => navigate("/offers")}
          >
            Offers
          </li>
          <li
            className={`cursor-pointer py-3 text-sm font-semibold text-grey hover:text-red border-b-[3px] border-b-white hover:border-b-red  transition-all ${
              (pathMatchRoute("/signin") || pathMatchRoute("/profile")) &&
              "border-b-[#BF212F] text-red font-bold"
            }`}
            onClick={() => navigate("/profile")}
          >
            {pageState}
          </li>
        </ul>
      </header>
    </div>
  );
}