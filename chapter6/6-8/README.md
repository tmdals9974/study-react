# redux-saga를 이용한 비동기 액션 처리1

## redux 비동기 라이브러리 종류

- **redux-thunk**
  - 비동기 로직이 간단할 때 사용
  - 가장 간단하게 시작할 수 있다
- **redux-observable**
  - 비동기 코드가 많을 때 사용
  - RxJS 패키지를 기반으로 만들어졌다.
    - 리액티브 프로그래밍을 공부해야하므로 진입 장벽이 가장 높다.
- **redux-saga**
  - 비동기 코드가 많을 때 사용
  - 제너레이터를 적극적으로 활용한다.
  - 테스트 코드 작성이 쉽다.

## redux-saga
  - redux store 생성 시, saga 등록 필요 (`store.js`)
  - `redux 미들웨어`에서 `saga 미들웨어`를 작동시킴.
  - redux-saga의 부수효과 함수들(all, call, put, takeLeading 등..)은 해야할 일을 설명하는 객체를 반환함 (ex: `PUT: { channel:null, action:{ type: "timeline/SET_LOADING", isLoading: false } }`)

  - **generator 함수와 saga 미들웨어의 협업**
    - generator 함수에서 `yield` 호출 시 함수 반환 객체를 `saga 미들웨어`에 전달함.
    - `saga 미들웨어`는 객체가 요구한 일을 실행한 후, 제너레이터로 완료를 알림. 
    - 제너레이터는 다음 `yield`를 호출하며 위 과정을 반복.

    ```javascript
    import { all, call, put, takeLeading } from "redux-saga/effects";
    import { actions, types } from "./index";
    import { callApiLike } from "../../common/api";

    export function* fetchData(action) {
      // README.md - generator 함수와 saga 미들웨어의 협업 참고

      //put: 리덕스 액션을 발생시킨다.
      yield put(actions.setLoading(true));
      yield put(actions.addLike(action.timeline.id, 1));
      //call: 함수를 실행시킨다.
      yield call(callApiLike);
      yield put(actions.setLoading(false));
    }

    export default function* () {
      //all : 배열 내 모든 함수 실행
      //takeLeading : 첫번째 매개변수로 받은 액션이 실행되면, 두번째 매개변수로 받은 함수를 실행한다. takeLeading은 처리중인 액션이 있을 때, 재요청이 들어와도 무시한다. takeLatest는 처리중인 액션을 취하고, 재요청을 처리한다.
      yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
    }
    ```
