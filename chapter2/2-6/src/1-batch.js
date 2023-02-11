import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(count + 1);
    setCount(count + 1);
  }
  console.log("render called");
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

//아래 코드로 동작 시 정상 작동 가능

// function onClick() {
//     setCount(v => v + 1);
//     setCount(v => v + 1);
// }
