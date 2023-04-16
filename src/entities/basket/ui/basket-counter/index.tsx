import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import './index.scss';
import { selectCountProducts, selectTotalPrice } from 'entities/basket/model/selectors';
import { basketActions } from 'entities/service';
import { useActions, useAppSelector } from 'shared';

export const BasketCounter: FC = () => {
  const totalPrice = useAppSelector(selectTotalPrice);
  const countProducts = useAppSelector(selectCountProducts);

  const { setBasketStep } = useActions(basketActions);

  const onClick = () => setBasketStep('basket');

  return (
    <NavLink to="/basket" className="basketCounter__nav" onClick={onClick}>
      <div className="basketCounter">
        <div className="basketCounter__icon">
          <img src="src/shared/assets/icons/basket.png" alt="basket" />
        </div>
        <div className="basketCounter__info">
          <span>{`${countProducts} товаров`}</span>
          <span>{`${totalPrice} USD`}</span>
        </div>
      </div>
    </NavLink>
  );
};
