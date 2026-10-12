import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };

  return (
    <>
      <h1 onClick={() => setCount((prev) => prev - 1)}>count: {count}</h1>

      <button onClick={increase}>increase</button>
    </>
  );
}

export default Counter;
