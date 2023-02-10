import React, { useEffect } from "react";
import ReactDOM from "react-dom";

/**
 * ? 1. pushState
 * page1, page2 버튼 클릭 시 브라우저에게 페이지 이동 함수 호출
 * 주소창 확인해보면 실제로 /page1, /page2로 이동하였음을 알 수 있음
 * 
 * ? 2. popstate
 * 브라우저의 뒤로가기 버튼 클릭 시, onpopstate 함수에서 이벤트 받을 수 있음
 */

function App() {
  useEffect(() => {
    window.onpopstate = function (event) {
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }, []);
  return (
    <div>
      <button onClick={() => window.history.pushState("v1", "", "/page1")}> 
        page1
      </button>
      <button onClick={() => window.history.pushState("v2", "", "/page2")}>
        page2
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
