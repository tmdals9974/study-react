function* f1() {
  yield 10;
  yield 20;
  return 'finished';
}
const gen = f1();
