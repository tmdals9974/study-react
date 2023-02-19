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

# 리덕스

## vs Context API

- 리액트 콘텍스트보다 효율적인 렌더링 기능 ([참고문서](../chapter6/6-1/README.md))
  - Context API는 Context 내 어떤 데이터라도 변경된다면, **해당 Context를 사용하고 있는 모든 컴포넌트가 리렌더링** 됨.
  - Redux에서는 해당 데이터를 사용하고 있는 컴포넌트만 리렌더링됨.

## MiddleWare

- 미들웨어를 이용해 개입 가능 ([참고문서](../chapter6/6-2/README.md))

```javascript
// 아래와 같은 구조가 middleware를 사용하기 위한 조건
const func = store => next => action => { .....next(action) }
// store: state를 모아둔 저장소
// next: reducer 호출 함수
// action: action 정보

//store에 middleware 등록
const store = createStore(myReducer, applyMiddleware(func));
```

## Reducer

- `Reducer` : 액션이 발생했을 때 새로운 상태값을 만드는 함수 ([참고문서](../chapter6/6-3/README.md))
- `Reducer`는 순수함수로 작성되어야한다. (입력이 같을때 항상 출력이 같음. random함수, http통신 등 금지)

- 상태값은 모두 불변객체로 관리되어야하며, 여러번 중첩되어 깊이 있는 속성 하나만 바꾸더라도, 해당 속성의 부모들 모두 바뀌어야한다.
- 모두 불변객체로 관리되기 때문에, 참조값을 사용하지 말고 id값을 이용해야함.

- 실무에선 `createReducer` 함수를 생성하여 활용

## Store

- 스토어는 상태값을 저장하는 역할과, 액션 처리가 끝났다는 것을 외부에 알려주는 역할을 함. ([참고문서](../chapter6/6-3/README.md))
- createStore 함수에 reducer를 넣어 store를 생성.
- store.subscribe 함수를 이용하여 액션 처리가 끝났을 경우 함수를 실행할 수 있음.

## react-redux

- redux 사용을 도와주는 라이브러리.
- 해당 라이브러리 없이 구현시, `store.scribe`가 컴포넌트가 **사용하지 않는 데이터가 업데이트 됐을 때에도 작동**하게 됨. ([참고문서](../chapter6/6-4/README.md))
- 사용법은 해당 [문서](../chapter6/6-5/README.md) 참고

## reselect

- redux에 **저장된 데이터를 화면에 보여줄 때**는 다양한 형식으로 가공해야할 때가 있음. (ex: filter, foramt 등) (강의 영상 초반부분에 reselect를 사용하지 않고 가공하는 방법 참고)
- 이 때, `reselect` 라이브러리를 사용하여 간편하고 성능좋게 가공 가능. (메모이제이션 기능을 지원) ([참고문서](../chapter6/6-6/README.md))
- 만약 selector 내에서 의존하는 값 중 하나라도 redux에서 관리하는 값이 아니라면, 메모이제이션 기능을 지원하지 않음. 가능하게 하는 방법은 `reselect` 공식문서 참고

## redux-saga

- ([참고문서](../chapter6/6-8/README.md))
- redux store 생성 시, saga 등록 필요 (`store.js`)
- `redux 미들웨어`에서 `saga 미들웨어`를 작동시킴.
- redux-saga의 부수효과 함수들(all, call, put, takeLeading 등..)은 해야할 일을 설명하는 객체를 반환함 (ex: `PUT: { channel:null, action:{ type: "timeline/SET_LOADING", isLoading: false } }`)

