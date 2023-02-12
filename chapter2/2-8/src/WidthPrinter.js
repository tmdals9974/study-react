import React from 'react';
import useWindowWidth from './useWindowWidth';

export default function WidthPrinter() {
  const width = useWindowWidth();
  return <div>{`width is ${width}`}</div>;
}
