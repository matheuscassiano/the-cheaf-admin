import React from 'react';
import Counter from '../Counter';
import {
  ModalContainer,
  ModalContent,
  Close,
  Title,
  ModalButton,
  ModalFooter,
} from './style';

export default function SideModal({ children, title, active }) {
  return (
    <ModalContainer active={active}>
      <Close>
        <svg
          width="8"
          height="7"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.94 0.5625L4 4.07014L7.06 0.5625L8 1.64236L4 6.23752L0 1.64236L0.94 0.5625Z"
            fill="#08AF24"
          />
        </svg>
      </Close>
      <Title>{title}</Title>
      <span>Selecione o tamanho</span>
      <ModalContent>{children}</ModalContent>
      <ModalFooter>
        <ModalButton backColor="#DE5753" textColor="#FFFFFF">
          Cancelar
        </ModalButton>
        <ModalButton backColor="#FFFFFF" textColor="#08AF24">
          Enviar à cozinha
        </ModalButton>
        <Counter />
      </ModalFooter>
    </ModalContainer>
  );
}
