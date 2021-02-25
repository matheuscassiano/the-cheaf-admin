/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1500;
`;

export const ModalContent = styled.div`
  width: min(90vw, 45em);
  height: min(90vh, 30em);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border-radius: 2em;
  padding: 1em 2em;
  padding-bottom: 0;
  overflow: hidden;
  background-color: white;
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

export const ModalTitle = styled.h3`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
`;

export const TextArea = styled.textarea`
  width: 100%;
  flex: 1;
  border-radius: 2em;
  padding: 1em;
`;
