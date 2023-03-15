import React, { useState } from "react";

function Count2() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((count) => count + 1);
  };
  const decrease = () => [setCount((count) => count - 1)];
  return (
    <>
      
      <div>C
        <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      </div>

    </>
  );
}

export default Count2;
