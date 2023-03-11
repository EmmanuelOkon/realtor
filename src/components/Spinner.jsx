import "../styles/spinner.css";

export default function Spinner() {
  return (
    <div className="bg-black opacity-50 flex items-center justify-center fixed inset-0 z-50">
      {/* <span class="outerSquare">
        <span class="innerSquare"></span>
      </span> */}
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
}
