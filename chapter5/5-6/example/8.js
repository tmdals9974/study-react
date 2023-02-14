import { useRef } from "react";

export default function MyComponent({ onClick }) {
  const onClickRef = useRef();
  onClickRef.current = onClick;
  // ...
}
