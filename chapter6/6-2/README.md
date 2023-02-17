# 액션, 미들웨어

- 리덕스 구조: Action -> MiddleWare -> Reducer -> Store -> View -> Action..
- 간단하고 직관적인 구조. 단방향이라 예측 가능.

- dispatch: 액션이 발생했음을 `Redux`에게 알림. 액션 구분을 위해 유니크한 type 속성 사용. (`3.js`와 같이 `action creator`를 이용하는 것 추천)
- middleware: `5.js`, `9.js`, `10.js`, `12.js`처럼 미들웨어 작성 및 사용 가능
  ```javascript
  // 아래와 같은 구조가 middleware를 사용하기 위한 조건
  const func = store => next => action => { .....next(action) }
  // store: state를 모아둔 저장소
  // next: reducer 호출 함수
  // action: action 정보
  ```