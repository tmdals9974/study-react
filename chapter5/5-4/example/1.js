function TodoList({ todos }) {
  const [doneList, setDoneList] = useState(todos.filter(item => item.done));
  function onChangeName(key, name) {
    setDoneList(
      doneList.map(item => (item.key === key ? { ...item, name } : item)),
    );
  }
  // ...
}
