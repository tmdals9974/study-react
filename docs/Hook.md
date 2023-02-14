# 리액트 내장 훅 살펴보기

## 훅을 배우기 전에 알아야 할 것

1. 함수형 컴포넌트는 그냥 함수다. 다시 한 번 강조하자면 **함수형 컴포넌트는 단지 jsx를 반환하는 함수**이다.
2. 컴포넌트가 렌더링 된다는 것은 누군가가 그 함수(컴포넌트)를 호출하여서 실행되는 것을 말한다. **함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수, 또다른 함수 등)도 매번 다시 선언되어 사용된다.**
3. 컴포넌트는 자신의 state가 변경되거나, 부모에게서 받는 props가 변경되었을 때마다 리렌더링 된다. (심지어 하위 컴포넌트에 최적화 설정을 해주지 않으면 **부모에게서 받는 props가 변경되지 않았더라도 리렌더링** 되는게 기본이다.)

## 훅 사용 시 지켜야 할 규칙 ([참고문서](../chapter2/2-9/README.md))

- 규칙 1: 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야 한다.
  - if-else문에서 useState를 사용한다던가, if return 문 이후 useState를 호출하는 등 상황에 따라 순서가 변할 수 있으면 안됨.
- 규칙 2: 훅은 함수형 컴포넌트 또는 커스텀 훅 안에서만 호출되어야 한다.
  - 그래야 리액트 내부에서 관리할 수 있으며, 리액트 내부에서 훅을 순서대로 관리함

## 훅 목록

- ### **useState**
  - useState를 사용하여 상태값을 초기화해야 상태값 변경을 감지할 수 있다
  - 상태값 변경 함수는 비동기이면서 배치로 처리된다. ([참고문서](../chapter2/2-6/README.md))
    - 리액트는 효율적인 상태값 변경을 위해 여러개의 상태값 변경 요청을 한번에 처리함. 만약 동기로 처리하게 되면, 하나의 상태값이 변경 될 때마다 화면이 변경되기 때문에 성능 이슈가 생길 수 있기 때문.
- ### **useEffect**
  - 첫번째 매개변수로 함수 전달(`부수효과 함수`), 두번째 매개변수(`의존성 배열`)에 상태값이 담긴 배열 전달 시, **의존성 배열 내의 상태값이 변경되면 부수효과 함수가 실행**된다. ([참고문서](../chapter2/2-7/README.md))
  - 의존성 배열에 undefined 전달 시, **렌더링될 때 마다 호출**된다.
  - 의존성 배열에 빈 배열을 넘길 경우, **컴포넌트 mount/unmount 시 호출**된다
  - 의존성 배열에는 부수 효과 함수에 사용된 **컴포넌트 상태값, 컴포넌트 속성값, 컴포넌트 지역변수, 컴포넌트 지역함수**가 **`무조건`** 들어가야함. (상태값 변경 함수 제외) (외부변수, 외부함수 제외)
  - useEffect는 **렌더링 된 이후에만 실행**되며, **비동기로 부수효과 함수 호출**
- ### **useContext**
  - props의 단점 보완을 위함. 전역 상태값 보관을 위해 context 사용. ([참고문서](../chapter4/4-1/README.md))
  - `createContext` 함수에 초기값을 넣어 호출하면 객체가 반환됨. 반환된 객체에는 2가지 컴포넌트가 들어있음.
    1. `Provider`: 값 입력 용도. value에 값을 넣어주면 됨. (**값이 변경될 경우 모든 하위 Consumer는 리렌더링됨**)
    2. `Consumer`: 값 출력 용도. children에 함수를 넣어주어야함. **가장 가까운 Provider를 찾아서 사용**. 없을 경우 초기값 사용.
       - 초기형태에서는 `Consumer` 컴포넌트를 통해서만 데이터를 받을수 있었어서 script에서 사용할 수 없는 불편함이 있었음.
       - 리액트 훅이 생성되며 `Consumer`를 사용하지 않고, **`useContext` 함수를 이용하여 같은 기능을 할 수 있음.**
       - `useContext` 이용 시 Context를 중복으로 사용할 수 있으며, 렌더링 성능상 이점이 있음.
  - 값 변경 방법: context를 2개 생성
    - 상위 context: 상태값 변경 함수를 제공
    - 하위 context: 상태값 제공
  - `context` 사용 시 주의점
    - `<Context.Provider value={{name, age}} />` 와 같이 작성 시 컴포넌트 리렌더링 될 때 마다 객체가 새로 생성되어 `Consumer`가 리렌더링됨.
    - `Provider` 컴포넌트 내부에 `Consumer`가 들어있어야함. (보통 루트에 작성) (`6-2-caution` 참고)
