import React, { FC } from 'react';

import { basketActions, BasketStepType, selectOrderInfo, serviceActions } from 'entities';
import { Button, useActions, useAppSelector } from 'shared';

export const PlaceOrder: FC<IPlaceOrder> = ({ step, setOrderNum }) => {
  const orderInfo = useAppSelector(selectOrderInfo);
  const { setBasketStep, makeOrder } = useActions(basketActions);
  const { setIsShowModal } = useActions(serviceActions);

  const onClickOrder = () => setBasketStep('order');

  const onClickSendOrder = async () => {
    setBasketStep('confirm');

    // @ts-ignore
    const { meta, payload } = await makeOrder(orderInfo);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (meta.requestStatus === 'fulfilled') {
      setOrderNum(payload as number);
      setIsShowModal(true);
    }
  };

  switch (step) {
    case 'basket':
      return <Button size="big" title="Оформить заказ" type="primary" onClick={onClickOrder} />;
    case 'order':
      return <Button size="big" title="Отправить заказ" type="primary" onClick={onClickSendOrder} />;
    default:
      return null;
  }
};

interface IPlaceOrder {
  step: BasketStepType;
  setOrderNum: (orderNum: number) => void;
}
