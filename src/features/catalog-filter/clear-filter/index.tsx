import React from 'react';

import './index.scss';
import { brandsActions, catalogActions, selectFilterSettings } from 'entities';
import { Button, useActions, useAppSelector } from 'shared';

export const ClearFilter = () => {
  const filterSettings = useAppSelector(selectFilterSettings);

  const { clearFilter } = useActions(catalogActions);
  const { clearCheckedBrands } = useActions(brandsActions);

  if (filterSettings.checkedBrands?.length || filterSettings.priceRange) {
    const onClick = (): void => {
      clearFilter();
      clearCheckedBrands();
    };

    return (
      <div className="clearFilter">
        <Button title="Сбросить фильтр" onClick={onClick} type="outlined" />
      </div>
    );
  }

  return null;
};
