# 실행 환경

- ### **바벨**

  - jsx는 js 문법에 맞지 않아 오류가 발생함. 바벨에서 `jsx문법을 createElement 함수로 변경`해주어서 사용 가능. ([참고문서](../chapter1/1-2/README.md))

- ### **웹팩**

  - 번들링 및 다양한 기능을 제공하지만, 가장 큰 이유는 모듈 시스템 지원임. ([참고문서](../chapter1/1-3/README.md))

# 리액트

## **create-react-app**

- 페이스북에서 관리하는 공식 툴. 리액트 개발 환경을 자동으로 세팅해줌 ([참고문서](../chapter1/1-4~1-6/README.md))
- ### 환경변수
  - `REACT_APP`을 `PREFIX로 전달`하여 환경변수 이용 가능
  - `process.env.REACT_APP_...`으로 환경변수 접근 가능
  - `process.env.NODE_ENV`는 실행 방법에 따라 기본으로 전달 됨 (`development`, `production`, `test`)
  - 커맨드라인으로 환경변수 전달 방법
    - mac: `REACT_APP_API_URL=api.myapp.com npm start`
    - windows: `set "REACT_APP_API_URL=api.myapp.com" && npm start`
  - dotenv 패키지를 이용하여 간편하게 관리 가능.

## **최적화**

- 자식 요소가 많은 컴포넌트가 mount/unmount를 반복되면 성능이 저하된다. ([참고문서](../chapter5/5-9/README.md))
- 리스트 요소 중간에 값이 추가되거나 변경 될 떄 `key`를 사용해 최적화해야한다.
  > `key` 속성엔 id 넣는 것 추천. 어쩔 수 없을땐 배열 인덱스를 넣어도 좋으나, 순서가 변경될 때 비효율적.
- ### 동적 데이터 호출
  ```javascript
  //아래와 같은 코드로 동적 데이터 파일 호출이 가능함. (일반적인 import문은 로딩 시 항상 불러오지만, 아래와 같은 동적 import문은 코드 실행 시점에 불러옴)
  function onClick() {
    import("./data.json").then(({ default: data }) => {
      console.log(data);
    });
  }
  ```

## **리액트 내부 기능**

- ### **컴포넌트**
  - #### `React.StrictMode`
    - 개발환경에서만 동작함. 리액트에서 잘못 사용한 것들을 잡아내기 위해 사용함.
  - #### `React.Fragment`
    - 실제 돔에 반영되지 않는 가상 컴포넌트임. `<>`로 축약 가능하며 속성값은 `key`만 전달 가능 ([참고문서](../chapter2/2-3/README.md))
- ### **함수**
  - #### `React.Memo`
    - 자식컴포넌트는 부모컴포넌트의 상태값이 변경될 때마다 리렌더링 된다. (전달받지 않은 상태값이어도.) `React.Memo`를 사용하면 전달받은 props가 변경됐을 때만 리렌더링 된다. ([참고문서](../chapter2/2-2/README.md))
    - 자식 컴포넌트에서 `React.memo`를 사용했어도 조심해야 하는 상황 ([참고문서](../chapter5/5-8/README.md))
      > 부모 컴포넌트가 리렌더링 될 때, 일반 함수나 객체들은 새로 생성됨. 따라서 하위 컴포넌트 입장에서는 React.memo를 사용했어도 리렌더링 됨.
      > 그러나 성능 최적화 코드는 가독성이 안좋고 유지보수 비용이 발생하기에, 이슈가 발생하고 대응해도 늦지 않음.
      1. 상위 컴포넌트에서 상태값에 함수를 넘겨줄 경우, `useCallback` 사용 필요.
      2. 상위 컴포넌트에서 일반 객체를 넘겨줄 경우 컴포넌트 외부에서 선언하거나, `useMemo` 사용
    - `React.memo` 함수에 깊은 비교를 수행하는 두번째 매개변수를 넘길 수 있음. 넘기지 않을 경우 얕은 비교를 수행하기에 불변 변수로 관리해야 함.
      ```javascript
      function MyComponent(props) {
        // return jsx
      }
      function isEqual(prevProps, nextProps) {
        // 이전,이후 속성값을 매개변수로 받아 true 또는 false를 반환
        // true 반환 시 이전 렌더링 결과를 재사용
        // false 반환 시 변경된 부분만 업데이트
      }
      React.memo(MyComponent); //얕은 비교를 수행하는 기본 함수 사용
      React.memo(MyComponent, isEqual); //컴포넌트를 비교하여 bool값을 리턴하는 커스텀 함수 사용
      ```
  - #### `ReactDOM.createPortal`
    - 다른 DOM에 렌더링할 수 있다. 주로 모달에 사용한다 ([참고문서](../chapter2/2-3/README.md))
- ### **훅**
  - [해당 문서](./Hook.md) 참고

## **컨벤션**

- ### 추천하는 컴포넌트 파일 작성법

  1. 상단에 컴포넌트 속성값 타입 정보 입력. (`prop-types`) propType을 함수로 입력하여서 **상세한 타입 정의 및 에러 커스텀이 가능** ([참고문서](../chapter5/5-2/README.md))
  2. 컴포넌트 작성 시 이름 작성. (디버깅에 도움 됨. 익명을 사용하지 말 것.) ([참고문서](../chapter5/5-1/README.md))
  3. 컴포넌트 매개변수(props)는 구조분해할당으로 받을 것. ([참고문서](../chapter5/5-1/README.md))
  4. 컴포넌트 외부 변수와 함수는 파일 **가장 하단**에 작성할 것. ([참고문서](../chapter5/5-1/README.md))
  5. 컴포넌트 내부에서 **서로 연관된 코드는 한군데에 모아두는 것**이 좋음. (useState, useEffect 별로 구분하지 말고, 데이터 별로 구분) ([참고문서](../chapter5/5-1/README.md))
