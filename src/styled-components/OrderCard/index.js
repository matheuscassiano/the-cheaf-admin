import React from 'react';
import { Container, Cover, Title, Footer, Type } from './styles';
import { Price } from '..';

export default function OrderCard({ title, type, price }) {
  return (
    <Container>
      <Cover />
      <Title>{title}</Title>
      <Footer>
        <Type>{type}</Type>
        <Price>{price}</Price>
      </Footer>
    </Container>
  );
}
