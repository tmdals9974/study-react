import React from "react";

function MyComponent({ value1, value2 }) {
  console.log("MyComponent render");
  return (
    <div>
      <p>{`value1: ${value1}`}</p>
      <p>{`value2: ${value2}`}</p>
    </div>
  );
}

function isEqual(prevProps, nextProps) {
  return false;
}

export default React.memo(MyComponent, isEqual);
