import React, { FC } from 'react';

import './index.scss';
import { BasketItemCounter } from './basket-item-counter';

import { basketActions, IRegularPrice } from 'entities';
import { Button, useActions } from 'shared';

export const BasketItem: FC<IBasketItem> = ({ count, title, id, regularPrice }) => {
  const { deleteProduct } = useActions(basketActions);

  const onClickDelete = (): void => {
    deleteProduct({ id });
  };

  return (
    <div className="basketItem">
      <div className="basketItem__img">
        <img src={`src/shared/assets/images/${id}.png`} alt="" />
      </div>
      <div className="basketItem__info">
        <div>
          <h3 className="basketItem__info_title">{title}</h3>
          <p className="basketItem__info_subTitle">Производитель: Россия</p>
        </div>
        <div className="basketItem__info_counter">
          <BasketItemCounter count={count} id={id} />
          <span className="basketItem__info_counter-price">{`${regularPrice.value * count} ${
            regularPrice.currency
          }`}</span>
        </div>
      </div>
      <div className="basketItem__delete">
        <Button title="Удалить" onClick={onClickDelete} type="outlined" />
      </div>
    </div>
  );
};

interface IBasketItem {
  id: number;
  title: string;
  count: number;
  regularPrice: IRegularPrice;
}
