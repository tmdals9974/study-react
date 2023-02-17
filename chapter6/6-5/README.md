# react-redux 사용하기

> 6-4강에 이어서 진행됩니다.

1. `App.js`에 `Provider` 추가 (리덕스에서 액션이 처리되었을 때, 이벤트를 받아서 하위에 있는 다른컴포넌트가 리렌더링 되도록 도와줌.)
2. `FriendMain.js`, `TimelineMain.js`에서 ForceUpdate와 관련된 로직 제거.
3. `FriendMain.js`, `TimelineMain.js`에서 `useSelector` 훅을 이용해 데이터를 가져옴 + 이전값과 비교하여 리렌더링.
4. `FriendMain.js`, `TimelineMain.js`에서 `store.dispatch`를 `useDispatch` 훅으로 변경

## 여러 데이터를 가져오고 싶은 경우

- `useSelector`를 여러번 이용해도 됨.
- `useSelector(state => [state.friend, state.timeline])` 처럼 배열을 반환하는 것도 가능.
  - 다만 이 방법은 매번 배열이 새로 생성되어 데이터가 변경되지 않아도 리렌더링 될 수 있음.
  - 단점 극복은 `react-redux`에서 제공하는 `shallowEqual` 함수를 이용하면 됨. `useSelector(state => [state.friend, state.timeline], shallowEqual)` 얕은 비교를 통해 friend와 timeline의 주소값이 바뀌었는지 체크하여 리렌더링해줌.
  - 매번 `shallowEqual`을 사용하는것은 번거로우니 `커스텀 훅`을 만드는 것을 추천. (`2.js`)
