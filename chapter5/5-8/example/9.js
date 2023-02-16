import { useMemo } from "react";

function SelectFruit({ selectedFruit, onChange }) {
  // ...
  const fruits = useMemo(
    () => FRUITS.filter((item) => item.price <= maxPrice),
    [maxPrice]
  );
  return (
    <div>
      <Select options={fruits} selected={selectedFruit} onChange={onChange} />
      {/* ... */}
    </div>
  );
}

const FRUITS = [
  { name: "apple", price: 500 },
  { name: "banana", price: 1000 },
  { name: "orange", price: 1500 }
];
