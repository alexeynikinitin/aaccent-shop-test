import React, { FC, useEffect } from 'react';

import { selectBrands } from 'entities/brands/model/selectors';
import { brandsActions } from 'entities/service/config/root-store';
import { useActions, useAppSelector } from 'shared/hooks';

const CatalogPage: FC = () => {
  const { items } = useAppSelector(selectBrands);
  const { getBrands } = useActions(brandsActions);

  useEffect(() => {
    getBrands();
  }, [getBrands]);

  return (
    <div>
      {items.map(item => (
        <span key={item.id}>{item.title}</span>
      ))}
    </div>
  );
};

export default CatalogPage;
