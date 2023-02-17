# react-redux 없이 직접 구현하기

- redux 사용시 주로 `react-redux` 라이브러리를 함께 사용함.
- 사용하는 이유를 알기 위해 일단 해당 라이브러리를 제외하고 구현.

- `FriendMain.js`, `TimelineMain.js`
  - redux의 `state`가 바뀌면 강제로 리렌더링 하기위해 `forceUpdate`를 사용.
  - `store.scribe`가 컴포넌트가 **사용하지 않는 데이터가 업데이트 됐을 때에도 작동**하여서, 이전 데이터와 비교하는 로직 추가.