import { IRejectedValueInfo } from 'shared/types';

export interface IServiceState {
  isFetching: boolean;
  isLoggedIn: boolean;
  isShowModal: boolean;
  error: IRejectedValueInfo | null;
}
