import { IRejectedValueInfo, RootStateType } from 'shared/types';

export const selectError = (state: RootStateType): IRejectedValueInfo | null => state.service.error;
