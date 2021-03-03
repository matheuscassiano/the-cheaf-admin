/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { CheckBoxContainer } from './style';

export default function CheckBox() {
  const [active, setActive] = useState(false);
  return (
    <CheckBoxContainer active={active} onClick={() => setActive(!active)} />
  );
}
