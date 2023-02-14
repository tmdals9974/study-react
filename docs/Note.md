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
  - #### `ReactDOM.createPortal`
    - 다른 DOM에 렌더링할 수 있다. 주로 모달에 사용한다 ([참고문서](../chapter2/2-3/README.md))
- ### **훅**
  - [해당 문서](./Hook.md) 참고
