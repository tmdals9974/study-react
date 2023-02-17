import { useSelector, shallowEqual } from "react-redux";

function useMySelector(selector) {
  return useSelector(selector, shallowEqual);
}

function MyComponent() {
  const [value1, value2] = useMySelector((state) => [
    state.value1,
    state.value2
  ]);
  //const value3 = useMySelector((state) => state.value3); //value3 내에 있는 모든 객체를 얕은비교를 하게됨. 이렇게 사용하는 것은 비추천. 아랫줄처럼 사용 필요.
  const [value4] = useMySelector((state) => [state.value4]);
}
