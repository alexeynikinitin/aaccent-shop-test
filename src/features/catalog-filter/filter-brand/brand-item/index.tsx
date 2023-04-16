import React, { FC } from 'react';

import './index.scss';
import { Checkbox } from 'shared';

export const BrandItem: FC<IBrandItem> = ({ checked, id, title, onClickBrand }) => {
  const onClick = () => onClickBrand(id);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="brandItem" onClick={onClick}>
      <Checkbox checked={checked} readOnly />
      <p className="brandItem__title">{title}</p>
    </div>
  );
};

interface IBrandItem {
  id: number;
  title: string;
  checked: boolean;
  onClickBrand: (id: number) => void;
}
