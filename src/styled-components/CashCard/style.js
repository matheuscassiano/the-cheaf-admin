import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 25em;
  margin: 1em 0 1em 2em;
  padding: 2em;
  border-radius: 1em;
  background-color: white;
  border-top: 1em solid ${({ color }) => color};
  box-shadow: 0px 0px 2px rgba(45, 80, 120, 0.3);
`;

export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;
`;

export const CardMoney = styled.h3`
  font-weight: 300;
  font-size: 2rem;
  color: ${({ color }) => color};
`;
