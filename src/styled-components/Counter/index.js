import React from 'react';
import { CounterContainer, CounterButton } from './style';

export default function Counter() {
  return (
    <CounterContainer>
      <CounterButton>-</CounterButton>
      <span>12</span>
      <CounterButton>+</CounterButton>
    </CounterContainer>
  );
}
