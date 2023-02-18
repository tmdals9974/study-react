# 제너레이터 이해하기

- `function*` 예약어로 `generator 함수` 생성.
- `generator 함수` 실행 시 `generator 객체` 반환
- `generator 객체` 내 `next 함수` 실행 시, `generator 함수` 내 `yield`를 만날 떄 까지 코드 실행. `yield 객체` 반환. (`2-1.js`)
- 함수 간 협력이 가능하다 (`7.js`)
- generator는 `iterator`이면서 `iterable`을 이다.
  - 다음 조건을 만족하는 객체는 `반복자(iterator)`이다.
    - next 메서드를 갖고 있다.
    - next 메서드는 value와 done 속성값을 가진 객체를 반환한다.
    - done 속성값은 작업이 끝났을 때 참이 된다.
  - 다음 조건을 만족하면 `반복 가능(iterable)한 객체`다.
    - Symbol.iterator 속성값으로 함수를 갖고 있다.
    - 해당 함수를 호출하면 반복자(iterator)를 반환한다.
  - `for of 반복문`과 `전개연산자(...)`는 `iterable` 대상으로 작동한다. 
