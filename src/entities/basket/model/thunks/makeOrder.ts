import { createAsyncThunk } from '@reduxjs/toolkit';

import { IBasketOrderInfo } from 'entities/basket/api/types';
import { IRejectedValue } from 'shared/types/store/IRejectedValue';

const DALAY = 2000;

export const makeOrder = createAsyncThunk<number, IBasketOrderInfo, IRejectedValue>(
  'basketReducer/makeOrder',
  async (arg, { rejectWithValue }) => {
    try {
      return new Promise(resolve => {
        setTimeout(async () => {
          const response = await fetch('https://app.aaccent.su/js/confirm.php', {
            method: 'POST',
            body: JSON.stringify(arg),
          });

          if (response.ok) {
            const { result } = (await response.json()) as { result: string };

            if (result === 'ok') {
              resolve(new Date().getTime());
            }
          } else {
            rejectWithValue({ errorMessage: 'Ошибка оформления заказа' });
          }
        }, DALAY);
      });
    } catch (error: unknown) {
      return rejectWithValue({
        errorMessage: 'Ошибка авторизации',
      });
    }
  },
);
