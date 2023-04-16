import { IFilterSettings } from '../../api/types';

import { RootStateType } from 'shared/types';

export const selectFilterSettings = (state: RootStateType): IFilterSettings => state.catalog.filterSettings;
