import React, { useState } from 'react';
import { Container, Content, Cover, Title, Footer, Type } from './styles';
import { Price } from '..';

export default function OrderCard({ cover, title, type, price, sideActive }) {
  const [active, setActive] = useState(false);

  return (
    <Container
      active={active}
      onClick={() => {
        setActive(!active);
        if (!active) {
          sideActive(true);
        }
      }}
    >
      <Cover draggable="false" src={cover} />
      <Content>
        <Title>{title}</Title>
        <Footer>
          <Type>{type}</Type>
          <Price>{price}</Price>
        </Footer>
      </Content>
    </Container>
  );
}
