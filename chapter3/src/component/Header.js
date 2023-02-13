import React from "react";

export default function Header({ score }) {
  return (
    <header className="heading">
      <h1 className="title">2048</h1>
      <div className="scores-container">
        <div className="score-container" style={{ marginRight: 5 }}>
          {score}
        </div>
      </div>
    </header>
  );
}
