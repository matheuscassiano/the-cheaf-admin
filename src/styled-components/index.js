/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const OrdersContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  margin: 1em 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  border-radius: 1.3em;
  border: none;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
`;

export const Label = styled.span`
  padding-left: 1em;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8em 1em;
  border-radius: 1.3em;
  border: none;
  background-color: #08af24;
  color: white;
  font-weight: bold;
  font-size: 1rem;
`;

export const TableContainer = styled.div`
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 3.5rem;
  padding: 0 2em;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
`;

export const TR = styled.tr`
  border-radius: 5px;
  margin-bottom: 5em;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
`;
export const TH = styled.th`
  padding: 1rem;
  text-align: left;
`;

export const TD = styled.td`
  padding: 1rem;
`;
