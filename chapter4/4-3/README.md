# 리액트 내장 훅 살펴보기

## 훅을 배우기 전에 알아야 할 것

1. 함수형 컴포넌트는 그냥 함수다. 다시 한 번 강조하자면 **함수형 컴포넌트는 단지 jsx를 반환하는 함수**이다.
2. 컴포넌트가 렌더링 된다는 것은 누군가가 그 함수(컴포넌트)를 호출하여서 실행되는 것을 말한다. **함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수, 또다른 함수 등)도 매번 다시 선언되어 사용된다.**
3. 컴포넌트는 자신의 state가 변경되거나, 부모에게서 받는 props가 변경되었을 때마다 리렌더링 된다. (심지어 하위 컴포넌트에 최적화 설정을 해주지 않으면 **부모에게서 받는 props가 변경되지 않았더라도 리렌더링** 되는게 기본이다. )

## 훅 목록

- ### **useState**
- ### **useEffect**
  - 렌더링 된 이후 **비동기로 부수효과 함수 호출**
- ### **useContext**
- ### **useRef**
  - 자식요소에 접근하기 위해 사용 ([참고문서](../4-2/README.md))
  - 렌더링과 상관 없는 데이터를 다룰 때도 사용 가능 (useState로 데이터 관리 시, UI와 관련 없음에도 리렌더링 됨. [참고문서1](./example/1-1-useRef.js), [참고문서2](./example/1-2-useRef.js))
- ### **useMemo**
  - 계샨량이 많은 함수의 반환값을 재활용하는 용도로 사용 ([참고문서](./example/2-useMemo.js))
  - useMemo 함수 매개변수
    - 첫번째 매개변수: 실행할 함수. 함수 실행값을 기억한다.
    - 두번째 매개변수: 의존성 배열. 배열에 들어온 상태값이 하나라도 변경되면 **함수를 재실행**한다.
    - `const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]); //v1, v2는 상태값`
- ### **useCallback**
  - 하위 컴포넌트에 props로 함수를 전달할 경우, 상위 컴포넌트가 리렌더링 된다면 매번 함수가 재생성 되어 하위 컴포넌트는 의미없이 리렌더링되는 상황이 생김. ([참고문서](./example/3-useCallback.js))
  - useCallback 함수 매개변수
    - 첫번째 매개변수: 반환할 함수. 함수 반환값을 기억한다.
    - 두번째 매개변수: 의존성 배열. 배열에 들어온 상태값이 하나라도 변경되면 **새로운 함수를 반환**한다.
    - `const onSave = useCallback(() => saveToServer(name,age), [name,age]); //name, age는 상태값`
      > 여기서 잠깐! useMomo와 useCallback의 차이는 거의 없다. react 공식문서 내용: `useMemo((...)=> fn, deps) === useCallback(fn, deps)`
- ### **useReducer**
  - 여러개의 상태값을 관리할 때 사용 ([참고문서](./example/4-1-useReducer.js))
  - redux의 reducer 사용 방법과 거의 동일.
  - useReducer와 ContextAPI를 이용하면 하위 컴포넌트로 상태값 전달할 때 유용하다. ([참고문서](./example/4-2-useReducer.js))
    > 그러나 비동기 작업이 어렵다. 프로젝트 규모가 크거나 비동기 처리가 많다면 외부 라이브러리 사용하는 것이 낫다.
- ### **useImperativeHandle**
  - 상위 컴포넌트에서 하위 함수형컴포넌트에 접근할 때 사용
  - 하위 컴포넌트에서 ref에 해당 훅을 이용하여 변수/함수를 넣어서 넘겨주는 형식. ([참고문서1](./example/5-1-useImperativeHandle.js), [참고문서2](./example/5-2-useImperativeHandle.js))
- ### **useLayoutEffect**
  - useEffect와 유사하지만, **부수효과 함수를 동기로 호출**함.
  - 렌더링 결과가 돔에 반영된 직후에 바로 호출됨.
  - 따라서 시간소요가 짧은 동작만 해야함.
  - 보통 렌더링 직후 돔 요소의 값을 읽어들이거나, 조건에 따라 컴포넌트를 리렌더링하고 싶은 경우에 사용. ([참고문서](./example/6-useLayoutEffect.js))
- ### **useDebugValue**
  - 리액트 개발자 도구에서 디버깅할 때 더 많은 정보를 제공해줄 수 있도록 도와주는 훅. ([참고문서1](./example/7-1-useDebugValue.js), [참고문서2](./example/7-2-useDebugValue.js))

## 실행 방법

- example 폴더에 있는 코드를 src/App.js 로 복사해서 실행
