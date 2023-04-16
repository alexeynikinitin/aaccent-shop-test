import React, { FC } from 'react';

// eslint-disable-next-line import/order
import { Checkbox, Input, useActions, useAppSelector } from 'shared';

import './index.scss';
import { addressDataSettings, deliveryDataSettings, personalDataSettings } from './constants';
import { IAddressData, IDeliveryData, IPersonalData } from './types';

import { basketActions, selectOrderInfo } from 'entities';

export const BasketOrder: FC = () => {
  const { addressData, deliveryData, personalData } = useAppSelector(selectOrderInfo);

  const { setAddressData, setDeliveryData, setPersonalData } = useActions(basketActions);

  const onChangePersonalData = (value: string, id?: string) => {
    if (id) {
      setPersonalData({ id: id as keyof IPersonalData, value });
    }
  };

  const onChangeAddressData = (value: string, id?: string) => {
    if (id) {
      setAddressData({ id: id as keyof IAddressData, value });
    }
  };

  const onChangeDeliveryData = (id?: string) => {
    if (id) {
      setDeliveryData({ id: id as keyof IDeliveryData });
    }
  };

  return (
    <div className="basketOrder">
      <div className="basketOrder__personalData">
        <p className="basketOrder__personalData_title">Личные данные</p>
        {personalDataSettings.map(({ id, placeholder }) => (
          <Input
            key={id}
            id={id}
            value={personalData[id]}
            placeholder={placeholder}
            onChangeInput={onChangePersonalData}
            className="basketOrder__personalData_input"
          />
        ))}
      </div>
      <div className="basketOrder__delivery">
        <p className="basketOrder__delivery_title">Доставка</p>
        <div>
          {deliveryDataSettings.map(({ id, title, subtitle }) => (
            <div key={id} className="basketOrder__delivery_item">
              <div className="basketOrder__delivery_item-check">
                <Checkbox id={id} checked={deliveryData[id]} onClickCheckbox={onChangeDeliveryData} />
                <p className="basketOrder__delivery_item-title">{title}</p>
              </div>
              {subtitle && <span className="basketOrder__delivery_item-subtitle">{subtitle}</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="basketOrder__personalData">
        <p className="basketOrder__personalData_title">Адрес</p>
        {addressDataSettings.map(({ id, placeholder }) => (
          <Input
            key={id}
            id={id}
            value={addressData[id]}
            placeholder={placeholder}
            onChangeInput={onChangeAddressData}
            className="basketOrder__personalData_input"
          />
        ))}
      </div>
    </div>
  );
};
