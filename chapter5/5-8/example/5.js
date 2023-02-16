import { useState, useCallback } from "react";

function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);

  const onChangeFruit = useCallback((fruit) => {
    setSelectedFruit(fruit);
    sendLog({ type: "fruit change", value: fruit });
  }, []);

  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectFruit selected={selectedFruit} onChange={onChangeFruit} />
    </div>
  );
}
