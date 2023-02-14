import { useRef, useEffect } from "react";

export default function MyComponent({ onClick }) {
  const onClickRef = useRef();
  useEffect(() => {
    onClickRef.current = onClick;
  });
  useEffect(() => {
    window.addEventListener("click", () => {
      onClickRef.current();
      // ...
    });
    // ...
  }, []);
  // ...
}
