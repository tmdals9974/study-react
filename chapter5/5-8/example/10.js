import { useState } from "react";

function SelectFruit({ selectedFruit, onChange }) {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [newFruit, setNewFruit] = useState("");
  function addNewFruit() {
    fruits.push(newFruit);
    setNewFruit("");
  }
  // ...
  return (
    <div>
      <Select options={fruits} selected={selectedFruit} onChange={onChange} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>추가하기</button>
      {/* ... */}
    </div>
  );
}
