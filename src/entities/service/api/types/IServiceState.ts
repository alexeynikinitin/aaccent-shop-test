import { IRejectedValueInfo } from 'shared/types';

export interface IServiceState {
  isFetching: boolean;
  isLoggedIn: boolean;
  error: IRejectedValueInfo | null;
}
