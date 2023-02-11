import React, { useState } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  function onClick() {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  }
  const result = count1 >= count2;

  return (
    <div>
      <h2>{count1}</h2>
      <h2>{count2}</h2>
      <h2>{result ? "yes" : "no"}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
