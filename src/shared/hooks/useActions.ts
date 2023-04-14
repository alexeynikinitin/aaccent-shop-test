import { useMemo } from 'react';

import { useDispatch } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';

import { AppDispatchType } from 'shared/types';

export const useAppDispatch = () => useDispatch<AppDispatchType>();

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
  const dispatch = useAppDispatch();

  return useMemo(() => {
    return bindActionCreators<unknown, T>(actions, dispatch);
  }, [actions, dispatch]);
};
