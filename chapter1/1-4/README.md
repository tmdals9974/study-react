# create-react-app으로 시작하기

- 리액트 개발 환경을 직접 구축하려면 많은 지식과 노력이 필요
  - webpack, babel, jest, eslint, polyfill, HMR, CSS 후처리 등
- 페이스북에서 관리하는 공식 툴
- 프로젝트 설치 방법: `npx create-react-app project-name`

- `React.StrictMode`: 개발환경에서만 동작함. 리액트에서 잘못 사용한 것들을 잡아내기 위해 사용함.
- 아래와 같은 코드로 동적 데이터 파일 호출이 가능함. (일반적인 import문은 로딩시 항상 불러오지만, 아래와 같은 동적import는 호출시 불러옴)
```javascript
function onClick() {
  import('./data.json').then(({ default: data}) => {
    console.log(data);
  })
}
```