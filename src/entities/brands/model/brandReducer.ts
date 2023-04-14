import { createSlice } from '@reduxjs/toolkit';

import { initialBrandState } from 'entities/brands/model/constants/initialBrandState';
import { getBrands } from 'entities/brands/model/thunks';

const slice = createSlice({
  reducers: {},
  name: 'brandReducer',
  initialState: initialBrandState,
  extraReducers: builder => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      if (action.payload) {
        state.items = action.payload;
        state.count = action.payload.length;
      }
    });
  },
});

export const brandReducer = slice.reducer;
export const asyncActions = slice.actions;
