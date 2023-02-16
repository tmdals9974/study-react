import React, { useEffect, useState } from 'react';

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag(prev => !prev), 1000);
  });
  if (flag) {
    return (
      <div>
        <p key="apple">사과</p>
        <p key="banana">바나나</p>
      </div>
    );
  } else {
    return (
      <div>
        <p key="apple">사과</p>
        <p key="pineapple">파인애플</p>
        <p key="banana">바나나</p>
      </div>
    );
  }
}
