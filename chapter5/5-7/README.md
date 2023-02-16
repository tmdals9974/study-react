# 렌더링 속도를 올리기 위한 성능 최적화 방법1

> 평상시에는 성능 최적화를 고민할 필요 없음. 이슈가 발생 후 대응해도 늦지 않음.

- 리액트 중 가장 많은 CPU 자원을 소모하는 것은 렌더링임. 성능 최적화는 렌더링이 중요.
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