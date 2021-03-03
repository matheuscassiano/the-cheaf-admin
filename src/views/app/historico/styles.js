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
  padding: 1.5em;
`;

export const ItemTitle = styled.h3``;
