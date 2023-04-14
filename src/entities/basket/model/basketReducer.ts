import { createSlice } from '@reduxjs/toolkit';

import * as actions from 'entities/basket/model/actions';
import { initialBasketState } from 'entities/basket/model/constants/initialBasketState';
import { makeOrder } from 'entities/basket/model/thunks';

const slice = createSlice({
  reducers: actions,
  name: 'basketReducer',
  initialState: initialBasketState,
  extraReducers: builder => {
    builder.addCase(makeOrder.fulfilled, () => {
      return initialBasketState;
    });
  },
});

export const basketReducer = slice.reducer;
export const asyncActions = slice.actions;
