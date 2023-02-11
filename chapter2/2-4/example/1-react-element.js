 // jsx 작성 코드
const jsxElement = <a href="http://google.com">click here</a>;
//jsx 코드를 바벨이 createElement로 변환
const babelElement = React.createElement(
  "a",
  { href: "http://google.com" },
  "click here"
);
