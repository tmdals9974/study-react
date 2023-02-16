function SelectFruit({ selectedFruit, onChange }) {
  // ...
  return (
    <div>
      <Select options={FRUITS} selected={selectedFruit} onChange={onChange} />
      {/* ... */}
    </div>
  );
}

const FRUITS = [
  { name: 'apple', price: 500 },
  { name: 'banana', price: 1000 },
  { name: 'orange', price: 1500 },
];
