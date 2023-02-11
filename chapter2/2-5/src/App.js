import React, { useState } from "react";
import ReactDOM from "react-dom";
import NewReactDOM from "react-dom/client";

export default function Todo({ title, desc }) {
  const [priority, setPriority] = useState("high");
  function onClick() {
    setPriority(priority === "high" ? "low" : "high");
  }
  return (
    <div>
      <Title title={title} />
      <p>{desc}</p>
      <p>{priority === "high" ? "우선순위 높음" : "우선순위 낮음"}</p>
      <button onClick={onClick}>우선순위 변경</button>
    </div>
  );
}

const Title = React.memo(({ title }) => {
  return <p style={{ color: "blue" }}>{title}</p>;
});

// 예전 버전 코드
// ReactDOM.render(<Todo title="리액트 공부하기" desc="실전 리액트 프로그래밍" />, document.getElementById("root2"));

// 최신 코드
const root2 = NewReactDOM.createRoot(document.getElementById('root2'));
root2.render(<Todo title="리액트 공부하기" desc="실전 리액트 프로그래밍" />)