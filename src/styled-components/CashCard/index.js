import React from 'react';
import { CardContainer, CardMoney, CardTitle } from './style';

export default function CashCard({ title, value, color }) {
  return (
    <CardContainer color={color}>
      <CardTitle>{title}</CardTitle>
      <CardMoney color={color}>{value}</CardMoney>
    </CardContainer>
  );
}
