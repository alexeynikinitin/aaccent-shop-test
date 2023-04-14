import { createSlice } from '@reduxjs/toolkit';

import { initialCatalogsState } from 'entities/catalog-list/model/constants';
import { getCatalog } from 'entities/catalog-list/model/thunks';

const slice = createSlice({
  reducers: {},
  name: 'catalogReducer',
  initialState: initialCatalogsState,
  extraReducers: builder => {
    builder.addCase(getCatalog.fulfilled, (state, action) => {
      if (action.payload) {
        state.items = action.payload;
        state.count = action.payload.length;
      }
    });
  },
});

export const catalogReducer = slice.reducer;
export const asyncActions = slice.actions;
