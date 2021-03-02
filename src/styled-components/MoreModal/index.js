import React from 'react';
import { MoreContainer } from './styles';

export default function MoreModal({ children, xPos, active }) {
  return (
    <MoreContainer active={active} xPos={xPos}>
      {children}
    </MoreContainer>
  );
}
