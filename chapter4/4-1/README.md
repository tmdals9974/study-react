# 콘텍스트 API로 데이터 전달하기

- props의 단점 보완을 위함. 전역 상태값 보관을 위해 context 사용. (`1-no-context` 참고)
- `createContext` 함수에 초기값을 넣어 호출하면 객체가 반환됨. 반환된 객체에는 2가지 컴포넌트가 들어있음. (`2-context` 참고)
  1. `Provider`: 값 입력 용도. value에 값을 넣어주면 됨. (**값이 변경될 경우 모든 하위 Consumer는 리렌더링됨**)
  2. `Consumer`: 값 출력 용도. children에 함수를 넣어주어야함. **가장 가까운 Provider를 찾아서 사용**. 없을 경우 초기값 사용.
     - 초기형태에서는 `Consumer` 컴포넌트를 통해서만 데이터를 받을수 있었어서 script에서 사용할 수 없는 불편함이 있었음. (`2-context` 참고)
     - 리액트 훅이 생성되며 `Consumer`를 사용하지 않고, **`useContext` 함수를 이용하여 같은 기능을 할 수 있음.** (`3-context-hook` 참고)
     - `useContext` 이용 시 Context를 중복으로 사용할 수 있으며, 렌더링 성능상 이점이 있음. (`4-multi` 참고)
- 값 변경 방법: context를 2개 생성 (`5-1-edit`, `5-2-edit-child` 참고)
  - 상위 context: 상태값 변경 함수를 제공
  - 하위 context: 상태값 제공
- `context` 사용 시 주의점
  - `<Context.Provider value={{name, age}} />` 와 같이 작성 시 컴포넌트 리렌더링 될 때 마다 객체가 새로 생성되어 `Consumer`가 리렌더링됨. (`6-1-caution` 참고)
  - `Provider` 컴포넌트 내부에 `Consumer`가 들어있어야함. (보통 루트에 작성) (`6-2-caution` 참고)

## 실행 방법

- example 폴더에 있는 코드를 src/App.js 로 복사해서 실행
