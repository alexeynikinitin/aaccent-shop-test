import React, { FC } from 'react';

import { BasketStepType } from 'entities/basket/api/types';

import './index.scss';

export const BasketSteps: FC<IBasketSteps> = ({ step }) => {
  return (
    <div className="basketSteps">
      <div className="basketSteps__step">
        <div className="basketSteps__step_square activeStep">
          <img src="/aaccent-shop-test/icons/basket-white.png" alt="step" />
        </div>
        <h4 className={`basketSteps__step_title ${step === 'basket' ? 'activeStep__text' : 'null'}`}>Корзина</h4>
      </div>
      <span className="basketSteps__dash" />
      <div className="basketSteps__step">
        <div className={`basketSteps__step_square ${step === 'order' || step === 'confirm' ? 'activeStep' : 'null'}`}>
          <span>2</span>
        </div>
        <h4 className={`basketSteps__step_title ${step === 'order' ? 'activeStep__text' : 'null'}`}>Оформление</h4>
      </div>
      <span className="basketSteps__dash" />
      <div className="basketSteps__step">
        <div className={`basketSteps__step_square ${step === 'confirm' ? 'activeStep' : 'null'}`}>
          <span>3</span>
        </div>
        <h4 className={`basketSteps__step_title ${step === 'confirm' ? 'activeStep__text' : 'null'}`}>Подтверждение</h4>
      </div>
    </div>
  );
};

interface IBasketSteps {
  step: BasketStepType;
}
