# create-react-app으로 시작하기

- 리액트 개발 환경을 직접 구축하려면 많은 지식과 노력이 필요
  - webpack, babel, jest, eslint, polyfill, HMR, CSS 후처리(벤더 접두사 자동으로 붙여줌) 등
- 페이스북에서 관리하는 공식 툴

## 환경

- 프로젝트 설치 방법: `npx create-react-app project-name`

## 코드 설명

- `React.StrictMode`: 개발환경에서만 동작함. 리액트에서 잘못 사용한 것들을 잡아내기 위해 사용함.
- 아래와 같은 코드로 동적 데이터 파일 호출이 가능함. (일반적인 import문은 로딩시 항상 불러오지만, 아래와 같은 동적import는 호출시 불러옴)

```javascript
function onClick() {
  import("./data.json").then(({ default: data }) => {
    console.log(data);
  });
}
```

# create-react-app으로 시작하기2

## 환경

- https로 실행 방법
  - mac: `HTTPS=true npm start`
  - windows: `set HTTPS=true && npm start`
- 빌드 명령어 : `npm run build`
- 빌드 결과물 실행 방법 : `npx serve -s build`

- polyfill을 추가할 때는 보통 core-js를 사용함. cra에는 기본 내장되어있어 import하여 사용하면 됨.
- 환경변수
  - `REACT_APP`을 `PREFIX로 전달`하여 환경변수 이용 가능
  - `process.env.REACT_APP_...`으로 환경변수 접근 가능
  - `process.env.NODE_ENV`는 실행 방법에 따라 기본으로 전달 됨 (`development`, `production`, `test`)
  - 커맨드라인으로 환경변수 전달 방법
    - mac: `REACT_APP_API_URL=api.myapp.com npm start`
    - windows: `set "REACT_APP_API_URL=api.myapp.com" && npm start`
  - dotenv 패키지를 이용하여 간편하게 관리 가능.

## 코드 설명

- 웹팩 설정으로 인해 빌드 시 `사이즈가 작은 이미지는 js 내장`되며, `사이즈가 큰 이미지는 원본 파일 빌드` (http 요청 횟수 감소, 로딩속도 증가)
