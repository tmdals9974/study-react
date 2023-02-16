import React, { useEffect, useState } from 'react';

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag(prev => !prev), 1000);
  });
  if (flag) {
    return (
      <div>
        <p>사과</p>
        <p>바나나</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>사과</p>
        <p>파인애플</p>
        <p>바나나</p>
      </div>
    );
  }
}
