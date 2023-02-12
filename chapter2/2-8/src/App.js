import React from "react";
import Profile from "./Profile";
import WidthPrinter from "./WidthPrinter";

export default function App() {
  return (
    <div>
      <Profile userId={1} />
      <Profile userId={2} />
      <WidthPrinter />
    </div>
  );
}
