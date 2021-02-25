/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 12em;
  margin: 1em 0;
  cursor: pointer;
  overflow: hidden;
  border: ${({ active }) => (active ? '3px solid #08AF24' : 'none')};
  border-radius: 2em;
  box-shadow: 0px 0px 2px rgba(45, 80, 120, 0.3);
`;

export const Content = styled.div`
  padding: 0.5em 0.8em;
`;

export const Cover = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 0.8rem;
  margin: 0;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-top: 0.5em;
`;

export const Type = styled.span`
  font-weight: bold;
  font-size: 0.75rem;
`;
