// 제너레이터 함수로 자연수의 집합을 표현
function* naturalNumbers() {
  let v = 1;
  while (true) {
    yield v++;
  }
}
