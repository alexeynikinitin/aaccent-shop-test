import { IPersonalData } from './IPersonalData';

export interface IPersonalDataSettings {
  placeholder: string;
  id: keyof IPersonalData;
}
