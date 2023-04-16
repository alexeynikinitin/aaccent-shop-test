import { RootStateType } from 'shared/types';

export const selectIsShowModal = (state: RootStateType): boolean => state.service.isShowModal;
