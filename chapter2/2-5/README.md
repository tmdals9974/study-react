# 리액트 요소와 가상돔 2

- 리액트에서 데이터 변경에 의한 화면 업데이트는 `렌더 단계`와 `커밋 단계`를 거침.

  - 렌더 단계 : 실제 돔에 반영할 변경사항을 파악하는 단계. 변경사항을 파악하기 위해 가상 돔을 이용. 렌더링을 할 때 마다 가상 돔을 만들고, 이전의 가상 돔과 비교함.
  - 커밋 단계 : 파악된 변경 사항을 실제 돔에 반영하는 단계

  - 최초 렌더 단계 코드로 살펴보기
    1. `src/App.js`의 Todo 컴포넌트가 `virtual-dom/1-init.element.js`의 객체로 변경된다.
    2. `virtual-dom/1-init.element.js` 내 Todo 컴포넌트는 `virtual-dom/2-next1.js`의 객체로 변환된다.
    3. `virtual-dom/2-next1.js`의 Title 컴포넌트가 `virtual-dom/3-next2.js`로 최종적으로 변환되어 렌더링된다.
  - 리렌더링 단계 코드로 살펴보기
    1. `src/App.js`에서 onClick 함수가 호출되어 내부 상태값이 변경될 경우 렌더 함수가 호출된다.
    2. `src/App.js`의 Todo 컴포넌트가 `virtual-dom/4-update.js` 의 객체로 변경된다. (Title 컴포넌트는 React.memo로 인해 재사용된다.)
    3. 이전의 가상돔과, 새로 생성한 객체와 비교하여 변경부분만 리렌더링한다.   
    Tip. render 함수를 한번 더 호출하면 리렌더링 된다.