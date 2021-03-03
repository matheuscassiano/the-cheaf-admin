import React, { useState } from 'react';
import { CounterContainer, CounterButton } from './style';

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <CounterContainer>
      <CounterButton onClick={() => setNumber(number - 1)}>-</CounterButton>
      <span>{number}</span>
      <CounterButton onClick={() => setNumber(number + 1)}>+</CounterButton>
    </CounterContainer>
  );
}
