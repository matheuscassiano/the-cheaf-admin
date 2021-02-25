import React from 'react';
import { Card, CardHeader, CardHeaderTitle, CardContent } from './styles';

export default function Order({ title, status, children, openModal }) {
  return (
    <Card onClick={() => openModal(true)}>
      <CardHeader status={status}>
        <CardHeaderTitle>{title}</CardHeaderTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
