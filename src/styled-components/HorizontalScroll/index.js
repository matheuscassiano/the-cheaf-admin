import React from 'react';
import { Items, ItemsWrapper } from './styles';

export default function HorizontalScroll({ children }) {
  return (
    <ItemsWrapper>
      <Items>{children}</Items>
    </ItemsWrapper>
  );
}
