// 전체 코드를 App.js 에 붙여넣어서 테스트 해보세요
import { createStore } from "redux";
import { createReducer } from "./redux-helper";

const INITIAL_STATE = { value: 0 };
const reducer = createReducer(INITIAL_STATE, {
  INCREMENT: (state) => (state.value += 1)
});
const store = createStore(reducer);

let prevState;
store.subscribe(() => {
  const state = store.getState();
  if (state === prevState) {
    console.log("상탯값 같음");
  } else {
    console.log("상탯값 변경됨");
  }
  prevState = state;
});

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "OTHER_ACTION" });
store.dispatch({ type: "INCREMENT" });
