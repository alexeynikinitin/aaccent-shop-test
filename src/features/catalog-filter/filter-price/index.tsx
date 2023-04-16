import React, { FC } from 'react';

import './index.scss';
import { catalogActions, selectFilterPriceRange } from 'entities';
import { Input, useActions, useAppSelector } from 'shared';

export const FilterPrice: FC = () => {
  const { setFilterPriceRange } = useActions(catalogActions);

  const priceRange = useAppSelector(selectFilterPriceRange);

  const onChangeFrom = (value: string): void => {
    setFilterPriceRange({ from: Number(value), to: priceRange?.to ?? undefined });
  };

  const onChangeTo = (value: string): void => {
    setFilterPriceRange({ from: priceRange?.from ?? undefined, to: Number(value) });
  };

  const getValue = (key: 'from' | 'to'): string => {
    if (priceRange) {
      return priceRange[key]?.toString() ?? '';
    }

    return '';
  };

  return (
    <div className="filterPrice">
      <h2 className="filterPrice__title">Цена</h2>
      <div className="filterPrice__items">
        <Input
          type="number"
          className="filterPrice__items_input"
          placeholder="от"
          value={getValue('from')}
          onChangeInput={onChangeFrom}
        />
        <Input
          type="number"
          className="filterPrice__items_input"
          placeholder="до"
          value={getValue('to')}
          onChangeInput={onChangeTo}
        />
      </div>
    </div>
  );
};
