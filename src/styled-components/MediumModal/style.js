/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalContainer = styled.div`
  min-width: 50em;
  min-height: 30em;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 1em;
  border-radius: 2em;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 0px 2px rgba(45, 80, 120, 0.3);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Title = styled.h6`
  text-align: center;
  font-weight: 700;
`;
