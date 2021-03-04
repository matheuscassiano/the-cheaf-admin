/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Input } from '../../../styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderButton = styled.button`
  border: 0;
  margin-left: 2em;
  background-color: transparent;
`;

export const Search = styled(Input)`
  width: 25em;
  border-radius: 20em;
`;

export const LargeSide = styled.section`
  padding: 4em 1.5em 2em;
`;

export const SmallSide = styled.section`
  height: 100%;
  padding: 1.5em;
  padding-top: 1em;
  box-shadow: 0px 1px 2px rgba(45, 80, 120, 0.3);
`;

export const ProgressItem = styled.div`
  padding: 0.8em 0;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  font-weight: 200;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Spend = styled.span`
  font-size: 1rem;
`;
