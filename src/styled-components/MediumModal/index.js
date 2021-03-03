import React from 'react';
import { ModalContainer, Title } from './style';

export default function MediumModal({ title }) {
  return (
    <ModalContainer>
      <Title>
        <b>{title}</b>
      </Title>
    </ModalContainer>
  );
}
