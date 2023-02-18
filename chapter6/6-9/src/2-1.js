function* f1() {
  console.log('f1-1');
  yield 10;
  console.log('f1-2');
  yield 20;
  console.log('f1-3');
  return 'finished';
}
const gen = f1();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
// f1-1
// { value: 10, done: false }
// f1-2
// { value: 20, done: false }
// f1-3
// { value: 'finished', done: true }
