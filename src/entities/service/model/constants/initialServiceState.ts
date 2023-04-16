import { IServiceState } from 'entities/service/api/types';

export const initialServiceState: IServiceState = {
  error: null,
  isFetching: false,
  isLoggedIn: false,
  isShowModal: false,
};