- ### **제너레이터 이해하기**

  - `function*` 예약어로 `generator 함수` 생성.
  - `generator 함수` 실행 시 `generator 객체` 반환
  - `generator 객체` 내 `next 함수` 실행 시, `generator 함수` 내 `yield`를 만날 떄 까지 코드 실행. `yield 객체` 반환. (`2-1.js`)
  - 함수 간 협력이 가능하다 (`7.js`)
  - generator는 `iterator`이면서 `iterable`을 이다.
    - 다음 조건을 만족하는 객체는 `반복자(iterator)`이다.
      - next 메서드를 갖고 있다.
      - next 메서드는 value와 done 속성값을 가진 객체를 반환한다.
      - done 속성값은 작업이 끝났을 때 참이 된다.
    - 다음 조건을 만족하면 `반복 가능(iterable)한 객체`다.
      - Symbol.iterator 속성값으로 함수를 갖고 있다.
      - 해당 함수를 호출하면 반복자(iterator)를 반환한다.
    - `for of 반복문`과 `전개연산자(...)`는 `iterable` 대상으로 작동한다.

- ### **generator 함수와 saga 미들웨어의 협업**

  - generator 함수에서 `yield` 호출 시 함수 반환 객체를 `saga 미들웨어`에 전달함.
  - `saga 미들웨어`는 객체가 요구한 일을 실행한 후, 제너레이터로 완료를 알림.
  - 제너레이터는 다음 `yield`를 호출하며 위 과정을 반복.

    ```javascript
    import { all, call, put, takeLeading } from "redux-saga/effects";
    import { actions, types } from "./index";
    import { callApiLike } from "../../common/api";

    export function* fetchData(action) {
      // README.md - generator 함수와 saga 미들웨어의 협업 참고

      //put: 리덕스 액션을 발생시킨다.
      yield put(actions.setLoading(true));
      yield put(actions.addLike(action.timeline.id, 1));
      //call: 함수를 실행시킨다.
      yield call(callApiLike);
      yield put(actions.setLoading(false));
    }

    export default function* () {
      //all : 배열 내 모든 함수 실행
      //takeLeading : 첫번째 매개변수로 받은 액션이 실행되면, 두번째 매개변수로 받은 함수를 실행한다. takeLeading은 처리중인 액션이 있을 때, 재요청이 들어와도 무시한다. takeLatest는 처리중인 액션을 취하고, 재요청을 처리한다.
      yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
    }
    ```

- ### **하나의 제너레이터 함수로 두개의 액션을 처리하는 방법**

  ```javascript
  function* loginFlow() {
    while (true) {
      //take: redux-saga의 effects. 액션이 실행될 때까지 기다린다.
      const { id, password } = yield take(types.LOGIN);
      //로그인 API 호출
      const userInfo = yield call(callApiLogin, id, password);
      //액션 호출. 로그인 정보 저장.
      yield put(types.SET_USER_INFO, userInfo);

      //로그아웃할 떄까지 대기.
      yield take(types.LOGOUT);
      //로그아웃 API 호출.
      yield call(callApiLogout, id);
      //액션 호출. 로그인 정보 비우기.
      yield put(types.SET_USER_INFO, null);
    }
  }
  ```

- ### **제너레이터 함수 내 에러처리**

  ```javascript
  function* loginFlow() {
    while (true) {
      yield put(types.SET_ERROR, "");
      try {
        const { id, password } = yield take(types.LOGIN);
        const userInfo = yield call(callApiLogin, id, password);
        yield put(types.SET_USER_INFO, userInfo);
        yield take(types.LOGOUT);
        yield call(callApiLogout, id);
        yield put(types.SET_USER_INFO, null);
      } catch (err) {
        yield put(types.SET_ERROR, err);
      }
    }
  }
  ```

- ### **디바운스(debounce)**

  - 짧은 시간에 같은 이벤트가 반복해서 발생할 때, 모든 이벤트를 처리하기 부담스러울 때 사용.
  - **첫번째 혹은 마지막 이벤트만 처리**하도록 도와줌.

    ```javascript
    //saga.js
    export function* trySetText(action) {
      yield put(actions.setText(action.text));
    }

    export default function* () {
      yield all([
        debounc(500, types.TRY_SET_TEXT, trySetText), //액션 발생 시 0.5초를 기다린 후에 trySetText함수 실행 (마지막 이벤트만 처리)
      ]);
    }
    ```
