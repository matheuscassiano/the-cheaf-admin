import React from 'react';
import { MoreContainer, MoreItem } from './styles';

export default function MoreModal() {
  return (
    <MoreContainer>
      <MoreItem>
        <b>Reimprimir</b> na Cozinha
      </MoreItem>
      <MoreItem>
        Imprimir <b>3 itens na Cozinha</b>
      </MoreItem>
      <MoreItem>Imprimir Conta</MoreItem>
      <MoreItem>
        <b>Imprimir</b> Conta e <b>marca-la</b> como em fechamento
      </MoreItem>
    </MoreContainer>
  );
}
