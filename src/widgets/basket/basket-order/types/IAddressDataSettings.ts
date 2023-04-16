import { IAddressData } from './IAddressData';

export interface IAddressDataSettings {
  placeholder: string;
  id: keyof IAddressData;
}
