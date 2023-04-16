import React, { FC, ReactElement } from 'react';

import './index.scss';
import { BasketItemCounter } from 'entities/basket/ui/basket-item/basket-item-counter';
import { IRegularPrice } from 'entities/product-info/api/types';

export const ProductCard: FC<IProductCard> = ({ count, id, regularPrice, title, basketButton }) => {
  return (
    <div className="productCard">
      <div className="productCard__img">
        <img src={`src/shared/assets/images/${id}.png`} alt="img" />
      </div>
      <div className="productCard__title">
        <p>{title}</p>
      </div>
      <div className="productCard__counter">
        {count && <BasketItemCounter count={count} id={id} marginTop="20px" />}
      </div>
      <div className="productCard__info">
        <span className="productCard__info_price">{`${regularPrice.value} ${regularPrice.currency}`}</span>
        {basketButton}
      </div>
    </div>
  );
};

interface IProductCard {
  id: number;
  title: string;
  count?: number;
  basketButton: ReactElement;
  regularPrice: IRegularPrice;
}
