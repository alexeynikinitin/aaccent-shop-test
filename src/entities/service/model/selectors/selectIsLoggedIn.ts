import { RootStateType } from 'shared/types';

export const selectIsLoggedIn = (state: RootStateType): boolean => state.service.isLoggedIn;
