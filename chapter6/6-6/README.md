# reselect로 선택자 함수 만들기

- redux에 저장된 데이터를 화면에 보여줄 때는 다양한 형식으로 가공해야할 때가 있음. (ex: filter, foramt 등) (강의 영상 초반부분에 reselect를 사용하지 않고 가공하는 방법 참고)
- 이 때, `reselect` 라이브러리를 사용하여 간편하고 성능좋게 가공 가능. (메모이제이션 기능을 지원) (`friend/state/selector.js` 참고)
- 만약 selector 내에서 의존하는 값 중 하나라도 redux에서 관리하는 값이 아니라면, 메모이제이션 기능을 지원하지 않음. 가능하게 하는 방법은 `reselect` 공식문서 참고
