import { IAddressData, IDeliveryData, IPersonalData } from 'widgets/basket/basket-order/types';

export interface IBasketOrderInfo {
  addressData: IAddressData;
  personalData: IPersonalData;
  deliveryData: IDeliveryData;
}
