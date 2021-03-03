/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const OrderInfo = styled.aside`
  width: 100%;
  height: 100%;
  padding: 2em;
  overflow-y: auto;
  border-right: 1px solid lightgray;
`;

export const TablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const TablesItem = styled.div`
  width: 4.5em;
  height: 4.5em;
  margin: 1em;
  align-self: center;
  justify-self: center;
  border-radius: 100%;
  background-color: #08af24;
`;
