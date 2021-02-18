import React from 'react';
import { ModalContainer, ModalContent, ModalClose } from './styles';

export default function LargeModal({ children }) {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalClose />
        {children}
      </ModalContent>
    </ModalContainer>
  );
}
