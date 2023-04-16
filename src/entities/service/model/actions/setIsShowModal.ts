import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { IServiceState } from '../../api/types';

export const setIsShowModal = (state: Draft<IServiceState>, action: PayloadAction<boolean>) => {
  state.isShowModal = action.payload;
};
