import React from 'react';
import { ModalContainer, Close } from './style';

export default function SideModal() {
  return (
    <ModalContainer>
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
    </ModalContainer>
  );
}
