import React, { FC } from 'react';

import './index.scss';
import { Button } from 'shared';

export const ConfirmModal: FC<IConfirmModal> = ({ orderNum }) => {
  return (
    <div className="confirmModal">
      <div className="confirmModal__firstBlock">
        <h2>Заказ оформлен</h2>
        <h3>{`Ваш заказ №${orderNum ?? ''}`}</h3>
        <p>Спасибо за Ваш заказ!</p>
        <p>Номер вашего заказа отправлен вам на электронную почту.</p>
        <p>Сотрудник интернет-магазина свяжется с Вами в ближайшее время для подтверждения заказа</p>
      </div>
      <div className="confirmModal__secondBlock">
        <p>По любым вопросам обращайтесь:</p>
        <span>+375 (29) 547 89 75</span>
        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <Button title="Обратный звонок" onClick={() => {}} type="outlined" />
      </div>
    </div>
  );
};

interface IConfirmModal {
  orderNum: number | null;
}
