/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 100%;
  background-color: ${({ active }) => (active ? 'green' : 'lightgray')};
`;
