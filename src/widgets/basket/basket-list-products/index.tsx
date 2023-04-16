import React, { FC } from 'react';

import { BasketItem, selectSelectedProducts } from 'entities';
import { useAppSelector } from 'shared';

import './index.scss';

export const BasketListProducts: FC = () => {
  const selectedProducts = useAppSelector(selectSelectedProducts);

  return (
    <div className="basketListProducts">
      {selectedProducts.map(({ title, id, regular_price: regularPrice, count }) => {
        return <BasketItem id={id} key={id} count={count} title={title} regularPrice={regularPrice} />;
      })}
    </div>
  );
};
