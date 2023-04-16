import React, { FC, useState } from 'react';

import './index.scss';
import { NavLink, useNavigate } from 'react-router-dom';

import {
  BasketSteps,
  basketActions,
  serviceActions,
  selectTotalPrice,
  selectBasketStep,
  selectIsShowModal,
  selectCountProducts,
} from 'entities';
import { PlaceOrder } from 'features';
import { Button, Modal, useActions, useAppSelector } from 'shared';
import { BasketListProducts, BasketOrder, ConfirmingOrder, ConfirmModal } from 'widgets';

const BasketPage: FC = () => {
  const [orderNum, setOrderNum] = useState<number | null>(null);

  const navigate = useNavigate();

  const step = useAppSelector(selectBasketStep);
  const totalPrice = useAppSelector(selectTotalPrice);
  const isShowModal = useAppSelector(selectIsShowModal);
  const countProducts = useAppSelector(selectCountProducts);

  const { setIsShowModal } = useActions(serviceActions);
  const { setBasketStep, clearBasket } = useActions(basketActions);
  const onClickGoBack = (): void => {
    setBasketStep(null);
  };

  const onClickClearBasket = (): void => {
    clearBasket();
  };

  const onClickCloseModal = (): void => {
    setOrderNum(null);
    setIsShowModal(false);
    setBasketStep(null);
    navigate('/');
  };

  const getBasketStepContent = () => {
    switch (step) {
      case 'basket':
        return <BasketListProducts />;
      case 'order':
        return <BasketOrder />;
      case 'confirm':
        return <ConfirmingOrder />;
      default:
        return null;
    }
  };

  return (
    <section className="basketPage">
      {step && <BasketSteps step={step} />}
      {getBasketStepContent()}
      {step !== 'confirm' && step !== null && (
        <div className="basketPage__footer">
          <div className="basketPage__footer_firstBlock">
            <NavLink to="/" className="basketPage__footer_goBack" onClick={onClickGoBack}>
              <img src="public/icons/arrow-left.png" alt="arrow" />
              <span>Продолжить покупки</span>
            </NavLink>
            {step === 'basket' && totalPrice !== 0 && (
              <Button title="Очистить корзину" onClick={onClickClearBasket} type="outlined" size="small" />
            )}
          </div>
          <div className="basketPage__footer_totalPrice">
            <span>{`Итого: ${totalPrice} USD`}</span>
            <p>{`Общее количество товаров: ${countProducts}`}</p>
          </div>
          {step && totalPrice !== 0 && <PlaceOrder step={step} setOrderNum={setOrderNum} />}
        </div>
      )}
      {isShowModal && (
        <Modal top="15%" left="25%" onClickClose={onClickCloseModal}>
          <ConfirmModal orderNum={orderNum} />
        </Modal>
      )}
    </section>
  );
};

export default BasketPage;
