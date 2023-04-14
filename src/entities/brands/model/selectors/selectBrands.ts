import { IBrandState } from 'entities/brands/api/types';
import { RootStateType } from 'shared/types';

export const selectBrands = (state: RootStateType): IBrandState => state.brands;
