import React from "react";

function Title({ title }) {
  console.log('rerender');
  return <p>{title}</p>;
}

export default React.memo(Title);
