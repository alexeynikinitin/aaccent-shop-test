import React, { FC } from 'react';

import './index.scss';

export const Checkbox: FC<ICheckbox> = ({ id, checked, onClickCheckbox, readOnly }) => {
  const onClick = () => {
    onClickCheckbox?.(id);
  };

  return <input className="checkbox" type="checkbox" onClick={onClick} checked={checked} readOnly={readOnly} />;
};

interface ICheckbox {
  id?: string;
  checked: boolean;
  readOnly?: boolean;
  onClickCheckbox?: (id?: string) => void;
}
