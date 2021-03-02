/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 25em;
  height: 30em;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 4.15em;
  right: 0;
  background-color: white;
  padding: 1em 1em 0;
  border-radius: 1.5em 1.5em 0 0;
  box-shadow: 0px 0px 3px rgba(45, 80, 120, 0.3);
`;

export const Close = styled.button`
  border: 0;
  background-color: #ffffff80;
  border-radius: 100%;
  position: absolute;
`;

export const Title = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  padding: 0.2rem 2rem;
`;
