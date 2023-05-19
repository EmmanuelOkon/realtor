import { useState } from "react";
import "../styles/spinner.css";

export default function Spinner() {
  const [showSpinner, setShowSpinner] = useState(true);

  const setTime = () => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 7000);
  };

  setTime();

  return showSpinner ? (
    <div className="bg-black opacity-50 flex items-center justify-center fixed inset-0 z-50">
      <svg className="svg" viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  ) : null;
}
