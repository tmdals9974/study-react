# ref 속성값으로 자식 요소에 접근하기

- **자식 요소(돔, 컴포넌트)**에 접근하기 위해 `ref` 속성값과 `useRef` 훅 사용
- 렌더링 된 이후에 돔 요소 접근이 가능하기에 useEffect 이용 (`1-element` 참고)
- ref 속성을 컴포넌트에 사용 가능 (`2-component` 참고)
  - 클래스형 컴포넌트: 컴포넌트의 인스턴스를 가리킴. ref.current는 해당 클래스의 메소드 호출가능.
  - 함수형 컴포넌트: `useImperativeHandle` 훅 사용 시, 컴포넌트 내부에 접근 가능.
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

- `ref` 속성에 `useRef`의 반환 값이 아닌, 일반 함수를 넣어 사용 할 수 있음 (`3-function` 참고)
- for문으로 여러개의 컴포넌트를 만들어야 하고, 그 컴포넌트들에 ref속성을 넣어야 할 때는 `useRef`를 사용하긴 어려움. 함수 사용 필요 (`4-function-multi` 참고)
- 조건부 렌더링 등의 경우 **컴포넌트가 생성된 이후에도 ref.current에 값이 없을 수도 있으니 주의** (`5-conditional` 참고)

## 실행 방법

- example 폴더에 있는 코드를 src/App.js 로 복사해서 실행
