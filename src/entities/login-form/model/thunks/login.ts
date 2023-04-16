import { createAsyncThunk } from '@reduxjs/toolkit';

import { ILoginInfo } from 'entities/login-form/api/types';
import { IRejectedValue } from 'shared/types/store/IRejectedValue';

export const login = createAsyncThunk<boolean, ILoginInfo, IRejectedValue>(
  'serviceReducer/login',
  async ({ login, password }, { rejectWithValue }) => {
    try {
      return new Promise(res => {
        setTimeout(() => {
          if (login === 'admin' && password === 'admin') {
            res(true);
          } else {
            rejectWithValue({ errorMessage: 'Неверный логин или пароль' });
          }
        }, 2000);
      });
    } catch (error: unknown) {
      return rejectWithValue({
        errorMessage: 'Ошибка авторизации',
      });
    }
  },
);
