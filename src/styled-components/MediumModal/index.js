import React from 'react';
import { ModalContainer, ModalContent, Title } from './style';

export default function MediumModal({ children, title }) {
  return (
    <ModalContainer>
      <Title>{title}</Title>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
}
