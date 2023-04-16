import React, { FC, ReactElement, MouseEvent } from 'react';

import './index.scss';
import { useNavigate } from 'react-router-dom';

import { BasketItemCounter } from 'entities/basket/ui/basket-item/basket-item-counter';
import { IRegularPrice } from 'entities/product-info/api/types';

export const ProductCard: FC<IProductCard> = ({ count, id, regularPrice, title, basketButton }) => {
  const navigate = useNavigate();

  const onClickCard = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    navigate(`/product/${id}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="productCard" onClick={onClickCard}>
      <div className="productCard__img">
        <img src={`/aaccent-shop-test/images/${id}.png`} alt="img" />
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
