/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MoreContainer = styled.div`
  max-width: 15em;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 7em;
  left: 17.8em;
  background-color: white;
  border-radius: 1em;
  padding: 1em;
  box-shadow: 0px 0px 3px rgba(45, 80, 120, 0.3);
`;

export const MoreItem = styled.span`
  cursor: pointer;
  padding: 0.5em 0.25em;
  border-radius: 0.25em;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #f2f2f2;
  }
`;
