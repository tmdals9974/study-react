# 프로젝트2: 집단지성을 이용한 담당자찾기 서비스

- [프로젝트 원본 소스 보기](https://github.com/landvibe/inflearn-react-project/tree/master/whois)
- 회사 내 업무에 대한 담당자를 찾는 서비스

## 실행 방법

```bash
# client
npm start
```

```bash
# server
cd ./server
npm start
```

## 프로젝트 사용 방법

- 회원가입 자유 (인증 필요 없음)
- 로그인 시 비밀번호 필요 없음 (아무거나 입력)

## 강의 내용 메모

- ### Props Type 체크 방식 (추천: 1>2>3)
  1. typescript
  2. jsdoc: 컴파일타임에 타입체크
  3. prop-types: 런타임에 타입체크
- ### redux

  - `createReducer`란?
    - **before**
      ```javascript
      function reducer(state = INITIAL_STATE, action) {
        return produce(state, (draft) => {
          switch (action.type) {
            case SAY_HELLO:
              draft.msg = `안녕하세요 ${action.name}님`;
              break;
          }
        });
      }
      ```
    - **after**
      ```javascript
      function createReducer(initialState, handlerMap) {
        return function (state = initialState, action) {
          return produce(state, (draft) => {
            const handler = handlerMap[action.type];
            if (handler) {
              handler(draft, action);
            }
          });
        };
      }
      const reducer = createReducer(INITIAL_STATE, {
        [SAY_HELLO]: (state, action) => (state.msg = `안녕하세요 ${action.name}님`),
      });
      ```
  - `reducer`, `dispatch`

    1. `redux`를 이용할 때는, 어떤 동작을 할 것인지를 구분하기 위해 `type`을 정의한다.

    ```javascript
    const ADD_TODO = "todo/ADD";
    ```

    2. `reducer`는 `type`에 따라 어떤 동작을 할 것인지를 정의한다.

    ```javascript
    function reducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case ADD_TODO:
          state.todos.push(action.title);
          return {
            todos: [...state.todos],
          };
        // ...
      }
    }
    ```

    3. `reducer`를 동작시키기 위해 `dispatch` 함수를 사용한다. (액션을 발생시킴)

    ```javascript
    store.dispatch({ type: ADD_TODO, title: "영화 보기", priority: "high" });
    ```

    4. `dispatch`에 매개변수로 넘겨줄 객체의 인터페이스를 재사용하기 위해 별도로 정의한다.

    ```javascript
    function addTodo({ title, priority }) {
      return { type: ADD_TODO, title, priority };
    }
    ```

    5. `3번` 소스를 `4번`을 이용하여 리팩토링한다.

    ```javascript
    store.dispatch(addTodo({ title: "영화 보기", priority: "high" }));
    ```

  - `redux-saga`
    - 추후 공식문서 보면서 공부가 더 필요할듯. 사가 미들웨어와 사가 함수가 generator여서 협력을 한다는것도 두루뭉실하게 이해됨.
    - `makeFetchSaga & fetchInfo`를 굳이 써야하나? redux-toolkit이나.. 그런 다른 라이브러리로 제공되는 기능이 없나? 찾아보자.
