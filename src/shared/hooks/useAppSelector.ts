import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootStateType } from 'shared/types';

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
