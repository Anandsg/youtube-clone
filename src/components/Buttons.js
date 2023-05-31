import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="m-3 p-1 px-4 w-auto bg-gray-200 inline-block rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
