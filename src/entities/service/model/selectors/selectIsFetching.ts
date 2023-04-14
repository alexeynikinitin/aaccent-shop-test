import { RootStateType } from 'shared/types';

export const selectIsFetching = (state: RootStateType): boolean => state.service.isFetching;
