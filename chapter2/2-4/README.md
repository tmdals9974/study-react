# 리액트 요소와 가상돔 1

- jsx 문법을 바벨이 createElement 함수로 변환한다. createElement 함수는 객체를 반환한다. 아래 코드를 통해 반환된 객체 확인 가능

```javascript
const element = (
  <a key="key1" style={{ width: 100 }} href="http://google.com">
    click here
  </a>
);
console.log(element);
```

- 리액트는 렌더링 성능을 위해 가상돔 활용 (변경부분 최소화를 통해 렌더링 성능 향상한다. how? 메모리에 가상돔을 올려 놓고 변경될 가상돔과 비교)

- 컴포넌트의 key가 변경되면 삭제(unmount)되었다가 추가(mount)됨
