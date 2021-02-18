/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1500;
`;

export const ModalContent = styled.div`
  width: min(90vw, 100em);
  height: min(90vh, 70em);
  position: relative;
  border-radius: 3em;
  background-color: white;
`;

export const ModalClose = styled.div`
  width: 5em;
  height: 5em;
  position: absolute;
  right: 0;
  background-color: #de5753;
  border-radius: 0 3em 0 3em;
`;
