import React from 'react';
import { ModalContainer, ModalContent, ModalClose } from './styles';

export default function LargeModal({ children, active }) {
  return (
    <ModalContainer active={active}>
      <ModalContent>
        <ModalClose>
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
        {children}
      </ModalContent>
    </ModalContainer>
  );
}
