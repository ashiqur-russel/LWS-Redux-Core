import React from "react";

const Button = ({ label, handler }) => {
  return (
    <button
      onClick={handler}
      className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
    >
      {label}
    </button>
  );
};

export default Button;
