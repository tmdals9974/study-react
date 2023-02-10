# react-router-dom

- 라우팅 기능 제공
- 페이지 단위 코드스플리팅 기능 제공 (각 페이지 초기 로딩 시에 js 요청)

## App.js

- `BrowserRouter` 컴포넌트에서 페이지의 상태값을 관리해줌.
- `Link` 컴포넌트를 이용하여 경로 이동 가능
- `Route` 컴포넌트를 통해 렌더링 할 컴포넌트 매칭 가능

## Roms.js

- `Route` 컴포넌트를 통해 렌더링 되었을 경우, 변수 `match`에 속성값을 넣어줌.
- `Route` 컴포넌트에 `exact` 옵션을 설정하면, `path`가 정확히 일치할때만 작동함. 
- `path`에 `:roomId` 등으로 이용하면 params로 이용 가능
- `match.url`의 값은 `/rooms`임. Route 컴포넌트에 매치되어있던 url이 들어옴.