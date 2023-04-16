import { IBasketState } from 'entities/basket/api/types';

export const initialBasketState: IBasketState = {
  step: null,
  totalPrice: 0,
  countProducts: 0,
  selectedProducts: [],
  orderInfo: {
    addressData: { home: '', street: '', city: '' },
    personalData: { name: '', email: '', surname: '', telephone: '' },
    deliveryData: { deliveryCity: false, deliveryCountry: false, pickup: false },
  },
};
