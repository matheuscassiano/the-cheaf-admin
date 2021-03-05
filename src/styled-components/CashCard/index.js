import React from 'react';
import { CardContainer, CardMoney, CardTitle } from './style';

export default function CashCard({ color }) {
  return (
    <CardContainer color={color}>
      <CardTitle>Balanço do dia</CardTitle>
      <CardMoney color={color}>R$ 5.000,00</CardMoney>
    </CardContainer>
  );
}
