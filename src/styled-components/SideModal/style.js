/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 26em;
  max-height: 32em;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 4.15em;
  right: 0;
  padding-bottom: 3.5em;
  background-color: white;
  border-radius: 1.5em 1.5em 0 0;
  box-shadow: 0px 0px 3px rgba(45, 80, 120, 0.3);
`;

export const Close = styled.button`
  border: 0;
  background-color: #ffffff80;
  border-radius: 100%;
  position: absolute;
  left: 1em;
  top: 1em;
`;

export const Title = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 1rem 0.2rem 0;
`;

export const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const ModalButton = styled.button`
  border: 0;
  padding: 0.2em 1em;
  border-radius: 1em;
  color: ${({ textColor }) => textColor};
  background-color: ${({ backColor }) => backColor};
`;

export const ModalFooter = styled.div`
  width: 100%;
  height: 3.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding: 1.2em 1em;
  background-color: #08af24;
`;
