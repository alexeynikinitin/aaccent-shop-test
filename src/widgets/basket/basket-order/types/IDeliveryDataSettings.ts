import { IDeliveryData } from './IDeliveryData';

export interface IDeliveryDataSettings {
  title: string;
  subtitle?: string;
  id: keyof IDeliveryData;
}
