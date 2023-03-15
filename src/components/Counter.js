import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count => count + 1)
  };
  const decrease = () => {
    setCount(count => count -1)
  };
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
}

export default Counter;
