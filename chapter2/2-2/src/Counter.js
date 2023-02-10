import { useState } from "react";
import Title from "./Title";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  function onClick() {
    setCount(count + 1);
  }
  function onClick2() {
    setCount2(count2 + 1);
  }
  return (
    <div>
      <Title title={`리렌더링 테스트`} />
      <hr />
      <Title title={`현재 카운트: ${count}`} />
      <button onClick={onClick}>증가</button>
      <hr />
      <Title title={`현재 카운트2: ${count2}`} />
      <button onClick={onClick2}>증가</button>
    </div>
  );
}
