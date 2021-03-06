/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Card = styled.div`
  width: 21em;
  min-height: 15em;
  margin-bottom: 2em;
  border-radius: 2em;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const CardHeader = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #de5753;
  border-radius: 2em 2em 0 0;
`;

export const CardHeaderTitle = styled.h6`
  margin: 0;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CardContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1em 1.5em;
`;

export const CardContentItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;
