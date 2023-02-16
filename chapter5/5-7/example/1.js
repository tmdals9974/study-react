function MyComponent(props) {
  // ...
}
function isEqual(prevProps, nextProps) {
  // 이전,이후 속성값을 매개변수로 받아 true 또는 false를 반환
  // true 반환 시 이전 렌더링 결과를 재사용
  // false 반환 시 변경된 부분만 업데이트
}
React.memo(MyComponent, isEqual); //컴포넌트를 비교하여 bool값을 리턴하는 커스텀 함수 사용
//React.memo(MyComponent) //얕은 비교를 수행하는 기본 함수 사용