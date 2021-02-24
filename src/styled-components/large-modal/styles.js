/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1500;
`;

export const ModalContent = styled.div`
  width: min(90vw, 85em);
  height: min(90vh, 60em);
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
  border-radius: 2em;
  background-color: white;
  overflow: hidden;
`;

export const ModalClose = styled.div`
  width: 3.5em;
  height: 3.5em;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #de5753;
  border-radius: 0 2em 0 2em;
`;
