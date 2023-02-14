import { useEffect } from "react";

export default function MyComponent({ onClick }) {
  useEffect(() => {
    window.addEventListener("click", () => {
      onClick();
      // ...
    });
  }, [onClick]);
  // ...
}
