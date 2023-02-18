# redux-saga를 이용한 비동기 액션 처리2

## 하나의 제너레이터 함수로 두개의 액션을 처리하는 방법

```javascript
function* loginFlow() {
  while (true) {
    //take: redux-saga의 effects. 액션이 실행될 때까지 기다린다.
    const { id, password } = yield take(types.LOGIN);
    //로그인 API 호출
    const userInfo = yield call(callApiLogin, id, password);
    //액션 호출. 로그인 정보 저장.
    yield put(types.SET_USER_INFO, userInfo);

    //로그아웃할 떄까지 대기.
    yield take(types.LOGOUT);
    //로그아웃 API 호출.
    yield call(callApiLogout, id);
    //액션 호출. 로그인 정보 비우기.
    yield put(types.SET_USER_INFO, null);
  }
}
```

## 제너레이터 함수 내 에러처리

```javascript
function* loginFlow() {
  while (true) {
    yield put(types.SET_ERROR, "");
    try {
      const { id, password } = yield take(types.LOGIN);
      const userInfo = yield call(callApiLogin, id, password);
      yield put(types.SET_USER_INFO, userInfo);
      yield take(types.LOGOUT);
      yield call(callApiLogout, id);
      yield put(types.SET_USER_INFO, null);
    } catch (err) {
      yield put(types.SET_ERROR, err);
    }
  }
}
```

## 디바운스(debounce)

- 짧 은 시간에 같은 이벤트가 반복해서 발생할 때, 모든 이벤트를 처리하기 부담스러울 때 사용.
- **첫번째 혹은 마지막 이벤트만 처리**하도록 도와줌.

  ```javascript
  //saga.js
  export function* trySetText(action) {
    yield put(actions.setText(action.text));
  }

  export default function* () {
    yield all([
      debounc(500, types.TRY_SET_TEXT, trySetText), //액션 발생 시 0.5초를 기다린 후에 trySetText함수 실행 (마지막 이벤트만 처리)
    ]);
  }
  ```
