import React from 'react';
import { Container, Cover, Title, Footer, Type } from './styles';
import { Price } from '..';

export default function OrderCard() {
  return (
    <Container>
      <Cover />
      <Title>Picanha na chapa com fritas</Title>
      <Footer>
        <Type />
        <Price />
      </Footer>
    </Container>
  );
}