- ### **useRef**

  - **자식 요소(돔, 컴포넌트)**에 접근하기 위해 `ref` 속성값과 `useRef` 훅 사용 ([참고문서](../chapter4/4-2/README.md))
  - useEffect 내 부수효과함수에서 로직 작성 (렌더링 된 이후에 돔 요소 접근이 가능하기 때문)
  - 렌더링과 상관 없는 데이터를 다룰 때도 사용 가능 (useState로 데이터 관리 시, UI와 관련 없음에도 리렌더링 됨.
  - `React.forwardRef` 함수를 이용해 `ref` 전달 가능. (아래 예시 참고)

    ```javascript
    //forwardRef 사용 전
    function App() {
      const inputRef = useRef();
      useEffect(() => {
        inputRef.current.focus();
      }, []);
      return (
        <div>
          <Input inputRef={inputRef}>
          {/* inputRef와 같은 customProps 대신 ref 속성을 사용하고 싶어도, 컴포넌트 내부에서 전달해야하기에 사용할 수 없음. 단순 가독성 차이이긴 함. */}
        </div>
      );
    }

    function Input({ inputRef }) {
      return (
        <input type="text" ref={inputRef} />
      );
    }
    ```

    ```javascript
    //forwardRef 사용 후
    function App() {
      return (
        <div>
          <Input ref={inputRef}>
          {/* ref 속성 사용 */}
        </div>
      );
    }

    const Input = React.forwardRef(function (props, ref) {
      //forwardRef로 props와 ref를 받아올 수 있음.
      return (
        <input type="text" ref={ref} />
      );
    });
    ```

  - `ref` 속성에 `useRef`의 반환 값이 아닌, 일반 함수를 넣어 사용 할 수 있음
  - for문으로 여러개의 컴포넌트를 만들어야 하고, 그 컴포넌트들에 ref속성을 넣어야 할 때는 `useRef`를 사용하긴 어려움. 함수 사용 필요
  - 조건부 렌더링 등의 경우 **컴포넌트가 생성된 이후에도 ref.current에 값이 없을 수도 있으니 주의**

- ### **useMemo**
  - 계샨량이 많은 함수의 반환값을 재활용하는 용도로 사용 ([참고문서](../chapter4/4-3/README.md))
  - useMemo 함수 매개변수
    - 첫번째 매개변수: 실행할 함수. 함수 실행값을 기억한다.
    - 두번째 매개변수: 의존성 배열. 배열에 들어온 상태값이 하나라도 변경되면 **함수를 재실행**한다.
    - `const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]); //v1, v2는 상태값`
- ### **useCallback**
  - 하위 컴포넌트에 props로 함수를 전달할 경우, 상위 컴포넌트가 리렌더링 된다면 매번 함수가 재생성 되어 하위 컴포넌트는 의미없이 리렌더링되는 상황이 생김. 
  - useCallback 함수 매개변수 ([참고문서](../chapter4/4-3/README.md))
    - 첫번째 매개변수: 반환할 함수. 함수 반환값을 기억한다.
    - 두번째 매개변수: 의존성 배열. 배열에 들어온 상태값이 하나라도 변경되면 **새로운 함수를 반환**한다.
    - `const onSave = useCallback(() => saveToServer(name,age), [name,age]); //name, age는 상태값`
      > 여기서 잠깐! useMomo와 useCallback의 차이는 거의 없다. react 공식문서 내용: `useMemo((...)=> fn, deps) === useCallback(fn, deps)`
- ### **useReducer**
  - 여러개의 상태값을 관리할 때 사용 ([참고문서](../chapter4/4-3/README.md))
  - redux의 reducer 사용 방법과 거의 동일.
  - useReducer와 ContextAPI를 이용하면 하위 컴포넌트로 상태값 전달할 때 유용하다.
    > 그러나 비동기 작업이 어렵다. 프로젝트 규모가 크거나 비동기 처리가 많다면 외부 라이브러리 사용하는 것이 낫다.
- ### **useImperativeHandle**
  - 상위 컴포넌트에서 하위 함수형컴포넌트에 접근할 때 사용 ([참고문서](../chapter4/4-3/README.md))
  - 하위 컴포넌트에서 ref에 해당 훅을 이용하여 변수/함수를 넣어서 넘겨주는 형식.
- ### **useLayoutEffect**
  - useEffect와 유사하지만, **부수효과 함수를 동기로 호출**함. ([참고문서](../chapter4/4-3/README.md))
  - 렌더링 결과가 돔에 반영된 직후에 바로 호출됨.
  - 따라서 시간소요가 짧은 동작만 해야함.
  - 보통 렌더링 직후 돔 요소의 값을 읽어들이거나, 조건에 따라 컴포넌트를 리렌더링하고 싶은 경우에 사용.
- ### **useDebugValue**
  - 리액트 개발자 도구에서 디버깅할 때 더 많은 정보를 제공해줄 수 있도록 도와주는 훅. ([참고문서](../chapter4/4-3/README.md))

## 커스텀 훅

- 별도 파일로 커스텀 훅을 만들어서 사용 가능 ([참고문서](../chapter2/2-8/README.md))
