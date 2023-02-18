import React from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = ({ id, increment, decrement, count }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button label={"Increment"} handler={() => increment(id)} />
        <Button label={"Decrement"} handler={() => decrement(id)} />
      </div>
    </div>
  );
};

export default Counter;
