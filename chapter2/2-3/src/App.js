import React from "react";
import ReactDOM from "react-dom";

export default function App() {
  return (
    <>
      {Array.from({ length: 5 }, (item, index) => (
        <p key={index}>{index}</p>
      ))}

      {ReactDOM.createPortal(
        <div>
          <p>포탈</p>
          <p>테스트</p>
        </div>,
        document.getElementById("something")
      )}
    </>
  );
}
