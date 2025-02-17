import React, { useState } from "react";
import "./counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter: {count} </h1>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
export default Counter;
