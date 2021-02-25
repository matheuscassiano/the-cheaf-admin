import React from 'react';
import { ModalContainer, ModalContent, ModalClose, ModalTitle } from './styles';

export default function SmallModal({ children, active, setActive, title }) {
  return (
    <ModalContainer active={active}>
      <ModalContent>
        <ModalClose onClick={() => setActive(false)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0255 4.3418L4.3418 13.0255"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.3418 4.3418L13.0255 13.0255"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ModalClose>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContent>
    </ModalContainer>
  );
}
