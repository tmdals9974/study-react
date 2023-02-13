import React, { useState } from "react";
import AboveGame from "./component/AboveGame";
import Game from "./component/Game";
import Header from "./component/Header";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="container">
      <Header score={score} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}

export default App;
