import React from 'react';
import { ModalContainer, ModalContent, Title } from './style';

export default function MediumModal({ children, title, active }) {
  return (
    <ModalContainer active={active}>
      <Title>{title}</Title>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
}
